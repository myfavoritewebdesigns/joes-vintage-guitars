# Independent Serial Guide Review

Review date: November 10, 2026. Branch: `joe/gretsch-rickenbacker-serial-research-20261110`. This is an independent, read-only source, article and decoder review; only this report was written by the reviewer. Static, functional and available visual evidence has been reviewed, with the scope limits below.

## Must Fix

- No unresolved substantive factual or decoder issue was found in the reviewed versions of the two article hubs, their new coverage components and their decoder libraries after the corrections listed below.

## Should Fix / Review Limitations

- Playwright MCP is unavailable to this reviewer, so its full screenshot, lazy-media, interactive-widget and every-anchor workflow was not performed here; the implementing agent performed CUA checks and supplied the screenshots reviewed below, and this limitation does not mean the decoders were untested.
- Live 390- and 1920-pixel comparisons were not available because the live site refused iframe embedding and the browser viewport setting stayed at 1280; local responsive rendering was checked at real iframe layout widths, while the live visual reference is limited to 1280.
- Cross-model screenshot review was not run in this agent because the prescribed tools are unavailable; this is a remaining optional review layer, not a substantive factual or decoder defect.

## Acceptable / Informational

- Added sections, corrected date charts and new follow-up questions implement the user's explicit request for broader model coverage and matching tools; differences from the prior production copy are intentional.
- Existing URLs, fragment IDs, image assets and contextual guide links remain in the reviewed source, with the Frying Pan photograph moved to the applicable early-steel section.
- Both tools deliberately provide model/context guidance for undated or unverified formats rather than asserting a universal date rule.
- The source report distinguishes directly observed manufacturer-decoder output, contemporary registries, specialist photographs and individual dealer records; no individual instrument record should be generalized into an unsupported production-wide rule.
- The minor “Tennessean” spelling correction has been applied and rechecked.

## Static And Functional Evidence

Reviewed the generated [Rickenbacker static audit](rickenbacker-research-20261110-audit-2026-11-10T23-51-57-084Z.md) and [Gretsch static audit](gretsch-research-20261110-audit-2026-11-10T23-51-57-083Z.md), both targeting the local preview on port 4328.

Gretsch has no raw must-fix finding. Rickenbacker's raw must-fix finding is **“3 heading(s) on live but missing on local:”**, listing the following title changes with all original fragment IDs retained:

| Raw Live Heading | Reviewed Local Heading | Disposition |
| --- | --- | --- |
| 1997 To 1998: Month Letters M To Z (Skipping O And Q) | 1997 To 1998: Month Letters M To Y (Skipping O) | Intentional factual correction supported by contemporary chart and registry. |
| Era Guide: 1999 To Present (Year + Week) | Era Guide: Late 1998 To Present (Year + Week) | Intentional factual correction supported by documented late-1998 instruments. |
| Replacement Jackplates And Z Prefixes | Replacement Jackplates, XX And Z Prefixes | Intentional expansion matching the added XX discussion. |

These findings are resolved as authorized content changes, not removed sections or broken anchors. The extra headings and one extra section per page implement the requested model/exception coverage. Image counts remain 18 for Rickenbacker and 19 for Gretsch, with zero broken asset URLs in either report; JSON-LD type inventories, figure grouping counts and callout counts match production. Both reports flag the same two shared Reverb SVG icons without intrinsic dimensions; the implementing agent reports those unchanged from the existing source, and this work introduces no new image-dimension warning.

The implementing agent reports a successful 469-page build, 28 passing decoder test groups, an Astro check with zero errors and zero warnings (93 hints), and a copy audit with zero hard failures (804 existing warnings). This reviewer separately ran direct CLI probes of the historical and model-specific cases documented below.

The implementing agent's CUA checks verified eight serial outputs per brand, Rickenbacker bass-to-steel and headstock-sticker answers, and Gretsch headstock/Made-in-USA-to-paper-label answers with obsolete dependent answers cleared. Neither local page produced a JavaScript console error in that check. The official Fender record search encountered a CAPTCHA; it was not bypassed and no factory-date claim was derived from it. CYG/ISG results therefore remain manual, without an asserted exact year or month.

## Visual Evidence

Independently inspected these valid images in `reports/screenshots/`: `ric-local-390.png`, `ric-local-1920.png`, `gr-local-390.png`, `gr-local-1920.png`, `gr-models-390.png`, `gr-tool-390.png`, `ric-live-1280.png` and `gr-live-1280.png`. Files from the failed live-iframe attempt were excluded.

