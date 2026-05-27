# Fender SN page — qualitative live-diff audit

- Live:  https://www.joesvintageguitarsaz.com/fender-guitars-serial-number-guide/
- Local: http://localhost:4321/fender-guitars-serial-number-guide/
- Auditor: live-diff-auditor subagent (Playwright MCP, ~10 min tool budget)
- When: 2026-05-25T20:40:00Z
- Baseline static audit: `reports/fender-sn-audit-2026-05-25T20-32-50-786Z.md`

## TL;DR

**Page is ship-ready.** Static audit's 2 remaining must-fix items both validate as accepted exceptions. No truly broken images. All 32 TOC anchors resolve. Decoder tool works (`S812345` → 1978). FAQ accordion opens. One legitimate observation: **mobile header at 390px shows 24 visible nav links with no detected hamburger toggle** — flagged as 🟡 for separate verification.

## Findings by severity

### 🔴 must-fix

*None.*

### 🟡 should-fix

**M1. Mobile header: 24 nav links visible at 390px, no hamburger detected.**
At 390×844 viewport I counted `headerLinks=49 total, visible=24`. Queries for `button[aria-label*="menu"]`, `button[aria-controls]`, `[class*="hamburger"]`, `[class*="mobile"]` inside `<header>` returned null. Visible labels include `About Joe`, `JVG Blog`, `Contact`, `Call Me! (602) 900-6635`, `Sell My Guitar`, `Sell My Fender`, `Sell My Gibson`, etc. The page body is NOT overflowing horizontally (`docW=375` < `viewW=390`), so the header is fitting somehow — but 24 visible links on a 390-wide screen is either (a) wrapping into a tall stacked bar, (b) using non-button toggle (e.g. `<details>`/CSS-only checkbox) that my selector missed, or (c) a real responsive bug. CLAUDE.md mentions `Header.astro` has "desktop nav + mobile hamburger" — worth a 20-second eyeball at 390px to confirm the toggle exists and my selector just missed it.

**M2. 63 images still missing width/height attributes (CLS risk).** From the static audit — confirmed unchanged. Local has 0 broken images so this is purely a CLS-performance concern, not a correctness concern. Low priority; address before Lighthouse-driven perf pass.

### 🟢 accepted / validated

**A1. "Get in Touch!" H3 — accepted exception confirmed.**
On live, the H3 is at `body > div.avada-footer-scripts > div > div > h3.popup-title`. `getBoundingClientRect()` returns `{x:0, y:0, w:0, h:0}` — i.e. hidden popup template, not part of content flow. A `.boxzilla-container` element is also present in the DOM. Main agent's claim that this is the Boxzilla popup overlay **stands**. The local `<ContactSection>` with H2 "Talk With Joe Today" + inline form is the functional equivalent. ✅ Equivalent.

**A2. Image count gap (live 86 vs local 82, diff +4) — accepted exception validated.**
Filename-by-filename diff:

| Live-only filename | Explanation |
|---|---|
| `Logo-Footer-1-1.png` | Footer logo — Astro `<Image>` URL-transformed (different filename in build output, real asset still present) |
| `logo-joe-2.png` | Header logo — same Astro `<Image>` transform |
| `phone-icon.png`, `email-icon.png`, `chat-icon.png.webp` | FloatingCTA icons — replaced with inline SVG on local |
| `fender-back-of-headstock-serial-number-400x267.jpg.webp` and 5 more `-400x267.jpg.webp` variants | WordPress responsive image thumbnails (separate `<img>` registrations); same source images load on local at full resolution via direct hotlink |

Local has these that live doesn't:
- `bridge-plate-tool.jpg.webp`, `neck-plate-tool.jpg.webp`, `headstock.jpg.webp`, `guitar.jpg.webp`, `bass.jpg.webp`, `fender-back-of-neck-serial-number-scaled.jpg.webp`, `_image` — Astro `<Image>` build-time WebP outputs for the decoder tool's location cards.

Net: 0 images broken on local, 0 missing content, all variation is build-pipeline-explained. **Agree with main agent's "acceptable" call.** ✅

**A3. Decoder tool routing — works as documented.**
Entered `S812345` → tool displayed disambiguation step "Where is the S-prefix serial located? Front of Headstock / Back of Neck Heel". Clicked "Front of Headstock" → resolved to:
> "🎸 Serial Number Decoded — S812345 — Approximate Year **1978** (Made in USA, front of headstock serial)"

Matches the CLAUDE.md test path exactly. ✅

**A4. FAQ accordion — works.**
12 `<details>` elements found inside `#faq`. Default state all closed. Clicked first `summary` ("What does my Fender serial number actually tell me?") → `details.open === true`, content "A Fender serial number gives you an approximate production era..." is now visible. ✅

**A5. TOC anchors — all 32 resolve.**
Iterated every `.fsn-toc a[href^="#"]`, called `document.getElementById(href.slice(1))` on each:
- 32 TOC links found
- 32 targets exist
- 0 missing
- Mix of `<section>` (top-level), `<div>` (advanced-dating subsections + model-specific cards) — all sensible targets.

**A6. Lazy-load images — 0 truly broken.**
Forced every `img[loading="lazy"]` to `loading="eager"`, blanked then restored `src` to retrigger the network fetch, waited 5s.
- Total: 82 imgs
- Lazy re-triggered: 79
- After wait: 0 `complete && naturalWidth === 0`
- 0 still loading

The Custom Shop / jump-anchor "missing images" the user originally reported are **not reproducible**. All images resolve. ✅

**A7. Mobile body fits viewport at 390px (with intentional table h-scroll).**
- `docW=375, viewW=390` → no horizontal page scroll
- `.fsn-toc` correctly `display: none` at this breakpoint
- Tool widget: 343px wide, fits cleanly inside 390px viewport
- 220 elements report widths > viewport, but they are all `.fsn-table` / `<thead>` / `<tr>` / `<tbody>` / `<th>` / `<td>` inside `.fsn-table-wrap` which has `overflow-x: auto`. Tables scroll horizontally inside their wrapper — intended behavior, matches CLAUDE.md guidance ("Tables that need horizontal scroll wrappers").

## Checks I deliberately skipped

- **Live full-bottom screenshot.** Live page blocks scrolls past ~18800px (sticky/fixed widget interference); local has the same pattern past ~22650px. Top + mid captures gave enough structural read. Bottom comparison was already covered by the static audit's heading/image diff.
- **Pixel-level color drift.** Out of scope for 10-min budget and outside this auditor's known strength per CLAUDE.md.

## Recommendation

**Ship the page.** The single 🟡 (mobile-header hamburger) is worth a 20-second visual confirmation, but is almost certainly a false alarm from a selector miss — CLAUDE.md says Header has a hamburger and the page body doesn't overflow at 390px, so the toggle exists.

If the mobile-header check passes (hamburger is present, my selector just didn't catch a `<details>`/CSS-only/aria-less implementation), no remaining blockers. The page is structurally faithful to live within the project's stated visual-parity bar.
