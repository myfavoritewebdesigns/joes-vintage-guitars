# Joe's Vintage Guitars — Astro Rebuild

Project handoff doc. Read this first when picking up the project in a new session.

## What this is

A full rebuild of [joesvintageguitarsaz.com](https://www.joesvintageguitarsaz.com/) — currently a WordPress + Avada site — as a static **Astro 6 + Tailwind 4** site deploying to **Cloudflare Pages**. Forms will use the **Mailgun API** via a CF Pages Function (not wired yet).

**Goal:** exact visual parity with the live site. Do not normalize design quirks without asking the user.

## ⚠️ Must-follow rules (read before writing code)

These were established by the wp-to-astro template after the JVG fender-SN page exposed gaps in self-audit. Non-negotiable without explicit user approval.

1. **Hot-linked images must be swapped to local in the SAME session they were added.** Hot-linking is allowed only for first-pass layout. Carrying hot-links across sessions normalizes broken images and you stop noticing failures (the JVG `fender-back-of-headstock-serial-number-scaled.jpg` 404 survived 4 audits because no check verified the URL responded 200). See [Image migration](#image-migration--hot-link-is-single-session-only).
2. **`npm run audit:live-diff -- <live-url> <local-url> --slug <slug>` must show 0 🔴 must-fix items before any page is "done."** This script checks heading inventory, image counts, broken external image URLs (HEAD-requests every one), JSON-LD parity, title/meta/canonical diff. Run it after every build. Re-run until clean. See [live-diff-auditor agent + script](#live-diff-auditor-agent--static-audit-script).
3. **For qualitative visual review, invoke the `live-diff-auditor` agent — don't self-audit.** A model auditing its own work is anchored on what it built and misses what's missing. Spawn the auditor as a subagent and act on its punch list.
4. **After 2 failed attempts at the same visual problem, escalate to cross-model review** (Gemini, GPT, or a different Claude model size). Same-model parallel review is correlated, not independent — both instances share weights and biases and will make the same blind-spot errors. See [Same-model parallel review is NOT independent](#same-model-parallel-review-is-not-independent).
5. **Every intentional deviation goes into the [Decision log](#decision-log)** — future sessions will revert it otherwise.

## Source of truth hierarchy

When two sources disagree about how a page should look or behave, resolve in this order:

1. **User's stated preference for this project.** Check `~/.claude/projects/C--Users-noahj/memory/feedback_jvg_design_preferences.md` and the [Decision log](#decision-log) further down. The user has intentionally deviated from the live site in several places — don't re-revert without asking.
2. **The live site's rendered behavior.** Open the live URL in a browser. What visitors see is the spec.
3. **The live site's source HTML/CSS** (saved snapshots in `reference/`). Useful for exact pixel values, JSON-LD schemas, copy.
4. **Existing project code.** Helpful but possibly wrong — could be a half-finished previous session. Don't treat it as authoritative just because it compiles.

Before "fixing" something that already exists in code, ask: did a prior session do it that way deliberately? Check the decision log + `git log` before reverting.

## Current status (3 pages live, ContactSection redesigned, Footer audited)

**Pages built:**
- ✅ `/` — Homepage (16 sections)
- ✅ `/about-me/` — About Joe page (12 sections, Margi-script section heads, wood-bg cards, deep visual-parity audit complete)
- ✅ `/free-appraisal/` — Heavy reference page with intro video block, 3 Simple Steps alternating layout, Notable Appraisals (3 case studies), Free vs Insurance comparison, Market Pulse (dark rust), full electric+acoustic Condition Grading tables, Collection Appraisals, Spotting Fakes (Gibson/Martin/Fender), Testimonials, FAQ — 12 sections, 13,000+px tall
- ✅ `/fender-guitars-serial-number-guide/` — Long-form reference guide (15 H2 sections, ~30,000px tall) plus the **interactive serial-number lookup tool** at the top. 7-card location grid, era timeline, 11 serial-number tables (bridge plate / 4-5 digit / L-series / F-plate / V-prefix / Custom Shop CN-CZ-R / front+back headstock / Mexican / Made in Japan / Crafted in Japan), authentication checklist, advanced dating (neck heel, body dates, pot codes, pickup dates, fretboard inlays, saddles, tuners, logo evolution, pickguards, finish), 7 model-specific dating guides, FAQ accordion (12 Qs, FAQPage JSON-LD), resources grid. Article + BreadcrumbList + FAQPage + WebApplication JSON-LD. Content images hotlinked to live WP uploads for now (swap to local later). Scoped `.fsn-*` class prefix for the page chrome; the tool widget keeps its original `.fsn-tool` / `.fsn-card` / `.fsn-step` classes in a global `<style is:global>` block. Tool HTML is imported at build via Vite's `?raw` from `reference/fsn-tool-html.html`; JS lives at `public/scripts/fsn-tool.js` and loads via `<script is:inline src="/scripts/fsn-tool.js">`.

**Framework primitives:**
- ✅ `Layout.astro` owns site chrome (Header, Footer, FloatingCTAs, skip link)
- ✅ SEO + structured data baked in: 12 OG tags, Twitter Card, canonical, robots, JSON-LD (ProfessionalService, WebSite, FAQPage, ProfilePage)
- ✅ `<SectionHeader>` primitive (eyebrow + h2 + subhead + accent rule) — homepage uses extensively; non-homepage pages tend to use inline H3 + 40%-wide rust rule instead.
- ✅ `<Button>` primitive for generic CTAs (`rust` / `cream` / `outline-cream` variants, `sm`/`md`/`lg` sizes, `pill` prop). Discriminated polymorphic types — TS enforces `href` XOR `type=submit`.
- ✅ `<PageHero>` primitive for non-homepage heroes (eyebrow + H1 + subhead + photo/color bg + cta slot + breadcrumbs slot). Opt-in `titleHtml` / `subheadHtml`. Uses `Astro.slots.has("cta")` to skip empty wrapper.
- ✅ `src/config/site.ts` — single source of truth: `contact`, `hrefs`, icon paths (`phoneIconPath` / `mailIconPath` / `smsIconPath` / `pinIconPath`), `replyMethods`, `headerSocials` / `footerSocials` / `socialSameAs`, nav (`primaryNav` / `sellMenu` / `idMenu` / `footerTopMenu` / `footerMainMenu` / `footerLegal`). Discriminated `SocialLink` union. `FooterLink` extends `NavLink` with optional `hasDropdown` and `isReverbPill`.
- ✅ Shared `<form data-jvg-contact-form>` handler at `src/scripts/contact-form.ts` — single point for Mailgun wire-up; error fallbacks pull `contact.phone` from site config.
- ✅ Design tokens centralized in `src/styles/global.css` (25 named brand colors via `@theme`). Includes a global `@media (prefers-reduced-motion: reduce)` rule.

**Recent redesigns (delivered this session):**
- ✅ **`ContactSection.astro` fully redesigned** to "Talk With Joe Today" mockup: logo + Oswald-uppercase heading + star divider + lede in one row (left col), cream-tinted form inputs on the right (replaced white), "How Can We Help?" replaces "Comments", ribbon submit, system-sans field labels.
- ✅ **`Footer.astro` overhauled** per user spec (5 fixes): 1) `nowrap` on bottom menu so all 5 services fit one line on desktop, 2) Inventory rendered as **white pill with Reverb "R" badge** (`isReverbPill: true` flag), 3) dropdown chevron (`▾`) after "Sell My Guitar" (`hasDropdown: true` flag), 4) darker/thicker divider between menu rows, 5) **logo now has flat dark-brown border, no drop shadow, bottom flush with cream box bottom**. Copyright bar is tan with rust-bright underlined links (matches live exactly).
- ✅ **Footer mobile responsive fix**: `flex-wrap: wrap` on bottom menu below 900px, logo margins reset (no overhang) below 900px, tighter padding+font sizes below 600px.
- ✅ **Astro dev toolbar disabled** via `devToolbar: { enabled: false }` in `astro.config.mjs` so preview matches production.

**Type & build state:**
- `npx astro check` → 0 errors, 0 warnings, 3 hints (all in `reference/` outside `src/`).
- `npm run build` → 3 pages, 15MB output, ~2s rebuild.
- Lighthouse free-appraisal: **A11y 98, BP 100, SEO 92, AB 100** (desktop).
- Known visual-parity gaps NOT fixed (match live): `.mtg-col__h4` 3.77:1 contrast, ValueProp `mailto:` bullet 23px tap target, header/footer text-link heights ~20-21px, `.jvg-buy__cta` 22px.

## ⏭ Pick up here next session — 2026-05-26 handoff

### Just shipped tonight (2026-05-26)

