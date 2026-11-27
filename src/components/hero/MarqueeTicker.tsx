import '../../assets/css/HeroSection.css'

const TICKER_ITEMS = [
  {
    label: 'WOVEN IN KANCHIPURAM',
    desc: 'one saree at a time',
  },
  {
    label: 'TRY THE LOOK',
    desc: 'Eight Kanjivaram looks, styled head to toe',
  },
  {
    label: 'PURE ZARI',
    desc: 'Silver-core zari woven into every temple border',
  },
  {
    label: 'THE RACK',
    desc: 'Browse the full rail of silks',
  },
  {
    label: 'BRIDAL',
    desc: 'Heirloom bridal silks for the day that matters',
  },
]

export function MarqueeTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="noolam-marquee-bar" aria-label="Highlights">
      <div className="noolam-marquee-track">
        {repeated.map((item, idx) => (
          <span key={`${item.label}-${idx}`} className="noolam-marquee-item">
            <span className="noolam-marquee-star" aria-hidden="true">
              ✦
            </span>
            <span className="noolam-marquee-label">{item.label}</span>
            <span className="noolam-marquee-desc">{item.desc}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
