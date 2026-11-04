# Live-diff audit â€” champ-photos-update

- Live:  https://32e11e95.joes-vintage-guitars.pages.dev/post/fender-champ-authentication-guide/
- Local: http://127.0.0.1:4332/post/fender-champ-authentication-guide/
- When:  2026-11-04T17:45:26.812Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **3 heading(s) on local but not on live (extra):**
  - h2#- The Original Champion 600
  - h3#- 1965 Fender Vibro Champ
  - h3#- 1968 Fender Vibro Champ

- Structural block extra on local â€” `section`: live=12, local=13 (+1)

- Image count extra on local: live=15, local=26 (+11)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-2, 2Ã—run-of-3], local=[1Ã—run-of-2, 3Ã—run-of-3, 2Ã—run-of-4] â€” verify gallery layout matches.

- **meta description differs:**
  - live:  `Identify an original Fender Champ or Vibro Champ by its controls, circuit and speaker. See Joe’s tweed photos, readable chart stamp and reissue checks.`
  - local: `Identify vintage Fender Champion 600, Champ and Vibro Champ amps with Joe’s original examples, circuit details, speaker checks and blackface/silverface photos.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 34 | Local: 37
- Live images:   15 | Local: 26
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 22, broken: 0
- Consecutive <figure> runs â€” live: 3 (total 8 figures) | local: 6 (total 19 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 12 vs 13
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.