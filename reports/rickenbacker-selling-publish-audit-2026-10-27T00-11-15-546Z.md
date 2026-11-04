# Live-diff audit â€” rickenbacker-selling-publish

- Live:  https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/
- Local: http://127.0.0.1:4393/sell-my-rickenbacker-guitar/
- When:  2026-10-27T00:11:15.547Z

## ðŸ”´ Must fix

- **12 heading(s) on live but missing on local:**
  - h1#- Sell Your Vintage Rickenbacker Bass Guitar In The US
  - h2#- Top-Rated Rickenbacker Used Guitar Buyer Near You
  - h3#- Sell Your Vintage Rickenbacker Guitar
  - h3#- I Buy & Appraise Vintage Guitars Online Or In Person
  - h4#- Sell Your Rickenbacker Bass Or Electric Guitar At The Right Price
  - h4#- Find Rare, Unique & Classic Rickenbacker Guitars In Our Online Shop
  - h4#- Years Of Experience Buying & Selling Guitars From All Over America
  - h3#- Your Testimonials
  - h4#- Rickenbacker Guitar Resale Expert With 5-Star Reviews
  - h3#- Meet Vintage Guitar Expert, Joe Dampt
  - h4#- Professional Buyer and Seasoned Collector of Vintage Guitars
  - h3#- Frequently Asked QuestionsAbout Our Guitar Resale Services

- **JSON-LD @type(s) on live but missing on local:** FAQPage, Question, Question, Question, Question, Question, Answer, Answer, Answer, Answer, Answer, Article, VideoObject


## ðŸŸ¡ Should fix

- **19 heading(s) on local but not on live (extra):**
  - h1#- Sell Your Rickenbacker Guitar Or Bass
  - h2#- Rickenbacker Models I Buy
  - h3#- 330, 360 & 12-String Guitars
  - h3#- 325, 350, 620 & 660 Models
  - h3#- 4001 & 4003 Basses
  - h3#- 4005 Basses & Earlier Instruments
  - h2#toggle_527859ceb8a70e0f6 What Is My Rickenbacker Worth?
  - h3#- Rickenbacker Value Factors
  - h3#- Asking Price, Sale Price And A Cash Offer
  - h2#- Photos To Send For A Rickenbacker Offer
  - h2#- How To Sell Your Rickenbacker To Joe
  - h3#- Send Me Photos
  - h3#- I'll Appraise Your Rickenbacker
  - h3#- I'll Make A Cash Offer
  - h3#- Agree On Shipping And Payment
  - h2#- How I Arrange FedEx Shipping For Your Rickenbacker
  - h3#- How You'll Be Paid
  - h2#- Meet Vintage Guitar Expert, Joe Dampt
  - h2#- Questions About Selling A Rickenbacker

- Structural block extra on local â€” `section`: live=8, local=9 (+1)

- Structural block extra on local â€” `article`: live=3, local=4 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Sell My RICKENBACKER Guitar | Joes Vintage Guitars`
  - local: `Sell My Rickenbacker Guitar Or Bass | Joe's Vintage Guitars`

- **meta description differs:**
  - live:  `Sell your vintage Rickenbacker bass or guitar to a trusted nationwide buyer. Fair cash offers, expert appraisals, and an easy process from coast to coast.`
  - local: `Sell your Rickenbacker guitar or bass to Joe's Vintage Guitars. Send photos for a free appraisal and cash offer. Based in Mesa, buying across the US.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person, Person, Service, WebPage, Country


## Summary

- Live headings: 15 | Local: 22
- Live images:   12 | Local: 12
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 11, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 8 vs 9
  - article: 3 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, Article, VideoObject] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, WebPage, Service, Country, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.