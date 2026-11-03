# Live-diff audit â€” mg2-casino-photo-auth

- Live:  https://b837af9e.joes-vintage-guitars.pages.dev/post/epiphone-casino-authentication-guide/
- Local: http://127.0.0.1:4335/post/epiphone-casino-authentication-guide/
- When:  2026-10-31T04:10:12.264Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#- Joe’s Casino Comparison Photos


## ðŸŸ¡ Should fix

- **3 heading(s) on local but not on live (extra):**
  - h2#- Joe’s Casino Photo Archive
  - h3#- 1962 Epiphone Casino
  - h3#- 1965 Epiphone Casino

- Image count extra on local: live=12, local=17 (+5)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-3], local=[1Ã—run-of-2, 2Ã—run-of-3] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person


## Summary

- Live headings: 31 | Local: 33
- Live images:   12 | Local: 17
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 12, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 3 figures) | local: 3 (total 8 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 13 vs 13
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.