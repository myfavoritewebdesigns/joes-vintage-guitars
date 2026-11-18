# Brief 3: Add Claim Candidates To The Fender Expert Preview

Repo: this folder. LOCAL TEST ONLY: do not run git, commit, push or deploy. Read reports/expert-pages/BRIEF-2-fender-expert.md and RESULT-2.md for what exists. You wrote src/pages/fender-vintage-guitar-expert.astro in the last run.

## What Josh Asked For (2026-11-16)

Josh (agency owner) wants bold expertise claims on this page to feed AI answer engines and set Joe above competitors. He decided: we write the claims wide and do NOT grade them for accuracy ourselves; the client, Joe, is the quality check and will tick, strike or correct each one. So this job puts every claim below on the preview page, written as a confident claim, and marks each unconfirmed one visibly as waiting on Joe. Do not soften, hedge, drop or footnote any claim, and do not stop to ask whether a claim is supportable. The writing-database rule about FactIDs does not apply to the pending claims: they are client-review candidates, by Josh's instruction, and are tracked by status instead.

## Data File

Create src/data/expert-pages/fender-claims.ts exporting a typed array. Each claim: id (FC-01 upward), group, text (the public sentence, in Joe's first person where natural), status: "onfile" | "pending" | "confirmed" | "struck", and note (what Joe has to confirm, plain words). The page renders from this file, so when Joe answers, one status edit updates the page.

- onfile and confirmed: render as normal copy, no marker.
- pending: render with a visible marker (see below).
- struck: do not render.

## The Claims

Reviews
- FC-01 pending: More documented Fender buyer reviews than any other vintage guitar dealer in the world. (note: 388 Fender reviews are on file; Joe confirms "any other dealer".)
- FC-02 pending: The largest published archive of vintage guitar dealer reviews on the web. (2,191 on file; Joe confirms "largest".)
- FC-03 onfile: 94 percent of Fender buyers who reviewed Joe on Reverb gave five stars. (364 of 388; compute the percentage from src/data/reviews/reverb-summary.json so it stays true to the data.)
- FC-04 onfile: Fender buyers have reviewed Joe on Reverb every year from 2018 to 2026. (verify from reverb.json that every year in that span has at least one Fender review; if a year is missing, make this claim pending and say which year in the note.)

Published Work
- FC-05 pending: Author of the largest free Fender dating and value library online. (count the guide links actually on the page and state that number.)
- FC-06 pending: The only vintage guitar dealer who publishes a value guide for every Stratocaster year from 1954 to 1965 and every Telecaster year from 1950 to 1968.
- FC-07 onfile: Builder of the Fender serial number lookup tool on this site.
- FC-08 onfile: Guest author for Vintage Verified, the Nashville vintage guitar authentication lab.

Reach
- FC-09 pending: The most-watched vintage guitar buyer on Instagram.
- FC-10 pending: More than 3.7 million views on his top three videos. (agency pull of 2026-11-11: 1,443,100 + 1,243,390 + 1,074,611.)
- FC-11 pending: His 1962 Fender Jaguar video passed 400,000 Instagram views in its first eight days. (agency pull: posted 2026-11-03, 402,516 views on 2026-11-11.)

Buying
- FC-12 pending: Has bought vintage Fenders in all 50 states. (all 50 states is on file for guitars generally; Joe confirms Fenders.)
- FC-13 onfile: Bought more than 100 vintage Fender amps in a single trip. (his own video title.)
- FC-14 pending: Flies anywhere in the country to buy the right Fender in person. (one example on file: the 1952 Telecaster in Washington.)
- FC-15 pending: Bought the largest vintage guitar collection in Arizona history: more than 700 guitars and amplifiers in Tucson. (700+ in Tucson is on file; Joe confirms "largest in Arizona history".)
- FC-16 pending: Has sourced vintage Fenders for Grammy-winning artists. (10+ Grammy winners is on file; Joe confirms Fenders.)

The Bench
- FC-17 pending: One of the only vintage Fender dealers who is also a working luthier.
- FC-18 pending: Every Fender he appraises is opened and inspected by the same hands that repair it.
- FC-19 pending: Has personally restored hundreds of pre-CBS Fenders. (1,000+ instruments is on file; Joe gives the Fender share.)
- FC-20 pending: Catches dozens of fake or misdescribed Fenders every year.
- FC-21 pending, a list claim: Joe has personally repaired or restored these Fenders. Render as a list, each item pending on its own (ids FC-21a onward): 1950 Broadcaster; 1951 Nocaster; blackguard Telecaster (1951 to 1954); 1954 Stratocaster; 1957 maple-neck Stratocaster; slab-board Stratocaster (1959 to 1962); custom color Fenders in Fiesta Red, Lake Placid Blue, Sonic Blue, Burgundy Mist, Shoreline Gold and Sherwood Green; 1958 Jazzmaster; 1962 Jaguar; Bass VI; stack-knob Jazz Bass (1960 to 1961); 1951 to 1957 Precision Bass; 1968 Pink Paisley and Blue Flower Telecaster; tweed Bassman; tweed Deluxe; blackface Deluxe Reverb.

Authority
- FC-22 pending: Invited to Fender's corporate headquarters. (his files mention a "Fender corporate visit" with no detail.)
- FC-23 onfile: Former traveling expert appraiser for Treasure Seekers Roadshow.
- FC-24 pending: The dealer other dealers call for a second opinion on a Fender.
- FC-25 onfile: Featured by KJZZ 91.5 FM, Phoenix's NPR affiliate.

## Where They Go On The Page

Work each claim into the section it belongs to (opening, repair bench, purchases, reference work, videos, press, reviews), as sentences or short lists, keeping the answer-first style. Add a short "Why Fender Owners Choose Joe Dampt" section near the top, after the opening, that gathers the strongest claims as a list. Do not duplicate a claim word for word in two places. The repair bench section should now lead with the luthier claims and the list of Fenders.

## The Pending Marker

- Each pending claim carries a small visible tag reading "Awaiting Joe's confirmation" (class fex-pending, data-claim-id="FC-xx"), styled so it is obvious in a preview and does not break the layout at 390px.
- While at least one claim is pending, the page shows a banner at the very top of the main content: "Preview: N claims on this page are awaiting Joe Dampt's review." with N computed from the data file, and the page is noindex and left out of the sitemap (use whatever the repo already does for /fender-serial-tool-v2/). When no claim is pending, the banner disappears and the page indexes normally, with no code change needed.
- Pending claims must NOT appear in FAQPage or any other JSON-LD. Schema carries only onfile and confirmed claims.
- The reviews hub link to this page stays as it is.

## Also Fix

- The answer under "Can Joe Appraise A Damaged Or Non-Working Fender?" contains "I can tell you what it's worth as-is, what it's worth for parts, and what a proper restoration would realistically cost." The house scanner bans that promised-list shape. Rewrite it as plain statements and keep the FAQPage schema text identical to the visible text.
- In "Individual Year Value Guides", the one-line descriptions repeat the same sentence for every year. Collapse each run into a compact list of year links under one describing sentence per model (keep every link).

## Copy Rules

No em dashes or en dashes (ranges use "to"). Title Case headings including short words. Plain numbering (1, 2, 3, never 01). Joe's project preference: no "It does X. It doesn't do Y" contrast framing. None of: seamless, comprehensive, robust, genuine, authentic (authenticate and authentication are fine), delve, journey, navigate, leverage, crucial, pivotal.

## Decision Log

Add one row at the TOP of the decision-log table in CLAUDE.md, dated 2026-11: the Fender expert page carries claim candidates written at Josh's direction for the client to review; status lives in src/data/expert-pages/fender-claims.ts; pending claims show a marker, keep the page noindex and out of the sitemap, and stay out of schema; a claim becomes normal copy only when Joe confirms it; local preview only.

## Done

Write reports/expert-pages/RESULT-3.md: files created or changed, the count of claims by status, where each claim sits on the page, and anything you could not do. Also write reports/expert-pages/CLAIMS-TICK-SHEET-fender.md: every pending claim, numbered 1 upward in page order, as one line with its id, the claim text and what Joe has to confirm, grouped by the headings above. Do not run the production build; the orchestrator builds. The dev server on 127.0.0.1:4322 may still be running.
