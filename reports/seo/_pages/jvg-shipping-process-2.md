## jvg-shipping-process-2

> **Page context (read first):** This is the **Fair-Play Guarantee variant** of the shipping hand-out. It is `noIndex={true}` and an **orphan** (linkgraph confirms 0 in-content in-links and 0 out-links — it's only reachable via a direct hand-out link Joe texts/emails a seller mid-deal). Because it is deliberately de-indexed and never crawled for ranking, its **SEO link-equity value is ~0** — do NOT treat it as a money page or stuff it with serial-guide anchors for ranking. Its real job is a **high-trust, mid-transaction touchpoint** for a seller who has already agreed a price and is about to ship. So internal links here should be *helpful next-steps / reassurance*, kept sparse, and never link toward serial-dating guides (irrelevant once a price is agreed) or the homepage funnel. The page is ~1,050 words across 11 H2 blocks, so at the ~1 link / 120-180 words rule of thumb, the natural ceiling is **5-7 contextual links total** — and most of those are soft "learn more / who I am" reassurance links, not ranking plays.

### 1. Internal links to ADD

The page currently has **zero** in-content internal links. Add a small, restrained set. The single most defensible link is to `/free-appraisal/` (the appraisal page that most needs inbound equity site-wide — 55 inbound but pos 16.1, deep page 2) where the copy already discusses authentication and the renegotiate-or-return outcome, and to `/about-me/` for the "who is the person I'm shipping a $10k guitar to" trust gap. Keep serial-guide links OFF this page — a seller mid-ship does not need a Fender dating chart, and forcing one would be the "irrelevant link" the brief warns against.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Lede / "Our Fair-Play Guarantee" — the free signed **authentication letter** that "normally costs hundreds of dollars from an outside appraiser" | a free written authentication and appraisal | `/free-appraisal/` | The page literally describes Joe's appraisal/authentication service in the return-path bullet; `/free-appraisal/` is the single highest-priority under-linked target (pos 16.1, page 2). Even noIndex, a real human-followed link here is a fair next-step. Anchor varied off GSC "vintage guitar appraisal" intent without being a stuffed money-anchor. |
| "Questions? Text me anytime." contact block — "this process has worked smoothly for hundreds of sellers" | learn a bit about who you're dealing with | `/about-me/` | `/about-me/` is itself 🔴 under-linked (1 in-content out-link). On a page where a stranger is about to mail a valuable instrument, a "here's who I am" link directly serves the trust moment and spreads equity to a starved page. |
| "Our Fair-Play Guarantee" — "Vintage guitars have long histories... sometimes even the current owner doesn't know" | how originality and condition affect value | `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/` | The guarantee section's whole premise is that originality/mods change value. This blog post (1 in-content inbound, near-orphan) explains exactly that, reassuring the seller the renegotiation is principled, not arbitrary. Soft educational link, not a CTA. |
| "Payment Options" — "for higher-dollar sales... a quick wire transfer" / collection-scale context | selling a whole collection | `/sell-a-guitar-collection/` | ONLY if this hand-out is ever sent to a multi-guitar seller. `/sell-a-guitar-collection/` is pos 27.9 (deep page 3) and needs links. Mark as **conditional** — skip on a single-guitar ship. Low priority; the page is single-instrument by default ("your guitar," singular, throughout). |

Net recommendation: add **2 links for certain** (`/free-appraisal/`, `/about-me/`), the 7-factors blog link as a nice-to-have, and treat `/sell-a-guitar-collection/` as conditional. That keeps density well under the ceiling and avoids forcing brand/serial anchors onto a transactional page. **Do not** add `/sell-my-*/` brand pages here — the seller has already chosen to sell; those are top-of-funnel and irrelevant at the shipping stage.

### 2. Section-level related posts

Most sections here are pure procedure (Steps 1-6, checklist) and do NOT want a "Related reading" block — interrupting packing instructions with blog promos hurts the task. Only two sections are genuinely topical:

- **"Our Fair-Play Guarantee"** — a small inline "Related reading" block **fits well**: `is-your-vintage-guitar-valuable-7-factors-that-determine-its-value` and `mistakes-to-avoid-when-selling-a-vintage-guitar`. Both reinforce that originality/condition drive the renegotiation honestly. 1-2 links max.
- **"Step 2 — Pack the Inside of the Case" / the bubble-wrap warning** — borderline. The channel has the perfect asset (Joe's own packing video, see §5) which is far better than a blog link here. Recommend the **video**, not a related-post block.
- **All other sections (Steps 1, 3, 4, 5, 6, Payment Options, Quick Reference Checklist, Contact)** — NO related-posts block. They are task instructions; a promo block would be noise. Leave clean.

### 3. FAQ gaps

This page has no FAQ and arguably shouldn't carry an FAQPage schema (it's noIndex, so no rich-result upside). But a short visible Q/A block near the bottom would pre-empt the exact questions sellers text Joe, reducing friction. Suggested, plain (no schema needed since noIndex):

- **Q: What if I don't live near a real FedEx Print & Ship Center?** A: Text Joe before you head out and he'll arrange a pickup or alternative (this restates Step 3's fallback — purely a process answer, no DB fact).
- **Q: Is my guitar actually insured if I declined FedEx's insurance?** A: Yes — every guitar is covered door-to-door under Joe's private Heritage Musical Instrument policy, which has broader coverage and a smoother claims process than FedEx shipping insurance (restates the Step 4 note).
- **Q: Why can't I use bubble wrap against the guitar?** A: Bubble wrap can react with the nitrocellulose lacquer on vintage finishes and leave permanent marks or stick over time; use soft cloth, newspaper, or paper towels instead. **(Touches VG-0104 — nitrocellulose lacquer; see §8. The "reacts with / sticks to nitro" claim is the page's one chemistry assertion and should be backed by a DB fact, which currently doesn't cover bubble-wrap/plastic-vs-nitro reactivity.)**
- **Q: When do I actually get paid?** A: Same day the guitar arrives and passes inspection, via your preferred method (PayPal, Venmo, Zelle, Cash App, wire, or check) — most sellers see funds within hours (restates Step 6 / Payment Options).

### 4. Relevant reviews

A seller mid-ship responds to "other people did this and got paid fast / fairly," not model-specific praise. Best fits from reviews-videos.md:

- **R1 (Jessica Hammond)** — "easy process, full payment, sold 3 guitars" → drop under **"The Process at a Glance"** or the **Contact** block as one-line social proof that the whole flow works. ⚠️ Flagged "already placed" on `/sell-my-fender/`; verify before reuse, but on a noIndex hand-out the duplicate-content concern is moot.
- **R3 (Larry Hattier)** — first-time seller, fair offer, **same-day payment** → perfect under **"Step 6 — Arrival, Inspection, Payment"** to validate the same-day-pay promise.
- **R25 (Rich S.)** — photos → call → offer + **paid shipping** → fits **"Step 3/4 (FedEx / At the Counter)"** since it speaks to Joe covering shipping, matching the "nothing out of your pocket" callout.
- **R10 (My School In Azia)** — "sold in hours, not a pawn shop" → optional reinforcement at **Contact** block for the trust/speed angle.

One review is plenty for a transactional page; **R3 under Step 6** is the single best pick.

### 5. Relevant videos

- **XrlMW385NMM — "How to Pack a Guitar for Shipping (Step-by-Step)"** → embed under **"Step 2 — Pack the Inside of the Case"**. This is the ideal asset for this exact page: it shows the packing technique the section describes in words and visually proves the bubble-wrap/soft-material point. (Also flagged for this page directly in social.md as **C2**.) **Top recommendation.**
- **SFjsaZsEHqI — "Buying Over 100 Vintage Fender Amps & Rare Guitars in Arizona!"** (11.3K views) → optional trust/credibility embed at the **Contact** block ("hundreds of sellers across the country") to show Joe's scale. Lower priority; the packing video is the one that earns its place.

### 6. Social embeds

From social.md:

- **C2 (YouTube, XrlMW385NMM, "How to Pack a Guitar for Shipping")** — explicitly mapped to `jvg-shipping-process-2` in social.md. Place under **Step 2**. Same asset as §5; YouTube embed needs no token, cleanest option.
- **B1 / C4-type collection-buy videos** — skip; off-topic for a single-guitar ship.
- No Instagram/Facebook/Pinterest embed adds value here. The IG embed-token and FB-SDK items are flagged **NEEDS-JOSH** in social.md, but none of them fit this page, so **no NEEDS-JOSH blocker applies to this page** — the one recommended embed (C2 YouTube) is token-free and ready.

### 7. Dataset-schema tables

The page has exactly one `<table>`: the **"At the Counter" FedEx info table** (Account # / Charge to Account / Ship To / Return Address / Shipping Speed / Insurance). This is **NOT a dataset** — it's a one-off instruction sheet of transactional values (an account number and a shipping address), not a structured key→value reference collection. dataset-schema.md explicitly lists "single-row or two-cell comparison tables" and instruction/rubric tables under "Not datasets (skip)." **No Dataset markup.** (The page is also noIndex, so any schema here is invisible anyway.) The Quick Reference Checklist is a `<ul>`, not a table, and also gets nothing.

### 8. DB fact check

This is process/policy copy, not a facts page, so there are very few verifiable factual claims to cross-check. Findings:

- **No contradictions found.** Nothing on the page conflicts with any VG-#### fact. The serial-range / production-count / patent / valuation claims that VG-0001..VG-0112 cover simply don't appear here.
- **Nitrocellulose / bubble-wrap claim (Step 2 warning):** "Bubble wrap can react with the nitrocellulose lacquer used on vintage guitar finishes and leave permanent marks or stick to the finish over time." The *substrate* fact is consistent with **VG-0104** (nitrocellulose lacquer is the thin solvent-based vintage finish). However, the **specific reactivity claim** (plastic/bubble-wrap outgassing or contact marring nitro) is **not present in the DB**. It is a well-established and true luthier/conservation fact. **Recommend ADDING a new fact** to the DB:
  > *Proposed fact (Multiple):* "Bubble wrap and other soft plasticizer-bearing plastics can chemically react with / imprint into nitrocellulose lacquer on contact over time, leaving permanent texture marks or adhering to the finish. Store and ship nitro-finished vintage instruments against soft cloth, paper, or acid-free materials, never plastic in direct contact." Source visible on-page is Joe's own shop guidance; corroborate against any guitar-finish-care reference before locking the VG id.
- **Process/policy assertions** (free insured shipping, same-day inspection, same-day payment, FedEx account billing, "Heritage Musical Instrument" private insurance policy, "press 7" FedEx phone tip, payment-app limits) are **business-operational facts, not vintage-guitar reference facts** — they are out of scope for the VG fact DB and should NOT be added there. The FedEx account number (541950800) and Mesa shipping address are live transactional data and likewise belong only in `site.ts` / page constants, not the fact index.

---
**Wrote:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/jvg-shipping-process-2.md` · links: 4 recommended (2 firm + 1 nice-to-have + 1 conditional) · faqs: 4 suggested (1 marked VG-0104) · flags: 0 wrong facts, 1 missing-fact-to-add (bubble-wrap-vs-nitro), 1 page-context caveat (noIndex orphan — SEO value ~0, links are trust next-steps not ranking plays)
