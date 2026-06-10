# SEO V2 Baseline (Prompt 0)

Recorded: 2026-06-10. Branch `fable/seo-00-baseline`, branched from `origin/main` at `5c6da5d`.

Build state at baseline: `npm run build` green (89 pages), `npx astro check` 0 errors, 0 warnings, 44 hints.

## A. Raw `<img>` Tags In src/pages/**/*.astro

Total: **231** across 20 page files. (Matched on `<img\b`.)

| File | Count |
|---|---|
| src/pages/about-me.astro | 3 |
| src/pages/contact-me.astro | 2 |
| src/pages/fender-guitars-serial-number-guide.astro | 56 |
| src/pages/free-appraisal.astro | 5 |
| src/pages/gretsch-serial-number-lookup.astro | 12 |
| src/pages/guild-serial-number-lookup.astro | 3 |
| src/pages/how-to-read-gibson-serial-numbers.astro | 79 |
| src/pages/martin-serial-and-model-numbers.astro | 8 |
| src/pages/post/[slug].astro | 2 |
| src/pages/rickenbacker-serial-numbers.astro | 8 |
| src/pages/sell-a-guitar-collection.astro | 4 |
| src/pages/sell-my-fender-guitar.astro | 9 |
| src/pages/sell-my-gibson-guitar.astro | 8 |
| src/pages/sell-my-gretsch-guitar.astro | 3 |
| src/pages/sell-my-guild-guitar.astro | 1 |
| src/pages/sell-my-martin-guitar.astro | 10 |
| src/pages/sell-my-national-guitar.astro | 3 |
| src/pages/sell-my-rickenbacker-guitar.astro | 3 |
| src/pages/sell-your-vintage-dangelico-guitar-in-the-us.astro | 3 |
| src/pages/vintage-fender-amplifier-serial-numbers-how-to-find-the-year.astro | 9 |

Context (not part of the count above): src/components/**/*.astro has 4 raw `<img>` tags (src/components/Header.astro: 2, src/components/MoreThanGuitar.astro: 1, src/components/PostCard.astro: 1).

## B. Raw HTML `<img>` Tags In src/content/blog/**/*.md

Total: **212** across 19 posts.

| File | Count |
|---|---|
| src/content/blog/1966-gibson-es-335-authentication-guide.md | 27 |
| src/content/blog/fender-jazzmaster-evolution-guide-1958-1971.md | 27 |
| src/content/blog/gold-guard-fender-precision-bass.md | 19 |
| src/content/blog/1959-fender-telecaster-authentication-guide.md | 16 |
| src/content/blog/gibson-byrdland-authentication-guide.md | 16 |
| src/content/blog/1962-fender-stratocaster-authentication-guide.md | 12 |
| src/content/blog/1966-fender-stratocaster-authentication-guide.md | 12 |
| src/content/blog/gibson-les-paul-junior-guide.md | 12 |
| src/content/blog/1963-fender-stratocaster-authentication-guide.md | 11 |
| src/content/blog/1954-gibson-les-paul-goldtop-authentication-guide.md | 10 |
| src/content/blog/1973-fender-jazz-bass-vintera-iii.md | 9 |
| src/content/blog/vintage-fender-jaguar-guide.md | 9 |
| src/content/blog/how-the-year-of-manufacture-of-your-vintage-gibson-guitar-affects-its-price.md | 8 |
| src/content/blog/gibson-es-125-guide.md | 7 |
| src/content/blog/1968-gibson-es-335-guide.md | 5 |
| src/content/blog/complete-dot-neck-es-330-guide-1959-1962.md | 4 |
| src/content/blog/fender-pink-paisley-telecaster-guide.md | 4 |
| src/content/blog/best-online-platforms-sell-vintage-guitars.md | 2 |
| src/content/blog/how-to-sell-a-large-guitar-collection-every-option-honestly-explained.md | 2 |

## C. Markdown-Syntax Images In src/content/blog

Total: **172** across 24 posts. (Matched on `!\[...\](`.)

