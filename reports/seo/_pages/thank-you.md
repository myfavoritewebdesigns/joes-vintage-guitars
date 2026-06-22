## thank-you

> **Page context (read first):** `/thank-you/` is a `noIndex={true}` form-confirmation page (`canonical="/thank-you/"`, robots noindex). It is short (~180 words of visible copy), single-section, and exists to (a) confirm the contact-form submission and (b) capture optional guitar photos via the upload card. The linkgraph confirms it is an **orphan** (zero in-content inbound links) AND **under-linked** (1 in-content out-link: "Back to Home").
>
> **Critical caveat that governs every recommendation below:** because the page is `noIndex`, it has **no organic SEO value of its own** — it will never rank, never appear in GSC, and its outbound links pass essentially no crawl/ranking equity to targets (Google drops links on noindex pages from PageRank flow once the page is dropped from the index). So the usual "spread link equity to money pages" rationale does **not** apply here. The links below are justified **only on UX / conversion / next-step grounds**: a seller who just submitted a form is a hot lead sitting on a dead-end page, and giving them a relevant next action (decode their serial, read the matching sell page, see how shipping works) is genuinely useful. Do **not** stuff this page with serial-guide links "for SEO" — that would be link-stuffing a noindex page for zero ranking benefit and would clutter a clean confirmation screen. Keep it to a small, tasteful "while you wait" block. Everything is framed accordingly.

### 1. Internal links to ADD

The page currently has exactly one in-content link ("Back to Home"). It is a confirmation page, so the right move is a single small **"While You Wait"** helper block placed after the photo-upload card (before the final CTA row), offering 3 to 4 genuinely useful next steps. Not a link farm. At ~180 words the ~1-link-per-150-words density rule would cap this near 1 to 2, but a confirmation page's helper block is a recognized UX pattern and 3 to 4 curated links is defensible **as long as they are presented as a deliberate "next steps" list, not woven into prose**. All anchors are conversion/UX, not SEO-equity, plays.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| New "While You Wait" helper block (after `.pu-card`, before `.ty__ctas`) — lead-in: "While you wait to hear back, you can…" | look up your guitar's serial number | /free-appraisal/ OR the relevant serial guide | The seller just submitted with no brand context; point them to the appraisal hub. **Better:** make this a tiny brand-agnostic list (see next 3 rows) so they self-route. UX next-step, not equity. |
| Helper block list item — Fender owners | date a Fender by serial number | /fender-guitars-serial-number-guide/ | A waiting Fender seller can self-decode while Joe replies. Vary anchor (GSC: "fender serial number", "fender serial number lookup"). UX only — noindex page passes no equity. |
| Helper block list item — Gibson owners | read Gibson serial numbers | /how-to-read-gibson-serial-numbers/ | Same logic for Gibson sellers. GSC anchors: "gibson serial number lookup", "dating gibson guitars". Highest-impression guide, so genuinely the most likely match. |
| Helper block list item — Martin owners | look up a Martin serial number | /martin-serial-and-model-numbers/ | Martin guide has the highest impressions of all guides; a waiting Martin seller benefits. GSC: "martin serial number lookup". |
| Photo-upload card lede ("…front, back, headstock, and any labels or serial numbers…") — inline option | how to find your serial number | /free-appraisal/#... or the matching serial guide | The card already tells them to photograph serial numbers; a single contextual "not sure where it is?" link is the ONE place an in-prose link is natural. Keep to one. |
| Final CTA row (`.ty__ctas`) — add a third low-emphasis text link | get a free appraisal | /free-appraisal/ | They've already submitted, but reinforcing the free-appraisal path is the cleanest conversion next-step. `/free-appraisal/` is the site's single most-needed inbound target (pos 16.1) — but note: a link FROM a noindex page does not help its ranking; this is pure UX. |

