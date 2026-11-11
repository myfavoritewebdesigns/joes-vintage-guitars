# Agent visual audit — CBS Stratocaster year guides

Reviewed 2026-11-11 as the requested `live-diff-auditor`; no source code was changed by this reviewer.

Scope: the new CBS table on `/vintage-fender-stratocaster-value-guide/` and representative new year pages `/1968/`, `/1975/`, and `/1980-1981/`, using the existing year-page template. The requested table, closing paragraph, and byline changes are intentional; the three era cards and existing shared template are protected.

## 🔴 Must fix

- None found within the reviewed scope; the supplied static report also has no must-fix findings: `reports/cbs-strat-hub-audit-2026-11-11T23-36-04-229Z.md`.

## 🟡 Should fix

- In `src/pages/vintage-fender-stratocaster-value-guide.astro:#cbs-values`, the new table touches the era cards with a measured 0px gap at 375px and 1920px, making the separate summary cards and data table appear joined; the 375px and 1280px screenshots show the same join.
- Playwright MCP is unavailable, so the prescribed MCP workflow and complete paired live/local review at 1920px and 390px were not run; existing screenshots and direct Playwright/Chrome checks supplied the partial visual, lazy-load, widget, anchor, and DOM evidence described below.
- Cross-model visual review was not run in-agent; the main agent retains the workflow handoff to compare live/local screenshots with a different model if completing that additional coverage before publication.

## 🟢 Acceptable / informational

- The hub and all three sampled new guides have 375px document widths at a 375px viewport, with no page-level horizontal overflow; the supplied 1280px measurements also match the viewport.
- The new hub table reaches its right edge after a 121px horizontal scroll at 375px, and sampled year tables reach their right edge after 435px; each scroll wrapper has `overflow-x: auto` and `tabindex="0"`.
- New guide photos and their dark caption panels are legible in the inspected mobile and desktop section screenshots, and the 1979 comparison photographs on the 1980–1981 guide are explicitly identified as comparisons.
- The 1968, 1975, and 1980–1981 guide headings, finish cards, table columns, inspection photo/text layouts, and CTA treatments remain consistent with the existing year template in the sampled views.
- Sampled local FAQ disclosures opened on click, and live/local widget counts match for both the hub and the existing 1965 baseline, with one form, nine inputs, no iframes, and no missing fragment targets.
- Direct navigation to `#inspection` on the three sampled new guides lands at the section and displays its photograph within 1.9 seconds; the hub `#cbs-values` anchor retains its existing approximately 96px offset on both live and local.
- The 1920px hub and 1968 header/footer screenshots have readable navigation and intact composition; no new clipping or odd empty bands were found in those views.
- Fixed contact buttons cover some text at 375px in the new guides and table, but the existing 1965 baseline reproduces this behavior; it is a pre-existing shared-template limitation and is not a new regression or an instruction to alter protected shared chrome.
- The static report's two Reverb SVG dimension warnings concern shared chrome and do not establish a new visual regression in this batch.

## Evidence and limits

- Supplied screenshot sets: `screenshots/hub-cbs-{375,1280}.png`, `screenshots/hub-cbs-scrolled-{375,1280}.png`, and the top/values/inspection sets for 1968, 1975, and 1980–1981.
- Browser evidence: `layout-check.json` and `visual-review-evidence.json`; the latter includes complete heading-ancestor walks with `::before` and `::after` computed styles on live and local, scroll extents, widget inventories, FAQ toggles, anchor positions, and image-loaded results.
- Additional baseline/desktop captures: `screenshots/local-1965-inspection-375.png`, `screenshots/live-1965-inspection-375.png`, and `screenshots/local-{hub,1968}-desktop-{top,footer}-1920.png`.
- The existing `preservation-check.json` records unchanged 1954–1964 output, the authorized 1965 navigation addition, and the limited hub edits; this reviewer did not independently recompute those hashes.
- Visual sampling covers three representative new years, not every one of the fifteen new routes; no forms were submitted and no contact actions were activated.
- This is a responsive visual and interaction review, not a verification of the historical claims or price derivation.

Suggested narrow resolution for the spacing item: add 24–28px above the new CBS table wrapper only, preserving the three cards and all existing shared rules, then recheck the hub crop at 375px and desktop.