| File | Count |
|---|---|
| src/content/blog/1952-fender-precision-bass-guide.md | 21 |
| src/content/blog/1955-1958-tv-yellow-les-paul-special-guide.md | 18 |
| src/content/blog/complete-dot-neck-es-330-guide-1959-1962.md | 18 |
| src/content/blog/1952-fender-telecaster-authentication-guide.md | 16 |
| src/content/blog/1959-gibson-es-335-authentication-guide.md | 15 |
| src/content/blog/1956-les-paul-goldtop-authentication-guide.md | 14 |
| src/content/blog/martin-d18e-vs-d28e-authentication-guide.md | 10 |
| src/content/blog/1957-les-paul-goldtop-guide.md | 9 |
| src/content/blog/fender-pink-paisley-telecaster-guide.md | 7 |
| src/content/blog/gibson-l5-ces-value-guide.md | 6 |
| src/content/blog/identify-vintage-gibson-j45-j50-sj.md | 5 |
| src/content/blog/joesvintageguitarsaz-com-identify-gibson-lg-series.md | 5 |
| src/content/blog/1962-gibson-es-335-guide.md | 4 |
| src/content/blog/gretsch-6120-history-value.md | 4 |
| src/content/blog/blue-book-of-guitar-values-and-vintage-guitar-price-guide.md | 3 |
| src/content/blog/gibson-es-175-evolution-and-specifications.md | 3 |
| src/content/blog/gibson-shipping-totals-1948-1979.md | 3 |
| src/content/blog/vintage-epiphone-crestwood-value-history-guide.md | 3 |
| src/content/blog/hardtail-stratocaster-vintage-guide.md | 2 |
| src/content/blog/mistakes-to-avoid-when-selling-a-vintage-guitar.md | 2 |
| src/content/blog/brass-nut-vintage-guitar-tone.md | 1 |
| src/content/blog/how-to-determine-the-value-of-your-old-martin-acoustic-guitar.md | 1 |
| src/content/blog/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value.md | 1 |
| src/content/blog/what-to-consider-when-selling-a-vintage-guitar.md | 1 |

## D. Hot-Linked Image References

Literal grep `joesvintageguitarsaz.com/wp-content` in src/: **18** occurrences.

| File | Count |
|---|---|
| src/pages/about-me.astro | 1 |
| src/pages/fender-guitars-serial-number-guide.astro | 1 |
| src/pages/free-appraisal.astro | 1 |
| src/pages/guild-serial-number-lookup.astro | 1 |
| src/pages/index.astro | 1 |
| src/pages/sell-my-fender-guitar.astro | 2 |
| src/pages/sell-my-gibson-guitar.astro | 11 |

The literal count understates the true scope. Pages build image URLs from base constants. Counting `${IMG}/` and `${SITE_URL}/wp-content` template usages adds **274** indirect references:

| File | Count |
|---|---|
| src/pages/contact-me.astro | 4 |
| src/pages/fender-guitars-serial-number-guide.astro | 66 |
| src/pages/gretsch-serial-number-lookup.astro | 13 |
| src/pages/guild-serial-number-lookup.astro | 3 |
| src/pages/how-to-read-gibson-serial-numbers.astro | 82 |
| src/pages/martin-serial-and-model-numbers.astro | 9 |
| src/pages/rickenbacker-serial-numbers.astro | 9 |
| src/pages/sell-a-guitar-collection.astro | 9 |
| src/pages/sell-my-fender-guitar.astro | 16 |
| src/pages/sell-my-gretsch-guitar.astro | 8 |
| src/pages/sell-my-guild-guitar.astro | 2 |
| src/pages/sell-my-martin-guitar.astro | 18 |
| src/pages/sell-my-national-guitar.astro | 8 |
| src/pages/sell-my-rickenbacker-guitar.astro | 9 |
| src/pages/sell-your-vintage-dangelico-guitar-in-the-us.astro | 8 |
| src/pages/vintage-fender-amplifier-serial-numbers-how-to-find-the-year.astro | 10 |

Combined hot-link scope for Prompt 4: roughly 292 references (literal plus indirect), concentrated in the Gibson serial guide (82 indirect) and the Fender serial guide (66 indirect). Prompt 4 must resolve the base constants (`const IMG`, `HERO_BG`, `OG_IMAGE`, `${SITE_URL}/wp-content`) rather than chasing the literal 18.

