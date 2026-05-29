# Live-diff audit â€” sell-my-martin-guitar

- Live:  https://www.joesvintageguitarsaz.com/sell-my-martin-guitar/
- Local: http://localhost:4321/sell-my-martin-guitar/
- When:  2026-05-28T18:21:16.619Z

## ðŸ”´ Must fix

- **7 heading(s) on live but missing on local:**
  - h4#toggle_15bcac79451840ec9 What Should I Look For In An Appraiser When Evaluating My Vintage Martin Guitar?
  - h4#toggle_667a03873c0f1b397 Can I Sell My Vintage Martin Guitar Without Original Paperwork?
  - h4#toggle_30d237965adcb2a03 What Factors Affect The Value Of A Vintage Martin Guitar?
  - h4#toggle_74a9dca0d7a06eae0 Are There Specific Martin Guitar Models That Are More Sought-After?
  - h4#toggle_2ebbbd8a61ddcff50 What Documentation Is Needed To Accurately Value A Vintage Martin Guitar?
  - h3#- Get a Complimentary Vintage Guitar Consultation at Joe’s Vintage Guitars!
  - h3#- Get in Touch!

- **Structural block mismatch â€” `fusionRow`:** live=18, local=0 (missing 18 on local)

- **Image count mismatch:** live=24, local=22 (missing 2 on local)

- **14 <picture><source> URL(s) on live but missing on local:**
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/Model-Name-Serial-Number-Martin-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/1929-martin-00-21-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/03/1945-martin-d-18-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/03/1955-martin-d-18-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/03/Copy-of-IMG_1620-200x267.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2023/09/1953-martin-D-18-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/1959-martin-D-28-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/01/martin-acoustic-guitar-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/1920s-martin-00-18-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/1956-martin-000-21-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/martin-om-42-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/martin-d-45-brazilian-rosewood-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/1959-martin-d-28-e-1-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/02/chat-icon.png.webp

- **Callout / tip / aside wrapper count mismatch:** live=3, local=0 (diff +3). Live pages typically wrap pro-tip / warning content in styled aside boxes (`.tip`, `.callout`, `.info-box`, `.fusion-alert`, etc.). If local is short, the agent likely extracted prose but skipped wrapper styling. Grep the live HTML for the relevant class and add corresponding `<div class="jvg-callout">` / `jvg-tip` blocks on local.

- **JSON-LD @type(s) on live but missing on local:** Place, PostalAddress, MusicStore+Organization, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, WebPage, Person, Person, Person, Person, Article, SpeakableSpecification, SpeakableSpecification, ProfessionalService, OpeningHoursSpecification, Offer, Offer, Offer, Offer, Service, Service, Review, Review, Review, Rating, Rating, Rating


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- Talk WithJoe Today

- Structural block extra on local â€” `section`: live=2, local=13 (+11)

- Structural block extra on local â€” `article`: live=0, local=3 (+3)

- **13 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  - /images/sell-martin/Fair-Cash-1.svg
  - /images/sell-martin/Fair-Cash-2.svg
  - /images/sell-martin/Fair-Cash-3-1.svg
  - ... and 8 more
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): SearchAction, LocalBusiness, AdministrativeArea, AdministrativeArea


## Summary

- Live headings: 33 | Local: 27
- Live images:   24 | Local: 22
- Live <picture><source>: 14 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 21, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 3 | local: 0
- Structural blocks (live vs local):
  - section: 2 vs 13
  - article: 0 vs 3
  - main: 1 vs 1
  - fusionRow: 18 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, Offer, Service, Offer, Service, Offer, Service, Offer, Service, ProfessionalService, OpeningHoursSpecification, AdministrativeArea, AdministrativeArea, Review, Person, Rating, Review, Person, Rating, Review, Person, Rating, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer] | local: [ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, WebSite, SearchAction, MusicStore+Organization, PostalAddress, LocalBusiness, PostalAddress, GeoCoordinates, AdministrativeArea, AdministrativeArea, Place, GeoCoordinates, PostalAddress, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, Article, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.