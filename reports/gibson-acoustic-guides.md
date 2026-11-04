# Gibson acoustic model guides — preview only

Joe requested separate value and authentication pages for Dove, Southern Jumbo, Country Western, L-00 and L-0 on October 29, 2026, followed by links from the acoustic hub. His prior instruction was to keep the work as a preview. This PR is not authorization to merge or publish.

## Implementation decisions

- Seven guide pages use a shared reference layout built from the established value-guide presentation. No global layout, navigation or theme changes. Four former L-0/L-00 routes redirect to one combined page, with both static-preview redirects and explicit Cloudflare 301 rules.
- The acoustic hub has eight model cards. Each main card opens its value guide; a separate native link opens authentication. There are no nested links. L-0 and L-00 now share one card and one guide containing values and authentication. The Hummingbird keeps its existing combined guide.
- Existing model prices are preserved. Five new sample rows in the hub match the new model tables exactly.
- Preview builds are noindex. Production indexing follows the Cloudflare main-branch environment.
- Joe supplied four Country Western photographs from Downloads after reviewing the initial preview. Both Country Western pages now use the 1957 slope-shoulder guitar as their hero and show the transitional example, square-shoulder example and interior label in the article. These replace the Southern Jumbo comparison image. No pricing rows were changed.
- Joe then supplied six Dove photographs from Downloads and specified Reverb listing 97238588. Both Dove pages use the listed natural 1968 guitar as their hero and all six supplied photographs in the article. These replace the earlier 1976 Ebony example. Captions distinguish the archive details from the listed guitar, and the listing's disclosed modifications are explained. The loose saddle assemblies use a responsive presentation crop to make their details readable. No pricing rows were changed.
- Joe corrected the 1961 Hummingbird: originally adjustable, subsequently fitted with a fixed wooden saddle. The figure caption, alt text, later example summary and bridge-identification checklist now agree; the speculative factory-transition explanation is removed.
- Joe requested deeper SJ authentication with listing 81589697 and the existing refinished comparison. The revised guide covers Banner/later logos, wartime maple-back exceptions, top woods, neck reinforcement, tuners, trim, bridge work, finish, FONs and later configurations. Five selected 1944 photos plus the two existing refinished 1946 photos illustrate authentication; the value page uses five of those images.
- Joe requested one L-0/L-00 page and clarified the later black L-0 versus sunburst L-00 distinction. One guide now explains the reused L-0 name, retains the early all-mahogany example, and uses the supplied sunburst 47416984 and black 91349493 listings. Three overview photos were selected from the black listing, with no crack close-ups. The four previous guides redirect to the new page or its authentication section. Both source price tables and all fixed discounts are preserved.

## Price provenance

Source: *The Official Vintage Guitar Magazine Price Guide 2026*, digital edition inspected in Joe's existing guide subscription. Printed pages 147 (Dove), 169 (L-0/L-00), and 201–202 (SJ/SJN and Deluxe). Book scans remain outside the repository.

`gibson-acoustic-price-calculations.json` records all 38 source rows, source page, the fixed randomly assigned integer discount from 11 through 15 percent, and both adjusted endpoints. Assignments were made once using Node crypto.randomInt and retained; rebuilds never re-roll them. Values are exact dollar results without marketing rounding. Both ends of a row receive the same percentage. Public pages explain that these are adjusted guide references rather than observed sale prices.

The L-00 retains one broad 1932–1946 source band. The L-0 production gap is preserved. Overlapping transition categories remain explicit; no independent annual price trend was invented. SJ and SJN 1962 body categories are selected by configuration, with the 1962–1963 chronology uncertainty explained. The early natural SJ category is distinguished from the named Country Western entry.

## Photo provenance and condition

All twenty-six assets are local under `src/assets/acoustic-models/`. Joe's established license helper emits metadata against the actual optimized image URLs.

