## contact-me

**Page type:** Archetype A conversion page, but unusually short — just 3 sections (title bar, location card + map, contact CTA + form). Per `linkgraph.md` it currently has **0 in-content internal out-links** (flagged 🔴 under-linked). It also has very little prose: the location card, a heading, a 3-item contact list, and a form. There is almost no running copy to host contextual links, so the realistic play is a small, purpose-built "Not sure where to start?" helper block between section 2 (location) and section 3 (form), plus a couple of links woven into the form's left column. Do NOT keyword-stuff a thin page — a handful of well-chosen links is correct here.

This page's own GSC footprint is brand/navigational ("contact me" anchor used 7× site-wide → here). It is a strong *equity passer* (every visitor who reaches "contact" is high-intent) but a weak *ranking target*. So the priority is to route its modest equity and its high-intent visitors toward the money pages that need inbound links most: **/free-appraisal/** (deep page 2, pos 16.1, needs links most), the **/sell-my-*/** pages, and **/sell-a-guitar-collection/** (pos 27.9).

---

### 1. Internal links to ADD

Because the page has no in-content prose, the recommendation is to add ONE small inline helper block (a "Not Sure Where To Start?" / "What Joe Buys" mini-paragraph) inside section 3's left column (`.cm-contact__left`, under the 3-item contact list) and to make the existing contact-list/heading items contextual. That block is the natural home for the links below. Keep it to ~120-150 words so density stays at roughly 1 link per 120-180 words (this implies ~4-6 links max in the block, plus the appraisal link). Suggested copy seed: a sentence naming what Joe buys (each brand → its sell page) and a sentence on the appraisal + collection paths.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| New helper block, sentence: "Not sure what your guitar is worth? Start with a…" | free guitar appraisal | /free-appraisal/ | **Top priority.** Free-appraisal needs inbound links most (pos 16.1, page 2, 55 inbound but high-intent). A contact page visitor is the ideal candidate. Anchor drawn from gsc.md top query ("free guitar appraisal"). |
| Helper block, "we buy…" sentence — Fender mention | sell a vintage Fender | /sell-my-fender-guitar/ | Routes high-intent contact traffic to a pos-10.3 page in the 5-20 climb band; varies the over-used "Sell My Fender" anchor (used 3×). |
| Helper block — Gibson mention | sell your vintage Gibson | /sell-my-gibson-guitar/ | pos 11.1, 2,653 impr — in the link-first band; anchor varied off gsc.md "sell vintage gibson". |
| Helper block — Martin mention | sell a Martin guitar | /sell-my-martin-guitar/ | pos 9.1; gsc.md target anchor "sell martin guitar". |
| Helper block — collection / estate sentence | sell a whole guitar collection | /sell-a-guitar-collection/ | **Second priority.** pos 27.9, deep page 3, only 4 inbound — biggest upside; gsc.md queries "guitar liquidation / estate sale". |
| Helper block — amps sentence (optional, only if amps named) | sell an amplifier or effect | /sell-an-amplifier-or-effect/ | Under-linked (3 inbound); rounds out "what Joe buys" without forcing. |
| Helper block — "find your guitar's year" sentence (optional) | read your guitar's serial number | /how-to-read-gibson-serial-numbers/ OR /fender-guitars-serial-number-guide/ | Only add ONE serial link if the block mentions dating; Gibson SN is the single biggest 5-20 opportunity (pos 11.5, 12,313 impr). Don't add all six brand SN guides — that's stuffing on a thin page. |

