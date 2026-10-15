# Production Visual Audit

Reviewed 2026-10-15 against the five saved approved preview builds and the 2026-10-15 decision row in CLAUDE.md. Production integration: http://127.0.0.1:4336. Independent browser review used Chrome through the supported CUA interface. No forms were submitted and no application source was edited by the auditor.

## Must Fix

None remain from this review.

## Resolved During Review

1. Tailwind's `.contents` utility made the article sidebar use `display: contents`, breaking the desktop grid and sticky sidebar. The parent added scoped display rules. Rechecked: desktop sidebar is a 205 pixel sticky block, and the mobile contents list uses flex layout.
2. The inherited footer extended the page to 1202 pixels at a 1024 pixel viewport. The parent added an article scoped footer layout between 901 and 1250 pixels. Rechecked document width equals viewport content width at both 1024 and 1250; the menu remains inside its panel.

## Verified

| Page | Header And Hero | Photo Dialogs | Contents Links | Mobile Table |
| --- | --- | --- | --- | --- |
| Pillar | Pass at 1920, 1280, 1024, 768 and 390 | 12 loaded and closed | 9 targets | Not applicable |
| Found Guitar | Pass at all five widths | 5 loaded and closed | 9 targets | Not applicable |
| Brand | Pass at all five widths | 7 loaded and closed | 7 targets | All 9 rows; full horizontal scroll |
| Age | Pass at all five widths | 6 loaded and closed | 8 targets | All 7 rows; full horizontal scroll |
| Value | Pass at all five widths | 5 loaded and closed | 11 targets | All 7 rows; full horizontal scroll |

The logo stays above each article's eyebrow and H1. Hero appraisal buttons remain visible. Desktop and phone reference captures preserve the approved article typography, text wrapping and photo arrangements. The long value H1 fits. The pillar comparison grids and paired value tuner images retain their grouping. All 35 full photo assets loaded in their dialogs, including the bridge detail, portrait headstock and original case. The mobile case dialog and close control were also checked.

All 44 contents targets exist and were exercised. One age link clicked during scrolling was rechecked from a stable viewport: `#the-serial-tells-you-less-than-youd-think` lands 28 pixels from the top. Value section fragment names are retained. Mobile table scroll reaches the 289 pixel maximum on the brand, age and value tables. The shared mobile menu opens and closes. No form submission was tested.

## Static Comparison

All five repository `audit:live-diff` runs report zero must-fix items and zero broken assets. Their reports are in the parent reports directory under `identification-{pillar,found,brand,age,value}-audit-2026-10-15*.md`.

The four warnings in each report are explained by the authorized shared contact section (one extra heading, section and image) and the unchanged shared Reverb icons lacking HTML width and height attributes. Additional production Article, image licensing and global schema nodes are expected. Production links replace private preview routing, and the optional house brand editorial prompt is intentionally absent.

Direct unauthenticated requests to the private Sites hosts returned HTTP 401. The comparison therefore used their saved approved builds served on temporary loopback ports, with the same repository audit script. This is a source comparison against the approved artifacts, not a claim that private hosted pages were publicly fetched.

## Evidence And Limits

Evidence in this directory includes per-page screenshots at five widths, approved captures at 1920 and 390, comparison sheets, 35 dialog captures, three phone table captures, viewport metrics, dialog results, anchor results, mobile menu and dialog captures, and footer checks. The early viewport metrics record the footer overflow before its fix; the fixed footer screenshots and final browser measurements supersede that one value. The initial age anchor timing result in `anchor-results.json` is superseded by the successful stable recheck above.

The shared header, footer, contact form and floating contact buttons are intentional production differences. Their inherited wording is outside the strict article copy surface. Cross model vision review was not run in this agent; this report provides the independent human-readable visual audit and deterministic checks, with that optional second opinion left to the parent if required. Browser viewport was reset and audit tabs were closed.
