# Plain Epiphone Numbering

Joe requested plain display numbers (1, 2, 3) instead of padded numbers (01, 02, 03).

The 18 Epiphone guides now use plain section and checklist numbers. The Epiphone seller page uses plain selling-step and photo-checklist numbers. The shared guide renderer preserves existing numbering for other brands; the seller CSS override is scoped to Epiphone.

## Validation

- Build passed: 406 pages.
- Astro check passed: 0 errors, 0 warnings, 156 hints.
- Rendered-copy gate passed: 0 hard failures, 769 existing advisory warnings.
- All 18 guide section/checklist sequences and the seller steps passed automated verification.
- Text excluding display numbers and all guide table text match the previous build.
- All 387 other HTML pages are byte-identical to the previous build.
- Six desktop/mobile layout cases passed at 1280px and 375px, with no horizontal overflow or leading-zero photo counters.
- All 19 live-diff audits against the prior immutable preview passed with 0 must-fix items. Raw reports are included.
- Independent live-diff-auditor-numbering review passed with 0 must-fix and 0 should-fix findings after reviewing source and all 12 screenshot crops. Numbers are readable, aligned, unclipped, and clear of text.

Deployment verification will be recorded in PR #305 after the preview build completes. This change is for the review branch only.
