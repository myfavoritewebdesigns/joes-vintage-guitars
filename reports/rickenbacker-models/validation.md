# Preview Validation

## October 29 Value-Chart Revision

- All 15 value guides now render numerical charts containing 175 model-and-era rows.
- Each saved adjustment is one of 11%, 12%, 13%, 14% or 15%; both adjusted endpoints match the calculation and are rounded to the nearest $50. Assignments are persistent, with no runtime randomness.
- Every value article has zero external article links and no dealer names, auction references, old listing examples or attribution to the pricing reference. Authentication articles retain their technical references.
- Values are explicitly estimated USD market ranges for excellent, original instruments, with case assumptions and a distinction from purchase offers and insurance values.
- Production build: 357 pages. Astro check: 0 errors, 0 warnings. Rendered-copy gate: 0 hard failures; the same 730 existing warning-tier findings remain.
- All 31 guide/index routes pass metadata, canonical, image and internal-target checks. Articles retain 8 to 10 photographs.
- All 93 isolated browser checks at 1440, 390 and 320 pixels pass, with no page overflow, clipped value columns, missing images or page errors. Representative desktop/mobile accessibility checks report zero violations.
- Desktop and mobile chart screenshots reviewed. On small screens configuration notes move under the model name so the value column remains visible without sideways scrolling.
- Licensed image metadata check: 285 nodes across all 31 pages, zero content-URL mismatches.
- Browser control was available for reading the remaining source entries during this revision. Working calculation records are local, outside deployed source. Preview-only delivery remains pending Joe's publication approval.

See `value-chart-check.json`, `browser-check.json` and `rendered-check.json` for current machine-readable results. The existing-page comparisons below were completed for the initial library integration; this revision changes the new library pages and their shared article presentation only.

## Original Library Validation

Checked October 27, 2026 against the final local production build.

- Production build completed: 357 pages.
- Astro check: 0 errors, 0 warnings, 94 informational hints in the repository and local scratch files.
- Rendered copy gate: 0 hard failures. The repository report contains 730 existing warning-tier findings; the new Rickenbacker articles have no warning entries.
- All 31 new routes: one H1, one main landmark, correct production canonical, titles at most 60 characters, descriptions at most 160 characters, valid JSON-LD, existing internal targets and image files.
- All 30 articles contain 8 to 10 archive photographs. Each photo identifies the actual instrument shown.
- Isolated browser checks: all 31 routes at 1440, 390 and 320 pixels (93 checks), with no horizontal overflow, missing images or page errors.
- Scoped accessibility checks: index plus representative authentication and value layouts at desktop and mobile sizes; 0 violations after adding a persistent underline to the author link.
- Desktop and mobile screenshots reviewed for the index, short-scale guides and 4005 guides. Screenshot tests await image decoding before capture; early captures taken before decoding were replaced.
- Existing-page live-diff: 0 must-fix findings on all nine affected existing pages (blog, serial lookup, six hardware guides and selling page). Existing shared Reverb icon width/height warnings remain outside this change.
- Blog feed and pagination retain their existing post sequence. The new paired library is exposed through its index, category, contextual links and sitemap.

Detailed machine-readable evidence is in `rendered-check.json`, `browser-check.json` and `existing-page-check.json`. The index route and article routes are listed in `routes.json`.

The first copy check found an unregistered category display name and three lowercase words in market-example headings; all were corrected. The initial blog comparison reported normal new-post displacement, resolved by placing the paired guides in their dedicated library/category instead of the main chronological feed.

Native browser remote control was unavailable in this session. A Chrome app-control launch timed out waiting for approval. The successful browser checks used an isolated headless test process against the local build, not the user's browser session.

No production publication has been authorized for this expansion. The next step is review of the specific preview.
