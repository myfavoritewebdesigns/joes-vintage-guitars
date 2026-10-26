# Levin and Goya Seller Page Review

Reviewed 2026-10-26 at `http://127.0.0.1:4397/sell-your-levin-or-goya-guitar/` using the supported CUA browser APIs and source inspection. This is a new conversion page, so there is no original live-page inventory for migration parity. Shared site components provide the existing branding and contact flow.

## Must Fix

None remaining in the reviewed page.

## Resolved During Review

- The fixed Quick contact stack initially obscured paragraph text at 390px and 768px. The parent applied a page-scoped rule hiding it at widths up to 1200px. Rechecked at both widths: hidden, readable paragraphs, inline contact actions retained.
- The main appraisal anchor initially landed before a long mobile introduction. It now targets the form wrapper; at 390px the form top settles approximately 24px from the viewport top.
- The steel-string section's ambiguous instruction to “send the guitar ... for a photo review” now says to send photos of the guitar.

## Verified

- Responsive views at 1920, 1280, 768 and 390px; document width remained within viewport. The 768px gallery fits three columns and the 390px version stacks cleanly.
- One H1; clear sections for all three requested guitar categories, Swedish origin, value factors and selling process.
- All four content images loaded, with descriptive alt text and visible captions. Sold guitars are identified as past shop examples. The label is displayed at native-scale resolution.
- Header and hero text are readable on the dark background; dark appraisal panel has contrasting labels, fields and button.
- All seven in-page anchor links point to existing elements. Tested main appraisal, gallery and Swedish-origin jumps.
- FAQ disclosure opens and exposes its answer; six FAQs are generated from the same source array as FAQPage schema.
- Both existing contact forms are present and use distinct `data-form-id` values (`sell-levin-goya`, `contact`). No form was submitted and no lead was created.
- No captured browser console errors.
- No new price-range claims, invented testimonials or fabricated experience statistics. Sources and photo ownership are recorded in the editorial ledger.

## Limits

Build, Astro checks, copy gate, image licensing validation and production delivery are handled by the parent. Actual Mailgun submission, CAPTCHA completion and lead delivery were deliberately not exercised. No visual comparison to an unrelated brand page was used as a content-parity requirement.

Screenshots saved:

- `outputs/levin-goya-desktop.png` (1920px hero and introductory form view)
- `outputs/levin-goya-mobile.png` (390px hero view)

The browser viewport override was reset after review.
