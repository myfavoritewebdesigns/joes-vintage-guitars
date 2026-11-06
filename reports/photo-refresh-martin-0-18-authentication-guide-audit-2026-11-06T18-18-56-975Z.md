# Live-diff audit â€” photo-refresh-martin-0-18-authentication-guide

- Live:  https://0c9dcb45.joes-vintage-guitars.pages.dev/post/martin-0-18-authentication-guide/
- Local: http://127.0.0.1:4328/post/martin-0-18-authentication-guide/
- When:  2026-11-06T18:18:56.976Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#- Read Serial 112697 On The Actual Neck Block


## ðŸŸ¡ Should fix

- **3 heading(s) on local but not on live (extra):**
  - h2#- Read The Neck Blocks Across Three Eras
  - h3#- The 1925 12-Fret 0-18
  - h3#- The 1966 Martin 0-18

- Image count extra on local: live=12, local=19 (+7)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-3], local=[1Ã—run-of-6] â€” verify gallery layout matches.

- **meta description differs:**
  - live:  `Identify a vintage Martin 0-18 with serial photos, body measurements and repair checks. Compare the 0-18K and Linda Gayle’s one-owner 1949 guitar.`
  - local: `Identify a vintage Martin 0-18 with serial photos, body measurements and repair checks. Compare 1925, 1951 and 1966 examples plus the koa 0-18K.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 28 | Local: 30
- Live images:   12 | Local: 19
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 18, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 3 figures) | local: 1 (total 6 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 14 vs 14
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.