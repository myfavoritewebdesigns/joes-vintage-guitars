# Live-diff audit â€” prepublish-post-1965-gibson-es-335-short-maestro-vibrola

- Live:  http://127.0.0.1:4340/post/1965-gibson-es-335-short-maestro-vibrola/
- Local: http://127.0.0.1:4341/post/1965-gibson-es-335-short-maestro-vibrola/
- When:  2026-10-21T23:03:02.289Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `A 1965 Gibson ES-335 With a Factory Short Maestro Vibrola | Joe's Vintage Guitars`
  - local: `1965 Gibson ES-335 Factory Short Maestro Vibrola Guide`

- **meta description differs:**
  - live:  `A 1965 Gibson ES-335 with a factory short Maestro Vibrola, a combination rarely seen on a 335. How the original ground wire and a clean top confirm it left Kalamazoo this way, plus how to date it and what it means for value.`
  - local: `Identify 1965 Gibson ES-335 with a short Maestro features, original parts and construction. Compare dating clues, repairs and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 15 | Local: 15
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