# Joe's Vintage Guitars: SEO Audit V2 and Fable Execution Pack

**For:** Joe (to run with Fable 5, high mode)
**From:** Josh's Opus, side checked against Fable 5
**Date:** 2026-06-10
**Repo:** `joes-vintage-guitars` (Astro 6 + Tailwind 4, Cloudflare Pages)

---

## How To Use This Document

This has two parts.

- **Part A** is the analysis. It is the rough audit of the rebuild as it stands today, grounded in the actual source. Read it so you know the "why" behind each fix.
- **Part B** is a pack of eight prompts (Prompt 0 through Prompt 7). Paste them into Fable one at a time, in order. Each one re-checks the relevant area, then auto-executes the fixes on its own branch and opens a PR for Josh to merge. They are sequenced on purpose: later prompts depend on earlier ones landing first.

Everything in this pack uses free tools (Lighthouse, code analysis, and the repo's own audit scripts). No billable keyword, backlink, or rank-tracking APIs are part of this execution pack. The keyword, competitor, backlink, and Search Console analysis described in `reference/_seo-analysis-brief.md` is a separate, billable workstream and is out of scope here.

One ground rule before anything else: this is the pre-launch rebuild on the pages.dev preview. The real domain still serves the old WordPress site. Nothing here points DNS or cuts over. These are content and code fixes only.

---

# Part A: The Analysis (What Opus Found)

The rebuild is in good shape structurally. 89 pages, clean build, a real design system, a sensible global JSON-LD graph, and homepage components that already do responsive images correctly. The gaps fall into five buckets, matching the five things Josh asked for: performance and Lighthouse, image handling, schema, AI tells, and missed opportunities.

### A1. Images: Strong On The Homepage, Unoptimized Everywhere Else

The homepage components (`RecentPurchases`, `WhatWeBuy`, `AboutJoe`, and friends) use `astro:assets` `<Image>` with `widths` and `sizes`. Those get srcset, WebP, retina, and intrinsic width and height for free. That is the right pattern.

The problem is everything that is not a homepage component:

- **~231 raw `<img>` tags across the `.astro` reference and sell pages** (the Fender serial guide alone has 56, the Gibson guide 79). Raw `<img>` means no srcset, no WebP, no retina, and the browser ships a full-size file to a phone.
- **170 markdown-syntax images across 24 blog posts**, plus **212 raw HTML `<img>` across 19 blog posts**. The raw-HTML ones carry no `width` or `height`, which means layout shift (CLS) as they load.
- **Hot-linked images: far more than they first appear.** A literal grep for `joesvintageguitarsaz.com/wp-content` returns 18, but that undercounts by roughly 5x. The serial and sell pages build image URLs from a base constant (`const IMG = "https://www.joesvintageguitarsaz.com/wp-content/uploads"`, then `${IMG}/...`) and from `${SITE_URL}/wp-content/...`, which a literal grep cannot see. The true scope is **~100+ hot-linked image references** (66 on the Fender serial guide, 82 on the Gibson guide, plus `HERO_BG` and `OG_IMAGE` constants on the sell pages). All are cross-origin (uncached, slow), can't have dimensions inferred (CLS), and the `${SITE_URL}`-built ones will 404 the moment of cutover (SITE_URL is the cutover domain, and the new site has no `/wp-content/`). CLAUDE.md already flags hot-links as launch-blocking. The fix has to grep broadly and resolve the base constants, not chase the literal-18 number.
- **The blog hero is a raw `<img width="1200" height="630">` with no srcset** in `src/pages/post/[slug].astro`. A 1200px file goes to every 390px phone, and the hero is usually the LCP element, so this is a direct Core Web Vitals hit on all 41 posts.

**The catch that changes the whole approach:** every one of these images is either a `public/`-folder path (`/images/...`) or a remote hot-link. Astro's image pipeline never optimizes `public/` assets or remote URLs. That means the obvious one-line fix (turning on responsive images in `astro.config.mjs`) does nothing on its own. The images have to be relocated from `public/` into `src/assets/` first, so the pipeline can see them. That is why Prompt 4 (relocation) comes before Prompt 5 (responsive conversion).

`astro.config.mjs` today has no `site`, no integrations, and no `image` config at all.

### A2. Schema: Good Coverage, A Few Real Bugs, One Policy Cleanup

The global graph in `src/layouts/Layout.astro` is solid: ProfessionalService (with aggregateRating, opening hours, geo, contactPoint), WebSite, MusicStore + Organization, LocalBusiness, Place, and two Service nodes. Blog posts add BlogPosting and BreadcrumbList. Serial pages add Article, FAQPage, WebApplication, and BreadcrumbList.

Issues, in priority order:

1. **The WebSite SearchAction is broken.** It targets `${SITE_URL}/?s={search_term_string}`, which is WordPress's search endpoint. The static rebuild has no site search. The page advertises an action that does not exist. Google also retired the sitelinks search box in late 2024. Remove the `potentialAction`, keep the WebSite node. (`Layout.astro` lines 115 to 119.)
2. **No `ImageObject` anywhere.** The `logo` is a bare URL string (`Layout.astro:59`) and `BlogPosting.image` is a bare URL array (`[slug].astro:47`). Upgrading the publisher logo to an `ImageObject` with width and height satisfies Google's Article publisher-logo guidance for all 41 posts from one edit. This is the highest-leverage schema fix.
3. **Thin author E-E-A-T.** `BlogPosting.author` is `Person{name, url}` only. A single shared `Person` node for Joe Dampt, with `sameAs` (YouTube, Instagram, Facebook) and `image`, referenced from every post and serial-page Article author, adds author authority across ~47 pages from one node.
4. **`aggregateRating` cleanup, not propagation.** It currently lives only on ProfessionalService. The instinct to copy it onto LocalBusiness is wrong: self-marked-up `aggregateRating` on your own business is ineligible for star rich results under Google's self-serving-reviews policy, and the count is third-party (Google) sourced. Leave the existing one as inherited and inert, but do not duplicate it across nodes.
5. **No breadcrumbs on sell pages or value guides.** Blog and serial pages have BreadcrumbList; the commercial pages do not. Cheap to add.
6. **Entity fragmentation.** The same business appears as four-plus separate nodes. This was deliberate (it satisfies the `audit:live-diff` JSON-LD parity check against the live WP markup). Consolidating into one `@graph` with a single multi-typed node is the cleaner post-launch move, but it will intentionally break the parity check, so it is gated and optional in Prompt 6.

**Image "meta schema" (what Josh asked for), interpreted honestly:** the win is the publisher logo as `ImageObject`, `BlogPosting.image` as `ImageObject` with dimensions and caption, and verifying the OG image width/height/alt tags. Per-content-image `ImageObject` markup for all 400+ images is low ROI (no rich result consumes it). Image SEO for the content images is won by alt text, real dimensions, srcset, and descriptive filenames, which the image prompts handle.

**Traps to avoid:** do not add HowTo schema (Google dropped HowTo rich results in 2023). Do not add Product/Offer schema to value guides (no purchasable offer is a structured-data-policy risk, and the semantics are backwards since Joe buys rather than sells). FAQPage rich results have been limited to government and health sites since 2023; the existing FAQPage markup is harmless and may still feed AI answer engines, so keep it, but do not extend it expecting SERP stars.

### A3. Technical SEO: The Plumbing Is Missing

- No `@astrojs/sitemap`, so no XML sitemap (only the human-readable `/sitemap/`).
- No `robots.txt`.
- No `_redirects` (Cloudflare Pages 301s). Matters at cutover for WordPress-only URLs (feeds, tag and date archives, `?p=` links, attachment pages).
- No `_headers` (cache and security headers).
- No `404.astro`. Right now an unknown URL falls back to the homepage with a 200, which is exactly how the broken Gretsch page hid as "live" last week.
- Favicon: `favicon.png` exists and is referenced, but there is no `apple-touch-icon` and the existing `favicon.svg` is not linked.

### A4. AI Tells: The Detector Has To Run On Rendered Output

A source count today finds roughly 1,900 em and en dashes (about 495 literal em, 1,046 literal en, and 363 entity-encoded `&ndash;`/`&mdash;` that a literal-character search missed). The earlier "~2,300" figure was a looser count, and rendered totals differ from source because some template strings multiply at build (the Martin serial page renders ~135 em dashes from a single source line). The lesson: the detector has to scan rendered output (the built `dist/`), not source, and it has to check the metadata surfaces (meta descriptions, OG descriptions, JSON-LD `description` fields, image `alt` text), not just body copy. Those metadata fields are where mechanical de-AI passes forget to look, and they are exactly what shows up in search results and AI citations. Prompt 2 builds that detector before Prompt 3 runs the cleanup, so "done" is defined by a tool, not by eyeballing.

### A5. Missed Opportunities

- A shared `Person` node for Joe (E-E-A-T across the whole site, see A2).
- `VideoObject` for the YouTube embeds (the Meet Joe videos, the free-appraisal intro). Feasible but lowest priority: the thumbnail URL is free, but `uploadDate` and `duration` need a one-time lookup and should never be fabricated. Only worth it as a short hardcode.
- Breadcrumbs on the commercial pages.
- A reusable `check-copy.mjs` that becomes a permanent CI gate against AI tells, not a one-time cleanup.
- Confirm the 24/7 `openingHoursSpecification` matches the real Google Business Profile hours (one question for Josh).
- Duplicate pages: `jvg-shipping-process.astro` and `jvg-shipping-process-2.astro` both exist and are both noindex. Keep them out of the sitemap; decide later if one should be removed.

---

# Part B: The Fable Prompt Pack

## Global Instructions (Applies To Every Prompt Below)

Paste this block once at the top of your session, then run the prompts in order.

```
You are working on the joes-vintage-guitars Astro 6 + Tailwind 4 repo. We are doing
a sequenced SEO and performance hardening pass. Follow these rules for every task:

CONFLICT RESOLUTION ORDER (when sources disagree):
  1. The instructions in this prompt.
  2. CLAUDE.md and the project Decision log (visual-parity rules).
  3. The live WordPress site.
  If this prompt tells you to do something that breaks a CLAUDE.md rule or the
  audit:live-diff check (for example, schema consolidation), this prompt wins, BUT you
  must add a Decision-log row in CLAUDE.md explaining the deviation, and call it out in
  the PR description.

GIT WORKFLOW (non-negotiable):
  - Start every prompt with: git fetch origin, then branch from origin/main.
    Joe's other AI lands PRs concurrently, so origin/main moves. Always re-fetch.
  - Branch naming: fable/seo-<NN>-<short-slug> (NN = the prompt number).
  - One prompt = one branch = one PR. Never push to main. Never merge. Josh merges.
  - Before the next prompt, confirm the previous PR is merged, then re-fetch. If it is
    NOT merged yet, stop and tell Josh; do not branch off the unmerged branch and do not
    start the next prompt (later prompts depend on earlier ones being on main).

EXPECTED-STATE SAFETY CHECK (this is the most important rule):
  Each prompt describes the current state of the files it touches (line numbers,
  variable names, counts). Before editing, verify reality matches that description.
  If what you find is materially different (someone changed the file since this was
  written), STOP and report what you see. Do NOT improvise a fix on top of drift.

SCOPE CONTROL:
  - Each prompt lists "Allowed to touch" globs. Before committing, run
    git diff --stat and confirm every changed file is inside those globs. Anything
    outside = abort and report.
  - Prefer a codemod (a small script in scripts/) over hand-editing when a change
    repeats more than ~20 times. Commit the script alongside its output so the
    reviewer audits ~80 lines instead of thousands of lines of churn.

VERIFICATION (every prompt ends with these, plus its own acceptance criteria):
  - npm run build  -> must succeed
  - npx astro check -> 0 errors
  - npm run audit:a11y -- <changed-url> --viewport both  -> when anything visual moved
  - State the result honestly. If a check fails, say so and stop; do not paper over it.

WRITING RULES (any prose you write or edit, including PR descriptions and copy):
  - Zero em dashes and en dashes, including entity forms. Use commas, periods, colons,
    parentheses, or separate sentences.
  - Title Case headings (capitalize every significant word).
  - No AI-tell vocabulary (leverage, seamless, delve, robust, navigate, dive, landscape,
    realm, journey, tapestry, crucial, pivotal, comprehensive, holistic, and similar).
  - No "not just X, it's Y" constructions. No throat-clearing transitions.
  - Match Joe's warm, plainspoken voice.

SPECIAL-CASE PAGES (do not break these):
  - /reverb-reviews/ renders all 2,191 reviews statically on purpose (a GEO decision).
    Expect very high element and word counts there. Never trim it.
  - jvg-shipping-process.astro and jvg-shipping-process-2.astro are noindex. Keep them
    out of the sitemap.
  - thank-you.astro is noindex. Keep it out of the sitemap.
```

---

## Prompt 0: Baseline And Instrumentation

```
GOAL: Establish a verifiable baseline so later prompts can prove their deltas. No fixes yet.

READ FIRST: package.json, astro.config.mjs, src/layouts/Layout.astro, CLAUDE.md
(the Decision log section).

BRANCH: fable/seo-00-baseline

STEPS:
1. git fetch origin && branch from origin/main. npm ci. npm run build. npx astro check.
   Confirm both are clean. If not, STOP and report.
2. Create reports/seo-v2/baseline.md and record, with exact numbers:
   a. Raw <img> count in src/pages/**/*.astro (grep -roE '<img\b' | wc -l).
   b. Raw <img> count in src/content/blog/**/*.md.
   c. Markdown-syntax image count in src/content/blog (grep -roE '!\[[^]]*\]\(').
   d. Hot-linked image count (grep -rc 'joesvintageguitarsaz.com/wp-content' src/).
   e. Dash audit: literal em (U+2014), literal en (U+2013), and entity forms
      (&mdash; &ndash; &#8211; &#8212; &#x2013; &#x2014;) counted across src/, broken
      down by file. Save the per-file table.
   f. JSON-LD node inventory: list every @type emitted by Layout.astro and by each
      page template.
   g. Full list of routes the build produces (from dist/), so the sitemap prompt has a
      ground-truth URL list.
3. Run a Lighthouse baseline (mobile AND desktop) against the pages.dev preview for these
   five URLs: homepage, /sell-my-fender-guitar/, /free-appraisal/,
   /fender-guitars-serial-number-guide/, and one blog post (/post/<any-slug>/).
   Use the Chrome DevTools MCP performance trace or a Lighthouse run. Record for each:
   Performance, Accessibility, Best Practices, SEO scores, plus LCP, CLS, TBT/INP, and
   total transferred bytes + image bytes. Save to reports/seo-v2/lighthouse-baseline.md.
   If you cannot run Lighthouse in this environment, say so plainly and record whatever
   CWV data you can get from a performance trace instead.

ALLOWED TO TOUCH: reports/seo-v2/** only.

NOTE: the working tree already has dozens of legacy untracked files under reports/. Stage
ONLY your new files: `git add reports/seo-v2/` (never `git add -A` or `git add reports/`),
so the PR does not drag legacy reports along.

ACCEPTANCE: reports/seo-v2/baseline.md and lighthouse-baseline.md exist and are populated
with real numbers. Open a PR titled "SEO v2 Prompt 0: baseline metrics". Paste the key
numbers into the PR body. git diff --stat shows only files under reports/seo-v2/.
```

---

## Prompt 1: Technical SEO Infrastructure

```
GOAL: Add the missing technical-SEO plumbing: sitemap, robots, redirects, headers, 404,
favicons, and remove the broken SearchAction.

READ FIRST: astro.config.mjs, src/config/site.ts (SITE_URL), src/layouts/Layout.astro
(lines ~105-120 for the WebSite/SearchAction, and the favicon links ~239), public/ root,
reports/seo-v2/baseline.md (the route list).

EXPECTED CURRENT STATE: astro.config.mjs has no `site` and no integrations. There is no
public/robots.txt, public/_redirects, public/_headers, or src/pages/404.astro.
Layout.astro's WebSite schema has potentialAction.SearchAction targeting
`${SITE_URL}/?s={search_term_string}`. If any of this is already present, report and skip
that item.

BRANCH: fable/seo-01-technical-infra

STEPS:
1. astro.config.mjs: add `site: "https://www.joesvintageguitarsaz.com"` (import from
   src/config/site.ts if cleaner). Add @astrojs/sitemap (npm i @astrojs/sitemap, add to
   integrations). Configure the sitemap `filter` to EXCLUDE: /thank-you/,
   /jvg-shipping-process/, /jvg-shipping-process-2/, and any other noindex route. Confirm
   the route list against reports/seo-v2/baseline.md.
2. public/robots.txt: allow all, point Sitemap: to https://www.joesvintageguitarsaz.com/sitemap-index.xml.
   Disallow nothing sensitive beyond defaults. (Remember: this serves on pages.dev now but
   the URL inside should be the cutover domain, matching SITE_URL.)
3. public/_redirects: add 301s for WordPress-only URL shapes that have no equivalent here:
   /comments/feed/, tag and date archives (/tag/*, /20xx/*), and attachment pages. Top-level
   slugs and /post/<slug>/ were preserved, so do NOT add redirects that would loop. Keep
   this conservative; list every rule in the PR body with its reasoning.
   TWO TRAPS:
   (a) Do NOT 301 /feed/ to nowhere. Layout.astro line ~267 advertises /feed/ as the RSS
       alternate on EVERY page. Either add @astrojs/rss to generate a real feed at /feed/
       and keep the alternate link, OR remove that alternate link from Layout.astro (one
       line, allowed below) and 301 /feed/. Pick one and say which in the PR.
   (b) Cloudflare Pages _redirects cannot match query strings, so `?p=123` style links
       are NOT redirectable here. Skip them in _redirects and note them as a cutover item
       (they need a Pages Function or Cloudflare Bulk Redirects). Do not pretend to handle them.
4. public/_headers: add sane caching (long cache + immutable for /images/*, /fonts/*,
   /_astro/*; short for HTML) and baseline security headers (X-Content-Type-Options,
   Referrer-Policy, a minimal Permissions-Policy). Do NOT add a CSP that could break the
   lite-youtube CDN or Instagram embeds without testing.
5. src/pages/404.astro: build a real 404 using Layout + Header + Footer chrome, a short
   plainspoken message, a search-free set of helpful links (Home, Sell My Guitar, Blog,
   Contact, the serial-number guides), and noIndex. Match site styling.
6. Layout.astro: REMOVE the WebSite potentialAction/SearchAction block entirely. Keep the
   WebSite node and all other schema intact.
7. Favicons in Layout.astro: keep the PNG, ADD a <link rel="icon" type="image/svg+xml"
   href="/favicon.svg"> (the file already exists in public/) and a <link rel="apple-touch-icon">
   (generate a 180x180 PNG into public/ if one does not exist).

ALLOWED TO TOUCH: astro.config.mjs, package.json + lockfile, public/robots.txt,
public/_redirects, public/_headers, public/ favicon files, src/pages/404.astro,
src/layouts/Layout.astro (SearchAction, favicon links, and the RSS alternate line only).
If you choose @astrojs/rss for the /feed/ trap, also: a new src/pages/feed.xml.ts (or
rss.xml.ts) file. Nothing else.

ACCEPTANCE:
  - npm run build produces dist/sitemap-index.xml and dist/sitemap-0.xml. Open them and
    confirm the excluded routes are absent and all indexable routes are present.
  - dist/404.html exists and renders the chrome.
  - grep the built homepage HTML: the SearchAction string `?s=` is gone; the WebSite node
    still present.
  - npx astro check = 0 errors. npm run build green.
  - PR titled "SEO v2 Prompt 1: technical infrastructure". PR body lists every _redirects
    rule with reasoning and notes the SearchAction removal.
```

---

## Prompt 2: Build The check-copy.mjs AI-Tell Detector

```
GOAL: Build a reusable, deterministic AI-tell + dash detector that scans the BUILT dist/
output (rendered text, not source), wired as `npm run audit:copy`. This must exist before
the copy cleanup so "done" is tool-defined. Do NOT clean copy in this prompt; only build
and validate the tool.

READ FIRST: scripts/audit-live-diff.mjs and scripts/audit-a11y.mjs (match their style,
CLI arg handling, and report format). cheerio is already a devDependency.

BRANCH: fable/seo-02-check-copy

STEPS:
1. Create scripts/check-copy.mjs. It runs after a build and walks dist/**/*.html. For each
   page, extract the visible text PLUS these often-missed surfaces: img alt, link title,
   meta description, og:description, twitter:description, and all string values inside
   JSON-LD <script> blocks. EXCLUDE <script> (except parsed JSON-LD), <style>, <code>,
   and <pre> contents.
2. Two tiers of checks:

   HARD-FAIL (exit non-zero, prints file + matched text + context):
     a. Dashes: U+2014, U+2013, U+2012, U+2015, U+2212, the entities &mdash; &ndash;
        &#8211; &#8212; &#x2013; &#x2014;, and " -- " used as prose punctuation.
     b. High-precision lexicon (word-boundary, case-insensitive): delve, tapestry, realm,
        embark, "testament to", "treasure trove", "look no further", "game-changer",
        "unlock the", "elevate your", boasts, nestled, plethora, myriad.
     c. Pattern tells (regex): /not (just|only) [^.]{0,60}(it'?s|but)/i ("not just X,
        it's Y"); /whether you(')?re [^.]{0,40} or /i; paragraph-initial
        /^(in conclusion|in summary|ultimately,|moreover,|furthermore,)/i;
        /it'?s (important|worth) not(ing|e)/i; /in the world of/i; /when it comes to/i.
     d. Title Case heading check on h1 and h2 ONLY: tokenize the text; flag any significant
        word (>3 letters, not in a small-words list: the,for,to,and,or,in,on,by,with,a,an,
        of,at,as,but,nor,per,via) that is lowercase. (h3 stays in the WARN tier; model names
        and serial strings in h3 generate too much allowlist churn to gate on.)
     e. Emoji in prose.

   WARN (report only, never gates): leverage, seamless, robust, comprehensive, holistic,
     navigate, landscape, journey, crucial, pivotal, "dive into"; h3 Title Case (same check
     as (d) but report-only). Skip sentence-length-burstiness and cross-page
     duplicate-sentence detection (fiddly, report-only, nobody acts on them). If template
     bleed is a concern later, a one-off grep is enough; do not build it into the gate.

3. Allowlist: support reports/seo-v2/copy-allowlist.json keyed by {url, phrase} for
   adjudicated exceptions (brand tokens like "lite-youtube", real product names, etc.).
4. Output: a Markdown report to reports/seo-v2/check-copy-<timestamp>.md with per-file
   hard-fail and warn tables and total counts. Exit non-zero if any hard-fail remains.
5. Add "audit:copy": "node scripts/check-copy.mjs" to package.json scripts.
6. WIRE IT AS A REAL GATE (this is what makes it permanent, not a one-off): add a GitHub
   Actions workflow at .github/workflows/check-copy.yml that runs npm ci, npm run build,
   and npm run audit:copy on every PR, failing the check on any hard-fail. If Josh prefers
   no CI, at minimum add a "verify" script that chains build + audit:copy + astro check and
   say in the PR that it must be run before merge. State which you did.
7. VALIDATE the tool without fixing content: run npm run build && npm run audit:copy.
   Expect it to find roughly 1,900 dash hard-fails (give or take a few hundred). Do NOT
   treat a number that differs from the Prompt 0 SOURCE count as "materially different" and
   stop: rendered dist counts legitimately differ from source counts because template
   strings multiply at build (the Martin page renders ~135 em dashes from one source line)
   while markdown entities render as single literal characters. Same order of magnitude is
   the success signal here. Save that first report. Do NOT change any copy yet.

ALLOWED TO TOUCH: scripts/check-copy.mjs, package.json, .github/workflows/check-copy.yml,
reports/seo-v2/**, reports/seo-v2/copy-allowlist.json. Nothing in src/.

ACCEPTANCE: npm run audit:copy runs, produces a report, and exits non-zero because the
known dashes are still present (that proves detection works). The CI workflow (or verify
script) exists. PR titled "SEO v2 Prompt 2: check-copy detector". PR body shows the total
hard-fail count it found (roughly 1,900) and notes how it relates to the Prompt 0 source count.
```

---

## Prompt 3: AI-Tell And Zero-Dash Copy Pass

```
GOAL: Drive `npm run audit:copy` to zero hard-fails across the whole site, in Joe's voice,
without losing any content.

READ FIRST: the latest reports/seo-v2/check-copy-*.md, the Prompt 0 per-file dash table,
and feedback memory: zero dashes, Title Case headings, no AI-tell vocab, no "not just X
it's Y", vary sentence length, warm plainspoken voice.

EXPECTED CURRENT STATE: audit:copy reports a large number of hard-fails (mostly dashes,
including entity-encoded ones, concentrated in blog content and a couple of serial-page
template strings). Note: the Martin serial page builds ~130 em dashes from one or two
template-string lines; those are one-line fixes.

BRANCH: fable/seo-03-copy-pass

SUBSTITUTION POLICY (apply consistently; never delete content words):
  - Numeric/year ranges "1956–1958" -> "1956 to 1958".
  - Score/measurement ranges "$30,000–$50,000" -> "$30,000 to $50,000".
  - Parenthetical em dash aside -> comma pair, or split into two sentences, whichever
    reads more naturally in Joe's voice.
  - Em dash used as a colon -> colon.
  - List/compound en dashes in prose -> rephrase.
  - Entity forms (&ndash; &mdash;) -> same rules, applied to the rendered character.
  - Sentence-case headings -> Title Case.
  - AI-tell words -> plain replacements that keep the meaning.

STEPS:
1. For the dash fixes, which repeat thousands of times, WRITE A CODEMOD
   (scripts/fix-dashes.mjs) that applies the numeric-range and entity rules deterministically
   to src/content/blog/**/*.md and the flagged template strings, leaving genuine
   content untouched. Hand-edit only the cases the codemod cannot safely resolve
   (parenthetical asides, headings). Commit the codemod with its output.
2. Fix Title Case headings, the lexicon hits, and the pattern tells by hand (these need
   judgment and are far fewer).
3. Apply the same rules to metadata: meta descriptions, excerpts, JSON-LD description
   fields in frontmatter, and image alt text flagged by the detector.
4. Re-run npm run build && npm run audit:copy until hard-fails = 0. Triage the WARN tier:
   fix what is clearly an AI tell, allowlist what is a real brand term or false positive
   (with a note in copy-allowlist.json).

ALLOWED TO TOUCH: src/content/blog/**, the specific src/pages/*.astro and
src/components/*.astro lines flagged by the detector, scripts/fix-dashes.mjs,
reports/seo-v2/**, reports/seo-v2/copy-allowlist.json.

DO NOT: alter the meaning of any sentence, remove any review or testimonial, touch
/reverb-reviews/ content, or change any URL or slug.

ACCEPTANCE: npm run audit:copy exits 0 (zero hard-fails). npm run build green, astro check
0 errors. PR titled "SEO v2 Prompt 3: AI-tell and zero-dash copy pass". PR body includes
the before/after hard-fail counts per file and 5 representative before/after diffs so the
human review is a quick skim, not a re-audit.
```

---

## Prompt 4: Image Asset Relocation And Hot-Link Kill

```
GOAL: Move content images out of public/ into src/assets/ so Astro's pipeline can optimize
them, and replace all 18 cross-origin hot-links with local files. This is the prerequisite
for responsive images (Prompt 5). No <img> -> <Image> conversion yet; that is Prompt 5.

READ FIRST: reports/seo-v2/baseline.md (image counts), CLAUDE.md "Image migration"
section, src/content.config.ts (heroImage and ogImage are z.string() today).

EXPECTED CURRENT STATE: content images are referenced as public paths (/images/...) in
.astro pages and blog markdown. Hot-links are MORE than the literal grep shows: a plain
grep for `joesvintageguitarsaz.com/wp-content` returns ~18, but pages build URLs from base
constants (`const IMG = "...wp-content/uploads"`, then `${IMG}/...`; also `HERO_BG`,
`OG_IMAGE`) and from `${SITE_URL}/wp-content/...`. True scope is ~100+ references (the
Fender serial guide ~66, the Gibson guide ~82). There are zero src/assets imports in pages
or blog content. If you find images already in src/assets being imported, report and adjust
scope.

BRANCH: fable/seo-04-image-relocation

STEPS:
1. Find ALL hot-links, not the literal 18: grep `wp-content` broadly across src/, AND find
   the base constants (`const IMG`, `HERO_BG`, `OG_IMAGE`, any `${SITE_URL}/wp-content`).
   Download every referenced image locally and rewrite the source (including the base
   constants) to local paths. Verify each returns 200 before, and resolves after. This is
   launch-blocking, so do it even if you defer the rest.
2. Inventory which /images/ files are CONTENT images (inside article bodies, galleries,
   blog posts) versus CHROME images used in CSS url() backgrounds. Chrome/background
   images that are referenced from CSS must stay in public/ (the pipeline cannot rewrite
   CSS url() paths). Content images move to src/assets/images/<page-or-blog>/.
3. For blog markdown: write a codemod (scripts/relocate-blog-images.mjs). RELOCATE ONLY
   files referenced by MARKDOWN-SYNTAX images `![](...)`. Files referenced by raw HTML
   `<img>` inside .md must STAY in public/: Astro never processes raw HTML in markdown, so
   moving those files out of public/ silently breaks them. (Prompt 5 injects dimensions on
   those in place.) Move the markdown-syntax files into src/assets/blog/<slug>/ and rewrite
   their paths to relative ./ imports.
   HEADS UP: src/content/blog/complete-dot-neck-es-330-guide-1959-1962.md has ~4
   migration-mangled img tags (a URL split into bogus attributes like `<img 2026="" ...`).
   Codemods will choke or skip them. Hand-fix those tags first, separately.
4. Blog hero (heroImage/ogImage are z.string() in content.config.ts). Pick ONE: (a) switch
   them to the image() schema helper, or (b) build a small glob-map shim in src/lib/ that
   resolves a string path to ImageMetadata. EITHER WAY you must update the consumers, which
   are NOT optional and live in: src/pages/post/[slug].astro (the `data.ogImage.startsWith`
   logic ~L25-29 and `src={data.heroImage}` ~L90), src/components/PostCard.astro (~L17-20),
   and the blog index/category pages if they reference heroImage. Update all of them in
   this same PR or the build breaks. Document the approach in the PR.
5. Re-run the build. Confirm no broken image references. audit:live-diff only HEAD-checks
   EXTERNAL URLs, so it will NOT catch a broken internal /images/ path: additionally,
   assert that every `/images/...` and `src/assets` reference in the built dist/ resolves
   to a real file (a quick script that reads dist HTML and stat()s each local image path).

ALLOWED TO TOUCH: public/images/** (moves), src/assets/** (new), src/lib/** (the shim if
used), src/content/blog/** (path rewrites + es-330 hand fix), all .astro pages that hold
hot-links or the IMG/HERO_BG/OG_IMAGE constants, src/pages/post/[slug].astro,
src/components/PostCard.astro, src/pages/blog/**, src/pages/category/**,
src/content.config.ts (if switching to image() helper), scripts/relocate-blog-images.mjs.

DO NOT: move images referenced from CSS url() (chrome/backgrounds: the pipeline cannot
rewrite CSS url() paths, so those stay in public/). Do not move files referenced by raw
HTML <img> in markdown. Do not change alt text here (improve it in Prompt 5/6). Do not
convert <img> to <Image> yet.

ACCEPTANCE: zero hot-links remain (broad grep `wp-content` src/ = 0, including the base
constants). Every local image path in dist/ resolves to a real file (your stat() check
passes). npm run build green, astro check 0 errors. PR titled "SEO v2 Prompt 4: image
relocation and hot-link kill". PR body states total hot-links localized (expect ~100+),
how many files moved to src/assets vs stayed in public/ (and why), and the heroImage
approach chosen.
```

---

## Prompt 5: Responsive And Retina Images

```
GOAL: Give content images srcset, WebP, retina, and intrinsic dimensions so mobile stops
downloading desktop-size files and CLS goes to ~0. Depends on Prompt 4 having landed.

READ FIRST: astro.config.mjs (no image config yet), src/pages/post/[slug].astro (the blog
hero, lines ~87-97), src/components/RecentPurchases.astro (the correct existing <Image>
pattern with widths + sizes), CLAUDE.md "Image gallery primitive" section (the
.jvg-img--uniform and .blog-prose img rules that may conflict with responsive layout).

EXPECTED CURRENT STATE: after Prompt 4, content images live in src/assets and are imported.
astro.config.mjs still has no `image` block. The blog hero is a raw <img width=1200
height=630>. ~231 raw <img> remain in .astro pages and 212 raw HTML <img> remain in blog
markdown.

IMPORTANT ASTRO 6 BEHAVIOR (do not skip): setting image.layout in astro.config applies
ONLY to <Image>/<Picture> components and markdown-SYNTAX images that resolve to src/ files.
It does NOT touch hand-authored raw <img> (in .astro or in raw HTML inside .md). When
`layout` is set, Astro generates srcset from image.breakpoints and IGNORES the widths,
densities, and sizes props. So: use `layout` + per-image rendered `width`; use
densities={[1,2]} only for fixed-size non-responsive images (like the 120px author avatar).
Verify the exact current default behavior against the Astro docs at execution time.

BRANCH: fable/seo-05-responsive-images

STEPS (in ROI order):
1. Blog hero first: it is template-controlled, so one edit fixes the LCP image on all 41
   posts. Resolve heroImage via whichever mechanism Prompt 4's PR documented (image()
   helper or the glob-map shim) and render with <Image layout="constrained" priority
   width={1200} ...>. Verify intrinsic width/height are emitted (no CLS) and the file
   served to mobile is downsized.
2. Turn on the pipeline: add image: { layout: "constrained" } to astro.config (plus
   responsiveStyles if the current Astro default requires opting in; verify in docs).
   This now benefits markdown-syntax images (170 of them) automatically.
   REGRESSION GUARD: a global layout makes Astro IGNORE the widths/sizes props on the 9
   existing <Image> uses that A1 praised, including the Header and Footer logo that render
   on every page (Header.astro ~L15, Footer.astro ~L12), switching their srcsets to the
   global breakpoints and injecting responsive styles. For those fixed-size chrome images,
   pass layout="none" (or otherwise pin them) and spot-check that their rendered markup is
   unchanged. Then spot-check the homepage components, not only the gallery pages.
3. Convert raw <img> in .astro pages to <Image> in batches, one page (or small group) per
   commit, so review is tractable. Fold in the existing gallery primitives. Watch for the
   .jvg-img--uniform fixed-220px + object-fit:cover rules and the .blog-prose img rules
   fighting the responsive layout styles; after converting a gallery-heavy page (the
   Fender or Gibson serial guide), do a visual pass at 1920 and 390 and run audit:a11y.
4. Raw HTML <img> inside blog markdown (212 of them, no dimensions): the cheap, high-value
   fix is a codemod (scripts/fix-blog-img-dims.mjs) that reads each referenced file's real
   pixel dimensions and injects width, height, loading="lazy", decoding="async". This
   removes CLS for ~$0. (Full srcset/WebP for these would require converting those posts
   to .mdx with a components={{ img: BlogImage }} mapping; treat that as OPTIONAL and only
   if Josh wants WebP on below-the-fold body images. Note the tradeoff in the PR, do not do
   it silently.)
5. Re-run Lighthouse (mobile + desktop) on the same five URLs from Prompt 0. Compare LCP,
   CLS, and image bytes to baseline. Record in reports/seo-v2/lighthouse-after-images.md.

ALLOWED TO TOUCH: astro.config.mjs, src/pages/**/*.astro, src/components/**/*.astro,
src/content/blog/** (dimension injection only), scripts/fix-blog-img-dims.mjs,
reports/seo-v2/**.

ACCEPTANCE: blog hero and converted pages emit srcset + width/height (spot-check dist
HTML). LCP and CLS improve versus baseline on the five test URLs (report the numbers).
npm run build green, astro check 0 errors, audit:a11y clean on changed pages (no new
violations versus the documented footer-contrast baseline). audit:live-diff <Image>-related
diffs are pre-authorized (URL shapes change because Astro hashes optimized assets); note
that in the PR. PR titled "SEO v2 Prompt 5: responsive and retina images".
```

---

## Prompt 6: Schema Page-By-Page Upgrade And Image Meta Schema

```
GOAL: Fix the schema bugs, add the high-value image and author structured data, and add
breadcrumbs to the commercial pages, without adding spam-risk markup.

READ FIRST: src/layouts/Layout.astro (the full JSON-LD section, ~lines 51-220),
src/pages/post/[slug].astro (BlogPosting + BreadcrumbList), one serial page
(fender-guitars-serial-number-guide.astro) for its Article schema, CLAUDE.md Decision-log
rows about the deliberate multi-node schema split and the audit:live-diff JSON-LD matcher.

EXPECTED CURRENT STATE: logo is a bare URL string (Layout.astro:59). BlogPosting.image is a
bare URL array ([slug].astro:47). author is Person{name,url} only. No ImageObject anywhere.
No VideoObject. Breadcrumbs only on blog + serial pages. The SearchAction may already be
removed by Prompt 1 (verify; if so, skip that item).

BRANCH: fable/seo-06-schema

STEPS (do the safe, high-value items; the consolidation is optional and gated):
1. Publisher logo -> ImageObject: change the `logo` string to
   { "@type": "ImageObject", url, width, height } using the real logo dimensions. This
   improves the publisher logo signal for all 41 posts at once.
2. BlogPosting.image -> ImageObject(s) with width and height (and caption where available)
   instead of the bare URL array. (Optional, mark clearly: also providing 1x1/4x3/16x9
   crops mostly helps Google Discover.)
3. Add a single shared Person node for Joe Dampt (sameAs: YouTube, Instagram, Facebook;
   image: Joe's headshot as ImageObject; jobTitle; worksFor -> the business @id). Reference
   it as the author from BlogPosting and from the serial-page Article schemas. One node,
   author authority across ~47 pages.
4. Add BreadcrumbList to the sell pages and value guides (Home > [section] > page), matching
   the pattern already used on blog/serial pages.
5. Remove the WebSite SearchAction if Prompt 1 did not already (verify first).
6. VideoObject (OPTIONAL, only if it is a quick hardcode): for the Meet Joe and
   free-appraisal embeds, add VideoObject with name, description, thumbnailUrl
   (https://i.ytimg.com/vi/<id>/hqdefault.jpg), and a REAL uploadDate + duration looked up
   once from YouTube. Never fabricate uploadDate or duration; if you cannot get them, skip
   the VideoObject and note it.
7. Fix the OG image dimensions (they are populated but WRONG on blog posts): Layout.astro
   defaults ogImageWidth/Height to 1200x1200, and src/pages/post/[slug].astro never
   overrides them, but blog heroes are 1200x630. All 41 posts currently emit the wrong
   og:image:width/height. Pass the real dimensions per blog post (or derive them from the
   resolved hero image). Confirm og:image:alt is populated everywhere.

DO NOT:
  - Add HowTo schema (Google dropped HowTo rich results).
  - Add Product or Offer schema to value guides (no purchasable offer = policy risk, and
    Joe buys rather than sells).
  - Copy aggregateRating onto LocalBusiness/MusicStore (self-serving-review policy;
    duplicating adds risk for zero gain). Leave the existing one as is.
  - Extend FAQPage to new pages expecting SERP stars (gov/health only since 2023); existing
    markup stays.

OPTIONAL, GATED (only if Josh greenlights in the PR thread): consolidate the four-plus
business nodes into one @graph with a single multi-typed node
(["MusicStore","ProfessionalService"]) carrying logo/sameAs/geo/hours, referenced by
everything else. This WILL break the audit:live-diff JSON-LD parity check by design. If you
do it, pre-authorize that diff, add a Decision-log row in CLAUDE.md, and flag it loudly in
the PR. If unsure, leave the graph as is and just propose it in the PR body.

ALLOWED TO TOUCH: src/layouts/Layout.astro, src/pages/post/[slug].astro, the sell pages and
value-guide pages (breadcrumbs), the serial pages (author reference), src/config/site.ts
(if you add Joe's sameAs/jobTitle data there), reports/seo-v2/**.

ACCEPTANCE: extract JSON-LD from the built dist/ for the homepage, a blog post, a sell page,
and a serial page; JSON.parse each block (must be valid); assert the new ImageObject, Person,
and BreadcrumbList nodes are present and the SearchAction is gone. Note in the PR body that
Josh should run Google's Rich Results Test on one of each page type (it cannot run cold here).
npm run build green, astro check 0 errors. PR titled "SEO v2 Prompt 6: schema and image meta".
```

---

## Prompt 7: Full Lighthouse, Core Web Vitals, And Accessibility Final Pass

```
GOAL: Run a full Lighthouse and CWV pass across the key page types now that images and
schema are fixed, fix any remaining regressions, and confirm the accessibility baseline.

READ FIRST: reports/seo-v2/lighthouse-baseline.md and lighthouse-after-images.md, CLAUDE.md
"Launch audit checklist" (the WCAG 2.2 AA and target-score expectations).

BRANCH: fable/seo-07-lighthouse-cwv

STEPS:
1. Run Lighthouse mobile AND desktop on a representative URL of EACH page type:
   homepage (conversion), /sell-my-fender-guitar/ (conversion), /free-appraisal/ (heavy
   reference), /fender-guitars-serial-number-guide/ (reference + interactive tool), one
   value guide, one blog post, and /reverb-reviews/ (the 2,191-review GEO page, expect it
   to be heavy; measure but do not trim). Capture Performance, Accessibility, Best
   Practices, SEO, LCP, CLS, TBT/INP, and image bytes for each, at 1920 and 390.
2. Compare against the Prompt 0 baseline. For any URL with LCP > 2.5s, CLS > 0.1, or a
   Performance regression, diagnose with a performance trace and fix the specific cause
   (a non-priority LCP image, a missing dimension, a render-blocking resource, an
   unoptimized font load). Document each fix.
3. Accessibility: run npm run audit:a11y -- <url> --include-tags wcag22aa --viewport both
   on each page type. Fix any NEW violations. The pre-existing footer copyright-link
   contrast issues are a documented matches-live baseline; leave them unless Josh asks.
4. Targets to confirm (state actual numbers, do not claim "passing" without them):
   Accessibility >= 95, Best Practices = 100, SEO >= 95, Performance as high as the content
   allows, LCP < 2.5s, CLS < 0.1 on the conversion pages.
5. Write the final report: reports/seo-v2/lighthouse-final.md with a baseline-vs-final
   table for every URL and a short note on anything that could not hit target and why
   (for example, /reverb-reviews/ is intentionally heavy).
6. Final copy re-scan: run npm run build && npm run audit:copy. Prompts 1 (404 prose),
   5 (any captions), and 6 (schema descriptions, alt text) all wrote new prose AFTER the
   Prompt 3 de-dash pass, so re-confirm zero hard-fails. Fix any that slipped in.

ALLOWED TO TOUCH: whatever specific files a diagnosed regression requires (state each in
the PR), reports/seo-v2/**. If a fix would touch more than a couple of files, stop and
report rather than expanding scope silently.

ACCEPTANCE: lighthouse-final.md shows the before/after table with real numbers and the
targets met (or an honest explanation where not). npm run build green, astro check 0 errors,
npm run audit:copy exits 0. PR titled "SEO v2 Prompt 7: Lighthouse and CWV final pass".
```

---

## After The Pack

Once these seven PRs are merged, the rebuild has: an XML sitemap, robots, redirects,
cache and security headers, a real 404, optimized and responsive images with no hot-links,
a clean and validated schema graph with proper image and author markup, a permanent AI-tell
CI gate, and measured Core Web Vitals.

What is still deliberately NOT in this pack, because it is billable and needs Josh's cost
sign-off first (see reference/_seo-analysis-brief.md): real Search Console query analysis,
keyword and competitor research, the backlink profile and must-preserve-at-cutover list,
GEO / AI-visibility tracking (Ahrefs Brand Radar), and the domain cutover checklist itself.
Those are a separate session.

One open question for Josh before Prompt 6: do the real Google Business Profile hours match
the 24/7 openingHoursSpecification currently in the schema? If not, that is a one-line fix
worth making while the schema is open.
```
