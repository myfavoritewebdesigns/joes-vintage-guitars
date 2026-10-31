# Live-diff audit â€” mg2-epiphone-seller

- Live:  https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/
- Local: http://127.0.0.1:4331/sell-my-epiphone-guitar/
- When:  2026-10-30T22:17:50.436Z

## ðŸ”´ Must fix

- **17 heading(s) on live but missing on local:**
  - h1#- Sell Your Rickenbacker Guitar Or Bass
  - h2#rickenbacker-offer-title Tell Me About Your Rickenbacker
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
  - h3#- I'll Appraise Your Rickenbacker
  - h3#- Nationwide Rickenbacker Bass Guitar Resale & Appraisals
  - h3#- Sell Your Rickenbacker Guitar Collection Online
  - h2#- How I Arrange FedEx Shipping For Your Rickenbacker
  - h2#- Questions About Selling A Rickenbacker

- **Canonical path differs:** live=`https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/` local=`https://www.joesvintageguitarsaz.com/sell-my-epiphone-guitar/`


## ðŸŸ¡ Should fix

- **17 heading(s) on local but not on live (extra):**
  - h1#- Sell Your Vintage Epiphone Guitar
  - h2#epiphone-offer-title Tell Me About Your Epiphone
  - h2#- Epiphone Models I Buy
  - h3#- Kalamazoo Hollow And Semi-Hollow Guitars
  - h3#- Kalamazoo Solidbodies And Carved Archtops
  - h3#- New York And Philadelphia Acoustic Archtops
  - h3#- Early Epiphone Electric Archtops
  - h2#- What Is My Epiphone Worth?
  - h3#- Epiphone Appraisal Details
  - h3#- Compare Your Guitar With Its Model Guide
  - h2#- Photos To Send For An Epiphone Offer
  - h2#- How To Sell Your Epiphone To Joe
  - h3#- I'll Appraise Your Epiphone
  - h3#- Sell An Epiphone In Mesa Or From Another State
  - h3#- Selling An Epiphone Guitar Collection
  - h2#- Shipping Your Epiphone Through A FedEx Office Print & Ship Center
  - h2#- Questions About Selling An Epiphone

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Sell My Rickenbacker Guitar Or Bass | Joe's Vintage Guitars`
  - local: `Sell My Vintage Epiphone Guitar | Joe's Vintage Guitars`

- **meta description differs:**
  - live:  `Sell your Rickenbacker guitar or bass to Joe's Vintage Guitars. Send photos for a free appraisal and cash offer. Based in Mesa, buying across the US.`
  - local: `Sell your vintage Epiphone guitar to Joe. Send photos for a free appraisal and cash offer, with prepaid insured shipping. Based in Mesa, buying nationwide.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): FAQPage, Question, Question, Question, Question, Question, Question, Answer, Answer, Answer, Answer, Answer, Answer


## Summary

- Live headings: 23 | Local: 23
- Live images:   12 | Local: 12
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 10, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 10 vs 10
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, WebPage, Service, Country, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, WebPage, Service, Country, BreadcrumbList, ListItem, ListItem, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.
