# Guild Baseline Independent Review

Reviewed 2026-10-15 against production baseline `7866204`. This is a read-only baseline review of the page, table data, widget markup and decoder, not approval of the future remodel. No application source was changed.

## Must Correct During the Remodel

1. **P1: The decoder produces impossible dates.** In `public/scripts/gsl-tool.js:60`, the calendar is fixed to a non-leap year, accepts day 366 every year, and continues with a successful result when the day conversion returns null. Reproduced by executing the unchanged baseline script in a Node VM:

   | Input | Baseline result | Required behavior |
   | --- | --- | --- |
   | `TI366001` | December 32, 2005 | Reject day 366 in a non-leap year |
   | `TL060001` | March 1, 2008 | February 29, 2008 |
   | `TL061001` | March 2, 2008 | March 1, 2008 |
   | `TL366001` | December 32, 2008 | Calendar date is December 31; validate plant chronology separately |
   | `TI000001`, `TI999001` | Successful Tacoma/2005/unit result with no date | Reject invalid day fields |
   | `NI001001` | New Hartford, January 1, 2005 | Incompatible with documented plant chronology |

   `TN001001` also returns Tacoma in 2010; `NZ001001` estimates New Hartford in 2022. The code extrapolates year letters through Z without checking the factory window. Keep documented decoding separate from unsupported extrapolation. Full outputs, including two valid controls, are in `baseline-decoder-evidence.json` (15 cases). These are logic checks, not browser interaction tests.

