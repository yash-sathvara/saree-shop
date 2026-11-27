import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import curtainBanner from '../../assets/images/hero-banners.jpg'
import greenModel from '../../assets/images/green-saree-model.png'
import heroShowroom from '../../assets/images/hero-showroom.jpg'
import redModel from '../../assets/images/red-saree-model.png'
import { MarqueeTicker } from './MarqueeTicker'
import '../../assets/css/HeroSection.css'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const curtainImgRef = useRef<HTMLImageElement>(null)
  const silkTrailRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  const heroCopyRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const tickerWrapRef = useRef<HTMLDivElement>(null)

  // Beats 2-4 refs: aisle walk-through + models walking to chairs
  const storyLoomRef = useRef<HTMLDivElement>(null)
  const storyDrapeRef = useRef<HTMLDivElement>(null)
  const storyHeritageRef = useRef<HTMLDivElement>(null)
  const redModelRef = useRef<HTMLDivElement>(null)
  const greenModelRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const navbarEl = document.querySelector('.noolam-nav-wrapper')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=460%',
          pin: true,
          scrub: 0.85,
          anticipatePin: 1,
          onLeave: () => {
            if (navbarEl) {
              gsap.to(navbarEl, {
                opacity: 1,
                y: 0,
                pointerEvents: 'auto',
                duration: 0.35,
                ease: 'power2.out',
              })
            }
          },
          onEnterBack: () => {
            if (navbarEl) {
              gsap.to(navbarEl, {
                opacity: 0,
                y: -20,
                pointerEvents: 'none',
                duration: 0.25,
                ease: 'power2.in',
              })
            }
          },
        },
      })

      // Initial state at scroll = 0: hero-banners.jpg covers full screen
      gsap.set(curtainRef.current, {
        yPercent: 0,
        borderBottomLeftRadius: '0% 0%',
        borderBottomRightRadius: '0% 0%',
      })
      gsap.set(curtainImgRef.current, { scale: 1.02 })
      gsap.set([storyLoomRef.current, storyDrapeRef.current, storyHeritageRef.current], {
        opacity: 0,
        y: 20,
      })

      // ------------------------------------------------------------------
      // BEAT 1 (0.00 -> 0.34): Full-screen Silk Curtain Lifts Upward -> Hero Copy
      // ------------------------------------------------------------------
      tl.to(
        scrollHintRef.current,
        { opacity: 0, y: 12, duration: 0.06, ease: 'power1.out' },
        0,
      )
        .to(
          curtainImgRef.current,
          { scale: 1.08, duration: 0.22, ease: 'power1.inOut' },
          0,
        )
        .to(
          curtainRef.current,
          {
            yPercent: -112,
            borderBottomLeftRadius: '50% 24%',
            borderBottomRightRadius: '50% 24%',
            duration: 0.24,
            ease: 'power2.inOut',
          },
          0.02,
        )
        .fromTo(
          silkTrailRef.current,
          { opacity: 0, yPercent: 25 },
          { opacity: 0.85, yPercent: -10, duration: 0.1, ease: 'power1.out' },
          0.06,
        )
        .to(
          silkTrailRef.current,
          { opacity: 0, yPercent: -65, duration: 0.12, ease: 'power2.in' },
          0.16,
        )
        .fromTo(
          bgRef.current,
          { scale: 1.08 },
          { scale: 1, duration: 0.24, ease: 'power2.out' },
          0.06,
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' },
          0.14,
        )
        .fromTo(
          tickerWrapRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.11, ease: 'power2.out' },
          0.15,
        )
        .fromTo(
          [eyebrowRef.current, subtitleRef.current, ctasRef.current],
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.12, stagger: 0.03, ease: 'power2.out' },
          0.21,
        )

      // ------------------------------------------------------------------
      // BEAT 2 (0.40 -> 0.64): Walk Down the Central Aisle + "01 · THE LOOM"
      // ------------------------------------------------------------------
      tl.to(
        heroCopyRef.current,
        { opacity: 0, y: -24, duration: 0.09, ease: 'power2.in' },
        0.4,
      )
      if (navbarEl) {
        tl.to(
          navbarEl,
          { opacity: 0, y: -20, pointerEvents: 'none', duration: 0.09, ease: 'power2.in' },
          0.4,
        )
      }

      tl.to(
        bgRef.current,
        {
          scale: 1.85,
          transformOrigin: '50% 52%',
          duration: 0.25,
          ease: 'power1.inOut',
        },
        0.42,
      )
        .to(
          storyLoomRef.current,
          { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' },
          0.47,
        )
        .to(
          storyLoomRef.current,
          { opacity: 0, y: -12, duration: 0.07, ease: 'power2.in' },
          0.59,
        )

      // ------------------------------------------------------------------
      // BEAT 3 (0.65 -> 0.86): Models Walk In From Both Sides + "03 · THE DRAPE"
      // ------------------------------------------------------------------
      tl.to(
        bgRef.current,
        {
          scale: 2.25,
          transformOrigin: '50% 54%',
          duration: 0.2,
          ease: 'power1.inOut',
        },
        0.65,
      )
        .fromTo(
          redModelRef.current,
          { x: '-36vw', y: 10, scale: 0.88, opacity: 0 },
          {
            x: '0vw',
            y: -6,
            scale: 1,
            opacity: 1,
            duration: 0.18,
            ease: 'power2.out',
          },
          0.66,
        )
        .fromTo(
          greenModelRef.current,
          { x: '36vw', y: 10, scale: 0.88, opacity: 0 },
          {
            x: '0vw',
            y: -6,
            scale: 1,
            opacity: 1,
            duration: 0.18,
            ease: 'power2.out',
          },
          0.66,
        )
        .to(
          storyDrapeRef.current,
          { opacity: 1, y: 0, duration: 0.07, ease: 'power2.out' },
          0.7,
        )
        .to(
          storyDrapeRef.current,
          { opacity: 0, y: -12, duration: 0.06, ease: 'power2.in' },
          0.81,
        )

      // ------------------------------------------------------------------
      // BEAT 4 (0.86 -> 1.00): Models Sit on Sofa Chairs + "04 · THE HERITAGE"
      // ------------------------------------------------------------------
      tl.to(
        bgRef.current,
        {
          scale: 2.48,
          transformOrigin: '50% 56%',
          duration: 0.14,
          ease: 'power2.out',
        },
        0.86,
      )
        .to(
          [redModelRef.current, greenModelRef.current],
          {
            y: 34,
            scale: 0.94,
            duration: 0.12,
            ease: 'power2.inOut',
          },
          0.86,
        )
        .to(
          storyHeritageRef.current,
          { opacity: 1, y: 0, duration: 0.09, ease: 'power2.out' },
          0.9,
        )
    },
    { scope: sectionRef },
  )

  return (
    <section id="home" ref={sectionRef} className="noolam-hero">
      {/* Layer 1: Boutique Showroom Background (zooms down central aisle) */}
      <img
        ref={bgRef}
        src={heroShowroom}
        alt="NOOLAM Kanchipuram Silk Saree Boutique Showroom"
        className="noolam-hero-bg"
      />
      <div className="noolam-hero-scrim" />

      {/* Layer 1.5: Models Walking In & Seating on Left/Right Sofa Chairs */}
      <div className="noolam-models-stage" aria-hidden="true">
        <div ref={redModelRef} className="noolam-model-wrap noolam-model-left">
          <img
            src={redModel}
            alt="Model in crimson Kanjivaram silk saree"
            className="noolam-model-img"
          />
          <div className="noolam-model-shadow" />
        </div>

        <div ref={greenModelRef} className="noolam-model-wrap noolam-model-right">
          <img
            src={greenModel}
            alt="Model in emerald green silk saree"
            className="noolam-model-img"
          />
          <div className="noolam-model-shadow" />
        </div>
      </div>

      {/* Layer 2: Initial Hero Copy & CTAs */}
      <div ref={heroCopyRef} className="noolam-hero-content">
        <div ref={eyebrowRef} className="noolam-hero-eyebrow">
          <span className="noolam-hero-eyebrow-dot" aria-hidden="true">
            ✦
          </span>
          <span>KANCHIPURAM · PURE ZARI · HANDWOVEN SILK</span>
        </div>

        <h1 ref={titleRef} className="noolam-hero-title">
          Woven for the Divine.
        </h1>

        <p ref={subtitleRef} className="noolam-hero-subtitle">
          NOOLAM brings the temple looms of Kanchipuram home: Kanjivaram silk in
          heritage colours, bordered in real zari and finished by hand.
        </p>

        <div ref={ctasRef} className="noolam-hero-ctas">
          <a href="#try-the-look" className="noolam-btn-primary">
            <span>Try the Look</span>
            <span className="noolam-btn-primary-circle" aria-hidden="true">
              <ArrowUpRight size={16} strokeWidth={2.3} />
            </span>
          </a>

          <a href="#the-rack" className="noolam-btn-secondary">
            <span>Browse the Rack</span>
            <ArrowUpRight size={15} strokeWidth={2.1} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Layer 2.5: Story Captions for Beats 2–4 */}
      <div ref={storyLoomRef} className="noolam-story-caption is-right">
        <span className="noolam-story-tag">01 · THE LOOM</span>
        <h2 className="noolam-story-heading">
          Woven by hand, thread by thread.
        </h2>
        <p className="noolam-story-body">
          Each saree spends weeks on a Kanchipuram pit loom.
        </p>
      </div>

      <div ref={storyDrapeRef} className="noolam-story-caption is-right">
        <span className="noolam-story-tag">03 · THE DRAPE</span>
        <h2 className="noolam-story-heading">Made to move with you.</h2>
        <p className="noolam-story-body">
          Heavy enough to fall true, soft enough to live in.
        </p>
      </div>

      <div ref={storyHeritageRef} className="noolam-story-caption is-left">
        <span className="noolam-story-tag">04 · THE HERITAGE</span>
        <h2 className="noolam-story-heading">
          An heirloom from the first fold.
        </h2>
        <p className="noolam-story-body">
          Worn once, kept for generations.
        </p>
      </div>

      <div className="noolam-floating-badge" aria-hidden="true">
        N
      </div>

      <div ref={tickerWrapRef} className="noolam-ticker-wrap">
        <MarqueeTicker />
      </div>

      {/* Translucent Silk Wave Trail */}
      <div ref={silkTrailRef} className="noolam-silk-wave-trail" aria-hidden="true" />

      {/* Layer 4: Scroll-Controlled Silk Curtain (hero-banners.jpg) */}
      <div ref={curtainRef} className="noolam-curtain-layer" aria-hidden="true">
        <img
          ref={curtainImgRef}
          src={curtainBanner}
          alt=""
          className="noolam-curtain-img"
        />
        <div className="noolam-curtain-vignette" />
        <div className="noolam-curtain-gold-hem" />
      </div>

      <div ref={scrollHintRef} className="noolam-scroll-hint" aria-hidden="true">
        <span>Scroll to unveil</span>
        <ChevronDown size={15} />
      </div>
    </section>
  )
}
