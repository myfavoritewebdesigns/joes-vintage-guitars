# Amp guides PR 2 — independent visual and live-diff review

Reviewed November 2, 2026 on `joe/amp-guides-2`. **PASS: no must-fix visual or unrelated-regression findings.** This reviewer changed reports only; no source edits or additional agents.

## 🔴 Must fix

None in the final reviewed build.

## 🟡 Nonblocking observations and coverage

- Each of the five repository live-diff reports flags the same two shared `/images/reverb-icon.svg` instances without HTML width/height attributes; this predates PR 2, affects the unchanged J200 control too, and is not an amp-page regression.
- The older supplied Vibrolux timeline screenshots contain “Four House Eras”; fresh browser checks after the final wording rebuild confirm no “house” wording remains in any of the eight articles, so this copy finding is closed.
- Optional cross-model visual review was not performed; per the auditor handoff requirement, the available reference pairs are `screenshots/gibson-j200-model-history-authentication-guide-{1280,375}-dark.png` versus `screenshots/fender-vibrolux-authentication-guide-{1280,375}-dark.png`, plus their archive/hero pairs if another model review is desired.

## 🟢 Verified presentation and interaction

- Inspected all 16 first-screen images covering Bassman, Super, Vibrolux and Champ value/authentication pages at 1280×800 and 375×812: Free Appraisal and Sell My Amp are visible, correctly labeled and legible, with no header/title collision or clipped heading.
- Fresh navigation of all eight rebuilt pages at 375×812 independently confirmed both CTA destinations, no page-width overflow, no broken article fragment destinations, no unrelated guitar-dating footer, and no remaining internal “house” wording; the lowest CTA edge was 734px, within the 812px screen.
- Inspected representative Bassman value and Vibrolux authentication hero/facts, dark, table/checklist and archive captures at both widths alongside J200; cream/rust/dark color rhythm, Oswald heading hierarchy, section-number spacing and photographic grouping are consistent with the kit.
- Opened the production J200 page and walked the hero, timeline, table and archive ancestors through `html`, including both pseudo-elements at every level; the inspected colors, wrappers and overflow treatment support the visual comparison rather than relying on screenshots alone.
- Amp photos preserve complete cabinets and controls with `object-fit:contain`; substantial mobile black letterboxing is intentional and captions remain readable, while archive groups become a single-column sequence without page overflow.
- Fresh Vibrolux mobile date-card and Champ desktop date-card checks show readable gold codes, cream headings/body and correctly loaded chart photographs; a full ancestor/pseudo-element walk confirmed the code-card background and containment.
- The Vibrolux specification table is a named `tabindex="0"` region with `overflow-x:auto`; keyboard ArrowRight input moved its horizontal scroll position to 80px while document width stayed within the client width.
- Fresh anchor navigation reached Vibrolux specifications/date evidence and FAQ, and the first FAQ disclosure opened with its answer visible and readable; code-card photos loaded when brought into view.
- The supplied final layout report has 16 cases, zero horizontal-overflow cases, zero broken images and zero invisible top CTAs; the supplied contrast report has 16 cases and zero computed text-contrast failures, with image backgrounds separately requiring the visual checks above.

## Existing-page scope and preservation

Independently recomputed current SHA-256 values against the preservation baseline: **131 checked, 129 identical, two intentional differences**. The two differences are the PR 1 era and comparison articles. Reviewed the existing-source word diff and the two Astro page diffs:

| Existing page | Reviewed change | Disposition |
| --- | --- | --- |
| Fender era article | Contextual links to all four new model families | Matches authorization |
| Reverb comparison article | Vibrolux/Super model and value-guide links, the two approved value ranges with row-basis notes, contextual Bassman/Champ links | Matches authorization |
| Amp dating reference | One paragraph linking the four new identification guides | Matches authorization |
| Amp selling page | One paragraph linking the four new value guides | Matches authorization |

Ran the repository live-diff script against production and the final local build for all four existing pages plus J200. **All five reports have zero must-fix items**, with heading inventories preserved and only the shared SVG warning above:

- [Amp dating live-diff](live-diff/amp2-serial-review-audit-2026-11-03T00-27-40-652Z.md)
- [Amp selling live-diff](live-diff/amp2-seller-review-audit-2026-11-03T00-27-52-503Z.md)
- [J200 control live-diff](live-diff/amp2-j200-review-audit-2026-11-03T00-27-56-928Z.md)
- [Era article live-diff](live-diff/amp2-eras-review-audit-2026-11-03T00-27-59-688Z.md)
- [Comparison article live-diff](live-diff/amp2-comparison-review-audit-2026-11-03T00-28-02-522Z.md)

## Evidence and limits

Inputs: [page audit](page-audit.json), [layout audit](layout-audit.json), [contrast review](contrast-review/audit.json), [preservation baseline](preservation.json), [schema/scope report](schema-and-scope.json), and [screenshots](screenshots/). Browser review used the available CUA/Playwright surface and `http://127.0.0.1:4328` after the final wording rebuild. Supplied screenshots establish the exact requested capture sizes; live production J200 DOM inspection occurred with that site's existing browser zoom, which was not altered.

This review includes all eight first screens and fresh per-page DOM checks, plus representative deep visual/interactive checks; it does not claim an interactive click on every anchor, a separate full factual/source audit, a complete accessibility certification, or a production deployment check of the new PR 2 URLs. The image checks do not classify unseen offscreen lazy images as failures. No forms were submitted, and no live website state was changed.
