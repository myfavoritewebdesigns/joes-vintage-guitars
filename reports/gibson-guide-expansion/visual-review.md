# Independent visual audit — Gibson guide expansion

Reviewed November 4, 2026 against http://127.0.0.1:4325 and current production. Scope: authentication and value guides for L-50, L-48, L-4, Les Paul Deluxe, Thunderbird/EB basses and ES-175. No source edits made by the auditor. Final anchor verification ran after the 22:05 UTC rebuild; the extensive screenshots precede that final valuation-caption-only change.

## 🔴 Must fix

None remaining from the independent visual review. The initial L-48 caption/prose mismatch was corrected and verified in the final build.

## 🟡 Review coverage handoff

- Cross-model visual review was not run in-agent; the auditor instructions label the cross-model step optional and require reporting this coverage limitation; no two failed or disputed visual attempts triggered the escalation rule. Saved production/local 1920px and 390px screenshot pairs are available if further review is pursued. The installed Playwright CLI fallback supplied real browser screenshots and DOM inspection, so qualitative review was performed despite the absence of Playwright MCP.

## 🟢 Verified / intentional differences

- All 38 added source photographs were visually inspected in the rendered desktop sections; mobile sections were inspected throughout, with detailed review of both Deluxe pages. No new photo is stretched, CSS-cropped, or incorrectly rotated. Side-view instruments remain naturally horizontal within their source photographs.
- All 12 URLs were measured at 1280×800, 375×812, 1920×1080 and 390×844: no broken guide images, no page-wide horizontal overflow, no browser page errors. Primary Free Appraisal and Sell My Gibson buttons fit completely inside both requested 1280×800 and 375×812 viewports.
- L-48 source metadata is 4032×3024 with EXIF orientation 6 (oriented size 3024×4032); browser-decoded output is 1280×1707, object-fit contain, and visibly upright. The final hero screenshot confirms the proper portrait proportions.
- L-48 case-photo caption now correctly says body and lower fingerboard; the authentication paragraph explicitly says its headstock is outside the frame. Initial screenshots retain the original finding; filenames containing final show the correction.
- The new Deluxe dark panel uses gold headings and cream body text on charcoal, with readable desktop/mobile contrast and no clipped headings; the other added headings and captions also remain legible.
- 125 TOC/FAQ anchor destinations resolve and land correctly after disabling smooth scrolling for deterministic measurement; all associated images loaded. The restored Deluxe configuration-review anchor is present. The first 100ms smooth-scroll measurements in final-check.json were superseded by anchor-check.json.
- New photo groups use real grid parents: mg-photo-grid (two desktop columns, one mobile column) and mg-gallery mg-gallery-2 for the Deluxe value examples. The latter intentionally gives the first image the larger shared-template treatment. Existing oversized tables scroll inside their containers on mobile, with no body-width overflow.
- Production/local forms, details, inputs and iframe inventories agree on every URL. Header/navigation and footer remain readable; compared production/local Deluxe hero screenshots show the expected date update without layout changes. The current static reports supply the broader structural preservation baseline.
- Added sections, ImageObject/Person nodes, the L-48 photo/FON replacement, and the Deluxe configuration-heading replacement are documented intentional changes in CLAUDE.md. Current production does not contain the new examples.

## Evidence

All files below are relative to the repository.

- Screenshot/DOM directory: work/gibson-guide-expansion/visual-review/ (desktop and mobile crops for every new section; top screenshots for all 12 pages).
- metrics.json: 48 viewport measurements, image dimensions/fit, CTA rectangles, heading colors and ancestor/pseudo-element walks.
- live-structure.json: production headings, interactive inventory and hero ancestor/pseudo-element walks.
- final-check.json: rebuilt caption text and verified gallery parent styles.
- anchor-check.json: final anchor verification with smooth scrolling disabled.
- all-mobile-tops.png: all 12 requested 375×812 top views.
- gibson-l-48-authentication-guide-375-final-hero.png and gibson-l-48-authentication-guide-375-final-section.png: orientation and corrected caption evidence.
- gibson-les-paul-deluxe-authentication-guide-{1280,375}-converted-1969.png: dark panel and four conversion photos.
- gibson-les-paul-deluxe-value-guide-{1280,375}-deluxe-condition-examples.png: all three enlarged value examples.
- gibson-les-paul-deluxe-authentication-guide-{1280,375}-configuration-review.png: restored final anchor/section.
- Cross-model handoff pair example: gibson-les-paul-deluxe-authentication-guide-live-1920-top.png, gibson-les-paul-deluxe-authentication-guide-1920-top.png, gibson-les-paul-deluxe-authentication-guide-live-390-top.png, gibson-les-paul-deluxe-authentication-guide-390-top.png. Equivalent pairs exist for all 12 URLs.

## Deterministic audit reconciliation

The twelve reports named reports/expansion-before-*-audit-2026-11-04T21-59-*.md were reviewed. Their five red items are reproduced below and resolved as documented intentional changes, not concealed as a zero-warning script result. Seven reports have no red items. Additional image/section counts are expected additions; the shared Reverb-icon dimension warnings predate this change.

### expansion-before-gibson-l-48-authentication-guide-audit-2026-11-04T21-59-01-427Z.md

- **1 heading(s) on live but missing on local:**
  - h3#- An Example Of The 1952 FON System

Resolution: intended 1952 comparison heading replaced by the factory-marking heading for the actual 1954 L-48.

### expansion-before-gibson-l-48-value-guide-audit-2026-11-04T21-59-02-680Z.md

- **3 figure(s) in 1 consecutive run(s) on local (1Ã—run-of-3), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.

Resolution: newly added figures absent on production; actual parent display:grid confirmed at desktop and mobile in final-check.json.

### expansion-before-gibson-l-50-value-guide-audit-2026-11-04T21-59-01-391Z.md

- **2 figure(s) in 1 consecutive run(s) on local (1Ã—run-of-2), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.

Resolution: newly added figures absent on production; actual parent display:grid confirmed at desktop and mobile in final-check.json.

### expansion-before-gibson-les-paul-deluxe-authentication-guide-audit-2026-11-04T21-59-03-070Z.md

- **1 heading(s) on live but missing on local:**
  - h2#- Check A Claimed Original Deluxe Configuration

Resolution: intended replacement with Separate The Pickup Type From The Installation; configuration-review ID preserved and tested.

### expansion-before-gibson-les-paul-deluxe-value-guide-audit-2026-11-04T21-59-02-984Z.md

- **6 figure(s) in 3 consecutive run(s) on local (3Ã—run-of-2), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.

Resolution: newly added figures absent on production; actual parent display:grid confirmed at desktop and mobile in final-check.json.


