# Structure Optimization (Prompt 7)

Recorded: 2026-06-11, branch `fable/seo-07-structure-optimization`.

## What The Data Said First

Per the prompt, targets came from measurement, not guessing:

- **Unused CSS: 0 KB on every Lighthouse-measured page.** Tailwind 4 tree-shaking and Vite bundling already do their job; there was no bundle-level dead weight to win back.
- **Unused JS: 26 KB on the homepage and sell-my-fender**, all of it the Instagram embed script and lite-youtube CDN assets. Those are decision-logged features (social proof embeds), not removable cruft.
- **DOM size:** the heaviest pages are the Gibson guide (3,516 nodes), Guild guide (3,403), and the shipping-totals post (3,101). All three are content tables and reference material; flattening would buy little and risk much. `/reverb-reviews/` was not touched per the standing rule.
- **awb/fusion leftovers: a false target.** The 71 matching elements are the FAQ component's `fusion-toggle-heading` spans, a deliberate live-parity class with an ACTIVE CSS rule attached. Kept.

## What Was Actually Done

1. **16 proven-dead CSS rules removed** across 9 page files. "Proven" means: every selector matched zero elements across all 90 built pages, AND no class token appears in runtime JS (decoder tools, inline scripts, contact-form handler) or reference/ widget markup. Notable removals: the free-appraisal `.fa-authority` block styles (markup was merged away in an earlier session), the sell-page `--cream` button variants orphaned by a decision-log color swap, and `.smf-meet__grid` media rules left behind by the Meet Joe v5 to v8 rebuild saga.
2. **Landmark semantics fixed, the Prompt 5 flagged item:** the Gibson and Guild guides nested a `<main>` inside Layout's `<main>`, and Gibson nested an `<aside>` callout inside it too. All three became class-styled `<div>`s. axe on the Gibson page went from 5 violation rules to 1 (the documented matches-live contrast baseline); Guild's landmark violations are gone entirely.

## What Was Deliberately Kept (Looks Dead, Is Not)

- Interaction-state rules (`details[open]`, `.faq-item.open`, `[data-state]` form banners): static DOM scans cannot see runtime state; all verified against the scripts that toggle them.
- Component API variants (`.jvg-btn--sm`, PageHero/SectionHeader `--left`, the gallery `.jvg-img--uniform` primitive): documented primitives future pages are told to use.
- Conditional-render branches (`.barch__empty`, `.bpc__media-fallback`): defensive UI for states that do not currently occur.
- The unused ContactForm primitive: its scoped CSS ships zero bytes because Astro only bundles CSS for rendered components.
- `.blog-prose hr`: prose stylesheet completeness for future markdown content.

## The Zero-Visual-Change Gate, Honestly

Live-vs-local crops would show the pack's own intentional diffs (Prompt 3 copy, Prompt 5 image URLs), so the gate ran as PRE-change build vs POST-change build:

- Full-page screenshots at 1920 and 390 for all 10 touched pages: 7 pages zero-diff on the first pass.
- The 3 "diffs" (Fender, Gibson, Guild) were investigated rather than waved off: a same-build-twice control was stable, but re-running the SAME pre/post pair flipped between zero-diff and 0.3 to 1.4 percent across runs, with every flagged page also producing a zero-diff capture. The capture pipeline is nondeterministic at these page heights (58k to 95k pixel full-page captures).
- The decisive instrument: a DOM geometry comparison of every element's bounding box (3,468 elements on Gibson, 3,358 on Guild, 2,272 on Fender). **Byte-identical positions and sizes on every element**, with the only deltas being the intended tag-name changes (MAIN to DIV, ASIDE to DIV) at identical coordinates. Zero `main` or `aside` element selectors exist in any built CSS bundle.

## Before And After

| Metric | Before | After |
|---|---|---|
| Built CSS bytes (all bundles) | 363,011 | 361,728 (1,283 saved) |
| Built HTML bytes (90 pages) | 8,136,590 | 8,136,553 |
| DOM nodes (any page) | unchanged | unchanged |
| axe violation rules, Gibson guide | 5 | 1 (matches-live contrast baseline) |
| axe landmark violations, Guild guide | 4 | 0 |
| Element geometry (10 touched pages) | baseline | byte-identical |

The honest headline: this codebase was already clean. The build pipeline leaves no bundle waste, the hand-ported widget CSS is live-parity by design, and the real win of this prompt is the landmark accessibility fix plus confirmation (with tooling now in the repo's history) that the CSS carries almost no dead weight.

## Verification

- `npm run build` green (90 pages), `npx astro check` 0 errors, `npm run audit:copy` 0 hard-fails, `check-dist-images` 2,536 refs 0 broken.
- audit:a11y Gibson: only the documented contrast baseline remains. No new violations anywhere.
