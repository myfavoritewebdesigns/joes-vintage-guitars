# Live-diff audit â€” links-meta-rickenbacker-pickup-dating-guide

- Live:  https://joe-rickenbacker-dating-hub.joes-vintage-guitars.pages.dev/rickenbacker-pickup-dating-guide/
- Local: http://127.0.0.1:4345/rickenbacker-pickup-dating-guide/
- When:  2026-10-15T18:21:52.265Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Rickenbacker Pickup Dating Guide`
  - local: `Rickenbacker Pickup Dating: Toaster, Hi-Gain & Horseshoe`

- **meta description differs:**
  - live:  `Compare horseshoe, toaster and Hi-Gain pickups, then check the version against the instrument’s serial date and model.`
  - local: `Identify Rickenbacker horseshoe, toaster and Hi-Gain pickups with photos and timelines. Compare guitar, bass and reissue features with the serial date.`

- **3 internal link(s) on local missing trailing slash** (breaks `trailingSlash: 'always'`):
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2Ffrying-pan-horseshoe-pickup.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-serial%2Frickenbacker-toaster-pickup-scaled.jpg%3ForigWidth%3D2560%26origHeight%3D1707%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F4003-bass-hi-gain-pickup.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 7 | Local: 7
- Live images:   8 | Local: 8
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 7, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 3 vs 3
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.