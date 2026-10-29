# Gibson acoustic model guides — preview only

Joe requested separate value and authentication pages for Dove, Southern Jumbo, Country Western, L-00 and L-0 on October 29, 2026, followed by links from the acoustic hub. His prior instruction was to keep the work as a preview. This PR is not authorization to merge or publish.

## Implementation decisions

- Ten new root routes use a shared reference layout built from the established value-guide presentation. No global layout, navigation, theme or infrastructure changes.
- The acoustic hub has nine model cards. Each main card opens its value guide; a separate native link opens authentication. There are no nested links. The Hummingbird keeps its existing combined guide.
- Existing model prices are preserved. Five new sample rows in the hub match the new model tables exactly.
- Preview builds are noindex. Production indexing follows the Cloudflare main-branch environment.
- Country Western has a text hero and a clearly labeled comparison photograph of Joe's refinished 1946 SJ. No verified Country Western photograph was found in the connected Drive results or Joe's completed Reverb results. Joe was asked for a folder/listing link; this preview does not mislabel the comparison instrument.

## Price provenance

Source: *The Official Vintage Guitar Magazine Price Guide 2026*, digital edition inspected in Joe's existing guide subscription. Printed pages 147 (Dove), 169 (L-0/L-00), and 201–202 (SJ/SJN and Deluxe). Book scans remain outside the repository.

`gibson-acoustic-price-calculations.json` records all 38 source rows, source page, the fixed randomly assigned integer discount from 11 through 15 percent, and both adjusted endpoints. Assignments were made once using Node crypto.randomInt and retained; rebuilds never re-roll them. Values are exact dollar results without marketing rounding. Both ends of a row receive the same percentage. Public pages explain that these are adjusted guide references rather than observed sale prices.

The L-00 retains one broad 1932–1946 source band. The L-0 production gap is preserved. Overlapping transition categories remain explicit; no independent annual price trend was invented. SJ and SJN 1962 body categories are selected by configuration, with the 1962–1963 chronology uncertainty explained. The early natural SJ category is distinguished from the named Country Western entry.

## Photo provenance and condition

All eleven assets are local under `src/assets/acoustic-models/`. Joe's established license helper emits metadata against the actual optimized image URLs.

| Local assets | Source | Caption limitations |
| --- | --- | --- |
| 1976-dove-front/body/headstock.jpg | https://reverb.com/item/78866390-gibson-dove-1976-ebony | Verified sold, shop `joesvintageguitars`, ID 159880. Listing notes factory 2 stamp and small bridge-pin crack. The F-prefix color theory is not treated as an established fact. |
| 1920s-l-0-front/bridge/headstock.jpg | https://reverb.com/item/80791235-gibson-l-0-1920s-flattop | Verified sold by the same shop. Broad decade date; substantial crack repairs, refret and replacement case disclosed. |
| 1938-l-00-body/headstock.jpg | https://reverb.com/item/67254292-gibson-l-00-1938-black | Verified sold by the same shop. Listed as 1938, original black finish, repaired back/side cracks, neck reset, replacement case. |
| 1946-southern-jumbo-front/detail.jpg | Drive folder `1TGUU_EXti111-inslGzTBCCEc6_BvCKR`, files `1D_zWilXj8rBVVd8heDr_5CEV8F3WL-HW` and `1bdHoxs9NcfJwN8dy4ok77I1b0JkrFfyJ` | Refinish and non-original painted guard confirmed by https://reverb.com/item/98162860-gibson-southern-jumbo-1946-natural . That listing was live at research time, so it is never called completed. |
| 1930s-l-00-drive.jpg | Drive folder `1_xGAKjlLqW4xaScu-vRYy3V7hogrdBgv`, file `1l5Ymi22tiPOGSrE6kJBzL37xrhJAVfQk` | Folder supplies decade/model only. Not asserted to be the same guitar as the separately captioned 1938 Reverb specimen. |

Reverb `state=sold` did not filter results. Completed status was verified using `show_only_sold=true`, then individual listing metadata. No realized sale price was inferred from a listing's displayed price.

## Authentication references

The articles link sources where specific historical claims are made: Gibson's acoustic anniversary history and L-00 brand history; period 1960 and 1966 Gibson catalogs; GuitarHQ's examined SJ, flat-top and L-family references; Folkway's examined 1954 SJ Natural; and Vintage Guitar's examination of the 1933 L-00. Source disagreements are retained as uncertainty rather than silently harmonized. Generic inspection guidance is distinguished from a remote authentication of any particular instrument.

## Validation

- Build: 371 pages generated. Astro check: zero errors, zero warnings, 90 pre-existing hints. Copy gate: zero hard failures and 754 pre-existing report-only warnings after matching the site's range-punctuation convention.
- All ten rendered pages passed route, single-H1, canonical, preview-noindex, local-link/fragment, unique-main-ID, image-file/dimension, matching image-license URL and visible-FAQ/schema checks. All 38 rendered price rows agree with the retained calculation ledger. All ten routes appear in the nine-card hub.
- Live-diff audit of the hub: zero must-fix items, no broken assets. Two expected warnings: the new model headings and existing shared Reverb icons lacking dimensions. Existing heading IDs and price content remain intact.
- Browser review at 1440px and 390px: two-column/one-column card layouts, no document overflow, authentication links over 44px tall, working card-to-value and value-to-authentication navigation, readable Southern Jumbo price table, working mobile section navigation, and clear Country Western comparison captions.
- New routes have no existing live originals for parity comparison. Hosted checks are tracked by the draft PR; no merge or production deployment was requested.
