import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MOOD_CARDS } from '../../data/moods'
import '../../assets/css/SixMoodsSection.css'

gsap.registerPlugin(ScrollTrigger)

const RIBBON_LABELS = [
  'KANJIVARAM',
  'PURE ZARI',
  'HANDWOVEN',
  'TEMPLE BORDERS',
  'BRIDAL SILK',
]

const JHAROKHA_OUTER_PATH =
  'M 100,4 Q 106,20 120,26 Q 136,24 142,38 Q 158,38 164,56 Q 180,58 184,78 Q 192,88 188,104 L 196,104 L 196,316 L 4,316 L 4,104 L 12,104 Q 8,88 16,78 Q 20,58 36,56 Q 42,38 58,38 Q 64,24 80,26 Q 94,20 100,4 Z'

const JHAROKHA_CLIP_PATH_NORMALIZED =
  'M 0.500,0.0375 Q 0.530,0.0813 0.595,0.0969 Q 0.670,0.0938 0.695,0.1344 Q 0.770,0.1344 0.800,0.1875 Q 0.875,0.1938 0.895,0.2531 Q 0.930,0.2813 0.915,0.3375 L 0.955,0.3375 L 0.955,0.9719 L 0.045,0.9719 L 0.045,0.3375 L 0.085,0.3375 Q 0.070,0.2813 0.105,0.2531 Q 0.125,0.1938 0.200,0.1875 Q 0.230,0.1344 0.305,0.1344 Q 0.330,0.0938 0.405,0.0969 Q 0.470,0.0813 0.500,0.0375 Z'

export function SixMoodsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )

      const cards = cardsRef.current.querySelectorAll('.noolam-mood-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 38, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 82%',
            once: true,
          },
        },
      )
    },
    { scope: sectionRef },
  )

  const repeatedRibbon = [...RIBBON_LABELS, ...RIBBON_LABELS, ...RIBBON_LABELS]

  return (
    <section id="six-moods" ref={sectionRef} className="noolam-moods-section">
      {/* Shared Responsive SVG Image Mask (objectBoundingBox) */}
      <svg width="0" height="0" className="noolam-svg-defs" aria-hidden="true">
        <defs>
          <clipPath id="noolam-jharokha-clip" clipPathUnits="objectBoundingBox">
            <path d={JHAROKHA_CLIP_PATH_NORMALIZED} />
          </clipPath>
        </defs>
      </svg>

      {/* Wavy Crimson Transition Ribbon */}
      <div className="noolam-moods-ribbon-wrap" aria-hidden="true">
        <div className="noolam-moods-ribbon-track">
          {repeatedRibbon.map((label, idx) => (
            <span key={`${label}-${idx}`} className="noolam-moods-ribbon-item">
              <span>{label}</span>
              <span className="noolam-moods-ribbon-diamond">◆</span>
            </span>
          ))}
        </div>

        <svg
          className="noolam-moods-ribbon-wave"
          viewBox="0 0 1440 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,8 C240,24 480,0 720,12 C960,24 1200,0 1440,10 L1440,24 L0,24 Z"
            fill="#faf7f2"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="noolam-moods-inner">
        <div ref={headerRef} className="noolam-moods-header">
          <div>
            <div className="noolam-moods-eyebrow">THE NOOLAM ARCHIVE</div>
            <h2 className="noolam-moods-title">
              Six Moods.{' '}
              <span className="noolam-moods-title-accent">Timeless Drapes</span>
            </h2>
          </div>

          <p className="noolam-moods-copy">
            Woven by hand, worn for a lifetime. Six silk stories, from quiet
            mornings to festive evenings.
          </p>
        </div>

        <div ref={cardsRef} className="noolam-moods-grid">
          {MOOD_CARDS.map((card) => (
            <article key={card.id} className="noolam-mood-card">
              <div className="noolam-arch-frame">
                <div className="noolam-arch-mask">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="noolam-arch-img"
                    loading="lazy"
                  />
                </div>
                <svg
                  className="noolam-jharokha-border"
                  viewBox="0 0 200 320"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d={JHAROKHA_OUTER_PATH}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <h3 className="noolam-mood-label">{card.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
