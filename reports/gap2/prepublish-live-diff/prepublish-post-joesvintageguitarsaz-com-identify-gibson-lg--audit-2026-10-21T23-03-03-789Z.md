# Live-diff audit â€” prepublish-post-joesvintageguitarsaz-com-identify-gibson-lg-

- Live:  http://127.0.0.1:4340/post/joesvintageguitarsaz-com-identify-gibson-lg-series/
- Local: http://127.0.0.1:4341/post/joesvintageguitarsaz-com-identify-gibson-lg-series/
- When:  2026-10-21T23:03:03.790Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Vintage Gibson LG Series: A Guide to the LG-0, LG-1, LG-2, and LG-3 Models | Joe's Vintage Guitars`
  - local: `Gibson LG-0, LG-1, LG-2 And LG-3 Identification Guide`

- **meta description differs:**
  - live:  `The Gibson LG series packs a lot of guitar into a small body. From the X-braced LG-2 to the mahogany LG-0, these “Little Guitars” offer a focused, punchy tone that has made them a favorite for over 80 years. If you have a wartime “Banner” model or a late-60s workhorse, our guide helps you identify your specific model and explains why these small-body Gibsons are climbing in collector value.`
  - local: `Identify Gibson LG-0, LG-1, LG-2 and LG-3 features, original parts and construction details. Compare dating clues, repairs and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 33 | Local: 33
- Live images:   14 | Local: 14
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 13, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.