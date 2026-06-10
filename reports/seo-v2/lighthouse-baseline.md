# Lighthouse Baseline (Prompt 0)

Recorded: 2026-06-10. Lighthouse 13.4.0, headless Chrome (new headless), run from the local CLI against the production preview at `https://joes-vintage-guitars.pages.dev` (serving origin/main at `5c6da5d`). Mobile runs use the default Moto G Power emulation with 4x CPU throttle and slow 4G; desktop runs use `--preset=desktop`.

One environment note, reported honestly: every run completed and wrote its full report, but the Chrome launcher hit a Windows EPERM error while deleting its temp profile after each run, which made the CLI exit non-zero. The metrics below are extracted from the saved JSON reports directly. Raw JSON lives in a local temp directory and is reproducible with the same command; the extracted numbers are in `lighthouse-baseline.json` next to this file.

INP is a field metric and is not measurable in a lab run; TBT is recorded as the lab proxy, per Lighthouse's own guidance.

## Scores And Core Web Vitals

| URL | Form Factor | Perf | A11y | Best Practices | SEO | LCP (s) | CLS | TBT (ms) | Total KB | Image KB | Image Requests |
|---|---|---|---|---|---|---|---|---|---|---|---|
| / | mobile | 61 | 93 | 77 | 92 | 10.24 | 0 | 0 | 2,657 | 1,450 | 30 |
| / | desktop | 98 | 96 | 77 | 92 | 1.16 | 0 | 0 | 3,033 | 1,828 | 38 |
| /sell-my-fender-guitar/ | mobile | 56 | 93 | 77 | 85 | 17.32 | 0 | 0 | 2,316 | 1,110 | 30 |
| /sell-my-fender-guitar/ | desktop | 95 | 93 | 77 | 85 | 1.45 | 0 | 0 | 2,736 | 1,529 | 34 |
| /free-appraisal/ | mobile | 60 | 97 | 96 | 92 | 8.80 | 0 | 0 | 1,906 | 857 | 9 |
| /free-appraisal/ | desktop | 98 | 97 | 96 | 92 | 1.10 | 0 | 0 | 2,120 | 1,070 | 11 |
| /fender-guitars-serial-number-guide/ | mobile | 95 | 95 | 100 | 92 | 1.99 | 0 | 0 | 3,668 | 3,586 | 8 |
| /fender-guitars-serial-number-guide/ | desktop | 99 | 95 | 100 | 92 | 0.72 | 0.004 | 0 | 4,153 | 4,070 | 9 |
| /post/1952-fender-telecaster-authentication-guide/ | mobile | 71 | 96 | 100 | 92 | 14.41 | 0 | 0 | 3,378 | 3,335 | 19 |
| /post/1952-fender-telecaster-authentication-guide/ | desktop | 89 | 96 | 100 | 92 | 2.25 | 0 | 0 | 3,378 | 3,335 | 19 |

## What Is Driving The Numbers

- **Mobile LCP is the site's big problem: 8.8 to 17.3 seconds on four of the five pages.** The LCP element on the conversion pages is the hero (`section.tp-bnr`), which paints from a CSS `background-image`. CSS background images cannot take `fetchpriority` and are discovered late, after the stylesheet parses. On the blog post, the LCP element is the full-size hero image served without srcset. Desktop passes (0.7 to 2.3 s) because the unthrottled connection hides the oversized files; the slow 4G mobile profile exposes them.
- **CLS is effectively zero everywhere (0 to 0.004), in the lab.** The predicted layout-shift risk from dimensionless blog images did not show up in these runs, likely because images load slower than the viewport settles. Dimensions are still worth injecting in Prompt 5 for correctness and for field traffic on faster connections.
- **TBT is 0 ms on every run.** The site ships almost no JavaScript. Performance work is image work, not script work.
- **Best Practices 77 on / and /sell-my-fender-guitar/** comes almost entirely from `third-party-cookies` (the Instagram embeds and lite-youtube assets). /free-appraisal/ scores 96 (minor issues only) and the pages with no embeds score 100. Treat the embed cookie hit as a known cost of the GEO and social-proof decisions, not a regression.
- **SEO is 92 on every page, and 85 on /sell-my-fender-guitar/.** The shared deduction is the missing robots.txt (Prompt 1 fixes this everywhere at once). Sell-my-fender additionally fails `link-text` (generic anchor text) and `frame-title` (the Instagram embed iframes lack titles).
- **Image weight dominates total transfer on every page.** The Fender serial guide moves 4.0 MB of images on desktop (hot-linked, no WebP, no srcset) and the blog post moves 3.3 MB. These are the Prompt 4 and Prompt 5 targets; expect the biggest deltas there.

## Baseline Reference For Later Prompts

Prompt 5 (responsive images) and Prompt 8 (final pass) should re-run the same five URLs with the same Lighthouse version and compare against this table. Success looks like: mobile LCP under 2.5 s on the conversion pages, image KB cut by more than half on the serial guide and blog post, CLS staying at or near zero, and SEO moving to 95 or higher once robots.txt exists.
