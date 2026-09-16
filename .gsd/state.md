# SwipePix Website — GSD State Machine

## CURRENT_PHASE
PHASE H — SEO, CRAWLABILITY, PERFORMANCE & METADATA ARCHITECTURE REMEDIATION

## CURRENT_TASK
Completed audit remediation: static pre-rendering (SSG), route-specific canonicals and headings, favicon multi-format generation, clean URL routing, and strict Schema.org validation.

## COMPLETED_TASKS
1. **Root Cause Analysis & Architecture Shift (SPA -> Static Pre-rendering / SSG)**:
   - Identified that client-side SPA rendering caused non-JS search engine bots and SEO crawlers to see 0 content, 0 words, missing H1, and empty body.
   - Built dual-target build system: Vite client bundle + Vite SSR bundle (`src/entry-server.tsx`) + custom post-build prerendering engine (`scripts/prerender.js`).
   - All 6 routes (`/`, `/donate`, `/updates`, `/privacy`, `/about`, `/feedback`) now output fully pre-rendered, valid semantic HTML with distinct titles, descriptions, and canonical URLs.
2. **Canonical & Title Desynchronization Fixed**:
   - Vercel previously served a single catch-all `index.html` with root canonical `https://swipepix.heyvinay.in/` for all subpages.
   - Configured `vercel.json` with `cleanUrls: true`, `trailingSlash: false`, and pre-rendered physical directory routes (`dist/<route>/index.html`), ensuring each route delivers its own distinct canonical URL (`/donate`, `/updates`, etc.).
   - Added client-side `<title>`, `<meta name="description">`, and `<link rel="canonical">` synchronization in `src/App.tsx` on navigation.
3. **Favicon Multi-Format Generation & Routing**:
   - Generated authentic multi-resolution `favicon.ico` (32x32 & 16x16 ICO container) and `apple-touch-icon.png` (180x180) in `public/`.
   - Prevented Vercel catch-all rewrites on favicon paths by supplying physical files and explicit asset caching headers.
4. **H1 Heading Structure Across All Routes**:
   - Verified and established explicit, semantically correct, high-contrast `<h1>` elements on every single page:
     - `/`: `CLEAN YOUR GALLERY. ONE SWIPE AT A TIME.`
     - `/donate`: `SUPPORT SWIPEPIX.`
     - `/updates`: `SWIPEPIX UPDATES.`
     - `/privacy`: `YOUR PHOTOS. YOUR DEVICE.`
     - `/about`: `ABOUT SWIPEPIX.`
     - `/feedback`: `SEND FEEDBACK & REPORT BUGS`
5. **Schema.org Structured Data Overhaul**:
   - Streamlined JSON-LD to valid, clean Schema.org `SoftwareApplication` and `WebSite` graph.
   - Removed deprecated or non-standard fields (`applicationSubCategory`, invalid `HowTo` tags) that caused external validator parser errors.
   - Validated JSON-LD using node test validator.
6. **Robots & Indexing Directives**:
   - Added explicit robots meta directives in `index.html`: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
   - Configured `X-Robots-Tag: index, follow` and `X-Content-Type-Options: nosniff` headers in `vercel.json`.
7. **Social Media Profile Integrity**:
   - Adhered strictly to data truth policy: Did NOT manufacture fake corporate accounts for YouTube, X, LinkedIn, Instagram, or Facebook.
   - Accurately maintained developer attribution to Vinay's verified GitHub (`heyvinay-lab`) and portfolio (`portfolio.heyvinay.in`).
8. **Direct APK Distribution Preserved**:
   - Maintained canonical APK direct download flow (`/downloads/SwipePix-1.0.0.apk`, 4.28 MB, SHA-256 verified).
   - Preserved UPI QR code generation and GitHub Sponsors integration.

## NEXT_TASK
Continuous monitoring of external crawler indexation after deployment.

## ARCHITECTURE_DECISIONS
- Dual-target compilation: Vite client build generates client bundles; Vite SSR bundle generates static HTML strings per route; `scripts/prerender.js` injects markup into `#root` and writes route-specific `index.html` files into `dist/`.
- Vercel `cleanUrls: true`: Enables static routing directly to `dist/<route>/index.html` before fallback rewrite, ensuring crawlers receive raw pre-rendered HTML on direct HTTP GET requests.

## UI_DECISIONS
- Consistent Brutalist/High-Contrast Design: Route headers use `font-mono tracking-tight font-black uppercase` for prominent, accessible H1 styling.
- Zero Flash of Unstyled Content (FOUC): Tailwind CSS is inlined and pre-loaded.

## SEO_DECISIONS
- Full HTML payload on initial request for 100% crawlability by bots without JavaScript execution.
- Per-route `<title>`, `<meta name="description">`, Open Graph, Twitter Cards, and canonical tags.
- Schema.org valid JSON-LD graph.

## TEST_STATUS
- Unit Tests: `npm run test` -> 18/18 passed.
- Production Build: `npm run build` -> Passed with all 6 static routes generated:
  - `/` (152.6 KB)
  - `/donate` (30.6 KB)
  - `/updates` (34.2 KB)
  - `/privacy` (23.7 KB)
  - `/about` (22.1 KB)
  - `/feedback` (23.8 KB)
- Prerender Verification: `scripts/verify_prerender.cjs` -> All titles, canonicals, descriptions, and H1 tags confirmed.
