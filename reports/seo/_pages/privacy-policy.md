## privacy-policy

**Page type:** Boilerplate legal page (Archetype "legal" — title bar + prose, ~520 words). It has effectively **zero topical SEO value**, no commercial intent, and is not a money page. The dominant rule here is restraint: a privacy policy that suddenly sprouts "sell my Gibson" links and embedded guitar demos reads as manipulative, dilutes the page's trust function, and can look like keyword stuffing on a page Google expects to be plain. Almost every enrichment idea below is therefore **declined on purpose**; the few that fit are light and genuinely relevant (the Contact section, the third-party-services topic).

Current in-content internal links: **1** (the opening `joesvintageguitarsaz.com` self-referential link in the intro, plus the `mailto:`/`tel:` in Contact which are not internal page links). The linkgraph flags this page 🔴 under-linked — but for a privacy policy that is **correct and intentional**, not a defect to "fix" by forcing commercial links. Do not chase the under-linked flag here.

---

### 1. Internal links to ADD

Keep this minimal. The only defensible contextual links are to other **legal/utility** pages and the contact path, where the copy already names the concept. Do NOT add serial-guide or sell-page links — none of this page's topics (cookies, log data, children's privacy) are topically related to those targets, and forcing them would be exactly the "irrelevant link" the task warns against.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| **Links to Other Sites** — "review their policies" / the idea that third parties have their own terms | how I license and credit my own photos | /photo-license/ | The closest genuinely-related on-site terms page. The site already treats `/photo-license/` as a real terms doc (footer legal row); linking it from a privacy discussion of third-party content is contextually honest and helps that under-linked utility page. Low priority. |
| **Contact** — "email me… or call or text" | request a free guitar appraisal | /free-appraisal/ | The ONLY commercial link that is defensible, and only because the Contact section invites the reader to reach out. `/free-appraisal/` is the single highest-need inbound target on the site (pos 16.1, page 2; the report explicitly names it as needing inbound links most). One soft link here, phrased as "if you'd like to actually get in touch about a guitar," is acceptable. Keep it to ONE link; do not also add sell-brand links. |
| **Information I Collect** — "to provide and improve the site" (optional) | the contact form | /contact-me/ | Mild relevance: the policy describes data collected via the contact form, so linking the form the policy governs is honest. Optional; skip if it feels forced. |

**Density note:** at ~520 words, the ~1-link-per-120-180-words rule of thumb would "permit" 3 to 4 links, but permission is not obligation. **2 links total is the ceiling here** (`/photo-license/` + one `/free-appraisal/`). A privacy policy stuffed to its theoretical link quota is a red flag. Vary nothing aggressively — these are not ranking anchors.

---

### 2. Section-level related posts

**None — declined for every section.** A "Related reading" block advertising guitar guides on a privacy policy is off-topic and erodes the page's trust signal. No section (Information I Collect, Log Data, Cookies, Service Providers, Security, Links to Other Sites, Children's Privacy, Changes, Contact) is a topical home for any blog post or guide. Do not add inline related-reading blocks anywhere on this page. The only "related" navigation that belongs is the existing footer legal row (Privacy / Photo License / Refund), which already exists in the Layout.

---

### 3. FAQ gaps

**Declined.** Adding an FAQ accordion (with FAQPage JSON-LD) to a privacy policy is not appropriate: a privacy policy is itself the authoritative answer document, and Google has tightened FAQ rich-result eligibility to a narrow set of authoritative/government/health-style pages — a small-business privacy policy is not a candidate and self-marked FAQ here risks looking spammy. The page's existing H2 structure (Cookies, Log Data, Security, etc.) already functions as a plain-language Q&A. **No FAQ, no Q/A pairs, no FAQPage schema on this page.** None of the suggested answers would need a VG-#### fact (there are no guitar facts on this page).

---

### 4. Relevant reviews

**None.** Customer testimonials on a privacy policy are out of place and would read as a conversion-bait intrusion into a legal page. No review from `reviews-videos.md` maps to any section here. Do not place R1–R26 or any Reverb review on this page.

---

### 5. Relevant videos

**None.** No Joe YouTube video (serial-number how-tos, collection-buy road trips, repair clips, brand demos) is topically relevant to data collection, cookies, or children's privacy. Embedding `uSu-Ld-xgnI` (the appraisal video) or any other here would be a non-sequitur. Do not embed video on this page.

---

### 6. Social embeds

**None.** No Instagram/YouTube/Facebook/Pinterest post from `social.md` fits a privacy policy. No NEEDS-JOSH item applies. Do not embed social content here.

---

### 7. Dataset-schema tables

**None — N/A.** This page contains **no tables at all** (no serial ranges, no price matrices, no spec timelines). `dataset-schema.md` lists zero applicable tables for this page. Nothing to mark up with schema.org `Dataset`. The only structured data on the page is the existing `BreadcrumbList`, which is correct and complete; leave it as-is.

---

### 8. DB fact check

**No factual conflicts — this page makes zero guitar-domain factual claims.** There are no serial ranges, production dates, patent numbers, shipping totals, or value figures on this page to cross-check against the VG-0001–VG-0112 index. Nothing here can contradict a DB fact.

The page's only assertions are standard legal-boilerplate statements (data types collected, cookie behavior, "not directed at anyone under 13," "no method of transmission is 100% secure"). These are policy statements, not verifiable vintage-guitar facts, and **none belong in the DB** (the DB is a vintage-guitar knowledge base, not a legal-terms store). **No facts to flag as wrong; no facts to add to the DB.**

One non-SEO accuracy note for Josh (not a DB item): the policy says the site uses cookies "to collect information and improve the experience" — confirm this matches the actual deployed stack (the Astro/CF Pages build may set far fewer cookies than the old WordPress site implied). If the cookie/analytics reality changed at cutover, the policy copy should be reconciled with what the site actually does. That's a legal-accuracy task, not an SEO one.

---

**Bottom line:** This is a do-no-harm page. The right move is to leave it almost entirely alone: add at most 2 light, genuinely-relevant links (`/photo-license/`, one soft `/free-appraisal/` in Contact), and decline all enrichment (related posts, FAQ, reviews, videos, social, Dataset). Resisting the temptation to "optimize" a legal page is the optimization.

_Counts: links 2 (recommended; +1 optional) · faqs 0 · flags 0_
