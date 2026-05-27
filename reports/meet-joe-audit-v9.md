# Meet Joe audit — v9 (2026-05-26)

**Section:** "Meet Classic Fender Guitar Specialist, Joe Dampt"
**Live URL:** https://www.joesvintageguitarsaz.com/sell-my-fender-guitar/#meet-vintage-guitar-buyer-joe-dampt
**Local URL:** http://localhost:4399/sell-my-fender-guitar/#meet-joe
**Source file:** `src/pages/sell-my-fender-guitar.astro` lines 279–303
**Method:** Deterministic — `extract-html-first.mjs` (Chrome CSS Coverage) on both pages + DOM `getComputedStyle` cross-check. No AI eyeballing of screenshots.

---

## Summary

Out of 16 properties measured against live's computed styles, **13 match exactly** (color tokens, fonts, pseudo-element geometry, structural decorative chrome). **2 are real bugs** that need fixing, **2 are minor spec deviations** worth a decision.

The v7→v8 structural rebuild landed correctly: white-card `::before`, rust-triangle `::after`, outlined-rust frame on the video column, lite-youtube embed — all present with matching geometry and color tokens. The fixable gaps are the anchor ID (SEO) and the HR separator (visual).

| Severity | Count |
|---|---|
| 🔴 Must-fix | 2 |
| 🟡 Should-fix | 2 |
| 🟢 Acceptable | 12+ |

---

## 🔴 Must-fix

### 1. Anchor ID mismatch — breaks inbound links

| | Live | Local |
|---|---|---|
| Section ID | `meet-vintage-guitar-buyer-joe-dampt` | `meet-joe` |
| Class | `fusion-container-anchor` | `smf-meet` |
| TOC link in same page | `#meet-vintage-guitar-buyer-joe-dampt` | `#meet-joe` |

**Impact.** External backlinks and bookmarks to `joesvintageguitarsaz.com/sell-my-fender-guitar/#meet-vintage-guitar-buyer-joe-dampt` will land on the page but the fragment won't resolve — the user sees the top of the page instead of being scrolled to the section. Search Console may also report broken anchor signals.

**Fix.**
```astro
<!-- src/pages/sell-my-fender-guitar.astro -->
<!-- Update line 191 in the TOC: -->
<li><a href="#meet-vintage-guitar-buyer-joe-dampt">Meet Classic Fender Guitar Specialist, Joe Dampt</a></li>

<!-- Update line 279: -->
<section id="meet-vintage-guitar-buyer-joe-dampt" class="smf-meet">
  <!-- Optional backward-compat anchor for any internal links that used the old ID -->
  <div id="meet-joe" class="smf-anchor" aria-hidden="true"></div>
  ...
</section>
```
Add `.smf-anchor { position: absolute; scroll-margin-top: 100px; }` to the global styles so the offset anchor doesn't collide with the sticky header.

### 2. HR separator under the H3 renders wrong

| Property | Live (`hr.main-sep`) | Local (`hr.smf-rule-cream`) |
|---|---|---|
| Height | 3px | 2.4px |
| Width | 493.775px (full column inner width) | 80px (small accent) |
| Background | `rgb(104, 36, 18)` rust-dark, solid | transparent |
| Border | none | mixed: rust-bright top + brown sides |
| Render pattern | full-width bar | thin border-only accent |

**Impact.** Live shows a prominent 3px-tall rust-dark bar spanning the full text-column width directly beneath the H3 — it visually separates the heading block from the body prose. Local renders a small 80px-wide tri-color bordered line that looks like an inline accent rule, not a header underline. This is the most visible single difference between the two renderings of this section.

**Fix.** Add a class matching live's pattern. The class name `smf-rule-cream` is also misleading — it's not cream.

```css
/* Replace .smf-rule-cream rules in src/pages/sell-my-fender-guitar.astro */
.smf-rule-cream {
  height: 3px;
  width: 100%;
  background-color: var(--color-brand-rust-dark);
  border: 0;
  margin: 12px 0 18px;
}
```

A rename to `.smf-meet__sep` would also be reasonable since the class no longer describes cream.

---

## 🟡 Should-fix

### 3. Section padding diff

| | Live | Local |
|---|---|---|
| Padding | `100px 30px 120px` | `90px 0px 110px` |

