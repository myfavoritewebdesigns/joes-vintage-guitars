# Les Paul Year Guides: External Source Completion

October 14, 2026. Joe explicitly relaxed the previous JVG-only source restriction. This report covers the resulting corrections on draft PR #223 and supersedes the source-scope limitations recorded in the earlier prepublication report. It does not authorize production publication.

## Evidence And Changes

- **1958 shipments:** Use 434 combined Goldtop/Sunburst shipments. The exact 247/187 split is no longer asserted in the article, description, FAQ, related cards or linked shipping table. John Shults' discussion of the published Meiners totals and the Burst Serial registry support treating 434 as combined. No original annual ledger was inspected, so the exact finish split remains unknown rather than replaced with another estimate.
- **Core specifications:** Visually inspected Gibson's original 1958 page 16 and 1960 page 10 catalog scans. Restored the nominal 24.75-inch scale, 22 frets and mahogany neck specification, with one-piece wording where the 1960 catalog states it. Catalog artwork is explicitly distinguished from the text when the 1958 image retains outdated pickups.
- **Year-specific features:** Restored narrow 1958 frets, the overlapping transition to wider 1959 wire, and continued wide wire in 1960. The 1959 account links to documented original-fret examples instead of asserting a universal serial cutoff. The 1958 Special caption explicitly excludes Standard fret-size inference.
- **1960 neck and finish:** Added Well Strung Guitars' attributed inventory measurements and Gibson's historical explanation of the brighter, more colorfast later finish. These are not Joe's measurements, the R0's measurements or fixed specifications for all guitars. The original 1960 catalog's $265 guitar and $42.50 case prices are separated from the existing dated vintage value range.
- **1959 evidence:** Explained how identifiable features in dated owner photos can contribute to provenance without inventing a case or changing Joe's Expert Note. Added the existing dating guide's Made in USA exclusion, with the explicit limitation that absence does not distinguish an R9.

Exact source URLs and their scope are in `docs/editorial/les-paul-standard-guides-review.md`. Joe's price estimates and three supplied Expert Notes remain unchanged. The original-reissue photo disclosures, image provenance, no-Reverb preference and year-specific serial/checklist structure remain.

## Completed Local Checks

- Production build completed at 22:26:47 UTC: 227 pages, image sitemap and IndexNow manifest generated.
- Astro validation: zero errors, zero warnings, 93 existing hints.
- `npm run audit:copy`: zero hard failures across 227 pages. No warnings on the three guide routes; 778 existing warnings elsewhere.
- MFWD longform/batch scan: zero bans and three specification-table advisories. The borderline contraction-density advisory from the first pass was cleared by a natural copy edit. Tables directly answer the requested specification intent. Maximum cross-draft similarity is 17%, below the scanner's 80% threshold.
- All 18 FAQ pairs match visible answers exactly. One H1 per page, Title Case headings, value first H2, scoped ranges, unchanged Expert Notes and year-specific serial examples pass.
- Internal routes, fragments, contents links, value jumps, appraisal links and hub/dating/PAF return links resolve. A newly introduced dating-photo fragment failed the first pass and was corrected to the actual later-models section before this verification.
- All 24 image-license URLs match rendered images. Optimized image variants, alt text, captions, intrinsic dimensions and responsive sizing remain correct. The 1958 M-69 image remains absent.
- Self-canonicals and both sitemaps contain the intended routes. No outbound article Reverb links, buyer reviews, donor terminology, prohibited dashes or third-person shop voice.
- No identical prose paragraph of 30 or more words between any pair of articles. `git diff --check` passes.

| Year | Rendered Words Including Captions | Internal Links | FAQ Pairs | Detail Photos |
| --- | ---: | ---: | ---: | ---: |
| 1958 | 2,135 | 29 | 6 | 6 |
| 1959 | 2,558 | 33 | 6 | 7 |
| 1960 | 2,454 | 37 | 6 | 8 |

## Existing Shipping Page Comparison

`burst-shipping-correction-audit-2026-10-14T22-21-10-008Z.md` checks 11 assets with zero broken URLs. Heading and image totals are unchanged at 24 and 12. JSON-LD type inventory is unchanged.

The raw script returns one missing-heading group: the intentionally changed first table heading and three automatically generated related-article titles. The latter now show the new year guides. These are accepted content changes recorded in CLAUDE.md, not lost article sections. Two existing shared Reverb SVG icons still lack intrinsic dimensions; this revision does not change them. No other must-fix finding remains after this disposition.

## Independent Reviews And Deployment

The independent visual delta review passes at 1920px and 390px, including the four-column shipping table, all expanded specs and the 1960 catalog-price subsection. Screenshot evidence and measurements are in the visual-review report. The fresh reader found no glaring factual errors or major query omissions, but returned FIX FIRST for competitive distinctiveness and requested authentic Joe appraisal examples. That verdict and the writer disposition are preserved in reports/les-paul-standard-guides-final-read-external-sources.md. Two minor copy findings were corrected and checked after the read. The earlier final-read report remains a historical record of its version.

No canonical database approval, fresh Search Console export, field Core Web Vitals measurement or Google Rich Results Test is claimed. The unavailable canonical agency audit methodology remains a limitation of the broader SEO audit. These local checks do not predict rankings. PR #223 remains a draft.

## Final Shipment Wording Follow-Up

At Joe's request, the 1958 guide and shipping page now state the 434 ledger total and that it doesn't separate Goldtops from Sunbursts, retaining both external sources without discussion of the earlier split. The 1958 FAQ schema matches its revised visible answer. The 22:53:02 UTC production build passes at 227 pages; the rendered copy audit returns zero hard failures, and all 18 FAQ pairs and internal links pass. The 1958 article now contains 2,088 rendered words. MFWD reports zero bans and the existing specification-table advisory.

The shipping live-diff report `burst-shipping-final-wording-audit-2026-10-14T22-53-28-956Z.md` has zero broken assets and the same previously accepted heading/related-card differences and shared SVG advisories. A focused rendered check confirms both source links, the combined total and absence of correction-history language in both shipment sections. This is a copy-only follow-up; no layout or image changes were made. PR #223 remains a draft.
