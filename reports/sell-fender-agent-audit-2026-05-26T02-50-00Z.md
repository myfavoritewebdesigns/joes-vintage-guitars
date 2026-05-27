# Agent audit — sell-fender

- Live: https://www.joesvintageguitarsaz.com/sell-my-fender-guitar/
- Local: http://localhost:4321/sell-my-fender-guitar/
- When: 2026-05-26T02:50:00Z
- Static-audit report: reports/sell-fender-audit-2026-05-26T02-40-00-617Z.md
- Cross-model consensus: requested `gemini-3-pro-preview` + `gpt-5.2`; **Gemini returned 429 (free-tier quota exhausted)**, so consensus ran with `gpt-5.2` + `gpt-5.1` (fallback) at 1440 (top slice) and 390 (top slice). 11- and 12-item punch lists with very high inter-model agreement.

## 🔴 Must fix (blocks ship)

1. **Hero layout — wrong "split" architecture.** `[gpt5.2+gpt5.1]`
   Live's hero is a clean two-column block: **light beige left panel** (eyebrow + H1 "Sell Your Vintage Fender Guitar" + H2 "Expert Buyer & Collector…" + 2 CTAs + `<details class="table-of-contents">`) next to a **dark-brown right panel** containing the wpcf7 form titled "Feel Free To Contact Joe's Vintage Guitar". Local replaces this with a **dark photo-background `<PageHero>`** that has a cream form card floated on top — the beige-left / dark-right split with the form's dark frame is missing. This is the single biggest visual divergence. Check `src/pages/sell-my-fender-guitar.astro` — the page is using Archetype-A `<PageHero bgImage={heroBg}>` instead of the bespoke two-panel hero live actually uses. Verified via DOM: live's hero H1 sits inside a beige `.sub-t`-classed column with a sibling `<details>` TOC; local has no equivalent left-panel structure.

2. **"Table Of Contents" `<details>` widget missing on local.** `[gpt5.2+gpt5.1]`
   Verified in DOM: live has `<details class="table-of-contents">Table Of Contents</details>` inside the hero left column. Local has zero matches for that selector. This is a real interactive widget that anchors to the page sections — it's not chrome. Live also has 4 `<details>` total; local has 10 (the 10 are FAQ accordions, which match), but the hero TOC `<details>` is absent.

3. **Hero contact form is missing the live form's field structure.** `[gpt5.2+gpt5.1]`
   Verified via DOM. Live's hero form (`<form>` index 0/1) contains: `serial-number` (select), `your-name`, `your-email`, `your-phone`, **`your-city`**, **`your-country`**, **`price-mind`**, `your-message`, `best-reply` (3 radios), submit. Local's hero form is missing the **city, country, and "price you have in mind"** fields. Definition is in `src/pages/sell-my-fender-guitar.astro` around the ContactForm — the wpcf7 port lost 3 fields. (Per CLAUDE.md, forms wire to the shared Mailgun handler — adding fields is structural, not just visual.)

4. **"Meet Classic Fender Guitar Specialist, Joe Dampt" card treatment is wrong.** `[gpt5.2+gpt5.1]`
   Live renders this section as a **single cream card with drop shadow and a layered/page-corner border**, with the black YouTube video block embedded inside the same framed card and text on the right. Local splits it into **two adjacent blocks** (a black `<iframe>` rectangle on white + a separate brown text card to the right) and replaces the cream-card frame with a red Margi-script "Joe's" graphic. The decorative frame + drop shadow + integrated video are all missing. This is the second-most-visible divergence in the top third of the page.

## 🟡 Should fix (visual quality, SEO)

5. **`<title>` differs** (from static audit, promoted):
   - live: `Sell My FENDER Guitar | Joes Vintage Guitars` (no apostrophe in Joes)
   - local: `Sell My FENDER Guitar | Joe's Vintage Guitars`
   Probably an intentional improvement, but flag for awareness — live's literal title is the SEO baseline.

6. **`<meta name="description">` differs significantly** (from static audit):
   - live: `Are you looking to sell your Fender? At Joe's Vintage Guitars, we are recognized nationwide as experts in buying, selling and appraising Fender guitars.`
   - local: `Sell your vintage Fender guitar to a trusted specialist. Expert appraisals, top-dollar cash offers, and stress-free nationwide shipping for Stratocasters, Telecasters, Jazzmasters, Precision Basses and more.`
   If parity is the goal, swap to live's exact copy; if local's is intentionally rewritten for SEO, add a Decision-log row.

7. **JSON-LD: missing per-page Article + Person + BreadcrumbList structures from live** (from static audit, partly):
   Local does have Article+Person+BreadcrumbList (per the summary), but the static audit's per-type matcher flagged several `ImageObject`, `Place`, `PostalAddress`, `WebPage`, `SpeakableSpecification`, `Offer`, `Review`, `Rating` types live emits that local doesn't. Worth a pass to align — Google may rank lighter without the per-product `Offer` + `Service` + `Review` blocks live carries.

