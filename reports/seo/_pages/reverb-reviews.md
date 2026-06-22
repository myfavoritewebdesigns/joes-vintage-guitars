## reverb-reviews

**Page type / important caveat.** `/reverb-reviews/` is structurally unlike the long-form guide pages. It is a thin Astro wrapper (`src/pages/reverb-reviews.astro`) that injects a pre-rendered HTML body (`reference/reverb-reviews-body.html`, ~33k lines) consisting of: (1) one intro banner paragraph, (2) a stats header (4.9★ / 2,191 total / 2,071 five-star), (3) a flat reverse-chronological wall of **2,052 archived `.rv` review cards** (each = stars + product title + buyer name + date, ~1,380 with a short body quote), and (4) a single CTA button to the live Reverb storefront. There are **no editorial sections, no headings beyond the stats header, no brand grouping, and no filters** — and per `linkgraph.md` the page has **0 in-content out-links AND 0 in-content inbound links** (a double-orphan: one of 6 orphan pages, and one of the 17 under-linked pages).

This shapes every recommendation below: there is almost nothing on the page to *anchor a contextual link to* (the review cards are not link targets and shouldn't be turned into 2,052 links), so the realistic SEO levers are (a) add a small **editorial intro / "trust" block above the wall** that carries a handful of contextual links to the money pages, (b) add a small **footer/closing block below the CTA** with sell-page links, and (c) most importantly, fix the **inbound** orphan status from other pages (covered in the linkgraph groundwork, noted here for the cross-page pass). Do NOT thread links into the review list itself.

---

### 1. Internal links to ADD

The page body has zero in-content links. The intro banner copy ("honest grading, expert packing, world-class service... collector or player... find your next dream piece") and the closing CTA are the only natural anchor surfaces. **Recommendation: add a short intro lede block (2–3 sentences) under the stats header and a short closing block under the Reverb CTA**, and place the links there. Keep density moderate — the page is enormous but the *editorial* copy is tiny, so cap at ~6–8 links total across the two new blocks (the 1-link-per-120-180-words rule applies to prose, and there is very little prose here; over-linking a thin intro reads as stuffed).

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Intro lede (NEW) — "honest grading... the confidence to find your next dream piece" | get a free vintage guitar appraisal | /free-appraisal/ | `/free-appraisal/` is the single most link-starved high-intent money page (pos 16.1, page 2; the page that "most needs inbound links" per the brief). This high-trust social-proof page is an ideal donor. Anchor varies from the 19×-overused "Free Appraisal". |
| Intro lede (NEW) — "whether you are a collector or a player" / sellers reading reviews before selling | sell your vintage guitar to Joe | /sell-a-guitar-collection/ OR /free-appraisal/ | Many readers landing on a reviews page are vetting Joe before selling. `/sell-a-guitar-collection/` is deep at pos 27.9 and needs the most equity to climb; a trust page is a strong place to pass it. |
| Intro lede (NEW) — mention of Reverb storefront / "the gear we curate" | browse Joe's current Reverb inventory | https://reverb.com/shop/joe-s-gear-emporium-4 | Already the page's external CTA; reinforce it in-copy (external, not counted toward internal density). |
| Closing block under CTA (NEW) — "ready to sell your own?" | sell my Fender guitar | /sell-my-fender-guitar/ | Fender is the #1 brand in the review set (338 of 2,052 cards). Topically the dominant brand on this page; pos 10.3, in the 5-20 climb band. Use exact "sell my fender guitar" GSC anchor. |
| Closing block under CTA (NEW) | sell my Gibson guitar | /sell-my-gibson-guitar/ | Gibson is the #2 brand (258 cards); pos 11.1, climb band. |
| Closing block under CTA (NEW) | sell my Martin guitar | /sell-my-martin-guitar/ | Martin is #3 acoustic brand (82 cards); pos 9.1. |
| Closing block under CTA (NEW) — for collection/estate sellers vetting trust | sell a whole guitar collection | /sell-a-guitar-collection/ | Reinforces the deepest-ranked sell page (pos 27.9) with a varied anchor; collection sellers are exactly who reads a 2,000-review trust page. |
| Closing block under CTA (NEW) — optional, if amp reviews are highlighted | sell an amplifier or effect | /sell-an-amplifier-or-effect/ | 18 Marshall + 10 Vox + numerous Fender amp cards in the set; under-linked target (pos 8.9). Only add if you surface an amp callout (see §4/§5), else skip to avoid stuffing. |

**Serial-guide links are a poor fit here** and should NOT be forced — this page has no dating/identification content to hang a "Fender serial number guide" anchor on. The priority serial-guide targets (`/fender-guitars-serial-number-guide/`, `/how-to-read-gibson-serial-numbers/`, etc.) are better served from the guide/value/blog pages, not this trust page. The only defensible serial-guide link would be a single line in the intro like "wondering what your guitar is? start by dating it" — optional, low priority; if added, link `/how-to-read-gibson-serial-numbers/` (biggest opportunity, pos 11.5) or `/fender-guitars-serial-number-guide/`. Cap at one if used.

**Most important action is INBOUND, handled cross-page:** make this page non-orphan by linking *to* `/reverb-reviews/` from high-trust contexts on `/about-me/`, the homepage trust/testimonials section, and the `/sell-my-*/` testimonials sections (anchor e.g. "read all 2,191 Reverb reviews" / "our verified Reverb reviews"). That is the real equity fix; flag it for the linkgraph/cross-page pass.

---

### 2. Section-level related posts

The page has no major editorial sections, so the per-section "Related reading" block pattern used on guide pages does **not** apply here — there is nowhere mid-page to insert it without breaking the review wall. **One inline "Related reading" block fits, in the NEW closing block under the Reverb CTA**, advertising 2–3 posts that pair social proof with seller intent:

- **/post/best-online-platforms-sell-vintage-guitars/** — natural follow-on: "you've seen the reviews, here's how selling directly compares to the platforms." High relevance for a reader weighing where to sell.
- **/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/** — the site's strongest sell-side explainer; pairs with the collection-seller audience that reads a 2,000-review trust page.
- **/post/mistakes-to-avoid-when-selling-a-vintage-guitar/** — trust/confidence angle; reassures the vetting reader.

Do NOT scatter related-post blocks through the card list. One closing block only.

---

### 3. FAQ gaps

The page has **no FAQ at all**, and a short one would genuinely help — it gives crawlable text, supports a `FAQPage` schema (note: this page deliberately ships **no Review/Rating microdata** per the frontmatter/PR #12 decision, so keep any FAQ answers free of self-asserted star claims beyond what the visible header already states), and answers the exact questions a review-vetting visitor has. Suggested 3–4 Q/A drawn from the page's own topic, to live in the NEW closing block:

- **Q: Are these Reverb reviews real / verified?** A: Yes — every review is pulled from Joe's verified Reverb storefront (Joe's Gear Emporium), where buyers can only review after a completed purchase. All 2,191 are archived here; link out to the live storefront.
- **Q: How many reviews does Joe's Vintage Guitars have, and what's the average rating?** A: 2,191 total reviews, 4.9 out of 5 average, with 2,071 five-star — restating the header stats in answer form (matches the visible header; no new/inflated numbers).
- **Q: Why are the reviews shown here instead of just linking to Reverb?** A: Reverb's review data isn't crawlable, so Joe archives the full set on-site so buyers (and search/AI engines) can read the complete history in one place. (This is literally the page's design rationale — good GEO answer.)
- **Q: Can I sell my guitar to Joe even if I buy on Reverb?** A: Yes — Joe both sells on Reverb and buys vintage guitars directly nationwide; link `/free-appraisal/` + the relevant `/sell-my-*/` page. (This Q is the conversion bridge — high value.)

Mark: none of these require a DB fact (they're about the business/process, not guitar specs), so no VG-#### citations needed.

---

### 4. Relevant reviews (from reviews-videos.md)

This page **already IS the review corpus** (the full 2,191-review Reverb archive), so the job here is not to *import* a curated review but to note which curated Google/on-site reviews from `reviews-videos.md` §A would reinforce the NEW intro/closing trust blocks (the Reverb cards are short; the curated ones have full bodies and name the experience):

- **R1 (Jessica Hammond)** — "easy process, full payment at FedEx," generic 3-guitar sell. Best fit for the intro lede as a one-line pull quote establishing the sell experience behind the reviews.
- **R10 (My School In Azia)** — "phone appraisal, sold in hours, *not a pawn shop*." Strong differentiator quote for the intro trust block.
- **R25 (Rich S.)** — "photos → call → offer + paid shipping." Clean process-proof quote for the closing "ready to sell?" block.
- **R18 (Jim W.)** / **R21 (Missy)** — appraisal responsiveness/process; pair with the `/free-appraisal/` link in the intro.

Verify against the "Already placed" note (R1–R6 surfaced on `/sell-my-fender/`) before reusing; R10/R18/R21/R25 appear unplaced. Keep it to ONE pull quote per new block (intro + closing) so the page doesn't become a second testimonials wall.

---

### 5. Relevant videos (from reviews-videos.md)

No video is currently embedded. The page's topic is "buyer trust / proof of transactions," so the best-fit embeds (in the NEW intro or closing block, not in the card list):

- **uSu-Ld-xgnI** — "Free Vintage Guitar Appraisal | Joe's Vintage Guitars" — pairs with the `/free-appraisal/` link; converts a trust visitor.
- **SFjsaZsEHqI** — "Buying Over 100 Vintage Fender Amps & Rare Guitars in Arizona!" (11.3k views, top channel video) — strongest *proof-of-scale* video; ideal under the stats header ("here's the volume behind 2,191 reviews"). Also supports the optional amp-sell link in §1.
- **NTw8EcrS5Y8** — "I Spent $100,000 on Guitars in One Week!" — secondary proof-of-scale option if SFjsaZsEHqI is used elsewhere.

Recommendation: embed **at most one** (SFjsaZsEHqI under the stats header is the highest-value single pick) to avoid weighing down an already very long page. Use the existing `<lite-youtube>` pattern.

---

### 6. Social embeds (from social.md)

This page is trust/proof, not model-specific, so model-demo embeds (Priority A/B) don't fit. The relevant candidates are the Priority C "new arrivals / Reverb cross-link" posts, which reinforce the page's external CTA:

- **C7 (Instagram, /p/DYz-G_jluKS/)** — "A few gems that just hit our Reverb" ('49/'60/'51 Martins, '62/'71 ES-335s). Fits a "fresh inventory" note next to the Reverb storefront CTA. **NEEDS-JOSH:** IG oEmbed requires confirming MFWD's FB Graph token (per social.md NEEDS-JOSH) — flag before embedding; falls back to script-blockquote.
- **C8 (Instagram, /p/DZGgqQrj1Cv/)** — top IG post (2.4k), 1960s Gibson fretless bass conversion now on Reverb. Same "new arrivals → Reverb" purpose; pick one of C7/C8, not both. **NEEDS-JOSH:** same IG token caveat.

Low priority overall — the YouTube proof-of-scale embed (§5) is a cleaner, token-free trust signal than the IG arrivals posts. Treat social embeds here as optional. **NEEDS-JOSH** also: Reverb itself has no oEmbed (per social.md), so the storefront stays a deep link (already the case).

---

### 7. Dataset-schema tables

**None.** `dataset-schema.md` does not list this page, and correctly so: the review wall is not a structured lookup/observational dataset (it's testimonial prose), and the stats header is a 3-number summary, not a table. Do **not** add `Dataset` markup here. (Also note the page deliberately ships no Review/Rating/AggregateRating microdata per the frontmatter rationale + the 2026-06-12 decision-log removal of self-placed aggregateRating — keep it that way; do not "helpfully" add `AggregateRating` to the 4.9/2,191 header.) A `FAQPage` schema for the §3 FAQ is the only structured-data addition recommended.

---

### 8. DB fact check

This page makes **almost no checkable factual claims** — the review cards are buyer-supplied product titles + names + dates, not Joe's factual assertions about serial ranges, production counts, patents, or values. There is nothing on the page that contradicts any VG-#### fact. Findings:

- **No contradictions found.** No serial ranges, dating claims, production figures, patent numbers, or valuations are asserted in the page's own voice. The DB index (VG-0001..VG-0112) has no overlap with this page's content.
- **Statistical claims to verify (business facts, not in the DB, and out of DB scope):** the header asserts **4.9★ avg, 2,191 total reviews, 2,071 five-star**, and `reverb-reviews.astro` repeats "4.9-star nationwide" in the meta description. The body archive contains **2,052** rendered cards (the 2,191 vs 2,052 gap = 139 reviews without a card in the archived subset, per `reviews-videos.md`: "2,191 total / 2,052 archived in file"). This is internally consistent with the source notes but worth a one-time confirmation that the live Reverb storefront still shows 4.9★ / 2,191 before launch, since these are visible self-stat claims. **These are business metrics, not guitar-domain facts — they do NOT belong in the VG DB** and need no VG entry.
- **One product-title data hygiene note (not a fact error):** the archive includes a clearly joke serial in a buyer's product title — *"Martin OM-28V 2005 (Serial # 1111111!)"* (Happy A.). It's the buyer's verbatim Reverb listing title, harmless as a quoted testimonial, but do not let any future extraction mistake it for a real Martin serial (Martin uses one continuous sequential series, VG-0082). No action beyond awareness.
- **Nothing to ADD to the DB from this page.** The page contributes social proof, not verifiable domain facts. The brand distribution it evidences (Fender 338 > Gibson 258 > Epiphone 95 > Martin 82 > Gretsch 38 > Guild 36 > Rickenbacker 22 cards) is useful for section-matching elsewhere but is not a "fact" for the VG knowledge base.

---

**Path:** `reports/seo/_pages/reverb-reviews.md` · **Counts:** internal links to add = 8 (all in two NEW intro/closing blocks; serial-guide links deliberately omitted as off-topic) · FAQs suggested = 4 (FAQPage schema recommended; no VG facts needed) · DB flags = 0 contradictions, 0 facts to add (1 business-stat to re-verify pre-launch, 1 joke-serial hygiene note). Headline: page is a double-orphan (0 in/0 out) flat review wall — fix INBOUND links from /about-me/, homepage trust, and /sell-my-*/ testimonials first; on-page wins come from adding small editorial intro + closing blocks, NOT threading links through the 2,052 cards.