## E. Dash Audit (Source Files Under src/)

Counted across text files in src/ (.astro, .md, .ts, .css and similar). Three binary image files matched dash bytes when read as UTF-8 (src/assets/images/bill-with-1966-fender-jaguar-lake-placid-blue-scaled.jpeg; src/assets/images/national-style-2-tenor-guitar-1-scaled.jpg; src/assets/images/Photo-1--scaled.jpg); they are excluded from the totals and table below as false positives.

| Kind | Count |
|---|---|
| Literal em dash (U+2014) | 493 |
| Literal en dash (U+2013) | 1045 |
| Entity forms (mdash, ndash, 8211, 8212, x2013, x2014) | 363 |
| **Total** | **1901** |

These are SOURCE counts. Rendered dist/ counts will differ: template strings multiply at build (the Martin serial page renders roughly 135 em dashes from one source line) and markdown entities render as single literal characters. Prompt 2 builds the detector that scans rendered output; same order of magnitude is the success signal, not an exact match.

Per-file table, sorted by total:

| File | Em (U+2014) | En (U+2013) | Entities | Total |
|---|---|---|---|---|
| src/pages/how-to-read-gibson-serial-numbers.astro | 101 | 17 | 295 | 413 |
| src/pages/fender-guitars-serial-number-guide.astro | 33 | 220 | 1 | 254 |
| src/pages/gretsch-serial-number-lookup.astro | 44 | 132 | 0 | 176 |
| src/pages/rickenbacker-serial-numbers.astro | 20 | 115 | 0 | 135 |
| src/content/blog/gibson-byrdland-authentication-guide.md | 0 | 78 | 0 | 78 |
| src/content/blog/fender-jazzmaster-evolution-guide-1958-1971.md | 0 | 59 | 0 | 59 |
| src/pages/sell-my-gibson-guitar.astro | 46 | 0 | 1 | 47 |
| src/pages/sell-my-fender-guitar.astro | 45 | 0 | 0 | 45 |
| src/content/blog/how-the-year-of-manufacture-of-your-vintage-gibson-guitar-affects-its-price.md | 0 | 40 | 0 | 40 |
| src/pages/sell-my-martin-guitar.astro | 35 | 1 | 3 | 39 |
| src/pages/guild-serial-number-lookup.astro | 3 | 30 | 1 | 34 |
| src/pages/martin-serial-and-model-numbers.astro | 12 | 22 | 0 | 34 |
| src/content/blog/1959-fender-telecaster-authentication-guide.md | 0 | 32 | 0 | 32 |
| src/content/blog/complete-dot-neck-es-330-guide-1959-1962.md | 0 | 28 | 0 | 28 |
| src/pages/vintage-gibson-les-paul-market-value-guide.astro | 0 | 0 | 28 | 28 |
| src/content/blog/gibson-es-125-guide.md | 0 | 25 | 0 | 25 |
| src/pages/vintage-fender-telecaster-value-guide.astro | 0 | 25 | 0 | 25 |
| src/content/blog/gibson-les-paul-junior-guide.md | 0 | 23 | 0 | 23 |
| src/data/guild-serial-data.ts | 9 | 14 | 0 | 23 |
| src/pages/vintage-fender-stratocaster-value-guide.astro | 2 | 19 | 2 | 23 |
| src/content/blog/1966-gibson-es-335-authentication-guide.md | 0 | 21 | 0 | 21 |
| src/pages/free-appraisal.astro | 11 | 10 | 0 | 21 |
| src/pages/sell-a-guitar-collection.astro | 19 | 2 | 0 | 21 |
| src/pages/martin-d-28-d-18-d-45-dreadnought-value-guide.astro | 0 | 0 | 20 | 20 |
| src/content/blog/1962-fender-stratocaster-authentication-guide.md | 0 | 17 | 0 | 17 |
| src/pages/about-me.astro | 17 | 0 | 0 | 17 |
| src/content/blog/gretsch-6120-history-value.md | 0 | 16 | 0 | 16 |
| src/content/blog/1955-1958-tv-yellow-les-paul-special-guide.md | 0 | 15 | 0 | 15 |
| src/content/blog/1954-gibson-les-paul-goldtop-authentication-guide.md | 0 | 13 | 0 | 13 |
| src/content/blog/joesvintageguitarsaz-com-identify-gibson-lg-series.md | 0 | 11 | 0 | 11 |
| src/pages/sell-my-guild-guitar.astro | 3 | 8 | 0 | 11 |
| src/components/FAQ.astro | 10 | 0 | 0 | 10 |
| src/components/Footer.astro | 10 | 0 | 0 | 10 |
| src/components/ClientStories.astro | 9 | 0 | 0 | 9 |
| src/content/blog/1968-gibson-es-335-guide.md | 0 | 9 | 0 | 9 |
| src/pages/sell-my-rickenbacker-guitar.astro | 8 | 0 | 1 | 9 |
| src/pages/vintage-fender-amplifier-serial-numbers-how-to-find-the-year.astro | 2 | 2 | 5 | 9 |
| src/content/blog/1952-fender-precision-bass-guide.md | 0 | 8 | 0 | 8 |
| src/content/blog/identify-vintage-gibson-j45-j50-sj.md | 0 | 8 | 0 | 8 |
| src/content/blog/gold-guard-fender-precision-bass.md | 0 | 6 | 0 | 6 |
| src/pages/sell-my-gretsch-guitar.astro | 5 | 0 | 1 | 6 |
| src/config/site.ts | 5 | 0 | 0 | 5 |
| src/pages/sell-an-amplifier-or-effect.astro | 4 | 0 | 1 | 5 |
| src/styles/global.css | 4 | 1 | 0 | 5 |
| src/components/ContactSection.astro | 4 | 0 | 0 | 4 |
| src/components/MoreThanGuitar.astro | 4 | 0 | 0 | 4 |
| src/content/blog/gibson-shipping-totals-1948-1979.md | 0 | 4 | 0 | 4 |
| src/components/Collections.astro | 3 | 0 | 0 | 3 |
| src/components/primitives/Button.astro | 3 | 0 | 0 | 3 |
| src/components/Testimonials.astro | 3 | 0 | 0 | 3 |
| src/content/blog/gibson-es-175-evolution-and-specifications.md | 0 | 3 | 0 | 3 |
| src/content/blog/how-to-sell-a-large-guitar-collection-every-option-honestly-explained.md | 0 | 3 | 0 | 3 |
| src/content/blog/vintage-epiphone-crestwood-value-history-guide.md | 0 | 3 | 0 | 3 |
| src/layouts/Layout.astro | 3 | 0 | 0 | 3 |
| src/pages/contact-me.astro | 3 | 0 | 0 | 3 |
| src/pages/sell-my-national-guitar.astro | 2 | 0 | 1 | 3 |
| src/pages/sell-your-vintage-dangelico-guitar-in-the-us.astro | 2 | 0 | 1 | 3 |
| src/components/WhatWeBuy.astro | 0 | 2 | 0 | 2 |
| src/pages/jvg-shipping-process.astro | 2 | 0 | 0 | 2 |
| src/scripts/contact-form.ts | 2 | 0 | 0 | 2 |
| src/components/AboutJoe.astro | 0 | 0 | 1 | 1 |
| src/components/MeetJoe.astro | 1 | 0 | 0 | 1 |
| src/components/primitives/ContactForm.astro | 1 | 0 | 0 | 1 |
| src/components/primitives/SectionHeader.astro | 1 | 0 | 0 | 1 |
| src/content/blog/1959-gibson-es-335-authentication-guide.md | 0 | 1 | 0 | 1 |
| src/content/blog/1962-gibson-es-335-guide.md | 0 | 1 | 0 | 1 |
| src/content/blog/hardtail-stratocaster-vintage-guide.md | 0 | 1 | 0 | 1 |
| src/lib/blog.ts | 1 | 0 | 0 | 1 |
| src/pages/jvg-shipping-process-2.astro | 1 | 0 | 0 | 1 |
| src/pages/vintage-fender-stratocaster-value-guide/1956.astro | 0 | 0 | 1 | 1 |

