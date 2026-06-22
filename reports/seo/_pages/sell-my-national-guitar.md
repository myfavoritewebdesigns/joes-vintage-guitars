## sell-my-national-guitar

> **Page archetype:** B-template "sell" page (hero + lead form + buy/appraise + 3-col feature grid + testimonials + vintage banner + Meet Joe + FAQ). Source: `src/pages/sell-my-national-guitar.astro`.
>
> **Link-graph status (critical):** This page is one of the most starved nodes on the site. It has only **3 in-content out-links** (hero "Joe's Vintage Guitars" → `/`, two CTAs → `/free-appraisal/`, one inline → `/contact-me/`) and only **2 distinct in-content INBOUND** links site-wide (`/` and `/sitemap/`). It links to **zero** sibling sell pages, **zero** serial/dating guides, and **zero** blog posts. GSC: 4 clicks / 216 impr / pos 9.6 — thin but real demand for "national steel guitar for sale" + "national tenor guitar". The body is short (~500 words of prose), so density allows roughly **4 to 6 contextual links** without stuffing. Most-needed targets from here: `/free-appraisal/` (already 2×, good), `/sell-an-amplifier-or-effect/` (Valco made amps too), `/sell-a-guitar-collection/`, and the sibling `/sell-my-*/` pages for cross-brand discovery.

### 1. Internal links to ADD

The page mentions several linkable topics in passing (Martin, Fender Stratocaster, Valco, resonators, "online catalog", consignment, trade). Add contextual links where the copy already names the topic. Vary anchors per gsc.md query data.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Hero copy: "Whether you've got a pre-war National Resonator or a 1950s Valco-built National" | sell a vintage guitar collection | /sell-a-guitar-collection/ | `/sell-a-guitar-collection/` sits at pos 27.9 (deep page 3) and badly needs inbound equity; National owners often have multiple instruments. Natural multi-instrument bridge. |
| Buy & Appraise copy: "whether it's a pre-war **Martin** or a 1960s Fender Stratocaster" (on the word Martin) | sell your Martin guitar | /sell-my-martin-guitar/ | Copy literally names Martin; contextual cross-sell to a sibling sell page that currently has only 6 inbound. Anchor varied from generic. |
| Buy & Appraise copy: "...or a 1960s **Fender Stratocaster**" (on Fender Stratocaster) | sell your vintage Fender | /sell-my-fender-guitar/ | Copy names a Fender Strat; `/sell-my-fender-guitar/` is a priority pos-10.3 page that needs topical "sell fender" anchors (gsc.md). |
| Buy & Appraise: "I'm an experienced guitar appraiser and buyer" (currently links to /free-appraisal/) | keep as-is but vary to: guitar appraisal online | /free-appraisal/ | Already linked — swap the anchor to a gsc.md query ("guitar appraisal online" / "free guitar appraisal") so the page's two appraisal links don't share identical anchor text. |
| Feature col 1 body: "Have one that you want to sell? Contact me today!" (currently /contact-me/) | get a free National guitar appraisal | /free-appraisal/ | Re-point or supplement: `/free-appraisal/` is the single most under-served high-intent page (pos 16.1) and most needs inbound links; a "sell" feature card is the right place. Keep /contact-me/ too if desired. |
| Feature col 2 body: "Browse the online catalog; you might find a rare National guitar!" | browse our vintage guitar inventory | /consignment/ (or external Reverb shop) | "online catalog" currently links nowhere; point it at the consignment/inventory page (or the live Reverb storefront) so the phrase resolves. NEEDS-JOSH: confirm whether "online shop" = `/consignment/` or the Reverb deep-link. |
| Meet Joe panel OR a new "what else we buy" line | sell a vintage amplifier or effect | /sell-an-amplifier-or-effect/ | Valco built National AND amps; National sellers frequently own a vintage amp. `/sell-an-amplifier-or-effect/` is under-linked (3 inbound). Add a one-line cross-sell if no natural anchor exists in current copy. |
| (Optional) FAQ answer on consignment/trade | sell on consignment | /consignment/ | FAQ #2 explicitly discusses consignment/trade but links nowhere; link the term to `/consignment/`. |

Net: ~4 to 7 links. Keep the two appraisal links (good for the priority page) but diversify their anchors; the rest are net-new sibling cross-links the page currently lacks entirely.

### 2. Section-level related posts

