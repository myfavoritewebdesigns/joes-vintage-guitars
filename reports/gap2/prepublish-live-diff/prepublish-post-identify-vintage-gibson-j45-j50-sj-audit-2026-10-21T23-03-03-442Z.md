# Live-diff audit â€” prepublish-post-identify-vintage-gibson-j45-j50-sj

- Live:  http://127.0.0.1:4340/post/identify-vintage-gibson-j45-j50-sj/
- Local: http://127.0.0.1:4341/post/identify-vintage-gibson-j45-j50-sj/
- When:  2026-10-21T23:03:03.443Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `How to Identify a Vintage Gibson J-45, J-50, and Southern Jumbo (SJ) | Joe's Vintage Guitars`
  - local: `Gibson J-45, J-50 And Southern Jumbo Identification Guide`

- **meta description differs:**
  - live:  `Ever wondered why your vintage Gibson acoustic doesn’t have a model name inside? You aren’t alone. From the ‘Golden Era’ bracing shifts to the iconic ‘Banner’ headstocks, we break down the physical specs you need to identify a J-45, J-50, or Southern Jumbo. We walk through the history of the ‘Workhorse’ so you can see where your guitar fits in the Gibson timeline.`
  - local: `Identify Gibson J-45, J-50 and Southern Jumbo features, original parts and construction. Compare dating clues, repairs and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 22 | Local: 22
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