## F. JSON-LD Node Inventory

### Global Nodes From Layout.astro (Every Page)

Seven nodes injected as separate `<script type="application/ld+json">` blocks:

1. ProfessionalService (with aggregateRating, openingHoursSpecification, geo, contactPoint, bare-string logo)
2. WebSite (with potentialAction SearchAction targeting `${SITE_URL}/?s={search_term_string}`)
3. MusicStore+Organization (two-type array)
4. LocalBusiness
5. Place
6. Service (vintage guitar appraisal)
7. Service (vintage guitar purchasing)

### Per-Template Additions (Parsed From Built dist/ HTML)

Every JSON-LD block on all 89 pages parsed with JSON.parse: 0 parse errors. Routes grouped by identical top-level type signature. The shared global prefix (the 7 nodes above) is present on every route; the table lists what each template adds after it.

| Added Nodes (After The 7 Global Nodes) | Routes |
|---|---|
| ProfilePage | /about-me/ |
| BreadcrumbList, Blog | /blog/ |
| BreadcrumbList | /blog/page/2/, /blog/page/3/, /blog/page/4/ plus 14 more (17 total) |
| BreadcrumbList, ContactPage | /contact-me/ |
| Article, BreadcrumbList, FAQPage, WebApplication, WebPage, ImageObject | /fender-guitars-serial-number-guide/ |
| FAQPage | /free-appraisal/, / |
| BreadcrumbList, TechArticle, WebApplication, FAQPage | /gretsch-serial-number-lookup/ |
| BreadcrumbList, TechArticle, WebApplication | /guild-serial-number-lookup/ |
| BreadcrumbList, Article, HowTo, FAQPage, WebApplication, Person | /how-to-read-gibson-serial-numbers/ |
| (none) | /jvg-shipping-process/, /jvg-shipping-process-2/, /sitemap/, /thank-you/ |
| BreadcrumbList, Article | /martin-d-28-d-18-d-45-dreadnought-value-guide/, /martin-serial-and-model-numbers/, /sell-my-guild-guitar/ plus 5 more (8 total) |
| BreadcrumbList, BlogPosting | /post/1952-fender-precision-bass-guide/, /post/1952-fender-telecaster-authentication-guide/, /post/1954-gibson-les-paul-goldtop-authentication-guide/ plus 38 more (41 total) |
| BreadcrumbList, @graph[TechArticle,FAQPage] | /rickenbacker-serial-numbers/ |
| FAQPage, BreadcrumbList, Article | /sell-a-guitar-collection/, /sell-an-amplifier-or-effect/, /sell-my-fender-guitar/ plus 5 more (8 total) |
| BreadcrumbList, FAQPage | /sell-my-gibson-guitar/ |

