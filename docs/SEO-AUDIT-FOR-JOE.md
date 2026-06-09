# Joe's Vintage Guitars: SEO And Copy Fix Plan

Prepared for Joe's AI assistant to execute. Based on `main` at commit `de38661`.

## How To Use This Document

Work top to bottom. The **Site-Wide Fixes** come first because they are the biggest wins for the fewest edits. Then go page by page.

Three ground rules for the whole job:

1. **Leave customer reviews and testimonials exactly as written.** Those are real quotes and count as social proof. Only edit Joe's own copy (headings, intros, body text, FAQ answers Joe wrote, titles, and meta descriptions).
2. **After each batch of edits, run `npm run build` and confirm it finishes with zero errors** before moving on.
3. **Follow the three copy rules below in any new text you write, too.**

## The Three Copy Rules (Apply Everywhere)

1. **Zero em-dashes (—) and en-dashes (–).** This includes the HTML entity forms `&mdash;`, `&ndash;`, `&#8212;`, and `&#8211;`. An em-dash inside a sentence becomes a comma, a period, or parentheses. A number or year range becomes the word "to" (or a plain hyphen in a tight table cell where "to" is too wide). Leave normal in-word hyphens alone (Pre-CBS, D-28, P-90, F-plate, ES-335).
2. **Headings in Title Case.** Capitalize every major word. Not sentence case.
3. **No AI-tell vocabulary and no "not just X, it's Y" construction.** Avoid: leverage, seamless, delve, robust, elevate, unlock, "navigate" used figuratively, "in today's market", "deep dive", "look no further", "rest assured", "when it comes to", "a myriad of", "treasure trove", "dive into". And never write "it's not just a X, it's a Y"; say the plain thing instead.

---

# Site-Wide Fixes (Do These First)

## 1. The Dash Sweep (The Single Biggest Job)

The "zero dashes" rule is violated heavily across the site, and the earlier de-AI pass missed a large chunk of it because it searched for the literal `—` and `–` characters and skipped the **HTML-entity** versions.

Current count across the source:

- **492 literal em-dashes (—)** and **1,046 literal en-dashes (–)** in 67 files.
- **425 more** in the blog markdown (almost all en-dash ranges).
- **336 `&ndash;` plus 27 `&mdash;` entity-encoded dashes** that a literal-character search does not catch.

That is roughly **2,300 dashes total.** Do not try to fix them one at a time. Use this order:

**Step A: the entity forms (the ones the last pass missed).** Find-and-replace across the whole project:

- `&ndash;` between two numbers or years becomes ` to ` (for example `1965&ndash;1970` becomes `1965 to 1970`).
- `&mdash;` becomes a colon, a comma, or "=" depending on context (in the Gibson decoder rows like `<b>2</b> &mdash; 1952`, use a colon: `<b>2</b>: 1952`).

**Step B: en-dash number and year ranges (the bulk).** These live mostly in the serial-number tables, the value-guide price tables, and the era guides. Use a regex pass that only touches a digit-or-year on each side of the dash, so it cannot harm a real hyphen:

- Pattern: a digit, optional spaces, an en-dash `–`, optional spaces, a digit.
- Replace the en-dash with ` to ` in prose, eyebrows, badges, and headings.
- Replace it with a plain hyphen `-` inside tight table cells where "to" would break the layout.
- For dollar ranges, "to" reads best: `$55,000–$75,000` becomes `$55,000 to $75,000`.

**Step C: the source-level one-liners (highest leverage).** A few pages generate hundreds of dashes from a single template string. Fix the source, not the output:

- `src/pages/martin-serial-and-model-numbers.astro` **line 67**: `range: \`${r.a === 0 ? "0000" : r.a} — ${r.b}\`` builds the em-dash into every one of the 127 serial rows. Change the ` — ` to ` - ` (or ` to `). Same fix on **line 298** for the Navojoa table. One edit, about 130 dashes gone.

**Step D: the prose em-dashes (the real AI-tells).** These are fewer but matter most because they read as machine-written. They cluster in section headings and captions on the serial pages, and a few scattered spots. The page-by-page section lists the exact ones. Note: an em-dash inside a `// code comment` does not render and does not count, skip those.

When you are done, re-grep for `—`, `–`, `&mdash;`, and `&ndash;` and confirm the only hits left are inside code comments.

## 2. Complete The Global LocalBusiness Schema (`src/layouts/Layout.astro`)

This one edit improves every page at once. The global JSON-LD is rich, but the rating, social profiles, hours, and logo all live only on the `ProfessionalService` node. The `LocalBusiness` node is the one most likely to earn the star-rating rich result, and right now it is thin. Add to `localBusinessSchema`:

- `aggregateRating` (the same block used on the ProfessionalService node).
- `sameAs: socialSameAs`.
- `image: \`${SITE_URL}/images/joes-vintage-guitars-logo.jpg\``.
- the `openingHoursSpecification` array.

Also: **verify `ratingCount: "405"` is the real, current Google review count.** It is asserted on every page, and a number that does not match the live profile can suppress the rich result.

Optional: flip the Layout default `<title>` to keyword-first, `We Buy Vintage Guitars Nationwide | Joe's Vintage Guitars` (56 chars), so the homepage and any page without its own title lead with the keyword.

## 3. Fix Broken Internal Links

Two real dead-link problems:

- **Gibson serial page** (`how-to-read-gibson-serial-numbers.astro`) links to `/vintage-guitar-appraisal/` twice. That route does not exist on the rebuilt site. Change both to `/free-appraisal/`. Also make the one absolute `https://www.joesvintageguitarsaz.com/sell-my-gibson-guitar/` link relative: `/sell-my-gibson-guitar/`.
- **Blog posts: the `/post/` prefix bug (about 15 posts).** Many post bodies link to the serial and value guides as if they were blog posts, so they 404. The guides are root pages. Find-and-replace across `src/content/blog/`:
  - `/post/how-to-read-gibson-serial-numbers/` becomes `/how-to-read-gibson-serial-numbers/`
  - `/post/fender-guitars-serial-number-guide/` becomes `/fender-guitars-serial-number-guide/`
  - `/post/how-to-identify-the-manufacture-date-of-a-gretsch-guitar/` becomes `/gretsch-serial-number-lookup/`
  - Leave real blog-to-blog links alone (for example `/post/gibson-shipping-totals-1948-1979/` is a real post). Quick check: if a `/post/...` target has no matching file in `src/content/blog/`, it is one of these broken root-page links.

## 4. Titles And Meta Descriptions

- **Trim the titles that will truncate in Google** (over ~60 chars): the four value guides, the 1956 child, the Martin dreadnought (82 chars), and the blog index. The page sections give the exact rewrites. The fastest one: on Martin dreadnought, drop "Dreadnought" from the title and keep it in the H1.
- **Fix inconsistent branding in titles.** Three sell titles shout the brand in all caps (`Sell My FENDER Guitar`, `Sell My GUILD Guitar`, `Sell My RICKENBACKER Guitar`), and about five write "Joes" without the apostrophe. Standardize to `Sell Your Vintage [Brand] Guitar | Joe's Vintage Guitars` with a proper apostrophe and the word "Vintage."
- **sell-my-fender meta description is about 210 chars** and will truncate. Trim to ~157.
- **Blog post frontmatter: cap the title brand suffix and trim long meta descriptions.** In `src/pages/post/[slug].astro`, only append ` | Joe's Vintage Guitars` when the post title is 45 chars or shorter, otherwise use the bare title. And in the markdown frontmatter, many posts set `metaDescription` equal to a 300 to 480 char excerpt; trim every `metaDescription` to 150 to 160 chars with the keyword in the first 120. The excerpt can stay long.

## 5. Recurring Copy Fixes

These patterns repeat across several pages, so handle them as a set:

- **"not just X, it's Y":** Gibson sell page (2 instances), Martin sell page (2 instances), and the 1959 ES-335 blog post. Rewrite each plainly. The page sections give the exact lines.
- **"in today's market":** the D'Angelico sell page, plus two blog posts (`1973-fender-jazz-bass-vintera-iii.md`, `gibson-shipping-totals-1948-1979.md`). Change to "on the current market" or "right now."
- **The recurring Meet-Joe subtitle** `Professional Buyer and Seasoned Collector of Vintage Guitars` is in sentence case on four sell-brand pages (Gretsch, National, Rickenbacker, D'Angelico). Title Case it: `Professional Buyer And Seasoned Collector Of Vintage Guitars`.
- **"deep dive" / "deep-dive":** free-appraisal page (2 instances), the Fender serial page, and the `specific-model-highlights` category description in `src/lib/blog.ts`. Replace with "a close look" or "looked closely."

## 6. Internal Linking To The Money Pages

Several pages do not link the pages that actually convert. Tighten these so link equity flows to `/free-appraisal/` and the sell pages:

- **No `/free-appraisal/` link at all:** Gibson sell page, Gretsch serial page, the Fender-amp serial page. Add one to each.
- **Dead-end pages:** `/consignment/` links nowhere except its CTA buttons, and `/reverb-reviews/` only links off-site. Add in-body links to `/free-appraisal/`, `/about-me/`, and a sell page.
- **Add "Related Guides" blocks** to the Martin, Guild, and Gretsch serial pages (only Rickenbacker has one) so the serial-number cluster cross-links.
- **Add the three brand sell pages** (`/sell-my-fender-guitar/`, `/sell-my-gibson-guitar/`, `/sell-my-martin-guitar/`) to the footer menu so every page links to the highest-value commercial pages, not just the header dropdown.

## 7. Reverb Reviews: The GEO Decision

The current `/reverb-reviews/` page was rebuilt to **link out to Reverb** (a "2,000+" stat and a button) instead of rendering the reviews on the page. The problem: Reverb's review feed is not crawlable, so as built, Google and AI answer engines see almost nothing on that page. The full archive of verified reviews is real, high-trust, keyword-rich content (every review names a guitar model), and the only way search engines and AI models ever index it is to render it as static HTML on this page.

Recommendation: render the full review set on the page (the prior build of this page did exactly that, with all 2,191 reviews as static cards). If you keep the link-out version, at least add the on-page improvements the audit found: internal links to `/free-appraisal/` and a sell page, one keyword-bearing H2 above the body, and an `AggregateRating` tied to the business.

---

# Page-By-Page Fixes

## Homepage And Conversion Core

### `/`  — src/pages/index.astro
**SEO**
- Title: keep. `Joe's Vintage Guitars | We Buy Vintage Guitars Nationwide` (54 chars). Brand-first is acceptable for a homepage and the primary keyword "Vintage Guitars" sits early. One option to test: `We Buy Vintage Guitars Nationwide | Joe's Vintage Guitars` (57 chars) leads with the action/keyword, brand at end. Either is fine; current is within range.
- Meta description: keep. `Sell your vintage guitar the easy way with Joe's Vintage Guitars. Get a free evaluation, top dollar for your guitar, and same-day payment.` (137 chars). Slightly under 140; you could extend to add a click reason: `Sell your vintage guitar the easy way. Joe's Vintage Guitars pays top dollar, arranges free insured shipping, and sends same-day payment nationwide.` (147 chars).
- H1 and headings: exactly one H1, set in `Hero.astro`: `Sell Your Vintage Guitar | Joe's Vintage Guitars, Trusted Nationwide Buyer`. Keyword-aligned and strong. Note: the H1 uses a literal `|` pipe inside a sentence-style headline, which reads oddly as on-page text (fine for a title tag, awkward as a visible H1). Consider `Sell Your Vintage Guitar to a Trusted Nationwide Buyer`. Hierarchy is healthy: section components use H2/H3 below it, no skips.
- Structured data: FAQPage present and matches the 8 visible FAQ items in `FAQ.astro` (good). Global Organization/WebSite/LocalBusiness/Place/Service schemas come from Layout. Complete.
- Internal links: strong. Homepage links to `/sell-my-fender-guitar/`, `/sell-my-gibson-guitar/`, `/sell-my-martin-guitar/`, the Gibson + Fender SN guides, and Google Reviews. Gap: no direct link to `/free-appraisal/` from homepage body copy (only the contact form). Add a "Get a free appraisal" text link in the AboutJoe or ValueProp copy pointing to `/free-appraisal/`, since that is a primary money page.
- Other: H1 lives in `Hero.astro`, FAQ copy in `FAQ.astro` `DEFAULT_FAQS`, body copy spread across section components (`ValueProp`, `AboutJoe`, `WhatWeBuy`, `MoreThanGuitar`, etc.). Noted for the executor.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] `src/components/AboutJoe.astro` line 44: `verified Gibson production totals from 1948&ndash;1979` -> `verified Gibson production totals from 1948 to 1979`
- All visible headings across the homepage components are Title Case (`Selling to Joe's Vintage Guitars Is Easy`, `A Buyer Who Knows Vintage Guitars`, `More Than Just A Guitar`, `Finding the Rare Ones`, etc.). No sentence-case headings found.
- No AI-tell vocabulary in any visible homepage copy. No "not just X, it's Y" constructions.

**Top Wins**
- (COPY) Replace the `1948&ndash;1979` en-dash in AboutJoe with "1948 to 1979" — the only anti-AI violation on the homepage.
- (SEO) Add an in-copy text link to `/free-appraisal/` from the homepage body (currently only reachable via nav/form).
- (SEO/COPY) Reconsider the pipe-style visible H1; a natural-sentence H1 reads better on-page than the title-tag-style `Sell Your Vintage Guitar | Joe's Vintage Guitars, Trusted Nationwide Buyer`.

### `/free-appraisal/`  — src/pages/free-appraisal.astro
**SEO**
- Title: change. Current `Free Vintage Guitar Appraisal | Joe's Vintage Guitars` renders the brand with a curly apostrophe entity (`Joe&rsquo;s`) where the homepage uses a straight apostrophe; keep it consistent. Recommended: `Free Vintage Guitar Appraisal | Joe's Vintage Guitars` (53 chars). Keyword is front, brand at end. Good as-is apart from the apostrophe consistency note.
- Meta description: keep. `Get a free vintage guitar appraisal from Joe's Vintage Guitars. I give accurate market valuations for Fender, Gibson, Martin and more, based on real sales data.` (158 chars). On the long edge but inside range, keyword-rich, gives a click reason.
- H1 and headings: PROBLEM. There is no `<h1>` on this page. `PageHero` renders the title `Free Vintage Guitar Appraisal: What Is Your Vintage Guitar Worth?` but every section uses `<h3>`, and the closing form uses `<h2>` ("Get in Touch!"). Confirm `PageHero` outputs an H1; if it does not, this page has no H1 and jumps straight to H3s (a hierarchy skip and a real SEO miss). Either way, the only `<h2>` on the page is the low-value "Get in Touch!" form heading, while the keyword-rich section headings ("Vintage Guitar Condition Grading Explained", "Spotting The Fakes...") are all H3. Recommend: ensure PageHero emits the H1, then promote the major section headings from H3 to H2 so the keyword-bearing headings carry weight.
- Structured data: FAQPage present and matches the 6 visible FAQ items. ogType article with published/modified times set. Good. Consider also adding the Service schema is already global. No gap.
- Internal links: good in the intro (links to `/fender-guitars-serial-number-guide/` and `/sell-a-guitar-collection/`). Gap: the page never links to the brand sell pages (`/sell-my-fender-guitar/`, `/sell-my-gibson-guitar/`, `/sell-my-martin-guitar/`) even though it names those brands repeatedly and the Collection Appraisals block is about selling. Add contextual links to those three sell pages from the case-studies or collection copy.
- Other: heavy, content-rich page (good for SEO). Copy lives in the frontmatter consts (`steps`, `authority`, `caseStudies`, `marketPulse`, `conditionGradesElectric/Acoustic`, `fakeSpotting`, `testimonials`, `faqSchema`).

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] Condition grade `impact` values (visible in both grading tables) use en-dashes in ranges. Lines 97-111: `"80–95% of Mint"`, `"60–75% of Mint"`, `"45–60% of Mint"`, `"25–40% of Mint"`, `"10–25% of Mint"` (appear in both the electric and acoustic arrays) -> replace each en-dash with "to": `"80 to 95% of Mint"`, `"60 to 75% of Mint"`, `"45 to 60% of Mint"`, `"25 to 40% of Mint"`, `"10 to 25% of Mint"`.
- [ai-tell: deep dive] case study detail (line 83): `I did a deep dive into the finish` -> `I looked closely at the finish`. Also the fakes lede (line 427): `I'm doing a forensic deep dive` -> `I'm doing a careful, forensic inspection`.
- [ai-tell: when it comes to] intro copy under the form is clean, but the testimonial/FAQ text on the page is user quotes (leave verbatim). No other AI-tells in Joe's own copy. (Note: "deep dive" appears twice as flagged above.)
- No em-dashes in visible copy (the `—` hits in this file are all CSS comments). No "not just X, it's Y" constructions. Headings are Title Case where author-controlled.

