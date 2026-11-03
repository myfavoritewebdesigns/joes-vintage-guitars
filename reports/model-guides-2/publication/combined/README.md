# Concurrent Release Integration

Both Cloudflare and GitHub checks passed for the reviewed Epiphone release `4085e2b`. All 19 deployed preview pages matched the local titles and content, all 85 referenced image/stylesheet assets returned HTTP 200, and the exact preview manifest revision was verified. Plain numbering also passed public desktop/mobile checks.

While those remote builds ran, production advanced to `d5f867948ec58c11bd0e601357c7c866512f7894`, publishing the separately approved Fender amplifier release. The shared guide renderer and registration conflicts were resolved by retaining both releases.

The renderer now uses plain numbers for Epiphone or an explicit guide-level opt-in. Amplifier categories, FAQ subtitles, closing titles, assessment notes and selling actions are preserved. Both Epiphone and amplifier guides remain registered.

## Final Checks

- Combined production build: 417 pages, 401 production URLs and 3,876 image sitemap entries.
- Astro check: 0 errors, 0 warnings, 168 advisory hints.
- Rendered copy gate: 0 hard failures, 777 advisory warnings across the combined site.
- All 19 live-diff checks against successful immutable preview `546a8cc1`: 0 must-fix findings.
- Independent conflict review: 0 must-fix findings.
- All 19 Epiphone HTML pages remain byte-identical to the approved plain-numbering snapshots.
- All eight amplifier pages render once with sequential plain numbers and their approved categories, FAQ/closing text, assessment notes and seller actions.
- All 42 incoming source/assets outside the three intentionally combined files match production `d5f8679` exactly.

The validated integration commit contains both approved histories and can be fast-forwarded onto production without overwriting existing work. Production revision, indexability, page and asset verification will be recorded in PR #305 after deployment.
