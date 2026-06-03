# Live-diff audit â€” sell-my-rickenbacker-guitar

- Live:  https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/
- Local: http://localhost:4321/sell-my-rickenbacker-guitar/
- When:  2026-06-03T22:37:42.257Z

## ðŸ”´ Must fix

- **7 heading(s) on live but missing on local:**
  - h4#toggle_527859ceb8a70e0f6 How Can Appraisal Experts Determine My Guitar's Price & Value?
  - h4#toggle_02229f7ac996d625a Can I Sell My Guitar On Consignment Or Trade It For Another One?
  - h4#toggle_a6fb7e4d037f53f7c What Are The Payment Options To Buy A Vintage Guitar?
  - h4#toggle_00fc6428ecb9a31e6 Will I Have To Pay For Shipping Taxes To Buy Or Sell A Guitar?
  - h4#toggle_e91094f9e7923d8b7 Is There A Warranty Or Return Policy After Buying A Used Guitar From You?
  - h3#- Contact Joe’s Vintage Guitars Vintage Guitar Buyer Today!
  - h3#- Get in Touch!

- **Structural block mismatch â€” `fusionRow`:** live=15, local=0 (missing 15 on local)

- **Image count mismatch:** live=14, local=12 (missing 2 on local)

- **5 <picture><source> URL(s) on live but missing on local:**
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/01/i-buy-and-appraise-vintage-guitars.jpg-photoaidcom-2x-ai-zoom-1-200x130.png.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2022/08/fair-and-convenient-prices-for-your-rickenbacker-bass-or-electric-guitar-200x118.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2022/08/find-rare-unique-and-classic-rickenbacker-guitars-in-our-online-shop-200x118.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2022/08/years-of-experience-buying-and-selling-guitars-for-all-over-america-200x118.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/02/chat-icon.png.webp

- **JSON-LD @type(s) on live but missing on local:** Place, PostalAddress, MusicStore+Organization, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, WebPage, Person, Person, Person, Person, Article, SpeakableSpecification, SpeakableSpecification, ProfessionalService, OpeningHoursSpecification, Offer, Offer, Offer, Offer, Service, Service, Review, Review, Review, Rating, Rating, Rating


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- Talk WithJoe Today

- Structural block extra on local â€” `section`: live=2, local=7 (+5)

- Structural block extra on local â€” `article`: live=0, local=3 (+3)

- **8 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  - /images/sell-rickenbacker/prices-icon.svg
  - /images/sell-rickenbacker/fair-and-convenient-prices-rickenbacker.jpg
  - /images/sell-rickenbacker/classic-icon.svg
  - ... and 3 more
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- Callout / tip / aside count differs slightly: live=2, local=0 (diff +2). May be a single overlooked aside, or acceptable noise (e.g. a live `.warn` rendered as a bullet list on local).

- **meta description differs:**
  - live:  `Selling your Rickenbacker guitar made easy with Joe's Vintage Guitars, a trusted nationwide buyer and Rickenbacker expert. Reliable service guaranteed.`
  - local: `Sell your vintage Rickenbacker bass or guitar to a trusted nationwide buyer. Fair cash offers, expert appraisals, and a stress-free process from coast to coast.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): SearchAction, LocalBusiness, AdministrativeArea, AdministrativeArea


## Summary

- Live headings: 20 | Local: 14
- Live images:   14 | Local: 12
- Live <picture><source>: 5 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 11, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 2 | local: 0
- Structural blocks (live vs local):
  - section: 2 vs 7
  - article: 0 vs 3
  - main: 1 vs 1
  - fusionRow: 15 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, Offer, Service, Offer, Service, Offer, Service, Offer, Service, ProfessionalService, OpeningHoursSpecification, AdministrativeArea, AdministrativeArea, Review, Person, Rating, Review, Person, Rating, Review, Person, Rating, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer] | local: [ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, WebSite, SearchAction, MusicStore+Organization, PostalAddress, LocalBusiness, PostalAddress, GeoCoordinates, AdministrativeArea, AdministrativeArea, Place, GeoCoordinates, PostalAddress, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, Article, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.