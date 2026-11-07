# NutriAliment Website — PRD

## Original problem statement
Build a fresh NutriAliment website from the user's 5 reference screenshots, pixel-perfect
and word-for-word. React + TypeScript + Vite + Tailwind CSS. Fully static (no backend,
no database, no paid infra), independently deployable on Cloudflare Pages free tier,
SEO-friendly (metadata, sitemap.xml, robots.txt, canonical URLs, structured data),
optimized for performance/accessibility/mobile, `npm run build` → deployable `dist`.

## User choices (confirmed)
- Images: Mansi's supplied portrait is used in the hero and chat prompt; stock/AI substitutes are used only for supporting food imagery
- Fonts: closest free Google Fonts (Fraunces + Manrope)
- Domain: nutrialiment.in (canonical/sitemap/OG all point there)
- Contact form: opens WhatsApp chat to +91 99531 75709 with prefilled details, no backend
- Credential logos: pulled real official logos from the web per user instruction
- Calendly event: https://calendly.com/mansichadha96/30min
- Mansi chat prompt: auto-opens after 5 seconds and appears once per browser-tab visit

## Architecture
- Repository root — standalone Vite + React 19 + TypeScript + Tailwind app (no Emergent runtime dependency)
  - src/components: Navbar, Hero, About, Services, Process, Included, WhyMansi, Stories, Booking, CalendlyEmbed, Contact, Footer, Logo, Reveal, WhatsAppBubble
  - src/hooks/useLenis.ts — smooth momentum scrolling
  - src/lib/constants.ts — WhatsApp links
  - public/: favicon.svg (sprout-in-circle brand mark), robots.txt, sitemap.xml,
    _headers, _redirects (Cloudflare), assets/ (mansi-hero.jpg, food-flatlay.jpg, 5 official logos)
- `npm run build` → `dist/` (verified, ~366 kB JS / 25 kB CSS, gzip ~114 kB / 5.7 kB)
- No backend, API server, database, server dependency, Worker, or Pages Function exists in the exported source.

## User personas
- Prospective nutrition clients (weight, gut, clinical, pregnancy, sports) who enquire via WhatsApp
- Mansi (site owner) — content updates via code; Calendly booking link is configured

## Implemented (2026-07-06)
- All 8 sections reproduced from screenshots word-for-word: hero (arch portrait, 6.3kg chip,
  credential card, stats), NutriAliment definition, 6 service cards, 5-step process,
  "More than a diet chart" (AI-generated sage flat-lay photo), Why Mansi (stats, official
  logos grid, qualifications, CTA), 6 testimonials verbatim, contact section + WhatsApp form, footer
- Motion: masked line-by-line hero reveal, clip-path portrait reveal, framer-motion
  scroll reveals + hover micro-interactions, Lenis smooth scroll, footer editorial marquee
- SEO: full meta/OG/Twitter tags, canonical, HealthAndBeautyBusiness + WebSite JSON-LD,
  sitemap.xml, robots.txt
- Verified: production build passes; preview screenshotted at 1366px + 375px (all sections render)

## Implemented (2026-07-06, iteration 2)
- Replaced hero placeholder with the user's uploaded original portrait (`/app/frontend/public/assets/mansi-hero.jpg`)
- All "Book consultation" / "Book a free consultation" buttons now open https://calendly.com/mansichadha96/30min (src/lib/constants.ts → BOOK_LINK)

## Implemented (2026-07-06, iteration 3)
- Inline Calendly booking: new `#book` section (Booking.tsx) with embedded calendar widget
  (https://calendly.com/mansichadha96/30min, brand-colored, GDPR banner hidden);
  all Book buttons now smooth-scroll to it via BOOK_LINK="#book"

## Implemented (2026-07-06, iteration 4)
- Palette refresh: lighter cream base (#f8f7f3); services section now a dark sage-green
  (#2c412a) band with white cards; About divider rules removed for a sleeker open layout
- Mobile responsiveness pass (375/768/1366 verified): hero chip no longer covers the face,
  WhatsApp bubble + chat card sized within mobile viewport, included photo crop fixed,
  About scroll margin under sticky nav
- WhatsApp floating bubble + chat card (matches user's reference), navbar Book → WhatsApp,
  hero/Why-Mansi Book → inline Calendly

## Implemented (2026-11-06, premium production refinement)
- Reworked the NutriAliment definition area into a clearly separated parchment editorial section with balanced desktop columns, refined typography, clean mobile stacking, and WCAG-compliant supporting text.
- Rebuilt the Calendly embed initialization for static React hosting: trusted Calendly event readiness, script and iframe timeout handling, recoverable retry, accessible loading/error states, direct Calendly fallback, and a compact responsive booking frame.
- Verified the live scheduling flow through date/time selection to Calendly's Enter Details screen without submitting a real appointment.
- Added the requested Mansi WhatsApp prompt with portrait/online-status treatment, a five-second delay, close/manual-toggle controls, the correct WhatsApp link, and once-per-visit session persistence.
- Completed a site-wide visual polish pass: stronger contrast tokens, refined cards and shadows, clearer section transitions, improved buttons and form states, image sizing/preload, and restrained animation timing.
- Updated hero overlays so the Mansi credential card extends left beyond the portrait and the 6.3 kg result chip extends slightly right. Reduced the “Experience you can trust. Care built around you.” size beneath the larger Why Mansi heading.
- Simplified the booking WhatsApp CTA into one green button with its icon, label, and arrow contained together.
- Reduced the Calendly calendar’s initial frame height to remove excess whitespace; the frame now expands only after date/time selection so the Enter Details form remains fully usable on mobile and desktop.
- Accessibility upgrades: unique interactive test IDs, skip link, visible focus states, mobile menu ARIA/Escape behavior, reduced-motion handling, higher small-text contrast, improved form fields, and corrected anchor offsets.
- Performance/SEO/export: hero preload and intrinsic dimensions, Calendly preconnects, canonical metadata/JSON-LD retained, sitemap refreshed, Cloudflare deployment files retained, and a fully static `dist/` generated.

## Verification (2026-11-06)
- `npm run build`: passed; Vite generated `dist/` successfully (about 380 kB JS / 37 kB CSS before gzip).
- Static/SEO suite: 7/7 checks passed.
- Testing agent: responsive layouts passed at 1920, 768, and 375 px; core links, forms, navigation, prompt timing/session behavior, Calendly normal/failure/retry flows, images, and console checks passed.
- Final self-test: requested hero overlay positions, five-second prompt, once-per-visit behavior, Why Mansi 64 px / 38 px hierarchy, green WhatsApp CTA, and reduced-motion hover behavior passed.
- Compact Calendly self-test: 760 px initial desktop frame and 720 px initial mobile frame; mobile date/time selection reached Enter Details and triggered the expanded details height.
- Frontend-only repository audit: removed FastAPI, MongoDB, Python requirements/tests, backend environment files, and server scaffolding; moved the complete Vite app to the repository root. Source search confirms no frontend fetch/API/environment dependency.
- Root-level `npm run build` generates the production `dist/`; the deployment requires only the Git repository, build command, and `dist` output directory.
- No API is mocked. A real Calendly booking was intentionally not submitted; validation stopped at Enter Details to avoid creating an appointment.

## Backlog
- P0: None.
- P1: User visual acceptance on the final preview and an optional real Calendly appointment submission by the site owner.
- P2: FAQ section, Google reviews section, blog/SEO pages
