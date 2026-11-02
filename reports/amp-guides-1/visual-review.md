# Amp guides PR 1 — independent visual review

Reviewed November 2, 2026 against the J200 reference. **Final disposition: PASS with the documented coverage limits; no open visual/content-routing blockers.** No implementation files changed by this reviewer.

## 🔴 Must fix before preview approval

- **Resolved and verified:** the automatic **“Use The Fender Dating Guides”** block below the author card previously sent amp readers to guitar serial/neck/body/pickup dating; fresh local navigation confirms this block is absent from all eight new amp pages.

## 🟡 Should fix / review coverage

- **Resolved and verified:** Deluxe authentication `#timeline` now displays **“The Tweed Era”**, and fresh article DOM checks found no remaining “House” wording in any of the eight pages.
- **Resolved and verified:** the corrected `page-audit.json` now records **Sell My Amp** and `/sell-an-amplifier-or-effect/` for all eight pages, matching the rendered CTA and layout audit.
- Cross-model visual review was not run in-agent; the agent instructions require this handoff, so use `screenshots/gibson-j200-model-history-authentication-guide-1280-hero.png` versus `screenshots/fender-deluxe-reverb-authentication-guide-1280-hero.png`, and the corresponding `-375-hero.png` pair, if that additional review is performed before shipping (the requested 1280/375 widths supersede the agent template's 1920/390 defaults).

## 🟢 Acceptable / verified

- All eight mobile first screens were visually inspected; the two top appraisal/selling CTAs remain visible, including the long era/comparison titles, and the supplied 16-case layout report verifies both widths without document overflow or broken images.
- J200 and the new pages share the dark hero, Oswald hierarchy, cream reading surface, rust facts panel, numbered sections, gold dark-section headings, horizontal tables and photographic archive rhythm; ancestor walks through `html` including both pseudo-elements confirmed the relevant backgrounds and containment rather than inferring them from screenshots alone.
- The newly added Twin value dark band was verified in a fresh local browser render at 1280×800; its gold heading and cream body remain readable on the dark background.
- Deluxe's 375px table is an accessible, labeled `tabindex="0"` region with `overflow-x:auto`; an actual ArrowRight key press moved its horizontal scroll position from 0 to 40px while the document remained within its client width.
- Mobile table captions and later columns extend inside that horizontal scroll region, matching the J200 reference behavior; they do not create page-level horizontal scrolling.
- Archive photographs retain the full amp using `object-fit:contain`, with readable captions and substantial intentional black letterboxing on mobile; the saved desktop/mobile archive views show the actual cabinets, controls and boards rather than invented diagrams.
- Fresh local anchor tests reached Deluxe specifications/archive and Twin's dark value section; the first images at the reached archive position loaded, and the Deluxe FAQ expanded with a readable answer.
- Shared navigation and footer links remain legible in the reviewed 1280px and 375px captures; mobile floating contact buttons are intentionally absent for the new guide pages.

## Evidence and limits

Read the supplied [static page audit](page-audit.json), [layout audit](layout-audit.json), [contrast/axe audit](contrast-axe/audit.json), and representative images from [screenshots](screenshots/). The deterministic reports cover all eight pages at both requested sizes; qualitative inspection covers all eight mobile heroes plus representative 1280px heroes, facts panels, dark sections, tables, archive sections, FAQ and J200 comparisons.

Browser review used the available CUA/Playwright surface after the preview was restarted, not the unavailable legacy Playwright MCP. Live DOM checks were read-only; lazy images were verified when brought into view, while the full loaded-image check relies on the supplied capture report. No unseen, offscreen lazy image was classified as broken. This was not an exhaustive interactive visit to every anchor on every page, a source/factual review, a production deployment check, or a new 1920px audit. New pages have no old WordPress versions, so J200 was the design reference, not a content-parity target.

The reported protected-guide byte identity and low phrase overlap are implementation audit results, not claims independently reproduced by this visual reviewer. The final recheck of the visible copy/routing items is documented below; layout/contrast evidence should be regenerated if final fixes alter layout or colors.

## Final rebuild disposition

The requested final recheck is complete: freshly navigated all eight local URLs after the final rebuild, confirmed each expected H1, and verified the guitar-dating block and “House” terminology are absent. These close the two page findings above. **No remaining visual blocker.** A subsequent read of the regenerated `page-audit.json` verifies all eight CTA labels and destinations, closing the reporting-only item as well. The final `layout-audit.json` contains 16 cases with zero horizontal-overflow cases, broken images or invisible CTA buttons. The three repository live-diff reports in `live-diff/` (serial guide, amp selling page and J200) each have an empty must-fix bucket; their nonblocking warnings remain in those reports. Cross-model coverage and the other scoped limits above remain explicitly unclaimed.