2. **P1: The existing data are not a faithful manufacturer transcription.** Rebuild the tables from the official rows rather than carrying forward merged rows and guessed values. Confirmed examples in `src/data/guild-serial-data.ts`:

   - `generalRanges` and the decoder invent explicit starting values for 1965 through 1969. The manufacturer prints uncertainty markers and points to the model-specific chart. Baseline `46607` nevertheless returns an exact 1966 year.
   - Lines 43-44 duplicate the D25 and D35 1968 ranges into 1965. Line 68 moves the M20 3/4 partial AH entry from 1965 into 1967.
   - `transition1990` adds a 1994 column to a source table whose actual columns end at 1993. Some added values come from the following chart, but merged model labels obscure which model each value belongs to. Preserve 1994 as its own last-number column in the following table.
   - Lines 388-393 reverse 1990 and 1991 for PILOT/SB602 and SB605, STARFIRE/SF4, and X500. SONGBIRD repeats its 1991 value in 1990.
   - Line 384 shifts JF100 entries one year earlier and introduces `JF100021`. The combined F25E/F4 label adds JF4 while losing its separate CG-prefix record. The combined D40/D40C row assigns D40's 1992 endpoint to D40C even though the latter source cell is N/A. These are substantive dating errors, not formatting differences.

   Reference: [Guild's manufacturer tables](https://guildguitars.com/guild-support/history-of-my-guild/). Evidence snapshots: `guild-official-history.html` and `guild-official-tables.json`. The JSON contains nine tables in source order, with whitespace normalized only. Source tables themselves contain anomalies; copying them faithfully does not make every number certain.

3. **P2: Prefix recognition accepts incomplete or incompatible formats.** `gsl-tool.js:145` lacks an end anchor: `AB123garbage` is classified as a model-prefix serial. `C123456` is routed only to the vintage prefix charts, despite Corona being a relevant alternative. The result also says the digits give the year, although these are model sequence records. Validate the whole string, request model/country context where needed, and offer an honest unmatched result. Do not make every C-prefix a Corona result: older C-prefixed model records also exist.

4. **P2: The page promises broader coverage than its data provide.** Page metadata, FAQ 1, widget copy and the Part 8 heading imply universal 1952-to-present coverage or universal modern Julian numbering. Part 7 says 1997 to 1999 while its table is 1997 only. Retain the old anchors but correct the visible scope. Add distinct Corona, Tacoma, New Hartford, Oxnard and import guidance; unidentified modern formats should go to Guild support with model and label photos, not an invented generic date rule.

5. **P2: Authentication and captions need narrower claims.** The X500 caption asserts a rare factory Bigsby and strong collector demand without evidence visible in the page source. Describe the visible hardware unless documented provenance establishes factory installation. Label colors, finish checking, binding shrinkage and pot dates are corroborating evidence, not proof of year or originality. The instruction that label and headstock serials must always match should be framed as an inspection check, with model/era exceptions investigated. Pot codes date the component and may be older than assembly or replacements. Avoid blanket value rankings by factory era.

## Uncertainty to Preserve

- Pre-1960 approximate records and shared boundary values must remain approximate. Do not silently turn them into exact disjoint intervals.
- Keep the 1965-1969 model chart and reused prefixes. For example, AI can match different models and years; matching a prefix alone is insufficient.
- Preserve the 1979 cutoff at September 30, separate from later model-prefix data.
- For 1979-1993, distinguish annual last-number records from complete production ranges. Missing cells do not authorize interpolation. Keep the 1987-era prefix changes, resets, repeated endpoints and question marks visible; do not sort them into one increasing sequence.
- For 1994, retain endpoint-only semantics. For 1995-1996 and 1997, retain source overlaps and unusual strings with explanatory uncertainty. Do not manufacture missing 1998-2004 charts.

These interpretation rules follow the [manufacturer's chart notes](https://guildguitars.com/guild-support/history-of-my-guild/) and [FAQ warning about gaps and dating errors](https://guildguitars.com/guild-support/faq/).

## Legacy Retention Inventory

Keep `/guild-serial-number-lookup/` and all nine meaningful section anchors on substantive hub summaries with useful links to the expanded material:

| Anchor | Existing purpose |
| --- | --- |
| `#part1` | Early eras; numeric and 1965-1969 model charts |
| `#part2` | 1970-September 1979 sequential chart |
| `#part3` | 1979-1983 model endpoints |
| `#part4` | 1984-1989 model endpoints |
| `#part5` | 1990s transition; correct scope to 1990-1993 |
| `#part6` | 1994-1996 records |
| `#part7` | Late Westerly; explicitly 1997 data |
| `#part8` | Julian decoding and physical authentication |
| `#guild-faq` | Original FAQ section |

There are no individual FAQ IDs in the baseline. Retain these five questions, with corrected and expanded answers:

1. How do I read a Guild serial number?
2. Where is the serial number on a Guild guitar?
3. How do I date a Guild without a serial number?
4. What is a Westerly Guild?
5. How much is my vintage Guild worth?

The widget uses `gsl-input`, `gsl-decode`, `gsl-result` and global `gslDecode`; the mobile navigation uses `jvgNavBtn`, `jvgNavPanel` and its handlers. These are implementation contracts rather than substantive section anchors. Preserve behavior or update markup and handlers together. The original Back to Decoder link targets page top, not a dedicated decoder anchor. Retain Enter submission, example buttons, result announcements, contact/appraisal paths, source links, and access to the full tables.

## Factory and Modern-Series Source Notes

- [Guild FAQ](https://guildguitars.com/guild-support/faq/) supplies New York beginnings, the late-2001 Corona move, near-complete Westerly kits finished there, C-leading Corona prefixes, and the later Tacoma move. It identifies USA production in Oxnard, Westerly Collection production in China, and Newark St. production in South Korea, Indonesia or China depending on model. These are distinct manufacturing lines, not one modern serial system. Some other FAQ text is visibly old; avoid treating all of it as current policy.
- [Guild's 2015 Westerly Collection announcement](https://guildguitars.com/introducing-the-westerly-collection/) explicitly dates the Westerly relocation to 1967 and identifies the new collection as a tribute. The company replies identify China manufacture. This is usable first-party text; do not confuse the modern collection with Rhode Island production.
- [Guild's current parent company history](https://yamahaguitargroup.com/company/) confirms the 2014 acquisition. Acquisition is not a guitar's production date.
- The [Guild-hosted June 2016 factory report](https://guildguitars.com/wp-content/uploads/2016/05/AG282_guild.pdf), printed page 30, gives a primary eyewitness account of the January 19, 2016 Oxnard relaunch and operating M-20/D-20 production. Its historical background is secondary; the eyewitness portion supports the relaunch, not every date in the article. Separate acquisition, factory construction and commercial production milestones.
- [Guild's current factory article](https://guildguitars.com/blog/2307) confirms present California manufacturing but provides no universal serial algorithm.

The exact 1956 Hoboken date and 1966 ownership/1967 production distinction were not independently resolved from a surviving first-party chronology in this pass. The former History and Heritage page is unavailable, and the referenced 2007 manufacturer's manual could not be fetched. Do not cite redirected product pages or search snippets as if their historical text remains on the destination. Use supported wording or obtain the original manufacturer chronology before asserting an exact transition boundary. Likewise, do not turn the 2015 construction/2016 relaunch distinction into a single unsupported exact serial cutoff.

## Scope and Evidence Limits

Reviewed the three requested source files, imported widget markup, source navigation/FAQs, nine official tables and targeted manufacturer support/history references. Executed 15 baseline decoder cases. Found five actionable defect groups above. The original reference Markdown inherits the same old site material, so it is not an independent factual authority. No source edits, deployment, broad browser sweep, visual parity judgment, external review API or contact with others was performed. Final responsive, link, keyboard and metadata review remains for the completed implementation.
