# Live-diff audit â€” prepublish-post-1973-fender-jazz-bass-vintera-iii

- Live:  http://127.0.0.1:4340/post/1973-fender-jazz-bass-vintera-iii/
- Local: http://127.0.0.1:4341/post/1973-fender-jazz-bass-vintera-iii/
- When:  2026-10-21T23:03:05.905Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#- Fender Jazz Bass Guide 1960-1975: Year-by-Year Specs, Dating, and Value


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- Vintage Fender Jazz Bass Dating And Identification Guide

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Original Owner, Original Bass: A ’73 Jazz Bass Meets the Vintera III | Joe's Vintage Guitars`
  - local: `1973 Fender Jazz Bass And Vintera III: Specs And Value`

- **meta description differs:**
  - live:  `Jim’s parents bought him a brand-new 1973 Fender Jazz Bass for Christmas: sunburst, maple board, black blocks. Fifty years later, we put it head-to-head with Fender’s brand-new Vintera III Early ’70s Jazz Bass. Here’s how the reissue stacks up against the real thing.`
  - local: `Identify 1973 Fender Jazz Bass and Vintera III features, original parts and construction. Compare dating clues, repairs and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 40 | Local: 40
- Live images:   18 | Local: 18
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 17, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 2 (total 4 figures)
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