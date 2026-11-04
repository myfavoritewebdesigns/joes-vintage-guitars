# PR 308 Publication Integration

Joe approved publication on November 4, 2026: "ok get these live", after reviewing the updated Champ preview.

The approved amp revision df3a2b2 passed GitHub check-copy. While waiting for Cloudflare's preview, main advanced to 993164b with the separately approved Gibson batch. Integration preserves that batch in full. The only merge conflict was in CLAUDE.md; both decision logs and the new amp publication approval are retained.

The combined local release passes:

- Build: 452 pages.
- Astro: zero errors and warnings.
- Copy: zero hard failures; 790 advisory site-wide warnings.
- IndexNow tests: 11 passed.
- All eight amp article markup hashes, titles and descriptions match the approved pre-integration build.
- Champ static comparison: zero must-fix findings and zero broken assets. The intentional additions and inherited icon warnings are unchanged.

The independent Champ desktop/mobile review remains applicable because its article markup and shared photo styles are unchanged. Cloudflare preview completion is still pending; Joe's explicit publication instruction authorizes proceeding from the reviewed local preview. Production deployment and three fresh loads of every new live URL must be verified after merge.
