# SwipePix Website — GSD State Machine

## CURRENT_PHASE
PHASE I — FINAL DOWNLOAD, ACCESSIBILITY & PERFORMANCE QA (COMPLETED)

## CURRENT_TASK
Production-verified release: direct APK download architecture, 100% sequential heading hierarchy, WCAG AA contrast compliance, zero unnamed interactive elements, vendor code-splitting, and font performance optimizations.

## COMPLETED_TASKS
1. **Direct APK Canonical Download Verification**:
   - Verified physical APK at `public/downloads/SwipePix-1.0.0.apk`: 4,486,854 bytes (~4.28 MB), SHA-256 `0c2656105ccc884be70a493555643099ce63f28264070ad99a9866b03e48a3cb`.
   - Unified global configuration in `src/config/download.ts` and `src/config/swipepix.ts`.
   - All download triggers across Navbar, Mobile Drawer, Hero Section, How It Works, Download CTA, Updates Page, and Footer point to `/downloads/SwipePix-1.0.0.apk` with `download="SwipePix-1.0.0.apk"`.
   - Zero `file:///` URLs, zero `localhost` URLs in production source.
   - Primary CTA standardized to "Download SwipePix" / "DOWNLOAD SWIPEPIX". GitHub Releases removed as primary download path while preserving repository links for source code and issues.
2. **Button Accessible Name & Discernible Text Remediation**:
   - Fixed the disabled Undo button in `SwipeInteractiveDemo.tsx` flagged by Lighthouse (`<button class="btn-brutal-base ... " disabled="">`): added visible text `UNDO`, `aria-label="Undo last swipe"`, and `aria-hidden="true"` on SVG icon.
   - Audited all buttons across all 6 pre-rendered routes via `scripts/verify_accessibility_qa.cjs`: **0 unnamed buttons found**.
   - Added `aria-expanded` and `aria-controls="mobile-navigation-drawer"` to the mobile hamburger toggle.
3. **WCAG AA Color Contrast Compliance**:
   - `ANDROID UTILITY` & `CREATOR PROFILE` badges: updated `NeoBadge` primary variant to `bg-[#1D4ED8] text-white` (6.5:1 contrast against white).
   - `IMG_2026_0916.JPG`: updated from `text-primary` to `text-blue-800` (8.5:1 contrast against white).
   - `← TRASH`: updated to `text-ink bg-warm font-bold border border-ink` (7.8:1 contrast).
   - `94% FULL`: updated to `text-rose-900 bg-rose-100 font-bold px-1.5 py-0.5 border border-ink` (7.6:1 contrast).
   - `58% USED`: updated to `text-blue-900 bg-blue-100 font-bold px-1.5 py-0.5 border border-ink` (10.5:1 contrast).
   - Subtitle, helper text, and metadata labels: raised `text-gray-500` to `text-gray-700 font-bold` across all forms, matrices, and footers.
4. **Heading Hierarchy Sequencing (H1 -> H2 -> H3)**:
   - Fixed `PHYSICAL DISK ISOLATION` in `PrivacySection.tsx` from `h4` to `h3`.
   - Fixed `PRODUCT`, `TRUST & SAFETY`, `COMMUNITY` in `Footer.tsx` from `h4` to `h3`.
   - Fixed `HowItWorksSection.tsx` contract banner from `h4` to `h3`.
   - Fixed `SwipeInteractiveDemo.tsx` instructional headings from `h4` to `<p>` tags.
   - Added missing `h2` headings in `DonatePage.tsx` (`HOW DO YOU WANT TO SUPPORT?`), `UpdatesPage.tsx` (`VERSION 1.0.0`, `HOW TO INSTALL SWIPEPIX VIA APK`), and `FeedbackPage.tsx` (`CHOOSE YOUR FEEDBACK CHANNEL`, `DIRECT FEEDBACK FORM`).
   - Verified automated heading sequential descent: **0 skipped levels across all 6 routes**.
5. **Performance & JavaScript Optimization**:
   - Implemented manual chunk code-splitting in `vite.config.ts`: separated `qrcode` (25.4 KB) and `lucide-react` (37.5 KB) from main entry chunk, reducing core bundle size from 421.5 KB to 360.3 KB.
   - Streamlined Google Fonts stylesheet request in `index.html`: removed unused italic weights from Space Mono (`Space Mono:wght@400;700`), halving font stylesheet footprint.
6. **SEO & Structured Data Integrity**:
   - Maintained 100% valid Schema.org `SoftwareApplication` and `WebSite` JSON-LD graph.
   - Pre-rendered distinct canonical tags, meta titles, descriptions, and Open Graph tags across `/`, `/donate`, `/updates`, `/privacy`, `/about`, `/feedback`.

## NEXT_TASK
Deploy production release to hosting CDN and verify live endpoints.

## ARCHITECTURE_DECISIONS
- Single Source of Truth: All download and version metadata defined strictly in `src/config/download.ts`.
- Direct APK Static Hosting: APK served directly from `public/downloads/SwipePix-1.0.0.apk` without backend redirects or intermediaries.
- Dual-Target SSR/SSG Pre-rendering: Full static HTML generation with client hydration and code-split chunks.

## UI_DECISIONS
- Neo-Brutalist Aesthetic Preserved: High-voltage colors, bold ink borders, offset drop shadows retained while meeting WCAG AA contrast standards.
- Discernible Text & Accessible Interactive Controls: Every action button displays explicit text and icons with proper aria labeling.

## SEO_DECISIONS
- Perfect sequential document outline for maximum crawler semantic comprehension.
- 100% crawlable raw HTML generated at build time.

## PERFORMANCE_DECISIONS
- Chunk isolation for heavy libraries (`qrcode`, `lucide`).
- Subsetting Google Fonts to omit unused italic styles.

## KNOWN_ISSUES
- None.

## BLOCKERS
- None.

## TEST_STATUS
- Unit Tests: `npm run test` -> 18/18 tests passed (318ms).
- Production Build: `npm run build` -> Passed (TypeScript compilation + Vite client chunks + Vite SSR bundle + static pre-rendering).
- Accessibility QA (`scripts/verify_accessibility_qa.cjs`):
  - Total hierarchy errors: 0
  - Total unnamed buttons: 0
  - Banned strings (`file:///`, `localhost`): 0
- Direct APK Asset: Verified at 4,486,854 bytes, SHA-256 matching.
