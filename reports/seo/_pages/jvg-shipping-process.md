## jvg-shipping-process

> **Page status caveat (read first):** This page is deliberately `noIndex={true}` — it is a private hand-out link Joe texts/emails to a seller after a deal is agreed, NOT a page meant to rank or to be crawled. It is intentionally not in the nav, not in `/sitemap/`, and is an **orphan** in the link graph by design (linkgraph.md confirms `/jvg-shipping-process/` has 0 in-content out-links and 0 inbound). Because of this, most of the standard "build internal-link equity / add FAQ schema / add Dataset markup" SEO moves either DO NOT APPLY or must be applied with restraint. A noindex page passes no equity it keeps, and links FROM it to indexable money pages still flow PageRank but Google crawls it rarely, so the value is low. The recommendations below are scoped to that reality: a couple of genuinely useful contextual links, one trust video, and a short FAQ for the human reader (NOT for schema). Do not over-optimize a private logistics page into a marketing page — that would hurt the seller experience this page exists to deliver.

### 1. Internal links to ADD

The page currently has **zero in-content internal links** (only external links: Google Maps reviews, `sms:`, `tel:`, `mailto:`). Adding links here is low-SEO-value (noindex source, rarely crawled) but a few are genuinely useful to the HUMAN seller mid-process, and the outbound links to indexable money pages do still pass some equity. Keep it to 2–3 — this is an instruction page, not a content hub. Density rule (1 link / 120–180 words) here means roughly 2 links max for the body length; do not stuff.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Lede — "Hundreds of sellers have done this; their 5-star reviews are on Google Maps." Add a sentence pointing to the appraisal step that precedes shipping. | get a free appraisal first | /free-appraisal/ | `/free-appraisal/` is the single most under-linked priority target (pos 16.1, page 2, GSC). It is also the logical PREVIOUS step: a seller only ships after Joe quotes them. One contextual link from this hand-out reinforces the funnel and is genuinely helpful. Use a non-stuffed query-aligned anchor ("free appraisal" per gsc.md). |
| Step 4 table / "ask them to pack it very tightly" area — add an aside for sellers shipping a collection rather than one guitar. | selling a whole collection | /sell-a-guitar-collection/ | `/sell-a-guitar-collection/` is deep (pos 27.9, page 3) and needs links. A seller reading shipping instructions for multiple pieces is exactly the audience. Only add IF the surrounding copy is reworded to mention multi-guitar shipments — do not force it onto the single-guitar instructions as written. Optional / NEEDS-COPY. |
| Step 2 "Pack the Inside of the Case" / bubble-wrap warning — link to the packing how-to video (see §5) and, if a packing blog exists, the relevant guide. | how to pack a guitar for shipping | (video embed — see §5) | No dedicated packing blog post exists in the inventory, so this is a video embed rather than an internal link. Listed here so the section isn't left link-less; the video IS the "related content" for this section. |

**Anchor-text note:** do NOT add brand serial-guide links (`/fender-guitars-serial-number-guide/`, Gibson/Martin/etc.) here. Nothing in the shipping copy mentions serial numbers, dating, or model identification — forcing those links would be the exact "irrelevant link" the brief warns against. The serial guides belong on the value/sell/dating pages, not on a logistics hand-out.

### 2. Section-level related posts

A long page, but it is a **transactional checklist**, not editorial content. A persistent "Related reading" block under each step would clutter the instructions and distract a seller mid-shipment. Recommendation: **do NOT** add per-section related-post blocks here. The one exception is a single, optional, low-key "Want to see it done?" line that surfaces the packing video (§5) next to Step 2. Specifics:

- **Step 2 (Pack the Inside of the Case):** the only section where related content helps — surface Joe's "How to Pack a Guitar for Shipping" video (XrlMW385NMM). A one-line inline link/embed, not a multi-card block.
- **Step 1 / Lede (trust framing):** if any related content fits, it is `/free-appraisal/` and the customer reviews (already linked in the lede) — covered in §1 and §4. No blog posts apply.
- **Steps 3, 4, 5, Payment, Checklist:** no related-reading block. These are pure logistics; adding marketing links degrades the hand-out's job.

### 3. FAQ gaps

The page has no FAQ and would genuinely benefit from a short one for the HUMAN seller (common pre-shipment anxieties). **Important: do NOT emit `FAQPage` JSON-LD here** — the page is noindex, so FAQ schema would be wasted at best and (if Google ever sees a noindex page with rich-result markup) inconsistent at worst. Render it as a plain visible FAQ for usability only. Suggested 4 Q/A drawn from the page's own topic:

1. **Q: Why can't I use bubble wrap inside the case?** A: Bubble wrap can react with the nitrocellulose lacquer on a vintage guitar finish and leave permanent marks; soft cloth, newspaper, and paper towels are safe inside the case, bubble wrap only outside it, never touching the guitar. *(Page already states this in the Step 2 warning; FAQ just restates it. Lacquer fact aligns with VG-0104 — nitrocellulose is solvent-based and thin — and VG-0017/0018 on nitro behavior; no contradiction.)*
2. **Q: Is my guitar insured while it's in transit?** A: Yes. Every guitar shipped to Joe is covered under his private musical-instrument policy from the moment it leaves the FedEx counter, which is why you decline FedEx's own insurance at the counter. *(Restates the callout + Step 4 table; operational claim, not a DB fact.)*
3. **Q: When exactly do I get paid?** A: The moment you text Joe a photo of the FedEx drop-off receipt — before you even leave the counter. *(Restates Step 5; operational.)*
4. **Q: Do I have to send a photo of my driver's license?** A: It's optional and only for fraud prevention. If you'd rather not, Joe sends payment after the guitar arrives and is verified instead of at the counter. *(Restates Step 1; operational.)*

