# Live-diff audit â€” links-meta-rickenbacker-serial-numbers

- Live:  https://joe-rickenbacker-dating-hub.joes-vintage-guitars.pages.dev/rickenbacker-serial-numbers/
- Local: http://127.0.0.1:4345/rickenbacker-serial-numbers/
- When:  2026-10-15T18:21:52.877Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Rickenbacker Serial Number Lookup And Dating Guide`
  - local: `Rickenbacker Serial Number Lookup & Dating Guide`

- **meta description differs:**
  - live:  `Look up a Rickenbacker guitar or bass serial number, find its date format, and compare pickups, tuners, knobs, body details, tailpieces and finishes.`
  - local: `Date your Rickenbacker guitar or bass with our free serial number lookup. Find the serial, read date codes, and compare vintage features in photos.`

- **7 internal link(s) on local missing trailing slash** (breaks `trailingSlash: 'always'`):
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-serial%2Frickenbacker-output-jack-serial-number-two-letter-code.jpg%3ForigWidth%3D1600%26origHeight%3D1066%26origFormat%3Djpg&w=1600&h=1066&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-serial%2Frickenbacker-serial-number-on-bridge.jpg%3ForigWidth%3D1600%26origHeight%3D1066%26origFormat%3Djpg&w=1600&h=1066&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-serial%2Frickenbacker-fry-pan-serial-number.jpg%3ForigWidth%3D800%26origHeight%3D533%26origFormat%3Djpg&w=800&h=533&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2F325-letter-digit-serial-plate.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Frickenbacker-dating%2Fmodern-numeric-serial-plate.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 31 | Local: 31
- Live images:   18 | Local: 18
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 15, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 2 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 4 | local: 4
- Structural blocks (live vs local):
  - section: 8 vs 8
  - article: 6 vs 6
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.