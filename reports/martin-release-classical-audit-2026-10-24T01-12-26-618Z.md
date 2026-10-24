# Live-diff audit â€” martin-release-classical

- Live:  http://127.0.0.1:8768/post/martin-classical-authentication-guide/
- Local: http://127.0.0.1:50190/post/martin-classical-authentication-guide/
- When:  2026-10-24T01:12:26.619Z

## ðŸ”´ Must fix

- **2 <picture><source> URL(s) on live but missing on local:**
  - http://127.0.0.1:8768/images/authentication/optimized/classical-hero-400.webp
  - http://127.0.0.1:8768/images/authentication/optimized/classical-detail-1-400.webp

- **2 figure(s) in 1 consecutive run(s) on local (1Ã—run-of-2), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.

- **JSON-LD @type(s) on live but missing on local:** Organization


## ðŸŸ¡ Should fix

- Image count extra on local: live=5, local=7 (+2)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ProfessionalService, ImageObject, ImageObject, ImageObject, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, AdministrativeArea, AdministrativeArea, WebSite, Person, Person, CollegeOrUniversity, Service, Service, ListItem, ListItem

- Canonical host differs (expected for local dev): live=`jvg-vintage-martin-model-library.joedampt.chatgpt.site` local=`www.joesvintageguitarsaz.com`


## Summary

- Live headings: 14 | Local: 14
- Live images:   5 | Local: 7
- Live <picture><source>: 2 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 6, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 13 vs 13
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [BlogPosting, Person, Organization, ImageObject, FAQPage, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.