# Independent audit — Guild pickup and hardware expansion

Reviewed October 15, 2026. Read-only application review; no application files changed by this auditor.

## Must fix

None remaining in the reviewed version.

## Coverage limits

- Playwright MCP and a separate-model visual service were unavailable. The explicitly authorized installed Playwright/Chrome fallback supplied screenshots, ancestor/pseudo-element geometry, eager-media checks, keyboard probes, anchors and Axe checks. No claim of cross-model review is made. The parent can use the four baseline/local top screenshots listed below if a separate-model pass becomes available.
- Photo identifications establish visible part families, not winding measurements, underside markings, factory originality or exact instrument dates. Published model chronologies retain their approximate qualification.

## Factual and caption review

| Photo | Finding and evidence |
| --- | --- |
| `early-x-pickups.jpg` | The broad white covers, mounting ears and central adjustable screw row support **Franz single coils**. Compare the firsthand [1955 X-175](https://www.ggjaguar.com/x-175.htm), [1957 X-50](https://www.ggjaguar.com/x-50.htm) and [1961 X-150](https://www.ggjaguar.com/x-150.htm). The [inspected 1959 M-75](https://retrofret.com/products/guild-m-75-aristocrat-thinline-hollow-body-electric-guitar-1959-9582) supports the added Aristocrat model association. |
| `later-x-pickups.jpg` | **Compact Guild Anti-Hum humbuckers** is supported by the small embossed covers and single central height screw at the visible ring end. The [1966 Guild catalog](https://acousticmusic.org/wp-content/uploads/2016/02/Guild-1966-Catalog.pdf), PDF page 4, names and illustrates that family. The larger pickup in the [1978 catalog](https://www.gad.net/Blog/wp-content/uploads/2010/07/Guild-1978-Electric-Catalog.pdf), pages E-5/E-11, instead shows three-point tilt adjustment. The revised caption appropriately avoids calling the photographed originals modern LB-1s or proving originality. |
| `thunder-controls.jpg` | Narrow white **Guild “Mickey Mouse” single coils**, distinct from Franz and Anti-Hum, are visible with the separate vibrato and bridge. [Component research](https://www.musicpickups.com/non-dearmond-products/) disputes the common DeArmond attribution; leaving the maker unspecified is appropriate. [Retrofret’s inspected 1964 S-200](https://retrofret.com/products/guild-s-200-thunderbird-solid-body-electric-guitar-1964-9122) documents the Hagstrom Tremar and Adjusto-Matic arrangement, while its earlier pickups differ from this photo. The 1966 catalog also names the adjustable bridge but still illustrates an Anti-Hum S-200; that catalog is not a reliable universal pickup-change cutoff. |
| `x500-tuners.jpg` | The engraved rectangular covers, two-screw plates and pearloid buttons support the **Kolb pattern**, consistent with the firsthand [1960 X-500](https://archive.12fret.com/instruments/guild-x-500-archtop-electric-sunburst-1960/) and [1966 X-175](https://retrofret.com/products/guild-x-175-arch-top-hollow-body-electric-guitar-1966-7583). The new Kolb row and qualified photo caption are appropriate. The photo alone does not prove plating composition or untouched installation. |
| `starfire-front.jpg` | The white faces, metal surrounds, large pole pieces and separate adjustment screws support **DeArmond Dynasonic / 2000-family single coils**. Its Guild-logo Bigsby and aluminum bridge match the general arrangement documented on the firsthand [1961](https://www.ggjaguar.com/sf-3.htm) and [1962 Starfire III](https://www.ggjaguar.com/62sf-3.htm). This does not establish an exact year or original finish. |

The 8 pickup rows, 7 tuner rows and 6 bridge/tailpiece rows were compared with their linked instrument inspections and catalogs. The modern HB-1/HB-2/Aerosonic and acoustic electronics distinctions agree with Guild’s current [Polara](https://guildguitars.com/polara/kim-thayil/), [Surfliner Deluxe](https://guildguitars.com/surfliner/surfliner-deluxe/) and [M-240E](https://guildguitars.com/westerly/200-series/m-240e/) specifications. The Hot-Dot description agrees with the original [1976 acoustic catalog](https://acousticmusic.org/wp-content/uploads/2016/02/Guild-1976-Catalog.pdf), page A-19, including bridge installation, endpin output and external preamp.

Two draft issues were reported and verified resolved: the exact 1962/LB-1 citation led to a discontinued-model stub, so the text now cites the 1966 Anti-Hum catalog instead; the narrow-single row now explains that “frequency tested” was marketing wording rather than a dependable model name. The 1960 catalog applies that wording to several earlier pickups.

## Browser and static verification

Compared the pre-expansion [hosted guide](https://joe-guild-dating-hub.joes-vintage-guitars.pages.dev/guild-pickup-and-hardware-dating-guide/) with `http://127.0.0.1:4345/guild-pickup-and-hardware-dating-guide/` at **1920×1080 and 390×844**. Eager loading was applied before counting or capturing media. Ancestor geometry and both pseudo-elements were recorded before layout assessment.

- Four baseline/local viewport combinations: no horizontal page overflow, failed image or duplicate ID; 17 images remain on each version.
- Local Axe: **0 violations at both widths**; no JavaScript page errors.
- All 8 article section links resolve and land at approximately 24px from the viewport top; images remain loaded after jumps.
- All 3 comparison tables have distinct region names and keyboard focus; ArrowRight moved each phone table by 40px. Desktop columns fit their 834px content area; mobile overflow stays within each table region.
- All **12 enlargement URLs return 200 with image content**. Paired photos remain readable and separately enlargeable on phones.
- Existing contact form and detail/input inventory remain present; no form was submitted. No decoder code changed or was retested for this prose expansion.

The [static report](../guild-hardware-expansion-audit-2026-10-15T22-18-17-633Z.md) has **0 must-fix items and 6 advisory categories**. New headings/sections and changed title/description are the requested expansion. The two Reverb icon dimension notices concern unchanged shared icons, and the trailing-slash notices are Astro development image endpoints, not article navigation defects. Existing section structure, figure grouping and JSON-LD types remain intact.

## Local evidence

- `hardware-agent-evidence/review.json`: browser results, ancestor geometry, anchor checks and accessibility results.
- `hardware-agent-evidence/enlarge-links.json`: 12 enlargement HTTP/content-type checks.
- `hardware-agent-evidence/baseline-1920-top.png`, `local-1920-top.png`, `baseline-390-top.png`, `local-390-top.png`: baseline/local pairs.
- `hardware-agent-evidence/1920-guild-{pickup,tuner,bridge}-chart-full-left.png`: all table rows at desktop width.
- `hardware-agent-evidence/390-guild-{pickup,tuner,bridge}-chart-full-{left,right}.png`: phone table columns before/after horizontal scrolling.
- Other files in that directory show section views and individual photo/caption crops. Tall element captures include the fixed contact bar at the screenshot viewport position; this is not a bar embedded in the table or a permanently hidden row.
- Original catalog snapshots and rendered pages: workspace `work/guild-hardware-research/agent-guild-1960.pdf`, `agent-guild-1966.pdf`, `agent-1960-02.png`, `agent-1960-03.png`, `agent-1966-4.png`, plus parent-provided 1976/1978 catalog renders.

Disposition: the focused expansion is acceptable within the verification scope above; no remaining actionable factual, accessibility or visual defect was found.

## Final targeted follow-up

Rechecked the retained introductory/caption sentences and corrected cross-page link after the final edits. All four revised photo captions were visually inspected at 390px and 1920px; they wrap cleanly, remain fully visible, have no text clamping or horizontal overflow, and fit above the fixed contact bar when brought into view. The archtop-identification link now navigates to `/guild-electric-guitar-identification/#body-and-model`; the target exists exactly once and lands approximately 24px below the viewport top at both widths. All three table hints compute to the existing brown color, `rgb(62, 42, 20)`.

Evidence: `hardware-agent-evidence/final-caption-check.json` and the eight `final-{390,1920}-{franz,antihum,thunder,kolb}-caption.png` crops. No new finding; final disposition remains acceptable.
