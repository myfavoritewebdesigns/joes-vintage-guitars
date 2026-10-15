# Rickenbacker Photo Expansion

## Scope And Provenance

Joe requested more photos and authorized his Google Drive and Reverb archives. Thirteen original JPEGs from his Drive were selected after visual inspection. Source file IDs, folder context, byte counts and SHA-256 hashes are recorded in `rickenbacker-photo-sources.json`. Joe's Mesa Reverb shop and owned listings were checked during discovery; no Reverb downloads or other sellers' photos were needed.

The new photographs cover a Frying Pan horseshoe pickup and Rickenbacher badge; a later 325's control layout, Bigsby, vintage-style tuners and letter/digit plate; a blue bass's Hi-Gain and exposed-gear tuners; a Jetglo bass and numeric plate; a vintage 360's controls, bridge and full-width inlay; and a Fireglo 360/12 and twelve-string headstock. All thirteen assets are used by the hub or spokes. Hub cards now show a closer controls photo and a distinct Fireglo finish example.

Original frames and watermarks are preserved. Images use the local Astro pipeline and existing LicensedImage primitive. The enlarge links now use a 2400-pixel maximum-width WebP at quality 90 rather than the camera JPEG. Pairings use the existing `jvg-img2` primitive and stack on phones.

## Caption Decisions

- The 325 plate reads N0 above and 9130 below: N09130, February 1997 in the existing decoder. The photograph sits in the matching 1997 to 1998 subsection.
- The 325's reflective, broad-topped knobs are described as installed controls, without attributing a maker or claiming factory KK knobs. The photograph compares four controls with the 360's five-control layout.
- The Drive folder labeled 2015 4001 contains a bass with later features. Public captions say bass and describe the visible finish/plate, without repeating the questionable model label or asserting the gold guard is original.
- The blue bass's tuners are described by exposed gears, cloverleaf keys and visible Rickenbacker lettering, without claiming that the branding proves a manufacturer.
- Correct the old Kluson caption's unsupported white-button description and the awkward Schaller heading. Qualify the knob shortcut and gold-guard dating claim to account for later models and replacements.
- Manufacturer period price lists confirm the 325V59 combination of three pickups, gold guard and Bigsby: https://www.rickenbacker.com/wp-content/uploads/2024/06/Pricelist-1994-July.pdf and https://www.rickenbacker.com/wp-content/uploads/2024/06/Pricelist-1999-January.pdf . Public text describes the photographed later 325 without adding an unverified subtype.

## Validation

- Final production build: 233 pages; zero hard copy failures, 775 unchanged sitewide report-only warnings.
- Astro check: zero errors and warnings; 93 existing hints.
- Browser verification: seven routes at 1920, 1280, 768 and 390 pixels, with no broken loaded images, horizontal overflow, duplicate IDs or page JavaScript errors.
- Accessibility: zero WCAG A/AA violations across seven routes at desktop and phone widths.
- Existing cluster checks: 173 internal links, 45 legacy anchors, six guide cards and five visible FAQ/schema pairs remain valid.
- Required independent review and all seven live-diff reports accompany this update.

## Intentional Live-Diff Differences

The baseline is the previously deployed version of this same branch. Added photographs, ImageObject nodes and two new explanatory headings are intentional. The Schaller heading is corrected while its legacy ID remains unchanged. New paired figures are deliberately in `rk-photo-grid jvg-img2`; their raw count is not evidence of a missing gallery. These accepted differences are documented here because the client instructions prohibit editing CLAUDE.md.