The implementing agent used local iframe layout widths of 390 and 1920 pixels (375 and 1905 client widths after the scrollbar) and scaled the wider frame for screenshot capture; these are responsive local layout checks, not claims of native 1920 screenshots or matched live/local viewport comparisons. The supplied captures show readable typography and form controls, a readable mobile Setzer result, and contained table content. The implementing agent additionally measured no horizontal document overflow on either local page, including the new model tables and the Gretsch result. The visible colors and typography remain consistent with the live 1280 reference; no decorative-wrapper or exact-layout-parity inference was made from screenshots alone.

The saved Gretsch model-table capture still contains the prior “Tennesseean” spelling, while the current source was independently rechecked as “Tennessean”; the implementing agent was notified to include that last copy correction in the final preview build. No new stylesheet or redesign is part of this change.

## Rickenbacker Review

The review found and the implementing agent corrected the following issues:

- The model-location table now distinguishes the 3000 neck plate from the 3001 jackplate and explains the retained neck-plate serials on both 200-series generations; [Andy White's photographed locator](https://www.rickenbacker101.com/p/overview-serial-number-locator-guide) supports these distinctions.
- Prewar fretted Spanish instruments now have a separate section and matching B/C-prefix guidance, supported by [manufacturer history](https://www.rickenbacker.com/legacy/) and [photographed B36 and C2733 instruments](https://vintagemartin.com/earlyelectric.html).
- Mismatched instrument answers no longer supply mandolin-specific text for a B-prefix number or turn an unknown C-prefix instrument directly into a steel.
- Model coverage now names the 380/381 and mandolin families in addition to student guitars, early Combos/Capris, basses, acoustics, private labels, reissues, exports and edition numbers.
- Week 53 and unverified late-1998 transition weeks are explained in the article and receive manual-confirmation tool results.

The corrected Q-inclusive 1997/1998 alphabet and late-1998 numeric dates are supported by [Rickbeat's contemporary chart](https://www.rickbeat.com/serial.htm) and the [March 2000 registry](https://www.rickresource.com/rrp/1990serial.html). The guide discloses disagreement with the current manufacturer's decoder. ZA through ZL remains the 1986 year/month series, and JK/JL retains the 1960/1970 ambiguity. Exact manufacturer-recognized early examples are narrowly bounded to V81, V111, 2LT125 and 2LV126; neighboring numbers are not assigned those dates.

Independent CLI probes confirmed Q18063 → April 1998, R01234 → May 1997, 9846122 → week 46 of 1998, ZA1234 → January 1986, JK1234 → November 1960 or 1970, 2LT125 → its documented 1958 exception, and 2LT127 → approximate Capri/F-series guidance.

## Gretsch Review

The review found and the implementing agent corrected the following issues:

- Revival model digits no longer automatically acquire a leading 6: [Ishibashi's 7593](https://intl.ishibashi.co.jp/products/12-2800005571516) has 905593-11 and [a second 7593](https://www.yeahmansguitars.com/products/1990-gretsch-7593-white-falcon) has 9012593-205, so their 593 group must not become 6593.
- Documented Brian Setzer letters are retained and recognized, including [025120SH-1224](https://www.bigfoot-guitars.de/portfolio-items/2002-gretsch-6120-sh-brian-setzer-hot-rod-model/) and [995120SS-1302](https://reverb.com/item/62794141-gretsch-made-in-japan-nashville-brian-setzer-signature-6120ssu-in-orange-stain-1999-gretsch-made-in-japan-nashville-brian-setzer-signature-6120ssu-in-orange-stain-1999-used).
- The different letter placement in [925400-CV37 on a G400CV](https://www.archtop.com/ac_92G400.html) receives specific manual guidance, preserving the CV letters after the separator.
- CYG/CYGC/ISG prefixes no longer inherit an unverified month formula from the older official two-letter chart; the cited dealer records establish those markings but do not independently establish month positions.
- The official history's unusual four-digit 1965/1966 serial exception is now present in both the vintage explanation and relevant tool guidance, alongside the reused 1957 labels; see [Gretsch's early serial history](https://blog.gretschguitars.com/2016/05/gretschtech-serial-numbers-1930s-1966/).

The [Blue Book serialization reference](https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf) supports the short 997 date-code example and revival examples 01319652 and 999121447. The standard modern factory table remains tied to [Gretsch's published explanation](https://blog.gretschguitars.com/2013/07/gretschtech-understanding-modern-gretsch-serial-numbers/); observed UC/IS examples remain qualified, while unfamiliar acoustic and extended marks retain suffixes and request confirmation.

Independent CLI probes confirmed the SH/SS examples' possible dates, both 7593 examples' preserved model digits, CV manual guidance, CYG21051950 and ISG220311489 without an asserted month, and IWA2503557WH with its full suffix retained in the input and manual guidance.

## Publication Status

This report reviews the isolated branch only and does not authorize or record publication. Production approval remains the user's decision after a concrete preview.
