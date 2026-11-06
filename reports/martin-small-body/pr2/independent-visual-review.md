# Martin small-body PR 2 — independent visual review

Reviewed November 6, 2026, on the settled local build at `http://127.0.0.1:4330`, including the final editorial build based on main `17debeb`. This is a preview review, not publication approval. No product source or photos were changed by the auditor.

Status: complete, including the subsequent 2-15 source-conflict omission and final hub-label rebuild.

## Must fix

None found in the six rendered guides.

## Should fix

No remaining confirmed visual or photo-caption defects. The initial photo review's `ny62head` caption issue was corrected in the source to “slotted headstock and script logo.” That selection is not currently placed in the six rendered articles.

## Scope and evidence

All authentication/value pairs for `martin-000-28`, `martin-15-17-series`, and `martin-style-21-small-body` were reviewed at **1280 × 800** and **375 × 812**. J-200 was used as the requested design reference, not a content-parity baseline: these six pages are new and have no production originals.

| Check | Result |
| --- | --- |
| Hero buttons | All 24 primary button checks are visible and unobscured; appraisal and Martin seller destinations are correct. |
| Page width | No document overflow in any of the 12 views, including the final build. |
| Rendered photos | All 90 figure placements across the two widths have loaded images, positive height, `contain` fit and captions below; minimum image-box height is 250px. |
| Gallery layout | Desktop pairs and mobile stacks were inspected after image reveal animations settled; complete photo frames and watermarks remain visible. |
| Tables | All six tables fit their desktop containers; all six mobile containers scroll the full 425px needed to expose their rightmost columns. |
| FAQs | The first FAQ was opened interactively on every page/width; expanded FAQ screenshots were independently inspected on all 12 views. |
| Anchor navigation | All 120 fresh hash navigations passed after a 2.2-second smooth-scroll settling interval, with no broken images visible at the target. |
| Contrast | The parent's final complete text-run audit contains 3,282 runs, zero computed failures and zero axe contrast violations; I separately inspected heroes, tables, archive text and expanded FAQs. |

Deep ancestor and `::before`/`::after` walks for every article H1/H2 are recorded in `independent/rendered.json`, including the J-200 reference. The cream body, dark hero/timeline treatment, numbered section hierarchy, light striped tables and rust actions follow that reference through the existing model-guide kit. The PR 2 section inventories and model-specific photos are intentional content differences.

The 1965 00-21NY archive uses the corrected archive tone, with its eyebrow and repair disclosures readable. The photo review inspected all 35 selections; six genuine serial close-ups match their captions, the 1950 correction retains serial 113035, and repair/refinish/guard uncertainties remain attached to the appropriate instrument. The 35 local photo hashes matched both recorded asset and source hashes; no rejected 1944 000-18 selection was present.

The final build was checked again at both widths, with clean full-page captures and targeted inspection of `000-28#scale`, `15-17-series#family`, `15-17-series#appointments`, `style-21-small-body#zero`, and the Style 21 value chart's 1944 brace note. The nominal scale references, 1940–1961 model row, dated dot-marker example, shortened comparison caption and brace note render correctly. No layout changes accompanied these editorial corrections.

The subsequent source-conflict correction was rechecked on both widths: the 15/17 authentication family table has eight rows with no 2-15; its value chart has 33 rows with no 2-15; `#choose-model` uses 2-17. Both tables still pan fully on mobile, with no overflow or broken images. The four affected full-page captures were refreshed. After the final hub-only rebuild, its table region reads “Vintage Small-Body Martin Values” and contains 164 rows. This records the selected omission without asserting that the disputed source classification has been resolved.

## Evidence files

- `independent/final-check.json`: final 12-view checks, article text hashes and changed-section text.
- `independent/final-2-15-check.json`, `final-model-prose.json`, `*-final-2-15-correction.png`, `*-final-choose-model.png`: last table/prose correction and hub region-label evidence.
- `independent/*-final-full.png`: authoritative full-page captures from the final settled build, with images decoded/revealed and article FAQs expanded.
- `independent/*-final-scale.png`, `*-final-family.png`, `*-final-appointments.png`, `*-final-zero.png`, `*-final-brace-note.png`: final targeted captures.
- `independent/*-hero.png`, `*-gallery.png`, `*-faq.png`, `*-table-left.png`, `*-table-right.png`: individually inspected hero, gallery, FAQ and table evidence.
- `independent/anchors.json`, `table-pans.json`, `gallery-visibility.json`, `rendered.json`: navigation, panning, image visibility and deep DOM measurements.
- `visual/audit.json`: parent-run full contrast evidence, inspected by this auditor.

An initial desktop 000-28 capture overlapped a rebuild and encountered unloaded assets; it was replaced after the build settled. Supplemental gallery captures were also replaced after explicitly waiting for the site's reveal animation. Those transient capture failures are not product defects. The `*-final-full.png` files supersede earlier full-page captures.

## Review limits and handoff

- Playwright MCP is unavailable; the equivalent screenshot, image-loading, DOM/pseudo-element, interaction and anchor checks were completed using an isolated local Playwright/Chrome process. Qualitative visual review was not skipped, and the user's browser session was not used.
- Axe leaves FAQ texture/pseudo-element cases and some hero overlap cases incomplete. The computed ancestor-background audit and direct screenshot inspection cover those cases; zero axe violations alone is not treated as a complete contrast proof.
- Cross-model vision review was not run in this agent. If required by the release workflow, the main agent should pass the J-200 reference and final Martin screenshots at both requested widths to the designated independent vision reviewers; this is a coverage handoff, not a discovered defect.
- Per the main agent's plan, static live-diff checks will compare the hosted PR 2 preview against this local build after deployment. This report does not claim those future hosted checks have passed.
