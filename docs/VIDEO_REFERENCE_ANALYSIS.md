# Video Reference & Section Analysis (`saree-shop.mp4`)

This document captures the visual, structural, and interactive breakdown of the **NOOLAM** luxury silk saree web experience based on the full reference video (`src/assets/videos/saree-shop.mp4`) and the 8 segmented section clips in `src/assets/videos/section_videos/`.

---

## Media Inventory & Technical Specs

All reference videos share a `720x1280` resolution and `30.000 fps` frame rate.

| File | Duration | Frame Count | Purpose |
| :--- | :--- | :--- | :--- |
| `src/assets/videos/saree-shop.mp4` | `41.733s` | `1,252` | Full end-to-end walkthrough of the site |
| `section_videos/1-hero-section.mp4` | `3.300s` | `99` | Curtain-parting intro & boutique hero |
| `section_videos/2-model-section.mp4` | `0.933s` | `28` | "Six Moods. Timeless Drapes" arched gallery |
| `section_videos/3-select-saree-section.mp4` | `5.367s` | `161` | "Try the Look." interactive model & hotspot lookbook |
| `section_videos/4-select-saree-with-card-section.mp4` | `3.100s` | `93` | "Pick a Silk" vibrant card-stack carousel |
| `section_videos/5-all-cloths-with-engal-section.mp4` | `7.833s` | `235` | "Every silk, on the rail." interactive hanger rack |
| `section_videos/6-card-video-section.mp4` | `5.500s` | `165` | "Ten silks. Ten muses." & "Feel the drape" video showcase |
| `section_videos/7-card-music-section.mp4` | `8.600s` | `258` | "The Bridal Collection" fan & "Silk, in motion." muse reels |
| `section_videos/8-footer-section.mp4` | `7.600s` | `228` | "Three silks, one weave." interactive weaver & NOOLAM footer |

---

## Global Chrome & Visual Identity

- **Brand:** `NOOLAM` (with lotus/silk crest logo)
- **Top Navigation Bar:** Sticky/fixed pill-styled header with brand logo on the left, section anchor links (`Home`, `Try the Look`, `Pick a Silk`, `The Rail`, `Ten Muses`, `The Atelier`, `Three Silks`), and a crimson-red primary CTA pill button on the right.
- **Ticker / Marquee Strip:** Full-width scrolling dark maroon/black ticker bar featuring repeating silk craft callouts (`PURE ZARI`, `HANDWOVEN`, `TEMPLE BORDER`, etc.).
- **Color Palette:** Warm ivory/cream surfaces (`#FAF7F2` / `#FFFFFF`), deep crimson/maroon accents (`#8B0000` / `#A31621`), antique gold highlights, and dark espresso/obsidian contrast sections for "Silk, in motion." and the footer.

---

## Section-by-Section Breakdown

### 1. Hero Section (`1-hero-section.mp4`)
- **Opening Reveal:** Deep crimson & gold brocade silk curtains part smoothly from the center to reveal the boutique landing scene.
- **Visuals:** Full-bleed warm boutique interior showing neatly stacked silk sarees, hanging drapes, and mannequins.
- **Typography & Controls:** Large serif/editorial headline **"Woven for the Divine."** anchored at the bottom-left with a subtle scroll-down cue.

### 2. Model Showcase (`2-model-section.mp4`)
- **Headline:** **"Six Moods. Timeless Drapes"**
- **Layout:** Six arched/temple-framed portrait cards arranged in a balanced horizontal row, each showcasing a model draped in a distinct silk colorway with collection labels underneath.

### 3. Interactive Lookbook — "Try the Look." (`3-select-saree-section.mp4`)
- **Headline:** **"Try the Look."** — *"Eight looks, styled head to toe. Tap a look to see the pieces."*
- **Initial State:** Horizontal lineup of 8 full-body cut-out models wearing distinct sarees.
- **Expanded Detail State:** Selecting a model transitions into a split lookbook view:
  - **Left:** Centered full-body model with interactive `+` circular hotspot markers on jewelry (earrings, necklace, bangles) and the saree drape.
  - **Right:** Curated breakdown panel displaying individual styled items (saree, blouse, jewelry pieces) with thumbnails and quick-view/selection details.

### 4. Silk Card Carousel — "Pick a Silk" (`4-select-saree-with-card-section.mp4`)
- **Headline:** **"Pick a Silk"**
- **Layout & Motion:** Horizontal scrolling/tilted deck of bold, color-blocked editorial cards (`KOORAI CHECK`, `MURSHIDABAD MAROON`, `MONSOON TEAL`, `MAGENTA SHOT SILK`, `PALACE CHECK`, `BENGAL GARDEN`, `KANCHI ...`, `BENARAS GOLD`).
- **Card Anatomy:** Saturated background color, oversized condensed uppercase title, cut-out model photography, and subtle weave metadata.

### 5. Interactive Garment Rail — "Every silk, on the rail." (`5-all-cloths-with-engal-section.mp4`)
- **Headline:** **"Every silk, on the rail."**
- **Filter Tabs:** Category pills above the rail (`All pieces (16)`, `Silk Sarees`, `Half Sarees`, `Full-sleeve Blouses`, `Half-sleeve Blouses`, `Sleeveless`, `Zari Borders`).
- **Rail Interaction:** Garments hang on wooden hangers suspended from a horizontal rod. Left/right navigation arrows (and scroll/drag) glide garments along the rail; the centered item scales into crisp focus while flanking items blur softly, revealing the garment title and an **Add to Bag** button.

### 6. Editorial Cards & Video Showcase (`6-card-video-section.mp4`)
- **Upper Strip:** **"Ten silks. Ten muses. Every thread an offering. Woven by hand. Worn in devotion."** with dark-themed vertical muse cards (`Georgette`, `Agni Banarasi Silk`, `Mangalgiri Pattu`, `Kanchi Pallava`, etc.).
- **Video Feature — "Feel the drape":** Centered rounded video player showing close-up silk drape motion, flanked by floating multi-card editorial photo stacks on the left and right, paired with a **"Purchase this Collection"** CTA pill.

### 7. Bridal Collection & Muse Reels (`7-card-music-section.mp4`)
- **The Bridal Collection:** An arched fan of bridal portrait cards where hovering or selecting brings a look to center stage (e.g., *Manju Kalyani Pattu*, *Srinivas Pattu Red*) with an **Add to cart** button.
- **"Silk, in motion." (`THE MUSE REELS`):** Dark-mode vertical reel carousel featuring titled story cards (`Pichai Palla`, `Gali Sindoor`, `Parrot Kanjivaram`, `Marina Meenakari`, `Kaali Banarasi`, `Peacock Patola`). Focusing a card expands it with an ambient color-matched glow, brand monogram, poetic description, price tag, and **Subscribe** / **Add to Cart** controls.

### 8. Bespoke Weave Configurator & Footer (`8-footer-section.mp4`)
- **Interactive Weaver — "Three silks, one weave.":**
  - Users select up to 3 silk swatches from a 10-swatch circular palette (*Muga Ivory Buta*, *Koorai Madras Checks*, *Rani Pink Temple Border*, *Temple Gold Brocade*, etc.).
  - Each selection adds an animated, flowing silk-strand ribbon across the stage, weaving the chosen colors/textures together into a unified **"Woven as one"** preview while dynamically updating the total price (`₹0` → `₹37,350` → `₹63,810`).
- **Footer:** Deep crimson/dark **NOOLAM** footer with the tagline **"Woven with heritage. Draped for today."**, four structured link columns (`SHOP`, `EXPLORE`, `SUPPORT`, `CONNECT`), and copyright notice.