| Local assets | Source | Caption limitations |
| --- | --- | --- |
| 1968-dove-reverb-97238588-front.jpg | https://reverb.com/item/97238588-gibson-dove-1968-natural | Joe's specified listing, shop `joesvintageguitars`, ID 159880. API state was live when inspected, so this is not called a completed sale. Fixed-saddle conversion, replacement nut and reproduction guard, passive endpin pickup and a small headstock-side crack are disclosed. Asking price is not used in the table. |
| dove-natural-archive-front.jpg | Joe's Downloads: `1965-gibson-dove-natural.JPG` | Full natural-finish example; filename year is not used to authenticate the guitar or identify other photos as the same instrument. |
| dove-waffleback-tuners.jpg | Joe's Downloads: `gibson-dove-waffleback-tuners.JPG` | Visible waffleback housings; no legible serial number or blanket originality claim. |
| dove-tune-o-matic-front/back.jpg | Joe's Downloads: `gibson-dove-tune-o-matic-front.JPG` and `gibson-dove-tune-o-matic-back.JPG` | Detached saddle assembly, front and reverse; Gibson/patent markings are not presented as a guitar serial number or build date. |
| dove-label-serial-845019.jpeg | Joe's Downloads: `gibson-dove-label-serial-845019.jpeg` | Orange label in a red-topped example; captions explicitly do not transfer this number to the natural 1968 listing. |
| dove-maple-back.jpeg | Joe's Downloads: `1965 -gibson-dove-maple-back.jpeg` | Figured maple under red finish. Exact year and shared instrument identity are not asserted from filenames alone. |
| 1920s-l-0-front/headstock.jpg | https://reverb.com/item/80791235-gibson-l-0-1920s-flattop | Verified sold by the same shop. Joe confirmed the early all-mahogany model. Broad decade date; substantial crack repairs, refret and replacement case disclosed. |
| 1930s-l-family-sunburst-front/back/headstock-back.jpg | https://reverb.com/item/47416984-gibson-l-00-1930s-sunburst | API state sold, shop joesvintageguitars; photos 1, 2 and 4. Joe confirmed the sunburst L-00 designation. Original finish/major parts are described alongside repairs, saddle shims and an added top hole. The uncertain factory mark is not assigned an exact year. |
| 1930s-l-0-black-front/back/headstock.jpg | https://reverb.com/item/91349493-gibson-l-0-1930s-black | API state ended, not asserted sold; same shop. Photos 1, 3 and 5 only: body front, body back, headstock front. No crack close-ups. Original finish/parts, repaired top cracks and bridge reglue are disclosed. The supplied historical 1939 description is not treated as a date for this guitar. |
| 1944-southern-jumbo-banner-front/banner-headstock/inlays/replacement-bridge/back.jpg | https://reverb.com/item/81589697-gibson-southern-jumbo-1944-sunburst-banner | API state ended, not asserted sold; same shop. Photos 1, 5, 6, 7 and 9. Original finish, guard and tuners, replacement bridge, repaired back cracks, filled headstock holes and replacement case disclosed. No claim that this particular guitar has a maple back. |
| 1946-southern-jumbo-front/detail.jpg | Drive folder `1TGUU_EXti111-inslGzTBCCEc6_BvCKR`, files `1D_zWilXj8rBVVd8heDr_5CEV8F3WL-HW` and `1bdHoxs9NcfJwN8dy4ok77I1b0JkrFfyJ` | Refinish and non-original painted guard confirmed by https://reverb.com/item/98162860-gibson-southern-jumbo-1946-natural . That listing was live at research time, so it is never called completed. |
| gibson-slope-shoulder-country-western-1957.jpg | Joe's Downloads, explicitly supplied October 29 | The supplied filename identifies 1957. Captions discuss visible shape and trim without asserting complete originality or condition. |
| transitional-country-western-slope-shoulder-western-pickguard.jpeg | Joe's Downloads, explicitly supplied October 29 | Slope shoulders, pointed guard and adjustable saddle are visible. No exact year assigned. |
| square-shoulder-gibson-country-western.jpg | Joe's Downloads, explicitly supplied October 29 | Square-shoulder configuration illustrated; no exact year or originality claim assigned. |
| country-western-label.jpg | Joe's Downloads, explicitly supplied October 29 | Visible Country Western Model label. Captions explain its limits as dating and condition evidence. |

Reverb `state=sold` did not filter results. Completed status was verified using `show_only_sold=true`, then individual listing metadata. No realized sale price was inferred from a listing's displayed price.

## Authentication references

The articles link sources where specific historical claims are made: Gibson's acoustic anniversary history and L-00 brand history; period 1960 and 1966 Gibson catalogs; GuitarHQ's examined SJ, flat-top and L-family references; Folkway's examined 1954 SJ Natural; and Vintage Guitar's examination of the 1933 L-00. Source disagreements are retained as uncertainty rather than silently harmonized. Generic inspection guidance is distinguished from a remote authentication of any particular instrument.

The former 1938 black L-00 photos and the generic 1930s Drive L-00 photo were replaced by Joe's specifically selected listings. The early L-0 bridge close-up was removed from the combined presentation; the full early model and its headstock remain.

## Validation

- Build: 372 pages generated including four redirect pages. Astro check: zero errors, zero warnings, 90 pre-existing hints. Copy gate: zero hard failures and 753 report-only warnings after matching the site's range-punctuation convention.
- All seven rendered guides passed route, single-H1, canonical, preview-noindex, local-link/fragment, unique-main-ID, image-file/dimension, matching image-license URL and visible-FAQ/schema checks. All 38 rendered price rows agree with the retained calculation ledger. All seven guide routes appear in the eight-card hub. The four former L-family URLs have correct local meta redirects and hosted 301 rules. Rendered Hummingbird checks confirm the fixed wooden saddle correction in both passages.
- Live-diff audits of the hub and Hummingbird: zero must-fix items and no broken assets. The hub has two expected warnings: new model headings and existing shared Reverb icons lacking dimensions. Hummingbird has the same existing icon-dimension warning; heading and structured-data inventories match live.
- Browser review at 1440px and 390px: two-column/one-column card layouts, no document overflow, authentication links over 44px tall, working card-to-value and value-to-authentication navigation, readable Southern Jumbo price table and working mobile section navigation. The Country Western photo update also passed a new build, copy gate and all ten-page rendered checks; both Country Western pages now contain four licensed, local optimized photos. Desktop/mobile inspection confirmed sizing, portrait orientation and label readability. The price-ledger SHA-256 is unchanged: `D9AC438CAEA8DACEC1D6B9F75D9D9B7F4623625D026CE2970229A73FB59126F1`.
- New routes have no existing live originals for parity comparison. Hosted checks are tracked by the draft PR; no merge or production deployment was requested.
- Dove listing/photo update: a new 371-page build and copy gate passed (zero hard failures, 754 existing warnings). All ten rendered-page checks passed again; both Dove pages now contain seven local optimized images with matching license metadata. Browser review confirmed loaded photos, readable hardware crops, working value-to-authentication navigation and no document overflow at 1440px/390px. The price-ledger SHA-256 remains unchanged.
- Final SJ/L-family review: the combined hub card opens the correct page; the former L-0 authentication route redirects to its authentication section. Desktop and 390px mobile checks confirmed no document overflow, readable value tables and checklist spacing, the Banner detail, all seven SJ images loaded, and the retained refinished comparison. Final live-diff reports are `acoustic-hub-l-family-final-audit-2026-10-30T00-33-32-313Z.md` and `hummingbird-saddle-final-audit-2026-10-30T00-33-31-585Z.md`.
