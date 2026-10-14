# Les Paul Standard Guides: Prepublication Revision Checks

October 14, 2026. Applies to the authorized follow-up to the prepublication analysis on draft PR #223. These are implementation checks, not production publication or a prediction of search performance.

## Completed Checks

- Production build completed at 22:02:53 UTC: 227 pages, image sitemap and IndexNow manifest generated.
- Astro check: zero errors, zero warnings and 93 existing hints.
- Required rendered copy gate: zero hard failures, no warnings on the three year-guide routes. There are 778 existing warnings elsewhere.
- MFWD longform scan: zero bans and three specification-table advisories. The practical specification tables are intentionally retained at Joe's request. Cross-draft similarity is below the scanner threshold.
- All 18 visible FAQ questions and answers match the FAQPage data. Each guide has one H1, six FAQs and value as its first H2.
- Exact Expert Notes, modern-reissue disclosures, year-specific checklists and shortened 1958/1960 serial explanations are preserved.
- Internal routes, fragments, contents links, the three early value jumps, appraisal links, hub links and new dating/PAF return links resolve in the build.
- All 24 hero/detail image-license URLs match the rendered optimized image sources. Captions, alt text, responsive variants, intrinsic dimensions and lazy detail loading remain. The 1958 M-69 figure remains absent.
- The three self-canonicals and their XML sitemap and image-sitemap entries match the intended production routes.
- No identical paragraph of 30 or more words remains between any pair of guides. The three articles contain no outbound Reverb links, buyer reviews, prohibited dashes or third-person shop voice.
- The removed fret-size, scale/fret-count, neck-wood and late-1960 color assertions are absent from both visible text and regenerated FAQ data.
- `git diff --check` passes.

| Year | Rendered Words Including Captions | Internal Links | FAQ Pairs | Detail Photos |
| --- | ---: | ---: | ---: | ---: |
| 1958 | 2,014 | 29 | 6 | 6 |
| 1959 | 2,359 | 31 | 6 | 7 |
| 1960 | 2,252 | 37 | 6 | 8 |

## Existing-Page Preservation

The required live/local comparisons for the existing Les Paul dating and PAF guides return zero must-fix findings, unchanged heading/image inventories, and zero broken checked assets. Each reports the same two shared Reverb SVG icons without intrinsic dimensions, outside the edited article paragraphs. No shared icon change is included in this draft revision.

Reports:

- `burst-links-les-paul-dating-audit-2026-10-14T22-03-20-446Z.md`
- `burst-links-paf-audit-2026-10-14T22-03-20-160Z.md`

The three new year articles have no existing production page for a WordPress parity comparison. Their intentional design additions are recorded in CLAUDE.md.

## Review And Release Scope

Independent browser review and the separate MFWD final read are recorded separately. The final reader raised a 1958 shipment-split source conflict and the completeness cost of omitting unsourced neck/fret and finish details. The source ledger records those findings, distinguishes live-page support from independent corroboration, and preserves Joe's requested figures pending resolution. These technical passes are not an unconditional editorial clearance.

The source ledger distinguishes live-page support, Joe's direct observations and unchanged canonical database status. The full agency audit methodology, fresh Search Console data, field Core Web Vitals and Google Rich Results Test were not available or run. No broader pass is inferred from these local checks. Keep PR #223 as a draft.
