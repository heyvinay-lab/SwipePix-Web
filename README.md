# SwipePix Web ⚡

> The official web presence and interactive showcase for **SwipePix** — the ultra-fast, 100% offline, privacy-first Android photo & video decluttering app.

🌐 **Live Website:** [swipepix.heyvinay.in](https://swipepix.heyvinay.in/)  
📱 **Android Application Repository:** [heyvinay-lab/SwipePix](https://github.com/heyvinay-lab/SwipePix)

---

## 🎨 Design Paradigm

SwipePix Web is designed with a **Neo-Brutalist SaaS + Retro-Futuristic Y2K UI** aesthetic, featuring tactile spring physics, high-contrast borders, chunky drop shadows, and bespoke hand-drawn tech SVGs.

- **Zero-Latency Static Performance:** Built with Vite 6, React 19, and Tailwind CSS.
- **Interactive Swipe Deck Demo:** Touch/drag interactive card triage simulation demonstrating the core Android app experience.
- **Live APK Distribution:** Serves verified, cryptographically signed production APKs.
- **Support & Backing:** Integrated UPI dynamic QR generation and payment deep-links.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Custom CSS Tokens
- **Icons:** [Lucide React](https://lucide.dev/) + Bespoke Raw SVG Illustrations
- **Testing:** [Vitest](https://vitest.dev/)
- **Deployment:** [Vercel](https://vercel.com/) / Static Hosting Compatible

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `>= 18.0.0`
- **npm:** `>= 9.0.0`

### Installation

```bash
# Clone the repository
git clone https://github.com/heyvinay-lab/SwipePix-Web.git

# Navigate into the project
cd SwipePix-Web

# Install dependencies
npm install
```

### Development

```bash
# Start local development server with HMR
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

```bash
# Run TypeScript compilation and Vite production bundle
npm run build

# Preview production build locally
npm run preview
```

### Running Tests

```bash
# Run unit tests via Vitest
npm run test
```

---

## 📁 Repository Structure

```
SwipePix/
├── public/                     # Static public assets, SEO files & direct downloads
│   ├── downloads/              # Cryptographically signed release APKs
│   ├── favicon.svg             # Neo-brutalist Y2K app icon
│   ├── og-image.svg            # Open Graph social preview card
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Search engine sitemap
├── src/
│   ├── components/             # Reusable UI cards, buttons, heroes, & sections
│   ├── config/                 # App versioning, routes, and donation configs
│   ├── data/                   # Typed data accessors & product schemas
│   ├── types/                  # TypeScript interface definitions
│   ├── utils/                  # Helper utilities & UPI payment builders
│   ├── App.tsx                 # Root application & client router
│   ├── index.css               # Design tokens, fonts, & neo-brutalist utilities
│   └── main.tsx                # React DOM entry point
├── docs/                       # Project documentation & build specifications
│   ├── SWIPEPIX_WEBSITE_BUILD_SPEC.md
│   ├── SWIPEPIX_WEBSITE_CONTENT.md
│   ├── SWIPEPIX_COMPLETE_TECHNICAL_KNOWLEDGE.md
│   └── SWIPEPIX_INTERVIEW_CHEATSHEET.md
├── scripts/                    # Synchronization and data management scripts
├── SWIPEPIX_WEBSITE_DATA.json  # Machine-readable product truth
└── vercel.json                 # Vercel deployment routing and headers
```

---

## 🔒 Privacy & Architecture

This repository contains only the front-end website. It contains **no telemetry, no tracking cookies, and no third-party analytics**.

For the native Android application source code, visit [heyvinay-lab/SwipePix](https://github.com/heyvinay-lab/SwipePix).

---

## 👤 Author

**Vinay** — Independent Software Engineer  
- Portfolio: [portfolio.heyvinay.in](https://portfolio.heyvinay.in/)  
- GitHub: [@heyvinay-lab](https://github.com/heyvinay-lab)