**Top Wins**
- (SEO) Fix the heading hierarchy: confirm/restore a single H1 and promote the keyword-rich section headings from H3 to H2 so this long, valuable page isn't all H3 under a weak lone H2.
- (COPY) Swap the 10 en-dash percentage ranges in the two condition-grading tables to "to" — the largest single cluster of dash violations in your group.
- (SEO) Add internal links from this page to `/sell-my-fender-guitar/`, `/sell-my-gibson-guitar/`, and `/sell-my-martin-guitar/`.

### `/about-me/`  — src/pages/about-me.astro
**SEO**
- Title: change. Current `Learn More About Joe Dampt At Joe's Vintage Guitars` (51 chars) leads with filler ("Learn More About") instead of a keyword. Recommended: `About Joe Dampt | Vintage Guitar Expert & Appraiser` (51 chars) or `Joe Dampt, Vintage Guitar Buyer & Appraiser | Joe's VG` (54 chars). Front-load the role/keyword, brand at end.
- Meta description: keep. `Meet Joe Dampt, your nationwide vintage guitar expert at Joe's Vintage Guitars. We buy, appraise, and sell rare guitars and guitar collections across the USA.` (155 chars). Good length, keyword present, click reason present.
- H1 and headings: PROBLEM. The visible page heading is `About Me` via `PageHero` (confirm PageHero emits this as the H1). `About Me` is a weak, non-keyword H1. Recommended H1 text: `About Joe Dampt, Vintage Guitar Expert & Appraiser`. Note there are effectively two competing "about" headings: the H1 "About Me" and the H3 "About Joe Dampt: Vintage Guitar Expert & Appraiser" right below it. Better: make the keyword-rich line the H1 and drop or demote the redundant "About Me". Hierarchy otherwise runs H1 to H3 with no H2 on the page (every section heading is H3) — add H2-level structure or promote section heads.
- Structured data: ProfilePage with a detailed Person entity present. Good and appropriate for this page. No FAQPage block even though the page shows a visible FAQ (5 Q&A items in `faqs`). Add a FAQPage schema for these so they're eligible for rich results.
- Internal links: thin for a money-driving page. The intro links only to `/` (home). The page talks extensively about buying/appraising but never links to `/free-appraisal/` or any `/sell-my-*` page in body copy. Add contextual links to `/free-appraisal/` and the relevant sell pages from the "Why Sell to Joe?" section.
- Other: external press links (KJZZ, VoyagePhoenix) correctly use `rel="noopener noreferrer"`. Copy lives in frontmatter consts (`background`, `acquisitions`, `whySell`, `faqs`, `testimonials`) plus inline section markup.

**Copy Fixes (Anti-AI-Detection)**
- [ai-tell: that being said] FAQ answer (line 107): `That being said, there is no accounting for taste` -> `Even so, there is no accounting for taste`.
- [heading case] The section heading uses a colon-subtitle that is otherwise Title Case and fine: `About Joe Dampt: Vintage Guitar Expert & Appraiser` — no change needed. All other headings ("The Man Behind the Music", "Media & Community", "Why Sell to Joe?", "Significant Acquisitions & Sales", "Professional Background & Industry Authority") are Title Case. No fixes needed there.
- No em-dashes in visible copy (the `—` hits are CSS comments). No "not just X, it's Y" constructions.

**Top Wins**
- (SEO) Replace the weak `About Me` H1 / `Learn More About...` title with a keyword-led H1 and title ("About Joe Dampt, Vintage Guitar Expert & Appraiser").
- (SEO) Add a FAQPage schema for the 5 visible Q&A items already on the page.
- (COPY) Fix the single AI-tell "That being said" in the third FAQ answer.

### `/contact-me/`  — src/pages/contact-me.astro
**SEO**
- Title: change. Current `Contact Joe Dampt At Joe's Vintage Guitars` (42 chars) is short and uses no commercial keyword. Recommended: `Contact Joe's Vintage Guitars | Vintage Guitar Buyer` (52 chars) — adds "Vintage Guitar Buyer" and uses the brand. Keep "Joe Dampt" optional.
- Meta description: keep, with one fix. `Contact Joe's Vintage Guitars, the top-rated nationwide buyer of vintage guitars. Just email us at joesvintageguitars94@gmail.com or text us at 602-900-6635` (153 chars). Good length and click reason. Minor: ends without a period and pins a literal email/phone in the meta (fine, but the email here differs in style from the curly-apostrophe brand usage elsewhere — just confirm the email address is current).
- H1 and headings: exactly one H1, `Contact Me` (real `<h1>` in markup, good). Weak keyword though. Recommended H1: `Contact Joe's Vintage Guitars`. The section heading `Contact Joe's Vintage Guitars / Vintage Guitar Buyer Today!` is an H3; with only one H1 and one H3 the hierarchy skips H2 — promote that section heading to H2.
- Canonical: present (`/contact-me/`). Good.
- Structured data: BreadcrumbList + ContactPage present and correct for the page type. Good. Note `name: "Contact Joe Dampt At Joe's Vintage Guitars"` in the ContactPage schema uses a real curly apostrophe `’` directly in the JS string (lines 30) — fine functionally, just be consistent.
- Image alt text: all three images have descriptive alt (`mascot-stacked.png` -> "Joe's Vintage Guitars mascot logo", `Joe-Map.jpg` -> full address-based alt). Good, no filename-only alts.
- Internal links: thin. The page is the contact page but links only to map/directions and tel/mailto. Add at least one link to `/free-appraisal/` ("prefer a full appraisal? start here") so the contact page funnels to the primary conversion page. Optionally link `/about-me/`.
- Other: form fields are well-labeled. Good a11y.

**Copy Fixes (Anti-AI-Detection)**
- Clean. No em-dashes or AI-tells found. (The `—` hits in this file are all HTML/CSS comments; visible copy is just the heading, address, hours, and form labels.)

**Top Wins**
- (SEO) Strengthen the title and H1 from generic "Contact Me" to keyword-bearing "Contact Joe's Vintage Guitars | Vintage Guitar Buyer".
- (SEO) Promote the H3 section heading to H2 to fix the H1-to-H3 skip.
- (SEO) Add an internal link to `/free-appraisal/` so the contact page funnels to the main conversion page.

**GROUP ROLLUP**
- (SEO) free-appraisal.astro heading hierarchy is the biggest single fix: confirm/restore one H1 and promote the keyword-rich section headings from H3 to H2 (right now the only H2 is the throwaway "Get in Touch!" form heading on a 13,000px money page).
- (COPY) Convert the en-dash number ranges to "to": the 10 condition-grade percentage ranges on free-appraisal (`80–95% of Mint` etc.) and the `1948&ndash;1979` on the homepage AboutJoe block. This is the bulk of the dash violations in the core group.
- (SEO) Weak, non-keyword H1s/titles on about-me ("About Me" / "Learn More About Joe Dampt...") and contact-me ("Contact Me" / "Contact Joe Dampt...") — rewrite both to lead with the role/keyword and keep the brand at the end.
- (SEO) Add a FAQPage schema to /about-me/, which shows 5 visible Q&A items but ships no FAQ structured data.
- (COPY) Three small AI-tells to remove: "deep dive" (x2) on free-appraisal and "That being said" on about-me. Everything else in Joe's author-controlled copy is clean and in his plainspoken voice.

## Sell Pages: Fender, Gibson, Martin, Collection

### `/sell-my-fender-guitar/`  — src/pages/sell-my-fender-guitar.astro
Copy lives in the frontmatter of this file (igPosts, models, faqs arrays + hero/intro/section JSX) and review bodies come from `reference/testimonials.json`. Review bodies are user-submitted Google reviews, so I do NOT flag AI-tells inside quoted review text, only in Joe's own copy.

**SEO**
- Title: change. Current `Sell My FENDER Guitar | Joe's Vintage Guitars` (40 chars) wastes the all-caps "FENDER" and buries value. Change to "Sell Your Vintage Fender Guitar for Cash | Joe's" (49 chars) or "Sell My Vintage Fender Guitar | Top Cash Offers" (47 chars). Keyword "Vintage Fender Guitar" near the front, intent-driver ("Cash"/"Top Cash Offers") added.
- Meta description: keep. Current (210 chars) is compelling and keyword-rich but it is too long and will truncate near 160. Trim to: "Sell your vintage Fender guitar to a trusted specialist. Free appraisals, top-dollar cash offers, and insured nationwide shipping for Strats, Teles and more." (157 chars)
- H1 and headings: One H1 ("Sell Your Vintage Fender Guitar"), good and keyword-aligned. Note the H1 is CSS-styled as a small gold eyebrow while the H2 subtitle is the big display text, so the visual hierarchy is inverted, fine for SEO since the H1 still carries the keyword. Hierarchy is clean: H1 to H2 to H3 section heads to H4 cards. No skips.
- Structured data: Strong. FAQPage + BreadcrumbList + Article all present and correct. Visible FAQ is covered by FAQPage. No gap.
- Internal links: Good coverage already (/free-appraisal/, /fender-guitars-serial-number-guide/, /vintage-fender-stratocaster-value-guide/, /contact-me/, /about-me/). One bug: in the "How To Sell" section the phrase "get paid right away" links to `/` (the homepage) for no clear reason, see Other. Consider also linking to /sell-a-guitar-collection/ from the intro line "for a single guitar or a whole collection."
- Other: The `<a href="/" class="smf-link">get paid right away</a>` link (How To Sell section) points at the homepage and reads like a mistake. Repoint it to `/free-appraisal/` or `/contact-me/`, or remove the link and keep the bold text.

