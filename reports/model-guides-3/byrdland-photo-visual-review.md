# Byrdland Photo Update: Independent Visual Review

Reviewed November 3, 2026. Scope: `/post/gibson-byrdland-value-guide/`, ten new Drive originals, the 1957 hero, 1967 views confirmed by Joe, the added 1970s example and retained 1974 photographs.

## Must Fix

None found in the revised photographs, captions or rendered layout.

The before-versus-after static audit flags the removed heading “A 1974 Wine-Red Byrdland From Joe’s Archive.” Its replacement, “Later Byrdlands From Joe’s Archive,” describes the requested expanded archive and is recorded in CLAUDE.md. This is an intentional heading change, not a missing section. The final deployed-versus-local audit remains the parent agent’s delivery check.

## Should Fix

No new visual issue found. The static audit retains the existing two shared Reverb SVG width/height advisories; they are outside this photo update.

## Verified And Accepted

- At 1920 × 900 and 390 × 900, all 13 content-photo occurrences and the author portrait load normally when scrolled into view; no broken images or zero-height images were found.
- Each new photo uses contain sizing, preserves its source framing and has a readable caption below the image. The source hero is a body view; a separate 1957 full-front photograph shows the headstock and complete instrument.
- The 1957 pickup photograph shows the black pickup and rectangular polepieces described by its caption. The 1967 front, pickup, tailpiece and tuner views match their captions and Joe’s date correction. The 1970s sunburst and the existing 1974 wine-red examples remain distinct.
- The new grids group the photographs coherently. The three-image 1957 grid uses the established two-column desktop layout, with the third image at half width on a second row; mobile stacks all three. This leaves some desktop blank space but does not clip, hide or mislabel an image.
- Both top appraisal/selling buttons are visible in the initial viewport: their bottom edges are approximately 539px on desktop and 561px on mobile.
- No horizontal document overflow or article color-contrast violations were found. FAQ panels were opened for the contrast check.
- Fresh navigation to all eight section anchors reaches the corresponding content. Tests wait for the browser’s smooth scroll rather than reading its intermediate position.
- Added images, the new 1970s archive subheading, added image-license graph entries and changed gallery counts are expected consequences of the request. Existing 1974 caption overlays retain the previous layout.
- The focused static audit checks 17 local asset URLs and finds zero broken assets; section, article and main counts remain unchanged.

## Evidence And Limits

- Static audit: `reports/byrdland-photo-update-before-audit-2026-11-03T21-42-12-361Z.md`.
- Browser measurements, ordinary lazy-loading results, anchor checks and ancestor DOM inspection: `reports/model-guides-3/byrdland-photo-auditor-browser.json`.
- Screenshots: `reports/screenshots/byrdland-photo-update/`, with desktop and mobile hero, glance, early, sixties, archive and hardware captures. The reviewer inspected those captures directly.
- Review used the repository’s installed Playwright/Chrome and axe-core against the completed local build. A Playwright MCP transport was unavailable, but the corresponding visual and behavioral checks were performed through installed Playwright, not skipped.
- Optional cross-model visual review was not run. No claim of independent instrument authentication or production publication is made by this visual review.
