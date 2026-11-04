# Live-diff audit â€” martin-release-d-21

- Live:  http://127.0.0.1:8768/post/martin-d-21-authentication-guide/
- Local: http://127.0.0.1:50190/post/martin-d-21-authentication-guide/
- When:  2026-10-24T01:12:24.309Z

## ðŸ”´ Must fix

- **3 <picture><source> URL(s) on live but missing on local:**
  - http://127.0.0.1:8768/images/authentication/optimized/d-21-hero-400.webp
  - http://127.0.0.1:8768/images/authentication/optimized/d-21-detail-1-400.webp
  - http://127.0.0.1:8768/images/authentication/optimized/d-21-detail-2-400.webp

- **JSON-LD @type(s) on live but missing on local:** Organization


## ðŸŸ¡ Should fix

- Image count extra on local: live=6, local=8 (+2)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-2], local=[2Ã—run-of-2] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ProfessionalService, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, AdministrativeArea, AdministrativeArea, WebSite, Person, Person, Person, CollegeOrUniversity, Service, Service, ListItem, ListItem

- Canonical host differs (expected for local dev): live=`jvg-vintage-martin-model-library.joedampt.chatgpt.site` local=`www.joesvintageguitarsaz.com`


## Summary

- Live headings: 13 | Local: 13
- Live images:   6 | Local: 8
- Live <picture><source>: 3 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 7, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 2 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 12 vs 12
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [BlogPosting, Person, Organization, ImageObject, FAQPage, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.