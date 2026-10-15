# Live-diff audit â€” guild-hardware-expansion

- Live:  https://joe-guild-dating-hub.joes-vintage-guitars.pages.dev/guild-pickup-and-hardware-dating-guide/
- Local: http://127.0.0.1:4345/guild-pickup-and-hardware-dating-guide/
- When:  2026-10-15T22:18:17.635Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **5 heading(s) on local but not on live (extra):**
  - h2#pickup-types-by-era Guild Pickup Names, Eras And Model Examples
  - h2#modern-pickup-names LB-1, HB-2 And Modern Pickup Reissues
  - h3#- Stove Knobs And Guild Logo Knobs
  - h3#- Read The Pot Code Alongside The Harness
  - h2#acoustic-pickups Barcus-Berry Hot-Dots And Later Acoustic Pickups

- Structural block extra on local â€” `section`: live=9, local=12 (+3)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Guild Pickup & Hardware Dating: Photos And Originality`
  - local: `Guild Pickup & Hardware Dating: Types, Eras And Models`

- **meta description differs:**
  - live:  `Compare Guild pickups, tuners, controls, bridges and Bigsbys in close-up photos. Learn how replacements and pot codes affect dating and originality checks.`
  - local: `Identify Guild Franz, DeArmond and HB-1 pickups, Bigsby and Hagstrom vibratos, bridges and tuners. Compare typical eras, model examples and replacement clues.`

- **12 internal link(s) on local missing trailing slash** (breaks `trailingSlash: 'always'`):
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fearly-x-pickups.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Flater-x-pickups.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fthunder-controls.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fthunder-serial.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fx500-tuners.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fearly-x-serial.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fx500-head.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fthunder-head.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Fbluesbird-bigsby.jpg%3ForigWidth%3D400%26origHeight%3D400%26origFormat%3Djpg&w=400&h=400&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fguild-hub%2Ff50-bridge.jpg%3ForigWidth%3D2400%26origHeight%3D1600%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 9 | Local: 14
- Live images:   17 | Local: 17
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 16, broken: 0
- Consecutive <figure> runs â€” live: 5 (total 12 figures) | local: 5 (total 12 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 9 vs 12
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.