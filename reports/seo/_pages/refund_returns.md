## refund_returns

**Page type:** Short legal/policy page (`src/pages/refund_returns.astro`). 7 H2 sections, ~430 words of body copy. Currently has **zero in-content internal links** (only two `mailto:` and one `tel:` link, which don't count as internal page links) — flagged 🔴 under-linked in linkgraph.md. It is also one of the **6 orphan pages** (zero in-content inbound). This is a thin, low-intent utility page, so the right move is restraint: a few high-relevance contextual links plus one small "related reading" pointer, NOT a stuffed link farm. At ~430 words, the ~1 link/120-180 words rule of thumb caps useful in-content links at roughly 3 to 4.

---

### 1. Internal links to ADD

Density note: 430 words supports ~3 contextual links max. The policy copy is generic (it never names a brand or a serial number), so most PRIORITY serial-guide targets have **no natural anchor on this page** — do not force them. The honest, relevant placements:

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Overview — first sentence "I run a 30-day return window… in its original condition, and in its original packaging" | get a free appraisal before you buy | /free-appraisal/ | `/free-appraisal/` is the #1 inbound-link-needy page (pos 16.1, 3,308 impr) and is the most natural conversion CTA to seed on any utility page. Most contextually it fits the idea that knowing a guitar's value/condition up front avoids returns. Uses a GSC anchor variant ("free appraisal") not over-stuffed. |
| Exchanges — "I only replace items if they're defective or damaged… send it to {address}" | how I pack and ship guitars | /jvg-shipping-process/ | `/jvg-shipping-process/` is itself a 🔴 orphan (0 inbound) AND under-linked (0 outbound). A returns/exchange section is the single most topically-correct place on the whole site to link the shipping-process page. Directly relevant to "send it back." |
| Shipping a Return — "use a trackable service and add insurance… I can't guarantee I'll receive an uninsured return" | the same care I take packing every guitar | /jvg-shipping-process-2/ OR /jvg-shipping-process/ | Reinforces packing/insurance guidance with Joe's own shipping-process page; helps de-orphan a dead-end page. Pick one shipping URL to avoid double-linking the same topic; prefer `/jvg-shipping-process/` if the two are duplicates. |
| Questions — "If you have any questions about returns or refunds… or call or text {phone}" | start a conversation about selling or buying | /contact-me/ | `/contact-me/` is also 🔴 under-linked (0 outbound) and orphan-adjacent. A "questions" section naturally points to the contact page beyond the raw tel/mailto. Optional 4th link; drop if density feels high. |

Do NOT add: any Fender/Gibson/Martin/Gretsch/Guild/Rickenbacker serial-guide link, any `/sell-my-*/` link, or `/sell-a-guitar-collection/` — there is no brand or selling context in the policy copy and forcing them would be transparent keyword-stuffing on a legal page (and risks looking manipulative on a YMYL-adjacent policy doc). The appraisal + shipping + contact links are the only defensible ones.

---

### 2. Section-level related posts

This page is a policy document, not editorial content. A "Related reading" block is **inappropriate on most sections** (you don't advertise blog posts inside a refund clause). The single defensible spot:

- **Shipping a Return** section — a small inline "Related: How to Pack a Guitar for Shipping" pointer is genuinely useful here, linking the shipping-process page (and/or the YouTube packing video, see §5). This is the only section where a related-content nudge adds value rather than noise.
- **All other sections (Overview, Partial Refunds, Refunds, Exchanges, Gifts, Questions):** NO related-reading block. Keep them clean. Adding blog promos to refund/partial-refund clauses reads as spammy and hurts trust on a policy page.

---

### 3. FAQ gaps

The page is structured as plain prose with no FAQ accordion. A short **FAQPage** block (3 to 4 Q/As) at the bottom would be a legitimate enhancement — it mirrors the questions buyers actually ask, and the answers are drawn straight from the page's own policy. None of these require a DB fact (this is policy, not guitar history), so no VG-#### citations are needed.

Suggested Q/A (answers paraphrase the existing copy — keep them factually identical to the policy above to avoid contradiction):

1. **Q: What is Joe's Vintage Guitars return window?** A: 30 days. The item must be unused, in original condition, and in its original packaging, with a receipt or proof of purchase.
2. **Q: Who pays for return shipping?** A: The buyer. Return shipping costs are not refundable and are deducted from any refund. Use a trackable, insured service for valuable items.
3. **Q: How long does a refund take?** A: Once the return arrives and is inspected, Joe emails you with approval status; approved refunds post to your original payment method within a few business days. Late refunds: check your bank, then your card company, then email Joe.
4. **Q: Can I return a sale item?** A: No. Only regular-priced items can be refunded; sale items, gift cards, and downloadable software cannot.

If a FAQ block is added, mirror it with `FAQPage` JSON-LD (the project already has a reusable `<FAQ />` component and the FAQPage schema pattern). Gate: keep answers byte-aligned with visible policy so structured data isn't "misleading."

---

### 4. Relevant reviews

**None recommended.** reviews-videos.md social proof is sell/appraisal-experience testimonials (R1–R26) — none are about returns or refunds, and dropping a glowing "easy to sell" review into a refund policy is off-topic and reads as manipulative on a YMYL-adjacent page. Leave this page review-free. (If Joe ever wants a single trust signal, the most defensible would be R3 "Larry Hattier — first-time seller, fair offer" near the Questions CTA, but the recommendation is to skip it.)

---

### 5. Relevant videos

One genuinely on-topic option:

- **Shipping a Return** section → embed **`XrlMW385NMM` — "How to Pack a Guitar for Shipping (Step-by-Step)"** (reviews-videos.md C1; social.md C2). This is directly relevant to the "use a trackable service / pack it carefully for return" guidance and gives the page a useful, non-promotional asset. Embed via the site's existing `<lite-youtube videoid="XrlMW385NMM">` pattern.

No other video fits. Demo/collection-buy videos are off-topic for a refund policy.

---

### 6. Social embeds

**None recommended.** social.md candidates are all brand/model guitar demos and collection-buying reels — none map to a returns/refund policy. Embedding a guitar-demo Reel inside a refund clause would be off-topic. Skip all social embeds on this page.

- **NEEDS-JOSH:** none specific to this page. (The site-wide IG-embed-token and TikTok-handle items in social.md don't apply here since nothing is being embedded.)

---

### 7. Dataset-schema tables

**None.** This page has no reference tables — no serial ranges, no price matrices, no spec timelines. dataset-schema.md explicitly excludes rubric/policy/definition content from `Dataset` markup. The only structured-data opportunity here is the **FAQPage** block from §3 (and the existing BreadcrumbList, which is already present). No `Dataset` markup applies.

---

### 8. DB fact check

**No guitar factual claims on this page.** The content is entirely store policy (return window, refund timing, shipping responsibility, gift handling). There are **no serial ranges, dates, production counts, patents, or values** to cross-check against VG-0001..VG-0112.

- **Contradictions found:** none (nothing factual to contradict).
- **Facts to ADD to the DB:** none — the page contains no reference-grade vintage-guitar facts worth indexing. The "30-day return window," "30 days after delivery," and "regular-priced vs sale items" are business-policy facts specific to Joe's store, not general vintage-guitar knowledge, so they do not belong in the VG fact index.

One **internal-consistency note (not a DB issue):** the page states a flat "30-day return window" in Overview but Partial Refunds allows "an item returned more than 30 days after delivery" to qualify for a partial refund — these are consistent (full refund ≤30 days, possible partial after), but if a FAQ is added, word it so the two don't appear to conflict.

---

**Summary:** wrote `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/refund_returns.md` — 4 internal links (3 core + 1 optional), 1 suggested FAQ block (4 Q/As), 0 DB contradictions, 0 DB facts to add, 1 video, 0 reviews, 0 social embeds, 0 dataset tables.
