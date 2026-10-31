# Casino photo update — independent visual review

Reviewed 2026-10-30 under CLAUDE.md rule 3. Inspected all 16 supplied PNGs with `view_image`: both guides' first screen, hero and photo band at 1280px and 375px, plus the authentication guide's 1962 and 1965 archive blocks at both widths. No application code changed.

**Result: FIX — one desktop caption overlap.**

- **Fix:** In `value-1280-photo-band.png` and `authentication-1280-photo-band.png`, the lower-right floating chat button covers the end of the 1965 caption's first line (the end of “PARALLELOGRAM MARKERS”). The mobile captions are unobstructed. Give this desktop caption clearance from the floating control, then recapture and review both photo bands with the control visible.
- **Pass:** Both first-screen screenshots at each width show the original **Free Appraisal** and **Sell My Epiphone** buttons completely, with clear text and no overlap. The large headings remain within the available width.
- **Pass:** All inspected headings, body copy, rust-panel text and captions have readable visual contrast. Captions are small but legible and remain attached to their photographs. No additional clipping or overlap appears in the inspected areas.
- **Pass:** Both heroes and both comparison bands correctly identify the black-cover, dot-marker, dark-pickguard guitar as Joe's **1962 Casino**, and the chrome-cover, parallelogram-marker, white-pickguard guitar as his **1965 Casino**. This accepts Joe's identification; the review does not independently assign model years.
- **Pass:** Authentication archive blocks correctly pair the 1962 body and rear-headstock photographs, and the 1965 case, hardware and label photographs. At both widths, the body, pickups, bridge/vibrato and controls have useful visible framing. The 1962 headstock shows all six tuners; the 1965 label image visibly shows the internal label through the f-hole. No serial digits were inferred for these supplied photos.
- **Pass:** Source and rendered-image metadata retain the 2022 USA Casino as a clearly labeled modern comparison/exclusion example (`epiphone-casino.ts`, `layout.json`). Its separate archive section is outside the supplied screenshot set and is not claimed as visually reviewed here.

Scope: preview-only review of the supplied Casino image update. Byte identity of copied originals is reported by the implementation task, not independently established by this visual inspection. No publication or merge performed.

## Final recheck — PASS

Inspected the regenerated value/authentication photo-band PNGs at 1280px and 375px, plus both regenerated 1965 archive PNGs, with `view_image`. The shortened caption, “1965 Epiphone Casino. Chrome P-90 covers.”, is fully readable with generous clearance from the visible desktop chat button in both guides. The desktop overlap finding is resolved. The 375px bands and both 1965 archive layouts retain readable captions and useful guitar framing with no clipping or overlap. No stylesheet or floating-control change was necessary.

**Final disposition: PASS for the reviewed Casino photo update. No remaining visual fixes in the inspected evidence.** Earlier first-screen, hero, 1962 archive and owner-year-mapping passes remain applicable; this recheck covers the changed caption and its image layout. Preview-only status remains unchanged.
