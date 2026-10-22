# Live-diff audit â€” prepublish-post-fender-jazzmaster-evolution-guide-1958-1971

- Live:  http://127.0.0.1:4340/post/fender-jazzmaster-evolution-guide-1958-1971/
- Local: http://127.0.0.1:4341/post/fender-jazzmaster-evolution-guide-1958-1971/
- When:  2026-10-21T23:03:02.692Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#- Gibson Les Paul Junior: Authentication, Evolution & Value (1954 To 1962)


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- 1958 Gibson Les Paul Standard: Value, Goldtop To Burst And Specs

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Fender Jazzmaster Evolution Guide: Every Spec Change From 1958 to 1971 | Joe's Vintage Guitars`
  - local: `Fender Jazzmaster Evolution And Specs: 1958 To 1971`

- **meta description differs:**
  - live:  `The Fender Jazzmaster changed more times in its first 14 years than almost any other model in the Fender lineup. This guide documents every spec change year by year: gold guard to tortoiseshell, slab to veneer, clay dots to pearl to blocks, spaghetti to CBS black logo, Klusons to F-tuners, and a complete custom color reference with the correct pickguard pairing for every finish.`
  - local: `Identify 1958 to 1971 Fender Jazzmaster features, original parts and construction details. Compare dating clues, repairs and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 45 | Local: 45
- Live images:   42 | Local: 42
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 41, broken: 0
- Consecutive <figure> runs â€” live: 8 (total 20 figures) | local: 8 (total 20 figures)
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