**Copy Fixes (Anti-AI-Detection)**
- [heading case] "Is There a Difference in Value Between Vintage Fender Stratocasters and Telecasters?" (FAQ q) -> "Is There a Difference in Value Between Vintage Fender Stratocasters and Telecasters?" already Title Case except "a" and "in" are correctly lowercased; this is fine. No change.
- [heading case] "What Is the Best Way To Sell A Classic Fender Guitar?" (TOC + H3) -> the lowercase "the" mid-title is acceptable Title Case (minor word). No change needed.
- [ai-tell: whether you're a ... or a] None in Joe's copy. The phrase "Whether it's a clean heirloom or a well-worn 1970s player" (Meet Joe) is a "whether X or Y" but it is natural and specific, not the banned "whether you're a beginner or a pro" template. Leave it.
- No em-dashes or en-dashes found in Joe's authored copy on this page. The review text in testimonials.json contains author-written punctuation only.
- Clean. No em-dashes or AI-tells found. (Joe's authored copy is genuinely clean here; the only fixes above are SEO/link, not copy-rule violations.)

**Top Wins**
1. (SEO) Rewrite the title tag to lead with "Sell Your Vintage Fender Guitar for Cash" and trim the meta description to ~157 chars so it stops truncating.
2. (SEO) Fix the stray `href="/"` on "get paid right away" so the strongest in-body link points to /free-appraisal/ instead of the homepage.
3. (SEO) Add an internal link to /sell-a-guitar-collection/ from the "single guitar or a whole collection" line in the intro.

---

### `/sell-my-gibson-guitar/`  — src/pages/sell-my-gibson-guitar.astro
Copy lives in this file's frontmatter (igPosts, gibsonModels, faqs, toc) and JSX. Reviews come from `reference/testimonials.json` (reordered, Randy Abercrombie first).

**SEO**
- Title: change. Current `Sell My Gibson Guitar | Joe's Vintage Guitars` (45 chars) is fine but generic. Sharpen to "Sell My Gibson Guitar for Top Cash | Les Pauls & SGs" (52 chars) or keep brand: "Sell My Vintage Gibson Guitar | Top Cash Offers" (47 chars). Adds the buyer intent the current title lacks.
- Meta description: keep. Current (139 chars) is good, just one char under the 140 floor. Optionally pad to: "Looking to sell a vintage Gibson? Get a free professional appraisal and a top-dollar cash offer today. We buy Les Pauls, SGs, ES-335s, and rare collections." (155 chars).
- H1 and headings: One H1 ("Sell Your Vintage Gibson Guitar", styled as the gold eyebrow). Good. Note the page mixes section heads between H2 (intro "Sell Your Vintage Gibson Guitar Today!") and H3 (Meet Joe, splits) and the payout grid header is an H3 with a different phrasing than the TOC label, acceptable. The Lyman section uses two stacked H3s ("Consider Selling..." and "Honoring Lyman's Legacy") per a documented a11y fix; fine. No level skips.
- Structured data: BreadcrumbList + FAQPage present. FAQPage uses only the first 5 of 8 visible FAQs (`faqs.slice(0,5)`). The 3 visible-but-unschema'd Qs (headstock repair, safe shipping, string changes) are real, useful FAQ content. Win: include all 8 in the FAQPage mainEntity so the schema matches what is on the page. Also note: unlike Fender/Martin, this page has NO Article schema, add one for parity (`@type: Article`, headline "Sell Your Vintage Gibson Guitar", author Joe Dampt).
- Internal links: Decent (/about-me/, /how-to-read-gibson-serial-numbers/, /post/gibson-shipping-totals-1948-1979/, /contact-me/, mailto). Missing: no link to /free-appraisal/ anywhere on the page even though the copy repeatedly says "free appraisal/evaluation" and the banner CTA "Get a Free Appraisal" just jumps to an on-page anchor. Add a real /free-appraisal/ link. Also add a link to the Gibson value/price guide if one exists (the Fender page links its Strat value guide; Gibson should link a Les Paul value guide).
- Other: The discover banner CTA `Get a Free Appraisal` points to `#receive-free-consultation` (on-page form). Consider pointing it to `/free-appraisal/` to push the money page.

**Copy Fixes (Anti-AI-Detection)**
- [not just X, it's Y] "To me they're not just instruments. They're something special" (intro paragraph) -> rewrite plainly: "These guitars mean a lot to me, more than just instruments." or "To me they're more than instruments."
- [not just X, it's Y] "I don't just buy instruments. I care about the history and the stories behind them." (Lyman section) -> "I care about the history and the stories behind these guitars as much as the instruments themselves."
- [ai-tell: golden-era] "I know the golden-era Super 400 and L-5 archtops well." (Gibson ES card) -> acceptable as a genuine collector term for late-1950s Gibson; low priority. If tightening: "I know the late-1950s Super 400 and L-5 archtops well."
- [heading case] "How does a headstock repair or refinish affect my Gibson's value?" (FAQ q) -> "How Does a Headstock Repair or Refinish Affect My Gibson's Value?"
- [heading case] "How can I safely ship a high-value vintage guitar to you?" (FAQ q) -> "How Can I Safely Ship a High-Value Vintage Guitar to You?"
- [heading case] "Will changing the strings or cleaning my vintage Gibson lower its value?" (FAQ q) -> "Will Changing the Strings or Cleaning My Vintage Gibson Lower Its Value?"
  (Q1 to Q5 are already Title Case; Q6 to Q8 were authored in sentence case and break the pattern, fix all three.)
- No em-dashes or en-dashes found in Joe's authored copy. (The faqSchema includes an `&mdash;` mapping in its replace table, but no FAQ answer actually contains one.)

**Top Wins**
1. (SEO) Add all 8 FAQs to the FAQPage schema (currently only 5) and add the missing Article schema so the page matches Fender/Martin.
2. (COPY) Fix the two "not just X, it's Y" constructions in the intro and Lyman sections, plus Title-Case the three sentence-case FAQ questions (Q6 to Q8).
3. (SEO) Add a real /free-appraisal/ link and point the banner "Get a Free Appraisal" CTA at it instead of an on-page anchor.

---

### `/sell-my-martin-guitar/`  — src/pages/sell-my-martin-guitar.astro
Copy lives in this file's frontmatter (igPosts, models, faqs) and JSX. Reviews come from `reference/martin-testimonials.json` (3 reviews). Images are local in `/images/sell-martin/`.

**SEO**
- Title: keep, minor tighten. Current `Sell My Vintage Martin Guitar | Top Cash Offers` (47 chars) is the strongest of the four, keyword front-loaded, intent + good length. Optionally add brand: "Sell My Vintage Martin Guitar | Top Cash Offers" is fine as-is; no change required.
- Meta description: keep. Current (157 chars) is excellent, keyword + specifics (D-18s, D-28s, OM) + reason to click. No change.
- H1 and headings: One H1 ("Sell Your Vintage Martin Guitar"). Good. Note one deliberate quirk: the case-study subhead "Linda's 1950s Martin 0-18" is rendered as an `<h2>` mid-page (commented "Live renders this as an h2") sitting after several H3 section heads, which creates an H3-then-H2 order jump. It is intentional for live parity but is a minor heading-hierarchy smell; leave it unless launch audit flags it.
- Structured data: Strong. FAQPage + BreadcrumbList + Article all present and correct.
- Internal links: Best-linked of the four (/free-appraisal/, /post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/, /martin-serial-and-model-numbers/, /post/martin-d18e-vs-d28e-authentication-guide/, /contact-me/, external Reverb). Missing: no link to /sell-a-guitar-collection/ despite the intro mentioning buying "just about any other vintage Martin"; add one. The Reverb link in section 6 is good but is the only outbound `target="_blank"` reference, fine.
- Other: Submit button label reads "SENT" (`<button ... class="smm-submit">SENT</button>`). That is almost certainly a typo for "SEND" or "SUBMIT", a live-site quirk carried over. It is confusing UX (button says the message was already sent). Recommend changing to "SUBMIT" to match the Fender page.

**Copy Fixes (Anti-AI-Detection)**
- [not just X, it's Y] "To me a vintage Martin isn't just an instrument; it's a piece of American history." (Meet Joe) -> "To me a vintage Martin is a piece of American history, not just an instrument." or plainer: "A vintage Martin is a piece of American history to me."
- [not just X, it's Y] "For her this guitar wasn't just wood and wire; it was a companion through a lifetime of broadcasts and songs." (Linda case study) -> "For her this guitar was a companion through a lifetime of broadcasts and songs."
- [heading case] "Where To Sell Your Martin Guitar For The Best Price" (H3, rendered with a `<br>`) -> already Title Case; the lowercase nowhere. No change.
- No em-dashes or en-dashes in Joe's authored copy. Note: the `models` OM card body contains `1929&ndash;1933` (an en-dash entity) rendered via `set:html`. That is a number range, so per the rule it should become "to": change `"...how rare the 1929&ndash;1933 era is..."` -> `"...how rare the 1929 to 1933 era is..."` (or a hyphen `1929-1933`). This is the one genuine en-dash on the page.

**Top Wins**
1. (COPY) Fix the en-dash in the OM-models card (`1929&ndash;1933` to `1929 to 1933`) and the two "not just X, it's Y" constructions (Meet Joe + Linda).
2. (SEO/UX) Change the submit button label from "SENT" to "SUBMIT", the current label reads as if the form already sent.
3. (SEO) Add an internal link to /sell-a-guitar-collection/ from the intro line about buying "just about any other vintage Martin."

---

### `/sell-a-guitar-collection/`  — src/pages/sell-a-guitar-collection.astro
Copy lives in this file's frontmatter (hiwSteps, featureCols, pastPurchases, faqs) and JSX. Reviews come from `reference/collection-testimonials.json` (5 reviews). Images local in `/images/sell-collection/`. This is Archetype B with several `set:html` copy blocks (featureCols.body, pastPurchases.desc).

**SEO**
- Title: change. Current `Sell A Guitar Collection | Joes Vintage Guitars` (47 chars) has a typo, "Joes" is missing its apostrophe (every other page uses "Joe's Vintage Guitars"). Fix to "Sell A Guitar Collection for Cash | Joe's Vintage Guitars" (56 chars) or "Sell Your Guitar Collection | Joe's Vintage Guitars" (51 chars). Restore the apostrophe and add buyer intent.
- Meta description: keep. Current (143 chars) is good and specific ("comes to you," "same-day cash offers," "any size"). Optionally strengthen the keyword: "Sell your vintage guitar collection to Joe, a nationwide buyer who comes to you. Same-day cash offers and free appraisals for collections of any size." (149 chars).
- H1 and headings: One H1 ("Sell Your Vintage Guitar Collection In The US"). Good, keyword-aligned. Hierarchy is clean: H1 to multiple H2s (How It Works, Notable Collection Purchases) to H3/H4 within. The "Meet Joe" block uses an H3 title plus an H5 subhead (`smc-meet__sub`), which skips H4, minor and cosmetic; not worth flagging at launch but noting it.
- Structured data: Strong. FAQPage + BreadcrumbList + Article present and correct. No FAQ gap (all 5 visible FAQs are in the schema). Consider also: the "Notable Collection Purchases" section is rich, location-tagged content; no schema change required, but it is good E-E-A-T as-is.
- Internal links: Best internal linking on the site (/sell-my-gibson-guitar/, /free-appraisal/ x3, /about-me/, /contact-me/, /post/gretsch-6120-history-value/, /post/identify-vintage-gibson-j45-j50-sj/). Missing: no links to /sell-my-fender-guitar/ or /sell-my-martin-guitar/ even though the hero lists "Gibson, Fender, Martin, Gretsch..." as brands sought. Add Fender + Martin links alongside the existing Gibson link to round out the money-page cross-linking.
- Other: The hero brand line and the feature-col copy are the natural place to link all three brand sell-pages. Currently only Gibson is linked (in featureCols[0].body).

**Copy Fixes (Anti-AI-Detection)**
- [em-dash via entity is NOT present, but check ranges] "100+ Rare 1950s–1960s Instruments" (pastPurchases[1].title) -> contains an en-dash between decades. Change to "100+ Rare 1950s to 1960s Instruments" (or "1950s-1960s" with a hyphen).
- [en-dash] "1950s–1960s Instruments" also appears in pastPurchases[1].stat.label ("1950s–1960s Instruments") -> change to "1950s to 1960s Instruments".
- [ai-tell: once-in-a-career] "A once-in-a-career buy." (pastPurchases[2].desc) -> this is a genuine, human phrasing, not on the banned list; leave it. (Listed only so it is not mistaken for "game-changer"-class filler.)
- [heading case] Section H2 "How Our Collection Purchasing Process Works" -> already Title Case. No change.
- [heading case] hiwSteps titles like "We Document & Value Your Collection Together", "I Come to You, Anywhere in the U.S.", "We Load Up and You Get Paid the Same Day" -> these are full sentences used as H3 step titles, not noun-phrase headings; "and"/"to" lowercased is correct. Acceptable, no change.
- No standalone em-dashes (—) found in authored prose. The only long dashes are the two en-dashes in the "1950s–1960s" strings above.

**Top Wins**
1. (SEO) Fix the title-tag typo "Joes" to "Joe's" (brand-name apostrophe missing only on this page) and add buyer intent.
2. (COPY) Replace the two "1950s–1960s" en-dashes (title + stat label of purchase #02) with "1950s to 1960s".
3. (SEO) Add internal links to /sell-my-fender-guitar/ and /sell-my-martin-guitar/ (the hero already names both brands), matching the existing /sell-my-gibson-guitar/ link.

---

**GROUP ROLLUP**
- (SEO) Fix the brand-name typo in the Collection page title: "Joes Vintage Guitars" is missing its apostrophe, every other page uses "Joe's". Highest-priority because it is a visible brand error in the SERP title.
- (SEO) Gibson page schema gap: the FAQPage block only includes 5 of the 8 visible FAQs and the page is missing the Article schema that Fender and Martin both have. Add the 3 missing FAQs and an Article node for parity.
- (COPY) Kill the "not just X, it's Y" construction site-wide: it appears on Gibson (two instances) and Martin (two instances). These are the only true anti-AI-rule violations in the authored copy and are quick rewrites.
- (COPY) Three real en-dashes to convert to "to": Martin OM card ("1929–1933") and the Collection page purchase #02 (two "1950s–1960s" strings). Everything else is clean of em/en-dashes.
- (SEO) Cross-link the money pages: Gibson has no /free-appraisal/ link at all, Fender has a stray homepage link where an appraisal link belongs, and the Collection page only links Gibson (not Fender/Martin) despite naming all three brands. Tightening these internal links concentrates link equity on the conversion pages.

## Sell Pages: Gretsch, Guild, National, Rickenbacker, D'Angelico, Amp

### `/sell-my-gretsch-guitar/` — src/pages/sell-my-gretsch-guitar.astro

**SEO**
- Title: change to "Sell Your Vintage Gretsch Guitar | Joe's Vintage Guitars" (54 chars). Current title "Sell New Or Used Gretsch Guitars At Joes Vintage Guitars" (56 chars) leads with "New Or Used" instead of the higher-intent "Sell Your Vintage Gretsch," and "Joes" is missing its apostrophe. The H1 is "Sell Your Vintage Gretsch Guitar In The US," so aligning the title strengthens relevance.
- Meta description: keep. "Looking to sell or just appraise your Gretsch guitar? Joe's Vintage Guitars is buying! We'll buy your acoustic, bass, hollow, & semi-hollow Gretsch guitars!" (151 chars) is fine, has keyword and a reason to click. Note `&amp;` renders as the entity in source; confirm it outputs as "&".
- H1 and headings: one H1 ("Sell Your Vintage Gretsch Guitar In The US"), good. Hierarchy is clean (H1 to H2 subtitle to H3 section heads to H4 cards). No skips. The card H4s are passed via `set:html` and are Title Case. Good.
- Structured data: present and strong: FAQPage, BreadcrumbList, Article. FAQPage matches the visible FAQ. Correct types.
- Internal links: links to `/contact-me/`, `/free-appraisal/`, and `tel:`. Missing a link to the matching serial-number decoder. Add a link to `/gretsch-serial-number-lookup/` (the project has this page) somewhere in the intro or nationwide section, since dating is the top seller question. Also consider linking the online catalog "Browse the online catalog" copy to an actual inventory/Reverb URL (it is currently plain text).
- Other: "Browse the online catalog" is not a link though it invites a click. Make it a link.

**Copy Fixes (Anti-AI-Detection)**
- [ai-tell: navigate (figurative) + seamless] Review by Debra Parsons: "I was particularly impressed by how you navigated the entire transaction." and "Thank you for making this such a seamless and positive experience" — this is a real customer testimonial, so do NOT edit it. Quoted reviews are verbatim social proof and must stay as written. Flagging only so the fix doc does not "correct" them.
- The site's own (non-review) copy is clean: no em-dashes, en-dashes, or AI-tells in Joe's first-person text. Headings are Title Case.
- Clean. No em-dashes or AI-tells found. (in the site's own editorial copy; testimonials left verbatim by design)

**Top Wins**
- (SEO) Retitle to "Sell Your Vintage Gretsch Guitar | Joe's Vintage Guitars" and fix the missing apostrophe in "Joes."
- (SEO) Add an internal link to `/gretsch-serial-number-lookup/` and make "Browse the online catalog" a real link.

### `/sell-my-guild-guitar/` — src/pages/sell-my-guild-guitar.astro

**SEO**
- Title: change to "Sell Your Vintage Guild Guitar | Joe's Vintage Guitars" (54 chars). Current "Sell My GUILD Guitar | Joes Vintage Guitars" (43 chars) is short, all-caps "GUILD" looks like shouting, and "Joes" lacks its apostrophe. The recommended version adds "Vintage" (a search term) and fits the 50 to 60 band.
- Meta description: keep. "Sell your vintage Guild guitar to Joe, a trusted nationwide buyer. Free appraisals and fair cash offers for Guild acoustics and electrics." (135 chars) is solid; could pad slightly. Optional: "Sell your vintage Guild guitar to Joe, a trusted nationwide buyer. Free appraisals and fair cash offers for Guild acoustics, electrics, and archtops, paid fast." (158 chars).
- H1 and headings: one H1 ("Sell My Guild Guitar"), keyword-aligned. H2 "Dating A Vintage Guild Guitar By Serial Number" Title Case, good. H3 "Your Testimonials!" present. Hierarchy H1 to H2 to H3 is clean, no skips.
- Structured data: present: BreadcrumbList and Article. This page has NO FAQ section, so the missing FAQPage is correct (not a gap). Fine as-is.
- Internal links: good. Links to `/guild-serial-number-lookup/`. BUT this page is the only one in the group with NO link to `/free-appraisal/` and NO link to `/contact-me/` in the body, even though the reviews talk about appraisals. Add a "Get Your Free Appraisal" link/CTA in the content section. The page relies entirely on the shared ContactSection for conversion, which is thin for a sell page.
- Other: "Check out comprehensive Guild Serial Number Guide" reads as missing an article. The link text should be "Check out our comprehensive Guild Serial Number Guide" (add "our").

**Copy Fixes (Anti-AI-Detection)**
- [missing article] "Check out <a>comprehensive Guild Serial Number Guide</a> for more information!" -> "Check out our <a>comprehensive Guild Serial Number Guide</a> for more information." (also drop the exclamation point for a calmer tone).
- Testimonial by Terry contains "Joe was great-knowledgeable, honest..." — that hyphen is in a verbatim review; leave it.
- Site editorial copy: no em-dashes, no en-dashes, no AI-tells. Headings Title Case.
- Clean. No em-dashes or AI-tells found. (one grammar fix noted above; not an AI-tell)

**Top Wins**
- (SEO) Retitle to "Sell Your Vintage Guild Guitar | Joe's Vintage Guitars" (drops all-caps, adds "Vintage," fixes apostrophe).
- (COPY/CONVERSION) Add a `/free-appraisal/` CTA button or inline link in the content body. This page has no in-body conversion link, unlike its siblings.
- (SEO) Fix "comprehensive Guild Serial Number Guide" to "our comprehensive Guild Serial Number Guide."

### `/sell-my-national-guitar/` — src/pages/sell-my-national-guitar.astro

**SEO**
- Title: keep, or minor change. Current "Sell Your Vintage National Guitar At Joe's Vintage Guitars" (57 chars) is good: keyword first, brand at end, in range. Optional swap of "At" for a pipe: "Sell Your Vintage National Guitar | Joe's Vintage Guitars" (56 chars) for a cleaner separator. Either is fine.
- Meta description: keep. "Sell your vintage National guitar to Joe, a trusted nationwide buyer. Free appraisals and fair cash offers for National resonators and Valco-built models." (152 chars) is strong and specific (resonators, Valco).
- H1 and headings: one H1 ("Sell Your Vintage National Guitar In The US"). H2 subtitle, H3 section heads, H4 card heads, H5 "Professional Buyer and Seasoned Collector of Vintage Guitars." Note: H5 "Professional Buyer and Seasoned Collector of Vintage Guitars" is sentence-style (lowercase "and," "of") — fine as a subtitle but inconsistent with the site's Title Case rule. Recommend "Professional Buyer And Seasoned Collector Of Vintage Guitars." Hierarchy: H1 to H2 to H3, no H1-to-H3 skip. Good.
- Structured data: present: FAQPage (no `name` field, unlike Gretsch, but valid), BreadcrumbList, Article. Matches visible FAQ. Correct.
- Internal links: links to `/` (home), `/free-appraisal/`, `/contact-me/`, `tel:`. Missing: National guitars have no dedicated SN page on this site, so no SN link needed. Consider linking to a value guide if one exists. Internal linking is otherwise adequate.
- Other: the H4 card head "Sell Your National Acoustic Or Electric Guitar At The Right Price" is good and keyword-rich.

**Copy Fixes (Anti-AI-Detection)**
- [heading case] H5 subtitle "Professional Buyer and Seasoned Collector of Vintage Guitars" -> "Professional Buyer And Seasoned Collector Of Vintage Guitars" (this exact string repeats on Gretsch, Rickenbacker, D'Angelico, and National in the Meet Joe block; fix all instances site-wide for the Title Case rule).
- Testimonial by Angelica Chavez: "But i know they have to win more then the buyer." — verbatim review, leave it.
- Site editorial copy by Joe: no em-dashes, no en-dashes, no AI-tells. Hero and "I Buy & Appraise" copy is clean and plainspoken.
- Clean. No em-dashes or AI-tells found. (only the recurring H5 sentence-case subtitle noted above)

**Top Wins**
- (COPY) Title-case the recurring Meet Joe subtitle "Professional Buyer And Seasoned Collector Of Vintage Guitars" across all sell-brand pages.
- (SEO) Title and description are already strong; lowest-effort polish is swapping "At" for "|" in the title for a cleaner brand separator.

### `/sell-my-rickenbacker-guitar/` — src/pages/sell-my-rickenbacker-guitar.astro

**SEO**
- Title: change to "Sell Your Vintage Rickenbacker Guitar | Joe's Vintage Guitars" (60 chars) or shorter "Sell Your Rickenbacker Bass or Guitar | Joe's Guitars" (53 chars). Current "Sell My RICKENBACKER Guitar | Joes Vintage Guitars" (50 chars) uses shouting all-caps and "Joes" without apostrophe, and omits "Vintage." The H1 is bass-led ("Sell Your Vintage Rickenbacker Bass Guitar In The US"); the title should mention bass since Rickenbacker basses are a major search.
- Meta description: keep. "Sell your vintage Rickenbacker bass or guitar to a trusted nationwide buyer. Fair cash offers, expert appraisals, and an easy process from coast to coast." (152 chars) is good.
- H1 and headings: one H1 ("Sell Your Vintage Rickenbacker Bass Guitar In The US"). H2 subtitle "Top-Rated Rickenbacker Used Guitar Buyer Near You," H3 section heads, H4 cards, H5 Meet-Joe subtitle. Hierarchy clean, no skips.
- Structured data: present: FAQPage (with `name`), BreadcrumbList, Article. Matches visible FAQ. Correct.
- Internal links: links to `/contact-me/`, `/free-appraisal/`, `tel:`, `mailto:`. Missing: a link to `/rickenbacker-serial-numbers/` (the project has this SN page). Add it in the "I Buy & Appraise" or hero copy, since dating a Rickenbacker by serial is a common seller question. "Browse the online catalog" is again plain text, not a link.
- Other: solid page.

**Copy Fixes (Anti-AI-Detection)**
- [ai-tell: seamless] Testimonial by Mike (StratMC): "He has a shipping process that it is seamless and simple." — verbatim review, leave as-is (do not edit customer quotes).
- [heading case] H5 "Professional Buyer and Seasoned Collector of Vintage Guitars" -> "Professional Buyer And Seasoned Collector Of Vintage Guitars" (same recurring fix).
- Site editorial copy by Joe: clean. The hero ("They're best known for their heavy use by one of my favorite bands of all time: The Beatles!") and "I Buy & Appraise" ("And I won't just throw a number at you; I'll explain how I got there") are plainspoken, no AI-tells, no dashes.
- Clean. No em-dashes or AI-tells found. (recurring H5 subtitle noted; testimonial left verbatim)

**Top Wins**
- (SEO) Retitle to include "Vintage" and "Bass," drop all-caps, fix apostrophe: "Sell Your Vintage Rickenbacker Guitar | Joe's Vintage Guitars."
- (SEO) Add internal link to `/rickenbacker-serial-numbers/` and make "Browse the online catalog" a real link.

### `/sell-your-vintage-dangelico-guitar-in-the-us/` — src/pages/sell-your-vintage-dangelico-guitar-in-the-us.astro

**SEO**
- Title: keep. "Sell Your Vintage D'Angelico Guitar At Joe's Vintage Guitars" (59 chars, with curly apostrophe) is good: keyword first, brand last, in range. Optional pipe swap: "Sell Your Vintage D'Angelico Guitar | Joe's Vintage Guitars" (58 chars).
- Meta description: keep. "Ready to sell your vintage D'Angelico guitar? I buy D'Angelico electrics and acoustics like the New Yorker, Excel, and more. Get a free appraisal." (144 chars) is specific (names models) and has a CTA. Good.
- H1 and headings: one H1 ("Sell Your Vintage D'Angelico Guitar In The US"). H2 subtitle, H3 section heads ("Nationwide Vintage D'Angelico Guitars Resale & Appraisals," "Our Clients' Testimonials," vintage banner H3, "My Vintage Guitar Buying Process," "Meet Vintage Guitar Expert, Joe Dampt"), H4 cards, H5 Meet-Joe subtitle. Hierarchy clean, no skips.
- Structured data: present: FAQPage (no `name`), BreadcrumbList, Article. Matches visible FAQ. Correct.
- Internal links: links to `/contact-me/` (twice, via card and buying-process) and `/free-appraisal/`, `tel:`. No D'Angelico SN page exists, so no SN link needed. Adequate. Could add a link to a value guide if one exists.
- Other: "My Vintage Guitar Buying Process" section is a nice unique trust block.

**Copy Fixes (Anti-AI-Detection)**
- [heading case] H5 "Professional Buyer and Seasoned Collector of Vintage Guitars" -> "Professional Buyer And Seasoned Collector Of Vintage Guitars" (same recurring fix).
- Buying-process card body: "I'll share everything I know and help you understand what it means in today's market." Contains "in today's" which is on the AI-tell list. Rewrite: "I'll share everything I know and help you understand what it's worth right now." ("today's market" is borderline natural phrasing, but "in today's" is the flagged construction — the rewrite removes it.)
- Testimonials by Tony, Maureen, Dan are verbatim reviews; leave as-is.
- Otherwise site editorial copy is clean: no em-dashes, no en-dashes. Hero copy plainspoken.
- [ai-tell: in today's] "help you understand what it means in today's market" -> "help you understand what it's worth right now"

**Top Wins**
- (COPY) Remove the "in today's market" phrasing in the Accurate Identification card.
- (COPY) Title-case the recurring Meet Joe subtitle.
- (SEO) Title and meta are already strong; no urgent SEO fix.

### `/sell-an-amplifier-or-effect/` — src/pages/sell-an-amplifier-or-effect.astro

**SEO**
- Title: change to "Sell My Vintage Amplifier or Effect | Joe's Vintage Guitars" (58 chars). Current "Sell An Amplifier or Effect | Joes Vintage Guitars" (50 chars) omits "Vintage" (the key qualifier; the whole page is about vintage tube amps) and "Joes" lacks its apostrophe. The H1 is "Sell My Amplifier," so leading with "Sell My Vintage Amplifier" aligns and adds the keyword.
- Meta description: keep. "Sell your vintage amp or effects pedal to Joe. Fair offers, fast same-day payment, and free insured shipping for Fender, Marshall, Vox, Gibson, and more." (152 chars) is excellent: keyword, benefits, brand names, reason to click.
- H1 and headings: one H1 ("Sell My Amplifier"). H2 subtitle "Get A Competitive Offer & Quick Payment For Your Vintage Amp," H3 section heads ("Sell Your Vintage Amplifier or Effect," form head, "Why Sell To Joe's Vintage Guitars?", "Amplifier & Effect Brands I Buy"), H4 value-prop and brand cards. Hierarchy clean, no skips. Note: H1 "Sell My Amplifier" omits "Effect" even though the page sells effects too; consider "Sell My Vintage Amp or Effect" for keyword breadth (the H2 and intro already cover effects, so this is optional).
- Structured data: present: FAQPage, BreadcrumbList, Article. Matches the visible FAQ. Correct. No `ogImage` is set on this page (the other five pass `ogImage`); add one (e.g. a vintage amp photo) so social shares have an image.
- Internal links: links to `/free-appraisal/` and `/contact-me/`. Good for a conversion page. Could add a link to `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/` (the amp SN guide exists in the project, and this page is described in code as the page that guide links TO). Add a reciprocal link back to that dating guide in the FAQ or intro, since amp sellers want to date their amp first.
- Other: no `ogImage` prop, unlike the sibling pages. Add one.

**Copy Fixes (Anti-AI-Detection)**
- Site editorial copy is clean. No em-dashes, no en-dashes. No AI-tells in the hero, value props, or FAQ. "Is your amp gathering dust?" and "Don't see your brand? Reach out anyway, I look at everything." are plainspoken and on-brand.
- Headings all Title Case.
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- (SEO) Add "Vintage" to the title: "Sell My Vintage Amplifier or Effect | Joe's Vintage Guitars" and fix the "Joes" apostrophe.
- (SEO) Add an `ogImage` prop (this page is the only one in the group missing it).
- (SEO) Add a reciprocal internal link to `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/` for amp sellers who need to date their amp.

**GROUP ROLLUP**
- (SEO) Fix titles across the group: three pages shout the brand in all-caps and/or write "Joes" without an apostrophe (Guild "Sell My GUILD Guitar | Joes...", Rickenbacker "Sell My RICKENBACKER Guitar | Joes...", Gretsch "...At Joes Vintage Guitars", Amp "...Joes Vintage Guitars"). Standardize to "Sell Your Vintage [Brand] Guitar | Joe's Vintage Guitars" with a proper apostrophe and the word "Vintage."
- (COPY) Title-case the recurring Meet Joe subtitle "Professional Buyer and Seasoned Collector of Vintage Guitars" to "Professional Buyer And Seasoned Collector Of Vintage Guitars" on Gretsch, National, Rickenbacker, and D'Angelico (4 pages share the same sentence-case string).
- (SEO) Add missing internal links to the matching serial-number decoders: Gretsch to `/gretsch-serial-number-lookup/`, Rickenbacker to `/rickenbacker-serial-numbers/`, and the amp page to `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/`. Dating-by-serial is the top seller question and these decoder pages already exist on the site.
- (CONVERSION/SEO) The Guild page has no in-body link to `/free-appraisal/` or `/contact-me/` (the only sell page in the group without one). Add an appraisal CTA in its content section.
- (COPY) Only one genuine AI-tell in the group's own editorial copy: "in today's market" on the D'Angelico buying-process card. Replace with "what it's worth right now." Everything else flagged (navigate, seamless) lives inside verbatim customer testimonials and must NOT be edited.

## Serial Number Guides

### `/fender-guitars-serial-number-guide/`  — src/pages/fender-guitars-serial-number-guide.astro
**SEO**
- Title: Present and good. `Fender Serial Number Lookup – Free Decoder & Dating Guide` (uses an en-dash and `&`; ~54 chars). Keyword is front-loaded. Recommended: `Fender Serial Number Lookup: Free Decoder + Dating Guide` (55 chars) to drop the en-dash and the `&`. Brand is optional on this high-volume informational query.
- Meta description: Present, ~150 chars, keyword-front. Contains a literal em-dash in the `toolSchema` description. Replace it with a comma.
- H1 and headings: Single H1 (`Fender Serial Number Lookup: Free Decoder Tool and Dating Guide`), good and Title Case. Section heads are Title Case. No hierarchy skips.
- Structured data: Strong. Article + BreadcrumbList + FAQPage + WebApplication + WebPage + ImageObject. FAQ schema matches the 12 visible FAQs. Correct.
- Internal links: Good. Links `/sell-my-fender-guitar/` (x2) and `/free-appraisal/` (x4). Add contextual links to `/vintage-fender-stratocaster-value-guide/` and `/vintage-fender-telecaster-value-guide/` from the Strat/Tele model sections (those CTAs currently point to live WP blog posts).

**Copy Fixes (Anti-AI-Detection)**
- [em-dash] (toolSchema description) `"...serial number — American, Mexican, Japanese, or Custom Shop..."` -> `"...serial number: American, Mexican, Japanese, or Custom Shop..."`
- [em-dash] (caption, ~line 615) `"...at the bottom edge instead of the top — a rarer placement..."` -> `"...at the bottom edge instead of the top. A rarer placement..."`
- [em-dash, table cells] (~lines 755-822) e.g. `"...standard N-prefix serial — C = Custom Shop..."` -> `"...standard N-prefix serial. C = Custom Shop..."`; `"No reliable decode — see below"` -> `"No reliable decode, see below"`; `"Widely misunderstood — does NOT mean Relic..."` -> `"Widely misunderstood: does NOT mean Relic..."`
- [AI-tell: "in today's"] `"Original custom color Strats command serious premiums in today's market."` -> `"...command serious premiums on the current market."`
- [AI-tell: "Deep-dive into"] `"Deep-dive into Leo Fender's first electric bass..."` -> `"A close look at Leo Fender's first electric bass..."`
- [en-dash ranges] ~220 en-dashes, almost all serial/year ranges in data arrays and table cells (`"1950 – 1954"`, `"100000 – 110000"`, `"L00001 – L20000"`). Batch find-replace the ` – ` between digits/letters: ` to ` in prose/range labels, hyphen in tight cells. Do NOT touch `Pre-CBS`, `F-plate`, `L-series`.

**Top Wins**
1. (COPY) Fix the prose/heading em-dashes + 2 AI-tells, batch-convert the ~220 en-dash ranges.
2. (SEO) Add in-page links to the Strat/Tele value guides from the model sections.
3. (SEO) Tighten the title to drop the en-dash and `&`.

---

### `/how-to-read-gibson-serial-numbers/`  — src/pages/how-to-read-gibson-serial-numbers.astro
**SEO**
- Title: Good. `Gibson Serial Number Lookup - Free Decoder + Dating Guide` (~56 chars, keyword front). Could use a colon instead of the spaced hyphen.
- Meta description: Present, ~150 chars, keyword-front, feature-rich. Good.
- H1 and headings: Single H1 (uses a `&ndash;` entity, fix per the dash sweep). Deep, consistent H2 to H3 to H4 hierarchy.
- Structured data: Excellent. Article + BreadcrumbList + HowTo + FAQPage + WebApplication + Person. Note: the FAQ answers exist only in schema; there is no visible FAQ accordion on the page. Google prefers visible FAQ content, so consider adding a visible FAQ section or the FAQPage schema may be ignored.
- Internal links: Good volume, but **two links point to `/vintage-guitar-appraisal/` (not a route on the rebuilt site).** The real page is `/free-appraisal/`. Fix both. Also one absolute `https://www.joesvintageguitarsaz.com/sell-my-gibson-guitar/` should be relative.
- Other: Many absolute `joesvintageguitarsaz.com/post/...` links. Fine if those posts exist live.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash, prose] `"...Reissue Les Paul guitars — the R4, R7, R8, R9, R0 and related models — use an ink-stamped serial..."` -> `"...Reissue Les Paul guitars (the R4, R7, R8, R9, R0 and related models) use an ink-stamped serial..."`
- [em-dash, heading] `"Historic Reissue Les Paul Models — Ink Stamp Format"` -> `"Historic Reissue Les Paul Models: Ink Stamp Format"`
- [em-dash, caption] `"1955 Les Paul Custom 'Black Beauty' — ebony finish, gold hardware..."` -> `"1955 Les Paul Custom 'Black Beauty': ebony finish, gold hardware..."`
- [em-dash, feature-card headings, BATCH] ~90 `<h4>` heads follow `Title — Year–Year` (e.g. `"Bakelite Knobs — 1935–1946"`). Replace the em-dash separator with a colon and the inner en-dash with "to": `"Bakelite Knobs: 1935 to 1946"`.
- [em-dash, table cells, BATCH] ~40 "Reliability" cells read `"Clean — Reliable"`. Replace with `"Clean / Reliable"`.
- [AI-tell: "vibrant"] `"A vibrant transparent red over mahogany."` -> `"A bright transparent red over mahogany."`
- [en-dash ranges] ~275 `&ndash;` + 17 literal en-dashes, plus 20 `&mdash;` in decoder year-key rows. Handle per the dash sweep (entity ranges to "to"/hyphen; `&mdash;` decoder rows to a colon).

**Top Wins**
1. (SEO) Replace the two `/vintage-guitar-appraisal/` links with `/free-appraisal/` and make the absolute sell link relative. Real dead links.
2. (COPY) Batch-fix the ~40 `"Clean — Reliable"` cells and the ~90 feature-card heading dashes.
3. (SEO) Add a visible FAQ accordion to back the FAQPage schema, fix the prose em-dashes + "vibrant".

---

### `/martin-serial-and-model-numbers/`  — src/pages/martin-serial-and-model-numbers.astro
**SEO**
- Title: `Martin Serial Number Lookup & Guide` (~35 chars). Short, leaves room. Recommended: `Martin Serial Number Lookup & Dating Guide | Joe's Vintage` (57 chars).
- Meta description: Present, ~140 chars, but weak ("a very easy process") and keyword-light. Recommended: `Date any Martin guitar by serial number, 1898 to today. Full Nazareth charts, an instant lookup tool, plus tuner, wood, inlay, and logo dating guides.` (~150 chars)
- H1 and headings: Single H1. Consistent hierarchy.
- Structured data: BreadcrumbList + Article only. No `WebApplication` schema despite a working lookup tool (the other SN pages have it). Add one. No FAQ on the page, so no FAQPage needed.
- Internal links: Thin. `/free-appraisal/` (x1, in the tool result), `/sell-my-martin-guitar/` (x1), `/contact-me/` (x2). Add a visible in-content `/free-appraisal/` link and a Related Guides block linking the other SN pages.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash, table cells, BATCH] **One-line source fix:** line 67 `range: \`${r.a === 0 ? "0000" : r.a} — ${r.b}\`` builds an em-dash into every one of ~130 serial rows. Change the ` — ` to ` - ` (or ` to `). Same on line 298 for the Navojoa table. Highest-leverage single fix in the whole audit.
- [em-dash, list] `"2025 Projection: 2,935,988 — 3,043,000"` -> `"...2,935,988 to 3,043,000"`.
- [en-dash ranges] ~22, mostly in note strings (`"custom order only from 1994–2002"`, `"2000–2006"`). Batch to "to".
- No AI-tell vocabulary. Headings clean.

**Top Wins**
1. (COPY) The line 67 / line 298 source fix converts ~130 em-dash table ranges at once.
2. (SEO) Rewrite the weak, keyword-light meta description and lengthen the title to include "Dating Guide."
3. (SEO) Add a `WebApplication` schema, a Related Guides block, and an in-content `/free-appraisal/` link.

---

### `/rickenbacker-serial-numbers/`  — src/pages/rickenbacker-serial-numbers.astro
**SEO**
- Title: `Rickenbacker Serial Number Decoder + Dating Guide` (~49 chars, keyword front). Good.
- Meta description: ~190 chars, slightly LONG. Trim to ~155: `Decode any Rickenbacker serial number from 1954 to today. Full era guide, interactive decoder, plus advanced dating by pickups, tuners, and body specs.`
- H1 and headings: Single H1 in the title band. Note an `<h2>Rickenbacker Serial Numbers</h2>` right under it duplicates the H1 text; make it more specific (e.g. "Quick Serial Number Decoder") to avoid H1/H2 redundancy.
- Structured data: BreadcrumbList + injected TechArticle + FAQPage + Thing. Good. Note: no visible FAQ accordion despite FAQPage schema; verify the schema questions match on-page content or add a visible FAQ.
- Internal links: Best-linked page of the set. `/free-appraisal/` (x3), `/sell-my-rickenbacker-guitar/` (x2), plus a strong Related Guides grid linking the other SN pages.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash, headings, BATCH] ~16 `<h3>` heads use `Title — Year to Year` (e.g. `"Toaster Pickup — 1957 to 1974"`). Replace the em-dash separator with a colon: `"Toaster Pickup: 1957 to 1974"`.
- [em-dash + en-dash, heading] `"The JK / JL Transition — November–December 1960"` -> `"The JK / JL Transition: November to December 1960"`.
- [en-dash ranges] ~115 in era badges, timeline spans, and table cells. Batch to "to"/hyphen.
- No AI-tell vocabulary. Strong prose voice.

**Top Wins**
1. (COPY) Batch-fix the ~16 heading em-dashes (to colon) and the ~115 en-dash ranges.
2. (SEO) Trim the over-length meta description to ~155 chars.
3. (SEO) Differentiate the duplicate H2 from the H1; confirm the FAQPage schema has matching visible Q&A.

---

### `/guild-serial-number-lookup/`  — src/pages/guild-serial-number-lookup.astro
**SEO**
- Title: `Guild Serial Number Lookup & Decoder | Date Your Guild Guitar` (~60 chars). Good, at the upper limit.
- Meta description: ~165 chars, slightly long. Trim to ~155: `Date any Guild guitar from 1952 to today. Full serial-number charts by era, a free decoder, Julian dating for modern models, and an authentication checklist.`
- H1 and headings: Single H1. Clean Part 1 to Part 8 H2 to H3 hierarchy. Minor: a second `<h2>` ("Professional Authentication Checklist") sits inside the `#part8` section under another H2; consider demoting to H3.
- Structured data: BreadcrumbList + TechArticle + WebApplication. Correct. No FAQ on page, so no FAQPage needed.
- Internal links: Good. `/sell-my-guild-guitar/` (x2), `/free-appraisal/` (x1). Add a Related Guides block linking the other brand SN pages.

**Copy Fixes (Anti-AI-Detection)**
- [AI-tell: "navigate"] `"the fastest way to navigate these model-specific charts..."` -> `"the fastest way to search these model-specific charts..."` (borderline, literal navigation; safe to soften).
- [en-dash ranges] ~30 in era labels and chart captions (`"The Numerical Sequence (1953–1959)"`, `"1965&ndash;1969"`). Batch to "to" in headings/captions, hyphen in cells. The literal em-dashes here are in CSS comments/JSON only, not prose.
- No prose em-dashes in body copy.

**Top Wins**
1. (SEO) Trim the meta description to ~155 chars.
2. (COPY) Batch-convert the ~30 en-dash ranges; soften "navigate" to "search".
3. (SEO) Add a Related Guides block and consider demoting the second `#part8` H2 to H3.

---

### `/gretsch-serial-number-lookup/`  — src/pages/gretsch-serial-number-lookup.astro
**SEO**
- Title: `Gretsch Serial Number Lookup Tool + Dating Guide` (~48 chars, keyword front). Good.
- Meta description: Present, ~150 chars, keyword-front, era list. Good.
- H1 and headings: Single H1 (`Gretsch Serial Numbers Guide`). It does not match the title's stronger keyword ("Lookup"); consider `Gretsch Serial Number Lookup and Dating Guide` for the H1. Clean hierarchy.
- Structured data: BreadcrumbList + TechArticle + WebApplication + FAQPage. FAQPage matches the 6 visible `<details>` FAQs. Best structured-data setup of the brand-SN pages.
- Internal links: Links `/sell-my-gretsch-guitar/` (x3). **Missing `/free-appraisal/` link** (the only appraisal path is via the sell page). Add a direct one in the CTA section or a FAQ answer.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash, headings, BATCH] ~10 heads use `Era N: Title — Year to Year` (e.g. `"Era 1: Sequential Numbers — 1939 to 1966"`). Replace the em-dash with a colon: `"Era 1: Sequential Numbers: 1939 to 1966"`.
- [em-dash, empty cells] In `seqTable`, 11 "Notes" cells contain a bare `"—"` as a "no note" placeholder. Replace each bare `"—"` with an empty string `""`.
- [en-dash ranges] ~132 in the era grid, seq table, and prose. Batch to "to"/hyphen. Do NOT touch `Filter'Tron`, `Duo-Jet`.
- No AI-tell vocabulary.

**Top Wins**
1. (SEO) Add a direct `/free-appraisal/` link.
2. (COPY) Batch-fix the ~10 era-heading em-dashes and blank out the 11 bare `"—"` placeholder cells.
3. (SEO) Align the H1 with the "Lookup" keyword; batch-convert the ~132 en-dash ranges.

---

### `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/`  — src/pages/vintage-fender-amplifier-serial-numbers-how-to-find-the-year.astro
**SEO**
- Title: `Vintage Fender Amplifier Serial Numbers - How To Find The Year` (~61 chars, slightly over; the tail will truncate). Recommended: `Vintage Fender Amp Serial Numbers: How to Date Yours` (51 chars).
- Meta description: Present, ~140 chars, keyword-front, lists methods. Good.
- H1 and headings: Single H1 (uses an en-dash). **Hierarchy skip:** the page goes H1 to H2 (decoder tool title only) then all body sections are `<h3>` with `<h4>` era sub-sections. Promote the main section heads from `<h3>` to `<h2>` and the era sub-heads from `<h4>` to `<h3>`.
- Structured data: BreadcrumbList + Article. The Article `headline` uses an en-dash. **No `WebApplication` schema** despite a working date-code decoder; add one. No FAQ, so no FAQPage needed.
- Internal links: Decent (`/sell-an-amplifier-or-effect/` x2, both Fender value guides, the Fender serial guide, `/about-me/`). **No `/free-appraisal/` link;** add one near the closing "Do You Have a Fender Amp You Want To Sell?" section.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] The H1 / `<title>` / schema headline use an en-dash: `"...Serial Numbers – How To Find The Year"` -> `"...Serial Numbers: How To Find The Year"`.
- [en-dash] The tube-chart code list `{row.letter} &ndash; {row.year}` and the JS error strings `A&ndash;T (1951&ndash;1970)`: replace with a hyphen or "=" (`"A - 1951"` or `"A = 1951"`).
- The 2 literal em-dashes are in code comments only. Body copy is clean, plainspoken first-person, no AI-tells.

**Top Wins**
1. (SEO) Fix the heading hierarchy (promote body H3s to H2, era H4s to H3).
2. (SEO) Add a `WebApplication` schema for the date-code decoder and a `/free-appraisal/` link.
3. (COPY) Replace the en-dash in the title/H1/headline with a colon.

---

**GROUP ROLLUP**
- (COPY) **En-dash ranges are the dominant issue across all 7 serial pages (~600+ total).** Handle as one batch pass per page (covered by the site-wide Dash Sweep).
- (COPY) **Section-heading em-dashes are the real AI-tells** and cluster in Gibson, Rickenbacker, and Gretsch. Batch-replace the em-dash separator in headings with a colon. The Gibson `"Clean — Reliable"` cells (~40) and the Martin line 67 source fix (~130) are the highest-count single fixes.
- (SEO) **Broken appraisal link on Gibson:** `/vintage-guitar-appraisal/` (x2) is not a route. Change both to `/free-appraisal/`.
- (SEO) **Inconsistent appraisal linking:** Gretsch and the Fender-amp page have no `/free-appraisal/` link; Martin is thin. Standardize every serial page to link its matching sell page + `/free-appraisal/` + the relevant value guide, and add Rickenbacker-style Related Guides blocks to Martin, Guild, and Gretsch.
- (SEO) **Schema/structure gaps:** the Fender-amp page skips H1 to H3 and lacks a `WebApplication` schema; Martin also lacks it. Gibson and Rickenbacker carry FAQPage schema with no visible FAQ accordion; add visible Q&A or the schema risks being ignored.

## Value Guides And Reverb Reviews

### `/vintage-fender-stratocaster-value-guide/`  — src/pages/vintage-fender-stratocaster-value-guide.astro
**SEO**
- Title: change to `Vintage Fender Stratocaster Value Guide (1954 to 1965)` (49 chars, no brand) or keep the branded form. Current `Vintage Fender Stratocaster Value Guide | Joe's Vintage Guitars` is ~60 chars with brand and is fine; keyword is front, brand at end. Keep.
- Meta description: keep. Current is ~155 chars, keyword-led, gives the year range and a reason to read. Strong.
- H1 and headings: One H1 ("Vintage Fender Stratocaster Value Guide") via PageHero, keyword-aligned. H2s are well structured, H3s nest under them correctly. No level skips. Good.
- Structured data: BreadcrumbList + Article present and correct. No FAQ on this page, so no FAQPage needed. Consider adding a `Product`/`AggregateOffer`-style schema is overkill here; leave as is.
- Internal links: Strong. Links to /free-appraisal/, /consignment/, /sell-my-fender-guitar/, /fender-guitars-serial-number-guide/. Add one link to the year sub-page: in the price table 1956 row or the dating section, link "1956" to `/vintage-fender-stratocaster-value-guide/1956/` so the child page is reachable (currently the parent does not link to its own 1956 child).
- Other: The price table and subhead use en-dashes in year ranges, which read as the dash rule violation (see copy fixes).

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] subhead `subhead="What a 1954&ndash;1965 Stratocaster is actually worth today..."` -> `What a 1954 to 1965 Stratocaster is actually worth today...`
- [en-dash] H2 `Vintage Stratocaster Values (1954&ndash;1965)` -> `Vintage Stratocaster Values (1954 to 1965)`
- [en-dash] every price range in the `prices` array, e.g. `"$85,000–$275,000"` -> `"$85,000 to $275,000"`, `"$62,000–$80,000"` -> `"$62,000 to $80,000"`, and the same for all 7 rows in both the `sunburst` and `custom` columns.
- [en-dash] dating list item `"Serial on the bridge plate: roughly 1950–1954"` -> `roughly 1950 to 1954`; `"Serial on the neck plate: roughly 1954–1963"` -> `1954 to 1963`; `"Neck plate with an 'L' prefix: 1963–1965"` -> `1963 to 1965`; `"...6-digit number with a large 'F' logo: 1965–1976"` -> `1965 to 1976`.
- [en-dash] driver card body `"...replaced parts can cost up to 50%."` is clean, but the Condition card and others are fine. No em-dashes in body prose found.
- Headings are already Title Case. No AI-tell vocabulary found.

**Top Wins**
- Replace all en-dashes (`–` / `&ndash;`) with "to" in price ranges, the subhead, the values H2, and the dating list. This is the single biggest copy fix and touches one array plus two strings.
- Add the internal link from this parent guide to its `/1956/` child page so the child is crawlable and gets link equity.

### `/vintage-fender-stratocaster-value-guide/1956/`  — src/pages/vintage-fender-stratocaster-value-guide/1956.astro
**SEO**
- Title: keep. `1956 Fender Stratocaster Value Guide | Joe's Vintage Guitars` (~58 chars), keyword front, brand end. Good.
- Meta description: keep. ~150 chars, specific (ash bodies, soft-V neck), keyword present, gives a reason to click. Strong.
- H1 and headings: One H1 via PageHero, keyword-aligned. H2/H3 hierarchy clean, no skips.
- Structured data: BreadcrumbList (3 levels) + Article present and correct. Good. The page states a hard value ("$55,000 to $75,000") that could support a `Product`/`AggregateOffer` schema, but this is optional and arguably not a real product listing. Leave as is.
- Internal links: Good. Links to parent guide (twice), /free-appraisal/, /consignment/, /sell-my-fender-guitar/. Consider adding a link to /fender-guitars-serial-number-guide/ since the page discusses build-date dating but never links the SN guide (the parent does).
- Other: en-dashes in the worth figure and note (see copy fixes). Note the hero subhead phrase "make this year its own thing" is casual; acceptable in Joe's voice.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] body `figure roughly <strong>$55,000&ndash;$75,000</strong> for a sunburst` -> `roughly <strong>$55,000 to $75,000</strong> for a sunburst`
- [ai-tell: "its own thing" is fine; no flag] No AI-tell vocabulary found.
- Headings are Title Case. No em-dashes in prose.

**Top Wins**
- Replace the one en-dash in the value figure with "to".
- Add a link to /fender-guitars-serial-number-guide/ in the specs or worth section to mirror the parent and help the seller date their build.

### `/vintage-fender-telecaster-value-guide/`  — src/pages/vintage-fender-telecaster-value-guide.astro
**SEO**
- Title: keep. `Vintage Fender Telecaster Value Guide | Joe's Vintage Guitars` (~59 chars), keyword front, brand end. Good.
- Meta description: keep. ~150 chars, names the model variants (Esquire/Broadcaster/Nocaster), keyword present, reason to click. Strong.
- H1 and headings: One H1 via PageHero. H2s well structured; the "Telecaster, Broadcaster, Nocaster & Esquire" H2 contains an ampersand entity which is fine. H3 model cards nest under H2s correctly. No skips.
- Structured data: BreadcrumbList + Article present and correct. No visible FAQ, so no FAQPage needed.
- Internal links: Strong. /free-appraisal/, /consignment/, /sell-my-fender-guitar/, /fender-guitars-serial-number-guide/. Good coverage. Optional: cross-link to the Stratocaster value guide as a related Fender guide.
- Other: 15-row price table is entirely en-dash ranges (see copy fixes); this is the heaviest dash cleanup of the group.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] every value in the `prices` array (15 rows), e.g. `"$150,000–$250,000"` -> `"$150,000 to $250,000"`, `"$80,000–$125,000"` -> `"$80,000 to $125,000"`, through `"$15,000–$35,000"` -> `"$15,000 to $35,000"`. Replace all 15.
- [en-dash] price labels with year ranges inside `prices`, e.g. `"Telecaster (1952–1953)"` -> `"Telecaster (1952 to 1953)"`, `"Telecaster (1955–1957)"` -> `"Telecaster (1955 to 1957)"`, and the same for every label that contains `–` (1958-1959, 1960-1962, 1963-1964, 1965-1968 rows). Keep hyphens in model names like `pre-CBS` if any.
- No em-dashes in prose. Headings are Title Case. No AI-tell vocabulary found.

**Top Wins**
- Replace all en-dashes (`–`) in the 15-row price table, both the value column and the year-range labels, with "to". Biggest single fix on this page.
- Add a related-guide internal link to /vintage-fender-stratocaster-value-guide/ to cluster the two Fender value guides.

### `/vintage-gibson-les-paul-market-value-guide/`  — src/pages/vintage-gibson-les-paul-market-value-guide.astro
**SEO**
- Title: keep. `Vintage Gibson Les Paul Market Value Guide | Joe's Vintage Guitars` is ~64 chars, slightly long; Google may truncate the brand. Optional trim to `Vintage Gibson Les Paul Value Guide | Joe's Vintage Guitars` (57 chars) by dropping "Market". Low priority.
- Meta description: keep. ~155 chars, names all four model tiers, keyword present, reason to click. Strong.
- H1 and headings: One H1 via PageHero. H2s clean. The FAQ component renders an H3 ("FAQs:") and the questions are `<summary>` spans (not headings), so no heading-level skip is introduced. Good.
- Structured data: BreadcrumbList + Article present. **MISSING: FAQPage schema.** This page renders a visible 8-question FAQ via `<FAQ faqs={faqs} ... />` but the `structuredData` array has no `FAQPage` block, so the FAQ rich-result eligibility is lost. Add a `FAQPage` schema built from the same `faqs` array (8 Q/A pairs). This is the highest-value SEO fix in the group.
- Internal links: Strong. /free-appraisal/, /consignment/, /sell-my-gibson-guitar/, and inside the FAQ answer to /how-to-read-gibson-serial-numbers/. Good. Optional: link to /sell-a-guitar-collection/ from the "What should I do before selling" FAQ or the consign card.
- Other: Heavy en-dash use in the `prices` array (`&ndash;`), `variants`, and FAQ answers (see copy fixes).

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] every value and year range in `prices` (12 rows), e.g. `"Standard (1952&ndash;1953)"` value `"$35,000&ndash;$45,000"` -> label `Standard (1952 to 1953)`, value `$35,000 to $45,000`. Replace `&ndash;` with `to` in all 12 labels and all 12 values, including `"$200,000&ndash;$500,000+"` -> `"$200,000 to $500,000+"`.
- [en-dash] `variants` bodies, e.g. `"White P-90s from 1952&ndash;1957, nickel humbuckers from 1957&ndash;1961..."` -> `from 1952 to 1957, nickel humbuckers from 1957 to 1961`; `"Black P-90s from 1953&ndash;1957, gold humbuckers from 1957&ndash;1961..."` -> `from 1953 to 1957... from 1957 to 1961`. Keep the `P-90` hyphen.
- [en-dash] FAQ answers: `"A 1950s Standard runs from about $25,000 to well over $400,000; 1970s..."` is already "to" (good), but the most-valuable answer `"The 1958&ndash;1960 Standard, the 'Burst.'"` -> `The 1958 to 1960 Standard`; and `"PAF... installed from 1957 into the early 1960s"` is clean.
- No em-dashes in prose. Headings are Title Case. No AI-tell vocabulary found (the "as faked and modified" lede is plain Joe voice).

**Top Wins**
- Add the `FAQPage` JSON-LD schema (8 Q/A from the existing `faqs` array). The visible FAQ already exists; the schema is missing, so this is a free rich-result win.
- Replace all `&ndash;` in the 12-row price table, the model variant descriptions, and the "Burst" FAQ answer with "to".

### `/martin-d-28-d-18-d-45-dreadnought-value-guide/`  — src/pages/martin-d-28-d-18-d-45-dreadnought-value-guide.astro
**SEO**
- Title: keep. `Martin D-28, D-18 & D-45 Dreadnought Value Guide | Joe's Vintage Guitars` is long (~70 chars incl. brand) and will truncate. Recommend trimming to `Martin D-28, D-18 & D-45 Value Guide | Joe's Vintage Guitars` (59 chars) by dropping "Dreadnought" from the title (keep it in the H1/description). The D-xx model hyphens are real hyphens, leave them.
- Meta description: keep. ~155 chars, names all three models and the era range, keyword present, reason to click. Strong.
- H1 and headings: One H1 via PageHero. H2s clean ("Finding Your Model and Year", "What Drives the Value", "Vintage Martin Dreadnought Values", "Selling Your Vintage Martin"). No level skips.
- Structured data: BreadcrumbList + Article present and correct. No visible FAQ, so no FAQPage needed. Good.
- Internal links: Good. /free-appraisal/, /consignment/, /sell-my-martin-guitar/, /martin-serial-and-model-numbers/. Solid coverage.
- Other: en-dash ranges throughout the `prices` array, `drivers` body, and a value note (see copy fixes).

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] every label and value in `prices` (10 rows), e.g. `"D-45 (pre-war, 1936&ndash;1942)"` value `"$450,000&ndash;$675,000"` -> label `D-45 (pre-war, 1936 to 1942)`, value `$450,000 to $675,000`. Replace `&ndash;` with `to` in all 10 labels and all 10 values. Keep the `D-45`/`D-28`/`D-18` hyphens (real model-name hyphens).
- [en-dash] subhead `subhead="What a vintage Martin dreadnought is worth, from pre-war herringbone to the 1960s, and what sets the number."` is clean (uses "to"). No change.
- [en-dash] driver `Age` body `"...values step down through the 1950s and &rsquo;60s as the build date gets later."` is clean. No dash issues in prose; the only dashes are the price ranges and model names.
- No em-dashes in prose. Headings are Title Case. No AI-tell vocabulary found.

**Top Wins**
- Replace all `&ndash;` in the 10-row price table (labels and values) with "to".
- Trim the title tag so "Joe's Vintage Guitars" survives truncation in the SERP.

### `/reverb-reviews/`  — src/pages/reverb-reviews.astro
**SEO**
- Title: keep. `Reverb Reviews | Joe's Vintage Guitars` (~38 chars) is short but accurate. Optional strengthen to `Reverb Reviews: 2,000+ Verified, 4.9 Stars | Joe's Vintage Guitars` (60 chars) to pull the rating into the SERP. Worth doing.
- Meta description: keep. ~150 chars, leads with the proof (2,000+ reviews, 4.9 stars), reason to click. Strong.
- H1 and headings: One H1 ("Reverb Reviews") via PageHero. The stats and body sections use `<span>`/`<p>`, not headings, so there are no H2s on the page. For a thin page this is acceptable, but adding one H2 (e.g. "What Buyers Say About Joe's Vintage Guitars") above the body copy would give the page a keyword-bearing subhead and improve structure. Recommend adding it.
- Structured data: BreadcrumbList only. **Consider adding an `AggregateRating`** (attached to the Organization/LocalBusiness via `@id` reference) reflecting the 4.9 / 2,000+ figure, since the page makes that claim visibly. Note: Google requires the rating to be about the business and sourced; since these are first-party Reverb numbers, keep it conservative or cite Reverb. Optional, medium value.
- Internal links: Weak for a money-adjacent page. The page links out to Reverb and Google Reviews and to the tel link, but does NOT link to any on-site money page. Add internal links to /free-appraisal/ and a sell page (e.g. /sell-my-fender-guitar/ or the relevant sell hub) so review-readers have an on-site next step. This is the biggest miss on the page.
- Other: External links correctly use `rel="noopener noreferrer"` and `target="_blank"`. Good.

**Copy Fixes (Anti-AI-Detection)**
- Clean. No em-dashes or AI-tells found. (The body copy uses commas and periods throughout; "not testimonials I picked out" is a plain contrast, not the "not just X, it's Y" pattern. Headings are Title Case.)

**Top Wins**
- Add internal links to /free-appraisal/ and a sell page in the body so this trust page funnels readers to a conversion action instead of only sending them off-site.
- Add one keyword-bearing H2 above the body copy to give the page structure and a secondary heading.
- Optionally enrich the title tag to surface "2,000+ Verified, 4.9 Stars" in the SERP.

**GROUP ROLLUP**
- (COPY) En-dashes are everywhere in this group: every price-range value and most year-range labels in all five value guides use `–` / `&ndash;`. Global fix: replace `–` and `&ndash;` with " to " in all `prices` arrays, the Strat/Telecaster value-H2s, the Strat subhead, and the Les Paul/Strat-1956 body figures. Keep real hyphens in model names (D-28, P-90, pre-war). This is the single largest violation count across the group.
- (SEO) The Les Paul page renders a visible 8-question FAQ but has NO `FAQPage` structured data. Add a `FAQPage` block built from the existing `faqs` array to win FAQ rich results. Highest-value SEO fix in the group.
- (SEO) /reverb-reviews/ has zero internal links to on-site money pages (it only links out to Reverb/Google). Add /free-appraisal/ and a sell-page link so the trust page funnels to conversion.
- (SEO) The Strat parent guide does not link to its own /1956/ child page. Add that internal link (and optionally a Strat<->Telecaster cross-link) so child pages are crawlable and the Fender value guides cluster.
- (SEO) Two title tags will truncate in the SERP: Martin (`...D-45 Dreadnought Value Guide | Joe's Vintage Guitars`, ~70 chars) and Les Paul (~64 chars). Trim "Dreadnought" / "Market" so the brand survives.

## Services, Legal, And Utility Pages

### `/repair/`  — src/pages/repair.astro
**SEO**
- Title: change to "Vintage Guitar Repair Background | Joe's Vintage Guitars" (54 chars). The current "Musical Instrument Repair" (the live phrasing) buries the real value. The page is really about how repair experience sharpens appraisals, and Joe is not taking repairs. A title that signals the appraisal angle will convert better. Keep brand at the end.
- Meta description: keep. "Joe's Vintage Guitars isn't taking on new repairs right now, but that bench experience is what makes the appraisals sharp. Here's how a luthier's eye reads a vintage guitar." (164 chars, slightly long; trim to ~158 by cutting "right now": "Joe's Vintage Guitars isn't taking on new repairs, but that bench experience is what makes the appraisals sharp. Here's how a luthier's eye reads a vintage guitar." = 158 chars.)
- H1 and headings: One H1 via PageHero ("Musical Instrument Repair"). H2s present and well-structured (Luthier's Edge, From the Bench to the Showroom, What a Repair Background Catches). The FAQ component renders its title as an H3 ("FAQs:") and case-study titles are H3s nested under H2s, so hierarchy is clean (H1 to H2 to H3, no skips).
- Structured data: BreadcrumbList present. The page has a visible 7-question FAQ but NO FAQPage schema. Add a FAQPage block to `structuredData` built from the `faqs` array (this is the single biggest SEO miss on the page, eligible for rich results).
- Internal links: The notice section links to `/free-appraisal/` and the phone, good. But there is no link to the sell pages or value guides even though the copy talks about Gibson Les Pauls, Fender Strats/Teles, and Martin D-28s. Add contextual links: from the case studies, link "1957 Gibson Les Paul" copy to `/sell-my-gibson-guitar/`, the Strat/Tele cases to `/sell-my-fender-guitar/`, and the Martin D-28 case to `/martin-d-28-d-18-d-45-dreadnought-value-guide/`. Also add a link to `/consignment/` near the closing FAQ.
- Other: `subheadHtml={true}` and `bgImage="/images/hero-background.jpg"` are set, dark-top-safe per the project rule. Good.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash] FAQ answer: "A lot of people who appraise guitars are salespeople first. I came up as a repairman, so I look at a guitar the way a mechanic looks at a car: how it was built and what has been done to it over the years, not just the surface." This one is clean. But check the case-study body for the 335: "This one looked flawless to a couple of dealers who passed it as all-original." Clean. No literal em/en-dashes (—/–) appear in the rendered copy; the long pauses use commas and colons already. The hyphens present (all-original, pre-war, top-dollar, D-28, stage-ready, fifty-or-sixty, non-working, non-original) are in-word hyphens and are fine.
- [heading case] FAQ component title prop is `mainTitle="FAQs:"` with `subTitle="Appraisals &amp; Repair Background"`. "Appraisals & Repair Background" is already Title Case. No fix needed.
- All page H2s are already Title Case ("The Luthier's Edge in Valuation", "From the Bench to the Showroom", "What a Repair Background Catches"). Note "in" and "the" are correctly lowercased minor words. Clean.
- The page is genuinely clean on em-dashes and AI-tells. Write: Clean. No em-dashes or AI-tells found. (Headings and dashes verified; only the missing FAQPage schema and thin internal linking are issues, both under SEO.)

**Top Wins**
- Add a FAQPage JSON-LD block from the existing 7-question `faqs` array (rich-result eligible, zero copy change).
- Add 3 to 4 contextual internal links from the case studies to the matching sell/value pages (Gibson, Fender, Martin) and to `/consignment/`.
- Retitle the tab to lead with the appraisal value ("Vintage Guitar Repair Background") since Joe is not taking repair work.

### `/consignment/`  — src/pages/consignment.astro
**SEO**
- Title: keep. "Vintage Guitar Consignment | Joe's Vintage Guitars" (50 chars). Keyword at front, brand at end, in range. Good.
- Meta description: keep. "Consign your vintage guitar with Joe's Vintage Guitars: professional photos, real authentication, a worldwide buyer network, and fees as low as 8%." (147 chars). In range, has a hook (8% fee), includes keyword. Good.
- H1 and headings: One H1 via PageHero ("Vintage Guitar Consignment"). Six H2s, all Title Case, with H3 card titles and `.con-sub` H3s nested correctly. No level skips. Clean hierarchy.
- Structured data: BreadcrumbList present. This is a service page; add a `Service` schema (`@type: "Service"`, serviceType "Vintage Guitar Consignment", provider = the business, areaServed US) to strengthen relevance. Optional but a quick win. There is no visible FAQ here, so no FAQPage needed.
- Internal links: This page has NO internal links except the CTA buttons (phone, #contact anchor). It mentions Reverb, demo videos, authentication, and "more than a decade selling correct instruments" but never links to `/free-appraisal/`, any sell-brand page, or `/about-me/`. Add: link "realistic, market-based valuation" (step 02) to `/free-appraisal/`; link "top-rated seller on the major platforms like Reverb" to `/reverb-reviews/`; link "more than a decade selling correct instruments" to `/about-me/`. This page is a dead end right now.
- Other: Clean structure. Consider a one-line cross-link to `/repair/` since both are service pages.

**Copy Fixes (Anti-AI-Detection)**
- [ai-tell: top-dollar/phrasing] Heading "What Drives a Top-Dollar Sale" and body "Getting top dollar on a vintage guitar comes down to a few things". "comes down to" is conversational, not an AI tell, leave it. "Top-Dollar" hyphenated is fine. No change required.
- [em-dash] No literal em/en-dashes in the copy. Long pauses use commas and colons ("comes down to a few things: a specific, accurate listing", "the details are everything. The same model can be worth $100,000+ if it's original and around $13,000 if it's been refinished"). Clean.
- [heading case] All six H2s are Title Case ("What Vintage Guitar Consignment Is", "Why Consign Your Vintage Guitar", "How the Consignment Process Works", "What Drives a Top-Dollar Sale", "Tips for a Smooth Consignment", "Why Consign With Joe's Vintage Guitars"). Minor words correctly lowercased. Clean.
- Sentence-length note: the four `advantages` card bodies and four `why` card bodies run a similar medium length, but they are distinct cards (not a paragraph run), so this reads fine. No action.
- Genuinely clean: Clean. No em-dashes or AI-tells found.

**Top Wins**
- Add internal links out of this page (it is currently a dead end): `/free-appraisal/`, `/about-me/`, `/reverb-reviews/`.
- Add a `Service` JSON-LD block alongside the existing BreadcrumbList.
- Cross-link to `/repair/` so the two service pages reinforce each other.

### `/sitemap/`  — src/pages/sitemap.astro
**SEO**
- Title: keep. "Sitemap | Joe's Vintage Guitars" (31 chars). Short is acceptable for a utility page; no keyword need.
- Meta description: keep. "A full list of pages on Joe's Vintage Guitars: sell-your-guitar pages, serial number guides, the blog, and more." (113 chars). Fine for a utility page.
- H1 and headings: One H1 ("Sitemap"). Each group title is an H2 (Main Pages, Sell Your Guitar, Serial Number Guides, Value Guides, Services, Policies). No skips. Clean.
- Structured data: None, and that is fine for an HTML sitemap. No action needed.
- Internal links: This IS the internal-links page, and it is thorough. One gap: the two service pages this group covers, `/repair/` and `/consignment/`, ARE listed under "Services", good. But `/thank-you/` is intentionally omitted (correct, it is a form-confirmation page that should not be indexed or linked). No `noindex` concern here.
- Other: No canonical issue (canonical="/sitemap/" present). Consider adding the missing live URLs if any exist, but the list looks complete against the known route set.

**Copy Fixes (Anti-AI-Detection)**
- [heading case] All group titles are Title Case already. Clean.
- [em-dash] No dashes in labels. The D'Angelico and Martin labels use `&rsquo;` and `&amp;` entities only. Clean.
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- No copy or SEO issues. This page is correct as built. Lowest-priority page in the group.

### `/privacy-policy/`  — src/pages/privacy-policy.astro
**SEO**
- Title: keep. "Privacy Policy | Joe's Vintage Guitars" (38 chars). Standard, fine.
- Meta description: keep. "How Joe's Vintage Guitars collects, uses, and protects the personal information you share when you use this website." (115 chars). Adequate for a policy page; could note it is short but no click-competition for this query, so leave it.
- H1 and headings: One H1 ("Privacy Policy"). Eight H2s (Information I Collect..., Log Data, Cookies, Service Providers, Security, Links to Other Sites, Children's Privacy, Changes to This Policy, Contact). No skips. Clean.
- Structured data: BreadcrumbList present. No FAQ here, nothing else needed. Good.
- Internal links: Links out to the live home URL and to email/phone. Fine for a policy page; no money-page linking expected. No action.
- Other: Consider adding a "Last updated" date line under the H1 for trust and because the policy says "I may update this policy from time to time." Minor.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash] No literal em/en-dashes. The one long aside uses a comma: "No method of transmission over the internet or electronic storage is 100% secure, though, so I can't guarantee absolute security." Clean.
- [heading case] All eight H2s are Title Case. "Links to Other Sites", "Changes to This Policy", "Children's Privacy" all correctly capitalized with minor words lowercased. Clean.
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- Add a "Last updated: [date]" line under the H1 (the policy promises updates are posted here). One-line trust win.
- Otherwise no changes needed.

### `/refund_returns/`  — src/pages/refund_returns.astro
**SEO**
- Title: keep. "Refund & Returns Policy | Joe's Vintage Guitars" (47 chars, the `&amp;` renders as one char). Fine.
- Meta description: keep. "Joe's Vintage Guitars refund and returns policy: the 30-day return window, how refunds and exchanges work, and what to do if a refund is late." (140 chars). In range, specific. Good.
- H1 and headings: One H1 ("Refund & Returns Policy"). H2s: Overview, Partial Refunds, Refunds, Exchanges, Gifts, Shipping a Return, Questions. No skips. Clean.
- Structured data: BreadcrumbList present. Adequate. No FAQ schema needed (no Q/A format on page).
- Internal links: Links to email and phone only. Acceptable for a policy page. No money-page linking expected. No action.
- Other: The route uses an underscore (`/refund_returns/`) which is unusual but matches the live WordPress slug, so keep it for redirect parity (do not "fix" to a hyphen without a redirect). Canonical correctly matches the underscore slug.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash] No literal em/en-dashes. Long clauses use commas: "Once your return arrives and I've inspected it, I'll email you to let you know whether the refund is approved." Clean. The "30-day", "regular-priced", "credit-card", and "non-error" style hyphens are in-word, fine.
- [heading case] All H2s are Title Case ("Partial Refunds", "Shipping a Return"). Clean.
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- No changes needed. Keep the underscore slug for redirect parity with the live site.

### `/thank-you/`  — src/pages/thank-you.astro
**SEO**
- Title: keep "Thank You | Joe's Vintage Guitars" (33 chars), but this page should be `noindex`. It is a post-form-submission confirmation page with no search value and would split conversions in Search Console. Add a robots noindex,follow meta for this route (verify whether Layout exposes a `robots` or `noindex` prop; if not, add one). This is the most important fix on the page.
- Meta description: keep. "Thanks for reaching out to Joe's Vintage Guitars. I'll get back to you shortly, usually the same day." (101 chars). Fine, but moot if noindexed.
- H1 and headings: One H1 ("Thank You!"). No H2s, but the page is short and a confirmation screen, so a flat H1-only structure is acceptable here. No skip flag.
- Structured data: None, correct for a thank-you page. No action.
- Internal links: Links to phone, email, `/` (Home), and `/blog/`. Good set for a confirmation page. Consider swapping or adding `/free-appraisal/` since a visitor who just submitted may want to send photos, but optional.
- Other: No canonical concern beyond the noindex recommendation.

**Copy Fixes (Anti-AI-Detection)**
- [em-dash] No literal em/en-dashes. The asides use commas: "I'll get back to you shortly, usually the same day. If you sent photos, even better, that's the fastest way for me to tell you what you've got." Clean.
- [heading case] H1 "Thank You!" and eyebrow "Message Sent" are Title Case. Clean.
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- Add `noindex,follow` robots meta to this confirmation page (prevents it competing in search and skewing conversion data).
- Optionally swap the "Read the Blog" CTA for "Send Joe Photos" linking to `/free-appraisal/`.

**GROUP ROLLUP**
- (SEO) `/repair/` has a visible 7-question FAQ but NO FAQPage schema. Add a FAQPage JSON-LD block from the existing `faqs` array. Highest-value SEO win in the group (rich-result eligible, no copy change).
- (SEO) `/consignment/` is an internal-link dead end. Add links to `/free-appraisal/`, `/about-me/`, and `/reverb-reviews/`, plus a cross-link from `/repair/` to the matching sell/value pages (Gibson, Fender, Martin). These two service pages currently leak no link equity to money pages.
- (SEO) `/thank-you/` should be `noindex,follow`. It is a form-confirmation page with no search value that can skew conversion reporting if indexed.
- (SEO) `/repair/` title buries the value. Retitle to lead with the appraisal/repair-background angle ("Vintage Guitar Repair Background | Joe's Vintage Guitars", 54 chars) since Joe is not taking repair work.
- (COPY) All six pages are clean on the anti-AI-detection rules: zero em/en-dashes, all headings Title Case, no AI-tell vocabulary, no "not just X" constructions. The copy work on this group is already done; the remaining gains are structural SEO (schema, internal links, noindex), not rewrites.

## Blog System And Posts

### `/blog/`  — src/pages/blog/index.astro
**SEO**
- Title: keep. `"Vintage Guitar Authentication & Selling Guides | Joe's Vintage Guitars Blog"` is 62 chars (one over the ideal 60 but acceptable), keyword "Vintage Guitar Authentication" is up front, brand at the end. If you want it tighter: change to `"Vintage Guitar Authentication & Selling Guides | Joe's Vintage Guitars"` (69) is longer, so instead trim to `"Vintage Guitar Authentication & Dating Guides | JVG Blog"` (56 chars). The current one is fine; only trim if Search Console shows truncation.
- Meta description: keep. 158 chars, includes the keyword, names Fender/Gibson/Martin, gives a reason to click. Good.
- H1 and headings: One H1, set by `BlogArchive` from `HEADING` = `"Vintage Guitar Resource Center: Authentication & Selling Guides"`. Keyword-aligned and unique. The H1 differs from the title tag (good practice). PostCard titles render as H2 (correct hierarchy: H1 then H2 cards). No skips.
- Structured data: present and correct, `BreadcrumbList` + `Blog`. Good. Note `Blog` schema has no `blogPost` array, which is optional, fine.
- Internal links: The archive links to category pages and posts. It does NOT link to the money pages. Add a short line in the `INTRO` or a CTA strip linking `/free-appraisal/` and `/sell-a-guitar-collection/`. The `ContactSection` at the bottom partly covers this.
- Other: `INTRO` const is reused verbatim on `/blog/page/[page]/`. Fine.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash] HEADING and title both use `Authentication & Selling Guides` — the `&` is fine, no dash here. The H1 is clean.
- [heading case] `"Vintage Guitar Resource Center: Authentication & Selling Guides"` is already Title Case. Good.
- Clean. No em-dashes or AI-tells found in this template's own copy.

