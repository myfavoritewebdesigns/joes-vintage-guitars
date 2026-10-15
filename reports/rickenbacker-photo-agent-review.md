# Rickenbacker Photo Follow-Up Review

Independent review on October 15, 2026 of the seven Rickenbacker routes against `https://joe-rickenbacker-dating-hub.joes-vintage-guitars.pages.dev`, baseline commit `cd4f4ca`, using local port 4345 and the final production output. No site source was modified by this reviewer.

## Must Fix

- None remaining.

## Reviewed And Resolved

- The 325 photo shows broad, reflective knob tops; the initial vintage-knob identification was removed, and the final source and built caption now describe the four-control layout without asserting maker or originality.
- All 13 original files were visually inspected and their SHA-256 values match `reports/rickenbacker-photo-sources.json`; visible pickup construction, tuner housings, controls, inlays, logos, serial groups and finishes support the final captions.
- N0 and 9130 are legible in the 325 plate original, and the live local decoder returns February 1997 for N09130; the numeric bass plate caption transcribes only the visible 15 year group and does not invent its uncertain remaining digits.
- Later 325 features are explicitly distinguished from vintage dating evidence, the black bass is not assigned the archive folder's uncertain model number, and the blue bass's bridge cover is not misidentified as a horseshoe pickup.
- Gallery figures preserve their full source framing with contained images and working enlarge links; no cut-off feature, wrong-image caption or unsupported model-year attribution was found in the additions.

## Verification Counts

| Check | Result |
|---|---|
| New original files inspected and hash-verified | 13 of 13 |
| Uses of the new originals | 18, including two hub cards |
| Final content-photo placements across the cluster | 33: 27 figures and 6 hub cards |
| Local page/viewport checks | 28: seven routes at 1920, 1280, 768 and 390 pixels |
| Page overflow or out-of-bounds figures | 0 |
| Broken loaded images or browser page errors | 0 |
| Unique enlarged-image targets | 21, all HTTP 200 and WebP |
| Enlarged-image maximum width / largest file | 2400 pixels / 947,500 bytes |
| Production enlarge links | 27 references to 21 existing `/_astro/*.webp` files |

All paired galleries compute as two columns at desktop/tablet widths and one column at 390 pixels. Figures and captions were captured at desktop and phone sizes; all 13 original photographs were also inspected directly.

## Static Audit Disposition

Seven reports named `reports/photo-rickenbacker-*-audit-2026-10-15T17-44-*.md` compare the requested baseline with the updated local pages; all asset liveness checks pass. Four raw must-fix findings are accepted intentional differences: three newly added paired galleries on the tuner, knobs and body pages, plus the Schaller heading correction with its legacy ID retained. DOM inspection confirms each flagged pair is already inside the required `rk-photo-grid jvg-img2` wrapper and renders correctly.

The additional photo counts, image-license nodes, open-back bass-tuner section and Bigsby section are requested additions. Warnings about `/_image?...` lacking a trailing slash concern the development image endpoint; final production links were independently checked and use existing hashed WebP files. The two shared Reverb SVG dimension warnings per route predate this photo follow-up.

## Coverage Limits And Evidence

Playwright MCP was unavailable; the installed Playwright package and Chrome supplied the browser checks, including baseline ancestor/pseudo-element inspection, forced eager image loading and gallery geometry. No external cross-model review was run. This review verifies the added photos and their claims, not every inherited historical assertion in the guides.

Evidence is saved in `../rick-photo-agent-evidence/review.json`, `../rick-photo-agent-evidence/built-review.json` and 54 desktop/phone figure screenshots. No contact form was submitted.
