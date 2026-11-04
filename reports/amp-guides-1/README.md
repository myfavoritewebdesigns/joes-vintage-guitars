# Vintage Fender Amp Guides, PR 1

Eight new preview pages: Twin/Twin Reverb, Deluxe/Deluxe Reverb and Princeton/Princeton Reverb value and identification pairs; Fender eras; vintage reverb-amp comparison. Built from main `0a64d67567f3300235f3a74077cdc66795765717` on `joe/amp-guides-1`. No merge or PR 2 work is authorized until Joe approves this preview.

## Verification

| Check | Result |
|---|---|
| Production build | 394 pages, passed |
| Astro check | 0 errors, 0 warnings; advisory hints retained in the log |
| Rendered copy gate | 0 hard failures; 764 site-wide advisory warnings |
| Writing-system AI scan | 8 pages; BAN 0, WARN 0 |
| Image-license check | 53 licensed-content nodes; 0 mismatches |
| Internal route and anchor checks | 0 broken links across eight new and two edited pages |
| Live sitemap | Existing internal destinations verified against live sitemap; new destinations verified in the build |
| Value calculation | 40 rows, 2026 excellent-condition book entries, saved 11 to 15 percent reductions, nearest $50; all endpoints verified |
| Phrase overlap | Every twin below 10%; all 28 pairings below 26%; highest 2.30% |
| Protected HTML | All 123 existing model-guide, Rickenbacker, J-200 and GuideActions documents byte-identical to the baseline |
| Layout | 16 page/viewport cases, both top CTAs visible, 0 document overflows, 0 broken images |
| Contrast | All 16 cases have 0 computed failures and 0 axe color-contrast violations; incomplete axe overlap/image cases remain recorded |
| Schema | One matching FAQPage per new page; all visible questions/answers match; no Product, Offer, AggregateOffer, Review or AggregateRating schema |
| Independent editorial review | READY, all eight pages; required corrections resolved |
| Independent visual review | PASS, no open visual blockers; scope and unperformed cross-model coverage disclosed |
| Live-diff | Serial anchor, selling anchor and J-200: 0 must-fix; approved title change and pre-existing Reverb-icon dimension warnings documented |

[Per-page verification table, H2 inventory, photo use and inbound sources](page-metrics.md), [schema and word-count method](schema-and-scope.json), [HTML preservation](preservation.json), [layout](layout-audit.json), [contrast details](contrast-axe/audit.json), [editorial review](editorial-review.md), [visual review](visual-review.md), [live-diff reports](live-diff/).

The contrast audit opens FAQ disclosures and checks computed text colors against composited ancestor colors. Axe incomplete cases are not automatic passes. The visual reviewer checked representative layered surfaces and all mobile heroes. This is not a claim of exhaustive accessibility or cross-model coverage.

## Existing Pages And Title

The serial anchor gains three contextual link paragraphs. Its sole other change is the explicitly approved Layout title:

- Before: `Vintage Fender Amplifier Serial Numbers: Find The Year`
- After: `Fender Amp Serial Number Lookup: Find The Year By Code`

The rendered after string is exactly 54 characters, with no brand suffix, and is unique across the build. H1, description, URL, decoder and existing body copy are preserved.

The selling page gains a link on Fender and one contextual paragraph linking the three values and comparison. The Fender guitar value hub and pot-code page have no existing amp passage in which to place the requested link, so both are left unchanged. All eight new pages receive at least four contextual prose inbounds.

Optional kit fields provide article category, FAQ subtitle, closing title, assessment note and plain numbering. Existing defaults and styles remain unchanged. The generic Fender guitar-dating footer is suppressed on the eight amp guides because their own relevant amp links replace that unrelated destination block. No hub, navigation entry or category is added.

## Facts And Price Conflicts

1. The brief and live amp decoder define the eras as 1948 to 1959 tweed, 1959 to 1963 blonde/brownface, 1963 to 1967 blackface and 1967 to 1980 silverface. Those exact broad boundaries govern. Documented model-specific continuations are labeled as such. No page dates an amp from its serial number.
2. Existing fact item VG-0052 says tube-chart date stamps continued to about 1967. Joe's live decoder and this brief say about 1970. The new copy follows the brief and decoder; the old fact item is not silently changed.
3. The price book's Twin technical introduction conflicts with Fender's account of early output. Technical specifications use the factory/technical sources, including the original 5C8, 5E8-A and 5F8-A drawings. The book supplies price rows only.
4. Fender dates the Twin Reverb master volume to 1972, while the book's corresponding price group begins in 1973. Both are preserved. The page requests individual appraisal for a 1972 master-volume example.
5. Secondary descriptions disagree about brown Twin production versus prototype status. Fender's own history governs the model discussion; the source ledger retains the provenance.
6. The photographed 1966 Princeton Reverb chart prints AA764 and carries a PE date stamp. The AA1164 factory schematic is a separate reference. The page reports the actual printing and does not relabel the photograph to match a schematic.
7. Original 5E3 literature varies around 12 to 15 watts. Copy uses that qualified range rather than an exact measurement for every example. Vintage comparison weights are explicitly documented individual examples, not modern reissue specifications or guarantees.
8. No existing live amp price chart overlaps these new rows. No guitar refinish percentage or Joe sale price is used. The book's overlapping 1974 Princeton Reverb groups are disclosed beside the table rather than combined into an invented single estimate.