**Top Wins**
- Add `/free-appraisal/` and `/sell-a-guitar-collection/` links into the archive intro or a small CTA row (SEO, internal-linking to money pages).
- Title is 62 chars; optionally trim to under 60 to avoid SERP truncation.

---

### `/blog/page/[page]/`  — src/pages/blog/page/[page].astro
**SEO**
- Title: change. Current `` `Blog (Page ${current}) | Joe's Vintage Guitars` `` is weak and keyword-thin. Change to `` `Vintage Guitar Guides, Page ${current} | Joe's Vintage Guitars` `` (about 56 chars at single digit). Puts the keyword in front instead of the bare word "Blog."
- Meta description: change. It is identical to page 1's description, which is duplicate-content risk across paginated URLs. Append the page number: `` `Page ${current} of vintage guitar authentication and selling guides from Joe's Vintage Guitars, covering Fender, Gibson, Martin serial numbers, dating, and values.` `` Keep it near 155 chars.
- H1 and headings: Same `BlogArchive` H1 on every paginated page, which means pages 2..N share an identical H1. Acceptable for paginated archives, but the title/meta should differ (see above). Hierarchy is fine.
- Structured data: only `BreadcrumbList`. Fine. (The `Blog` schema is intentionally omitted on inner pages, acceptable.)
- Canonical: present and self-referential per page (`/blog/page/N/`). Good. Consider adding `rel="prev"`/`rel="next"` if the Layout supports it (minor).
- Internal links: same as `/blog/` — no money-page links beyond ContactSection.

**Copy Fixes (Anti-AI-Detection)**
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- Differentiate the paginated title and meta from page 1 (SEO, avoids duplicate-meta across the paginated set).

---

### `/post/[slug]/`  — src/pages/post/[slug].astro  (template; copy lives in src/content/blog/*.md)
**SEO**
- Title: change the pattern. Current `` `${data.title} | Joe's Vintage Guitars` ``. Several post titles are already long (the 1962 Strat title alone is ~95 chars), so appending ` | Joe's Vintage Guitars` pushes many well past 60 and they will truncate in the SERP. Recommend: only append the brand when `data.title.length <= 45`, otherwise use the bare `data.title`. Example logic: `` title={data.title.length <= 45 ? `${data.title} | Joe's Vintage Guitars` : data.title} ``. This is a batch win affecting all 41 posts.
- Meta description: sourced from `data.metaDescription || data.excerpt`. Many posts set `metaDescription` identical to `excerpt`, and several of those run 300+ chars (the 1962 Strat and 1954 Goldtop metaDescriptions are ~470 and ~400 chars). Google truncates at ~160. Batch fix: trim every `metaDescription` in frontmatter to 150–160 chars with the keyword in the first 120. See batched guidance below.
- H1 and headings: Template renders exactly one H1 (`data.title`). Good. Post bodies start their sections at `##` (H2), so hierarchy is H1 then H2, no skips. The author box uses `<h2>` ("About the Author") and related uses `<h2>` ("Keep Reading") — multiple H2s is fine. No duplicate H1.
- Structured data: `BreadcrumbList` + `BlogPosting`. Correct types, includes author/publisher/dates/image. Strong. Missing opportunity: the authentication posts contain visible FAQ-style Q&A (the how-to-sell post has a real "Common Questions" section with `###` questions). Add a `FAQPage` schema branch in `[slug].astro` driven by an optional `faqs` frontmatter array, populated on the posts that have a Q&A section (how-to-sell, value posts). Flag as enhancement.
- Internal links: The template itself links Home / Blog / category (breadcrumb), author to `/about-me/`, and `hrefs.tel`. Good. The real internal-link problem is in the post bodies, see the critical batch finding below.
- Image alt text: hero uses `data.heroImageAlt || data.title` (good fallback). Author photo alt is descriptive. In-body `<figure>` images carry detailed alts. No empty/filename-only alts found in the 3 samples.
- Other (CRITICAL, batch): Many post bodies link to the standalone serial-number guides using a `/post/...` prefix. Those guides are NOT blog posts; they are root pages. Every one of these is a 404. See GROUP ROLLUP and batched guidance.

