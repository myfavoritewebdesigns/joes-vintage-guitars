# Independent final read

Reviewed November 6, 2026. Client: Joe’s Vintage Guitars, Mesa, Arizona. Intended reader: an owner or buyer identifying a vintage Martin.

I first read only the two supplied rendered-text drafts, without authoring instructions or earlier reviews. I then checked selected factual claims against factory material, original archival research, and firsthand instrument descriptions. This is a text/content verdict, not a visual-layout inspection or a fresh authentication of the photographed guitars.

| Draft | Verdict |
| --- | --- |
| Martin 000-28 authentication guide | **SHIP** |
| Martin 15 and 17 series authentication guide | **FIX** — resolve the 2-15 model-table entry |

## Martin 000-28: SHIP

The guide answers the practical questions an owner or buyer brings: how body size differs from style, why 1934 needs a scale measurement, what the serial establishes, and how repairs affect originality without erasing the guitar’s identity. The progression from body and scale to materials, interior construction, stamps and disclosed repairs is coherent. The examples make the advice concrete. Labeling the 0-21 and counterfeit D-45 as limited comparisons prevents those photographs from being mistaken for direct 000-28 authentication references.

No blocking factual issue found. The highest-impact checks hold up:

- Martin’s own museum account places the OM-to-000 naming change and the later long-to-short-scale change in 1934. [Martin museum account](https://www.martinguitar.com/blog-categories/from-the-factory/blog-061026-the-1933-martin-OM-45-that-went-to-war.html)
- Greig Hutton’s original factory-record research identifies serial 57851 as a short-scale 1934 000-28 from a batch with T-frets and steel T-bar reinforcement. The draft appropriately avoids extending one batch’s features to the whole year. [Individual instrument research](https://theguitarphile.com/1934-martin-000-28-guitar-serial-number-57851/)
- Martin’s annual endpoints place 113035 in 1950 and 204220 in 1965, matching the draft’s arithmetic and its explicit correction of the older archive label. [Factory serial table](https://www.martinguitar.com/support-serial-number-lookup.html)

Optional editorial improvement: a few repeated instructions to photograph, check and preserve uncertainty could be trimmed. This is polish, not a reason to hold publication.

## Martin 15 and 17: FIX

The draft otherwise works well. It clearly separates familiar all-mahogany Style 17 guitars from earlier spruce-top versions, explains the spruce-top 0-16NY, distinguishes maker/model from repair condition, and attributes the 1951 00-17’s earlier factory work to the owner’s report. The readable serial examples and specific repair comparisons are useful.

**Blocking factual concern: the model table presents the Martin 2-15 as an all-mahogany guitar.** Under “Original All-Mahogany Models And Related Instruments,” the row reads: “2-15 / 1939 to 1964 source range / Small all-mahogany model.”

The documented Martin 2-15 is a carved-top mandolin. RetroFret’s firsthand record of its 1949 example, serial 19203, identifies a spruce top and maple back and sides, with photographs of the actual instrument. This directly conflicts with the draft’s table classification. [RetroFret’s 1949 Martin 2-15](https://retrofret.com/products/c-f-martin-2-15-carved-top-mandolin-1949-11659)

Required correction: remove the 2-15 from this all-mahogany guitar table, or supply direct evidence of a distinct guitar model and describe that distinction explicitly. Check the cited annual guide’s page/column context before carrying this entry into any companion price table. A date range attributed to a source does not establish the instrument family. The other small numbered sizes can remain; the 2-17 already supplies a legitimate Size 2 guitar example.

Other checked details are supported:

- Martin’s serial endpoints place 143500 in 1955 and 184931 in 1962. [Factory serial table](https://www.martinguitar.com/support-serial-number-lookup.html)
- Robert Corwin’s original collection research documents early spruce/rosewood Style 17 construction, the all-mahogany 2-17 from 1922, paired Style 17 dots, spruce-top special 0-17S examples, and Fiberloid 0-15 headstock veneers. [Illustrated instrument research](https://vintagemartin.com/styles15_17_18.html)

Optional improvement after the correction: a short, period-specific comparison of ordinary Style 15 and Style 17 fingerboard markers and finish would help readers distinguish two superficially similar guitars faster. The present text is cautious and coherent, but that section often says what to inspect without immediately stating the comparison result.

## Review boundary

No article was edited or published. I did not independently validate every rare production span against the print annual guide, inspect the image pixels, or test the outgoing links. The FIX verdict rests on the concrete 2-15 classification concern, not on those unperformed checks. After that entry is corrected or convincingly documented, I found no other blocking reader-usefulness or coherence issue in the second draft.

## Targeted resolution after correction — November 6, 2026

**Updated verdict: SHIP for both identification guides.** The earlier FIX finding is retained above as the review history; its publication blocker is now resolved in the corrected source.

I inspected `src/data/model-guides/martin-15-17-series.ts`, `src/data/model-guides/martin-values.json`, and `reports/martin-small-body/value-chart-check.json`. The 2-15 entry is absent from the identification table and shared public value data. The value-guide comparison sentence now uses the documented 2-17. The remaining table still gives useful coverage of smaller guitar sizes through the 2-17, 1-17 and 5-17.

The lead reviewer reported directly reopening the authorized 2026 book, page 287, and finding that it explicitly lists a 2-15 under GUITARS as an all-mahogany 1939–1964 instrument. The correction therefore addresses an unresolved source conflict, not a transcription error. I also inspected the appended “2-15 Source Conflict And Omission” explanation in `reports/martin-small-body/pr2/review-notes.md`. Omitting the optional disputed model is an appropriate resolution without claiming to have settled whether a distinct guitar version existed.

This targeted recheck verifies the corrected source and removes my sole blocking content finding. The build was still underway when the recheck was requested; this addendum does not claim a separate visual or deployment check.