**Density / restraint note:** Do **not** add the full priority-target list (all `/sell-my-*/`, `/sell-a-guitar-collection/`, `/sell-an-amplifier-or-effect/`, D'Angelico, Rickenbacker, Guild, Gretsch, amp-serial). On an indexed page they'd be fair game; on a noindex confirmation screen they are clutter with zero ranking payoff. The 3 brand serial guides + free-appraisal cover the realistic "what do I do while I wait" cases. If Josh wants a single catch-all instead of 3 brand links, use one **"browse our serial number & dating guides"** link to `/free-appraisal/` or a guides hub and stop there.

### 2. Section-level related posts

This page has effectively **one** content section (the thank-you + photo-upload card). A full "Related reading" block does **not** fit a confirmation page — it dilutes the single conversion focus (upload photos / call Joe) and adds noindexed clutter. **Recommendation: skip per-section related-posts blocks entirely.** The only acceptable editorial addition is the small "While You Wait" helper list from §1, and even that should stay to 3 to 4 utility links, NOT blog-post promos.

If Josh insists on one "while you wait, here's something to read" link, the single best-fit, broadly-relevant post for an unknown-brand seller is:
- `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/` — brand-agnostic, reassures a seller their guitar may be worth more than they think, primes them for Joe's reply. (One link max; do not add a 3-card grid.)

### 3. FAQ gaps

A confirmation page does **not** warrant an `FAQPage` accordion (and shouldn't — it's noindex, so FAQ schema would never surface, and an accordion clutters a clean "message sent" screen). **Recommendation: no FAQ block.** Instead, fold the two genuinely useful reassurance answers into the existing copy as one or two short plain-text lines (not schema), since a just-submitted seller really does wonder these things:

| Suggested Q (as a short reassurance line, NOT an accordion) | Suggested A | DB fact |
|---|---|---|
| "How soon will I hear back?" | Already answered in the lede ("…usually the same day"). Keep as-is; no change needed. | — |
| "Why send photos?" | "A serial number alone usually can't pin down an exact year — Fender and Gibson serials especially overlap across years, so clear photos of the headstock, labels, and hardware let Joe date and value it accurately." | VG-0011, VG-0050, VG-0111 (serials are a "no earlier than" clue, not an exact date) — this is a TRUE, on-brand reason to justify the photo ask and is worth adding as one sentence in `.pu-card__lede`. |
| "Is my photo/contact info kept private?" | One line linking to `/privacy-policy/` would reassure form submitters. | — (no DB fact; UX/trust) |

These are copy tweaks, not a schema FAQ. Do not add `FAQPage` JSON-LD to a noindex page.

### 4. Relevant reviews

A single testimonial can work as light reassurance on a confirmation page ("you made a good call"), but it is optional and must not compete with the upload CTA. If one is added, the best fit is a **process / responsiveness** review that mirrors what just happened (they submitted a form/photos and are now waiting for a reply):

- **R25 — Rich S.** ("Photos → call → offer + paid shipping") — *exact* narrative match for this page: the user just sent photos and is waiting for the call. Best single choice. (`free-appraisal-jsonld-reviews.json`.)
- **R21 — Missy** ("Website form → next-day call → value") — also a precise match for the form-submission-then-callback flow.
- **R18 — Jim W.** ("Late-night email reply, value given") — reinforces the "usually the same day" responsiveness promise in the lede.

Recommendation: **at most one** (R25), rendered as a small italic quote under the photo card, or none. Do not add a masonry review wall here — wrong page for it.

### 5. Relevant videos

- **uSu-Ld-xgnI** — "Free Vintage Guitar Appraisal | Joe's Vintage Guitars" — the only on-topic embed for this page; it explains what happens next after you reach out. Could sit as a small thumbnail in/under the photo-upload card as a "here's how the appraisal works while you wait" touch.

Caveat: an autoplaying or heavy embed on a confirmation page hurts the clean UX and adds JS. **Recommendation: skip the video embed** unless Josh wants a "what happens next" explainer — and if so, use the lite-youtube facade (matches site pattern) so it's a static thumbnail, not an eager iframe. No other video fits.

### 6. Social embeds

**None recommended.** Social embeds (IG reels, FB, Pinterest) are model/guitar demos or brand-story content — none of which fits a generic, brand-unknown confirmation screen, and all of which add third-party tracking/JS to a page that should stay minimal. The closest topical pin is **D1 — Pinterest "Trusted Guitar Appraisal Professionals"** (`/pin/952581758707357740/`), but the social.md verdict is to skip individual promo-pin embeds, and that holds doubly here. No NEEDS-JOSH items apply to this page.

### 7. Dataset-schema tables

**None.** This page has zero reference tables (no serial ranges, no price matrices, no spec timelines) — it's a form + CTA. Nothing qualifies for `schema.org/Dataset` markup. (And it's noindex, so any structured data here would be moot.)

### 8. DB fact check

**Factual claims on this page: essentially none.** The page makes no serial-range, date, production-count, patent, or value claims to verify. The only quasi-factual statements are:
- "Optional, but it is the fastest way for me to tell you what you've got." — opinion/process claim, not a checkable fact. **No conflict.**
- The implicit premise that photos (headstock, labels, serial numbers) help value a guitar — this is **consistent with and supported by** VG-0011 / VG-0050 / VG-0111 (serial numbers alone can't pin an exact year, so physical-feature photos are needed) and VG-0112 (originality, which photos reveal, is the dominant value driver). **No contradiction found.**

**Nothing on this page is WRONG or contradicts a VG-#### fact.**

**Missing-from-DB facts to add:** none. The page introduces no new verifiable factual claim worth adding to the DB index.

**One actionable copy suggestion (not a correction):** the photo-card lede could explicitly invoke the VG-0011/0050/0111 reasoning ("a serial number alone often can't pin an exact year, so clear photos let Joe date it accurately") to make the photo ask more persuasive — a true, DB-backed justification rather than just "it's faster." See §3.

---

**Written:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/thank-you.md` — links: 6 suggested (UX/conversion only, since page is noIndex; recommended subset is ~3 to 4) · faqs: 0 schema FAQs (2 reassurance copy-lines suggested instead) · flags: 0 DB-fact contradictions, 0 missing facts.
