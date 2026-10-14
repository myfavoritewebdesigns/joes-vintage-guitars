# Live-diff audit â€” burst-shipping-final-wording

- Live:  https://www.joesvintageguitarsaz.com/post/gibson-shipping-totals-1948-1979/
- Local: http://127.0.0.1:4323/post/gibson-shipping-totals-1948-1979/
- When:  2026-10-14T22:53:28.957Z

## ðŸ”´ Must fix

- **4 heading(s) on live but missing on local:**
  - h2#lp-std-52-61 Les Paul Standard Shipping Totals (1952-1961)
  - h2#- Vintage Gibson SG Models: History, Identification and Value Guide
  - h2#- Vintage Gibson Les Paul Models: Family, History and Identification Guide
  - h2#- Gibson ES-225 Model Guide: Variations, Transitions & Authentication


## ðŸŸ¡ Should fix

- **4 heading(s) on local but not on live (extra):**
  - h2#lp-std-52-61 Les Paul Standard Shipping Totals (1952 To 1961)
  - h2#- 1960 Gibson Les Paul Standard: Value, Neck Changes And Specs
  - h2#- 1959 Gibson Les Paul Standard Burst: Value, Specs And PAFs
  - h2#- 1958 Gibson Les Paul Standard: Value, Goldtop To Burst And Specs

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 24 | Local: 24
- Live images:   12 | Local: 12
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 11, broken: 0
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