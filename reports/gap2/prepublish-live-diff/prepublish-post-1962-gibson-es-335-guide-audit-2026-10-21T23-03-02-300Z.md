# Live-diff audit â€” prepublish-post-1962-gibson-es-335-guide

- Live:  http://127.0.0.1:4340/post/1962-gibson-es-335-guide/
- Local: http://127.0.0.1:4341/post/1962-gibson-es-335-guide/
- When:  2026-10-21T23:03:02.301Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `The 1962 Gibson ES-335 Guide: Identifying the Block Inlay & Patent Number Transition | Joe's Vintage Guitars`
  - local: `1962 Gibson ES-335 Dating, Pickups And Originality Guide`

- **meta description differs:**
  - live:  `The 1962 Gibson ES-335 is a “transitional” model that sits between the 1950s dot-neck era and the block-inlay look. This guide covers the “Mickey Mouse” ear body shape, the shift from PAF to Patent Number pickups, and the details that determine 1962 vintage value. If you are looking for an appraisal or want to know what makes this “Golden Era” semi-hollow sound the way it does, here is why the 1962 ES-335 stays a collector favorite.`
  - local: `Identify 1962 Gibson ES-335 features, original parts and construction details. Compare dating clues, repairs and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 34 | Local: 34
- Live images:   13 | Local: 13
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 12, broken: 0
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