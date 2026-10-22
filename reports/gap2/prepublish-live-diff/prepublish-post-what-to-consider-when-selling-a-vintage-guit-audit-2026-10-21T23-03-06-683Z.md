# Live-diff audit â€” prepublish-post-what-to-consider-when-selling-a-vintage-guit

- Live:  http://127.0.0.1:4340/post/what-to-consider-when-selling-a-vintage-guitar/
- Local: http://127.0.0.1:4341/post/what-to-consider-when-selling-a-vintage-guitar/
- When:  2026-10-21T23:03:06.685Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `What To Consider When Selling A Vintage Guitar | Joe's Vintage Guitars`
  - local: `Selling A Vintage Guitar: Condition, Value And Options`

- **meta description differs:**
  - live:  `Planning to sell a vintage guitar? Learn key tips for a successful sale and what to consider before selling.`
  - local: `Plan a vintage guitar sale with clear photos, an originality check and a realistic appraisal. Compare selling options, condition and buyer expectations.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 16 | Local: 16
- Live images:   11 | Local: 11
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 10, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 2 vs 2
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