**Copy Fixes (Anti-AI-Detection)** — template chrome only
- The author bio paragraph reads: "He handles Fender, Gibson, Martin, and other classics nationwide and shares what he learns from real instruments, not spec sheets." This is clean (no dash, no AI-tell). Keep.
- [heading case] `"Keep Reading"` and `"About the Author"` are Title Case. Good.
- Clean. No em-dashes or AI-tells found in the template's own copy.

**Top Wins**
- Fix the `/post/` prefix on cross-links to standalone guide pages (broken-link bug, affects ~15 posts). Highest priority on this group.
- Cap the title length so long post titles do not truncate in the SERP.
- Trim over-long `metaDescription` frontmatter to ~160 chars.

---

### `/category/[slug]/`  — src/pages/category/[slug]/index.astro
**SEO**
- Title: keep. `` `${name} | Joe's Vintage Guitars Blog` ``. With the longest category name ("Serial Number & Dating Guides") this is ~53 chars. Good, keyword-aligned.
- Meta description: uses `CATEGORY_META[slug].description` (good, unique per category) with a fallback `` `${name} articles from Joe's Vintage Guitars.` ``. The `CATEGORY_META` descriptions run 110–150 chars and read well. Keep. One AI-tell to fix in that source (see copy fix).
- H1 and headings: One H1 (`name`). PostCards are H2. Clean hierarchy.
- Structured data: `BreadcrumbList` only. Acceptable for a category index. Optionally add a `CollectionPage` type. Minor.
- Canonical: present (`/category/${slug}/`). Good.
- Internal links: links to all posts in the category and to sibling categories via `BlogArchive`. No money-page links beyond ContactSection (same gap as `/blog/`).

