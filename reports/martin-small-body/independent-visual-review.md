# Independent visual review — Martin small-body PR 1

Reviewed November 5, 2026. Read-only page review; only audit scripts and report artifacts were changed. Read `.claude/agents/live-diff-auditor.md`, the November 5 decision entry in `CLAUDE.md`, and `reports/martin-small-body-hub-audit-2026-11-05T18-19-26-143Z.md` before assessing differences.

## 🔴 Must fix

None confirmed in the reviewed build. The supplied deterministic hub audit also has no must-fix findings.

## 🟡 Should fix / outstanding review

- Cross-model visual review was not run: the required zen/direct vision-model tools are not available to this reviewer; the main agent should use `independent/hub-live-{1920,390}-full.png` with `independent/martin-0-00-000-history-authentication-value-guide-{1920,390}-full.png`, and the J-200/new-guide screenshots, if completing the repository's separate cross-model review requirement.
- Exhaustive settled direct-anchor verification remains incomplete: all target IDs exist, and fresh navigation to the 000-18 authentication `#archive`, 00-18 authentication `#serial`, and hub `#value` lands correctly after native smooth scrolling settles, but the early samples from the broader 71-anchor sweep were taken during scrolling and must not be treated as either failures or passes.

## 🟢 Acceptable / informational

- The six new guides retain the existing model-guide kit's large Oswald headings, dark heroes, cream body bands, rust actions, numbered sections, photo treatments, lower actions and FAQ component; the decision log explicitly authorizes this kit, plain numbering and light tables.
- Clean screenshots at 1280×800 and 375×812 show both Free Appraisal and Sell My Martin under each H1 without an open navigation menu covering them; independent 1920×1080 and 390×844 captures confirm the same result.
- All twelve required viewport/page contrast runs have zero computed failures, zero axe contrast violations, no document overflow, no broken article images and no missing TOC target IDs; zero violations is not a claim that axe resolved every background.
- The remaining axe incomplete cases concern header overlap detection and FAQ pseudo-element backgrounds; direct screenshot review found the hero/breadcrumb and expanded FAQ text readable, including the parchment texture.
- The 000-18 identification comparison and price tables remain legible on desktop, and mobile containers scroll horizontally; the six new guide tables are 760px wide inside 350px containers at the 390px viewport and accept keyboard focus.
- Long value-table captions also scroll with their tables on mobile and are partially offscreen initially; this is existing kit behavior, with condition assumptions repeated in the readable note below the table.
- The 000-18 archive, 00-18 Wurlitzer gallery, 1952 00-18 stamp/hardware photos and 0-18 stamp/owner imagery render with positive dimensions and separate readable captions after normal scrolling and image decoding; black offscreen areas in the earliest full-page captures were capture timing artifacts rather than confirmed missing photos.
- The hub's production/local heroes match at 1920 and 390, including the background gradient, header, title, actions and photograph; ancestor walks include both pseudo-elements through the main wrapper in `independent/audit.json`.
- The hub retains its model cards, original value discussion, four value cards, value equation and FAQ; the added Style 18 table and contextual links are intentional additions documented in the decision log.
- Widget inventories match between production and local hub: one form, fourteen details, nine inputs, no role-button elements and no iframes; FAQ summaries toggle successfully across all six new pages and the hub.
- The deterministic audit's two missing width/height warnings concern the shared Reverb SVG icons; screenshots show the icons correctly sized, and this review found no new content-image sizing defect.

## Evidence and limits

The Playwright MCP named by the repository agent file was unavailable. Equivalent local Playwright CLI work **did** cover screenshot capture and inspection, ancestor/pseudo-element walks, image loading and geometry, widget inventory, FAQ interaction, horizontal table scrolling and selected settled direct anchors. Qualitative review was therefore not skipped. No user browser session was used.

Required captures and full text-run contrast evidence: `visual/`. Independent larger/smaller viewport captures, production comparison, expanded FAQ and 00-18/0-18 section crops: `independent/`. Useful clean crops include `martin-00-18-authentication-guide-390-wurlitzer.png`, `-390-serial.png`, `-390-hardware.png`, and `martin-0-18-authentication-guide-390-serial.png`.

The local harness `work/martin-small-body/visual.mjs` was corrected to expand `article details` only, await fonts and image decoding, scroll photos through the viewport, then return to the top before capture; the old global `details` selector had opened the navigation menus and obscured the initial hero evidence.

`independent/interaction-audit.json` remains useful for FAQ and table checks; its sequential anchor positions and `independent/fresh-anchor-audit.json` are diagnostic samples taken too early in smooth scrolling, not release assertions. `independent-fresh-anchors.mjs` now waits 2.2 seconds after each fresh navigation for a future complete rerun. The three settled spot checks finished at approximately 100px, 100px and 0px from the viewport top respectively, matching the pages' anchor offsets.

The main agent subsequently changed the 0-18 pricing-gap note/FAQ and the shared chart note without structural or CSS edits; regenerate `visual/` against that final build before citing these artifacts as final-release evidence.
