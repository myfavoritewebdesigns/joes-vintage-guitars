# Live-diff audit â€” sell-a-guitar-collection

- Live:  https://www.joesvintageguitarsaz.com/sell-a-guitar-collection/
- Local: http://localhost:4321/sell-a-guitar-collection/
- When:  2026-06-03T17:17:41.996Z

## ðŸ”´ Must fix

- **11 heading(s) on live but missing on local:**
  - h3#- 
  - h3#- Inherited A Guitar Collection And Need To Get It Appraised & Sell It?
  - h3#- We Buy Vintage Acoustic & Electric Guitar Collections In Any State
  - h3#- FAQs About Our Guitar Collection Resale Services
  - h4#toggle_e51afd6282088838c How Can Appraisal Experts Determine My Guitar Collection's Price & Value?
  - h4#toggle_36b0dcad5b96e59a8 How Long Will The Process Of Selling My Vintage Guitar Collection Take?
  - h4#toggle_8517607e71808a494 Will I Have To Pay For Shipping Taxes To Sell My Vintage Guitar Collection?
  - h4#toggle_97d0a78fd56124e29 Can I Sell My Guitar Collection On Consignment Or Trade It For Other Guitars?
  - h4#toggle_37b36752c094139f4 Is There A Warranty Or Return Policy After Buying Or Selling My Guitar Collection?
  - h3#- Contact Joe’s Vintage Guitars Guitar Collection Buyer Today!
  - h3#- Get in Touch!

- **Structural block mismatch â€” `fusionRow`:** live=17, local=0 (missing 17 on local)

- **Image count mismatch:** live=15, local=13 (missing 2 on local)

- **6 <picture><source> URL(s) on live but missing on local:**
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/01/i-buy-and-appraise-vintage-guitars.jpg-photoaidcom-2x-ai-zoom-1-200x130.png.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/1966-gibson-es-335-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/large-vintage-guitar-collection-200x148.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/03/1966-fender-jazzmaster-in-hard-case-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2024/12/blog5-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/02/chat-icon.png.webp

- **1 broken asset URL(s) on local (returned non-200):**
  - 404 via HEAD â†’ http://localhost:4321/images/sell-collection/i-buy-and-appraise-vintage-guitars.png

- **JSON-LD @type(s) on live but missing on local:** Place, PostalAddress, MusicStore+Organization, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, WebPage, Person, Person, Person, Person, Person, Person, Article, SpeakableSpecification, SpeakableSpecification, ProfessionalService, OpeningHoursSpecification, Offer, Offer, Offer, Offer, Service, Service, Review, Review, Review, Review, Review, Rating, Rating, Rating, Rating, Rating


## ðŸŸ¡ Should fix

- **2 heading(s) on local but not on live (extra):**
  - h3#- FAQs About About Our Guitar Collection Resale Services
  - h2#- Talk WithJoe Today

- Structural block extra on local â€” `section`: live=4, local=10 (+6)

- Structural block extra on local â€” `article`: live=0, local=5 (+5)

- **8 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  - /images/sell-collection/prices-icon.svg
  - /images/sell-collection/1966-gibson-es-335-1024x683.jpg
  - /images/sell-collection/classic-icon.svg
  - ... and 3 more
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- Callout / tip / aside count differs slightly: live=2, local=0 (diff +2). May be a single overlooked aside, or acceptable noise (e.g. a live `.warn` rendered as a bullet list on local).


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): SearchAction, LocalBusiness, AdministrativeArea, AdministrativeArea


## Summary

- Live headings: 33 | Local: 24
- Live images:   15 | Local: 13
- Live <picture><source>: 6 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 12, broken: 1
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 2 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 10
  - article: 0 vs 5
  - main: 1 vs 1
  - fusionRow: 17 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, Offer, Service, Offer, Service, Offer, Service, Offer, Service, ProfessionalService, OpeningHoursSpecification, AdministrativeArea, AdministrativeArea, Review, Person, Rating, Review, Person, Rating, Review, Person, Rating, Review, Person, Rating, Review, Person, Rating, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer] | local: [ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, WebSite, SearchAction, MusicStore+Organization, PostalAddress, LocalBusiness, PostalAddress, GeoCoordinates, AdministrativeArea, AdministrativeArea, Place, GeoCoordinates, PostalAddress, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, Article, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.