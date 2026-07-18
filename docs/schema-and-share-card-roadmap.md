# SEO Roadmap: Schema + Social Share Cards

Source: sitewide audit run 2026-07-17 (JSON-LD schema + OpenGraph/Twitter tags + featured/share images). This is the tracked work list. Each item has an **Owner** tag so pieces can be delegated:

- **[code]** — a code change in this repo (a dev, or Joe's Claude, can implement from the description).
- **[joe]** — needs Joe's input, photos, or a decision (video dates, share-card design choices).
- **[image]** — image production (crop/resize/design a share card); scriptable by MFWD or done by Joe.

Priority: **P1** (do first, biggest impact) · **P2** (real value, second wave) · **P3** (polish / optional).

> **Preserve these deliberate decisions — do NOT reverse while doing this work:** no `aggregateRating` anywhere (self-rating risk); one business node (`ProfessionalService` with `additionalType: [LocalBusiness, MusicStore]`, do not re-split); no `SearchAction` on `WebSite`; Reverb reviews page keeps Review markup stripped on purpose.

---

## Fast summary — what's likely to go to Joe

Best candidates to hand back: the **share-card images** (Joe shoots everything, so he can supply/approve 1200×630 cards), the **real video upload dates + durations** for the VideoObject work, and the **thin-copy backfills** (descriptions/FAQs on the value + serial pages he knows best). The pure code plumbing (sitewide breadcrumbs, the VideoObject helper, the broken `@id`) is cleaner for a dev.

---

## Workstream A — Schema (JSON-LD)

Foundation is strong: every page emits `ProfessionalService` + `WebSite` + `Person` (Joe) + 2× `Service` from `src/layouts/Layout.astro`. The gaps below are consistency + a few bugs.

### P1

| ID | Item | Owner | Where | Fix |
|---|---|---|---|---|
| A1 | **BreadcrumbList sitewide, auto-generated** | [code] | `src/layouts/Layout.astro` | Build BreadcrumbList from `Astro.url.pathname` (skip root) and emit globally. Today it's hand-authored on ~34 pages and **missing on about-me and free-appraisal**. After adding, delete the ~34 duplicated hand-authored blocks. Biggest rich-result win per effort; ends the drift. |
| A2 | **VideoObject on every page that embeds a video** | [code] + [joe] | `src/lib/video.ts` (new helper) + pages | Only sell-fender/sell-gibson have it. **11+ indexable pages embed a Meet-Joe or demo video with none:** index (2 videos), free-appraisal, how-to-read-gibson-serial-numbers, martin-serial-and-model-numbers, sell-a-guitar-collection (3), sell-my-martin/gretsch/guild/rickenbacker/national, sell-your-vintage-dangelico. Reuse the exact field set already proven at `sell-my-fender-guitar.astro:183`. **[joe]:** supply real `uploadDate` + `duration` for video IDs `XrlMW385NMM`, `oxvMHi23bZc`, `WGF-pL6GB38`, `uSu-Ld-xgnI`, and the collection demos (do NOT fabricate these). |
| A3 | **Fix broken `@id` on contact-me** | [code] | `contact-me.astro:35` | `ContactPage.mainEntity` points at `.../#organization`, which does not exist. Change to the real business `@id`: `https://www.joesvintageguitarsaz.com/`. |

### P2

| ID | Item | Owner | Where | Fix |
|---|---|---|---|---|
| A4 | **Rickenbacker page to parity** | [code] | `rickenbacker-serial-numbers.astro`, `reference/rsn-jsonld-page.json` | It has a working decoder but **no WebApplication, no FAQPage, no HowTo**, and its `author`/`publisher` are inline nodes not referencing the shared `#person` / business `@id`. Add the missing nodes and repoint author/publisher to the shared `@id`s. |
| A5 | **Repair page: add FAQPage** | [code] | `repair.astro` | Renders a visible 7-question `<FAQ>` with no schema. Build `faqSchema` from the existing `faqs` array (same pattern as every sibling page). |
| A6 | **Backfill thin Article nodes** | [code] + [joe] | martin-serial-and-model-numbers, vintage-fender-amplifier-serial-numbers…, all 5 value guides | Add `description`, `image`, `datePublished`, `dateModified` where missing. Add `dateModified` to Gretsch/Guild guides. **[joe]** if new descriptions are wanted. |
| A7 | **FAQPage consistency on value guides** | [code] + [joe] | vintage-fender-telecaster-value-guide, vintage-fender-stratocaster-value-guide/1956 | Strat / Les Paul / Martin-dreadnought value guides have FAQPage; Telecaster + Strat-1956 do not. Add a `faqs` array + schema (**[joe]** for the Q&A copy), or confirm intentional omission. |
| A8 | **Dataset schema on serial + value lookup tables** | [code] | serial guides (Fender/Gibson/Martin/Gretsch/Guild/Rickenbacker/amp) + value guides | The large serial-number and value tables are strong `Dataset` candidates (`name`, `description`, `creator` `@id`, `license`, `variableMeasured`, `temporalCoverage`). Uncontested AI-citation / SERP lane. Start with the Fender guide's 11 serial tables + the Rickenbacker year/month tables. |

### P3

| ID | Item | Owner | Where | Fix |
|---|---|---|---|---|
| A9 | HowTo on Fender + Gretsch serial guides | [code] | fender + gretsch guides | Mirror the tool HowTo already on Gibson/Martin/Guild for cross-guide consistency. |
| A10 | CollectionPage + ItemList on index pages | [code] | blog/index, blog/page/[page], category/* | List the posts as `ItemList`/`itemListElement`; add a `blogPost` array to the `Blog` node. |
| A11 | BlogPosting: `keywords` + image fallback | [code] | `post/[slug].astro` | Populate `keywords` from `data.tags`; give imageless posts a default `image` (site logo or default card) so they stay article-image eligible. |
| A12 | Consignment `Service` node | [code] | consignment.astro | Consignment isn't among the 2 global Service types; add a page-appropriate `Service`. |
| A13 | Harden Fender-guide schema image URLs | [code] | `fender-guitars-serial-number-guide.astro:342,357,365`, `src/lib/images.ts` | `Article.image` / `WebPage.primaryImageOfPage` / standalone `ImageObject` use root-relative, build-hashed `/_astro/…webp` paths (unstable across builds, and a different file than the OG image). Wrap in `${SITE_URL}` and prefer a stable path. |
| A14 | ProfilePage/Person same-`@id` divergence | [code] | `about-me.astro:14-40` vs `Layout.astro:147-181` | Both declare `#person` with conflicting `jobTitle`/`knowsAbout`. Let the global node own the canonical props; make `ProfilePage.mainEntity` a bare `{"@id"}` reference. |

---

## Workstream B — Social Share Cards + Featured Images

**The core problem:** almost every share card is the wrong shape. Share images should be **1200×630 (1.91:1)**. The default and ~20 pages use a **1200×1200 square**, and pages that set their own image still inherit a hardcoded 1200×1200 declaration regardless of the real file. Square/portrait images center-crop badly on Facebook, X, and LinkedIn.

### P1

| ID | Item | Owner | Where | Fix |
|---|---|---|---|---|
| B1 | **Real 1200×630 default share card** | [image] + [code] | `public/images/homepage-featured-image.jpg`, `Layout.astro:36,38-39` | Replace the square default with a proper 1200×630 branded card and set the Layout defaults to 1200/630. Fixes the homepage **plus ~20 fallback routes** in one move. |
| B2 | **Fix the two broken page cards** | [image] + [code] | sell-my-fender-guitar, sell-my-rickenbacker-guitar | `/sell-my-fender-guitar/` OG image is a **339×386 transparent PNG** (tiny, portrait, and it trips the hardcoded `image/jpeg` type at `Layout.astro:258`). `/sell-my-rickenbacker-guitar/` is a **250×148 thumbnail**. Replace both with 1200×630 JPEGs. |
| B3 | **Declare real OG image dimensions per page** | [code] | all non-blog pages + `Layout.astro:255-256` | 13 non-square page cards all falsely claim 1200×1200. Have each page pass real `ogImageWidth`/`ogImageHeight`, or centralize dimension-derivation the way the blog template already does at `post/[slug].astro:111-112`. |

### P2

| ID | Item | Owner | Where | Fix |
|---|---|---|---|---|
| B4 | **Downsize 4 oversized sell-* OG images** | [image] | sell-guild (6240×4160, 2.2MB), sell-gretsch (6240×4160, 1.8MB), sell-dangelico (6240×4160, 1.8MB), sell-national (5472×3648, 1.35MB) | Resize to ~1200×630 cards. They render but are wasteful for scrapers and mis-declared as square. |
| B5 | **Re-crop 7 square page cards to 1200×630** | [image] | about-me, contact-me, free-appraisal, sell-gibson, sell-collection, sell-martin (+ homepage default from B1) | All currently 1200×1200. Re-crop/redesign to 1.91:1. |
| B6 | **Dedicated cards for the 4 value guides** | [image] | Strat / Tele / Les Paul / Martin-dreadnought value guides | Commercial SEO pages currently sharing the generic square fallback; give each a relevant 1200×630 card. |
| B7 | **Fix 5 portrait blog heroes (share crop)** | [image] + [joe] | 1959-gibson-es-355, 1967-fender-stratocaster-authentication-guide, gibson-es-345, gibson-l5-ces-value-guide, 1973-fender-jazz-bass-vintera-iii | Portrait (0.67–0.75 ratio) crops worst of all. Provide a 1200×630 `ogImage` distinct from the portrait hero, or re-crop. |

### P3

| ID | Item | Owner | Where | Fix |
|---|---|---|---|---|
| B8 | Fix 2 sub-1200px blog heroes | [image] | brass-nut-vintage-guitar-tone (1024×559), how-to-sell-a-large-guitar-collection… (988×730) | Regenerate at ≥1200px wide. |
| B9 | ~48 landscape 3:2 blog heroes | [image] | src/assets/blog/** | Only mildly crop (1.5 ratio vs 1.91). Optional: add per-post 1200×630 `ogImage`. Low urgency. |
| B10 | `og:image:type` derived from extension | [code] | `Layout.astro:258` | Hardcoded `image/jpeg`; only wrong today for the sell-fender PNG (fixed by B2), but derive it to be safe. |
| B11 | Consistent absolute OG URLs | [code] | about-me:160, free-appraisal:211, sell-gibson:91, guild:56 | 4 pages hardcode `https://…/images/og/…` instead of `${SITE_URL}${assetSrc(...)}`. All resolve 200 today; cosmetic. |
| B12 | Twitter `site`/`creator` + `article:author` | [code] | `Layout.astro:262-267` | Skip `twitter:site`/`creator` (Joe has no X account). Optionally add `article:author` = `${SITE_URL}/about-me/` on blog posts. |

---

## Suggested sequencing

1. **PR A (code, P1 schema):** A1 breadcrumbs + A2 VideoObject helper + A3 contact-me fix. High impact, deterministic.
2. **PR B (P1 images):** B1 default card + B2 broken cards + B3 real dimensions.
3. **Hand to Joe:** the video dates/durations (A2), the value-guide FAQ copy (A7), and share-card design/approval (B1/B5/B6/B7) — these need his content and eye.
4. **Second wave:** remaining P2 (A4–A8, B4–B7), then P3 as polish.

All P1 items are self-contained and safe to ship incrementally.
