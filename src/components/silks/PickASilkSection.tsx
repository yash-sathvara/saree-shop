import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { SILK_CARDS, type SilkCardItem } from '../../data/silks'
import '../../assets/css/PickASilkSection.css'

gsap.registerPlugin(ScrollTrigger)

const formatINR = (amount: number) =>
  `₹${amount.toLocaleString('en-IN')}`

const CARD_SPACING = 274

export function PickASilkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const slotRefs = useRef<(HTMLDivElement | null)[]>([])
  const pausedRef = useRef(false)
  const [likedIds, setLikedIds] = useState<string[]>([])
  const { addToCartWithFlight } = useCart()

  useGSAP(
    () => {
      if (!sectionRef.current) return
      gsap.fromTo(
        sectionRef.current.querySelector('.noolam-silks-header'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )
    },
    { scope: sectionRef },
  )

  // Dynamic parabolic arch & tilt relative to viewport center
  useEffect(() => {
    const total = SILK_CARDS.length
    const totalWidth = total * CARD_SPACING
    let scrollX = 0
    let rafId = 0

    const updateCurve = () => {
      if (!pausedRef.current) {
        scrollX = (scrollX + 1.65) % totalWidth
      }

      const halfSpan = totalWidth / 2
      const normDivisor = Math.max(420, window.innerWidth * 0.48)

      for (let i = 0; i < total; i++) {
        const slot = slotRefs.current[i]
        if (!slot) continue

        let x = ((i * CARD_SPACING - scrollX) % totalWidth + totalWidth) % totalWidth
        if (x > halfSpan) x -= totalWidth

        const norm = x / normDivisor
        const arcY = norm * norm * 62
        const tiltDeg = norm * 9.5
        const scale = Math.max(0.88, 1 - Math.abs(norm) * 0.04)

        slot.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), ${arcY.toFixed(1)}px, 0) rotate(${tiltDeg.toFixed(2)}deg) scale(${scale.toFixed(3)})`
        slot.style.zIndex = String(20 - Math.round(Math.abs(norm) * 10))
      }

      rafId = window.requestAnimationFrame(updateCurve)
    }

    rafId = window.requestAnimationFrame(updateCurve)
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  const toggleLike = (id: string) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const handleAddSilk = (card: SilkCardItem, cardEl: HTMLElement | null) => {
    addToCartWithFlight({
      items: [
        {
          id: card.id,
          name: `${card.titleLines[0]} ${card.titleLines[1]}`,
          price: card.price,
          image: card.image,
          color: card.bgColor,
        },
      ],
      sourceEl: cardEl,
      previewImage: card.image,
      previewColor: card.bgColor,
    })
  }

  return (
    <section id="pick-a-silk" ref={sectionRef} className="noolam-silks-section">
      <div className="noolam-silks-header">
        <h2 className="noolam-silks-title">
          Pick a <span className="noolam-silks-title-accent">Silk</span>
        </h2>

        <p className="noolam-silks-hint">
          Tilt a card, press it, poke the silk. Hit{' '}
          <span className="noolam-silks-hint-plus">+</span> to drop a saree into
          your bag.
        </p>
      </div>

      <div
        className="noolam-silks-carousel-wrap"
        onMouseEnter={() => {
          pausedRef.current = true
        }}
        onMouseLeave={() => {
          pausedRef.current = false
        }}
      >
        <div className="noolam-silks-track">
          {SILK_CARDS.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => {
                slotRefs.current[idx] = el
              }}
              className="noolam-silk-card-slot"
            >
              <SilkTiltCard
                card={card}
                isLiked={likedIds.includes(card.id)}
                onToggleLike={() => toggleLike(card.id)}
                onAddToCart={(el) => handleAddSilk(card, el)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="noolam-silks-footer-label">THE COLLECTION</div>
    </section>
  )
}

interface SilkTiltCardProps {
  card: SilkCardItem
  isLiked: boolean
  onToggleLike: () => void
  onAddToCart: (cardEl: HTMLElement | null) => void
}

function SilkTiltCard({
  card,
  isLiked,
  onToggleLike,
  onAddToCart,
}: SilkTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [poked, setPoked] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width
    const yPct = (e.clientY - rect.top) / rect.height
    const rotateY = (xPct - 0.5) * 16
    const rotateX = (0.5 - yPct) * 16

    el.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    el.style.setProperty('--sheen-x', `${(xPct * 100).toFixed(1)}%`)
    el.style.setProperty('--sheen-y', `${(yPct * 100).toFixed(1)}%`)
  }

  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  const handlePoke = () => {
    setPoked(true)
    window.setTimeout(() => setPoked(false), 180)
  }

  return (
    <div
      ref={cardRef}
      className={`noolam-silk-card ${card.darkText ? 'is-dark-text' : ''} ${poked ? 'is-poked' : ''
        }`}
      style={{
        backgroundColor: card.bgColor,
        color: card.darkText ? '#1c1214' : '#ffffff',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handlePoke}
    >
      <div className="noolam-silk-card-sheen" />

      <div className="noolam-silk-card-top">
        <h3 className="noolam-silk-card-title">
          {card.titleLines[0]}
          <br />
          {card.titleLines[1]}
        </h3>

        <button
          type="button"
          className={`noolam-silk-wish-btn ${isLiked ? 'is-liked' : ''}`}
          aria-label={`Save ${card.titleLines.join(' ')} to wishlist`}
          onClick={(e) => {
            e.stopPropagation()
            onToggleLike()
          }}
        >
          <Heart
            size={13}
            fill={isLiked ? 'currentColor' : 'none'}
            strokeWidth={2}
          />
        </button>
      </div>

      <img
        src={card.image}
        alt={card.titleLines.join(' ')}
        className="noolam-silk-model-img"
        loading="lazy"
      />

      <div className="noolam-silk-card-bottom">
        <span className="noolam-silk-price">{formatINR(card.price)}</span>

        <button
          type="button"
          className="noolam-silk-add-btn"
          aria-label={`Add ${card.titleLines.join(' ')} to bag`}
          onClick={(e) => {
            e.stopPropagation()
            onAddToCart(cardRef.current)
          }}
        >
          <Plus size={16} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  )
}
