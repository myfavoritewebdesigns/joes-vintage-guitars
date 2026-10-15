import type { GuildSection } from './guild-guides';

// Requested expansion of the approved Guild preview, October 15, 2026.
// Era ranges describe documented model applications, not universal changeover dates.
// Sources and photo-identification decisions: reports/guild-remodel/hardware-expansion.md.
type PartRow = [name: string, era: string, models: string, identification: string];
const table = (id: string, caption: string, rows: PartRow[]) => `
<p class="gu-table-hint">On a small screen, scroll the chart sideways to compare all columns.</p>
<div class="gu-table-scroll gu-parts-scroll" role="region" aria-label="${caption}: Comparison Table" tabindex="0">
<table class="gu-parts-table"><caption id="${id}">${caption}</caption>
<thead><tr><th scope="col">Part Name</th><th scope="col">Typical Era Or Dated Example</th><th scope="col">Guild Model Examples</th><th scope="col">What To Look For</th></tr></thead>
<tbody>${rows.map(r => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

export const guildHardwareSources = {
  franz: 'https://www.ggjaguar.com/x-50.htm',
  x150: 'https://www.ggjaguar.com/x-150.htm',
  dynasonic: 'https://www.ggjaguar.com/62sf-3.htm',
  bigsby: 'https://www.ggjaguar.com/sf-3.htm',
  catalog1966: 'https://acousticmusic.org/wp-content/uploads/2016/02/Guild-1966-Catalog.pdf',
  kolb: 'https://archive.12fret.com/instruments/guild-x-500-archtop-electric-sunburst-1960/',
  franzM75: 'https://retrofret.com/products/guild-m-75-aristocrat-thinline-hollow-body-electric-guitar-1959-9582',
  tremar: 'https://retrofret.com/products/guild-s-200-thunderbird-solid-body-electric-guitar-1964-9122',
  t100: 'https://ggjaguar.com/t-100d.htm',
  narrowSingle: 'https://www.musicpickups.com/non-dearmond-products/',
  x175: 'https://ggjaguar.com/76x-175.htm',
  x500: 'https://www.ggjaguar.com/x-500.htm',
  starfireFeatures: 'https://www.ggjaguar.com/sf-4%20features.htm',
  artistAward: 'https://www.ggjaguar.com/aa.htm',
  bass: 'https://www.vintageguitarandbass.com/guild/bass/1968_Starfire.php',
  bassReissue: 'https://guildguitars.com/store/product/98-041-2940/',
  catalog1978: 'https://www.gad.net/Blog/wp-content/uploads/2010/07/Guild-1978-Electric-Catalog.pdf',
  catalog1976: 'https://acousticmusic.org/wp-content/uploads/2016/02/Guild-1976-Catalog.pdf',
  dimarzio: 'https://www.gad.net/Blog/2020/02/25/guild-s300a-d-review/',
  polara: 'https://guildguitars.com/polara/kim-thayil/',
  modern: 'https://guildguitars.com/newark-street/starfire',
  t50: 'https://guildguitars.com/electric-guitars/t-50-slim',
  surfliner: 'https://guildguitars.com/surfliner/surfliner-deluxe/',
  acoustic: 'https://guildguitars.com/westerly/200-series/m-240e/',
};
const s = guildHardwareSources;

export const pickupEraSection: GuildSection = {
  id: 'pickup-types-by-era', title: 'Guild Pickup Names, Eras And Model Examples',
  html: `<p>Franz single coils, DeArmond Dynasonics, compact Guild Anti-Hum pickups and larger HB-1 humbuckers belong to different parts of Guild history. Start by identifying that family, then compare the particular model with its <a href="/guild-model-prefix-serial-number-charts/">serial-number record</a>. A pickup can narrow the comparison without supplying an exact build year.</p>