This page has no blog cross-links at all. National/resonator content is thin in the blog, so most "related reading" should point at value/sell process posts that apply to any brand. Recommend a small inline "Related reading" block under the **Buy & Appraise** section and (optionally) under **Meet Joe**.

| Page section | Suggested related posts/guides | Inline "Related reading" block? |
|---|---|---|
| Hero / intro (selling a National) | `/post/what-to-consider-when-selling-a-vintage-guitar/`; `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/` | No — keep hero clean; these fit better lower. |
| Buy & Appraise ("what's it worth") | `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/`; `/post/blue-book-of-guitar-values-and-vintage-guitar-price-guide/` | Yes — a 2-item block fits well here; both are generic-value posts that apply to resonators with no brand-specific guide. |
| Nationwide resale feature grid | `/post/best-online-platforms-sell-vintage-guitars/` (where/how to sell); `/sell-a-guitar-collection/` | Yes — one inline link in feature col 1 or 2 ("Find Rare... in Our Online Shop") tying to the platforms post. |
| Meet Joe | `/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/` | Optional — light touch; only if not already linking collection above. |

There is **no dedicated National / Valco / resonator blog post** to link. Flag for content backlog: a "How to date a National / Valco-built guitar" post would be the natural anchor for this page and would let the page link to a true topical guide (see §8).

### 3. FAQ gaps

The existing 5 FAQs are all generic (pricing factors, consignment, payment, shipping tax, warranty) — none is National/Valco specific. The page's own topic (dating + identifying Nationals) is unanswered. Add 2 to 4 National-specific Q/A:

1. **Q: How do I date my vintage National or Valco-built guitar?** A: Valco-made instruments (National, Supro, Airline, Oahu and other house brands) generally encode the year of construction in the serial number rather than using a model-only system, so the serial is the starting point, confirmed by hardware and finish features. *(needs DB fact — VG-0095.)*
2. **Q: What's the difference between a pre-war National Resonator and a 1950s Valco-built National?** A: Pre-war Nationals are the metal/wood-body single-cone and tricone resonators built before WWII; the 1950s "Valco-built" Nationals are the post-war electric and resonator models made after National-Dobro became Valco. (Page copy already draws this distinction in the hero — turn it into an FAQ.)
3. **Q: Do you buy National tricones and single-cone resonators?** A: Yes — tricone, single-cone, wood-body and metal-body resonators, plus tenor and ukulele resonators, are all of interest. (Mirrors the three feature-grid photos: tricone, ukulele, wood sunburst.)
4. **Q: Will you appraise a National even if the serial number is faded or unreadable?** A: Yes — send detailed photos and any partial serial/model markings; a value can usually be reached from the model, hardware and condition alone. (Backed by review R-Victor on this very page about a faded National serial.)

### 4. Relevant reviews

The page already hard-codes 3 reviews in the `reviews[]` array. **Note:** the first one (Victor Shevchuk) is a perfect, already-placed National-specific testimonial — a guitar with a "very faded serial and model number" that Joe's identified and valued. Keep it first; it is the strongest social proof on the page. Additional fits from reviews-videos.md:

| Section | Review (reviews-videos.md) | Why it fits |
|---|---|---|
| Testimonials grid (current) | **Already-placed Victor Shevchuk review** (faded National serial decode) | Exact topical match — a National identified from a faded serial. Best review on the page; do not remove. |
| Buy & Appraise / "what's it worth" | **R18 Jim W.** (late-night email reply, value given) or **R25 Rich S.** (photos → call → offer + paid shipping) | Reinforces the "send photos, get a fast accurate value" claim in the appraise copy. Generic-process, no brand conflict. |
| Meet Joe / trust | **R15 Amy B.** ("consummate professional, encyclopedic") or **R17 Adam Kirkpatrick** ("expert of the highest order") | Credibility proof under the expert bio. |
| (If a collection cross-sell is added) | **R6 Marie Coyle** (out-of-state collection, fast) | Supports the nationwide / out-of-state framing in the vintage banner section. |

No National-titled Reverb review exists in the indexed subset (National/Valco not in the brand distribution table), so the curated Google reviews above are the best available.

### 5. Relevant videos

The page already embeds the **Meet Joe** video (`zMd6IJ-6e-8`). One strong National-specific video exists in the catalog and should be added:

| Section | Video (reviews-videos.md) | Why |
|---|---|---|
| Buy & Appraise OR a new "National resonators we've handled" block | **`FoaeeqtVW8M` — "1928 National Style 3 Condition"** | The single National/resonator demo on Joe's channel. Direct topical match (pre-war National resonator). Embed near the resonator feature grid or in the Buy & Appraise column as proof Joe handles these exact instruments. |
| Hero / "we buy nationwide" trust | **`SFjsaZsEHqI` — "Buying Over 100 Vintage... Guitars in Arizona!"** (11.3K views, top channel video) | Optional secondary embed — proof of the nationwide buying claim in the hero + vintage banner. |
| Meet Joe (current) | `zMd6IJ-6e-8` (already embedded) | Keep as-is. |

Recommend embedding `FoaeeqtVW8M` — it is the best available National-specific asset and the page currently shows National guitars only as static photos.

### 6. Social embeds

No National/Valco/resonator post exists in social.md (Priority A/B/C are Fender/Gibson/Gretsch/Martin heavy; National is absent). Closest fits are generic trust/nationwide assets, all flagged optional:

| Section | Candidate (social.md) | Note |
|---|---|---|
| Hero / vintage banner ("from anywhere within the US") | **B1 / C4 — YouTube "Buying Over 100 Vintage..." (SFjsaZsEHqI)** / "$100,000 in One Week" (NTw8EcrS5Y8) | Nationwide-buying social proof. YouTube = cleanest embed (no token). |
| "Find Rare... in Our Online Shop" feature card | **C7 / C8 — IG "new arrivals / now on Reverb" posts** | Ties the "online catalog" line to live inventory; cross-links to Reverb. **NEEDS-JOSH:** IG oEmbed needs the FB Graph token (social.md NEEDS JOSH); script-blockquote fallback works but is unofficial. |

**Verdict:** social embeds are low-value here — there is no National-specific social content. Prefer the YouTube `FoaeeqtVW8M` video embed from §5 over any IG/FB embed. Do not force an off-brand reel onto this page.

### 7. Dataset-schema tables

**None.** This page contains zero reference/lookup tables (no serial ranges, no value matrix, no spec timeline) — it is a conversion/sell page, not an Archetype-B reference page. dataset-schema.md lists no tables for `sell-my-national-guitar`. No `Dataset` markup applies. (The page's existing FAQPage + BreadcrumbList + Article JSON-LD is appropriate and complete for the page type.)

### 8. DB fact check

**Factual claims on the page** are limited and all check out — the page is light on hard facts (it makes no serial ranges, dates, production counts, patents, or dollar values), which is itself the gap.

- "pre-war National Resonator" / "1950s Valco-built National" (hero) — consistent with **VG-0095** (Valco made National, Supro, Airline, Oahu, etc.; year encoded in the serial). No contradiction. **No WRONG claims found.**
- FAQ pricing-factor answer (age / uniqueness / provenance / condition) — generic, consistent with **VG-0112** (originality is the dominant value driver). Fine.
- No serial/date/value claim on the page contradicts any VG fact.

**Missing facts the page SHOULD carry (and the DB should back):**

- **VG-0095 is the key fact for this entire page and is currently unused on it.** The page never explains how a National/Valco guitar is actually dated. Recommend surfacing VG-0095 in copy + the new FAQ (§3, Q1): *"Valco-made instruments (National, Supro, Airline, Oahu) generally encode the year of construction in the serial number."* This is the page's single biggest factual/E-E-A-T gap.
- **DB gap to ADD:** The DB index (VG-0001..VG-0112) has **only one National/Valco fact (VG-0095)**. For this page (and a future National dating guide) the DB is thin. Recommend adding verified facts such as: (a) National-Dobro became **Valco** circa 1943 (the pre-war → post-war dividing line the hero already implies); (b) National **tricone vs single-cone resonator** distinction and rough production eras; (c) Valco house-brand roster detail beyond the VG-0095 list. **Sources visible/needed:** none cited on the page itself (it states no dates), so these must be sourced externally and verified before adding — flag as research, not transcription. Do not invent a serial range; National/Valco serial dating is genuinely murky and any specific range must be verified.

---

**Wrote:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/sell-my-national-guitar.md` — links: 7 suggested (diversify 2 existing appraisal anchors + ~5 net-new sibling/cross-links) · FAQs: 4 suggested (all National/Valco-specific; Q1 cites VG-0095) · flags: 2 DB flags (0 wrong; VG-0095 under-used on-page + National/Valco facts thin in DB — recommend adding ~3, sourced/verified) + 1 NEEDS-JOSH (IG oEmbed token) + 1 NEEDS-JOSH ("online shop" target = /consignment/ vs Reverb).