**Copy Fixes (Anti-AI-Detection)** — copy lives in `src/lib/blog.ts` `CATEGORY_META`
- [ai-tell: deep-dive] In `CATEGORY_META["specific-model-highlights"].description`: `"Deep-dive authentication and spec guides for individual vintage models — year-by-year details..."` -> replace the framing and the em-dash: `"Authentication and spec guides for individual vintage models. Year-by-year details, originality checks, and what collectors look for."`
- [em-dash] Same string contains a spaced em-dash `models — year-by-year` -> replace with a period as shown above. (This is the one true em-dash in the blog system; it lives in `lib/blog.ts`, not the markdown.)
- [heading case] Category display names are already Title Case ("Specific Model Highlights", "Value & Evaluation", "Serial Number & Dating Guides"). Good.

**Top Wins**
- Fix the em-dash + "Deep-dive" AI-tell in `lib/blog.ts` (it renders as the category-page intro and the meta description, so it is doubly visible).
- Add money-page links to the archive component shared by category/blog pages.

---

### Sample post — `/post/1962-fender-stratocaster-authentication-guide/`  (Fender)
**SEO**
- Title (frontmatter): 95 chars. Way over 60. Trim to `"1962 Fender Stratocaster Authentication Guide: Slab Board & Pre-CBS Details"` (74) or shorter `"1962 Fender Stratocaster Authentication Guide"` (45) and let the template add the brand.
- Meta description (frontmatter): ~470 chars, identical to `excerpt`. Trim to ~155: `"How to authenticate a 1962 Fender Stratocaster: the slab-to-veneer rosewood transition, black-bottom pickups, pot codes, and every pre-CBS detail that matters."` (158).
- H1/headings: body starts at `##`, clean. Good.
- Internal links: links `/fender-guitars-serial-number-guide/` correctly (root, no `/post/` prefix) and `/free-appraisal/`. This post's links are CORRECT, which proves the fix pattern. Good model post.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash, ranges] Many year/measurement ranges use en-dashes: `"1954–1957"`, `"5.5–6.5k ohms"`, `"50–70%"`, `"1982–84"`. Per the client rule, number ranges must use "to": `"1954 to 1957"`, `"5.5 to 6.5k ohms"`, `"50 to 70%"`, `"1982 to 1984"`. Batch find-and-replace (see rollup).
- No prose em-dashes, no AI-tell vocabulary, no "not just X" construction. Sentence length varies well. Otherwise clean.