**1. `/sell-my-fender-guitar/` page is now ~90% live-parity.** Substantial rewrites:
- Hero: B&W photo bg restored (`wp-content/uploads/2025/07/background.jpg`) + dark vignette overlay matching live's `.tp-bnr::before`. H1 styled as small gold-tan eyebrow with decorative side bars; H2 is the large display.
- Intro: section bg now `--color-brand-cream` (#eedfc0); form panel is dark-rust with cream labels; TOC `<details>` widget under intro text on left.
- Meet Joe: complete rebuild after 8 revisions. Final structure verified via DOM walk: cream section + `.smf-meet__row` (z:10) containing white-card `::before` (inset -49px -11px -49px 0) + dark-rust-triangle `::after` (width 100px, clip-path polygon) + left column with outlined-rust `::before` border-frame + `<lite-youtube>` video element overflowing column on left. See decision-log rows v5/v6/v7/v8.
- Header: primary nav `text-transform: uppercase` removed (site-wide via Header.astro); secondary nav got `divide-x divide-white/25` separators.
- FAQ refactored to use shared `<FAQ />` component with props (`faqs`, `subTitle`, `sectionId`, `openFirst`). Component now reusable for gibson/martin/etc.
- Discover banner button: `.smf-btn--cream` → `.smf-btn--rust` (cream button on cream panel was invisible).
- Layout.astro: added `<slot name="head" />` for per-page CDN/script injection (used here for lite-youtube CDN).

**2. NEW workflow tool: `scripts/audit-section-crops.mjs`** — per-H2/H3 section crops at 1920+390 with **odiff perceptual diff masks** stitched side-by-side (live | local | diff). Eliminates the "AI eyeballs raw thumbnail and makes wrong claims" failure mode. Output to `reports/screenshots/<slug>/sections/<NN>-<heading-slug>/`. Verified working: `npm run audit:section-crops -- <live> <local> --slug <slug> [--anchors h2h3]`.

**3. Cross-model consultation (GPT-5.2-Pro + Gemini-3-Pro 2026-05-26)** in `wp-to-astro/CLAUDE.md` decision log: strategic feedback on the entire stack + revised priority roadmap for future improvements.

### What's still open on sell-my-fender

- 🟡 v8 visual confirmation in your actual browser at 1920×1080 — section-crops audit shows 14/15 sections still differ from live (most are documented intentional exceptions; some need investigation)
- 🟡 Mobile (390) audit not yet run on the v8 build
- 🟢 The page is shippable now; the remaining diffs are mostly intentional (IG embeds, Boxzilla popup) or minor polish

### Next priorities (from GPT/Gemini consultation, in order)

1. **Astro Content Collections + Zod for blog migration** — closes the pagination/archives TODO gap. Script WP REST API → `.mdx` files with YAML frontmatter → type-safe archives/taxonomy/pagination. ~4 hrs.
2. **"HTML-first" extraction script** for chrome-heavy bespoke sections — Chrome Coverage API via Playwright OR `purifycss` to extract only relevant CSS rules → dump into `set:html` + `<style is:global>` scoped wrapper. ~3 hrs. Would have prevented the Meet Joe 8-revision saga.
3. **R2 + CF Worker for `/wp-content/uploads/`** — needed for sites with >500MB media. ~3 hrs.
4. **`@axe-core/playwright`** a11y check in auditor agent flow. ~30 min.
5. **`/sell-my-gibson-guitar/` clone from sell-fender** — the next commercial-value page, will validate the architectural patterns.

### Open pages still to build

`/sell-my-gibson-guitar/`, `/sell-my-martin-guitar/`, `/sell-a-guitar-collection/`, `/contact-me/`, `/blog/` + posts, `/how-to-read-gibson-serial-numbers/` (Archetype B), `/martin-serial-and-model-numbers/`, etc.

### Previously shipped (still current)

`/fender-guitars-serial-number-guide/` — full content + interactive lookup tool. Content extraction script: `reference/_extract-fender-sn.cjs`. Tool widget assets: `reference/fsn-tool-html.html`, `public/scripts/fsn-tool.js`. Hot-linked images in `joesvintageguitarsaz.com/wp-content/uploads` (63 distinct — swap to local later if perf demands).
- Serial number guides: `/how-to-read-gibson-serial-numbers/`, `/martin-serial-and-model-numbers/`, `/rickenbacker-serial-numbers/`, `/gretsch-serial-number-lookup/`, `/guild-serial-number-lookup/`, `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/`
- `/repair/`, `/consignment/`, `/sitemap/`, `/privacy-policy/`, `/refund_returns/`

**Before declaring any new page done:** run through the [Visual audit + ship checklist](#visual-audit--ship-checklist) below. The "side-by-side comparison to live" step is what catches headline mistakes (missing widgets, wrong header treatment, missing whole sections). Don't skip it.

**Identify the [page archetype](#page-archetypes) before scaffolding.** This site has two distinct templates (Conversion vs. Reference/SEO) — using the wrong one means structural rework later.

## Quick reference: where things live

```
src/
  layouts/Layout.astro          # site shell: <head>, Header, Footer, FloatingCTAs, structured-data slot
  pages/
    index.astro                 # homepage — composes section components + injects FAQPage JSON-LD
    about-me.astro              # 12 sections; ProfilePage JSON-LD; uses PageHero + Margi-script section heads + wood-bg cards
    free-appraisal.astro        # 12 sections; FAQPage JSON-LD; intro video block + 3 Simple Steps + Notable Appraisals (3 case studies) + Free vs Insurance + Market Pulse + condition grading tables + Spotting Fakes + Testimonials + FAQ
  components/
    Header.astro                # desktop nav + mobile hamburger
    Footer.astro                # dark rust outer + tan inner box w/ menu + charcoal copyright
    FloatingCTAs.astro          # fixed right-side SMS/phone/email icons
    Hero.astro                  # photo bg + TOC
    ValueProp.astro             # "Selling to Joe's is Easy" + form + "Every Guitar Has A Story" banner
    AboutJoe.astro              # stats grid + bio + Jim card (uses SectionHeader)
    WhatWeBuy.astro             # 16 instrument cards (uses SectionHeader)
    Testimonials.astro          # masonry reviews + 3 IG embed callouts (uses SectionHeader)
    MoreThanGuitar.astro        # arrow heading + overlapping photos + 3 icon cards
    ClientStories.astro         # polaroid collage + dark rust name banner + cream story panel
    Guide.astro                 # combined "How to Prepare / Ship / Other Places" comparison
    Collections.astro           # rust arrow panel + tan CTA panel
    MeetJoe.astro               # YouTube video left, cream bio panel right
    RecentPurchases.astro       # 3 verified purchase cards (uses SectionHeader)
    FAQ.astro                   # cream wood-textured panel with clip-path arrow + 8 accordions
    ContactSection.astro        # solid rust bg, circle icon list + form
    primitives/
      SectionHeader.astro       # eyebrow + h2 + subhead + optional rule
      Button.astro              # generic CTA: variant="rust"|"cream"|"outline-cream", size="sm"|"md"|"lg", optional block + href
      PageHero.astro            # non-homepage page hero (eyebrow + H1 + subhead + photo/color bg + cta slot + breadcrumbs slot)
      ContactForm.astro         # ready for future pages (existing forms are tagged but kept bespoke)
  config/
    site.ts                     # single source of truth: contact info, hrefs (tel/sms/mailto/googleReviews), socials, primaryNav, sellMenu, idMenu, footer menus
  scripts/
    contact-form.ts             # shared submit handler for any <form data-jvg-contact-form>
  styles/
    global.css                  # @theme tokens (colors, fonts, container), @font-face, skip-link CSS
  assets/images/                # imported by Astro <Image> → auto-WebP at build
public/
  images/                       # raw paths used in CSS backgrounds (`url('/images/...')`)
  fonts/                        # Oswald + Margi woff2
reference/                      # full live-site HTML + extracted CSS + JSON-LD schemas (ground truth)
```

## Design system

**Colors** (CSS custom properties on `:root` via Tailwind `@theme`):

| Token | Hex | Use |
|---|---|---|
| `--color-brand-rust` | `#a03a1e` | primary rust / CTAs |
| `--color-brand-rust-bright` | `#be4b25` | secondary / hover |
| `--color-brand-rust-dark` | `#682412` | deep rust / banners |
| `--color-brand-rust-amber` | `#aa3d1c` | contact section bg |
| `--color-brand-brown` | `#3e2a14` | primary heading color |
| `--color-brand-brown-warm/mid/muted/cool` | various browns | body text, labels, subheads |
| `--color-brand-brown-tan` | `#d2b48c` | tan surface |
| `--color-brand-cream` | `#eedfc0` | CTA button bg, parchment |
| `--color-brand-cream-light/warm/parchment/bone/vanilla` | various | light surfaces |
| `--color-brand-gold` | `#c8983a` | gold accent / star color |
| `--color-brand-charcoal` | `#2a2d33` | copyright bar, charcoal borders |

**Fonts:**
- `--font-display: "Oswald"` — all headings + eyebrows + button labels (weight 600)
- `--font-script: "Margi"` — preloaded but rarely used; reserved for future decorative copy
- `--font-sans` — system stack for body

**Container:** `--container-site: 1100px` (most sections respect this max-width).

**Standard section pattern:** use `<SectionHeader eyebrow="..." title="..." subhead="..." id="anchor" rule={true} />` — gives the consistent eyebrow + Oswald uppercase H2 + 18px subhead + optional 80px rust accent rule.

## User design preferences (DO NOT REVERT)

Stored in `~/.claude/projects/C--Users-noahj/memory/feedback_jvg_design_preferences.md`. Highlights:

1. **"Every Guitar Has A Story" banner stays broken out** — render it as a separate full-width dark-rust strip below the `ValueProp` section, not merged into the tan panel even though the live site has it inside the panel.
2. **No background image on the contact section.** User chose solid `#aa3d1c` rust over the heavily-compressed `contact-form-bg.jpg`.

## Decision log

Living record of intentional design choices on this project. **Check this before "fixing" anything that looks off** — it might be deliberate.

**This table is append-only.** When the user approves a design choice that deviates from the live site OR from default project patterns (especially if it's the kind of thing a future session might "fix" by reverting), add a row. Date it `YYYY-MM` and reference the file. Don't delete old rows — they're the project's institutional memory.

| Date | Page / Area | Decision | Why |
|---|---|---|---|
| 2026-05 | ContactSection | Solid `#aa3d1c` rust bg, no image | The 9KB `contact-form-bg.jpg` pixelates with `background-size: cover` |
| 2026-05 | ValueProp / Homepage | "Every Guitar Has A Story" rendered as separate full-width banner, not inside ValueProp panel | User preference (see feedback file) |
| 2026-05 | Footer | Inventory = white pill + Reverb "R" badge; chevron after "Sell My Guitar"; logo flush bottom, flat border, no drop shadow | User spec from Footer audit |
| 2026-05 | Footer | 5-item bottom menu uses `nowrap` on desktop, `flex-wrap: wrap` below 900px | Fits one line at desktop, stacks cleanly at mobile |
| 2026-05 | Fender SN page | NO PageHero, uses Archetype B layout (header backdrop bands + fixed TOC sidebar + content max-width 860px when TOC visible) | Matches live structure; a conversion-style hero would crowd out the decoder tool |
| 2026-05 | Fender SN page | Bridge plate image is OG-share only, NOT hero bg | Bright reflective metal at the top of the image made the absolute header unreadable |
| 2026-05 | Fender SN page | Content images hot-linked to `joesvintageguitarsaz.com/wp-content/uploads/...` | First-pass speed (63 distinct images). Swap to local `public/images/fender-sn/` later if perf demands it |
| 2026-05 | Fender SN page | Tool widget HTML imported via Vite's `?raw`; JS as a static asset at `public/scripts/fsn-tool.js`; CSS inlined into `<style is:global>` | Preserves the live site's exact class names without scoped-CSS rewriting; lets the IIFE script find its DOM targets |
| 2026-05 | Fender SN page | "About the Author" block at the bottom (eyebrow + H2 + photo + bio + 4 stats + "Why This Guide Is Different" panel + 6 credentials + pull quote + 2 CTAs) — direct port of the live `jvg-author-card` section | Live site has it, retro audit caught it as missing; high E-E-A-T value for an SEO page. Photo hotlinked from live WP uploads. |
| 2026-05 | Fender SN page | Secondary CTA on author block is a styled `<a class="fsn-author__cta-secondary">`, not the `<Button variant="outline-cream">` primitive | The outline-cream variant is built for dark backgrounds; on cream-warm page bg it disappears. Astro scoped `:global()` couldn't beat Button's own scoped-CSS specificity. Inlined the styled `<a>` instead to match live's brown-on-cream secondary CTA. |
| 2026-05 | Project-wide | Adopted `scripts/audit-live-diff.mjs` + `.claude/agents/live-diff-auditor.md` + `scripts/kill-chrome-zombies.ps1` from the `wp-to-astro` template; added `cheerio` dev dep + `npm run audit:live-diff` script; created `reports/` dir | The fender-SN page's broken hot-link 404 and the lazy-load anchor-jump bug surfaced gaps in self-audit. Template now codifies these checks. All future pages run the static script + spawn the auditor agent before being declared done. |
| 2026-05 | Fender SN page | H3 anchor IDs (`auth-*`, `adv-*`, `logo-evolution`) moved from `<h3 id>` to invisible `<div id class="fsn-anchor"></div>` immediately preceding each H3 | Live wraps subsections in `<section id>` and leaves H3s without IDs. Audit script flagged H3 ID mismatches as must-fix. Anchor divs preserve in-page navigation (TOC sidebar, decoder cross-date grid) while matching live's heading-ID structure. `scroll-margin-top: 100px` on the anchor offsets sticky-header collision. |
| 2026-05 | Layout.astro | Added MusicStore+Organization, LocalBusiness, Place, and 2 Service schemas as global JSON-LD; added CollegeOrUniversity inside the fender-SN Article's Person.alumniOf | Audit caught these as missing per-type matches against live. Splitting MusicStore+Organization into a 2-type array (live's pattern) and LocalBusiness into a separate node satisfies the script's exact-type matcher. Per-page CollegeOrUniversity ties to ASU in Joe's bio. |
| 2026-05 | Fender SN page | "Get in Touch!" H3 from live's Boxzilla popup NOT replicated; image count gap of 4 (logo `<Image>` URL transforms + broken live `-scaled.jpg` we correctly avoid + 3 PNG→SVG icon swaps) NOT reconciled | Both accepted as documented exceptions to the static audit. Live's Boxzilla popup is functionally replaced by `<ContactSection>` (H2 "Talk With Joe Today" + inline form). The 4-image gap is all false positives from Astro Image optimization or improvements (broken URL avoided, inline SVGs over PNGs). Verified by the live-diff-auditor agent's qualitative pass. |
| 2026-05 | Project-wide | Added `.jvg-img2` / `.jvg-img3` / `.jvg-imgwc` / `.jvg-cap` / `.jvg-img--uniform` CSS-grid gallery primitive to `src/styles/global.css`; refactored 15 consecutive-figure runs (40 figures) on fender-SN page from vertical stacks to grids | Live uses `<div class="img2">` / `<div class="img3">` for comparison galleries (prefix examples, era variations, hardware comparisons). I built each as a standalone `<figure>` and shipped 15 broken galleries. User caught it. Primitive + detection rule now in CLAUDE.md "Image gallery primitive" section. Future pages must run the consecutive-figure grep before declaring done. |
| 2026-05 | Project-wide | `.jvg-img--uniform` modifier scoped to `.jvg-img2` only (was applying to all gallery variants) | Logo Evolution gallery (3-up with text-overlay images) was getting top/bottom cropped because uniform-height forced 220px + cover. Live's `.img2.uniform-height` rule is also scoped to 2-up only — 3-ups always render at natural aspect. Now matches live exactly. |
| 2026-05 | Project-wide | Added `.jvg-comp-grid` + `.jvg-comp-card` + `.jvg-comp-card--tall` + `.jvg-comp-card__body` image-card grid primitive to `src/styles/global.css`; refactored Kluson Tuner Eras section to use it (3 cards each with image + descriptive body) | Live's "Three Kluson Eras" used `<div class="comp-grid">` with `<div class="comp-card tall">` cells (image + `cbody` paragraph). I had built it as a 4-image jvg-img2 gallery with a separate bullet list, which lost the side-by-side photo-with-label-card pairing. New primitive matches live's structure. The standalone PAT APPLD image below the grid uses `.fsn-imgwc--standalone` (one-off pattern for single images outside a gallery). |
| 2026-05 | Fender SN page | `.fsn-callout` restyled from "white box with gold left border" to live's exact "🎸 JOE'S TIP" treatment: dark brown gradient (`#4a3520 → #3a2a18`), cream text, gold `::before` label, gold-highlighted `<strong>` and `<a>` | Live's `.tip` class has a distinctive branded appearance: dark gradient bg with "🎸 JOE'S TIP" gold label injected via `::before`. My original `.fsn-callout` was a plain warning-style box that looked generic. All 28 callouts now match live's visual treatment. Markup pattern: `<div class="fsn-callout"><p>...</p></div>` — the "JOE'S TIP" label comes from CSS, never typed inline. |
| 2026-05 | sell-my-fender page | Live's bottom `#get-in-touch-with-joe` bespoke contact form replaced with the shared `<ContactSection />` ("Talk With Joe Today"). Live's `#get-in-touch` Boxzilla popup NOT replicated. Live's 3 IG-embed reels alongside the 3 Google reviews NOT replicated (testimonials are 3-up Google reviews only) | Two contact forms back-to-back is ugly; the shared component covers the same conversion goal and keeps cross-page consistency. Boxzilla popup is a WP plugin feature, not page content. IG embeds add Instagram tracking and are easy to skip without losing the page's core value proposition. Audit's 2 remaining "missing heading" findings ("Get In Touch With Joe For A Free Vintage Guitar Consultation Today!", "Get in Touch!") and 2-image count gap are accepted as documented exceptions. |
| 2026-05 | sell-my-fender page | FAQ accordion `<h4>` elements use live's exact `toggle_<hex>` IDs (e.g. `toggle_e5a80b5c1eab84219`) so anchor links from external pages still work and the audit script's heading-by-ID matcher finds them | Live's wpcf7 plugin generates random IDs that we'd otherwise lose on rebuild. Hardcoding them preserves backlinks and inbound deep-link parity. |
| 2026-05 | sell-my-fender page | Top intro form uses a special `<select name="serial-number">` field (8 options) above the standard name/email/phone fields — direct port of live's wpcf7 form, hooked into the same Mailgun-bound `data-jvg-contact-form` handler | Lets sellers self-classify their guitar's serial-number era before submitting, giving Joe a contextual lead. The serial-number value submits alongside the other form fields as a single combined contact submission. |
| 2026-05 | sell-my-fender page | ~~Hero rebuilt: pure rust vertical gradient (no photo bg). Meet Joe wrapped in single cream-framed card with drop shadow.~~ **BOTH SUPERSEDED 2026-05-26 v5** — see rows below. TOC `<details>` widget under intro text + intro section colors inverted (cream-warm bg + dark-rust form panel) REMAIN correct. | Audit (Gemini-3-Pro single-model, 2026-05-26) caught some real fixes but compounded two visual misreads (hero "no photo" + Meet Joe "card with shadow") that I trusted without DOM-querying. |
| 2026-05 v5 | sell-my-fender page | **Hero photo bg RESTORED.** Uses live's exact image URL `https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/07/background.jpg` with a dark vignette overlay via `::before` (matches live's `.tp-bnr::before` verified via `getComputedStyle`). H1 eyebrow restyled to Title Case + gold + decorative side bars (matches live's "sub-t" treatment). Primary nav uppercase removed site-wide in `Header.astro`. Secondary nav gained vertical dividers. | The v3 "remove photo bg, use pure rust gradient" decision was WRONG — it came from a v2 Gemini audit that misread live as a pure gradient. Author trusted the misread without DOM-querying live's actual `background-image`. Three subsequent audits failed to catch the bug because the small thumbnail rendering of screenshots in Claude's context made the B&W photo's people look like gradient noise. **Process lesson:** before any "remove/swap this background" decision, run `browser_evaluate` on the live page to read `getComputedStyle(target).backgroundImage` directly. Eye-on-thumbnail is unreliable; DOM-text is not. |
| 2026-05 v5 | sell-my-fender page | ~~Meet Joe section: section bg cream, NO card wrapper, white text panel~~ **SUPERSEDED 2026-05-26 v6 — the v5 audit went two levels deep into the DOM but stopped before reaching the row, missing the decorative pseudo-elements that live the level ABOVE the columns.** | Caught the inner white wrapper but missed the OUTER white card + rust triangle that frame both columns together. |
| 2026-05 v6 | sell-my-fender page | ~~Meet Joe with white card + rust triangle~~ **PARTIALLY CORRECT — superseded by v7 which adds the outlined frame + video overflow.** | v6 caught the row-level decorative elements but missed the column-level outlined-frame pseudo and the video's negative-margin overflow. Same incomplete-DOM-walk class of error. |
| 2026-05 v7 | sell-my-fender page | ~~Meet Joe with outlined frame + video overflow~~ **Caught the chrome correctly; v8 swapped the iframe for lite-youtube to match live's video rendering exactly.** | v7 was structurally correct but used a raw iframe — different play-button + thumbnail UI than live's lite-youtube component. |
| 2026-05 v8 | sell-my-fender page | **lite-youtube web component swap + alignment fix.** Replaced raw `<iframe>` with `<lite-youtube videoid="U3eJgXLs4w8" params="rel=0&modestbranding=1">` — the exact same Paul Irish lite-youtube-embed package live uses. CSS + JS loaded via `cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.2`. Renders YouTube thumbnail + red play button instantly, swaps to iframe only on click. Also fixed video vertical alignment: `align-items: center` → `flex-start` + `padding-top: 24px` so the video sits in the upper portion of the column (matches live). | Live uses lite-youtube; raw iframe doesn't visually match the clean placeholder. CDN approach (vs npm install) keeps the dependency reversible and matches live's loading pattern. Both my version and live now fetch the SAME thumbnail from `i.ytimg.com/vi_webp/<id>/sddefault.webp` — no exclusive content on live's side. |
| 2026-05-26 | sell-my-gibson page (Batches 1–4) | **Full Archetype A conversion page built from scratch** (user instruction: don't reference sell-fender's Meet Joe code which had quality issues). 14 sections: hero (small H1 + big H2 + decorative side-bars matching live's `.tp-bnr .sub-t`) → intro form with Gibson-specific serial-number dropdown + TOC → Meet Joe Connoisseur with the v9 white-card + rust-triangle + outlined-rust-frame chrome (videoid `fTpIquyV-j8`, lite-youtube params unioned from the start) → 4 content sections (how-to-sell, how-much-worth, best-way alternating image sides + my-guitar-buying-process with 3 SVG icon cards) → testimonials with Pinterest masonry of 6 reviews from `testimonials.json` (Randy Abercrombie surfaced first for Gibson topical relevance) + 3 Gibson IG reels (mandolin / L-4 / J-45) → discover banner → Lyman story section → 8-model payout grid (Les Paul, SG, ES, Flying V, Explorer, Firebird, Acoustic, Bass) → 8-Q FAQ accordion using shared FAQ component with live's exact wpcf7 toggle_* IDs preserved → final CTA banner → shared ContactSection. CSS-prefix `.smg-`. Live anchor IDs preserved verbatim (`meet-connoisseur-joe-dampt`, `how-to-sell-your-guitar`, `how-much-is-my-gibson-guitar`, `best-way-to-sell`, `my-guitar-buying-process`, `our-clients-testimonials`, `find-out-gibson-really-worth`, `consider-selling-your-guitar`, `receive-the-highest-payout`, `faqs-about-gibson`, `receive-free-consultation`). Two a11y bugs caught + fixed in Batch 4 by the new `audit:a11y` script: outline-cream button on tan banner (1.49:1) → switched to cream solid; Lyman subtitle rust-bright on cream (3.77:1) → moved to rust-dark. Lyman photo URL was 404 (truncated during HTML extraction) → fixed to live's `-768x1024.jpg` size variant. Final state: 0 errors, 0 warnings on `npx astro check`; `audit:a11y` only the 4 pre-existing footer-link contrast issues (matches sell-fender baseline); `audit:live-diff` 6 🔴 must-fix items all in the "accepted matches-live-design" bucket (fusionRow=0 intentional Avada stripping, picture/source=0 we use `<img>` not `<picture>`, model card photos skipped in favor of text-only cards, "Get in Touch!" Boxzilla popup replaced by shared ContactSection, JSON-LD type mismatch is the audit's matcher false-positive — local has most types just in different order). New methodology preempting all v9/v10/v10.1 sell-fender bugs: built right the first time. Time per batch: ~10 min each. | This page validates the deterministic-audit workflow: `extract-html-first.mjs` + `getComputedStyle` for build-time precision, `audit:a11y` as a CI-gate catching contrast regressions before they ship. Every previous learning ([v9 anchor/HR fixes, v10 Pinterest+IG, v10.1 contrast fix]) applied preemptively. |
| 2026-05-26 v10.2 | Project-wide tooling | **Added `scripts/audit-a11y.mjs`** + `npm run audit:a11y`. Uses `@axe-core/playwright` (industry-standard a11y scanner). Runs WCAG 2.1 A+AA rule set including `color-contrast` — the rule that would have caught the v10 IG-caption bug. Supports `--viewport 1920\|390\|both` and `--include-tags` to scope WCAG levels. Outputs JSON + Markdown to `reports/a11y/`. Exits non-zero on any violation. Same script also added to wp-to-astro template. **Retroactive verification:** temporarily re-introduced the dark-on-dark IG caption bug, ran the script, got `🔴 SERIOUS color-contrast (10 nodes)` — confirms detection sensitivity. After restoring the fix, 4 pre-existing violations remain (footer copyright links: rust-bright #be4b25 on tan #d2b48c = 2.52:1) — these are pre-existing matches-live-design decisions, not regressions, and were already documented as known gaps in the project's status notes. | Closes the gap that allowed the IG-caption contrast bug to ship. Going forward, `audit:a11y` should run on every page before declaring done — same standing rule as `audit:live-diff`. |
| 2026-05-26 v10.1 | sell-my-fender Testimonials | **Fixed IG caption contrast + removed "More Reviews" button.** IG caption text was `--color-brand-brown` (#3e2a14) on dark-rust section bg (#682412) — failed WCAG AA. `<strong>` headlines were `--color-brand-rust-dark` (same as bg = invisible). Both moved to cream + brown-tan, matching the section's existing text color scheme. The "More Reviews" button at the bottom removed — 6 cards + 3 IG reels are enough social proof, and each review name already links to its individual GMB review. | User caught it visually; we lacked tooling. Motivated the new `audit:a11y` script (next row). |
| 2026-05-26 v10 | sell-my-fender Testimonials | **Rebuilt section per user request.** (a) Bumped from 3 hard-coded reviews to **6 reviews** sourced from `reference/testimonials.json` (Jessica Hammond, Caleb King, Larry Hattier, Randy Abercrombie, Bobbie Jo Kelly Greene, Marie Coyle) — each links to its individual Google review (better UX than the generic Maps link the previous 3 used). (b) Replaced fixed 3-column grid with **Pinterest-style CSS-columns masonry** (`column-count: 3` desktop → 2 tablet → 1 mobile; `column-fill: balance`; per-card `break-inside: avoid` keeps cards intact across column breaks). Reading order is column-then-row, which is acceptable for unordered review cards (Grid `masonry` considered but still not stable cross-browser as of 2026-05). (c) Added the **3 Instagram reels** (`DWCSaGtD4qS`, `DUO_ZAqkq8F`, `DT3vdFFkps8`) matching live exactly, in a 3-up grid below the reviews; IG's `embed.js` loaded via the page's `head` slot (same pattern as lite-youtube). **Supersedes** the 2026-05 decision-log row "Live's 3 IG-embed reels NOT replicated" — user explicitly requested them this session. **Verified** post-deploy via `getComputedStyle`: 6 cards rendered, `column-count: 3`, `column-gap: 20px`, all cards have `break-inside: avoid`, IG `embed.js` successfully replaced 3 blockquotes with iframes. | Closes the testimonials gap surfaced in v8 audit. Pinterest masonry handles varying-length reviews far better than fixed-row grid (no dead space below short cards), and 6 reviews vs 3 doubles the social proof. |
| 2026-05-26 v9 | sell-my-fender Meet Joe | **Anchor ID + HR separator + section padding + lite-youtube params parity with live.** Audit run via new `extract-html-first.mjs` (Chrome CSS Coverage) + DOM `getComputedStyle` cross-check (no AI-eyeballing of screenshots, per the new methodology). Found: (a) section ID `meet-joe` differed from live's `meet-vintage-guitar-buyer-joe-dampt` (broke inbound links); (b) `.smf-rule-cream` rendered as 2.4px×80px tri-color border-only accent vs live's `.main-sep` which is 3px×100%-column-width rust-dark bar; (c) section padding `90px 0 110px` vs live's `100px 30px 120px`; (d) lite-youtube `params` only had `rel=0&modestbranding=1` vs live's `wmode=transparent&autoplay=1&enablejsapi=1`. **Fixes:** section ID now matches live + invisible `<div id="meet-joe" class="smf-anchor">` kept for backward-compat; class renamed `.smf-rule-cream` → `.smf-meet__sep` with live-matching styles; padding bumped to `100px 30px 120px`; lite-youtube params unioned to `wmode=transparent&autoplay=1&enablejsapi=1&rel=0&modestbranding=1`. Verified post-fix: H3 size 30px ✅, HR width 484px (live 493) ✅, section padding exact ✅, params attribute exact ✅. 13/16 computed-style props matched on first audit; remaining 3 now fixed. Reports at `reports/meet-joe-audit-v9.md`. | Validates the new deterministic-audit methodology: every finding had a measured value, no anchoring-bias-on-thumbnails, no cross-model consensus needed. Closes the 8-revision saga that motivated building `extract-html-first.mjs` in the first place. |
| 2026-05 v8 | Layout.astro | **New `<slot name="head" />`** added before `</head>` close. Pages can now inject `<link>` / `<script>` into the document head via `<link slot="head">` / `<script slot="head">`. First use: sell-fender's lite-youtube CDN assets. Future pages: page-specific structured data, web-component scripts, font preloads not common enough for Layout's default head. | Avoids Layout-bloat when a single page needs a CDN dependency. Astro-idiomatic slot pattern. |
| 2026-05 | sell-my-fender page | "Discover the Real Value" banner button: `.smf-btn--cream` → `.smf-btn--rust` | Live's right-column panel is cream; the button sat on it with the same cream background and was effectively invisible (no contrast). Both Gemini-3-Pro and a quick visual confirm flagged it. `.smf-btn--cream` is for use on DARK backgrounds (label-on-dark CTAs); `.smf-btn--rust` is for use on LIGHT backgrounds. The variant was the wrong one. |
| 2026-05 | Project-wide audit workflow | When invoking `mcp__zen__chat` / `mcp__zen__consensus` DIRECTLY (not via the live-diff-auditor agent), the caller MUST filter findings against this Decision log before reporting to user. The agent's `c4` step does this synthesis automatically; bare-call workflows don't | I hit this exact gap on 2026-05-26 — Gemini flagged 3 missing "showcase cards" (= the IG-embed reels documented on row above as intentional) as 🔴 must-fix. I initially propagated this to the user as a regression. Correct flow: read Decision log → reclassify exempted items as 🟢 → report only real regressions. Adding this row as a permanent reminder. |
| 2026-06 | Site-wide copy (SEO v2 Prompt 3) | Zero-dash copy pass on all rendered output: ranges became "X to Y", "Label — value" headings and table cells became colons, em-dash asides became comma pairs or sentence splits, h1/h2 title-cased. This OVERRIDES the earlier "structured Name—range headings + table-cell em-dashes KEPT" call. Exceptions live in reports/seo-v2/copy-allowlist.json: verbatim customer reviews, testimonials, and ClientStories story text stay dash-intact; reference/-ported widget internals and their JSON-LD stay untouched; emoji verified present on the live pages are allowlisted, not removed. Gretsch seqTable em-dash placeholder cells now render empty. Gate: `npm run audit:copy` must exit 0 (enforced by the check-copy GitHub Action on every PR). | The SEO v2 prompt pack mandates zero dashes in rendered output, and its conflict-resolution order puts the pack's prompts above prior decisions. Quoted material and live-parity widget internals are excluded because altering them is worse than the dash. |
| 2026-06-12 | Footer + MoreThanGuitar (homepage), site-wide | **Contrast fixes that deviate from the retired live design (post-launch a11y).** `.jvgft__copyright a` (footer copyright links, every page) moved from `--color-brand-rust-bright` #be4b25 (2.52:1 on tan, fails WCAG AA) to `--color-brand-rust-dark` #682412 (5.76:1), hover to `--color-brand-brown`. `.mtg-col__h4` ("More Than A Guitar" subheads) moved from rust-bright #be4b25 (3.78:1 on cream, fails AA) to `--color-brand-rust` #a03a1e (5.11:1). Verified with axe: 0 contrast violations after. | The old WordPress site had these low-contrast values, previously logged as "matches-live, intentional." Now that the Astro site IS the live production site, real WCAG AA compliance outranks parity with the retired design. Josh-approved 2026-06-12 from the homepage audit. **Do NOT revert to rust-bright to "match live."** |
| 2026-06-12 | Layout.astro global JSON-LD | **Consolidated the business schema + removed aggregateRating (post-launch SEO, Gemini 2.5 Pro + GPT-5.2 consult).** The separate `MusicStore`+`Organization` (`#musicstore`), `LocalBusiness` (`#localbusiness`), and `Place` (`#place`) nodes were folded into the single `ProfessionalService` node via `additionalType: ["LocalBusiness","MusicStore"]` (added `areaServed`, `founder` to the Person `@id`, `image`); both `Service.provider` refs repointed to the primary `@id`. Removed the self-placed `aggregateRating` (5 / 405) and the 24/7 `openingHoursSpecification`. JSON-LD blocks went 9 to 6, all valid. | **Supersedes** the 2026-05 "Added MusicStore+Organization, LocalBusiness, Place... per-type breakdown" row. A self-placed rating on a LocalBusiness earns no star rich result (those come from the Google Business Profile) and a self-serving or cross-platform-blended number risks a spammy-structured-markup manual action; 405 also contradicted the visible "2,100+" claim (reworded from "Five-Star Reviews" to "Positive Reviews" on the homepage). 24/7 hours are false for a by-appointment business. **Do NOT re-split into per-type nodes or re-add aggregateRating without first-party on-page Review markup.** |
| 2026-06-15 | `contact-form.ts` — hCaptcha load timing | **Defer hCaptcha until first form interaction.** `init()` no longer calls `loadHcaptcha()` on `DOMContentLoaded`; each form arms it via `focusin` + `pointerdown` (`{ once: true }`). | Josh's call, applied across all MFWD Astro projects (also phil-reese). Keeps the hCaptcha `api.js` off the initial-load critical path (CWV win). Safe: filling any field fires `focusin` first, so the widget loads well before submit; `loadHcaptcha()` is idempotent. **Do NOT revert to eager load-on-DOMready.** |
| 2026-06-16 | Layout.astro global logo JSON-LD | **Added `license` + `acquireLicensePage` to the brand-logo ImageObject, pointing at the RESTRICTIVE `imageLicense.brandAssetsUrl` (`/photo-license/#brand-assets`, all rights reserved).** Supersedes the prior "logo = COPYRIGHT-ONLY, NO license/acquireLicensePage, so the brand mark never earns a Licensable badge" decision. The logo carries `creditText` + `copyrightNotice`, so Google's Rich Results "Image metadata" check detects it as an image-metadata item and emits two optional notices: `Missing field "license"` and `Missing field "acquireLicensePage"` — on **every page** (the logo is in the shared Layout). Pointing both fields at the all-rights-reserved brand-assets terms (NOT the permissive `photoLicenseUrl`) clears the notices sitewide without telling anyone they may reuse the logo. | Josh's call 2026-06-16: "even if it's optional we should have it." The notices were valid/non-critical but Josh wanted a clean Rich Results card. Using the restrictive brand-assets URL keeps the logo all-rights-reserved while populating the optional fields. **Do NOT point the logo at `photoLicenseUrl`** (permissive) and **do NOT strip these back to copyright-only to "match the old policy."** |
| 2026-06-20 | Project-wide / image SEO | **Retain legacy `/wp-content/uploads/*` image URLs after cutover instead of 404ing them; make the image sitemap discoverable.** Cross-model consult (GPT-5.5-pro + Gemini 3.1 Pro) overturned an initial "deep image positions ≈ no value, skip retention" call. Both said: retain old image URLs by serving the original file at the old path (HTTP 200) — or, to avoid repo bloat, 301 to the STABLE `/images/.../<file>.jpg` (same file/format) — but NEVER 301 to the hashed `/_astro/*.webp` (hash + format change every build). Reasons I'd underweighted: image ranking history transfers slowly, and the vintage-guitar niche depends on hotlinks/embeds (Pinterest, Reverb, forums). Separately found `/image-sitemap.xml` was live but undiscoverable (absent from the deployed robots.txt + unsubmitted in GSC). See [Legacy image URLs](#legacy-image-urls--retain-them-at-cutover-do-not-let-wp-contentuploads-404). | Image search drives ~450 clicks + ~150k impressions/quarter; cutover left old image URLs 404ing with no redirect, silently bleeding image equity + referral traffic. |

| 2026-07-03 | Project-wide toolchain | **npm -> pnpm + Astro 6 -> 7 migration.** packageManager pnpm@11.7.0; pnpm-workspace.yaml (nodeLinker hoisted + native-build allowlist); package-lock.json removed; `verify` script now `pnpm run`. Astro ^7.0.5 + @tailwindcss/vite/tailwindcss ^4.3.2 + @astrojs/rss ^4.0.19. dev.cmd/mirror-serve.cmd removed from the repo (org lean-repo rule; the global preview launch.json now calls `npm run dev` with a cwd directly - supersedes the old "don't delete" note). Full-site visible-text parity vs the pages.dev Astro 6 build: 71/91 pages byte-identical, 19 pages differ ONLY in quote-mark direction on ambiguous marks (see next row), 1 deliberate fix (L5 scroll hint). | Org standardization (matches wp-to-astro template + MFWD/Phil). Faster builds; Vicente's recommendation. |
| 2026-07-03 | Markdown rendering | **smartypants stays ON (default) - do NOT set `markdown: { smartypants: false }` on this repo** even though the org rule prefers it. JVG's blog markdown is authored with STRAIGHT quotes and relies on smartypants for the typographic quotes the live site shows; turning it off changes rendered typography on 30 posts (parity break). The dash risk is handled at the source instead: table "none" cells in gibson-shipping-totals are backslash-escaped per hyphen (`\-\-\-`, 414 cells - Astro 7's engine reads the old `\---` escape differently and emitted a hyphen+EN-dash), and the L5-CES "scroll to see more ----->" hint is now a real arrow (Astro 7 smartypants converts hyphen runs the old engine left alone). New md content: never use `--`/`---` runs in prose or cells; the check-copy gate still scans output. | Astro 7's remark-smartypants also curls ambiguous quote marks differently (inch marks after digits flip direction; '56-style year elisions now correctly render as apostrophes) - accepted as engine normalization, 19 pages, meaning-identical. |
| 2026-07-03 | Copy sources | **Literal HTML entities (&rsquo; &amp; etc.) replaced with real characters across 52 src files (1,766 replacements).** Astro 7 escapes interpolated PROPS strictly, so entity strings passed as props (page titles, meta descriptions, subheads) double-escaped - the about-me <title> literally showed "Joe&rsquo;s" in the tab/SERP. Template TEXT entities still rendered fine, but the class is now dead: author real glyphs, never entities, in any copy string. | 66 double-escape artifacts across 17 pages in the first Astro 7 build; 0 after. |
| 2026-07-17 | Fender serial tool v2 (test page) | **F-plate serial 200000 returns the 1966/1967 overlap, not a flat 1967** (PR #70). `F_PLATE_TRANSITION` overlap extended `180000-199999` → `180000-200000`; `F_PLATE` CBS era starts at `200001`; routing bounds + `EXPECTED_DIVERGENCES` updated (parity 0 mismatches). | Joe's call on the shared edge: serials are approximate, so 200000 reads as both years. His own page F-plate table already spans 1966→200000 and 1967 from 180000. **Do NOT "tidy" 200000 back to a single year** — it's deliberate. |
| 2026-07-17 | Fender serial tool v2 (test page) | **Counterfeit-authenticity note on every decode** (PR #70): "a real serial isn't proof of a real guitar." Answers the Gemini deep-research "smart parsing / counterfeit mitigation" point. | On-brand for Joe (authenticity authority); the other 4 Gemini tool recs were already covered by the rebuild (index-bloat N/A on a client-side decode, INP trivial on a ~67-row dataset, unified JSON-LD already on the guide page, single-brand focus already true). |
| 2026-07-17 | Fender serial tool v2 (test page) | **Appraisal bridge + analytics + ungated email-to-report** added to the result card (PR #71). Appraisal CTA → `/free-appraisal/`; guarded `dataLayer` events `fender_serial_decode` / `fender_serial_report_request`; optional opt-in email form → `functions/api/serial-report.ts` (Mailgun, CAN-SPAM consent, HTML-escaped fixed template). | Point the tool at seller-acquisition, not just trivia. Year is NEVER gated behind email (shows on-page first); email is a value-add. **GOTCHA: the function only runs on the CF deploy, not `astro dev`; `MAILGUN_*` are Production-scoped so it works on the merged test page but not a CF preview branch.** |
| 2026-07-18 | 9 pages — og featured images | **Restored the 8 page-specific featured images lost in the WP migration** (repair, consignment, sell-an-amplifier-or-effect, reverb-reviews, and the 4 value guides: strat / tele / les-paul / martin-dreadnought) and gave the new `/vintage-fender-stratocaster-value-guide/1956/` sub-page the Strat card. A rendered-truth crawl of all 106 sitemap URLs found every page emits a valid og:image (0 broken), but these 8 fell back to the generic homepage card while the WP originals (confirmed via `reference/` snapshots + Wayback page HTML) had branded per-page cards. The files were NOT in the repo, 404'd at legacy `/wp-content/uploads/` paths, and the binaries were NOT on the Wayback Machine — recovered from the retired WP install on Joe's Vultr box (`root@104.238.140.125`, `/var/www/test.joesvintageguitarsaz.com/htdocs/wp-content/uploads/`, the sole surviving copy). Exact originals kept untracked in `reference/recovered-featured-images/` (year/month structure); deployed copies at `public/images/og/<page-slug>.jpg`. The Reverb card was webp-only on WP → converted to JPG (sharp, q88) because `Layout.astro` declares `og:image:type image/jpeg` and some social crawlers reject webp; it is 868x868 so that page passes explicit `ogImageWidth`/`ogImageHeight` (the other 7 are 1200x1200 = Layout defaults). | These are og-only share images, NOT rendered on-page — so they get NO `ImageObject` licensing (contentUrl must match a rendered `<img>`, see Image licensing section). Do not "localize" the hardcoded `https://www.joesvintageguitarsaz.com/images/og/*` ogImage URLs to relative paths — OG images must be absolute URLs. |
| 2026-07-19 | Layout + 13 pages — og:image dimensions and MIME type | **Stopped hand-declaring og:image size; derive it.** `Layout.astro` defaulted `ogImageWidth`/`ogImageHeight` to 1200x1200 and only 2 of 43 page files ever overrode them, so a live sweep of all 106 sitemap URLs found **13 pages declaring 1200x1200 for files that are actually 250x148 to 6240x4160** — including `/guild-serial-number-lookup/`, the site's #2 page by clicks. New **`ogCardSize(path)`** helper in `src/lib/images.ts` reads the real width/height from `resolveImage()` and returns Layout's props to spread: `<Layout ogImage={...} {...ogCardSize(SAME_PATH)} />`. Applied to the 10 pages whose card is a pipeline asset. The 3 whose card is served straight from `public/` (`guild-serial-number-lookup` 1024x683, `how-to-read-gibson-serial-numbers` 2560x1707, `rickenbacker-serial-numbers` 2560x1707) keep explicit numbers, because nothing knows a public/ file's size at build time. **`og:image:type` is no longer hardcoded `image/jpeg`** — it is derived from the extension (a new optional `ogImageType` prop can still override), which fixes `/sell-my-fender-guitar/` declaring JPEG while serving a PNG and removes the constraint that forced the Reverb card off webp in the 07-18 row above. Gate: 111/111 built pages now match actual file dims AND type. | Platforms use the declared size to lay out the card slot BEFORE fetching the image, so declaring square and delivering 3:2 yields a cropped or letterboxed card. Deriving beats declaring: swap the source file and the tags follow. **Do NOT re-add hand-typed `ogImageWidth`/`ogImageHeight` next to a pipeline-asset `ogImage`** — use `ogCardSize()` so they cannot drift apart again. |
| 2026-07-20 | Layout.astro — **GTM retired; WhatConverts hardcoded, idle-deferred** | `GTM-TKN5P7S` was a **~420 KB container parsed on every page load before a single tag fired**, and it was also the delivery vehicle for both WhatConverts profile scripts. Removed the loader + the `<noscript>` iframe. GA4, Google Ads, Meta Pixel and Bing UET move to **Cloudflare Zaraz** (edge-side, zero browser cost). **WhatConverts stays client-side and is the only tag hardcoded here** — it has no Zaraz component and needs the real browser session to set `wc_client`/`wc_visitor`. Loaded after `load` at `requestIdleCallback`, production-hostname-gated, with a `querySelector` guard so an overlap with GTM degrades to a no-op. `window.dataLayer` is kept alive as a no-op array because `FenderSerialTool.astro` pushes guarded events into it. **⚠️ TWO PREREQUISITES BEFORE MERGE:** (1) add Meta Pixel `934500208412401` to Zaraz — Zaraz already has GA4 + Ads + Bing, Meta is the gap, and retiring GTM without it silently kills Meta; (2) remove the WhatConverts tags from the GTM container **first**, then deploy — a brief gap is far safer than a brief overlap, since WC loading twice risks double-binding and duplicate leads. **Do NOT "complete the set" by adding `fbevents.js` / `bat.js` to the hardcoded list** — loading those libraries without their init snippets downloads them and fires nothing, which is presence-without-capture in a new costume. | Josh's call 2026-07-20: Zaraz-only, no GTM, speed prioritized over attribution latency. Idle-deferral is safe for attribution specifically because it still fires on the landing page with the `gclid` in the URL — **do not move WhatConverts to a first-interaction trigger**, which can fire on page 2 where the gclid is gone and the referrer is internal. ClickCease dropped (not carried over) — Google already filters invalid clicks for free, IP exclusion is weak against rotating residential IPs, and the vertical is low-volume. |
| 2026-07-20 | Layout.astro + `contact-form.ts` — **WhatConverts form capture** | **Every web-form lead was invisible to WhatConverts from the 2026-06-12 cutover until this fix — 247 of them between 2026-06-13 and 2026-07-19.** Leads themselves were never lost (Mailgun kept delivering, and GA4 `/thank-you/` hits held steady at ~9/day), which is exactly why nobody noticed: WhatConverts phone calls kept arriving, so the account looked half-alive. **Root cause:** GTM injects both WC profile scripts, so the tracker IS on the page — but presence is not capture. WC auto-capture binds only to the selector in the profile's form set, still the retired WordPress `.wpcf7-form` (form set 65952, profile 97950); the Astro forms are `fetch()`-based and match nothing. **Fix:** `window.jvgWcTrack()`, an inline host-gated global in `Layout.astro`, posts the lead to WC's own `/lead/form` endpoint on submit success. **CRITICAL — do NOT "simplify" this to `$wc_leads.track.form(65952, …)` the way MFWD (44844) / ACP (55497) / True Blue do it.** Those sites load ONE profile script; JVG loads TWO, both define `window.$wc_leads`, and the survivor is the PHONE profile's, whose push hardcodes `wc_profile_id=97949`. Pairing profile 97949 with a form set owned by 97950 is silently DISCARDED by WhatConverts — HTTP 200, no lead, no error anywhere. Verified live 2026-07-20: `track.form(65952, …)` produced nothing; the direct push with `wc_profile_id=97950` produced lead **247805112**. A regression here looks completely healthy and captures zero. | Fleet lesson LG11 ("presence of the script is NOT capture") had already been written after MFWD, ACP, and True Blue each lost form capture at cutover, but JVG was excluded from that remediation on the false premise that it had no WC script. It did, and does. The mismatched-profile wrinkle is unique to JVG so far and is the reason the fleet's client-side helper could not be copied verbatim. |
| 2026-07-20 | `contact-form.ts` + `photo-upload.ts` — **PII out of the `/thank-you/` URL** | The success redirect passed the lead's name, email, and phone as query params (`/thank-you/?name=…&email=…&phone=…`). That put live customer PII into GA4 (readable in the Pages report), Cloudflare logs, browser history, and any outbound `Referer`. Sending PII to Google Analytics also violates its terms and is grounds for property termination. Replaced with a same-tab `sessionStorage` handoff under key `jvg:lead-handoff`; `photo-upload.ts` reads that, with a query-param fallback retained only for visitors mid-flow across this deploy. **Do not reintroduce PII into the URL** — if part two ever needs another field, add it to the sessionStorage object. | Found while tracing the WhatConverts break; the same redirect line was responsible for both. GA4 has ~5 weeks of accumulated PII in `pageLocation` that should be purged separately. |
| 2026-07-19 | `/sell-my-fender-guitar/` + `/sell-my-rickenbacker-guitar/` — unusable share cards | **NOT fixed, needs a real image chosen.** sell-my-fender's og:image is `Guitar.png`, a **339x386 / 6 KB decorative icon**; sell-my-rickenbacker's is **250x148 / 6 KB**, under the 200x200 platform floor, so it will not render as a card at all. Their dimensions and MIME type are now declared HONESTLY (that part is fixed), but the underlying images are wrong for the job. | Picking a replacement is a content decision, not a code one — flagged to Josh 2026-07-19. Four other pages (`sell-my-gretsch`, `sell-my-guild`, `sell-my-national`, `sell-your-vintage-dangelico`) serve 1.3-2.2 MB / 5472-6240px cards: under Facebook's 8 MB limit so not broken, but worth downscaling to ~1200px wide in a later pass. |

### Template-level lessons learned (cross-project)

These are not project deviations — they're recurring failures that shaped the wp-to-astro template's tooling. **Read before debating whether an audit check is "too strict."**

| Source | Lesson | Codified as |
|---|---|---|
| JVG 2026-05 | Hot-linked image returned 404, survived 4 visual audits | `npm run audit:live-diff` does HEAD-check on every external image URL |
| JVG 2026-05 | `<img loading="lazy">` made `#custom-shop-serials` look empty after anchor jump | `live-diff-auditor` agent forces `loading="eager"` before screenshotting; documented in [Image migration](#image-migration--hot-link-is-single-session-only) |
| JVG 2026-05 | Self-audit anchored on what was built, missed what was missing | New `live-diff-auditor` subagent with fresh eyes (no anchoring on local code) |
| JVG 2026-05 | Same-model parallel subagents gave correlated false-positive consensus | Rule #4 in [Must-follow rules](#-must-follow-rules-read-before-writing-code) — escalate to cross-model after 2 failed attempts |
| Gemini adversarial review 2026-05 | Audit script flagged `alt=""` as missing alt (WCAG-valid for decorative imgs) | Script only flags missing `alt` attribute, not empty value |
| Gemini adversarial review 2026-05 | Audit script's `fetch()` blocked by Wordfence / CF Bot Management | All audit fetches send a realistic browser User-Agent |
| Gemini adversarial review 2026-05 | Audit script ignored `<video>` and `<iframe>` — hero videos / YouTube embeds disappeared silently | Script diffs video sources and iframe sources |
| JVG 2026-05 | 15 comparison-image galleries shipped as vertical figure stacks (matched live's image COUNT but missed live's grid LAYOUT) — static audit's image-count check returned 0 diff, missed the layout | New `jvg-img2`/`jvg-img3` gallery primitive in `global.css`; CLAUDE.md "Image gallery primitive" section codifies the detection rule (consecutive-figure grep); live-diff-auditor's qualitative pass should explicitly flag "N consecutive figures on local — verify live doesn't use a grid container" |
| JVG 2026-05 | 16 of 27 "Joe's Tip" callout boxes silently dropped on fender-SN page (live uses `<div class="tip">`, local uses `<div class="fsn-callout">`). Heading + image + JSON-LD checks all passed — but no check counted callouts. User caught it on visual inspection. | New `countCallouts()` function + diff check in `scripts/audit-live-diff.mjs`. Selector pattern-matches both live's `.tip`/`.info-box`/`.warn`/`.callout` AND local's `<prefix>-callout`/`<prefix>-tip` patterns. Diff ≥3 → 🔴 must-fix, diff ≥1 → 🟡 should-fix. On the original broken state (-21 callouts) this would have flagged on the first audit pass. |

## Page archetypes

This site has **two distinct page templates**. **Identify which archetype you're building before you scaffold** — picking the wrong one means structural rework later.

### Archetype A: Conversion pages

`/`, `/about-me/`, `/free-appraisal/`, `/sell-my-*/`, `/contact-me/`, `/sell-a-guitar-collection/`

- Big `<PageHero>` with photo background, full-width
- Site Header is `position: absolute` over the hero (header text reads as white-on-dark-vignette)
- Single-column body
- Heavy CTA placement throughout (call/text/form CTAs every 2–3 sections)
- Designed to convert: appraisal-form, sell-now buttons, trust signals (testimonials, stats)
- **Hero `bgImage` MUST be dark across the top ~120px** for the header text to read. Use `/images/hero-background.jpg` as the safe default. Bright featured photos (like the bridge plate JPG) make poor hero backgrounds even with vignette — use them as OG share images only.

### Archetype B: Reference / SEO pages

`/fender-guitars-serial-number-guide/`, `/how-to-read-gibson-serial-numbers/`, `/martin-serial-and-model-numbers/`, `/rickenbacker-serial-numbers/`, `/gretsch-serial-number-lookup/`, `/guild-serial-number-lookup/`, `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/`, blog posts

- **NO `<PageHero>`.** Page goes straight from header to first content block.
- **Header backdrop**: two solid bands the absolute header sits on top of — dark brown for the primary nav row (~54px tall), white for the secondary nav row (~56px, with 6px tan underline). See `/src/pages/fender-guitars-serial-number-guide.astro` (the `<div class="fsn-header-backdrop">` block).
- **Override secondary-nav text color from white → brown** by adding a body class (e.g. `body.fender-sn-page header nav.border-b-\[6px\] a { color: var(--color-brand-brown) !important; }`). The class is set via `<script is:inline>document.body.classList.add("fender-sn-page");</script>`.
- **Two-column body at ≥1281px:** content centered at max-width 860px, **fixed-position TOC sidebar** on the right (`right: max(24px, calc(50vw - 430px - 320px))`, width: 280px, top: 140px, max-height: calc(100vh-160px), overflow-y: auto, z-index: 25). TOC hides below 1281px; content widens back to the standard `--container-site` (1100px).
- Interactive widgets (decoder tool, calculator) appear **above** the H1 lede, not inside any hero. The H1 sits in the lede section under the tool.
- Heavy on tables, accordions, FAQ schema. Lighter on CTAs (one "Send Joe Photos" block near the bottom, then ContactSection at end).

### How to decide which archetype

Open the live URL and look at the top 600px:
- Big photo hero with overlaid title + buttons → **Archetype A**
- No hero, page header sits on solid color band, decoder tool or article body up top → **Archetype B**

## Adding a new page

1. **Identify the archetype** (see above).
2. Create `src/pages/<route>.astro`.
3. Import `Layout` and pass per-page SEO props. Skeleton for **Archetype A**:
   ```astro
   ---
   import Layout from "../layouts/Layout.astro";
   import PageHero from "../components/primitives/PageHero.astro";
   import Button from "../components/primitives/Button.astro";
   import ContactSection from "../components/ContactSection.astro";
   import { contact, hrefs } from "../config/site";
   ---
   <Layout
     title="Sell My Gibson Guitar | Joe's Vintage Guitars"
     description="..."
     canonical="/sell-my-gibson-guitar/"
     ogImage="https://www.joesvintageguitarsaz.com/wp-content/uploads/.../something.jpg"
     structuredData={...}
   >
     <PageHero
       eyebrow="Sell My Guitar"
       title="Sell Your Vintage Gibson Guitar"
       subhead="Top dollar. Same-day payment. Nationwide buyer."
       bgImage="/images/hero-background.jpg"  {/* dark-top-safe default */}
     >
       <Button slot="cta" href={hrefs.tel} variant="cream" size="lg">{contact.phone}</Button>
       <Button slot="cta" href="/contact-me/" variant="cream" size="lg">Contact Now</Button>
     </PageHero>

     <!-- ...page-specific sections... -->

     <ContactSection />
   </Layout>
   ```
   For **Archetype B**: copy the working scaffold from `src/pages/fender-guitars-serial-number-guide.astro` (header backdrop + tool layout + fixed TOC + content sections). Use a unique class prefix per page (`.gsn-*` for Gibson, `.msn-*` for Martin, etc.) so widget CSS doesn't collide.
4. Section components can be reused (`<ContactSection />` works on any page).
5. For new page-specific content, follow the section component pattern: scoped `<style>` block, use design tokens, use `<SectionHeader>` for the standard heading pattern (Archetype A) or inline H2 + 80px rust rule (Archetype B).
6. **Never hard-code phone/email/address/social URLs in a component.** Always `import { contact, hrefs, socials } from "../config/site"`. Updating `site.ts` should propagate everywhere.
7. Save the live HTML to `reference/<route>-raw.html` (use `curl -sL <url> > reference/<route>-raw.html`) so you can grep it later without re-fetching.

## Fender serial tool v2 (data-first rewrite) — test page

The `?raw`-ported Fender decoder is being rebuilt data-first. Live guide page is UNCHANGED; the v2 preview lives at **`/fender-serial-tool-v2/`** (noIndex + sitemap-excluded + X-Robots-Tag; not linked anywhere) for Josh + Joe to iterate on.

- **`src/data/fender-serials.ts`** — single source of truth: every serial range/prefix as typed data, a pure `decodeSerial()`/`answerStep()` resolver, step metadata, and `REFERENCE_SECTIONS` (the crawlable tables). The interactive tool and the visible tables render from the SAME data, so they cannot drift.
- **PARITY CONTRACT:** the resolver reproduces the original widget's behavior EXACTLY (result strings included, en-dashes and all — ported widget internals are copy-gate exempt via SKIP_ROUTES). `node scripts/verify-fsn-parity.mjs` drives the ORIGINAL tool headlessly across a ~440-case boundary corpus and diffs it against the resolver; golden file at `reports/fsn-parity/golden.json`. **Run it after ANY edit to `fender-serials.ts` or `public/scripts/fsn-tool.js`; it must exit 0.** Dating-logic content changes are Joe's call and should update BOTH the data module and (until retired) the original JS, or retire the original and drop the gate deliberately.
- **`src/components/tools/FenderSerialTool.astro`** — semantic rebuild: real `<form>`, `<fieldset>`/`<button>` question steps (keyboard-native), `aria-live` result, focus management, pipeline images via `resolveImage`. **Ships the decoder ALONE (Option A, Josh's call 2026-07-12):** the no-JS fallback + noscript link point at `tablesHref` (default = the live guide page, which keeps its existing hand-written tables). The generated crawlable tables live separately in **`FenderSerialTables.astro`** (unused on the test page; reserved for a later Option B generated-tables pass — when a page renders both, pass `tablesHref="#fsn2-tables"`).
- The original tool's dead code paths (DB.bridge/DB.neck via lookupNum, the L-location step, `_numericMatches`) are intentionally NOT ported — unreachable in the original flow.
- **Swap plan (Option A, Josh-approved direction):** replace the `set:html` widget on `/fender-guitars-serial-number-guide/` with `<FenderSerialTool />` and retire `reference/fsn-tool-html.html` + `public/scripts/fsn-tool.js`; the page's 11 hand-authored tables stay. Option B (generate those tables from `REFERENCE_SECTIONS`) is a separate later call.
- **Drift audit 2026-07-12 (`reports/fsn-parity/live-tables-vs-tool-audit.md`):** the live page's hand tables and the tool ALREADY disagree in places — headline items: Japanese **O/P/Q** (page: MIJ 1993-94 plus CIJ ranges; tool: flat single CIJ years, never asks MIJ/CIJ — page matches standard charts, tool is the simplistic side), F-plate **180000-199999** 1966/67 overlap the tool never surfaces, the page's MIJ table **missing the G row** the tool knows, N-prefix front/back headstock wording, and the **US-prefix table caps at US26 = 2026** (US27 falls to fallback in Jan 2027). All are Joe-confirm items for the test-page iteration; none block the Option A swap.

### Joe's call corrections applied (2026-07-15, PR #68) + follow-ups (2026-07-17, PRs #70/#71)

The drift-audit items above are now resolved on the test page, with `EXPECTED_DIVERGENCES` in `scripts/verify-fsn-parity.mjs` carrying the intentional breaks from the original widget (parity gate still exits 0):

- **O/P/Q** ask Made-in-Japan vs Crafted-in-Japan (MIJ 1993-94; CIJ per-letter). **N-prefix** reports front-of-headstock ≤1995, back from 1996. **US-prefix** is open-ended (no US26 dead-end). **G row** (MIJ 1987-88) confirmed correct by Joe.
- **F-plate 180000-200000 = the 1966/1967 overlap** (returns both years). Joe confirmed 2026-07-17 that serial **200000 itself sits in the overlap** (the shared edge; ranges are approximate); `F_PLATE` CBS era starts at **200001**. See the `JOE-CONFIRMED DIVERGENCE` comment in `src/data/fender-serials.ts`.
- **Counterfeit-authenticity note** shows on every decode (a real serial isn't proof of a real guitar).

**Lead-gen / instrumentation additions (PR #71, `src/components/tools/FenderSerialTool.astro` + `functions/api/serial-report.ts`), all inside the result card:**
- **Appraisal value bridge** — a CTA under every result → `/free-appraisal/`. Static markup; points the tool at the seller-acquisition goal and feeds the appraisal page internal links.
- **Analytics** — guarded `window.dataLayer` events (never throw, no-op without a tag): `fender_serial_decode` on every terminal outcome (`serial_prefix`, `result`/`fallback`, `decoded_year`) and `fender_serial_report_request` on a successful email capture. Use the prefix breakdown to prioritize serial spoke pages.
- **Ungated email-to-report** — the year always shows on-page first; an OPTIONAL opt-in form below emails the visitor a templated dating report (serial + year + cross-date checklist + value factors + appraisal CTA) and notifies Joe of the warm lead. `functions/api/serial-report.ts` reuses the `MAILGUN_*` + same-origin + honeypot pattern from `contact.ts`/`upload-photos.ts`. **CAN-SPAM:** explicit consent checkbox, business postal address + reply-to-opt-out in the email footer. Every user string is HTML-escaped and the body is a fixed template, so it can't be used as a general relay. **GOTCHA: Pages Functions do NOT run under `astro dev`** (the client handles the failure gracefully), and `MAILGUN_*` are Production-scoped — the endpoint works on the deployed test page but NOT on a CF preview branch (same gotcha as photo-upload).

## Porting WordPress widgets (interactive components)

The live site has interactive widgets — the Fender serial decoder is the first one; the Gibson / Martin / Rickenbacker SN pages likely have similar. When you encounter one, follow this file convention:

```
reference/
  <page>-raw.html              # Full live-site HTML, saved via curl
  _extract-<page>.cjs          # Node script that strips scripts/styles/svg
                               # and writes clean content as markdown
  <page>-content.md            # Output of the extract script (article body)
  <widget>-html.html           # Just the widget's <div>...</div> markup
  <widget>.css                 # Just the widget's CSS rules (for reference)
public/scripts/
  <widget>.js                  # The widget's IIFE script (static asset)
```

**Integration pattern in the Astro page:**
```astro
---
// Import widget HTML at build time via Vite's `?raw` query
import widgetHtml from "../../reference/fsn-tool-html.html?raw";
---
<div set:html={widgetHtml} />
<script src="/scripts/fsn-tool.js" is:inline></script>

<style is:global>
  /* Paste the widget's CSS here, keeping its original class names
     (.fsn-tool, .fsn-card, .fsn-step) so they don't collide with
     page chrome classes. Scoped <style> blocks would rewrite the
     selectors and break the widget. */
</style>
```

**Fix-ups before integrating widget HTML:**
- Absolute URLs `href="https://www.joesvintageguitarsaz.com/..."` → relative `href="/..."`
- Anchor IDs that don't match your page's section IDs (e.g. live's `#custom-shop-serials` → your page's `#custom-shop`)
- Image `src=` URLs — hot-link to live WP uploads on first pass, swap to local later

**Always add a `WebApplication` JSON-LD schema** alongside the page's other schemas so the tool is discoverable. Example in `/src/pages/fender-guitars-serial-number-guide.astro` (`toolSchema` const).

**Verify end-to-end** by entering a known test serial and confirming the decoder routes correctly. For the Fender tool: `S812345` → 1978; `MN0123456` → 1990 Made in Mexico.

## Visual audit + ship checklist

Before declaring any new page done, run through this. **The side-by-side-with-live step is the one that catches the headline mistakes** (missing widgets, wrong header treatment, missing whole sections). Don't skip it.

### Sequence

1. **Section count first.** Open the live URL in a browser tab. Scroll top-to-bottom. List every distinct section in order. Now open your local page and do the same. Numbers don't match → stop and figure out what you missed before any pixel-level work.

2. **Side-by-side screenshots at 1920px** (user's screen; matches what they see). Take full-page captures of both:
   ```js
   // Live
   await browser_navigate({ url: "https://www.joesvintageguitarsaz.com/<path>/" });
   await browser_take_screenshot({ filename: "audit-live.png", fullPage: true });
   // Local
   await browser_navigate({ url: "http://localhost:4321/<path>/" });
   await browser_take_screenshot({ filename: "audit-local.png", fullPage: true });
   ```
   Read both back as images. Scan top-to-bottom for: structural elements present, color rhythm matches (alternating section bgs), heading hierarchy, table density, image positions.

3. **Test every interactive widget on BOTH sites.** Decoder tools, accordions, dropdowns, video embeds, forms. If the live site has a working tool, yours must work too. Click through at least one happy path on each.

4. **Header / footer contrast check.** At 1920px, is every nav link readable against whatever's behind it? Hero images with bright spots fail this check.

5. **Responsive at 4 viewports:** 1920 / 1280 / 768 / 390. Watch for:
   - Mobile overflow (text/cards extending off-screen)
   - Missing `flex-wrap` on nav rows
   - Tables that need horizontal scroll wrappers
   - Sidebars that don't collapse cleanly
   - FloatingCTAs overlapping content (bottom-right, 64px wide on mobile — paragraph text can run behind it)

6. **Type check + console:** `npx astro check` → 0 errors, browser console → 0 errors.

7. **Run the static audit** (deterministic — catches what human eyes miss):
   ```bash
   npm run audit:live-diff -- <live-url> <local-url> --slug <slug>
   ```
   Fix every 🔴 must-fix item. Re-run until the report shows 0 🔴 (or items are explicitly accepted with a Decision log row).

8. **Spawn the `live-diff-auditor` agent** for the qualitative pass. Pass it both URLs and the static audit report path. Act on its punch list. Don't self-audit afterward — that's the anchoring-bias trap.

9. **Force-load lazy images before any screenshot.** `<img loading="lazy">` images don't fetch until near viewport. Anchor jumps mid-page bypass that, making them appear missing. Before screenshotting:
   ```js
   await browser_evaluate({ function: `() => document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; const s = i.src; i.src = ''; i.src = s; })` });
   await browser_wait_for({ time: 5 });
   ```

10. **Final sanity check:** if anything looks different from live and you can't explain it in one sentence, it's a real bug. Don't ship.

### Iterative workflow

- Build the page in one session against the content extract + reference HTML.
- BEFORE declaring done, run steps 1–10.
- For each gap found, fix it, then re-run the static audit + screenshot only the changed section.
- Stop iterating when both the static audit's 🔴 bucket AND the auditor agent's 🔴 bucket are empty — **or** when you've made 2 passes without convergence (then escalate via cross-model review).

## Image gallery primitive — use for ANY group of 2+ comparison images

**The bug pattern this prevents:** building 4 prefix-example photos as 4 standalone `<figure class="fsn-fig">` elements that each take a full content row. Live groups them as a **CSS-grid gallery** so they appear side-by-side as a visual comparison. We shipped the fender-SN page with 15 such groups laid out wrong before a user caught it.

**Primitive lives in `src/styles/global.css`** (available on every page, every component):

```html
<div class="jvg-img2 jvg-img--uniform">          <!-- or jvg-img3 for 3-up -->
  <div class="jvg-imgwc">
    <img src="..." alt="..." loading="lazy" decoding="async" />
    <p class="jvg-cap">Caption text</p>            <!-- replaces <figcaption> -->
  </div>
  <div class="jvg-imgwc">...</div>
</div>
```

**When to use which class:**
- 2 figures → `jvg-img2`
- 3 figures → `jvg-img3`
- 4 figures → `jvg-img2` (wraps into 2×2)
- 5 figures → `jvg-img3` (3 + 2 wrap)
- 6 figures → `jvg-img3` (2 rows of 3)

Add `jvg-img--uniform` when images are a true comparison set (the same kind of thing shown side-by-side — prefix photos, era examples, before/after, hardware variants). It forces a fixed 220px height with `object-fit: cover` so the grid stays tidy regardless of source aspect ratios. **Skip it** when each image is its own illustrative figure (a single hero, a one-off diagram).

**Important — `--uniform` ONLY applies to `.jvg-img2`** (matches live's `.img2.uniform-height` rule). 3-up galleries (`.jvg-img3`) always render at natural aspect ratio so images with baked-in text overlays (logos with captions, era labels) don't get cropped at top/bottom. If you want uniform height on a 3-up gallery, pre-crop the source images to matching dimensions instead.

**Detection rule (apply to every page):** before declaring a page done, grep your `.astro` source for runs of consecutive `<figure>` blocks separated only by whitespace. Any run of 2+ is a candidate for the gallery primitive — go check the live page. If the live site has them side-by-side, convert. Quick scan:

```bash
node -e "const fs=require('fs');const h=fs.readFileSync('src/pages/<page>.astro','utf-8');const r=/<figure[^>]*>[\s\S]*?<\/figure>\s*<figure/g;console.log('consecutive figure runs:', (h.match(r)||[]).length)"
```

If that prints anything other than 0, audit those runs against the live site before shipping. The `live-diff-auditor` agent's qualitative pass should also flag this — if it doesn't, add a specific check for it in its prompt.

**Decision rule for single vs. gallery vs. image-card grid:**
- Live `<div class="img2">` / `<div class="img3">` parent → `.jvg-img2` / `.jvg-img3` (image + small caption only)
- Live `<div class="comp-grid">` with `<div class="comp-card">` cells → `.jvg-comp-grid` + `.jvg-comp-card` (image + descriptive paragraph body card per cell)
- Live has plain consecutive `<figure>` / `<picture>` elements as siblings of `<p>` → keep as `<figure class="fsn-fig">` stacked

**Image-card grid (`.jvg-comp-grid` + `.jvg-comp-card`)** — different from the basic gallery. Use when each cell needs an IMAGE plus a styled CARD with body text (year range + description). Example: "The Three Kluson Eras" where each card shows a tuner photo + the era description.

```html
<div class="jvg-comp-grid">
  <div class="jvg-comp-card jvg-comp-card--tall">
    <img src="..." alt="..." loading="lazy" decoding="async" />
    <div class="jvg-comp-card__body">
      <p><strong>1950 – Mid-1956.</strong> Back of the housing is...</p>
    </div>
  </div>
  <!-- ...more cards... -->
</div>
```

`.jvg-comp-card--tall` modifier shows full natural-height images (best when image is primary content). Default behavior is 130px fixed height with object-fit:cover (best for icon-style thumbnails).

## Image migration — hot-link is single-session-only

The "hot-link then swap" pattern is allowed for first-pass layout, but **every image must be swapped to local before the end of the same session.** Carrying hot-links across sessions normalizes broken images and you stop noticing failures.

Hot-linking is dangerous because:
- The WordPress origin may be torn down post-migration → every image 404s.
- Hot-linked images bypass Cloudflare's cache → slow page loads.
- Cross-origin images can't have width/height inferred → CLS (Cumulative Layout Shift).
- Astro's `<Image>` component refuses unauthorized remote domains by default.
- **Lazy-loaded hot-links + anchor jumps = silent missing-image bugs.** If a user clicks a link to `/page/#section-mid-page`, `<img loading="lazy">` images in that section haven't started fetching yet. They appear blank for 1–2 seconds. Visual audits miss this unless the auditor explicitly forces eager loading before screenshotting.
- **Broken hot-links survive every visual check** unless you HEAD-request each image URL. The fender-SN page's `fender-back-of-headstock-serial-number-scaled.jpg` (404) survived 4 prior audit passes because no check actually verified the URL responded 200.

Pre-launch image checklist (per image):
- [ ] Downloaded to `public/images/<page>/` or `src/assets/images/<page>/`
- [ ] Compressed (use [Squoosh](https://squoosh.app/) or `sharp` if scripting)
- [ ] Renamed descriptively (not `IMG_4523.jpg`)
- [ ] `width` and `height` attributes set (or used via Astro's `<Image>`)
- [ ] `alt` text matches what's on the live site, or improves it where missing
- [ ] If used as a hero `bgImage`, dark across top ~120px (header contrast rule)
- [ ] **`npm run audit:live-diff` reports 0 broken external image URLs**

**Current status of JVG hot-links: RESOLVED (verified 2026-06-20).** The built `dist/` has **zero** `wp-content`/old-domain image references and **zero** broken local image refs (757 distinct local image refs, 0 missing). Every image serves from `/images/*` (originals) or `/_astro/*.webp` (Astro-optimized). Source is clean: `wp-content` appears only in `reference/` snapshots, never in `src/`. The earlier ~63 fender-SN hot-links were localized.

### Blog post images MUST go through Astro's pipeline (src/assets, NOT public/images)

**Rule for every post in `src/content/blog/`:** image files live in **`src/assets/blog/<slug>/`** and are referenced so Astro optimizes them. NEVER author a post with content images in `public/images/blog/` + a raw `<img src="/images/...">` tag — that ships the full-size original (no responsive `srcset`, no WebP, no intrinsic width/height → CLS) and bypasses the pipeline entirely. Astro does NOT optimize raw `<img>` in Markdown; it DOES optimize a Markdown `![]()` that points at a relative `src/assets` path.

- **Body image (captioned):** blank-line-separated Markdown image inside the `<figure>` so the pipeline picks it up:
  ```
  <figure>

  ![Descriptive alt text](../../assets/blog/<slug>/<file>.jpg)

  <figcaption><strong>Lead.</strong> Caption text.</figcaption>

  </figure>
  ```
  Uncaptioned: just `![alt](../../assets/blog/<slug>/<file>.jpg)` on its own line. The relative path from a post file is always `../../assets/blog/…`.
- **`heroImage` / `ogImage` frontmatter:** keep the STRING form `"/images/blog/<slug>/<file>.jpg"`, but the FILE must live in **`src/assets/blog/<slug>/`**. `src/lib/images.ts` `resolveImage()` maps that string to the optimized asset (responsive `<Image>` hero, hashed `_astro` og). If the file only exists in `public/`, it silently falls back to the raw original.

**Verify before "done" (must be 0):** `grep -rlE '(src="/images/blog/|\]\(/images/blog/)' src/content/blog/` — any hit is a post bypassing the pipeline. There should be no `public/images/blog/` directory; all blog image files belong under `src/assets/blog/`.

History: WP→Astro migration + Fable-authored posts flip-flopped between the two methods. The **2026-07 pass** (`chore/blog-images-astro-native`) relocated 227 files and rewrote 21 posts onto this convention; heroes auto-upgraded via `resolveImage`. Keep new posts on it so it does not regress.

## Legacy image URLs — retain them at cutover (do NOT let `/wp-content/uploads/*` 404)

**The mistake to avoid:** after the domain cutover, the old WordPress media URLs (`/wp-content/uploads/YYYY/MM/<file>.jpg`) 404 on the new static site, because Astro serves images from `/images/*` (originals) and `/_astro/*.<hash>.webp` (optimized). Letting them 404 silently discards two things that matter — especially for an image-heavy niche like vintage guitars:

1. **Google Images ranking history.** Image ranking signals transfer SLOWLY (much slower than HTML page signals). 404ing 1,000+ previously-indexed image URLs severs that history during a short de-index grace window (days to a few weeks). "Deep" average positions (~35–50) are NORMAL and still visible in Google Images' infinite-scroll — do NOT treat a deep position as "no value worth keeping."
2. **External hotlinks / embeds.** Collectors and buyers embed product photos on Pinterest, Reverb, and forums (MyLesPaul, Gearspace, subreddits). Those embeds point at the old `/wp-content/uploads/...` URL; a 404 breaks them and kills referral traffic that Image-search *position* never measures.

**Validated by cross-model consult (GPT-5.5-pro + Gemini 3.1 Pro, 2026-06-20):** both independently said retain the old image URLs, and both said the clean way is to serve them at **200**, not a fragile redirect. This overturned an initial "deep positions ≈ low value, skip it" call — see the Decision log.

### How to retain them (priority order)

1. **Serve originals at the old paths → HTTP 200 (best).** Put the original WP media tree at `public/wp-content/uploads/...` so the exact old URLs resolve with the original file. Sources: (a) the client's WordPress backup/export of `wp-content/uploads/` (most complete — covers images not used on the new site), or (b) reconstruct from the repo — every old URL is in the `reference/` snapshots and the binaries are already localized (blog filenames were preserved), so a script can map old URL → localized file → copy to `public/wp-content/uploads/...`.
2. **Lighter alternative: 301 to the STABLE `/images/...` path.** `301` old `/wp-content/uploads/.../<file>.jpg` → new `/images/.../<file>.jpg` (same file, same format, NOT hashed). No repo bloat, but image 301s pass ranking signal more sluggishly than a 200 — use only when duplication is a real concern.
3. **NEVER 301 to the hashed `/_astro/*.webp` build artifact.** The hash AND the format change on every build, so the redirect target is unstable and will break. Content-hashed `/_astro/` URLs are fine as page assets but are not canonical SEO image URLs.

### The image sitemap must be DISCOVERABLE, not just generated

`npm run build` generates `dist/image-sitemap.xml`, but generating it is not enough — Google has to find it. JVG shipped it live with **neither** wiring, so it was invisible. Both are required:
- **robots.txt** must carry a second `Sitemap:` line for `/image-sitemap.xml` (it's in `public/robots.txt`). **Confirm the deploy actually serves both lines** — a stale/cached robots.txt silently drops it (the live JVG robots.txt had only the page sitemap even though the repo had both).
- **Submit `/image-sitemap.xml` in Google Search Console** (Sitemaps panel) — the most reliable discovery path, independent of robots.txt. Verify via `get_sitemaps`; an image sitemap missing from the GSC list = invisible to Google.

**Port this section to the `wp-to-astro` template** so every future migration inherits it.

## live-diff-auditor agent + static audit script

There's a dedicated subagent at `.claude/agents/live-diff-auditor.md` and a static audit script at `scripts/audit-live-diff.mjs`. Together they catch the class of bugs self-audit misses.

**Workflow at the end of every page build:**

1. Build the page.
2. Run the static audit:
   ```bash
   npm run audit:live-diff -- <live-url> <local-url> --slug <slug>
   ```
   This runs deterministic checks: heading inventory diff, image counts, broken-external-URL HEAD checks, JSON-LD parity, title/meta/canonical diff, trailing-slash sanity. Writes a report to `reports/<slug>-audit-<timestamp>.md` and prints 🔴/🟡/🟢 counts.
3. Fix every 🔴 must-fix item. Re-run until the report shows 0 🔴.
4. Spawn the `live-diff-auditor` subagent (`Agent` tool, `subagent_type: "live-diff-auditor"`). Pass it the live URL, local URL, and the path to the report from step 2. It adds the qualitative visual layer: forced eager-load image checks, side-by-side screenshots at 1440 and 390, interactive widget probes, anchor-jump tests, contrast checks.
5. Act on the auditor's punch list. Don't ship until both the script's 🔴 bucket AND the auditor's 🔴 bucket are empty (or items are explicitly accepted with a Decision log entry).

**Don't self-audit after the agent has run** — that's the anchoring-bias trap.

**If the custom agent isn't loaded** (requires Claude Code restart to register new agent definitions in `.claude/agents/`), fall back to a `general-purpose` agent with the agent's prompt inlined.

## When I get stuck — limitations + escalation

I have specific limitations on pixel-perfect work. Be honest about them — don't keep iterating in circles.

### My known weak spots

- I sometimes mis-read screenshots, especially when comparing two similar images side-by-side. Subtle differences in spacing, color, or weight don't always register.
- I can't perceive hover states, transitions, scroll-triggered behavior, or font rendering quirks from a static screenshot.
- I can over-anchor on what the code "says it does" instead of what's actually rendered.
- When my self-audits return "matches" after a structural change, I might be wrong. Hedge honestly: "looks similar to live based on what I can see — please verify [the specific thing] visually."
- I've also chased ghosts in `<details>` dropdowns and overlapping fixed elements that turned out not to be bugs. If the user says it looks fine and I'm seeing a "bug" only via DOM inspection, trust the user.

### When to stop and ask the user

- 2+ rounds of fixes haven't resolved the issue the user described.
- The user has said "still wrong" twice in a row without me converging.
- I'm about to make a third structural change to the same component.
- The same element keeps coming up in feedback (header, footer, hero — these are red flags that I'm not seeing what the user sees).

### How to ask well

Don't ask "what do you want?" — that punts the work back. Ask specifically:

> "I've made [N] attempts and the issue isn't converging. Here's exactly what I see in my screenshot: [describe in plain words]. Here's what I think the fix is: [describe]. I might be misreading either the live design or my own output. Can you:
> (a) screenshot the specific problem and annotate what's wrong, or
> (b) describe the difference more specifically (which element, which property, which viewport), or
> (c) take screenshots of both pages to Gemini/another AI and ask it to generate a precise prompt for me to act on?"

### The Gemini "second-pair-of-eyes" workflow

The user has used this successfully when I've been stuck:

1. User screenshots the problem area (live vs. local) and uploads both to Gemini (or another AI).
2. Asks Gemini: "What specific differences do you see? Generate a prompt for Claude Code that tells it exactly what to fix in concrete terms (element, property, value)."
3. User pastes Gemini's prompt back to me.

This works because the other AI sees the problem fresh without my anchoring biases. It catches things I miss (it caught both the missing decoder tool and the missing TOC sidebar on this project's Fender SN page).

**Suggest this proactively** when you've made 2+ unsuccessful attempts at the same visual problem. Phrase it like: "Worth a second pair of eyes — want to screenshot this to Gemini and paste back the prompt it generates?"

### Same-model parallel review is NOT independent

It's tempting to spawn a second Claude subagent and treat consensus between the two as confirmation. **Don't.** Two instances of the same Claude model share weights, training data, and biases — they will make **correlated errors** on the same input. If model #1 misses a missing pill button due to a training artifact, model #2 likely misses it too. Consensus from same-model parallel review is false confidence.

Use same-model parallel review for **breadth** (covering more checks in less wall time, e.g. delegating mechanical image insertion). Use **cross-model review** (Gemini, GPT, a larger Claude reviewing a smaller one) for **depth** (catching things this model is systematically blind to). They are different tools for different problems — don't conflate them.

## Wiring Mailgun (when ready)

1. The existing forms in `ValueProp.astro` and `ContactSection.astro` already have `data-jvg-contact-form data-form-id="..."`.
2. The submit handler in `src/scripts/contact-form.ts` POSTs to `/api/contact`.
3. Add a Cloudflare Pages Function at `functions/api/contact.ts`:
   ```ts
   export const onRequestPost: PagesFunction<{ MAILGUN_API_KEY: string; MAILGUN_DOMAIN: string }> = async ({ request, env }) => {
     const payload = await request.json();
     // POST to https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages using env.MAILGUN_API_KEY
     return new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });
   };
   ```
4. Configure `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` as CF Pages environment variables.
5. Set up the Mailgun domain (DNS records: MX, SPF, DKIM).

## Dev / build commands

- **Dev server:** `npm run dev` (from project root) — runs on `http://localhost:4321/`.
- **Production build:** `npm run build` → outputs to `dist/`.
- **Preview built:** `npm run preview`.
- **Type check:** `npx astro check` (uses `@astrojs/check` + `typescript`, already in devDependencies).
- Preview launch configs live in the machine-global `~/.claude/launch.json` (`joes-vintage-astro` runs `npm run dev` with a cwd; `joes-vintage-mirror` serves the WP mirror folder). The old dev.cmd / mirror-serve.cmd wrappers were removed 2026-07-03 (lean-repo rule).

## Useful MCP tooling for this project

- **Playwright MCP** (`mcp__plugin_playwright_playwright__*`) is the primary tool for visual verification — it handles real viewport sizes up to 1920 and captures full-page screenshots cleanly. **Use this, not chrome-devtools-mcp**, which caps viewport at ~1280–1540 even when you request 1920.
- **Chrome DevTools MCP** is fine for Lighthouse audits (`lighthouse_audit` against the dev URL) and DOM inspection but unreliable for desktop screenshots.
- **Claude Preview's screenshot tool** is broken for full-page captures — only ever shows the top of the page. Skip it for visual audits.
- If Chrome DevTools MCP complains about "browser already running," kill stale Chrome processes whose CommandLine matches `chrome-devtools-mcp` (there were ~9 zombies in the last session — same scenario will likely repeat).
- **Name verification screenshots descriptively** so you can re-reference them later: `audit-<page>-live-1440.png`, `audit-<page>-local-1440.png`, `audit-<page>-mobile-390.png`. Generic names like `screenshot.png` or `test.png` are useless 5 tool calls later.

## External references / prior art

Honest answer to "is there a great pre-made playbook for pixel-perfect WordPress → Astro migrations?": **not that I know of.** Most online migration guides treat WP → Astro as "extract the content, redesign in modern stack" — not "exact visual parity." The institutional knowledge for this kind of work tends to be project-specific and tribal.

What's actually worth bookmarking:
- [Astro docs on script directives](https://docs.astro.build/en/guides/client-side-scripts/) — `is:inline`, `is:raw`, `set:html` semantics.
- [Astro docs on styling](https://docs.astro.build/en/guides/styling/) — scoped vs. global, the hash-rewriting behavior, `:global()` and `is:global` escape hatches.
- [Vite's `?raw` and `?url` query imports](https://vitejs.dev/guide/assets.html#importing-asset-as-string) — for loading reference HTML files at build time.
- [Tailwind v4 `@theme` directive](https://tailwindcss.com/docs/v4-beta) — how this project defines design tokens.
- [Avada/Fusion Builder structure docs](https://theme-fusion.com/documentation/) — useful when extracting from `reference/*-raw.html`, to recognize wrapper classes you can skip.

The best "playbook" for this specific project IS this CLAUDE.md, the decision log, the per-page handoff notes, and the working example pages. Build it up.

## Launch audit checklist — DO NOT START UNTIL CLOSE TO LAUNCH

User instruction 2026-05-26: address this batch right before launch, not during page-building. Surfacing it here so it doesn't get lost in chat context.

When we hit launch prep, run through this list before pointing the production domain at Cloudflare Pages:

- [ ] **Accessibility — WCAG 2.2 AA compliance** (user-requested). The shipped `audit:a11y` script defaults to `wcag2aa` tags only — extend the run to `wcag22a,wcag22aa` to cover the 9 new criteria added in WCAG 2.2 (notably: Focus Appearance, Dragging Movements, Target Size Minimum 24×24px, Consistent Help, Redundant Entry, Accessible Authentication). `@axe-core/playwright` v4.10+ supports these tags. Command: `npm run audit:a11y -- <prod-url> --include-tags wcag22aa --viewport both`.
- [ ] **Accessibility — ATAG 2.0 review** (user-requested). ATAG covers *authoring tools*, not published sites — but in our case it applies to (a) any custom blog/CMS editing UI we ship (currently none — Content Collections are file-based), (b) the contact form's per-user feedback flow (error messages, success states, validation announcements via `aria-live`), and (c) the WP-side authoring workflow if Joe continues authoring in WP post-launch. For a static rebuild with no editing UI, ATAG concerns mostly reduce to: forms must announce status changes to assistive tech, and any future custom editing surface needs to follow ATAG Part B (support producing accessible content by default). Document any non-applicable sections rather than ignore them.
- [ ] **SEO** — run through [Pre-launch SEO verification](#pre-launch-seo-verification) in this file (`seo-map.csv`, `_redirects`, sitemap-index, RSS, robots.txt, 404, Rich Results Test on every page with custom JSON-LD).
- [ ] **Performance** — Lighthouse on top 5 most-trafficked URLs. Targets: A11y ≥95, BP=100, SEO ≥95, AB=100. Investigate any LCP > 2.5s or CLS > 0.1.
- [ ] **Cloudflare config** — SSL/TLS mode set to **Full (Strict)** (avoids the trailing-slash redirect loop documented in template CLAUDE.md), WAF rate-limit rule on `/api/contact` (10 req/60s per IP), Bot Fight Mode on.
- [ ] **Forms** — every form's `data-form-id` actually routes through `/api/contact` and lands in Joe's inbox via Mailgun. Honeypot is in place, Turnstile is configured if traffic is hostile.
- [ ] **Anchor parity** — every live URL with a fragment (e.g. `#meet-vintage-guitar-buyer-joe-dampt`) still works post-migration. Spot-check the top inbound-link fragments from Search Console.
- [ ] **Image hot-links** — every hot-linked WP image has been swapped to local OR a CF Worker → R2 setup is live. `npm run audit:live-diff` must show 0 broken image URLs.
- [ ] **Legacy image URLs retained** — old `/wp-content/uploads/*` media URLs must NOT 404 after cutover (image-search ranking history + external hotlinks/embeds). Serve the original tree at `public/wp-content/uploads/...` (HTTP 200) or 301 to the stable `/images/...` path — NEVER 301 to hashed `/_astro/*.webp`. See [Legacy image URLs](#legacy-image-urls--retain-them-at-cutover-do-not-let-wp-contentuploads-404).
- [ ] **Image sitemap discoverable** — `/image-sitemap.xml` is referenced in the *deployed* robots.txt AND submitted in GSC (generating it in `dist/` is not enough; verify with `get_sitemaps`).
- [ ] **404 page** — exists at `src/pages/404.astro`, has nav + a search/contact prompt, matches site chrome.
- [ ] **Analytics + Search Console** — verified, sitemap submitted, GMB profile updated with new domain if any URL shape changed.

## Open work

- **SEO roadmap — schema + social share cards:** see [`docs/schema-and-share-card-roadmap.md`](docs/schema-and-share-card-roadmap.md). Sitewide audit (2026-07-17) of JSON-LD schema, OpenGraph/Twitter tags, and featured/share images. Prioritized (P1/P2/P3) with owner tags; parts are being delegated back to Joe. P1: auto-generate BreadcrumbList sitewide, add VideoObject everywhere a video embeds, fix the broken contact-me `@id`, ship a real 1200×630 default share card (most share cards are wrongly square 1200×1200), and fix two broken page cards (sell-my-fender OG is a 339×386 PNG, sell-my-rickenbacker is 250×148).
- **Other pages:** about-me, blog index + posts, sell-my-fender/gibson/martin/etc., free-appraisal, contact-me, sell-a-guitar-collection, instrument repair, consignment, sitemap, privacy-policy, refund_returns
- **Mailgun wire-up:** see section above
- **Cloudflare Pages deploy:** create CF account, point at GitHub repo, configure build (`npm run build` → `dist`), add env vars
- **`functions/_routes.json`** or `_headers` for any cache control / redirects (optional)
- **Sitemap generation:** add `@astrojs/sitemap` integration once more pages exist
- **Higher-quality `contact-form-bg.jpg`:** still soft (9KB source). User opted to drop it from the contact section. If they want it back later, source a better version.

## Image licensing — every new content photo gets a license

Joe Dampt personally shot 100% of the content photos on this site. Each one ships
as a schema.org `ImageObject` so it qualifies for Google's "Licensable images"
feature (the GSC "Image metadata" report).

**Single source of truth: the `imageLicense` constant in `src/config/site.ts`**
(`photoLicenseUrl`, `brandAssetsUrl`, `creditText`, `creatorName`,
`copyrightNotice`). Never hand-type these at a call site — import `imageLicense`.
The permissive terms live at `/photo-license/`, linked from the footer legal row.

**Two license tiers:**
- **Content photos = PERMISSIVE** (reuse welcome with credit + link back):
  `license` = `acquireLicensePage` = `imageLicense.photoLicenseUrl`, plus
  `creditText`, `creator` (Joe), `copyrightNotice`.
- **Logo / brand marks = RESTRICTIVE LICENSE** (all rights reserved): `license` =
  `acquireLicensePage` = `imageLicense.brandAssetsUrl` (`/photo-license/#brand-assets`,
  the "all rights reserved, email to inquire" section), plus `copyrightNotice` +
  `creditText`. **Never** point a brand mark at `photoLicenseUrl` (the permissive
  photo terms) — that would tell people they may freely reuse the logo. Pointing
  `license` at the restrictive brand-assets URL clears the optional Rich Results
  "Image metadata" notices sitewide while keeping the terms all-rights-reserved.
  The logo node lives in `Layout.astro`'s `orgSchema.logo`. (Updated 2026-06-16 —
  was previously COPYRIGHT-ONLY with no `license`/`acquireLicensePage`; see Decision
  log.)

**Use the helpers, not hand-authored nodes:**
- `<LicensedImage>` (`src/components/primitives/LicensedImage.astro`) — wraps an
  optimized image AND emits its matching `ImageObject` inline. **Use this for any
  new optimized (`<Image>`-style) content photo.** It renders the `<img>` manually
  from one `getImage()` result so `contentUrl` == the rendered `src` by
  construction.
- `buildImageGraph(images)` (`src/lib/imageLicense.ts`) — async; returns an
  `ImageObject[]` to spread into a page's `structuredData` prop. **Use this for
  raw `<img>` content photos** served from `public/` via `assetSrc()`: pass
  `{ renderedSrc: assetSrc(...), alt }`. For optimized images it can take
  `{ image, width, alt }`, but prefer `<LicensedImage>` for those.
- The blog (`src/pages/post/[slug].astro`) spreads the permissive fields straight
  into the existing `BlogPosting.image` ImageObject (creator reuses the shared
  `/about-me/#person` `@id`).

**contentUrl MUST equal the rendered `src` (silent-fail otherwise).** Google
ignores an `ImageObject` whose `contentUrl` doesn't match a real `<img>` on the
page. CRITICAL gotcha: under this project's `image.layout: 'constrained'` config,
the `<Image>` component's primary `src` is a transform that `getImage()` does NOT
reproduce — so you cannot render `<Image>` and re-derive the URL separately. That
is exactly why `<LicensedImage>` renders the `<img>` itself from `getImage()`.
For raw public-path images there is no transform, so `assetSrc()` is exact.

**NEVER license:** images Joe didn't shoot (manufacturer/third-party photos), the
Reverb mark, decorative or `aria-hidden` images, UI/SVG icons, favicons, or
CSS `background-image` art. (Example: sell-gibson's `Guitar22.png` is `aria-hidden`
decorative — it is NOT licensed; sell-fender's `Guitar.png` has real alt text and
IS licensed.)

**Gate before a page is "done":** Google Rich Results Test "Image metadata" shows
**0 errors**. Locally, `node scripts/verify-image-license.mjs [slug ...]` checks
that every licensed `ImageObject.contentUrl` matches a rendered `<img src>` on the
built page (run `npm run build` first); it must report 0 mismatches.

## Things to be careful of

- **Hero image contrast.** The site Header is `position: absolute` with white text. Any `bgImage` you pass to `<PageHero>` MUST be dark across the top ~120px. The standard `/images/hero-background.jpg` (dim interior shop) is safe. Bright featured photos (bridge plate, glossy guitars, anything with highlights or reflections in the upper portion) fail this check even with the default vignette. Use those as `ogImage` only.
- **Vite stale-CSS cache.** Sometimes Astro's dev server caches a component's CSS from a previous version even after edits. If you see styles not applying despite the source being correct, add a no-op comment inside the `<style>` block to force Vite to re-parse. Restarting the preview server alone doesn't always clear it.
- **Astro scoped CSS + `margin` shorthand.** If you set a margin in a scoped `<style>` block using the shorthand (e.g., `margin: 0 auto 48px`), it overrides any Tailwind `mt-*` class. Use individual `margin-top` / `margin-left` / etc. if you want Tailwind classes to control margin-top independently.
- **Scoped vs. global CSS for widget HTML.** Astro's default scoped `<style>` rewrites class selectors with a hash (`.foo` becomes `.foo[data-astro-cid-xyz]`). If you `set:html` a chunk of raw markup (e.g. an imported widget), the markup won't have the hash attribute, so scoped rules won't match. Use `<style is:global>` for any styles that target `set:html` content.
- **`background-size: cover` on the 9KB `contact-form-bg.jpg`.** Stretches and pixelates. The user has opted out — don't re-add without explicit request.
- **JSON-LD on every page.** `Layout.astro` injects the global Organization + WebSite schemas. Pages can pass `structuredData={...}` for page-specific schemas (FAQPage, Article, Product, WebApplication, etc.). Don't duplicate the global schemas in page-level JSON-LD.
- **WordPress / Avada source quirks.** The live site is built with Avada / Fusion Builder. Reference HTML in `reference/` contains Fusion wrapper divs (`awb-toc-el`, `fusion-builder-row`, etc.) and CSS custom properties indirected through `--awb-*` tokens. Ignore the wrapper chrome; extract the inner content. The `_extract-*.cjs` scripts in `reference/` already strip the worst of it.
