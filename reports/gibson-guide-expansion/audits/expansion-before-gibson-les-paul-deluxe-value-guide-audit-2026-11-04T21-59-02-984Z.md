# Live-diff audit â€” expansion-before-gibson-les-paul-deluxe-value-guide

- Live:  https://www.joesvintageguitarsaz.com/post/gibson-les-paul-deluxe-value-guide/
- Local: http://127.0.0.1:4325/post/gibson-les-paul-deluxe-value-guide/
- When:  2026-11-04T21:59:02.985Z

## ðŸ”´ Must fix

- **6 figure(s) in 3 consecutive run(s) on local (3Ã—run-of-2), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.


## ðŸŸ¡ Should fix

- **5 heading(s) on local but not on live (extra):**
  - h2#- Original Pickups, Routing And Fading In Actual Deluxes
  - h3#- Embossed Covers And A Small Body Alteration
  - h3#- Full-Size Humbuckers And Removed Wood
  - h3#- A Faded Top And A Documented Refret
  - h2#- What Joe Needs To Price A Modified Deluxe

- Structural block extra on local â€” `section`: live=10, local=12 (+2)

- Image count extra on local: live=8, local=14 (+6)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 21 | Local: 26
- Live images:   8 | Local: 14
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 13, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 3 (total 6 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 10 vs 12
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.