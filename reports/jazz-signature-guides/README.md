# Gibson Jazz Signature Guides

Ten new posts on `joe/gibson-jazz-signature-guides`: an authentication guide and a value guide each for the Gibson Barney Kessel, Howard Roberts, Johnny Smith, Tal Farlow and Trini Lopez. They use the shared model-guide kit (`src/data/model-guides/gibson-*.ts`), plain section numbers, and Free Appraisal plus Sell My Gibson under every H1.

## Values

- Source: The Official Vintage Guitar Price Guide 2026, read from Joe's flipbook copy on 2026-11-18 (pages 86, 145, 163, 168, 205 and 206). Every row was cross-checked against the flipbook's own search text. Transcription: `Claude Session 1\vg-price-guide-2026-transcriptions\pg-gibson-jazz-signatures.txt`.
- Rule: guide range minus one random 11 to 15 percent cut per row, nearest $50. Seeded draws and per-row results: `value-trail.json`. All 37 rows land inside 11 to 15 percent.
- Excluded: Epiphone Howard Roberts III (1987 to 1991 import), per Joe's Epiphone rule.
- No existing JVG page had prices for these models, so nothing is contradicted.

## Photos

35 originals in `src/assets/images/model-guides-jazz/`, full resolution, no downscaling. The three Tal Farlow phone photos had EXIF rotation applied.

| Model | Guitar | Source |
|---|---|---|
| Barney Kessel | 1967 | Drive `1967 gibson barney kessel` (Reverb 104120543) |
| Howard Roberts | 1974 Custom | Drive `1974 Gibson Howard Roberts` (Reverb 103818067) |
| Howard Roberts | 1977 | Reverb 64143977 (800px and 1600px listing images only) |
| Johnny Smith | 1970 | Drive `1970 Gibson Johnny Smith` (Reverb 93496622) |
| Tal Farlow | 1962 | Joe's Downloads folder (3 photos) |
| Trini Lopez | 1967 Standard | Drive `1967 Gibson Trini` (same guitar as `1960s gibson trini lopez` and Reverb 80167172) |

Joe is sending more Johnny Smith photos.

## For Joe

### Fact Conflicts

1. The cherry Trini Lopez on the Sell My Gibson page and the Phoenix Metro guide is captioned 1966. Joe's Reverb listing and Drive folder call it a 1967, and its serial (057336) falls in the range Joe's serial data lists for 1967. The new pages call it a 1967. The older captions are unchanged.
2. Joe's 1967 Kessel has Regular appointments (double-parallelogram inlays, crown peghead inlay, nickel hardware) with a truss rod cover marked Custom. The pages describe it that way and treat the cover as a likely replacement.
3. Joe's 1962 Tal Farlow: the ledger shows only 2 Tal Farlows shipped in 1962. The page explains that serial year and shipping year can differ.
4. Joe's 1970 Johnny Smith wears a Howard Roberts fingers-style tailpiece. Sources tie that tailpiece to the Howard Roberts Fusion. The original Johnny Smith tailpiece is the L-5CES style with Smith's name.
5. Joe's 1977 Howard Roberts has gold hardware, which matches the Artist. The Reverb listing calls it a Howard Roberts. The page says the gold hardware matches the Artist.
6. The price guide's Gibson Howard Roberts Custom row starts in 1975. Joe's labeled Custom is a 1974, and sources disagree on 1973 or 1974 for the first Customs.
7. Tal Farlow end date: the price guide says 1971, while the ledger figures stop at 1967. The pages show both.

### Independent Fact-Check (2026-11-18)

An independent reviewer checked all five files against published sources and found 9 issues. All 9 were fixed: the Kessel cutaway comparison with the Trini Standard, the Kessel lamination wording, the 1965 nut and plating change (now consistent on the Kessel and Trini pages), the Johnny Smith's split-block inlays, the Tal Farlow reissue serial formats, the Trini unbound-hole claim and the Tal Farlow bridge wording. The Epiphone Howard Roberts "listed as acoustic" and "natural in 1966 only" notes come from the 2026 price guide's own text, so they stay, credited to the guide.

### Price Gaps

- The price guide groups Johnny Smith single and double pickup, sunburst and natural, in one set of rows. Natural and two-pickup guitars go to appraisal.
- No Howard Roberts shipment figures exist in Joe's shipping data (it covers 1948 to 1979 and has no Howard Roberts category).