No FAQ answer here requires a VG-#### fact — they are all operational/policy statements specific to Joe's process.

### 4. Relevant reviews

The lede already points to Google Maps reviews generically. Reviews from reviews-videos.md that reinforce the EXACT promise of this page (paid at the FedEx counter, easy out-of-state process):

- **Lede / "you will see your payment before you even leave the FedEx counter":** **R1 (Jessica Hammond)** — "free appraisal, full payment at FedEx," sold 3 guitars, generic. This is the single best-matched review on the site for this page's core promise. ⚠️ Flagged "already placed" on `/sell-my-fender/` testimonials, so verify before reusing; quoting one line as inline social proof (not a full card) avoids true duplication.
- **Step 5 / "Get Paid Before You Leave":** **R3 (Larry Hattier)** — first-time seller, fair offer, same-day pay; or **R25 (Rich S.)** — photos → call → offer + paid shipping. Either reinforces the pay-on-receipt mechanic.
- **Step 4 / FedEx counter trust:** **R4 (Randy Abercrombie)** — sold a 1970s Gibson bass, "paid at FedEx." Concrete confirmation that the counter-payment flow works for real sellers.

Recommendation: one short inline pull-quote (R1) under the lede is enough. This is a hand-out a seller reads AFTER deciding to sell, so heavy social proof is redundant — they're already convinced. Don't build a testimonial wall here.

### 5. Relevant videos

One clear, high-value match from reviews-videos.md / social.md:

- **Step 2 (Pack the Inside of the Case):** **`XrlMW385NMM` — "How to Pack a Guitar for Shipping (Step-by-Step)"** (236 views). This is the canonical asset for this exact page; social.md C2 explicitly maps it to **jvg-shipping-process**. Embed via the site's `<lite-youtube videoid="XrlMW385NMM">` pattern right under the Step 2 packing instructions so the seller can watch the bubble-wrap/void-fill technique demonstrated. Highest-relevance embed on the whole page.

No other video fits — the collection-buying and demo videos are marketing assets for indexable pages, not for a private logistics hand-out.

### 6. Social embeds

From social.md, the only direct match is the same packing video already covered:

- **C2 — YouTube `XrlMW385NMM` "How to Pack a Guitar for Shipping"** → Step 2. (Same asset as §5; YouTube is the cleanest embed, no token needed.) This is the one social embed worth placing here.
- **No Instagram / Facebook / Pinterest embeds.** IG/FB needs the embed script + a FB token (NEEDS-JOSH per social.md) and adds third-party tracking — inappropriate for a private hand-out page where the goal is a frictionless seller experience, not engagement. **Flag NEEDS-JOSH only if Josh wants the IG embed token resolved site-wide; for THIS page, skip social embeds entirely.**

### 7. Dataset-schema tables

The page has one `<table class="ship-table">` (FedEx Account # / Charge to Account / Ship To / Shipping Speed / Insurance). This is **NOT a Dataset** — it is operational instructions (a key-value action list containing Joe's private FedEx account number and ship-to address), not a structured collection of observations. dataset-schema.md's criteria explicitly exclude this shape (it's the equivalent of the "skip" tier: instructions/rubric, not range-to-value reference data). Adding `Dataset` markup would also be doubly wrong because (a) the page is noindex and (b) it would expose Joe's FedEx account number as structured data. **No schema. Leave the table as a plain `<table>`.**

### 8. DB fact check

This page makes essentially **no datable factual claims** — no serial ranges, dates, production counts, patents, or valuations. The only factual assertion is the nitrocellulose-lacquer warning, which is CORRECT and consistent with the DB:

- **Claim:** "Bubble wrap can react with the nitrocellulose lacquer used on vintage guitar finishes and leave permanent marks." **Verdict: CONSISTENT.** Aligns with VG-0104 (nitrocellulose is a thin solvent-based finish) and the broader nitro-sensitivity facts (VG-0017, VG-0018). The "plasticizers in PVC/bubble-wrap off-gas and mar nitro lacquer" point is well-established vintage-guitar care knowledge. No contradiction with any VG fact.

**Nothing on this page contradicts a VG-#### fact.** No flags.

**Missing-from-DB candidate (low priority, care/handling category):** the specific claim **"PVC bubble wrap (and other plasticizer-bearing plastics) should never contact a nitrocellulose-lacquered vintage guitar finish because the plasticizers can chemically react with the lacquer and leave permanent imprints/marks."** The DB currently covers what nitro IS (VG-0104) and how it ages/fluoresces (VG-0017/0018) but has no fact on **material contact / storage hazards** for nitro finishes. This is a genuinely useful, frequently-asked care fact (also applies to guitar stands, foam, and vinyl straps). Source: widely documented in luthier/care literature (e.g. Gibson/Martin official care guidance on plasticizer-finish interactions). Recommend adding as a new VG-#### in the "Multiple/All" care category. This is the one solid fact on the page worth promoting into the DB.

---

**Counts:** links recommended 3 (1 solid `/free-appraisal/`, 1 optional/NEEDS-COPY `/sell-a-guitar-collection/`, 1 video-as-related); FAQs suggested 4 (visible-only, NO schema — page is noindex); flags 0 contradictions, 1 missing-DB-fact candidate (nitro/plasticizer contact hazard), plus 1 cross-cutting flag: do NOT add FAQPage/Dataset JSON-LD or social tracking embeds to this noindex hand-out page.
