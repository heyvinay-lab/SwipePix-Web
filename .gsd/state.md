# SwipePix Website — GSD State Machine

## CURRENT_PHASE
PHASE J — 10/10 CONSUMER PRODUCT REDESIGN (COMPLETED)

## CURRENT_TASK
Transform website from technical documentation into a 10/10 consumer product landing page with 3-second comprehension, 14-stage user journey, authentic flagship Android device mockup, 6 core consumer benefit cards, collapsible 'Built for Android' deep-dive, 10 prioritized FAQs, and 0 accessibility/hierarchy regressions.

## COMPLETED_TASKS
1. **Metadata & Title Upgrades**:
   - Homepage title: `SwipePix — Offline Android Gallery Cleaner`.
   - Description: `Clean your Android gallery faster with SwipePix. Swipe to keep or trash photos and videos with offline, local-first processing.`.
   - Synchronized across `index.html`, `scripts/prerender.js`, and `src/App.tsx`.
2. **Hero & Phone Mockup**:
   - Eyebrow: `PRIVATE • OFFLINE • ANDROID`.
   - Headline: `Clean your gallery. One swipe at a time.`.
   - 4 Trust Pills: `No account` • `Works offline` • `No cloud uploads` • `Android 13+`.
   - CTAs: `Download SwipePix` (`/downloads/SwipePix-1.0.0.apk`) + `Try the interactive demo` (`#demo`).
   - Phone Mockup (`RetroPhoneSvg.tsx`): Realistic flagship Android device mockup featuring punch-hole camera, status bar, glowing Keep (green neon) and Trash cues, and bottom gesture bar.
3. **3-Step Workflow & Interactive Demo**:
   - `HowItWorksSection.tsx`: Reorganized to 3 steps: `01 — Pick` → `02 — Swipe` → `03 — Confirm`.
   - `SwipeInteractiveDemo.tsx`: Header `Clean your gallery like this.`, live status counter `TRASHED X · KEPT Y · Z REMAINING`, pointer/touch drag physics, and disclaimer `Interactive demo only. Your files are not affected.`.
4. **Consumer Core Benefit Cards & Feature Matrix**:
   - `FeatureGridSection.tsx`: Showcases 6 consumer core benefit cards first (Swipe Cleaning, Photos & Videos, Batch Multi-Select, Instant Real-Time Undo, Save & Resume, Native Android Trash).
   - Detailed tabbed matrix below for comprehensive technical feature specs and roadmap.
5. **Privacy & Safety Realignment**:
   - `PrivacySection.tsx`: Headline `Your photos stay on your phone.`, 4 clear pillars (`NO INTERNET PERMISSION`, `NO CLOUD UPLOADS`, `NO TRACKERS`, `LOCAL PROCESSING`), zero local filesystem paths in code proof.
   - `SafetySection.tsx`: Rewrote subtitle to factual claim without exaggeration: "SwipePix uses an undo flow and Android's native trash confirmation to reduce accidental deletion risk."
6. **New Conversion & Trust Sections**:
   - `InstallationSection.tsx`: Compact 3-step guide (`Download` → `Allow Installation` → `Open & Start Cleaning`) plus expandable troubleshooting accordion for Samsung, Pixel, and Xiaomi devices.
   - `OpenSourceSection.tsx`: `Built openly.` with buttons for GitHub source, bug report (`/feedback`), and feature requests.
   - `TechStackSection.tsx`: `Built for Android.` with collapsible interactive accordions for Architecture, Performance, MediaStore, Video Engine, and Privacy.
   - `FaqSection.tsx`: 10 prioritized questions in clean accessible accordions.
   - `DownloadCtaSection.tsx`: `Ready to clean your gallery?` mid-page conversion section.
7. **Accessibility & Build Verification**:
   - `npm test`: 18 tests passing.
   - `npm run build`: successful SSG build and pre-rendering for all 6 routes.
   - `node scripts/verify_accessibility_qa.cjs`: **0 heading hierarchy errors, 0 unnamed buttons** across all routes.
   - Zero local/file paths found in distribution.

## NEXT_TASK
Ready for deployment to production.

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
