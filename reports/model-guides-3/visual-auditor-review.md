# Agent visual audit - Gibson model guides batch 3

Date: November 3, 2026. Read-only source review; no application source was changed.

## Must fix

None remaining in the reviewed build. The previously reported L-50 and L-48 timeline contrast findings are resolved: both timeline bands now render on the existing dark surface, with readable gold dates and cream body text at 1280px and 375px.

Correction evidence: `reports/screenshots/model-guides-3/gibson-l-50-authentication-guide-{1280,375}-timeline-auditor.png` and `gibson-l-48-authentication-guide-{1280,375}-timeline-auditor.png`.

## Should fix / coverage handoff

No additional visual defects found. Cross-model visual review was not run in-agent; the agent instruction requests a handoff to the main agent for a second-model review using the J200 and representative Les Paul authentication/value screenshots at both widths. This audit used Chrome Playwright and screenshot inspection, so qualitative review was performed despite the named Playwright MCP being unavailable.

## Acceptable / informational

- All 16 new pages were visually inspected at 1280x800 and 375x812 using all 32 `*-hero.png` screenshots. Headings wrap without horizontal clipping, and Free Appraisal plus Sell My Gibson remain fully visible under every H1, including the longest Thunderbird title.
- The J200 reference was inspected at both widths for hero, glance panel, dark timeline, table and archive surfaces. Representative new authentication and value pages retain the expected dark, cream, rust and gold design, display typography, photo/sidebar composition, tables and lower section treatment.
- Les Paul Deluxe authentication and value screenshots were reviewed at both widths for glance panels, dark cards/timeline, checklists and value table; the authentication archive and Byrdland value archive were also reviewed at both widths. Additional L-50, L-48 and L-7 mobile dark/archive/checklist examples were inspected. No dark-on-dark headings, missing photographs or clipped captions were found in these views.
- Mobile tables use horizontal scrolling as on J200; DOM probing confirmed a 335px wrapper, a 760px table and a reachable 425px scroll offset. Offscreen price columns in the initial table screenshot are scrollable content.
- Plain numbering and suppression of the mobile floating contact stack follow the recorded decisions. Photograph letterboxing preserves the full supplied views; differences from J200's cropped display are acceptable for identification photographs.
- Deep DOM ancestor and pseudo-element walks, table scroll checks, fragment inventories and native disclosure inventories were recorded in `auditor-dom-review.json`. Three representative new pages contain the expected FAQ disclosures and no article forms or iframes.
- Twenty-eight distinct fragment targets on Les Paul Deluxe authentication/value and L-50 authentication scrolled successfully. Visible lazy images were present within 350ms after each jump; the test disables smooth animation to measure settled positions. Results are in `auditor-anchor-review.json`.
- Actual FAQ clicks produced readable expanded answers, retained in `*-375-faq-auditor.png` screenshots.

The deterministic baseline is in `static-check.json`, `browser-check.json` and `preservation-check.json`. The current browser report has no color-contrast violations. These are new routes, so J200 supplies a design reference rather than a production-original parity baseline. This review does not authorize publication.

## Follow-up: subsequently added authentication tables

A later content revision added tables after the initial visual acceptance. Independent screenshot and DOM review confirmed real contrast regressions in all three new tables at both widths: L-48 construction examples (1952 specimen row), L-4 chronology (1928-1934 and 1947-1956 rows), and Thunderbird construction (Body form row). The striped rows inherited cream text over a pale cream background (1.16:1); table captions were rust on the dark section (2.54:1). These were source inheritance defects, not sticky-header or viewport artifacts. Before-fix evidence is retained in `auditor-new-tables.json` and the six `*-new-table-auditor.png` screenshots. The main agent is applying existing light section treatments without changing shared CSS; a new verification entry is required to clear these findings.

## Final verification of new tables

All three findings are cleared in the November 3 rebuild after 11:07. Independently captured and visually reviewed all six corrected views at 1280px and 375px. L-48 construction examples now occupy light `#construction-examples`; L-4 `#early` and bass `#thunderbirds` use the existing light treatment. Body text is now #1b1916 on cream rows, and rust captions sit on the light section background. All six independent full-article axe color-contrast checks returned zero violations. Mobile tables retain their expected 760px content within a 335px horizontal scrolling wrapper.

Final evidence: `auditor-new-tables-fixed.json` and six `*-new-table-fixed-auditor.png` screenshots. The earlier `*-new-table-auditor.png` images document the superseded defects. No remaining must-fix visual findings; no application source or shared styles were changed by this auditor.

## Final verification after approved main update through 6a88b4e

Reviewed the 11:35 rebuild after incorporation of the approved PR 311 photo-height correction. All article images on Deluxe authentication, L-48 authentication and ES-175 authentication have nonzero rendered height and loaded intrinsic image data at both widths (62 image instances checked). Deluxe and ES-175 photo-grid images measure 420px high at 1280px and 360px high at 375px; associated captions measure 35-50px. L-48 uses photo-band and archive comparisons rather than `.mg-photo-grid`; its images and 50-80px comparison captions also remain visible.

Inspected all six Deluxe/ES-175 grid captures plus the four L-48 comparison-band/archive captures at both widths. The photographs render, captions remain legible, and the mobile stacks preserve the comparison labels. Evidence is in `auditor-final-photo-grids.json` and ten `*-final-auditor.png` captures. The refreshed full-batch `browser-check.json` covers 32 viewport/page checks with every FAQ open and reports zero collapsed article images, zero broken images and zero contrast violations. No remaining must-fix findings from this final targeted review. No application source or shared CSS was changed by the auditor.
