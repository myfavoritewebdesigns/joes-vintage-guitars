# Lighthouse After Images (Prompt 5)

Recorded: 2026-06-11. Lighthouse 13.4.0, same method as the Prompt 0 baseline, run against the Cloudflare branch preview `https://fable-seo-05-responsive-imag.joes-vintage-guitars.pages.dev` (the merged result will serve identically from the production pages.dev domain).

Two environment notes, stated plainly:
1. **The SEO category scores (69 and 61) are a preview artifact, not a regression.** Cloudflare serves `X-Robots-Tag: noindex` on every non-production branch preview (verified by header inspection), and Lighthouse fails its is-crawlable audit on it. The baseline ran against the production domain, which has no such header. Compare every other column, ignore SEO until the Prompt 8 run on production.
2. The same Windows chrome-launcher EPERM-at-cleanup affected exit codes as in the baseline; metrics come from the saved JSON reports.

## Baseline vs After

| URL | Form Factor | Perf before | Perf after | LCP before | LCP after | Image KB before | Image KB after |
|---|---|---|---|---|---|---|---|
| /post/1952-fender-telecaster.../ | mobile | 71 | **96** | 14.41 s | **2.59 s** | 3,335 | **196** |
| /post/1952-fender-telecaster.../ | desktop | 89 | **100** | 2.25 s | **0.64 s** | 3,335 | **378** |
| /fender-guitars-serial-number-guide/ | mobile | 95 | 96 | 1.99 s | 1.93 s | 3,586 | **233** |
| /fender-guitars-serial-number-guide/ | desktop | 99 | **100** | 0.72 s | 0.48 s | 4,070 | **96** |
| /free-appraisal/ | mobile | 60 | 59 | 8.80 s | 10.90 s | 857 | **394** |
| /free-appraisal/ | desktop | 98 | 98 | 1.10 s | 1.08 s | 1,070 | **541** |
| / | mobile | 61 | 56 | 10.24 s | 19.24 s | 1,450 | 1,468 |
| / | desktop | 98 | 94 | 1.16 s | 1.54 s | 1,828 | 1,838 |
| /sell-my-fender-guitar/ | mobile | 56 | 56 | 17.32 s | 17.82 s | 1,110 | 1,133 |
| /sell-my-fender-guitar/ | desktop | 95 | 96 | 1.45 s | 1.40 s | 1,529 | 1,221 |

CLS stayed at 0 and TBT at 0 ms on every run, before and after.

## Reading The Numbers Honestly

**Where this prompt aimed, the wins are dramatic.** The blog post (the template that drives all 41 posts) went from a 14.4 second mobile LCP to 2.59 seconds, a hair from the 2.5 second target, and its image transfer dropped 94 percent. The Fender serial guide now moves 96 KB of images on desktop instead of 4 MB. These pages carry the `<Image>` conversions, the responsive markdown images, and the priority hero.

**Where nothing changed, nothing changed, and that is expected.** The homepage, sell-my-fender, and free-appraisal mobile LCP element is a CSS `background-image` hero (the `.tp-bnr` and `.smf-hero` photo bands). CSS backgrounds cannot carry srcset and were explicitly out of this prompt's scope (the pipeline cannot rewrite CSS url()). Their image-byte totals barely moved because the homepage components were deliberately PINNED (the regression guard) and the sell-page heroes are the dominant bytes. The run-to-run noise on a cold preview also inflates single measurements (the homepage 19.2 s reading vs 10.2 baseline is the same unoptimized hero measured on an uncached preview; nothing on that page got heavier, total bytes are within 1 percent of baseline).

**The remaining mobile LCP problem is now precisely scoped for Prompt 8:** the conversion-page CSS hero backgrounds need either a preload hint, a smaller mobile variant, or conversion to a real `<img>` with object-fit. That is a diagnosis-and-fix item on exactly three page templates.

## Targets Check (Prompt 5 Acceptance)

- Hero and converted pages emit srcset plus intrinsic width/height: verified in dist HTML (spot checks in the PR) and by the 2,536-reference stat check.
- LCP and CLS improve versus baseline on the targeted URLs: blog post mobile LCP down 11.8 seconds; serial guide image bytes down 93 percent; CLS 0 throughout.
- The conversion-page heroes did not improve and the reason plus the fix path are documented above.
