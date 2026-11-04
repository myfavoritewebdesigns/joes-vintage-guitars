# Champ photo additions — independent visual review

**PASS — no mandatory findings.** Reviewed 2026-11-04 after the 433-page build completed, using local port 4332 and the previous `32e11e95` hosted preview.

## Must fix

None.

## Verified

- All **eleven new photos** match the three source contact sheets: three views of the 1949 Champion 600, four of the 1965 blackface Vibro Champ, and four of the 1968 drip-edge Vibro Champ.
- At **1280×800 and 375×812**, normal scrolling and fresh `#champion-600` / `#archive` visits passed **eight cases and 44 new-photo checks** with no failed load, zero-height image, ancestor clipping, caption overlap, or horizontal overflow.
- The local lazy-loading checks retained `loading="lazy"`; photographs were scrolled into view before measurement, without forcing eager loading or calling decode to initiate requests.
- Image and figure rectangles, caption position, clipping intersections and every ancestor through HTML are recorded, including both pseudo-elements; visibility is established by rendered area as well as successful loading.
- Photos retain their full subjects with contained framing, and captions stay below; the longer 1968 speaker captions wrap cleanly on mobile.
- The 1968 rear photo and caption identify the **installed Warehouse replacement**, while the separate loose-speaker photo and caption identify the **original requiring a recone**; the prose preserves this distinction.
- The 1965 AA764 chart is correctly described as a circuit identifier, with the listing supplying the example's year; the Champion section preserves the listed service work and worn handle without inventing a chart-date reading.
- The original hero, 5F1 photo pair, IB dating card and both tweed archive entries retain their composition and captions; **all 20 old-photo viewport placements preserve their source and dimensions**.
- Both first-screen screenshots are byte-identical to the corresponding old preview, with **Free Appraisal** and **Sell My Amp** fully visible; widget inventory also matches.

## Static audit disposition

The deterministic audit has **zero must-fix findings and zero broken assets**. The additional section, three headings, eleven photographs, figure groups, description and licensed-image schema nodes are authorized by the Champ Archive Expansion decision entry. The two Reverb-icon dimension warnings predate this change. Visual inspection confirms the new photo grids and archive groups behave correctly.

## Evidence and limits

- `visual-layout.json`: focused measurements, complete ancestor walks, anchor landings and preserved-photo comparisons.
- `screenshots/`: 36 desktop/mobile screenshots covering new photos, normal/direct-anchor loading and old/new preserved contexts.
- `champ-visual-expansion-audit-2026-11-04T17-46-09-288Z.md`: deterministic audit.
- Representative proof: `screenshots/champion-600-1280-anchor.png`, `screenshots/vibro-champ-1965-1280-anchor.png`, and `screenshots/vibro-champ-1968-375-anchor.png`.

Installed Playwright with headless Chrome supplied the authorized qualitative review. Optional cross-model review was not run; the parent can use the saved desktop/mobile pairs for that additional pass. This review covers the Champ additions and preserved Champ contexts, rather than a new site-wide audit. No source files changed and the preview server remains running.