8. **Form dropdown placeholder text mismatch** `[gpt5.2-only, mobile slice]`
   Live's serial-number select first option = `"Please choose an option"`. Local's reads `"Please choose an option—"` (an em-dash/extra char). Minor copy difference; verify against `src/pages/sell-my-fender-guitar.astro` `serialOptions` array.

9. **`<picture><source>` WebP markup not emitted on local** (from static audit, +11 missing).
   Live uses Avada's `<picture><source srcset="…webp">` for every inventory thumbnail; local renders the same images as plain `<img>`. Visually identical, but local ships ~30% bigger payload on those 11 photos. Astro's `<Image>` would emit a `<picture>` automatically — but the page is hot-linking remote URLs, so it can't. If you swap the hot-links to local imports (per CLAUDE.md image-migration rule), use `<Image>` and the `<picture>` will appear automatically.

10. **17 `<img>` on local missing `width`/`height`** (from static audit; partly false-positive per CLAUDE.md):
    Still worth setting explicit dimensions on the 7 inventory `<img>` tags and the 3 inline article photos to silence the CLS warning and reduce future regression noise.

11. **Live H3 sentence-case vs local CSS `text-transform: uppercase`** `[claude observed]`
    DOM verified: local's H3 `textContent` matches live exactly ("How To Sell Your Vintage Fender Guitar"), but local applies `text-transform: uppercase`. Visually different from live's mixed-case rendering. Either remove the uppercase transform or accept the deviation in the Decision log.

## 🟢 Acceptable / informational

- **Extra "Talk With Joe Today" `<ContactSection />` at page bottom.** Documented exception per CLAUDE.md decision log row dated 2026-05. Two contact forms back-to-back was rejected in favor of the shared component.
- **Live's `#get-in-touch` Boxzilla popup not replicated.** Documented exception. The 2 "missing" headings from static audit (`Get In Touch With Joe For A Free Vintage Guitar Consultation Today!` and `Get in Touch!`) live inside that popup.
- **Live's 3 IG-embed reels alongside testimonials not replicated.** Documented exception.
- **3 callouts on live are all `×` close affordances on popups, not content.** Static audit's `+3` callout-count diff is a false-positive for this page.
- **FloatingCTAs visible on local but not on live.** `[gpt5.2+gpt5.1 flagged, claude disagreed]` This is the global `<FloatingCTAs>` component injected by `Layout.astro` and is intentional per project chrome — every page has it. Not a sell-fender bug. Models flagged it because they had no context.
- **Hero H1 hierarchy.** `[gpt5.2+gpt5.1 flagged, claude disagreed]` Both models claimed local's "SELL YOUR VINTAGE FENDER GUITAR" is a hierarchy mismatch vs live's two-line "Expert Buyer & Collector…". DOM verified: **live's actual `<h1>` IS "Sell Your Vintage Fender Guitar" at 32px**; the "Expert Buyer…" line is an `<h2>` at 28.8px below it. Local's hierarchy is structurally correct. The visible divergence the models picked up on is really the panel-split + uppercase-transform issue (items 1 and 11), not H1 vs H2 order.
- **Astro `<Image>`-transformed URLs in static-audit's "missing width/height" list** (e.g. `/_astro/...?w=296&h=355&f=webp`). These have implicit aspect-ratio CSS, false positive per CLAUDE.md.

## Summary

- 4 🔴 must-fix items, all clustered in the hero + Joe-Dampt section: wrong panel architecture, missing TOC widget, missing form fields (city/country/price), missing cream-framed card around the Joe-Dampt block.
- 7 🟡 should-fix items: title/meta/JSON-LD copy, missing `<picture>` markup for inventory thumbs, uppercase H3 transform, select-option placeholder typo, missing img dimensions.
- Cross-model consensus ran with GPT-5.2 + GPT-5.1 instead of Gemini (Gemini 3 Pro free-tier quota was exhausted, returned 429). Inter-model agreement was very high on all top-third findings — both models independently flagged items 1, 2, 4, and the form/header divergences. The mobile pass produced an additional 12-item list that converged with the desktop findings.
- **Net assessment:** local has the right *content* (all 7 model cards, the 3 inline article photos, the Mary case study, the FAQ accordion with correct toggle_ IDs, the wood-frame meet-Joe portrait, the brown story-arrow block) but the *hero shell* is built as Archetype-A `<PageHero>` when live is actually a bespoke split-panel layout — closer to Archetype B in structure but with the form on the right. Fixing item 1 will collapse most of items 2-4 because the missing TOC + missing form fields + integrated video card all live inside that hero / sub-hero region.
