# Guide Photo Additions

Prepared November 23, 2026. Preview only; production publication requires Joe's approval.

## Scope

- L-0: three photos document the 13th-fret body joint, white pickguard and ebony board. Site asset filenames use L-0; source Drive files are retained.
- Rickenbacker serial guide: the supplied 425 photo shows the number on the tremolo cover.
- Pancake construction: transparent-finish 1970 Deluxe is the primary example, paired with the existing black low-impedance Les Paul across the applicable pages.
- National: the supplied Duolian illustrates faux-wood piano finish in both model guides.
- Rickenbacker 365: Jetglo and construction details appear in the finish/dating guides and the matching 360/365/370 model guides. Rarity is qualified to this model and period.
- Hardtail Stratocaster: six 1971 photographs show the bridge, rear ferrules, headstock, plate, neck date and routes.

24 original photo files produce 53 added photo instances across 22 pages. Existing photographs and substantive content are retained. Source links and filenames are recorded in assets.json; affected URLs are in pages.json.

## Verification

- Astro production build: 481 pages.
- Astro check: no errors or warnings (existing hints).
- Rendered copy gate: no hard failures; existing site-wide warnings remain.
- Image validation: 24 selected assets used, 53 rendered instances optimized, with alt text, dimensions and exactly one matching licensed ImageObject each. 312 licensed nodes on affected pages match rendered image sources.
- Browser checks at 1920, 1280, 768 and 390 pixels: no horizontal overflow in representative changed layouts; comparison rows align on desktop and stack on mobile. Enlarged photo modal opens and closes.
- Independent source/photo review: no remaining material findings.
- Live-diff: all 22 pages compared. No missing headings, broken assets or removed existing photographs. Four reports flag new consecutive figure runs (1970 Custom, hardtail, Gibson-price article, Rickenbacker tailpieces). These are intentional new comparisons already inside two-column grid wrappers, confirmed in rendered styles; the detector counts figure siblings without checking their grid parent. Extra photos/headings/schema are requested additions. Reverb-icon dimensions and development image-URL slash warnings are pre-existing/dev-only.

## Review Links

Append the paths in pages.json to the Cloudflare branch-preview origin recorded in the pull request. The public production site is unchanged until approval.
