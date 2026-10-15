# Live-diff audit â€” photo-rickenbacker-tuner-dating-guide

- Live:  https://joe-rickenbacker-dating-hub.joes-vintage-guitars.pages.dev/rickenbacker-tuner-dating-guide/
- Local: http://127.0.0.1:4345/rickenbacker-tuner-dating-guide/
- When:  2026-10-15T17:44:38.887Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h3#jvg-s-27-schaller-m6-mini-m6-to-1985-to-1996 Schaller M6 / Mini M6 To 1985 To 1996

- **2 figure(s) in 1 consecutive run(s) on local (1Ã—run-of-2), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.


## ðŸŸ¡ Should fix

- **2 heading(s) on local but not on live (extra):**
  - h3#jvg-s-27-schaller-m6-mini-m6-to-1985-to-1996 Schaller M6 / Mini M6: 1985 Onward
  - h3#- Open-Back Bass Tuners

- Image count extra on local: live=6, local=8 (+2)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **3 internal link(s) on local missing trailing slash** (breaks `trailingSlash: 'always'`):
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-serial%2Frickenbacker-kluson-tuners-scaled.jpg%3ForigWidth%3D2560%26origHeight%3D1707%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F325-vintage-style-tuners.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F4003-open-back-bass-tuners.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, Person, Person


## Summary

- Live headings: 9 | Local: 10
- Live images:   6 | Local: 8
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 7, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 3
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.