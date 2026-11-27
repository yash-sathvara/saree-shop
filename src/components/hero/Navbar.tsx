import { useState } from 'react'
import { ArrowRight, Heart, Menu, ShoppingBag, X } from 'lucide-react'
import '../../assets/css/HeroSection.css'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'try-the-look', label: 'Try the Look' },
  { id: 'pick-a-silk', label: 'Pick a Silk' },
  { id: 'the-rack', label: 'The Rack' },
  { id: 'the-muse', label: 'The Muse' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'the-weave', label: 'The Weave' },
]

export function LotusCrest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2C17.2 7.2 16.5 12.2 20 18C23.5 12.2 22.8 7.2 20 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 18C14.2 14.8 11.4 10.6 11 5.8C15.5 7.4 18.2 11.4 19.5 18Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 18C25.8 14.8 28.6 10.6 29 5.8C24.5 7.4 21.8 11.4 20.5 18Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 19C12 18.4 7.4 15.8 4.5 11.5C9.5 11.5 14.2 13.8 18.5 19Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 19C28 18.4 32.6 15.8 35.5 11.5C30.5 11.5 25.8 13.8 21.5 19Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Navbar() {
  const [activeId, setActiveId] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLinkClick = (id: string) => {
    setActiveId(id)
    setMobileOpen(false)
  }

  return (
    <header className="noolam-nav-wrapper">
      <nav className="noolam-nav" aria-label="Primary Navigation">
        <a
          href="#home"
          className="noolam-brand"
          onClick={() => handleLinkClick('home')}
        >
          <LotusCrest className="noolam-brand-lotus" />
          <span className="noolam-brand-title">NOOLAM</span>
          <span className="noolam-brand-sub">Kanchipuram Silks</span>
        </a>

        <ul className="noolam-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`noolam-nav-link ${activeId === link.id ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="noolam-nav-actions">
          <button
            type="button"
            className="noolam-icon-btn"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <Heart size={15} strokeWidth={1.9} />
          </button>
          <button
            type="button"
            className="noolam-icon-btn"
            aria-label="Shopping Bag"
            title="Shopping Bag"
          >
            <ShoppingBag size={15} strokeWidth={1.9} />
          </button>
          <a href="#visit-store" className="noolam-store-cta">
            <span>Visit the Store</span>
            <span className="noolam-store-cta-circle" aria-hidden="true">
              <ArrowRight size={13} strokeWidth={2.4} />
            </span>
          </a>
          <button
            type="button"
            className="noolam-mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="noolam-mobile-drawer">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`noolam-nav-link ${activeId === link.id ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
