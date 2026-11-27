import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import gsap from 'gsap'

export interface CartItemInput {
  id: string
  name: string
  price: number
  image?: string
  color?: string
}

export interface CartEntry extends CartItemInput {
  quantity: number
}

export interface FlyToCartOptions {
  items: CartItemInput[]
  sourceEl: HTMLElement | null
  previewImage?: string
  previewColor?: string
}

interface CartContextValue {
  cartItems: CartEntry[]
  cartCount: number
  cartIconRef: React.RefObject<HTMLButtonElement | null>
  addToCartWithFlight: (options: FlyToCartOptions) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartEntry[]>([])
  const cartIconRef = useRef<HTMLButtonElement | null>(null)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const commitItems = useCallback((items: CartItemInput[]) => {
    setCartItems((prev) => {
      const next = [...prev]
      for (const incoming of items) {
        const existingIdx = next.findIndex((entry) => entry.id === incoming.id)
        if (existingIdx >= 0) {
          next[existingIdx] = {
            ...next[existingIdx],
            quantity: next[existingIdx].quantity + 1,
          }
        } else {
          next.push({ ...incoming, quantity: 1 })
        }
      }
      return next
    })
  }, [])

  const addToCartWithFlight = useCallback(
    ({ items, sourceEl, previewImage, previewColor }: FlyToCartOptions) => {
      if (items.length === 0) return

      const targetEl = cartIconRef.current
      if (!sourceEl || !targetEl) {
        commitItems(items)
        return
      }

      const startRect = sourceEl.getBoundingClientRect()
      const endRect = targetEl.getBoundingClientRect()

      // Ensure navbar is visible if user is in a section where it's shown
      const startSize = Math.min(88, Math.max(54, Math.min(startRect.width, startRect.height) * 0.4))
      const startX = startRect.left + startRect.width / 2 - startSize / 2
      const startY = startRect.top + startRect.height / 2 - startSize / 2
      const endX = endRect.left + endRect.width / 2 - startSize / 2
      const endY = endRect.top + endRect.height / 2 - startSize / 2

      const flyer = document.createElement('div')
      Object.assign(flyer.style, {
        position: 'fixed',
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${startSize}px`,
        height: `${startSize}px`,
        borderRadius: '18px',
        zIndex: '9999',
        pointerEvents: 'none',
        overflow: 'hidden',
        boxShadow: '0 16px 36px rgba(158, 27, 36, 0.35)',
        border: '2px solid #f3d26b',
        backgroundColor: previewColor ?? '#9e1b24',
        transformOrigin: 'center center',
        willChange: 'transform, opacity',
      })

      if (previewImage) {
        const img = document.createElement('img')
        img.src = previewImage
        Object.assign(img.style, {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        })
        flyer.appendChild(img)
      }

      document.body.appendChild(flyer)

      const dx = endX - startX
      const dy = endY - startY

      gsap.timeline({
        onComplete: () => {
          flyer.remove()
          commitItems(items)
          gsap.fromTo(
            targetEl,
            { scale: 1 },
            {
              scale: 1.24,
              duration: 0.16,
              yoyo: true,
              repeat: 1,
              ease: 'power2.out',
            },
          )
        },
      })
        .to(flyer, {
          x: dx * 0.45,
          y: dy * 0.35 - 55,
          scale: 0.62,
          rotation: 8,
          duration: 0.32,
          ease: 'power2.out',
        })
        .to(flyer, {
          x: dx,
          y: dy,
          scale: 0.12,
          rotation: 16,
          opacity: 0.2,
          duration: 0.38,
          ease: 'power2.in',
        })
    },
    [commitItems],
  )

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, cartIconRef, addToCartWithFlight }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
