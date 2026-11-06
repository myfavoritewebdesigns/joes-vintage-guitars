# Photo-refresh audit — Martin Style 18 preview

Reviewed November 6, 2026 against prior preview `https://0c9dcb45.joes-vintage-guitars.pages.dev`; current pages were served from `http://127.0.0.1:4328`. Scope: all six 000-18, 00-18 and 0-18 authentication/value guides. Read the November 6 CLAUDE decision, the three model data files and the 43-photo source ledger. No product code was changed by this reviewer.

## 🔴 Must fix

None remaining. The three garbled apostrophes found in `a49owner`, `a20` and `a31koa` captions/alt text were corrected by the main agent; the final rebuild was independently rechecked and the corrected desktop/mobile crops inspected.

## 🟡 Should fix / review limitation

- Cross-model vision review was not run because its tools are unavailable to this reviewer; local Playwright CLI and direct screenshot inspection covered the visual checks below, so this is a separate review-tool limitation rather than a skipped visual audit.

## 🟢 Verified / intentional differences

- All six guides were captured at 1280×800 and 375×812; all 102 figure placements across those twelve views loaded, had positive geometry (minimum image height 250px), used `object-fit: contain`, and kept captions below the image without clipping the figure bounds.
- The 43 distinct source selections match the requested eras: 1938/1951/1960 000-18, 1920s/1951/1952/1962 00-18, and 1925/1951/1966 0-18 with the labeled 1931 koa and Linda Gayle publicity/1949 stamp evidence retained; no displayed image source, caption or alt text refers to rejected 1944 or Wurlitzer photographs.
- Desktop and mobile section screenshots were inspected for the archive groups, value-page pairs, photo bands and new serial cards; pictured front/back/headstock/bridge/stamp views match their caption subjects, and repair disclosures remain attached to the corresponding 1951, 1962 and 1966 examples.
- All six top Free Appraisal/Sell My Martin pairs are visible and unobscured in both tested viewports; no document overflow was measured.
- The article, blog-card and social heroes agree for both pages in each pair: 1960 000-18, 1952 00-18 and 1966 0-18; all six generated `/og/` files are byte-identical to their selected original, and the built blog cards use renditions of the same source.
- All 61 TOC anchor targets were tested with fresh document loads and 2.2 seconds for native smooth scrolling; every target landed within the expected viewport area, and every image visible at those targets loaded with positive dimensions.
- The new value-page pairs are actual `.mg-photo-grid` containers, measured as two 563.5px columns on desktop and one 335px column on mobile; full ancestor/pseudo-element walks are saved in `value-grids.json`, with authentication gallery walks in `final-caption-hero-check.json`.

## Static audit classification

All six deterministic comparisons were run against the prior preview; their raw reports are `reports/photo-refresh-martin-*-audit-2026-11-06T18-18-56-*.md` and logs are in the evidence folder. Their exit codes reflect the intentional differences below, not remaining release blockers.

| Raw must-fix finding | Disposition |
| --- | --- |
| 000-18 authentication: “4 heading(s) on live but missing on local” — the wartime archive, Top/Back/Headstock, incomplete-digit heading and 1944 stamp heading | Intentional removal of the rejected 1944 example and replacement with the 1938/1960 archive and readable stamps; existing section anchors remain functional. |
| 00-18 authentication: “1 heading(s) on live but missing on local” — the 1924 Wurlitzer archive heading | Intentional removal of the fair-condition Wurlitzer photographs; general dealer-brand discussion remains and a separate 1951/1962 photo section is added. |
| 0-18 authentication: “1 heading(s) on live but missing on local” — Read Serial 112697 On The Actual Neck Block | Intentional expansion to three dated serial cards; the 1949 card and `#serial` anchor remain. |
| Each value guide: “2 figure(s) in 1 consecutive run(s) on local … but live has none” | Intentional new photo pairs, verified inside the existing responsive grid rather than an unwrapped vertical figure run. |

Extra images, heading counts, licensed ImageObject/Person nodes and updated descriptions follow those documented replacements/additions. The two shared Reverb-icon width/height warnings are pre-existing; no content-image dimension failure was found. All checked local asset URLs were live.

## Evidence

`reports/martin-small-body/photo-refresh-audit/` contains hero/full-page and photo-section screenshots, `visual.json`, `anchors.json`, `static.json`, `value-grids.json`, and `final-caption-hero-check.json`. The three corrected caption crops and the final recheck JSON supersede the initial caption text in `visual.json` and the earlier full-page captures. The main agent runs the separate final broad visual/contrast audit; this review did not overwrite `visual/audit.json`.

Playwright MCP was unavailable, but equivalent CLI checks were completed. This is a preview review only; it grants no publication or merge approval.
