# Gibson Acoustic Internal Links

Joe requested a sitewide check of links to the newly published Gibson acoustic guides on October 30, 2026. The baseline is production revision `0e195eb11be8660d192ad31902235c9d26574227`, released through PR #301. These additional links are prepared as a separate preview for review.

The rendered-site inventory found that the seven new guides had no main-content incoming links from outside the new guide group and its acoustic hub. The combined L-0/L-00 page had only one linking page, the acoustic hub. The existing acoustic hub already had incoming links from seven established pages.

## Changes And Intentional Additions

- Add 48 links across 14 pages. All use the canonical destinations directly, including two validated section anchors.
- The Resource Center homepage gains an expandable Gibson acoustic directory using its existing guide-list layout. Category archives and paginated blog archives do not repeat it.
- The Gibson value hub gains a compact list beneath its acoustic model cards. The serial-number guide gains an acoustic resource group. Both link to all seven guides; the serial-number resources also link to the acoustic hub.
- The Gibson selling page links to each new model's values. The general identification page links to the acoustic model directory.
- The J-45/SJ identification article and J-45 value guide link to the SJ and Country Western references where those models are discussed. The Hummingbird comparison links to Dove values and authentication, and to Country Western identification.
- The LG identification and value pages point to the separate L-0/L-00 family. The Gibson logo, tuner and hardware references link to the relevant authentication examples. The Southern Jumbo authentication page links to Country Western identification when the natural finish or label creates a model question.
- Existing headings, photos, value figures and metadata are preserved. The new Resource Center H2, serial-resource H3 and corresponding structural blocks are intentional additions. No global header, footer, navigation configuration or theme changes.

Every new guide now has incoming links from five to eight established pages outside the new guide group. The static link graph places each guide two page navigations from the homepage through the Resource Center; its expandable directory adds a separate disclosure interaction for a visitor. This is a navigation observation, not a search-ranking claim.

## Validation

- Build: 372 pages. Astro check: zero errors, zero warnings, 90 existing hints.
- Rendered copy check: zero hard failures, 753 report-only warnings, unchanged from the baseline.
- `review.json` records all 48 new anchors and their surrounding text. Destination files, section IDs and absence of redirect hops pass. All previous incoming links remain.
- For all 14 affected pages, titles, H1s, descriptions, canonical URLs, image URLs, dollar/percentage figures, existing links and JSON-LD are unchanged.
- The required live-diff comparison passed for all 14 pages with zero must-fix findings and no broken assets. Remaining warnings are the intentional Resource Center/serial-resource additions and pre-existing shared Reverb icon dimensions. The individual reports are in the parent reports directory and their results are collected in `live-diff-results.json`.
- Browser review at 1440px and 390px confirmed no horizontal page overflow on the Resource Center and main Gibson value hub, readable link wrapping, the expanded directory, and a working Resource Center-to-Southern Jumbo authentication link. The serial-number resource group was checked at desktop width.

The repository's external specialist-methodology path is unavailable locally, and its referenced GitHub path returned 404 for the configured account. These results document concrete link and regression checks using the existing site reports and tools; they are not a broader SEO audit. No subagent was used because the active developer instructions prohibit unsolicited delegation.

Preview: `http://127.0.0.1:4330/blog/#gibson-acoustic-guides`.
