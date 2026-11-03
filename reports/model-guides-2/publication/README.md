# Approved Epiphone Publication

Joe explicitly requested publication on November 2, 2026: "ok put these live". Approval covers all 18 Epiphone guides and the seller page, including reviewed photo updates and plain numbering.

Current production commit `0a64d67567f3300235f3a74077cdc66795765717` was merged into the release branch to preserve the separately approved auction-records article. The merge was clean. The only additional source-document edit records Joe's publication approval in CLAUDE.md.

## Final Integration Checks

- Production build: 407 pages, 391 production URLs, 3,805 image sitemap entries.
- Astro check: 0 errors, 0 warnings, 160 hints.
- Rendered copy gate: 0 hard failures, 769 advisory warnings.
- All 19 live-diff audits against the reviewed `0318cbac` preview: 0 must-fix findings.
- Independent live-diff-auditor-numbering integration review: 0 must-fix findings.
- Independently verified all 19 Epiphone HTML documents are byte-identical to the final checked plain-numbering build. Photos, prices, text, numbering, metadata/schema and stylesheet references are unchanged.
- All 15 incoming source files match current production Git blobs exactly. The auction article renders its expected wrapper, section numbers 1 through 10, four tables with 37 rows, 11 FAQ disclosures, canonical URL and BlogPosting/FAQ schema.
- Prior desktop/mobile visual review remains applicable because the Epiphone output is byte-identical.

## Deployment State At Commit

The previous numbering revision `72f5e10` passed GitHub check-copy, but Cloudflare preview deployment `bfb4540a-1ddf-488a-bb92-26ae0314f0d4` failed after an extended build. The check exposes no specific error, and the signed-in Cloudflare account cannot access this project's detailed build log. The GitHub check rerun endpoint did not permit a rerun. This integration commit triggers a fresh preview build before production merge. Exact preview, merge and production verification evidence will be recorded in PR #305 when available.
