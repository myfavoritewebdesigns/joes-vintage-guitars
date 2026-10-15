# Live-diff audit â€” links-meta-rickenbacker-body-binding-and-inlays

- Live:  https://joe-rickenbacker-dating-hub.joes-vintage-guitars.pages.dev/rickenbacker-body-binding-and-inlays/
- Local: http://127.0.0.1:4345/rickenbacker-body-binding-and-inlays/
- When:  2026-10-15T18:21:52.405Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Rickenbacker Body, Binding And Inlays`
  - local: `Rickenbacker Binding, Inlays & Body Dating Guide`

- **meta description differs:**
  - live:  `Compare body edges, checkerboard binding, fingerboard inlays, soundholes, pickguards and headstock details with the serial date.`
  - local: `Date Rickenbacker features using body shapes, checkerboard binding, dot and triangle inlays, soundholes and headstock photos. Account for later reissues.`

- **5 internal link(s) on local missing trailing slash** (breaks `trailingSlash: 'always'`):
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F360-full-width-triangle-inlay.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-serial%2Frickenbacker-checklerboard-binding-scaled.jpg%3ForigWidth%3D2560%26origHeight%3D1707%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F325-vintage-style-controls-and-vibrato.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2Ffrying-pan-rickenbacher-logo.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F360-12-slotted-headstock.jpg%3ForigWidth%3D5472%26origHeight%3D3648%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 12 | Local: 12
- Live images:   10 | Local: 10
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 9, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 2 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 3
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.