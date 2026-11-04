# Live-diff audit â€” l7-authentication-photo-before

- Live:  https://joe-model-guides-3-gibson.joes-vintage-guitars.pages.dev/post/gibson-l-7-authentication-guide/
- Local: http://127.0.0.1:4340/post/gibson-l-7-authentication-guide/
- When:  2026-11-04T17:41:01.158Z

## ðŸ”´ Must fix

- **2 heading(s) on live but missing on local:**
  - h2#- Two Noncutaway L-7s From Joe’s Archive
  - h3#- A Personalized Guard On A Noncutaway Body


## ðŸŸ¡ Should fix

- **4 heading(s) on local but not on live (extra):**
  - h2#- A 1937 Gibson L-7 From Joe’s Archive
  - h2#- The Fleur-De-Lis Headstock On A 1944 L-7
  - h2#- Postwar L-7 And L-7C Examples From Joe’s Archive
  - h3#- A Personalized Guard On A Cutaway Body

- Structural block extra on local â€” `section`: live=13, local=15 (+2)

- Image count extra on local: live=14, local=22 (+8)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-2, 1Ã—run-of-4], local=[3Ã—run-of-2, 2Ã—run-of-4] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 21 | Local: 23
- Live images:   14 | Local: 22
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 19, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 6 figures) | local: 5 (total 14 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 13 vs 15
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.