**Top Wins**
- Trim title and meta to length (SEO).
- Convert en-dash ranges to "to" (COPY, batch).

---

### Sample post — `/post/1954-gibson-les-paul-goldtop-authentication-guide/`  (Gibson)
**SEO**
- Title (frontmatter): `"1954 Gibson Les Paul Goldtop Authentication Guide: Every Detail That Matters"` = 76 chars. Trim the colon tail: `"1954 Gibson Les Paul Goldtop Authentication Guide"` (49) and let the template add the brand.
- Meta description (frontmatter): ~400 chars, identical to excerpt. Trim to ~155: `"Authenticate a 1954 Gibson Les Paul Goldtop: wrap tail bridge, no-line Kluson tuners, Grey Tiger caps, barrel knobs, P-90s, and how to spot a reissue."` (152).
- Internal links: links `/how-to-read-gibson-serial-numbers/` correctly (root prefix) and `/free-appraisal/`. Correct, good model.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash, ranges] `"0.88"–0.92""`, `"0.98"–1.02""`, `"7.2k and 8.0k"` is fine (uses "and"), `"1953–1955"`, `"1952 through 1956"` is fine. Convert the en-dashed ranges to "to": `"0.88" to 0.92""`, `"1953 to 1955"`.
- No em-dashes, no AI-tell vocabulary, no "not just X." Clean otherwise. Good varied sentence rhythm.

**Top Wins**
- Trim title and meta to length (SEO).
- Convert en-dash ranges to "to" (COPY, batch).

---

### Sample post — `/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/`  (how-to-sell)
**SEO**
- Title (frontmatter): `"How to Sell a Large Guitar Collection (Every Option, Honestly Explained)"` = 71 chars. With brand appended it truncates. Use the bare title (the length cap handles this).
- Meta description (frontmatter): ~480 chars, identical to excerpt. Trim to ~155: `"Selling a large guitar collection is a real job. We compare Reverb, eBay, Facebook, dealers, consignment, and auctions, then explain how Joe's handles it for you."` (159).
- H1/headings: body uses raw `<h2 id="...">` tags (e.g. `<h2 id="inherited">`) mixed with markdown `##`. Renders fine. One H1 from template. OK.
- Internal links: strong, links `/sell-a-guitar-collection/`, `/free-appraisal/`, and all five SN guides at their correct ROOT paths (no `/post/` prefix). This post's links are correct.
- Structured data: this post has a real "Common Questions About Selling a Guitar Collection" section with 7 Q&A pairs but no `FAQPage` schema is emitted. Add `FAQPage` via the template enhancement noted above. High value for a commercial page.

