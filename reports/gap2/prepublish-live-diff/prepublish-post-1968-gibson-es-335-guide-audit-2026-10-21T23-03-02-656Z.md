# Live-diff audit â€” prepublish-post-1968-gibson-es-335-guide

- Live:  http://127.0.0.1:4340/post/1968-gibson-es-335-guide/
- Local: http://127.0.0.1:4341/post/1968-gibson-es-335-guide/
- When:  2026-10-21T23:03:02.657Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `1968 Gibson ES-335: Buyer’s & Collector’s Guide | Joe's Vintage Guitars`
  - local: `1968 Gibson ES-335 Value, Dating And Originality Guide`

- **meta description differs:**
  - live:  `The 1968 Gibson ES-335 marks the final year of Gibson’s one-piece mahogany neck and long tenon joint, the last of the Kalamazoo-era semi-hollows before the construction changes of 1969. This guide covers finish rarity, hardware authentication, pot code dating, and current market values for collectors and sellers.`
  - local: `Identify 1968 Gibson ES-335 features, original parts and construction details. Compare dating clues, repairs and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 24 | Local: 24
- Live images:   15 | Local: 15
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 14, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 2 figures) | local: 1 (total 2 figures)
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