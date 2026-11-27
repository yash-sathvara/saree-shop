import type { PieceCategory } from '../../data/looks'

interface PieceThumbnailProps {
  category: PieceCategory
  primaryColor: string
  accentColor: string
}

export function PieceThumbnail({
  category,
  primaryColor,
  accentColor,
}: PieceThumbnailProps) {
  switch (category) {
    case 'Saree':
      return (
        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <rect x="7" y="7" width="30" height="30" rx="4" fill={primaryColor} />
          <path d="M7 29H37V34C37 35.6569 35.6569 37 34 37H10C8.34315 37 7 35.6569 7 34V29Z" fill={accentColor} />
          <path d="M13 7V37M18 7V29M23 7V29" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
          <path d="M7 29H37" stroke="#f5d36c" strokeWidth="1.2" />
        </svg>
      )

    case 'Blouse':
      return (
        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <path
            d="M15 9L22 14L29 9L37 15L34 23L30 21V35H14V21L10 23L7 15L15 9Z"
            fill={primaryColor}
            stroke={accentColor}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path d="M14 32H30" stroke={accentColor} strokeWidth="1.8" />
          <path d="M8.5 20L12.5 21.5M35.5 20L31.5 21.5" stroke={accentColor} strokeWidth="1.5" />
        </svg>
      )

    case 'Necklace':
      return (
        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <path
            d="M10 14C11.5 24 16 28 22 28C28 28 32.5 24 34 14"
            stroke="#c99b3b"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M13 18C14.8 23.5 18 26 22 26C26 26 29.2 23.5 31 18"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeDasharray="2 2.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="30" r="3.4" fill={primaryColor} stroke="#c99b3b" strokeWidth="1.4" />
          <circle cx="17.5" cy="28.5" r="1.6" fill="#c99b3b" />
          <circle cx="26.5" cy="28.5" r="1.6" fill="#c99b3b" />
        </svg>
      )

    case 'Earrings':
      return (
        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
          {[15, 29].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="12" r="2.6" fill={primaryColor} stroke="#c99b3b" strokeWidth="1.3" />
              <path
                d={`M${cx - 4.5} 24C${cx - 4.5} 19 ${cx - 2} 16 ${cx} 16C${cx + 2} 16 ${cx + 4.5} 19 ${cx + 4.5} 24H${cx - 4.5}Z`}
                fill="#c99b3b"
              />
              <path d={`M${cx - 4.5} 24H${cx + 4.5}`} stroke={accentColor} strokeWidth="1.4" />
              <circle cx={cx - 3} cy="27.5" r="1.1" fill={primaryColor} />
              <circle cx={cx} cy="28.5" r="1.2" fill="#f5d36c" />
              <circle cx={cx + 3} cy="27.5" r="1.1" fill={primaryColor} />
            </g>
          ))}
        </svg>
      )

    case 'Waist Belt':
      return (
        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <path
            d="M6 21C14 23.5 30 23.5 38 21V25.5C30 28 14 28 6 25.5V21Z"
            fill="#c99b3b"
          />
          <circle cx="22" cy="24" r="4.2" fill={primaryColor} stroke="#f5d36c" strokeWidth="1.4" />
          <circle cx="14" cy="24.2" r="1.6" fill={accentColor} />
          <circle cx="30" cy="24.2" r="1.6" fill={accentColor} />
          <circle cx="22" cy="29.5" r="1.2" fill="#f5d36c" />
        </svg>
      )

    case 'Bangles':
      return (
        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <rect x="9" y="13" width="5" height="19" rx="2" fill={primaryColor} stroke="#f5d36c" strokeWidth="1" />
          <rect x="15" y="12" width="4" height="21" rx="2" fill="#c99b3b" />
          <rect x="20" y="11" width="5" height="23" rx="2" fill={accentColor} stroke="#f5d36c" strokeWidth="1" />
          <rect x="26" y="12" width="4" height="21" rx="2" fill="#c99b3b" />
          <rect x="31" y="13" width="4" height="19" rx="2" fill={primaryColor} stroke="#f5d36c" strokeWidth="1" />
        </svg>
      )
  }
}
