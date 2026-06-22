## sell-my-rickenbacker-guitar

Page archetype: **B-simplified conversion page** (`.smr-*` prefix). Sections in order: (1) Hero, (1b) Lead form, (2) I Buy & Appraise, (3) Nationwide 3-card feature grid, (4) Testimonials (3 Rickenbacker reviews), (5) CTA bar + Meet Joe video, (6) FAQs, ContactSection.

**Baseline link state (from linkgraph.md):** this page is 🔴 **under-linked** — only **2 unique in-content out-links** (both go to `/free-appraisal/`: the hero "Get Your Free Appraisal" button + "I'll appraise it carefully" in §2). It receives only **3 distinct inbound** links. It mentions Rickenbacker serial/dating knowledge, appraisal, nationwide buying, and amps but links to **none** of the relevant guide/sell pages. High-value, low-effort link target.

---

### 1. Internal links to ADD

Page is ~520 words of body copy, so a moderate density caps at roughly 4-5 contextual in-content links. The single highest-value add is `/rickenbacker-serial-numbers/` (the topical sibling — only 3 inbound site-wide, pos 9.5) and a varied second link to `/free-appraisal/` is already present so avoid stacking more appraisal anchors. Spread the rest across the amp page and a couple of cross-sell pages.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Hero §1, copy para 2: "I can also help you figure out what your vintage Rickenbacker is worth." | date your vintage Rickenbacker | /rickenbacker-serial-numbers/ | The #1 missing link. Topical sibling page, only 3 inbound site-wide; GSC anchors "dating rickenbacker guitars" / "how to date a rickenbacker guitar". Sends the "worth" claim to the dating tool. Vary off the over-used serial anchors. |
| Hero §1, copy para 1: "Rickenbacker guitars, basses, and amps are classic American instruments" | vintage amps | /sell-an-amplifier-or-effect/ | The page explicitly names amps but never links the amp sell page (which has only 3 inbound). Natural contextual anchor on the word "amps". |
| §2 I Buy & Appraise, body: "With my years of experience with Rickenbackers, I can give you a fair price" — add a sentence or anchor a phrase | how I value a guitar | /free-appraisal/ | Already linked here once via "I'll appraise it carefully" — do NOT add a second free-appraisal link in this same paragraph (would stack). Listed only as the alternative if the existing anchor is reworded; keep one appraisal link in §2, not two. |
| §3 Nationwide feature col 2 body: "you might find a rare Rickenbacker" / "Browse the online catalog" | browse current inventory on Reverb | (Reverb storefront / `/consignment/`) | "Browse the online catalog" currently links nowhere. Point to the consignment page or Joe's Reverb shop so the catalog claim is actionable. (Reverb is external — confirm canonical URL with Josh.) |
| §3 Nationwide feature col 3 body: "Over the years, I have seen many Rickenbacker guitar models and series" | other brands I buy | /sell-a-guitar-collection/ | Cross-sell to the collection page (pos 27.9, needs links badly). A seller with a Ricky often has other guitars; natural bridge. Use a non-"sell" varied anchor. |
| §5 Meet Joe CTA bar title: "Sell Your Rickenbacker Guitar Collection Online" | sell your whole collection | /sell-a-guitar-collection/ | The CTA literally says "Guitar Collection" but links to /contact-me/ only. If not used in §3, place the collection link here instead (don't double it). Pick ONE of §3/§5 for the collection link to keep density moderate. |

Net recommendation: add **4 contextual links** — `/rickenbacker-serial-numbers/` (hero), `/sell-an-amplifier-or-effect/` (hero "amps"), the catalog/Reverb link (§3 col 2), and ONE `/sell-a-guitar-collection/` link (§3 col 3 *or* §5 CTA, not both). Leave the existing two `/free-appraisal/` links as-is. That lands ~6 total in-content out-links at ~1 per 90-110 words — healthy, not stuffed.

---

### 2. Section-level related posts

The page has no blog/related-reading anywhere. Rickenbacker has thin blog coverage (no dedicated Ricky post exists in the catalog), so keep related-reading blocks light and route to the closest evergreen guides.

- **§1 Hero / §2 I Buy & Appraise** — a small inline "Related reading" block fits: link **/rickenbacker-serial-numbers/** (date-your-Ricky) and **/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/** (generic value factors — applies to any brand). Good fit; these answer the "what's mine worth" question the hero raises.
- **§3 Nationwide grid** — a "Related reading" block fits col 1 (pricing): **/post/best-online-platforms-sell-vintage-guitars/** and **/post/mistakes-to-avoid-when-selling-a-vintage-guitar/**. Both are brand-agnostic and reinforce "sell to a direct buyer vs. marketplaces."
- **§5 Meet Joe / collection CTA** — **/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/** is the natural related post for the "Collection Online" CTA. One inline link is enough; don't build a full block here (the CTA bar is visually busy).
- **§6 FAQ** — no related-reading block needed; FAQ + ContactSection already close the page. (See FAQ gaps below for a Ricky-specific Q instead.)

No Rickenbacker-specific blog post exists to advertise. If Josh wants section-level related posts to feel less generic, the real fix is to commission a "Dating & Identifying Vintage Rickenbacker" post — flagged in §8 below as a content gap.

---

### 3. FAQ gaps

Current FAQs are the 5 generic resale FAQs (price determination, consignment/trade, payment, shipping tax, warranty) shared across all sell-my-* pages — **zero Rickenbacker-specific Q's**. The page would benefit from 2-3 brand-targeted FAQs (also strengthens the FAQPage schema for Ricky queries). Suggested adds, drawn from the page's own topic:

- **Q: How do I tell what year my Rickenbacker was made?** A: From roughly 1961 to 1986, Rickenbacker used a two-letter date code, usually stamped on the jackplate: the first letter gives the year and the second the month. Send Joe a photo of the jackplate and he can date it for you. *(needs DB fact: **VG-0094**)* — this Q also creates a natural in-FAQ link to `/rickenbacker-serial-numbers/`.
- **Q: Do you buy Rickenbacker basses as well as guitars?** A: Yes. Rickenbacker basses like the 4001 and 4003 are some of the most sought-after, and Joe buys them for cash nationwide alongside the electric guitars and amps. *(no DB fact; from page copy — hero already says "guitars and basses," and the testimonials mention a 4003)*
- **Q: Will an older Rickenbacker with replaced parts still sell?** A: It can, but originality is the single largest driver of a vintage guitar's value, so an all-original example is worth more than one with swapped tuners, pickups, or a refinish. Joe will tell you honestly how mods affect your offer. *(needs DB fact: **VG-0112**, supporting **VG-0106/0107**)*
- **Q: Can you date a vintage Rickenbacker amp by its serial number?** A: Not reliably — like most vintage amps, Rickenbacker/Electro amps are dated by their components and pot codes rather than a serial. *(supporting **VG-0099/0100** for pot-code dating; Ricky-amp-specific dating is not in the DB — see §8)*

Recommend adding the first three; they're well-supported and on-topic. The amp-dating Q is optional and partly outruns the DB.

---

### 4. Relevant reviews

The page already shows **3 Rickenbacker-relevant Google reviews** baked into source (Cody Folk DeCou — explicitly mentions his Rickenbacker 4003; Keith Smith — sold a vintage guitar online, risk-on-Joe; Mike/StratMC — easy seamless selling). These are good and already brand/process-matched. From reviews-videos.md, the strongest additional fits:

- **§4 Testimonials** — the existing 3 are correct and Ricky-specific (Cody's 4003 mention is gold). Keep them. If a 4th is wanted, **R1 Jessica Hammond** (easy process, full payment at FedEx) or **R25 Rich S.** (photos → call → offer + paid shipping) reinforce the "easy nationwide sell" story without being brand-specific.
- **§2 I Buy & Appraise** — **R3 Larry Hattier** (first-time seller, fair offer, same-day pay) fits the "I'll explain how I got there, fair price for both of us" copy as inline social proof.
- **Reverb Ricky reviews** (reviews-videos.md §B): **Matthew R. — Rickenbacker 325v59 1997** and **Scott K. — Rickenbacker 4001 1978** ("Joe's a great guy. Bass came with a damaged case. He made it right.") are the two substantive Rickenbacker product-titled Reverb reviews. Either works as a model-specific quote in §3 or §4. Scott K's 4001 review pairs perfectly with Cody's 4003 mention (both basses).

---

### 5. Relevant videos

The page already embeds **zMd6IJ-6e-8** in §5 ("Meet Joe") — but that ID is **1962 Gibson ES-335 (vintage setlist song)**, NOT a Rickenbacker or a Joe-intro video. The `<lite-youtube>` title attribute says "Meet Vintage Guitar Expert, Joe Dampt," which mismatches the actual video content. **Flag:** verify the intended video. The canonical "Meet Joe" intro on other pages is a different ID; if §5 is meant to introduce Joe, swap to the proper intro video. (Low-severity but it's a content/labeling mismatch.)

Rickenbacker-specific videos available (reviews-videos.md §C3 + social.md):

- **§3 Nationwide grid (col 2 "rare Rickenbacker") or §4** — embed **NXB7dmTiZLU** "Rickenbacker Electro Spanish Vibrola" (2.1k views) and/or **ILCxFZLwxWU** "Rickenbacher Electro Spanish Vibrola w/ Motorized Vibrato." These are Joe's own Ricky demos — strongest brand-match assets for proof + dwell time.
- **§5 Meet Joe** — if the section truly wants the Joe-intro, use the correct intro clip; otherwise the road-trip proof video **SFjsaZsEHqI** "Buying Over 100 Vintage Fender Amps & Rare Guitars in Arizona!" (11.3k, top channel video) fits the "nationwide buyer" / "always traveling" copy in §3 col 2 and §5.

Recommend: add a Rickenbacker demo (NXB7dmTiZLU or ILCxFZLwxWU) somewhere in §3/§4, and fix the §5 video labeling.

---

### 6. Social embeds

No social embeds on the page currently. From social.md, Rickenbacker has **no dedicated Priority-A/B social post** (the IG/FB scrape surfaced no Ricky reel). So:

- **Best available proof embed** is the YouTube Ricky demo (NXB7dmTiZLU / ILCxFZLwxWU) — already covered in §5 above; YouTube is the cleanest no-token embed per social.md.
- **§5 / homepage-style proof** — **B1 / C4** "Buying Over 100 Vintage Fender Amps & Rare Guitars" (SFjsaZsEHqI) and "I Spent $100,000 on Guitars in One Week!" (NTw8EcrS5Y8) work as nationwide-buyer trust embeds, though not Ricky-specific.
- **NEEDS-JOSH:** social.md flags (a) **no Rickenbacker Instagram reel exists** in the current scrape — if Josh wants a brand-matched IG embed here, a Ricky reel needs to be shot/posted; (b) **IG embed token** unresolved (FB Graph token for proper oEmbed); (c) **TikTok handle invalid** — confirm before any TikTok embed. For now, stick to YouTube embeds only on this page.

---

### 7. Dataset-schema tables

**None applicable.** This page has zero reference/lookup tables (no serial ranges, no price matrix, no spec timeline) — it's a conversion page with prose + a feature grid + FAQ. dataset-schema.md lists the Tier-1 dataset targets and this page is not among them; the Rickenbacker **dataset belongs on `/rickenbacker-serial-numbers/`** (the two-letter jackplate date-code table, VG-0094), not here. No Dataset markup to add. (Existing FAQPage + BreadcrumbList + Article schema on this page is appropriate.)

---

### 8. DB fact check

**Factual claims on the page:** the copy is almost entirely process/marketing ("fair cash offer," "years of experience," "The Beatles used Rickenbackers"). The only checkable factual claim is the Beatles association.

- **"best known for their heavy use by one of my favorite bands of all time: The Beatles!"** — accurate as a general historical claim (Lennon's 325, Harrison's 360/12). **Not in the DB** and not a serial/date/value fact, so no VG cross-check needed and nothing to flag. Leave as-is (it's voice/color, not a data claim).
- **No serial ranges, production counts, patents, dates, or dollar values are asserted on this page** — so there is nothing here that can contradict a VG-#### fact. Clean.

**Contradictions found:** none.

**Solid facts on this page MISSING from the DB:** none worth adding from this page's copy (it asserts no new reference facts). However, two **Rickenbacker DB gaps** surface while building the brand-specific FAQs/links above and should be added to the knowledge base (sourced, not from this page but needed to support it):

1. **Rickenbacker model lineage for the sell page** — the 4001/4003 bass line and 325/360-12 guitars are the marquee Ricky models (testimonial mentions a 4003; Reverb reviews cover a 4001 and a 325v59). The DB has only the date-code fact (VG-0094) for Rickenbacker. A model-context fact would help. *Source: Rickenbacker model history; Joe's own Reverb listings.*
2. **Rickenbacker/Electro vintage amp dating** — the page names "amps" but the DB has no Rickenbacker-amp dating fact (the Fender-amp tube-chart fact VG-0052 is brand-specific). If Josh wants the optional amp FAQ in §3, a verified Ricky-amp dating fact is needed first. *Source: needs research; currently a gap.*

Neither gap blocks this page; flagging for the `local-databases` / DB maintainers. The single most impactful content move tied to this page is commissioning a **"Dating & Identifying a Vintage Rickenbacker" blog post** (no Ricky post exists), which would give §2 real related-reading and feed `/rickenbacker-serial-numbers/` inbound links.

---

**Counts:** links to add = **4 contextual** (plus 0 net new appraisal links; collection link placed once across §3/§5) · FAQ gaps = **3 recommended Q/A** (+1 optional amp Q) · flags = **3** (1 mislabeled/mismatched §5 video [zMd6IJ-6e-8 is a Gibson ES-335 clip under a "Meet Joe" title] · 0 DB contradictions · 2 Rickenbacker DB gaps for missing model-lineage + amp-dating facts).