<p>The eras below describe documented examples and common applications. They aren’t first-and-last serial cutoffs. Models changed at different times, and special orders, leftover parts and later repairs can produce exceptions.</p>` + table('guild-pickup-chart', 'Vintage Guild Pickup Identification', [
    ['Franz Single Coil', '1950s to early 1960s; some models retained them longer.', 'X-50, X-150 and early X-175 archtops; early M-75 Aristocrat.', 'Broad plastic cover with a central row of adjustable pole screws. Joe’s early X-175 shows the white version. Compare the documented <a href="'+s.franz+'">1957 X-50</a>, <a href="'+s.franzM75+'">1959 M-75</a> and <a href="'+s.x150+'">1961 X-150</a>. A similar outline doesn’t make every example a Gibson P-90.'],
    ['DeArmond Dynasonic Single Coil', 'Early 1960s; documented on 1961 and 1962 Starfire III guitars.', 'Early Starfire III; compare the exact Starfire version before extending the date range.', 'Metal surround, contrasting face and six large adjustable magnetic poles. The <a href="'+s.dynasonic+'">1962 Starfire III inspection</a> identifies this type. It differs from the broad Franz cover and from Guild’s later humbuckers.'],
    ['Guild Anti-Hum Compact Humbucker / Little Bucker Family', '1960s; documented in Guild’s 1966 catalog.', 'Starfire, X-175 and CE-100D examples in the period catalog.', 'Compact metal-covered humbucker, smaller than the later HB-1. Compare Guild’s <a href="'+s.catalog1966+'">1966 Anti-Hum pickup illustration</a> with the later X-175 photo below. The later LB-1 Little Bucker revives this family; that modern product name alone doesn’t establish a vintage date.'],
    ['Guild Narrow “Mickey Mouse” Single Coil', 'Mid to late 1960s; the T-100D change is documented around 1965.', 'S-200 Thunderbird and T-100D Slim Jim examples.', 'Narrow face with six visible poles and projecting mounting ends. Joe’s Thunderbird has the white-covered type. <a href="'+s.narrowSingle+'">Pickup-component documentation</a> distinguishes it from DeArmond products. The <a href="'+s.t100+'">T-100D history</a> separates the earlier adjustable-pole design from this later type. “Frequency tested” was also marketing wording, not a dependable pickup model name.'],
    ['Guild HB-1 Humbucker', 'Around 1970 onward, with continued use on later Westerly instruments.', 'X-175, X-500, Starfire IV and S-100; also the S-300 in the 1978 catalog.', 'Larger metal-covered Guild humbucker with adjustable pole screws. Compare <a href="'+s.x175+'">the X-175 transition</a> and <a href="'+s.x500+'">a 1976 X-500</a>. Its dimensions and mounting arrangement matter when distinguishing it from the earlier compact pickup or a replacement.'],
    ['DiMarzio PAF And Super Distortion', 'Late 1970s factory option, documented in the 1978 catalog and 1979 price list.', 'S-300D and ash-body S-300AD.', 'PAF at the neck and Super Distortion at the bridge. The model suffix matters: the ordinary S-300 used Guild HB-1s. The <a href="'+s.dimarzio+'">S-300AD inspection and period price-list entries</a> document this pairing. A DiMarzio isn’t automatically an aftermarket change.'],
    ['Hagstrom Bi-Sonic Bass Single Coil', '1960s Starfire bass production; compare individual later examples.', 'Starfire Bass I and II.', 'Large rectangular assembly with four prominent magnetic poles and separate adjustment screws. A <a href="'+s.bass+'">documented 1968 Starfire Bass I</a> shows the pickup and its Hagstrom bridge. Modern <a href="'+s.bassReissue+'">Guild BS-1 BiSonic pickups</a> recreate this family and must be distinguished from the originals.'],
    ['DeArmond 1000 / 1100 Floating Pickup', 'Artist Award chronology: approximately 1961 to 1966 for the 1000; 1967 to 1984 for the 1100.', 'Artist Award archtops.', 'Suspended near the fingerboard end rather than installed in a routed top. <a href="'+s.artistAward+'">Artist Award research</a> distinguishes these from the later floating humbucker used in roughly 1985 to 1999 and the Benedetto version around 2000 to 2002. Check the pickup’s construction and attachment before assigning it to one of these periods.'],
  ]) + `<p>For a useful comparison, an early X-175 with Franz pickups belongs beside other early X-175s. A 1970s X-175 with HB-1s belongs beside that later specification. Neither should be dated by a modern X-175 reissue photograph. The <a href="/guild-electric-guitar-identification/#body-and-model">archtop identification guide</a> adds body, control and label details.</p>`,
};

export const modernPickupSection: GuildSection = {
  id: 'modern-pickup-names', title: 'LB-1, HB-2 And Modern Pickup Reissues',
  html: `<p>A pickup name can survive long after the original production period. Guild’s later LB-1 recreates the compact Little Bucker design. Modern Franz P-90 versions appear on instruments such as the <a href="${s.t50}">T-50 Slim</a>, while later Starfire Custom guitars use <a href="${s.modern}">DeArmond Dynasonic single coils</a>. Those specifications describe later guitars even though the designs have older roots.</p>
