## index

**Page:** `/` (homepage) — `src/pages/index.astro`, composed of 13 section components (Hero, ValueProp, AboutJoe, WhatWeBuy, Testimonials, MoreThanGuitar, ClientStories, Guide, Collections, MeetJoe, RecentPurchases, FAQ, ContactSection).

**Starting state:** the homepage is NOT a zero-link page. It already carries 14 unique in-content out-links (linkgraph.md: `/ → 14 / 24`), concentrated in `AboutJoe.astro`, `WhatWeBuy.astro`, and `ValueProp.astro`. So this pass is about (a) filling the gaps where copy names a topic but doesn't link it, and (b) routing equity to the under-linked money targets — above all `/free-appraisal/` (pos 16.1, the highest-intent page that most needs inbound links) and `/sell-a-guitar-collection/` (pos 27.9, deep page 3). The homepage is the single strongest equity source on the site, so each added link here is high-value.

Density guard: the page is long (13 sections, ~3,500+ words of body copy). Current ~14 links is well under the ~1-per-120-180-words ceiling, so there is comfortable room to add the ~10 below without stuffing. Most additions are in sections that currently have ZERO in-content links (Guide, MoreThanGuitar, RecentPurchases, FAQ).

---

### 1. Internal links to ADD

Existing links to KEEP (do not duplicate): AboutJoe already links Gibson/Fender/Martin sell pages, the Gibson + Fender serial guides, and the Gibson shipping-totals post. WhatWeBuy already links every brand sell page + several blog guides. ValueProp links Google reviews + tel/mailto. The table below is NET-NEW only.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| **Guide §"How to Prepare"** — intro line "a pre-CBS Fender Stratocaster, a 1950s Gibson Les Paul, or a pre-war Martin D-28, where originality and condition are what drive the price" | `pre-CBS Fender Stratocaster` / `pre-war Martin D-28` (two separate links on the two phrases) | `/vintage-fender-stratocaster-value-guide/` and `/martin-d-28-d-18-d-45-dreadnought-value-guide/` | Exact-match value-guide anchors on copy that already names the model+era. Routes homepage equity to two value guides; varies anchors away from the over-used "Fender serial number guide". |
| **Guide §"How to Prepare"** — same intro, "a 1950s Gibson Les Paul" | `1950s Gibson Les Paul` | `/vintage-gibson-les-paul-market-value-guide/` | Contextual value-guide link; this target only has 4 inbound (linkgraph). |
| **Guide §"How to Ship"** — "standard carrier declared value coverage explicitly limits... claims on musical instruments" / shipping process copy | `arrange professional prepaid packing and shipping` | `/free-appraisal/` (or `/contact-me/`) — prefer **/free-appraisal/** | The shipping section has ZERO outbound links and sits right above the FAQ that mentions the prepaid shipping service. Drives the highest-intent under-linked page. Use a soft CTA, not stuffed. |
| **Guide §"Other Places to Sell"** — "A \$400 student-grade acoustic and a \$12,000 Jazzmaster from the 60s are not the same selling problem" / comparison-chart intro | `selling a full collection` | `/sell-a-guitar-collection/` | The whole §"Other Places" weighs options; collection sellers are a distinct case. `/sell-a-guitar-collection/` is the deepest-ranked money page (pos 27.9) and needs links most after free-appraisal. Anchor "guitar liquidation / estate sale" terms from gsc.md if a second mention exists. |
| **MoreThanGuitar** — "a wonderful Gibson J-45" (Walter M story) | `Gibson J-45` | `/post/identify-vintage-gibson-j45-j50-sj/` | Section has ZERO links. The copy names the exact model the J-45 identification post covers; strong topical relevance + that post is a high-impression source (3,455 impr). |
| **MoreThanGuitar** — "A pre-war Martin was built differently than a 1960s Fender or Gibson" (Years of History card) | `pre-war Martin` | `/martin-serial-and-model-numbers/` | Contextual dating-guide link on an otherwise link-free card; martin-serial is a near-page-1 target (pos 7.8). |
| **RecentPurchases** — Bill card: "Custom color Fenders from this era are significantly rarer than their sunburst siblings" | `Custom color Fenders` | `/sell-my-fender-guitar/` or `/vintage-fender-stratocaster-value-guide/` — prefer the **value guide** | Section has ZERO in-content links. Copy makes a value claim (custom-color premium, VG-0058/VG-0073) that the value guide substantiates. |
| **RecentPurchases** — Joshua card: "one of the earliest production Teles ever made" | `earliest production Teles` / `Blackguard Telecaster` | `/vintage-fender-telecaster-value-guide/` (or `/post/1952-fender-telecaster-authentication-guide/`) | A 1952 Tele is the Blackguard era (VG-0069). Topical link from a zero-link section; the Tele value guide has only 4 inbound. |
| **RecentPurchases** — bottom CTA currently `href="/contact-me/"` "Get a Free Offer" | change/augment to `Get a Free Appraisal` | `/free-appraisal/` | Re-point (or add a second) the existing CTA to the page that needs inbound links most. Keeps intent identical (free offer = free appraisal). |
| **FAQ** — Q "What Are The Considerations... Determine A Guitar's Price & Value?" answer "contact me for a free appraisal" | `free appraisal` | `/free-appraisal/` | The FAQ answers literally say "free appraisal" 3× with ZERO links. Linking even one routes equity to the top-priority page using its exact GSC anchor ("free guitar appraisal"). |
| **FAQ** — Q "Can I Sell My Guitar On Consignment Or Trade It...?" answer "We do offer consignment!" | `consignment` | `/consignment/` | `/consignment/` is itself 🔴 under-linked (0 in-content inbound shown for the homepage). Exact-topic anchor sitting in the answer. |
| **FAQ** — Q "Will I Have To Pay For Shipping...?" answer "professional, prepaid packing and shipping service" | `prepaid packing and shipping` | `/sell-an-amplifier-or-effect/` is NOT right here — link to the **shipping how-to** if a page exists, else **/free-appraisal/** | Optional. Only add if it doesn't crowd the FAQ; the FAQ should carry at most 2-3 links total to stay natural. |

**Anchor-variation note:** the site over-uses "Fender serial number guide" (14×) and "Free Appraisal" (19×). For the free-appraisal links above, vary among GSC's real queries: "free appraisal", "free guitar appraisal", "guitar appraisal", "vintage guitar appraisal" — do not repeat the same string. Cap FAQ at ~2 links and each Guide block at ~1-2 so nothing reads stuffed.

**Net new links: ~11** (a couple are "prefer one of two" — count as one each). Brings the homepage from 14 → ~25 unique in-content out-links, still under the density ceiling for a page this long.

---

### 2. Section-level related posts ("Related reading" blocks)

The homepage is a conversion page, not a reference article, so inline "Related reading" blocks should be used SPARINGLY — only where they reinforce a topic without breaking the sales flow. Recommendation by section:

- **AboutJoe** — already has a "Free Community Resources" callout linking the Gibson decoder, Fender guide, and shipping-totals post. This IS the related-reading block; leave as-is. Optionally add the Martin serial guide there for brand symmetry.
- **WhatWeBuy** — each brand card already inlines its relevant blog guide (1952 Tele auth, 1957 LP Goldtop, Gibson L-5 CES, Gretsch 6120, Martin D-18E/D-28E). No separate block needed; this is the ideal "per-section related post" pattern already executed.
- **Guide §"How to Prepare"** — fits a small inline block: **"Is Your Vintage Guitar Valuable? 7 Factors"** (`/post/is-your-vintage-guitar-valuable-7-factors.../`) + **"What to Consider When Selling a Vintage Guitar"** (`/post/what-to-consider-when-selling-a-vintage-guitar/`). Both directly extend the "how to prepare" topic.
- **Guide §"Other Places to Sell"** — strong fit for: **"How to Sell a Large Guitar Collection (Every Option, Honestly Explained)"** (`/post/how-to-sell-a-large-guitar-collection.../`), **"Best Online Platforms to Sell Vintage Guitars"** (`/post/best-online-platforms-sell-vintage-guitars/`), and **"Top Mistakes to Avoid When Selling a Vintage Guitar"** (`/post/mistakes-to-avoid-when-selling-a-vintage-guitar/`). This is the single best section on the page for a 3-item related-reading block — the comparison chart already invites "read more on options."
- **Guide §"How to Ship"** — the lite-youtube packing demo already covers it; a "Blue Book of Guitar Values" link would be off-topic here. Skip the block.
- **MoreThanGuitar** — story/emotional section; a related-reading block would break tone. Skip (single contextual link from §1 is enough).
- **RecentPurchases** — fits ONE subtle link per card (the §1 model-specific links) rather than a block. No block.
- **FAQ** — the answers should carry the inline links from §1; no separate block (the FAQ IS the related-content surface).

Verdict: add at most **two** "Related reading" blocks — one in Guide §"How to Prepare" (2 posts) and one in Guide §"Other Places to Sell" (3 posts). Everything else is better served by the inline contextual links in §1.

---

### 3. FAQ gaps

The page has ONE FAQ block (8 Q/A, FAQPage JSON-LD, in `FAQ.astro` / mirrored in `index.astro`'s `faqSchema`). It is solid and conversion-focused. Gaps where an extra Q would help (and could extend the JSON-LD):

- **Collection / estate selling** — no FAQ addresses the large-lot case even though the page has a whole Collections CTA section. Suggested:
  - **Q:** "Do you buy entire guitar collections or estates?" **A:** "Yes. I regularly buy full collections and estate lots, from a handful of guitars to a few dozen, and I can travel to you to pick them all up. (link → /sell-a-guitar-collection/)" — no DB fact needed.
- **Nationwide / location** — the answers say "across the U.S. and Canada" but there's no standalone "do you buy from my state" FAQ, which matches "best place to sell a guitar near me" query intent.
  - **Q:** "Do you buy guitars from outside Arizona?" **A:** "I buy nationwide. I've bought from sellers in all 50 states and can arrange free, insured, prepaid shipping if I can't come to you." — no DB fact needed.
- **Authentication / spotting fakes** — the page touches dating but never reassures sellers worried about authenticity.
  - **Q:** "How do you know a vintage guitar is authentic and not a counterfeit?" **A:** could cite the control-cavity tell (**VG-0001**), serial-vs-features cross-checking (**VG-0009/VG-0014**), and that originality is the dominant value driver (**VG-0112**). Mark answer as DB-fact-backed: **VG-0001, VG-0009, VG-0112.**
- **Serial-number precision** — the existing "How Can I Tell When A Guitar Was Made?" answer is good but could honestly caveat that serials alone don't pin a year.
  - Augment that answer with the "no earlier than" / overlap caveat: Gibson 1961-69 and most Fender serials don't resolve to a single year (**VG-0011, VG-0050, VG-0111**). Mark: **VG-0011, VG-0050, VG-0111.**

Keep the FAQ tight — adding the first two (collection + nationwide) is the highest-value, no-DB-needed move; the authenticity/serial ones are nice-to-have and must cite the VG facts above if added.

---

### 4. Relevant reviews (from reviews-videos.md)

Map specific reviews to sections as social proof. Note R1-R6 are flagged "already placed" on /sell-my-fender/ — verify before reuse, but they can appear on the homepage too (different page).

| Section | Review | Why it fits |
|---|---|---|
| **Hero / ValueProp** ("Selling to Joe's is Easy") | **R1 Jessica Hammond** (sold 3 guitars, full payment at FedEx, easy process) + **R25 Rich S.** (photos → call → offer + paid shipping) | Both describe the exact frictionless process the section promises. reviews-videos.md explicitly maps R1/R25 to Homepage. |
| **Guide §"Other Places to Sell"** (vs pawn/eBay) | **R10 My School In Azia** ("not a pawn shop", sold in hours) | Directly reinforces the "Joe vs pawn/marketplace" comparison chart. |
| **MoreThanGuitar** (provenance/story) | **R5 Bobbie Jo Kelly Greene** (inherited 3 guitars from late father, trust) or **R2 Caleb King** (sentimental sell) | Matches the "every guitar has a story / I document the history" theme. |
| **Collections CTA** ("collections of any size") | **R7 Judy Anziano** (sister sold 38 guitars) or **R6 Marie Coyle** (brother's collection, out-of-state) | Large-lot social proof beside the collection CTA. |
| **AboutJoe** (expertise/credibility) | **R15 Amy B.** ("consummate professional, encyclopedic") + **R17 Adam Kirkpatrick** ("expert of the highest order") | reviews-videos.md maps these to about-me; they reinforce the E-E-A-T stats grid. |

Testimonials.astro already renders a 6-card masonry of Google reviews — confirm which 6 are used there before adding more so the homepage doesn't repeat the same names.

---

### 5. Relevant videos (from reviews-videos.md, Joe's own channel)

| Section | Video ID | Title | Fit |
|---|---|---|---|
| **Hero / AboutJoe trust** | `SFjsaZsEHqI` | "Buying Over 100 Vintage Fender Amps & Rare Guitars in Arizona!" (11.3K views — top channel video) | reviews-videos.md + social.md (B1) both flag this as the homepage hero social-proof video. Strongest single asset. |
| **Collections CTA** | `NTw8EcrS5Y8` | "I Spent \$100,000 on Guitars in One Week!" (3.3K) | "We buy big" proof right beside the "collections of any size" CTA. |
| **Guide §"How to Ship"** | `XrlMW385NMM` | "How to Pack a Guitar for Shipping (Step-by-Step)" | ALREADY EMBEDDED (lite-youtube in Guide.astro). No action — confirm it stays. |
| **MeetJoe** | (existing) | MeetJoe already embeds a Joe video | Leave as-is; don't double-embed. |
| **RecentPurchases** (optional) | `f-BQno75t94` | "Antique Show Find! 1961 Fender Telecaster!" | Loosely matches the 1952-Tele Joshua card if a video slot is wanted; optional, low priority. |

Embed pattern is already on the page (`<lite-youtube>` + the lite-yt CDN in `index.astro` head slot), so adding `SFjsaZsEHqI` / `NTw8EcrS5Y8` is low-cost.

---

### 6. Social embeds (from social.md) — flag NEEDS-JOSH items

The homepage is the right place for trust/brand-story embeds, but keep them light (perf + the page is already long).

| Section | Embed | Platform | Note |
|---|---|---|---|
| **Hero / AboutJoe** | `SFjsaZsEHqI` (B1) | YouTube | Cleanest, no token. Same video as §5; one embed serves both purposes. |
| **Collections CTA** | C4 `NTw8EcrS5Y8` / C5 `94gPLnh6mkc` ("storage unit collection buy") | YouTube | Collection-buying proof. |
| **MoreThanGuitar / story** | C6 `https://www.instagram.com/reel/DXj5kFlkzLg/` ("picking through a hoarder house...find treasures", 1.1K) | Instagram | **NEEDS-JOSH:** IG oEmbed needs a FB Graph token since 2020 (social.md NEEDS-JOSH). Script-based blockquote usually renders but is unofficial — confirm token or accept blockquote. |
| **(optional) new-arrivals** | C7 `https://www.instagram.com/p/DYz-G_jluKS/` ("a few gems that just hit our Reverb") | Instagram | Only if a "new arrivals" strip is added; same IG-token caveat. Low priority for homepage. |

**Global NEEDS-JOSH flags (apply to any IG/FB/TikTok embed on this page):**
- **Instagram embed token** — confirm MFWD's FB app/token for proper oEmbed, or accept script-blockquote embeds (social.md).
- **TikTok** — handle returns NOT_FOUND; do not attempt a TikTok embed until Josh confirms the live handle.
- Prefer YouTube embeds on the homepage (no token, best perf). Use IG only for the story section if Josh greenlights the token.

---

### 7. Dataset-schema tables

**None on this page.** dataset-schema.md scopes Dataset markup to the Archetype-B reference pages (Fender/Gibson serial guides, value guides, amp tube-chart). The homepage's only table is the **Guide.astro "Other Places to Sell" comparison chart** — and dataset-schema.md explicitly classifies comparison/rubric tables as **NOT datasets** ("Single-row or two-cell comparison tables... too small to be a meaningful Dataset; leave as plain `<table>`"). This is a 7-row platform-comparison matrix of prose cells, not range→value observational data. **Do NOT add Dataset markup here.** The page's FAQPage JSON-LD is already correct and sufficient.

---

### 8. DB fact check

Cross-checked every factual claim on the page against the VG index. **No contradictions found** — the homepage copy is consistent with the DB. Specifics:

**Claims verified consistent (no action):**
- WhatWeBuy "pre-CBS (pre-1965)" Fender framing → consistent with **VG-0049/VG-0072** (CBS bought Fender Jan 1965).
- WhatWeBuy "pre-war herringbone D-28s... scalloped bracing and Brazilian rosewood are at the top of the market" → consistent with **VG-0075, VG-0076, VG-0080, VG-0089**.
- WhatWeBuy "I'll consider any Martin built before 1970" → aligns with the 1969/1970 Brazilian→Indian rosewood transition (**VG-0088, VG-0089, VG-0109**) as the practical pre-1970 collectible cutoff.
- RecentPurchases (Bill) "Custom color Fenders from this era are significantly rarer than their sunburst siblings, and that rarity translates directly to price" → consistent with **VG-0058** (custom color = non-standard DuPont finish) and **VG-0073** (~40%+ original-custom-color premium). Solid.
- RecentPurchases (Joshua) "one of the earliest production Teles ever made" (1952) → consistent with the Blackguard era 1950–mid-1954 (**VG-0069**).
- AboutJoe "verified Gibson production totals from 1948 to 1979" → consistent with **VG-0030** (Gibson shipping records cited) and the existence of the shipping-totals post.
- FAQ "How Can I Tell When A Guitar Was Made?" answer (serial + features + label, labels can mislead) → consistent with **VG-0009/VG-0014** (physical-feature dating required) and **VG-0038** (Gibson paper labels). Honest, no over-claim.
- ValueProp / FAQ "free, fully insured shipping" and "prepaid packing and shipping service" → operational claims, not DB facts; nothing to check.

**No WRONG facts to flag.** The page is carefully written and does not over-promise serial-number precision.

**Facts on this page worth ADDING to the DB (currently absent from VG index):** these are business/provenance claims, not vintage-guitar reference facts, so they likely belong in a business-facts store rather than the VG knowledge base — flagged for awareness, not necessarily DB insertion:
- AboutJoe: "traveling appraiser for Treasure Seekers Roadshow," "sourced instruments for Grammy Award-winning artists," "handled guitars from the estates of musicians who played alongside Hank Williams, the Everly Brothers, and Loretta Lynn," "12+ years full-time, 10,000+ guitars evaluated, bought from all 50 states, 2,100+ positive reviews across Google and Reverb." Source: on-page Joe bio. These are E-E-A-T credentials, not guitar-reference facts — recommend they live in the site's business/Person schema (they already partly do via `/about-me/#person`), NOT the VG-#### KB.
- No new *guitar-reference* facts on this page that the VG index lacks — the homepage stays at the marketing/overview altitude and defers technical specifics to the reference pages (correctly).

---

**Wrote:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/index.md` — links: ~11 net-new (homepage 14 → ~25); faqs: 4 suggested (2 no-DB collection/nationwide + 2 DB-cited authenticity/serial-precision); flags: 0 wrong-fact contradictions, 0 new guitar-reference facts for the DB (only business/E-E-A-T credentials noted), 0 Dataset tables.
