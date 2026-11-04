# Live-diff audit â€” expansion-before-gibson-l-48-value-guide

- Live:  https://www.joesvintageguitarsaz.com/post/gibson-l-48-value-guide/
- Local: http://127.0.0.1:4325/post/gibson-l-48-value-guide/
- When:  2026-11-04T21:59:02.681Z

## ðŸ”´ Must fix

- **3 figure(s) in 1 consecutive run(s) on local (1Ã—run-of-3), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- L-48 Condition Examples From The Archive

- Structural block extra on local â€” `section`: live=10, local=11 (+1)

- Image count extra on local: live=8, local=11 (+3)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, Person, Person, Person


## Summary

- Live headings: 21 | Local: 22
- Live images:   8 | Local: 11
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 8, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 1 (total 3 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 10 vs 11
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.