<p>HB-1 and HB-2 also need separating. Guild’s <a href="${s.polara}">Kim Thayil Polara</a> uses HB-1 pickups in a guitar inspired by his 1978 S-100. The <a href="${s.surfliner}">Surfliner Deluxe</a> pairs an HB-2 bridge humbucker with DeArmond Aerosonic single coils; Guild describes the HB-2 as a standard-size interpretation of its earlier humbucker sound. An Aerosonic isn’t the same pickup as a vintage Dynasonic.</p>
<p>Record the full model name, country marking and serial before assigning a date from any of these names. The <a href="/guild-vintage-vs-reissue/#newark-street">Newark St. and reissue guide</a> explains how revived model names fit the later production lines.</p>`,
};

export const tunerEraTable = table('guild-tuner-chart', 'Guild Tuner Names And Model Applications', [
  ['Waverly Open-Gear', '1950s example.', '1957 X-50.', 'Exposed gear and worm rather than a sealed housing. The <a href="'+s.franz+'">X-50 inspection</a> identifies Waverly machines. Open gears alone do not identify the maker.'],
  ['Grover Sta-Tite', 'Early 1960s examples; also offered on modern models.', '1961 X-150 and 1961 to 1962 Starfire III; later T-50 Slim.', 'Open-gear machines. Compare the <a href="'+s.x150+'">vintage X-150</a> with the <a href="'+s.t50+'">later T-50 specification</a>: the same family name spans separate production periods.'],
  ['Kolb Covered Tuners', '1960s examples, including an inspected 1960 X-500.', 'X-500 and some X-175 guitars.', 'The ornate covers and pearloid buttons in Joe’s X-500 photo are the Kolb pattern. Compare the German-made gold machines on this <a href="'+s.kolb+'">1960 X-500</a>. Inspect the mounting screws and footprint before calling a photographed set factory original.'],
  ['Grover Rotomatic', '1960s into early 1970s on X-175; later exceptions exist.', 'X-175 and some Starfire IV guitars.', 'Enclosed gear housing. <a href="'+s.x175+'">X-175 research</a> records the transition to Schaller machines. Use the housing, maker mark and mounting pattern together rather than dating by button shape.'],
  ['Schaller M6, Often Guild-Branded', 'Mid 1970s examples; approximately 1975 to 1981 on Starfire IV.', 'X-175, X-500 and Starfire IV.', 'Sealed machines, sometimes carrying Guild’s name. Compare a <a href="'+s.x500+'">1976 X-500</a> and the <a href="'+s.starfireFeatures+'">Starfire IV chronology</a>. These are model-specific windows, not a whole-company changeover.'],
  ['Gotoh And Schaller Mini', 'Early 1980s transitions.', 'Starfire IV and late original-run X-175.', '<a href="'+s.starfireFeatures+'">Starfire IV research</a> places Gotoh around 1981 and Schaller Mini around 1982 to 1986. X-175 changes differ, so don’t transfer those dates to every archtop.'],
  ['Grover Imperial / Super Rotomatic', 'Artist Award example: Imperial before the 1989 change to Super Rotomatic.', 'Artist Award.', 'Compare the complete tuner with the model history. <a href="'+s.artistAward+'">Artist Award documentation</a> records the change. Buttons are replaceable, so a stepped or ornate button alone is insufficient.'],
]);

export const hardwareEraTable = table('guild-bridge-chart', 'Guild Bridges And Tailpieces By Name', [
  ['Guild Harp Tailpiece', '1950s and 1960s archtops; continued through later production.', 'X-150, X-175, X-500 and Artist Award.', 'Recognizable open harp outline. A <a href="'+s.x150+'">1961 X-150</a> has the chrome version; the <a href="'+s.catalog1978+'#page=4">1978 catalog</a> specifies an engraved gold harp for X-500 and Artist Award. Modern reproductions also exist.'],
  ['Bigsby B-6 / Guild-Branded Bigsby B-2', 'Early Starfire III examples around 1960 to 1962.', 'Starfire III; other Guild models require their own specification check.', '<a href="'+s.bigsby+'">Starfire III research</a> documents the early B-6 and the switch to the Guild-branded assembly during 1961. Compare hinge, frame and bridge, rather than identifying the unit from the arm alone.'],
  ['Hagstrom Tremar Vibrato And Adjustable Bridge', '1960s original Thunderbird/Polara family.', 'S-200 Thunderbird and early-body S-100 Polara.', 'Surface-mounted spring-and-lever vibrato with a separate adjustable metal bridge. Compare Joe’s photo with this inspected <a href="'+s.tremar+'">1964 S-200 and its Hagstrom Tremar</a>. It differs from a Bigsby and from later S-100 stop-tail hardware.'],
  ['Guild No. 10 Adjusto-Matic Bridge', 'Documented in the 1978 electric catalog.', 'S-300, S-300D and S-60 family.', 'Six individually adjustable saddles. The <a href="'+s.catalog1978+'#page=7">S-300 specification</a> names the bridge and its string-spacing, height and intonation adjustments. Preserve that identification rather than calling every metal Guild bridge a generic Tune-o-matic.'],
  ['Guild Solid-Body / Compensated Stop Tailpiece', '1970s solid bodies; later Polara versions repeat the idea.', 'S-100 Polara and S-300 family.', 'Fixed metal tailpiece behind a separate bridge, with an angled string layout. Compare the <a href="'+s.catalog1978+'#page=7">period S-300</a> with the <a href="'+s.polara+'">later Kim Thayil Polara</a>. A fixed tailpiece is distinct from a vibrato even when both carry Guild branding.'],
  ['Floating Rosewood Or Ebony Archtop Bridge', 'Used across multiple decades.', 'Rosewood on X-175 and CE-100D; ebony on X-500 and Artist Award in 1978.', 'Wood base rests on the top, with height-adjustment wheels. The <a href="'+s.catalog1978+'#page=4">1978 archtop specifications</a> identify the woods. The saddle or entire bridge can be changed without dating the guitar’s body.'],
]);

export const acousticPickupSection: GuildSection = {
  id: 'acoustic-pickups', title: 'Barcus-Berry Hot-Dots And Later Acoustic Pickups',
  html: `<p>Guild’s <a href="${s.catalog1976}#page=20">1976 acoustic catalog, page A-19</a>, offered factory Barcus-Berry Hot-Dot transducers for flat-tops, 12-strings and classical guitars. The transducers sat inside the bridge, with a pearl dot visible on either side of the saddle. The installation included an endpin jack and external Hot-Dot preamp. That is a named period option worth checking on a 1970s acoustic; an output jack by itself does not identify it.</p>
<p>Later systems need their own model specifications. Guild lists a Fishman-designed GT-1 system for the modern M-240E Natural and a DeArmond Tone Boss magnetic soundhole pickup for the <a href="${s.acoustic}">M-240E Troubadour</a>. Neither system supplies a vintage build date merely because it is installed in an older guitar.</p>
<p>Photograph the bridge, jack and any visible pickup or preamp label, and include installation receipts when available. The <a href="/guild-acoustic-guitar-identification/">acoustic identification guide</a> covers the body and model evidence that should accompany the electronics.</p>`,
};
