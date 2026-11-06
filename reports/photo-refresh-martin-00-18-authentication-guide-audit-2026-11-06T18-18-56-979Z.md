# Live-diff audit â€” photo-refresh-martin-00-18-authentication-guide

- Live:  https://0c9dcb45.joes-vintage-guitars.pages.dev/post/martin-00-18-authentication-guide/
- Local: http://127.0.0.1:4328/post/martin-00-18-authentication-guide/
- When:  2026-11-06T18:18:56.980Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h3#- A 00-18 Cataloged As A 1924 Wurlitzer 2086


## ðŸŸ¡ Should fix

- **3 heading(s) on local but not on live (extra):**
  - h2#- Compare Clean 1951 And 1962 00-18 Examples
  - h3#- Preserved Finish With A Documented Neck Reset
  - h3#- A Later Top And Tuner Comparison

- Structural block extra on local â€” `section`: live=13, local=14 (+1)

- Image count extra on local: live=17, local=18 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-3, 1Ã—run-of-5], local=[2Ã—run-of-2, 1Ã—run-of-5] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, Person


## Summary

- Live headings: 30 | Local: 32
- Live images:   17 | Local: 18
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 16, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 8 figures) | local: 3 (total 9 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 13 vs 14
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.