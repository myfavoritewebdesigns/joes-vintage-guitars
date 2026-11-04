# Live-diff audit â€” martin-values-archtop

- Live:  http://127.0.0.1:8788/post/martin-archtop-value-guide/
- Local: http://127.0.0.1:8787/post/martin-archtop-value-guide/
- When:  2026-10-26T21:08:18.505Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#- Tell Joe About Your Martin

- **1 <picture><source> URL(s) on live but missing on local:**
  - http://127.0.0.1:8788/images/authentication/optimized/archtop-hero-400.webp

- **JSON-LD @type(s) on live but missing on local:** Organization, Organization


## ðŸŸ¡ Should fix

- Image count extra on local: live=4, local=6 (+2)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ProfessionalService, ImageObject, ImageObject, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, AdministrativeArea, AdministrativeArea, WebSite, Person, CollegeOrUniversity, Service, Service, ListItem, ListItem

- Canonical host differs (expected for local dev): live=`jvg-martin-value-guides.joedampt.chatgpt.site` local=`www.joesvintageguitarsaz.com`


## Summary

- Live headings: 7 | Local: 6
- Live images:   4 | Local: 6
- Live <picture><source>: 1 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 5, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 5 vs 5
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [BlogPosting, Organization, Organization, ImageObject, Person, BreadcrumbList, ListItem, ListItem] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.