All technical sources and reissue tells are recorded in [sources.json](sources.json). Canonical company writing databases remain unavailable as disclosed in the approved earlier batch; QA_GATE 17 remains an explicit editorial exception for owner resolution. This preview does not claim that missing database approval was obtained. No first-person anecdote, unverified sale result or new expert answer is invented.

## Price Coverage And PR 2

The [value check](value-chart-check.json) records every published row and omission. Private baselines and once-generated reductions are retained locally in `work/amp-guides-1/value-baselines.json` and `value-adjustments.json`, outside the checkout.

- Returning black-panel Twin Reverb 1980 to 1982 and Deluxe/Princeton Reverb 1980 to 1981 groups cross the scope boundary and are omitted rather than split.
- No isolated 1980 non-reverb Princeton, 1967 silverface Twin Reverb or 1963 blackface non-reverb Deluxe price row was inferred.
- A 1972 master-volume Twin Reverb has no exact corresponding book group starting that year.
- Reissues and post-1980 redesigns have no values on these pages.
- Joe explicitly directed Vibrolux and Super Reverb comparison values to PR 2. Their sourced specs appear now, with no model links and no fabricated ranges. PR 2 will add their ranges and links as well as links to the four new pairs from both articles.

## Photo Search And Gaps

[Photo sources](photo-sources.json) records 27 original files, Drive IDs, original dimensions, checksums and image-read code evidence. All 27 retain original bytes. The smaller 1966 Twin Reverb files are the largest located originals after duplicate checks. No image was generated, recropped to hide evidence or presented as an original-vintage reissue.

Readable codes include MC on the 1963 Twin chart, ML on the 1963 Princeton chart, PE and printed AA764 on the 1966 Princeton Reverb chart, and 125C1A / 606248 on the Twin choke. The 1957 Deluxe's printed 5E3 is readable; its date stamp is not assigned a reading. Archive captions identify year/model and do not certify every component as original.

The Drive search covered accessible folders, both requested libraries, archive inventory CSVs and source backup folders. [Search inventory](drive-searches.json) includes the pink 1960 Super. The only listed in-stock model for which no matching photo set was located is the **1963 Fender Concert**. Photo sets were located for 1962 Super, 1963 Princeton, 1964 Vibrolux, blackface Super Reverb and 1959 Vibrasonic. The located Super Reverb folder does not establish an exact stock year by itself.

## Design Comparison

Representative value and identification pages use the J-200 design reference at the requested widths. Value pages have a photo band; identification pages have a Photo Timeline archive.

| Width | Twin value | Deluxe identification | J-200 reference |
|---|---|---|---|
| 1280 | [Hero](screenshots/fender-twin-reverb-value-guide-1280-hero.png), [facts](screenshots/fender-twin-reverb-value-guide-1280-glance.png), [dark band](screenshots/fender-twin-reverb-value-guide-1280-dark.png), [chart](screenshots/fender-twin-reverb-value-guide-1280-table.png), [photo band](screenshots/fender-twin-reverb-value-guide-1280-archive.png) | [Hero](screenshots/fender-deluxe-reverb-authentication-guide-1280-hero.png), [facts](screenshots/fender-deluxe-reverb-authentication-guide-1280-glance.png), [dark band](screenshots/fender-deluxe-reverb-authentication-guide-1280-dark.png), [checklist](screenshots/fender-deluxe-reverb-authentication-guide-1280-table.png), [archive](screenshots/fender-deluxe-reverb-authentication-guide-1280-archive.png) | [Hero](screenshots/gibson-j200-model-history-authentication-guide-1280-hero.png), [facts](screenshots/gibson-j200-model-history-authentication-guide-1280-glance.png), [dark band](screenshots/gibson-j200-model-history-authentication-guide-1280-dark.png), [table](screenshots/gibson-j200-model-history-authentication-guide-1280-table.png), [archive](screenshots/gibson-j200-model-history-authentication-guide-1280-archive.png) |
| 375 | [Hero](screenshots/fender-twin-reverb-value-guide-375-hero.png), [facts](screenshots/fender-twin-reverb-value-guide-375-glance.png), [dark band](screenshots/fender-twin-reverb-value-guide-375-dark.png), [chart](screenshots/fender-twin-reverb-value-guide-375-table.png), [photo band](screenshots/fender-twin-reverb-value-guide-375-archive.png) | [Hero](screenshots/fender-deluxe-reverb-authentication-guide-375-hero.png), [facts](screenshots/fender-deluxe-reverb-authentication-guide-375-glance.png), [dark band](screenshots/fender-deluxe-reverb-authentication-guide-375-dark.png), [checklist](screenshots/fender-deluxe-reverb-authentication-guide-375-table.png), [archive](screenshots/fender-deluxe-reverb-authentication-guide-375-archive.png) | [Hero](screenshots/gibson-j200-model-history-authentication-guide-375-hero.png), [facts](screenshots/gibson-j200-model-history-authentication-guide-375-glance.png), [dark band](screenshots/gibson-j200-model-history-authentication-guide-375-dark.png), [table](screenshots/gibson-j200-model-history-authentication-guide-375-table.png), [archive](screenshots/gibson-j200-model-history-authentication-guide-375-archive.png) |

## Reproduction Notes

`pnpm install --frozen-lockfile` succeeded. `npm ci` cannot consume the existing mismatched npm lockfile; no dependency or lockfile change is included. Build/check/copy/license commands use pnpm and the repository's own scripts. Supplemental audit helpers and baseline snapshots remain in the task work directory. New routes have no previous live originals; deployment-to-build comparison is performed after the Cloudflare preview is available.