Local has `-10px` top, `-10px` bottom, and **0 horizontal** padding (vs live's 30px). On wide screens the right column's cream-warm panel will sit flush with the section edge on local, but indented by 30px on live. Effect is most visible at 1920 where 30px of cream backdrop becomes visible to the right.

**Fix.** Bump `.smf-meet` padding to `100px 30px 120px`.

### 4. lite-youtube `params=` mismatch (UX behavior)

| | Live | Local |
|---|---|---|
| `params=` | `wmode=transparent&autoplay=1&enablejsapi=1` | `rel=0&modestbranding=1` |
| Behavior | Click → video starts playing immediately; YouTube player API available; "Up Next" related videos shown at end | Click → user must click again to play; clean player UI; no related-video distraction at end |

Both are defensible UX choices but they're not aligned with each other. The union of both sets would be:
```html
<lite-youtube
  videoid="U3eJgXLs4w8"
  params="wmode=transparent&autoplay=1&enablejsapi=1&rel=0&modestbranding=1"
  ...
/>
```
This gives autoplay-on-click + modest branding + no related videos.

---

## 🟢 Acceptable / verified-equal

Verified via DOM `getComputedStyle` — these all match live exactly:

| Property | Value (both sides) |
|---|---|
| Section background | `rgb(238, 223, 192)` = `#eedfc0` (cream) |
| H3 color | `rgb(104, 36, 18)` = `#682412` (rust-dark) |
| H3 font-size | 30px |
| H3 text-transform | `none` (not uppercased) |
| H3 font-family | Oswald (live: "Oswald Semibold"; local has Oswald primary with safe fallback chain — better practice) |
| Name span color | `rgb(190, 75, 37)` = `#be4b25` (rust-bright) |
| Name span white-space | `nowrap` (keeps "Joe Dampt" on one line) |
| Row::before (white card) | bg white, drop-shadow `1px 2px 9px rgba(0,0,0,0.61)`, full-row + ~49px vertical extension |
| Row::after (rust triangle) | bg rust-dark, 100px wide, `polygon(0 0, 0 100%, 100% 50%)` clip path |
| Video column ::before (outlined frame) | 100px wide, 4px solid rust-bright border, left -30px |
| `--awb-color4` ↔ `--color-brand-rust-bright` | both `#be4b25` |
| `--awb-color5` ↔ `--color-brand-rust-dark` | both `#682412` |

**Intentional simplifications (per CLAUDE.md):**
- Avada/Fusion wrapper chrome stripped (7+ wrapper divs: `fusion-container-anchor`, `fusion-fullwidth`, `fusion-builder-row`, `fusion-layout-column`, `fusion-column-wrapper`, `fusion-content-layout-column`, `fusion-video`, `video-shortcode`, `fusion-text`)
- H3 class renamed `maintitle` → `smf-meet__title`
- Column classes renamed `vdo-col-l-p`/`vdo-col-r-p` → `smf-meet__video`/`smf-meet__panel`
- HR class renamed `main-sep` → `smf-rule-cream` (but per #2 above, should be re-renamed and restyled)
- Final paragraph `<b>` → `<strong>` (semantic-equivalent)
- Phone number `(602) 900-6635` → `{contact.phone}` (interpolated from site config — better practice)
- Inline `<span style="color: #682412;">` highlights inside `<strong>` blocks dropped; local's `.smf-meet__panel strong` rules give the same rust-dark color to all `<strong>` text, achieving visually equivalent emphasis

---

## Side-finding: bug in the extractor

The extracted local HTML at `reference/extracted/meet-joe-local/meet-joe-local.html` shows `style="background-image: url(http://localhost:4399/sell-my-fender-guitar/&quot;https://...&quot;)"` — i.e. the URL-rewrite step in `scripts/extract-html-first.mjs` mangled an HTML-entity-encoded quoted URL (`url(&quot;https://...&quot;)`).

**This is not a bug in the local page.** A live computed-style query on the local DOM confirmed `lite-youtube` correctly resolves its background-image to `url("https://i.ytimg.com/vi_webp/U3eJgXLs4w8/sddefault.webp")`. The browser computed it correctly.

The extractor's regex doesn't pre-decode `&quot;` entities before matching `url(...)`. A separate task should fix the extractor — file in `wp-to-astro` repo.

---

## What this audit did NOT cover (out of scope for "audit once more")

- Mobile viewport (390px) — should be re-run at that viewport before declaring v9 done
- The `<details>` TOC widget above this section (separate component)
- The intro form colors above this section (separate v8 decision)
- Lite-youtube CDN reliability (JS dependency, separate concern)
- Whether the body `<p>` text content matches live verbatim (looks correct but not character-diff'd)

---

## Suggested commit summary

```
fix(meet-joe): anchor ID + HR separator parity with live

- Restore live's anchor ID `meet-vintage-guitar-buyer-joe-dampt`
  with backward-compat empty div for internal `#meet-joe` links
- Replace `.smf-rule-cream` (2.4px, 80px wide, border-only)
  with `.smf-meet__sep` (3px, 100%, rust-dark background)
- Bump section padding to `100px 30px 120px` matching live
- Union lite-youtube params to support autoplay-on-click +
  modest branding + no related videos

Computed-style audit via extract-html-first.mjs + DOM
getComputedStyle cross-check confirms 13/16 properties match
live exactly. Remaining 3 are now fixed by this change.
```