Noteworthy for later prompts:

- The Gibson serial guide (/how-to-read-gibson-serial-numbers/) already emits a **HowTo** node plus a standalone Person node. Google dropped HowTo rich results in 2023; Prompt 6 says do not ADD HowTo, and should decide what to do with this existing one.
- The Fender serial guide already emits one **ImageObject** and a **WebPage** node, so "no ImageObject anywhere" holds for the publisher logo and BlogPosting.image but not literally site-wide.
- The Rickenbacker page nests TechArticle+FAQPage inside an @graph wrapper, unlike the other serial pages which emit flat blocks.
- /sell-my-gibson-guitar/ lacks the Article node its sibling sell pages have (it adds only BreadcrumbList+FAQPage).

## G. Route List From dist/ (Ground Truth For The Sitemap)

89 routes built. Robots state verified in the built HTML: /jvg-shipping-process/ and /jvg-shipping-process-2/ emit `noindex, follow`. **/thank-you/ currently emits `follow, index` (it is NOT noindex today, contrary to the prompt pack's special-case list).** Prompt 1 must exclude it from the sitemap and should flag whether to also set noIndex on the page.

- `/`
- `/about-me/`
- `/blog/`
- `/blog/page/2/`
- `/blog/page/3/`
- `/blog/page/4/`
- `/blog/page/5/`
- `/category/museum-original-owners/`
- `/category/serial-number-dating-guides/`
- `/category/specific-model-highlights/`
- `/category/specific-model-highlights/page/2/`
- `/category/specific-model-highlights/page/3/`
- `/category/specific-model-highlights/page/4/`
- `/category/uncategorized/`
- `/category/value-evaluation/`
- `/consignment/`
- `/contact-me/`
- `/fender-guitars-serial-number-guide/`
- `/free-appraisal/`
- `/gretsch-serial-number-lookup/`
- `/guild-serial-number-lookup/`
- `/how-to-read-gibson-serial-numbers/`
- `/jvg-shipping-process-2/`
- `/jvg-shipping-process/`
- `/martin-d-28-d-18-d-45-dreadnought-value-guide/`
- `/martin-serial-and-model-numbers/`
- `/post/1952-fender-precision-bass-guide/`
- `/post/1952-fender-telecaster-authentication-guide/`
- `/post/1954-gibson-les-paul-goldtop-authentication-guide/`
- `/post/1955-1958-tv-yellow-les-paul-special-guide/`
- `/post/1956-les-paul-goldtop-authentication-guide/`
- `/post/1957-les-paul-goldtop-guide/`
- `/post/1959-fender-telecaster-authentication-guide/`
- `/post/1959-gibson-es-335-authentication-guide/`
- `/post/1962-fender-stratocaster-authentication-guide/`
- `/post/1962-gibson-es-335-guide/`
- `/post/1963-fender-stratocaster-authentication-guide/`
- `/post/1966-fender-stratocaster-authentication-guide/`
- `/post/1966-gibson-es-335-authentication-guide/`
- `/post/1968-gibson-es-335-guide/`
- `/post/1973-fender-jazz-bass-vintera-iii/`
- `/post/best-online-platforms-sell-vintage-guitars/`
- `/post/blue-book-of-guitar-values-and-vintage-guitar-price-guide/`
- `/post/brass-nut-vintage-guitar-tone/`
- `/post/complete-dot-neck-es-330-guide-1959-1962/`
- `/post/fender-jazzmaster-evolution-guide-1958-1971/`
- `/post/fender-pink-paisley-telecaster-guide/`
- `/post/gibson-byrdland-authentication-guide/`
- `/post/gibson-es-125-guide/`
- `/post/gibson-es-175-evolution-and-specifications/`
- `/post/gibson-l5-ces-value-guide/`
- `/post/gibson-les-paul-junior-guide/`
- `/post/gibson-shipping-totals-1948-1979/`
- `/post/gold-guard-fender-precision-bass/`
- `/post/gretsch-6120-history-value/`
- `/post/hardtail-stratocaster-vintage-guide/`
- `/post/how-the-year-of-manufacture-of-your-vintage-gibson-guitar-affects-its-price/`
- `/post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/`
- `/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/`
- `/post/identify-vintage-gibson-j45-j50-sj/`
- `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/`
- `/post/joesvintageguitarsaz-com-identify-gibson-lg-series/`
- `/post/martin-d18e-vs-d28e-authentication-guide/`
- `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/`
- `/post/vintage-epiphone-crestwood-value-history-guide/`
- `/post/vintage-fender-jaguar-guide/`
- `/post/what-to-consider-when-selling-a-vintage-guitar/`
- `/privacy-policy/`
- `/refund_returns/`
- `/repair/`
- `/reverb-reviews/`
- `/rickenbacker-serial-numbers/`
- `/sell-a-guitar-collection/`
- `/sell-an-amplifier-or-effect/`
- `/sell-my-fender-guitar/`
- `/sell-my-gibson-guitar/`
- `/sell-my-gretsch-guitar/`
- `/sell-my-guild-guitar/`
- `/sell-my-martin-guitar/`
- `/sell-my-national-guitar/`
- `/sell-my-rickenbacker-guitar/`
- `/sell-your-vintage-dangelico-guitar-in-the-us/`
- `/sitemap/`
- `/thank-you/`
- `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/`
- `/vintage-fender-stratocaster-value-guide/`
- `/vintage-fender-stratocaster-value-guide/1956/`
- `/vintage-fender-telecaster-value-guide/`
- `/vintage-gibson-les-paul-market-value-guide/`
