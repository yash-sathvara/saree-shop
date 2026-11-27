import { useMemo, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { LOOKS, type LookItem } from '../../data/looks'
import { PieceThumbnail } from './PieceThumbnail'
import '../../assets/css/TryTheLookSection.css'

gsap.registerPlugin(ScrollTrigger)

const formatINR = (amount: number) =>
  `₹${amount.toLocaleString('en-IN')}`

export function TryTheLookSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const activeVisualRef = useRef<HTMLDivElement>(null)
  const { addToCartWithFlight } = useCart()
  const [centerIndex, setCenterIndex] = useState(2) // Start focused on Rani Pink Peacock
  const [inspectedLook, setInspectedLook] = useState<LookItem | null>(null)
  const [activePieceId, setActivePieceId] = useState<string>('saree')
  const [selectedPieceIds, setSelectedPieceIds] = useState<string[]>([
    'saree',
    'blouse',
    'choker',
    'jhumka',
    'oddiyanam',
    'bangles',
  ])
  const [addedFeedback, setAddedFeedback] = useState(false)

  useGSAP(
    () => {
      if (!sectionRef.current) return
      gsap.fromTo(
        sectionRef.current.querySelector('.noolam-lookbook-header'),
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        },
      )
    },
    { scope: sectionRef },
  )

  const currentLook = inspectedLook ?? LOOKS[centerIndex]

  const totalPrice = useMemo(
    () =>
      currentLook.pieces
        .filter((p) => selectedPieceIds.includes(p.id))
        .reduce((sum, p) => sum + p.price, 0),
    [currentLook, selectedPieceIds],
  )

  const togglePiece = (id: string) => {
    setSelectedPieceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const handleOpenLook = (look: LookItem, idx: number) => {
    setCenterIndex(idx)
    setInspectedLook(look)
    setActivePieceId('saree')
    setSelectedPieceIds(look.pieces.map((p) => p.id))
    setAddedFeedback(false)
  }

  const handleShift = (dir: -1 | 1) => {
    setCenterIndex((prev) => (prev + dir + LOOKS.length) % LOOKS.length)
  }

  const handleAddFullLook = (buttonEl: HTMLElement | null) => {
    const selected = currentLook.pieces.filter((p) =>
      selectedPieceIds.includes(p.id),
    )
    if (selected.length === 0) return

    addToCartWithFlight({
      items: selected.map((p) => ({
        id: `${currentLook.id}-${p.id}`,
        name: p.name,
        price: p.price,
        image: currentLook.image,
        color: p.swatchColor,
      })),
      sourceEl: activeVisualRef.current ?? buttonEl,
      previewImage: currentLook.image,
      previewColor: selected[0].swatchColor,
    })

    setAddedFeedback(true)
    window.setTimeout(() => setAddedFeedback(false), 1800)
  }

  const getCarouselStyle = (idx: number) => {
    const total = LOOKS.length
    let offset = idx - centerIndex
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total

    const abs = Math.abs(offset)
    const translateX = offset * 175
    const scale = Math.max(0.58, 1 - abs * 0.14)
    const opacity = abs > 3 ? 0 : Math.max(0.25, 1 - abs * 0.24)
    const blur = abs >= 2 ? (abs - 1) * 1.4 : 0
    const zIndex = 10 - abs

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      pointerEvents: (abs > 3 ? 'none' : 'auto') as 'none' | 'auto',
    }
  }

  return (
    <section
      id="try-the-look"
      ref={sectionRef}
      className="noolam-lookbook-section"
    >
      <div className="noolam-lookbook-inner">
        {!inspectedLook ? (
          <>
            <div className="noolam-lookbook-header">
              <div>
                <div className="noolam-lookbook-eyebrow">
                  STYLED HEAD TO TOE
                </div>
                <h2 className="noolam-lookbook-title">
                  Try the{' '}
                  <span className="noolam-lookbook-title-accent">Look.</span>
                </h2>
                <p className="noolam-lookbook-subtitle">
                  Eight looks, styled head to toe. Tap a look to see the pieces.
                </p>
              </div>
            </div>

            <div className="noolam-runway-wrap">
              <div ref={activeVisualRef} className="noolam-runway-stage">
                <button
                  type="button"
                  className="noolam-runway-nav-btn is-prev"
                  aria-label="Previous look"
                  onClick={() => handleShift(-1)}
                >
                  <ChevronLeft size={18} />
                </button>

                {LOOKS.map((look, idx) => (
                  <button
                    key={look.id}
                    type="button"
                    style={getCarouselStyle(idx)}
                    className={`noolam-runway-model-btn ${idx === centerIndex ? 'is-center' : ''
                      }`}
                    onClick={() =>
                      idx === centerIndex
                        ? handleOpenLook(look, idx)
                        : setCenterIndex(idx)
                    }
                  >
                    <img
                      src={look.image}
                      alt={look.title}
                      className="noolam-runway-model-img"
                    />
                    <span className="noolam-runway-model-pill">
                      {idx === centerIndex ? `Inspect · ${look.title}` : look.title}
                    </span>
                  </button>
                ))}

                <button
                  type="button"
                  className="noolam-runway-nav-btn is-next"
                  aria-label="Next look"
                  onClick={() => handleShift(1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <PiecesSidebar
                look={currentLook}
                activePieceId={activePieceId}
                selectedPieceIds={selectedPieceIds}
                totalPrice={totalPrice}
                addedFeedback={addedFeedback}
                onHoverPiece={setActivePieceId}
                onTogglePiece={togglePiece}
                onAddFullLook={handleAddFullLook}
              />
            </div>
          </>
        ) : (
          <div className="noolam-inspector-wrap">
            <div className="noolam-inspector-stage">
              <div className="noolam-inspector-topbar">
                <div>
                  <span className="noolam-inspector-code">
                    {inspectedLook.code}
                  </span>
                  <h3 className="noolam-inspector-name">
                    {inspectedLook.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="noolam-back-btn"
                  onClick={() => setInspectedLook(null)}
                >
                  <ArrowLeft size={14} />
                  <span>All 8 Looks</span>
                </button>
              </div>

              <div ref={activeVisualRef} className="noolam-model-hotspot-box">
                <img
                  src={inspectedLook.image}
                  alt={inspectedLook.title}
                  className="noolam-inspector-img"
                />
                {inspectedLook.pieces.map((piece) => (
                  <button
                    key={piece.id}
                    type="button"
                    style={{ left: `${piece.x}%`, top: `${piece.y}%` }}
                    className={`noolam-hotspot-pin ${activePieceId === piece.id ? 'is-active' : ''
                      }`}
                    aria-label={`${piece.number}. ${piece.name}`}
                    title={`${piece.name} — ${formatINR(piece.price)}`}
                    onMouseEnter={() => setActivePieceId(piece.id)}
                    onClick={() => setActivePieceId(piece.id)}
                  >
                    {piece.number}
                  </button>
                ))}
              </div>

              <div className="noolam-look-pills">
                {LOOKS.map((look, idx) => (
                  <button
                    key={look.id}
                    type="button"
                    className={`noolam-look-pill ${inspectedLook.id === look.id ? 'is-active' : ''
                      }`}
                    onClick={() => handleOpenLook(look, idx)}
                  >
                    {look.code}
                  </button>
                ))}
              </div>
            </div>

            <PiecesSidebar
              look={inspectedLook}
              activePieceId={activePieceId}
              selectedPieceIds={selectedPieceIds}
              totalPrice={totalPrice}
              addedFeedback={addedFeedback}
              onHoverPiece={setActivePieceId}
              onTogglePiece={togglePiece}
              onAddFullLook={handleAddFullLook}
            />
          </div>
        )}
      </div>
    </section>
  )
}

interface PiecesSidebarProps {
  look: LookItem
  activePieceId: string
  selectedPieceIds: string[]
  totalPrice: number
  addedFeedback: boolean
  onHoverPiece: (id: string) => void
  onTogglePiece: (id: string) => void
  onAddFullLook: (buttonEl: HTMLElement | null) => void
}

function PiecesSidebar({
  look,
  activePieceId,
  selectedPieceIds,
  totalPrice,
  addedFeedback,
  onHoverPiece,
  onTogglePiece,
  onAddFullLook,
}: PiecesSidebarProps) {
  return (
    <aside className="noolam-pieces-panel" aria-label="Look Pieces">
      {look.pieces.map((piece) => {
        const isSelected = selectedPieceIds.includes(piece.id)
        return (
          <div
            key={piece.id}
            className={`noolam-piece-row ${activePieceId === piece.id ? 'is-active' : ''
              }`}
            onMouseEnter={() => onHoverPiece(piece.id)}
            onClick={() => onHoverPiece(piece.id)}
          >
            <div className="noolam-piece-swatch">
              <PieceThumbnail
                category={piece.category}
                primaryColor={piece.swatchColor}
                accentColor={piece.accentColor}
              />
            </div>
            <div className="noolam-piece-meta">
              <p className="noolam-piece-name">{piece.name}</p>
              <p className="noolam-piece-price">{formatINR(piece.price)}</p>
            </div>
            <button
              type="button"
              className={`noolam-piece-toggle ${isSelected ? 'is-selected' : ''}`}
              aria-label={isSelected ? `Remove ${piece.name}` : `Add ${piece.name}`}
              onClick={(e) => {
                e.stopPropagation()
                onTogglePiece(piece.id)
              }}
            >
              {isSelected ? <Check size={13} /> : <Plus size={13} />}
            </button>
          </div>
        )
      })}

      <div className="noolam-pieces-footer">
        <div className="noolam-pieces-total-row">
          <span>Complete the look ({selectedPieceIds.length} pieces)</span>
          <span className="noolam-pieces-total-price">
            {formatINR(totalPrice)}
          </span>
        </div>

        <button
          type="button"
          className="noolam-add-look-btn"
          onClick={(e) => onAddFullLook(e.currentTarget)}
        >
          <ShoppingBag size={15} />
          <span>
            {addedFeedback ? 'Added to Bag!' : 'Add full look to bag'}
          </span>
        </button>
      </div>
    </aside>
  )
}
