# Joe's Vintage Guitars Site Notes

Site-specific reference notes, moved verbatim from the old CLAUDE.md on 2026-10-22. The old file was a forked copy of the WP-to-Astro kit rules plus these notes; the kit text is deleted and lives in the kit repo (see CLAUDE.md). Several sections are dated handoffs from May to July 2026 and describe the state at that time, so check `git log` before trusting a status line. Links of the form `(#decision-log)` now resolve in DECISIONS.md, and other in-page anchors below may no longer resolve.

## What this is

A full rebuild of [joesvintageguitarsaz.com](https://www.joesvintageguitarsaz.com/) — currently a WordPress + Avada site — as a static **Astro 6 + Tailwind 4** site deploying to **Cloudflare Pages**. Forms will use the **Mailgun API** via a CF Pages Function (not wired yet).

**Goal:** exact visual parity with the live site. Do not normalize design quirks without asking the user.


## Source of truth hierarchy

_(Only the site-specific item of this section is kept here; the rest is the kit's "Source of truth hierarchy".)_

1. **User's stated preference for this project.** Check `~/.claude/projects/C--Users-noahj/memory/feedback_jvg_design_preferences.md` and the [Decision log](#decision-log) further down. The user has intentionally deviated from the live site in several places — don't re-revert without asking.

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

_(Only the site-specific lines of this section are kept here; the rest is the kit's playbook/porting-wordpress-widgets.md.)_

The live site has interactive widgets — the Fender serial decoder is the first one; the Gibson / Martin / Rickenbacker SN pages likely have similar. When you encounter one, follow this file convention:

**Fix-ups before integrating widget HTML:**
- Absolute URLs `href="https://www.joesvintageguitarsaz.com/..."` → relative `href="/..."`
- Anchor IDs that don't match your page's section IDs (e.g. live's `#custom-shop-serials` → your page's `#custom-shop`)

**Always add a `WebApplication` JSON-LD schema** alongside the page's other schemas so the tool is discoverable. Example in `/src/pages/fender-guitars-serial-number-guide.astro` (`toolSchema` const).

**Verify end-to-end** by entering a known test serial and confirming the decoder routes correctly. For the Fender tool: `S812345` → 1978; `MN0123456` → 1990 Made in Mexico.

## Visual audit + ship checklist

_(Only the site-specific line of this section is kept here; the sequence itself is the kit's "Visual audit + ship checklist".)_

   - FloatingCTAs overlapping content (bottom-right, 64px wide on mobile — paragraph text can run behind it)

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

_(Only the site-specific status line is kept here; the rest is the kit's playbook/image-migration.md.)_

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


## When I get stuck — limitations + escalation

_(Only the site-specific line is kept here; the rest is the kit's playbook/known-limitations-cross-model-review.md.)_

### The Gemini "second-pair-of-eyes" workflow

This works because the other AI sees the problem fresh without my anchoring biases. It catches things I miss (it caught both the missing decoder tool and the missing TOC sidebar on this project's Fender SN page).

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

_(Only this site's own items are kept here; the generic Astro gotchas are in the kit's playbook/astro-gotchas.md.)_

- **Hero image contrast.** The site Header is `position: absolute` with white text. Any `bgImage` you pass to `<PageHero>` MUST be dark across the top ~120px. The standard `/images/hero-background.jpg` (dim interior shop) is safe. Bright featured photos (bridge plate, glossy guitars, anything with highlights or reflections in the upper portion) fail this check even with the default vignette. Use those as `ogImage` only.
- **`background-size: cover` on the 9KB `contact-form-bg.jpg`.** Stretches and pixelates. The user has opted out — don't re-add without explicit request.

## Rules From The Old Copy That The Kit Does Not Have (Review)

Generic rules from the old CLAUDE.md that the current kit does not state in any form. Kept verbatim. Decide whether each should be added to the kit or dropped.

### From "Visual audit + ship checklist": Iterative workflow

- Build the page in one session against the content extract + reference HTML.
- BEFORE declaring done, run steps 1–10.
- For each gap found, fix it, then re-run the static audit + screenshot only the changed section.
- Stop iterating when both the static audit's 🔴 bucket AND the auditor agent's 🔴 bucket are empty — **or** when you've made 2 passes without convergence (then escalate via cross-model review).

### From "live-diff-auditor agent + static audit script"

**If the custom agent isn't loaded** (requires Claude Code restart to register new agent definitions in `.claude/agents/`), fall back to a `general-purpose` agent with the agent's prompt inlined.

### From "When I get stuck": My known weak spots

- When my self-audits return "matches" after a structural change, I might be wrong. Hedge honestly: "looks similar to live based on what I can see — please verify [the specific thing] visually."

- I've also chased ghosts in `<details>` dropdowns and overlapping fixed elements that turned out not to be bugs. If the user says it looks fine and I'm seeing a "bug" only via DOM inspection, trust the user.

### From "When I get stuck": When to stop and ask the user

- The same element keeps coming up in feedback (header, footer, hero — these are red flags that I'm not seeing what the user sees).

### From "External references / prior art"

Honest answer to "is there a great pre-made playbook for pixel-perfect WordPress → Astro migrations?": **not that I know of.** Most online migration guides treat WP → Astro as "extract the content, redesign in modern stack" — not "exact visual parity." The institutional knowledge for this kind of work tends to be project-specific and tribal.

