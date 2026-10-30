# Gibson Acoustic Internal Links

Joe requested a sitewide check of links to the newly published Gibson acoustic guides on October 30, 2026. The baseline is production revision `0e195eb11be8660d192ad31902235c9d26574227`, released through PR #301. These additional links are prepared as a separate preview for review.

The rendered-site inventory found that the seven new guides had no main-content incoming links from outside the new guide group and its acoustic hub. The combined L-0/L-00 page had only one linking page, the acoustic hub. The existing acoustic hub already had incoming links from seven established pages.

## Changes And Intentional Additions

- Add 40 links across 13 pages. All use the canonical destinations directly, including two validated section anchors.
- Joe declined the proposed Gibson dropdown on the Resource Center. The blog archive is restored to the production version. Like the standalone Fender value guides, the Gibson guides remain discoverable from related articles and their existing brand/model hubs. A future combined value-guide hub is deferred until Joe wants one.
- The Gibson value hub gains a compact list beneath its acoustic model cards. The serial-number guide gains an acoustic resource group. Both link to all seven guides; the serial-number resources also link to the acoustic hub.
- The Gibson selling page links to each new model's values. The general identification page links to the acoustic model directory.
- The J-45/SJ identification article and J-45 value guide link to the SJ and Country Western references where those models are discussed. The Hummingbird comparison links to Dove values and authentication, and to Country Western identification.
- The LG identification and value pages point to the separate L-0/L-00 family. The Gibson logo, tuner and hardware references link to the relevant authentication examples. The Southern Jumbo authentication page links to Country Western identification when the natural finish or label creates a model question.
- Existing headings, photos, value figures and metadata are preserved. The new serial-resource H3 and corresponding structural block are intentional additions. No global header, footer, navigation configuration or theme changes.

Every new guide now has incoming links from four to seven established pages outside the new guide group. The retained links include the Gibson serial-number guide and value hub, model comparisons and hardware references. These are navigation observations, not search-ranking claims.

## Validation

- Build: 372 pages. Astro check: zero errors, zero warnings, 90 existing hints.
- Rendered copy check: zero hard failures, 753 report-only warnings, unchanged from the baseline.
- `review.json` records all 40 new anchors and their surrounding text. Destination files, section IDs and absence of redirect hops pass. All previous incoming links remain.
- For all 13 affected pages, titles, H1s, descriptions, canonical URLs, image URLs, dollar/percentage figures, existing links and JSON-LD are unchanged. The blog archive matches the production source.
- The revised live-diff comparisons passed for all 13 affected pages with zero must-fix findings and no broken assets. A separate comparison confirms the restored blog matches live headings, structure and image counts. The earlier report set includes the now-removed Resource Center dropdown and is retained as historical evidence; use `live-diff-results.json` for the current set. The only intentional remaining structural addition is the serial-number resource group.
- The retained link layouts were reviewed at 1440px and 390px: readable wrapping and no horizontal overflow on the Gibson value hub. The serial-number resource group was checked at desktop width. Browser review of the revised blog confirms no Gibson dropdown, the two existing guide sections and the usual nine post cards.

The repository's external specialist-methodology path is unavailable locally, and its referenced GitHub path returned 404 for the configured account. These results document concrete link and regression checks using the existing site reports and tools; they are not a broader SEO audit. No subagent was used because the active developer instructions prohibit unsolicited delegation.

Previews: `http://127.0.0.1:4330/blog/` and `http://127.0.0.1:4330/vintage-gibson-value-guide/#gibson-acoustic-values`.
