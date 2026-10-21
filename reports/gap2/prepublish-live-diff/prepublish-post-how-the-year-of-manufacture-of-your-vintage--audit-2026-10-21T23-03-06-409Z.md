# Live-diff audit â€” prepublish-post-how-the-year-of-manufacture-of-your-vintage-

- Live:  http://127.0.0.1:4340/post/how-the-year-of-manufacture-of-your-vintage-gibson-guitar-affects-its-price/
- Local: http://127.0.0.1:4341/post/how-the-year-of-manufacture-of-your-vintage-gibson-guitar-affects-its-price/
- When:  2026-10-21T23:03:06.410Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Vintage Gibson Guitar Value by Year: Which Eras Are Worth the Most? | Joe's Vintage Guitars`
  - local: `Vintage Gibson Guitar Value By Year: Era Price Guide`

- **meta description differs:**
  - live:  `Curious about your vintage Gibson guitar’s value? Learn how its year of manufacture impacts its price.`
  - local: `Compare vintage Gibson values by era, including Les Pauls and ES models. See how construction, pickups, original finish and condition affect prices.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 32 | Local: 32
- Live images:   17 | Local: 17
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 16, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 3
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.