Notes:
- Do NOT link the address/map/phone/email list items to internal pages — those are functional contact actions (tel/mailto/map) and should stay as-is.
- If Josh prefers to add zero new prose, the minimum-viable change is a single sentence under the contact list linking **/free-appraisal/** + **/sell-a-guitar-collection/** — the two pages that most need equity. Everything else is optional enrichment.
- Cap at ~6 links total. This page's value is as a clean conversion endpoint; over-linking it dilutes the form CTA.

---

### 2. Section-level related posts

This page is too short and too transactional for per-section "Related reading" blocks. A blog-recirculation strip would compete with the form (the single conversion goal) and add scroll between the visitor and the submit button.

- **Section 1 (Title bar "Contact Me"):** No related posts. Decorative band only.
- **Section 2 (Location card + Joe-Map):** No related posts. A "Related reading" block here would push the form below the fold. If anything fits, it's a one-line "New to selling? See how it works" — but route that to the **/free-appraisal/** or **/sell-a-guitar-collection/** *pages*, not blog posts.
- **Section 3 (Contact CTA + form):** A small inline "Related reading" block does NOT fit *above* the form. It is acceptable as a *single* low-key line inside the left column helper block (section 1 above), and the best post to surface there is **/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/** (the strongest seller-education post, links broadly) for collection/estate inquiries, and **/post/mistakes-to-avoid-when-selling-a-vintage-guitar/** for first-time sellers. One link, not three — keep the form dominant.

Verdict: **no dedicated related-posts blocks on this page.** Recirculation belongs on the long reference/value pages, not the contact endpoint.

---

### 3. FAQ gaps

The page has no FAQ. A short 3-4 question FAQ accordion ABOVE or BESIDE the form would genuinely help here: it pre-answers the friction questions a hesitant seller has at the moment of contact, and it adds indexable text + a `FAQPage` schema to an otherwise thin, content-light page (real SEO upside given the page is almost all form chrome). Suggested Q/A, drawn from the page's own contact/sell topic:

- **Q: How do I contact Joe's Vintage Guitars?** A: Text or call 602-900-6635, email joesvintageguitars94@gmail.com, or use the form on this page. Joe responds quickly, often the same day. (No DB fact needed — pull phone/email from `site.ts`, do not hardcode.)
- **Q: Do I need an appointment to bring a guitar in?** A: Yes — the Mesa location is open by appointment. Reach out first and Joe will set a time. (Matches the page's "Open 24 hrs by appointment" copy.)
- **Q: Can I get a value before I drive out?** A: Yes. Send photos and details through the form or by text and Joe can give you a no-obligation estimate before any in-person visit. Pair with a link to the **free appraisal** page.
- **Q: What information should I include when I reach out?** A: Brand, model, year if known, the serial number, and clear photos of the headstock, body, and any case or paperwork. If you don't know the year, the serial number is the best starting point. *(If this answer states how a serial dates a guitar, flag the honesty caveat: serials give a "no earlier than" floor and ranges overlap — VG-0050, VG-0053, VG-0060, VG-0061; Gibson 1961-69 unreliable VG-0011. Keep the answer vague ("the serial is a starting point") to avoid needing a precise dating claim.)*

Mark: only the last Q would touch a DB fact, and only if it makes a dating claim — recommend keeping it claim-free so no VG-#### citation is needed.

---

### 4. Relevant reviews

From `reviews-videos.md`, the contact page is a trust-at-the-moment-of-conversion surface. The best fits are the *process/ease* reviews (not model-specific ones). Add 1-2 as a small testimonial line near the form to reassure the hesitant visitor:

- **R21 (Missy)** — "Website form → next-day call → value." **Best fit:** directly mirrors what a visitor is about to do on this page (submit the form). Strongest single choice for a line above/beside the form.
- **R25 (Rich S.)** — "Photos → call → offer + paid shipping." Reinforces the form's own note ("*you will have the option to upload photos after clicking submit*"). Excellent pairing with the form's photo-upload note.
- **R1 (Jessica Hammond)** — "easy process, full payment at FedEx." General ease-of-process proof. ⚠️ R1 is flagged **already placed** on `/sell-my-fender/` testimonials — verify before reusing here; if avoiding duplication, use R21 + R25 instead.
- **R18 (Jim W.)** — "late-night email reply, value given." Good if emphasizing responsiveness (the page lists the email prominently).

Recommendation: **R21 + R25** as a two-line "Here's what happens after you hit submit" social-proof pair. Keep it minimal — one or two quotes, not a masonry wall (this is a contact endpoint, not a sell page).

---

### 5. Relevant videos

One video fits this page well:

- **uSu-Ld-xgnI — "Free Vintage Guitar Appraisal | Joe's Vintage Guitars"** (from C1, also social.md C1). **Best fit:** a compact `<lite-youtube>` embed in section 3's left column, above or beside the form, as the "what is this and what happens next" explainer. It puts Joe's face + voice on the conversion page (trust) and reinforces the appraisal CTA. This is the single most on-topic video for a contact/appraisal-intent page.

Do NOT embed the collection-buy hype videos (SFjsaZsEHqI etc.) here — they belong on `/sell-a-guitar-collection/` and would distract from the form. One appraisal-explainer video maximum.

---

### 6. Social embeds

Low priority on a contact page — embeds add third-party scripts (IG `embed.js`, FB SDK) and dwell-distraction right where you want a clean form. Recommendation: **skip social embeds on this page.** If Josh wants one trust signal beyond the video:

- **C1 (YouTube uSu-Ld-xgnI)** — same appraisal explainer as section 5; cleanest embed, no token. This is the only embed worth considering here.
- **D1 (Pinterest "Trusted Guitar Appraisal Professionals")** — promo graphic, maps to appraisal intent, but low embed value (social.md verdict: prefer linking the Pinterest profile over embedding promo pins). **Skip.**

**NEEDS-JOSH flags relevant here:** none specific to this page beyond the global ones (IG oEmbed token, TikTok handle invalid) — and since the recommendation is to use no IG/TikTok embed on this page, those blockers don't apply. The YouTube appraisal video needs no token.

---

### 7. Dataset-schema tables

**None.** This page has zero reference/data tables (no serial ranges, no price matrices, no spec timelines). `dataset-schema.md` Tier-1/Tier-2 targets are all on the Archetype B reference pages and the value guides — none on contact-me. No `Dataset` markup applies.

The page's existing schema (`BreadcrumbList` + `ContactPage` referencing `#organization`) is appropriate and complete for this page type. The only schema *addition* worth making is a `FAQPage` node IF the FAQ from section 3 is added.

---

### 8. DB fact check

**Factual claims on the page:** essentially none of the dateable/value kind. The page asserts only:
- Contact details (address: Mesa AZ, email `joesvintageguitars94@gmail.com`, phone 602-900-6635) — not DB-checkable facts, sourced from `site.ts`. No conflict.
- "Open 24 hrs by appointment" — business-hours copy, not a guitar fact. Note: this contradicts the post-launch Decision-log call that "24/7 hours are false for a by-appointment business" (the global `openingHoursSpecification` was removed for that reason). The visible "Open 24 hrs by appointment" text is softened by "by appointment," so it's defensible, but flag for Josh: if the global schema deliberately dropped 24/7 hours as misleading, the **"Open 24 hrs"** wording on this card is mildly inconsistent with that decision. Consider rewording to "By appointment — flexible hours" to align. (Not a VG-#### conflict; a site-consistency flag.)

**Wrong/contradictory facts vs DB:** none found. The page makes no serial-range, date, production-count, patent, or valuation claims, so there is nothing to contradict VG-0001..VG-0112.

**Facts on this page MISSING from the DB that should be added:** none. The page contributes no new verifiable guitar facts (it's contact/business-info only). The DB is for guitar reference facts; business contact info doesn't belong there.

**One forward-looking note:** if the FAQ (section 3) is added and its serial-number answer is written, ensure it does NOT over-promise single-year precision — bake in the VG-0050/0053/0060/0061 + VG-0011 caveat (serials are a "no earlier than" starting point, ranges overlap). The recommendation above keeps that answer claim-free precisely to avoid this.

---

**Wrote:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/contact-me.md` — links: 7 suggested (5-6 recommended, capped; all new, page had 0) · faqs: 4 suggested Q/A (1 touches a DB caveat, kept claim-free) · flags: 1 site-consistency flag ("Open 24 hrs" vs the removed 24/7 schema decision), 0 wrong-vs-DB factual contradictions, 0 missing DB facts, 0 Dataset tables.
