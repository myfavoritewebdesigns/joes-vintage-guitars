# L-7 photo and cutaway revision: independent visual review

Reviewed 2026-11-04. Compared the hosted Gibson preview with http://127.0.0.1:4340 for both L-7 guides at 1920×900 and 390×900. No product files changed by reviewer.

## Must fix

None found.

## Should fix

No new visual issues. The static audits retain the pre-existing Reverb icon SVG dimensions advisory; it is unrelated to this revision.

## Accepted and verified

- The authentication audit's two removed noncutaway headings are intentional corrections authorized by Joe and recorded in CLAUDE.md. The personalized-guard guitar is consistently identified as the 1949 cutaway L-7C in its heading, paragraph, caption, callout and FAQ; the value guide agrees. The 1947 example remains correctly distinguished as noncutaway.
- Eight additional photographs appear in two new authentication sections, with four photographs per section. Images use contain, preserve the original framing, and have captions below. The desktop grids become single columns on mobile; actual image areas measure 420px high on desktop and 360px on mobile.
- The fleur-de-lis headstock is the first photograph under its own clearly labeled heading. The ornament is recognizable at normal desktop and mobile sizing, with supporting body and fingerboard views nearby. Its prominence satisfies the requested emphasis without cropping the historical photograph.
- Both new anchors land below the sticky header (about 100px). Visible images load after direct navigation; the one initially unloaded mobile detail was 2,346px below the viewport. A separate normal-scroll check confirmed all eight new images load with loading=lazy intact.
- All eight page/viewport comparisons have zero broken images, collapsed article images, horizontal overflow, or article color-contrast violations. Dark photo captions use light text. Authentication has 17 content photos versus the prior 9; value retains 5.
- Hero appearance, hero image URLs, H1s and CTA positions match the hosted pages. Header links and primary actions remain readable and the actions are visible on initial desktop/mobile viewports. Existing gallery grouping remains intact.
- Interactive inventories match: authentication has 9 details elements, value has 8; neither loses a form, input or iframe. FAQs were opened for the text and contrast inspection.

## Evidence and scope

- Static baselines: reports/l7-authentication-photo-before-audit-2026-11-04T17-41-01-157Z.md and reports/l7-value-photo-before-audit-2026-11-04T17-41-01-497Z.md.
- DOM ancestry, anchors, dimensions, widget inventory and contrast measurements: reports/model-guides-3/l7-photo-auditor-browser.json.
- Unforced mobile lazy-image verification: reports/model-guides-3/l7-photo-normal-scroll.json.
- Focused before/after hero and section screenshots: reports/screenshots/l7-photo-update/ (including local-authentication-390-fleur-de-lis-0.png and local-authentication-1920-fleur-de-lis-0.png).
- Review used local Playwright as the supported development fallback; screenshots and qualitative checks were completed. Cross-model review was not run; no repeated disputed finding or escalation trigger occurred.
