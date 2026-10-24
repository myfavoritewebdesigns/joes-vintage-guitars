# Martin Model History Visual Review

Reviewed October 23, 2026, by the independent live-diff-auditor agent. No application code was changed by this reviewer.

## Must Fix

- None remain from the visual review after the header correction described below.

## Should Fix / Coverage Notes

- Cross-model visual review was not run in-agent; the optional second-model handoff in `.claude/agents/live-diff-auditor.md` remains available using `screenshots/d21-source-1920.png`, `screenshots/d21-production-1920.png`, `screenshots/d21-source-390.png` and `screenshots/d21-production-390.png`, with the documented main-site shell differences excluded from parity findings.
- Every contents target was checked for existence across all fourteen pages, but actual animated anchor scrolling and lazy-loading were sampled on D-21, D-28 and Classical rather than replayed for every heading on every page.

## Acceptable / Informational

- The initial production header placed white navigation and the mobile hamburger over a pale background; the parent added the scoped dark header backdrop and breakpoint clearance, and the reviewer verified readable desktop navigation at 1920px, a readable mobile menu at 390px, and no logo/breadcrumb overlap.
- The two initially broken Reverb icons were caused by the QA server serving SVG without its image MIME type; both loaded after the final check moved to `localhost:50190`, and the final desktop screenshot has no broken images.
- At a 390px iframe width all fourteen articles had a 375px document client width and matching scroll width, with each timeline table fitting the 331px article column; `Year Or Period` and `What Changed` appeared as row-block labels, with no sideways table scrolling.
- The desktop D-21 table retained two aligned columns, visible column headings, shaded year cells and hidden mobile pseudo-labels; its table width was 778px at the inspected 1920px viewport.
- All fourteen article DOMs contained one H1, one main element, zero missing contents targets and zero external article links; the exact measurements are saved in `mobile-dom-review.json`.
- The inspected D-21, D-28, OM-45 and Classical pages retained readable hero titles and both hero CTAs, chronological tables and era sections; OM-45 clearly labeled its 1976 comparison photograph.
- D-21 contents links settled at approximately 24px from the viewport top, and both D-21 detail photographs loaded after a photo-section anchor jump; the Classical detail photograph also loaded after its section jump.
- D-21 instrument detail photographs stack vertically in both source and production; production's additional consecutive figure run is the grid of owner-review quotes, not a lost instrument gallery.
- The production mobile navigation opened and closed using its real summary control, and the page retained the main site's contact form with all expected fields; no form was submitted.
- The shared floating contact controls remain part of the main site shell and can cover small areas on the right of narrow-screen text while scrolling; this is existing shell behavior, not a new timeline-table overflow.
- The copy report scanned 297 pages with zero hard failures; its 719 warnings occur on existing pages, not these fourteen new guides.

## Evidence And Scope

The source comparison was the updated private-preview build served at `localhost:8768`. Production was the Astro build first served at `localhost:59045`, then at `localhost:50190` after correcting the QA server's SVG MIME mapping. These are new public routes, so no former public WordPress article exists for direct comparison.

The fourteen raw deterministic reports are in `reports/martin-release-*-audit-2026-10-24T01-12-*.md`. Their source-only picture URLs, Organization/ProfessionalService difference, shared shell image counts and owner-review figure run are covered by `decisions.md`; they are migration-format differences, not missing article photographs or schema. The first resource-heading difference was also resolved by the parent. The dedicated fourteen-page validation is the stronger content/link/FAQ/asset check for this port.

Browser review used the documented CUA browser API, including read-only DOM ancestor walks, computed styles, screenshots, real link clicks and scrolling. The legacy Playwright MCP namespace was not loaded, but the qualitative layer was completed through CUA rather than skipped. Read-only browser restrictions prevented changing lazy-loading attributes; actual navigation and scrolling were used to trigger and verify the sampled photographs instead. Screenshot and DOM measurements are saved beside this report. Temporary viewport overrides were reset.

## Saved Screenshots

- `screenshots/d21-source-1920.png` and `screenshots/d21-production-1920.png`: source and final production desktop heroes.
- `screenshots/d21-source-390.png` and `screenshots/d21-production-390.png`: source and final production mobile heroes.
- `screenshots/d21-production-1280-before.png`: original header contrast defect before correction.
- `screenshots/d21-production-table-1920.png`: desktop table and contents navigation.
- `screenshots/d21-production-table-390.png` and `screenshots/d28-production-table-390.png`: stacked mobile timeline rows.
- `screenshots/d21-production-details-390.png`: loaded detail photographs and captions.
- `screenshots/om45-production-390.png` and `screenshots/classical-production-390.png`: representative mobile titles, CTAs and photograph context.
