# NOOLAM — Saree Shop Animation

An interactive luxury Indian silk saree showcase and e-commerce web experience (**NOOLAM**), built with **React 19**, **TypeScript**, **Vite**, **GSAP**, **Framer Motion**, and **Lucide React**.

> **Current Status:** The repository is initialized with the React + TypeScript + Vite scaffold and animation dependencies, along with reference videos and image assets under `src/assets/`. The UI sections in `src/` are ready to be implemented against the reference video specifications.

---

## Tech Stack

| Category | Technology | Version (from `package.json`) |
| :--- | :--- | :--- |
| Framework | React + React DOM | `^19.3.1` |
| Language | TypeScript | `~6.0.3` |
| Bundler | Vite (`@vitejs/plugin-react`) | `^8.3.6` (`^6.1.2`) |
| Animations | GSAP (`@gsap/react`) | `^3.15.1` (`^2.1.2`) |
| Motion / UI Transitions | Framer Motion | `^14.14.0` |
| Icons | Lucide React | `^1.80.0` |
| Linting | ESLint + `typescript-eslint` | `^10.14.0` + `^8.72.1` |

---

## Project Structure

```text
saree-animation/
├── docs/
│   └── VIDEO_REFERENCE_ANALYSIS.md   # Detailed section-by-section breakdown of reference videos
├── public/                           # Static public assets
├── scratch/                          # Ignored local workspace for temporary scripts & extracted frames
├── src/
│   ├── assets/
│   │   ├── images/                   # Saree model & banner images (hero-banners.jpg, green/red-saree-model.png)
│   │   └── videos/
│   │       ├── saree-shop.mp4        # Full reference walkthrough video (41.733s, 30 fps)
│   │       └── section_videos/       # Individual reference clips for sections 1–8
│   ├── App.css
│   ├── App.tsx                       # Main application entry component (currently Vite starter)
│   ├── index.css
│   └── main.tsx                      # React root mount
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **pnpm** (or `npm`)

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start the Vite dev server with HMR
pnpm dev

# Type-check and build for production
pnpm build

# Run ESLint
pnpm lint

# Preview the production build locally
pnpm preview
```

---

## Documentation

- [Video Reference & Section Analysis](./docs/VIDEO_REFERENCE_ANALYSIS.md) — Complete breakdown of `saree-shop.mp4` and the 8 clips in `src/assets/videos/section_videos/`, covering layout, interactive controls, and animation choreography.