**Copy Fixes (Anti-AI-Detection)**
- [en-dash, ranges] `"$200 to $1,500"` is fine, but `"7 to 10 day"` fine, `"30 to 40 percent"` fine — this post mostly already uses "to". A few remain: `"10 to 25 percent"` fine. Scan for residual en-dashes in the table (`~13–15%+`, `30–40%`, `10–25%`) -> `~13 to 15%+`, `30 to 40%`, `10 to 25%`.
- [ai-tell: in today's market] not present here, but appears in two other posts (see rollup).
- No prose em-dashes. No "not just X." Sentence length varies well.
- THIN-CONTENT / migration artifact (SEO+copy): The top has a duplicated placeholder `"Contents\n\nContents"` (lines 15–17). Several sub-headings have NO body text beneath them: `"What Reverb Takes"` (117), `"The Actual Time Commitment on Reverb"` had its table drop out, `"The Math Most People Skip"`, and the `"See Real Collections We've Purchased"` / `"From Our Instagram"` blocks are empty stub paragraphs. Remove the duplicate "Contents" lines, and either fill or delete the empty headings. Empty H2/H3s hurt the outline and look broken.

**Top Wins**
- Remove the duplicated "Contents" placeholder and fill or delete the empty sub-sections (the Reverb fee table and time-commitment table did not migrate). Highest-value fix for this specific post.
- Add `FAQPage` schema for the 7-question Q&A block (SEO).
- Trim the over-long meta description.

---

**GROUP ROLLUP**

- **(SEO) Broken internal links: `/post/` prefix on standalone guide pages — affects ~15 posts.** Post bodies link to the serial-number guides and value guides as if they were blog posts. Those are root-level pages. Every one of these is a 404. Batch fixes (find -> replace across `src/content/blog/`):
  - `/post/how-to-read-gibson-serial-numbers/` -> `/how-to-read-gibson-serial-numbers/`
  - `/post/fender-guitars-serial-number-guide/` -> `/fender-guitars-serial-number-guide/`
  - `/post/how-to-identify-the-manufacture-date-of-a-gretsch-guitar/` -> `/gretsch-serial-number-lookup/` (wrong slug AND wrong prefix; in `gretsch-6120-history-value.md`)
  - Leave `/post/<actual-blog-slug>/` links alone (e.g. `/post/gibson-shipping-totals-1948-1979/`, `/post/gibson-les-paul-junior-guide/`, `/post/complete-dot-neck-es-330-guide-1959-1962/` are real posts and correct). Verify each `/post/...` target exists as a file in `src/content/blog/`; if it does not, it is one of these broken root-page links.

- **(COPY) En-dash number/year ranges everywhere — 372 occurrences across 24 files, zero em-dashes.** There is not a single em-dash (—) in the blog content; every flagged character is an en-dash (–) and almost all are ranges (e.g. `1958–1971`, `1955–1960`, `5.5–6.5k`, `30–40%`). The client rule says en-dashes in number ranges become "to". Batch find-and-replace: a digit-en-dash-digit pattern `(\d)\s*–\s*(\d)` -> `$1 to $2`, applied to body text AND to titles that contain ranges (`"...(1955–Present)"` -> `"...(1955 to Present)"`, `"Shipping Totals (1948–1979)"` -> `"(1948 to 1979)"`, `"1955-1958 TV Yellow..."` already uses a hyphen, leave it). Spot-check that no genuine hyphenated compound (D-28, pre-CBS, T-Top) gets touched; those use ASCII hyphens, not en-dashes, so the en-dash-only pattern is safe.

- **(SEO) Over-long titles and meta descriptions in frontmatter — affects most of the 41 posts.** Two batch actions: (1) In `[slug].astro`, cap the brand suffix so long titles do not truncate (`data.title.length <= 45 ? \`${data.title} | Joe's Vintage Guitars\` : data.title`). (2) Many posts set `metaDescription` equal to a 300–480 char `excerpt`. Trim every `metaDescription` to 150–160 chars with the primary keyword in the first ~120. The excerpt can stay long (it is used as card teaser text), but `metaDescription` must be tight.

- **(COPY) Isolated AI-tell phrases and two banned constructions — a handful of posts, not systemic.** Specific fixes: in `1973-fender-jazz-bass-vintera-iii.md` and `gibson-shipping-totals-1948-1979.md`, `"in today's market"` -> `"in the current market"`. In `mistakes-to-avoid-when-selling-a-vintage-guitar.md`, figurative `"navigate them"` -> `"handle them"`. In `1959-gibson-es-335-authentication-guide.md`, the "not just X, it's Y" construction `"The brass Lifton badge is not just a logo. It's a hallmark of the 'Golden Era.'"` -> `"The brass Lifton badge is a hallmark of the 'Golden Era.'"`. In `1952-fender-telecaster-authentication-guide.md`, the "whether you're a ... or a ..." opener `"Whether you are an heir looking to value an inherited instrument or a collector verifying a potential purchase, ..."` -> `"An heir valuing an inherited instrument and a collector verifying a purchase face the same task: ..."`. The literal uses of "vibrant" (finish color), "seamless maple back" (a real lutherie term), and "time capsule"/"deep dive" inside quoted collector phrasing are acceptable and can stay.

- **(SEO) Migration artifacts in `how-to-sell-a-large-guitar-collection`: duplicated "Contents" header, dropped fee/time tables, and several empty sub-headings.** Remove the duplicate "Contents" lines, restore or delete the empty `"What Reverb Takes"` / time-commitment / "See Real Collections" stubs, and add a `FAQPage` schema for its 7-question Q&A block. Audit the other ~38 posts for the same empty-heading and dropped-table pattern (grep for two consecutive heading lines with no text between them).

## Shared Components (Site-Wide)

### `Layout.astro` (site-wide `<head>` + global JSON-LD)  — src/layouts/Layout.astro

**SEO**
- Default Title: `"Joe's Vintage Guitars | We Buy Vintage Guitars Nationwide"` is 54 chars, good length, but it leads with the brand instead of the primary keyword. For a homepage default that propagates as the fallback `<title>`, leading with the action keyword is stronger. Change to "We Buy Vintage Guitars Nationwide | Joe's Vintage Guitars" (56 chars) so "We Buy Vintage Guitars" sits at the front and the brand anchors the end. Every page that does not pass its own `title` inherits this, so the keyword-first form helps the homepage and any unset page.
- Default Meta description: `"Sell your vintage guitar the easy way with Joe's Vintage Guitars. Get a free evaluation and get top dollar for your guitar today! Same day payment!"` is 145 chars, in range, has a keyword and a reason to click. Keep. Minor: "the easy way" is filler; an optional tighter version is "Sell your vintage guitar to Joe's Vintage Guitars. Get a free evaluation, top dollar, and same-day payment. Trusted nationwide buyer since 2009." (143 chars) if you want a year/trust signal. Optional, not required.
- Canonical: Present and correct (`<link rel="canonical">` built from `SITE_URL + pathname`, with per-page override). Good.
- ogImage / ogImageAlt: Present with sensible defaults and full OG + Twitter tag set. Good.
- Structured data (global): This is the high-priority item. The global graph is rich (ProfessionalService with address, geo, telephone, contactPoint, openingHours, aggregateRating, sameAs, plus WebSite, MusicStore+Organization, LocalBusiness, Place, 2 Service nodes). Two gaps:
  1. `aggregateRating` lives only on the `ProfessionalService` node, not on `LocalBusiness`. The `LocalBusiness` node (`#localbusiness`) is the one most likely to win the rich-result, and it has no rating. Add the same `aggregateRating` block (ratingValue "5", ratingCount "405", bestRating "5", worstRating "1") to `localBusinessSchema` so star ratings can attach to the LocalBusiness entity.
  2. `LocalBusiness` and `MusicStore` nodes are missing `openingHoursSpecification`, `sameAs`, `image`, and `email`. The 24/7 hours, social `sameAs`, and a `logo`/`image` only exist on the ProfessionalService node. Add `sameAs: socialSameAs`, `image: ${SITE_URL}/images/joes-vintage-guitars-logo.jpg`, and the `openingHoursSpecification` array to `localBusinessSchema` so the LocalBusiness entity is self-complete.
  - Verify the `ratingCount: "405"` is the real current review count. The Organization `description` says "405" but the homepage default OG and other pages may cite a different number; the live ContactSection/Footer audit should confirm. If the true count differs, this is a structured-data accuracy issue (Google penalizes mismatched review counts).
- Internal links: N/A (layout shell).
- Other: `lang="en"` set, skip link present, robots tag correct. Solid technical base.

**Copy Fixes (Anti-AI-Detection)**
- [ai-tell: specializes in / generic] The global Organization `description` is fine but slightly generic: `"Joe's Vintage Guitars specializes in purchasing and collecting vintage guitars and other stringed instruments. With years of expertise, Joe Dampt offers top cash for renowned brands like Fender and Gibson."` No em-dashes, no banned words. "renowned brands" is borderline marketing-speak but acceptable. Keep as is; it is schema text, not visible copy.
- No em-dashes or en-dashes found in any rendered copy in this file. (The em-dashes in `// comments` are code comments, not output, so they are exempt.)
- Clean. No em-dashes or AI-tells found in rendered copy.

**Top Wins**
- (SEO, high priority, propagates everywhere) Add `aggregateRating`, `sameAs`, `image`, and `openingHoursSpecification` to the `LocalBusiness` JSON-LD node so the entity most likely to earn a rich result is complete with stars.
- (SEO) Flip the default title to keyword-first: "We Buy Vintage Guitars Nationwide | Joe's Vintage Guitars".
- (SEO) Confirm `ratingCount: "405"` matches the live review count, since it is asserted site-wide.

### `Header.astro` (site-wide navigation)  — src/components/Header.astro

**SEO**
- Title / description / canonical: N/A (component, no Layout).
- H1 and headings: No headings rendered here. Correct, the header should not contain an H1.
- Structured data: A `SiteNavigationElement` JSON-LD would be a minor enhancement but is not required. Skip unless doing a full schema pass.
- Internal links: Strong. Header links to Home, About, Blog, Contact, the full Sell dropdown (Fender/Gibson/Martin/Collection), Free Appraisal, and all serial-number guides. The image `alt` on the logo doubles as a keyword-rich anchor. No money-page gaps.
- Image alt text: Logo `alt="Joe's Vintage Guitars - Preserving History One Guitar at a Time"` is descriptive and good. Social-icon `<img>` (Reverb) uses `alt={s.label}` ("Reverb"), acceptable. No filename-only alts.
- Other: Nav labels come from `site.ts`. All link text is Title Case already ("Sell My Guitar", "Free Appraisal", "Serial Numbers & Dating"). The CTA micro-labels "Call Me!" and "Call Or Text!" are fine, conversational, not AI-tells.

**Copy Fixes (Anti-AI-Detection)**
- Clean. No em-dashes or AI-tells found.

**Top Wins**
- (SEO) No action needed. Header internal linking is already a model for the rest of the site, every money page is one or two clicks away.

### `Footer.astro` (site-wide footer)  — src/components/Footer.astro

**SEO**
- Title / description / canonical: N/A (component).
- H1 and headings: No headings rendered. Correct for a footer.
- Structured data: N/A here (handled in Layout).
- Internal links: Good coverage. Footer links to Home, About, Blog, Contact, Sell My Guitar, Instrument Repair, Free Appraisal, Consignment, Inventory (Reverb, external), plus Sitemap/Privacy/Refund/Designed by MFWD. One gap: the footer does not surface any serial-number guide or the brand-specific sell pages (Fender/Gibson/Martin) that the header dropdown exposes. Consider adding the three brand sell pages or the most-trafficked SN guide to the footer main menu so they get a site-wide internal link (footers count for crawl depth and link equity). Name to add: at least `/sell-my-fender-guitar/` and `/free-appraisal/` is already there.
- Image alt text: Footer logo `alt="Joe's Vintage Guitars"` is acceptable (brand name). Could be slightly richer but fine.
- Other: Copyright line renders `Copyright {year} | Joe's Vintage Guitars | Sitemap | Privacy Policy | Refund and Returns | Designed by MFWD`. Clean.

**Copy Fixes (Anti-AI-Detection)**
- Clean. No em-dashes or AI-tells found. ("Call Us!" label and all menu labels are plain and Title Case.)

**Top Wins**
- (SEO) Add the brand sell pages (`/sell-my-fender-guitar/`, `/sell-my-gibson-guitar/`, `/sell-my-martin-guitar/`) to the footer menu so every page links to them, deepening internal linking to the highest-commercial-value pages.

### `ContactSection.astro` (site-wide contact block)  — src/components/ContactSection.astro

**SEO**
- Title / description / canonical: N/A (component, included on many pages).
- H1 and headings: Renders `<h2 class="jvgct__heading">Talk With<br />Joe Today</h2>`. This is a correct H2 (the page that includes it owns the H1). "Talk With Joe Today" is already Title Case. Good. One note: because this H2 appears on every page that includes `<ContactSection />`, the phrase "Talk With Joe Today" is duplicated site-wide, which is fine for a contact block but means it is not a keyword-bearing heading. No change needed; it is a conversion heading, not an SEO heading.
- Structured data: This block shows phone, email, and a postal address. A `ContactPoint`/`PostalAddress` is already covered by the global Organization schema in Layout, so no extra schema is needed here. Good (no duplication).
- Internal links: The address links to Google Maps (external), phone is `tel:`, email is `mailto:`. The form posts to the shared handler. No internal money-page links here, which is fine for a contact block, but consider one text link under the form to `/free-appraisal/` ("Prefer a full appraisal? Start here") to route intent. Optional.
- Image alt text: Logo `alt="Joe's Vintage Guitars"`. Acceptable.
- Other: Form labels are clear and Title Case ("First Name", "Last Name", "How Can We Help?"). The reply-method label "Best way to reply:" is sentence case but it is a form micro-label, not a heading, so it is acceptable, though "Best Way To Reply:" would match the Title-Case convention used on the field labels above it.

**Copy Fixes (Anti-AI-Detection)**
- [heading case] Form micro-label `"Best way to reply:"` -> `"Best Way To Reply:"` (low priority, optional, to match the Title Case of the adjacent field labels "First Name" / "Last Name" / "How Can We Help?").
- The lede `"Have a vintage guitar to sell or a question? I'm here to help."` is clean, warm, on-voice. No em-dashes, no AI-tells. Keep.
- The note `"*If you have photos, you will have the option to upload them after clicking submit"` is clean. Keep.
- Clean. No em-dashes or AI-tells found. (Only the optional Title-Case nit above.)

**Top Wins**
- (COPY) Optional: Title Case the "Best way to reply:" micro-label to "Best Way To Reply:" for consistency.
- (SEO) Optional: add a single text link to `/free-appraisal/` beneath the form to capture appraisal-intent visitors who scroll to the contact block.

**GROUP ROLLUP**
- (SEO) Complete the `LocalBusiness` JSON-LD node in `Layout.astro`: add `aggregateRating`, `sameAs: socialSameAs`, `image`, and `openingHoursSpecification`. Right now the rating, social profiles, hours, and logo live only on the `ProfessionalService` node, so the `LocalBusiness` entity (the one most likely to earn the star-rating rich result) is thin. This propagates to every page, so it is the single highest-value fix in the group.
- (SEO) Verify `ratingCount: "405"` in the global schema is the true current Google review count, since it is asserted on every page and a mismatch with the live profile can suppress the rich result.
- (SEO) Flip the Layout default `<title>` to keyword-first: "We Buy Vintage Guitars Nationwide | Joe's Vintage Guitars" (56 chars), so the homepage and any page lacking its own title lead with the primary keyword.
- (SEO) Add the three brand sell pages (`/sell-my-fender-guitar/`, `/sell-my-gibson-guitar/`, `/sell-my-martin-guitar/`) to the footer menu so the highest-commercial-value pages get a site-wide internal link, not just a header-dropdown link.
- (COPY) The shared components are clean of em-dashes and AI-tell vocabulary. The only copy nit across the group is the sentence-case form micro-label "Best way to reply:" in `ContactSection.astro`, optionally Title-Cased to "Best Way To Reply:". Site-wide copy is in good shape.

---

# Priority Checklist

Work in tiers. Each item links back to the detail above.

## Tier 1: Biggest Wins, Fewest Edits

1. **Run the Dash Sweep** (Site-Wide Fix 1). Start with the entity forms (`&ndash;`, `&mdash;`) the last pass missed, then the source one-liners (Martin `line 67` and `298` clear ~130 at once), then the en-dash ranges, then the prose em-dashes. This is the single largest job and the highest-impact copy fix.
2. **Complete the `LocalBusiness` JSON-LD** in `Layout.astro` (add `aggregateRating`, `sameAs`, `image`, `openingHoursSpecification`) and verify the `405` review count is current. One edit, every page benefits.
3. **Fix the broken internal links:** Gibson serial page `/vintage-guitar-appraisal/` becomes `/free-appraisal/` (x2), and the `/post/<guide>` 404 links across about 15 blog posts become root paths.

## Tier 2: High Value

4. **Add `FAQPage` schema** to the pages that show a visible FAQ but ship none: the Les Paul value guide (8 Qs), `/repair/` (7 Qs), `/about-me/` (5 Qs), and the "how to sell a large collection" blog post (7 Qs). Add the 3 missing FAQs to the Gibson sell page schema (it only has 5 of 8).
5. **Title and meta cleanup:** trim the 6 over-long titles, fix the all-caps brand words and the missing "Joe's" apostrophe on the sell titles, trim the sell-my-fender meta (~210 chars), cap the blog post title suffix, and trim the long blog `metaDescription` fields.
6. **Recurring copy fixes:** the "not just X, it's Y" lines (Gibson x2, Martin x2, the ES-335 post), the "in today's market" lines, the sentence-case Meet-Joe subtitle on four sell pages, and the "deep dive" instances.
7. **Tighten internal linking to money pages:** add a `/free-appraisal/` link to the Gibson sell page, Gretsch serial page, and amp serial page; give `/consignment/` and `/reverb-reviews/` in-body links so they are not dead ends; add Related Guides blocks to the Martin, Guild, and Gretsch serial pages; add the three brand sell pages to the footer menu.
8. **The Reverb Reviews GEO call:** render the full review set on `/reverb-reviews/` (or at least add internal links, an H2, and an `AggregateRating`). As built, it links out and search engines see almost nothing.

## Tier 3: Polish

9. **Heading hierarchy:** promote the keyword-rich section heads on `/free-appraisal/` from H3 to H2 (right now the only H2 is the throwaway "Get in Touch!"), fix the H1-to-H3 skip on the amp serial page, and de-duplicate the H1/H2 on the Rickenbacker page.
10. **Set `/thank-you/` to `noindex, follow`** so the confirmation page does not compete in search or skew conversion data.
11. **Clean the migration artifacts** in `how-to-sell-a-large-guitar-collection.md` (duplicate "Contents" header, empty sub-sections, dropped fee/time tables) and grep the other ~38 posts for the same empty-heading pattern.
12. **Strengthen weak H1s and titles** on `/about-me/` ("About Me") and `/contact-me/` ("Contact Me") to lead with the role and keyword.
13. **Add a visible FAQ accordion** to the Gibson and Rickenbacker serial pages to back their FAQPage schema, or remove the schema-only FAQ.
14. **Fix the Martin sell page submit button** label "SENT" (reads as already-sent) to "SUBMIT".
15. **Add `WebApplication` schema** to the Martin and Fender-amp serial pages (their decoders work but the schema is missing; the other serial pages have it).
