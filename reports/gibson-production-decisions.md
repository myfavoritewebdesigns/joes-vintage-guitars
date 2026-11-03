# Gibson Production Reference: Audit Decisions

Checked November 3, 2026. Scope: `/post/gibson-shipping-totals-1948-1979/` only. Prepared on `joe/gibson-production-audit`; production publication requires Joe's review of the preview.

## Evidence And Limits

The database contains 2,038 numeric source-category entries across 131 populated model/variant series, plus six searchable coverage notes. Each entry carries its published source and original row label. Twenty-seven web tables or discussions supply the numeric data. These are published transcriptions, with the Vintage Guitar Haven table explicitly identified as a secondary compilation. No claim is made that the original factory ledger or every printed book table was inspected. Agreement between two websites can reflect a common upstream source.

Eight disputed cells remain visible and are excluded from exact lookup totals. A numeric zero is retained only where printed explicitly. Blank, dash, x, annotated, or conjectural cells are not converted to zero. The lookup sums disjoint source categories, never a printed total together with its components. All-year sums cover included records only, with internal year gaps disclosed. Later Kalamazoo figures are not represented as complete company-wide production.

## Corrections And Category Repairs

- The 1958/1959 counts 19/3 belong to Explorer, not Moderne. Gibson's own historical article corroborates the 1958 Explorer and Flying V figures.
- Full-size Junior totals are placed in their proper years: 2,408 in 1958, 4,364 in 1959 and 2,513 in 1960. The 1958 single/double-cutaway split remains unresolved.
- Original Les Paul Custom coverage adds 1954 (94). The original-body series is separate from the SG-shaped 1961 Custom (513).
- Special counts are replaced with the published model series, with unsupported body and finish allocations removed.
- The previously repaired 1958 Standard total of 434 remains a combined Goldtop/Sunburst count.
- Deluxe finish, left-handed and full-size-humbucker categories are separate. 1976 Goldtop standard listing is 34; all listed categories sum to 172. Ten annual sums match the source totals.
- The 1976 to 1979 sequence labeled LP Pro belongs to Les Paul 55. Later Custom numbers are checked against the complete published model series.
- 1970 SG Standard and Special totals are 6,677 and 4,982 in the cited discussion. SG TV remains a separate ambiguous category.
- ES-355 mono and stereo counts are separated; their sum is not a Cherry-only count.
- ES-225 pickup variants and McCarty L-7 cutaway/pickup variants are distinct categories.
- Acoustic L-5C Natural cells are separated from electric L-5CES Natural cells. Non-cutaway L-7 Natural and the missing 1951 ES-5 Sunburst entry are restored.
- Conflicting Byrdland, ES-175, J-200 and TV Model cells are disclosed. Unverified later series remain explicit coverage gaps.
- Shipment, production and survivor counts are distinguished throughout. Unsupported long-neck ES-330 wording, finish precision and rarity/valuation certainty are removed.

## Intentional Presentation Changes

The live-diff script flags 17 renamed headings as missing. These are intentional replacements of the article title and 16 original section headings; all 16 original anchor IDs survive on the corresponding sections. The rewrite corrects misleading date ranges and categories, so the inaccurate headings are not restored merely to satisfy a string match.

The model/year/finish/variant tool is added immediately under the byline. It includes source-linked breakdowns, shareable lookup URLs and CSV downloads. The article shows 131 populated model tables in accessible disclosures, with all table HTML server-rendered. Six coverage-note entries explain unavailable models. The original hero and both content photographs, global header/footer, contact form and existing calls to action are retained. Updated metadata replaces the unsupported claim of official ledger verification. FAQ and image schema additions are deliberate.

Static audit: 12 images on both live and preview; zero broken assets; canonical and existing schema retained. Existing Reverb SVG dimension warnings are shared chrome and are outside this change. Heading, section-count and metadata differences are accepted as necessary parts of the requested rewrite. No unrelated global layout or configuration edits are included.

## Validation

Build, Astro checks and the repository copy gate pass. Boundary checks cover combined finishes, disputed cells, missing records versus explicit zero, model reclassification, mono/stereo separation, CSV source output and source references. Source-total arithmetic has also been checked for Deluxe, L-6S, Midnight Special, Marauder, S-1, Grabber, EB-0, EB-0L and Les Paul Bass/Triumph categories.

Original numerical cells receive a separate reconciliation disposition: agreement, changed value, broader category only, reclassification, dispute or withheld coverage gap. A withheld cell is not a finding that the old number is false; it means its category and value have not been independently supported by the checked material.
