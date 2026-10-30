import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph, comparison } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';
const acoustic=comparison(ph.triumph46Body,'This is a Triumph, not a Broadway. Its added pickup illustrates why acoustic construction and electrical accessories are assessed separately.');
const sheraton=comparison(ph.sheratonCase,'This is a 1961 Sheraton, not a Broadway. It shows Kalamazoo Epiphone workmanship, but its double-cutaway center-block body differs from the full-depth hollow Broadway.');
const pickups=comparison(ph.sheratonBody,'The Sheraton’s mini-humbuckers illustrate the pickup family; its body and Bigsby are not a Broadway specification.');

export const broadwayGuides: ModelGuideData[] = [
{
 ...epiBase('broadway','value'), title:'Epiphone Broadway Value Guide',
 seoTitle:'Vintage Epiphone Broadway Value Guide: American Prices',
 description:'Compare vintage Epiphone Broadway values for New York acoustics, Regents and Kalamazoo electrics, with finish, pickup and condition checks for appraisal.',
 eyebrow:'Broadway Acoustic, Regent And Electric · American Models',
 dek:'The older carved-top Broadway and the Kalamazoo electric have different construction, condition questions and price rows.',
 hero:sheraton,
 glanceTitle:'Broadway Values To Compare',
 glance:[['1930s Walnut Acoustic',range('broadway',0)],['Postwar Sunburst Acoustic',range('broadway',3)],['Early Natural Electric',range('broadway',5)],['1968 To 1969 Sunburst Electric',range('broadway',14)]],
 secondaryActions:[{label:'Find Broadway Values',href:'#values'},{label:'Check Broadway Identity',href:'/post/epiphone-broadway-authentication-guide/'}],
 intro:{html:`<p>A vintage Epiphone Broadway is estimated at ${range('broadway',0)} for a 1931 to 1938 walnut-bodied acoustic, ${range('broadway',3)} for a postwar sunburst acoustic, and ${range('broadway',8)} for a 1960 to 1964 sunburst Kalamazoo electric. These figures assume excellent, original condition with the original case. The <a href="/post/epiphone-broadway-authentication-guide/">Broadway authentication guide</a> helps establish which construction and factory period apply before you compare prices.</p>`,calloutTitle:'Acoustic And Electric Are Separate Groups',callout:'A pickup added to an older acoustic Broadway doesn’t make it a Gibson-built electric Broadway. Start with the factory body and configuration.'},
 sections:[
 section('values','Broadway Prices By Era And Finish','Joe’s Estimated Market Values',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('broadway'),
  p('<p>The chart separates the older acoustic family from the Kalamazoo electric line. Match the construction, cutaway and finish before reading the range. A date supplied by a former owner may be a purchase date, so it should be checked against the guitar itself rather than carried directly into the appraisal.</p><p>Natural and cherry appear together in some later rows. That grouping doesn’t authenticate the finish on a particular guitar or prove that every listed color was offered throughout every year in the interval. A questionable cherry finish needs its own evidence. There is no separate 1970 estimate here, and a missing row should not be filled by extending a neighboring range.</p>')
 ]),
 section('acoustics','Pricing The Earlier Acoustic Broadway','Walnut, Maple And Regent Versions',[
  {type:'columns',items:[
   {title:'The New York Acoustic Groups',html:`<p>The 1931 to 1938 walnut-bodied group is ${range('broadway',0)}, while the 1939 to 1942 maple-bodied group is ${range('broadway',1)}. Photograph the back, sides and full instrument to support that distinction. A dark finish can make the wood difficult to judge from a single front view.</p><p>For these guitars, inspect the carved top, bridge and neck geometry before treating an attractive finish as excellent condition. A repaired crack or altered bridge may be difficult to see in a distant photograph. Include those details directly, along with any repair history you have.</p>`},
   {title:'Postwar And Philadelphia-Era Examples',html:`<p>The postwar natural acoustic estimate is ${range('broadway',2)}; sunburst non-cutaways are ${range('broadway',3)}. The acoustic Regent has its own cutaway row. Confirm the original outline rather than assuming that Regent is simply another name for any old Broadway.</p><p>The factory move belongs in the history, but a city printed on a label isn’t a stand-alone value premium. Preserve the wording and photograph it clearly. If the date remains approximate, describe the supported period and let the construction establish the correct comparison.</p>`}
  ]}
 ],'dark'),
 section('electric','Kalamazoo Broadway Values By Period','Original Pickups And Finish Matter',[
  {type:'timeline',items:[
   {date:'1958 To 1959',title:'The Early New York Pickup Electrics',html:`<p>The natural estimate is ${range('broadway',5)} and the sunburst estimate is ${range('broadway',6)}. These rows describe the early factory pickup configuration. A later pickup set should be disclosed even if it fits neatly and sounds good. Include removed parts and any record of the change.</p>`},
   {date:'1960 To 1965',title:'Verify The Guitar Within The Year Group',html:`<p>The 1960 to 1964 natural range is ${range('broadway',7)}, with sunburst at ${range('broadway',8)}. The 1965 rows are separate. A broad price interval doesn’t establish one pickup type for every guitar inside it; date and electrical details still need to agree.</p>`},
   {date:'1966 To 1969',title:'Later Kalamazoo Examples',html:`<p>The later sunburst ranges are ${range('broadway',12)} for 1966 to 1967 and ${range('broadway',14)} for 1968 to 1969. These are original-condition comparisons. A clean later Broadway can be easier to assess than an earlier instrument with unexplained repairs, so don’t let age eclipse the actual condition.</p>`}
  ]},
  p('<p>On a Kalamazoo Broadway, the neck, pickups, bridge and tailpiece each deserve close photographs. The body’s full depth can hide an electrical repair that is not apparent from the front. A technician’s invoice describing rewiring or a pickup rewind is more useful than a broad statement that the electronics were serviced.</p><p>Keep a claimed factory option separate from a later modification until it is supported. An unusual tailpiece, extra switch or rare-looking color should prompt documentation, not an automatic premium. Old parts can be installed later, and normal wear can develop around an alteration over decades.</p>')
 ],'dark'),
 {type:'photo-band',photos:[acoustic,pickups],quote:'Comparison photos: identify the acoustic body and the pickup family separately before choosing a Broadway price.'},
 section('condition','What Changes A Broadway Appraisal','Structure, Finish And Completeness',[
  {type:'cards',variant:'condition',items:[
   {title:'Neck Angle And Repairs',html:'<p>Show the string height, bridge adjustment and heel from the side. A headstock or heel repair remains relevant even when the guitar plays well. Explain whether the work is documented and stable, and photograph any added finish around the repaired area.</p>'},
   {title:'Pickups And Wiring',html:'<p>Original covers can conceal repaired or replaced coils. Include what is known and leave uncertain components unclaimed. The <a href="/do-replaced-pickups-hurt-guitar-value/">pickup replacement guide</a> explains why a working electrical system and an original system are different descriptions.</p>'},
   {title:'Refinish And Binding Work',html:'<p>Show stripped areas, overspray, replaced binding and repaired edges. Use <a href="/how-much-does-a-refinish-hurt-guitar-value/">the refinish guide</a> and <a href="/what-lowers-vintage-guitar-value/">the condition guide</a> to understand how those changes affect the comparison.</p>'}
  ]},
  p('<p>The Frequensator, bridge, pickguard and tuners contribute to completeness. If one has been replaced, explain whether the original survives. A part retained in the case may help document the guitar’s history, but it does not erase an extra hole or a modified mounting. Photograph the attachment points as well as the loose component.</p><p>Do not begin cosmetic restoration simply to make the instrument appear closer to the chart’s condition assumption. Read <a href="/should-i-restore-my-guitar-before-selling/">whether restoration should precede a sale</a> and get the guitar assessed as it stands. That allows a repair decision to address a known problem rather than an imagined increase in value.</p><p>Describe current playability accurately. If the guitar has not been tuned or checked recently, say that. A low action claim without a side photograph or inspection may leave a neck-angle question unanswered. An appraisal benefits from the limits of what you know as well as the positive details.</p>')
 ],'dark'),
 section('send','Photograph Your Broadway For An Appraisal','Show What The Name Leaves Unsaid',[
  {type:'checklist',items:[
   {title:'Document Construction And Identity',html:'<p>Send full front, back and side views, followed by the headstock and complete label. Include the serial at its original resolution. Show the body depth so a thin electric or another model cannot be mistaken for the Broadway being described.</p>'},
   {title:'Include Electrical And Structural Work',html:'<p>For an electric, show both pickups, all controls and the bridge area. For an acoustic with an added pickup, show the installation. Add close-ups of repaired cracks, joint work and any altered hardware mounts.</p>'},
   {title:'Add Case And Ownership Records',html:'<p>Photograph the case open and closed, and include any original parts stored inside. Receipts and identifiable family photographs can support the history. Separate a documented date from a recollection that has not been confirmed.</p>'}
  ]},
  p('<p>A replacement case may be useful for protection, but it should not be described as the original case assumed in the chart. Explain its fit and condition before discussing shipping. Keep fragile loose parts secured and labeled so their connection to the guitar is not lost.</p>'),
  p('<p>Keep a written list of the questions the photographs cannot answer. You may know that the guitar belonged to a relative while not knowing whether its pickups were ever repaired. You may have a receipt for fretwork but no finish history. State those limits directly. They let Joe distinguish an established fact from an area that needs inspection, and they prevent a missing detail from becoming an accidental all-original claim. The same approach is useful if you are comparing an inherited Broadway with a guitar advertised by someone else.</p>'),
  epiCTA('Ask Joe About Your Broadway','<p>Submit the photos for a <a href="/free-appraisal/">free appraisal</a>. If you want to sell, the <a href="/sell-my-epiphone-guitar/">Epiphone seller page</a> explains the next step. A purchase offer follows review of the actual instrument; the chart itself is not an offer.</p>')
 ],'light')
 ],
 faqs:[
 {q:'Were All American Broadways Electric?',a:'No. The older New York and Philadelphia family includes acoustics and acoustic Regents. The Kalamazoo electric needs a separate construction and price comparison.'},
 {q:'Does A Natural Finish Always Mean A Higher Value?',a:'Use the correct row and verify that the natural finish is original. A stripped sunburst should not be priced as an original natural example.'},
 {q:'Are The Early New York Pickup Broadways Included?',a:'Yes. The chart has natural and sunburst rows for 1958 to 1959 Kalamazoo electrics with the early New York pickup configuration.'},
 {q:'Can A Later Pickup Set Be Ignored If The Guitar Plays Well?',a:'No. Playability and originality are separate parts of the appraisal. Describe the replacement, any routing and whether the original components remain.'}
 ],
 closing:'<p>A Broadway estimate starts with the correct acoustic or electric identity, then accounts for finish, original equipment and repairs. Use the <a href="/post/epiphone-broadway-authentication-guide/">Broadway authentication guide</a> when the factory period or configuration is uncertain, and send Joe the complete evidence for an individual assessment.</p>'
},
{
 ...epiBase('broadway','authentication'), title:'Epiphone Broadway Authentication Guide',
 seoTitle:'Epiphone Broadway Authentication Guide: American Models',
 description:'Identify a vintage Epiphone Broadway by body construction, cutaway, pickups and markings, from New York acoustics to full-depth Kalamazoo electrics.',
 eyebrow:'New York, Philadelphia And Kalamazoo · Broadway Models',
 dek:'The Broadway changed from a carved acoustic archtop to a full-depth electric with laminated maple construction.',
 hero:sheraton,
 glanceTitle:'Broadway Identity At A Glance',
 glance:[['Older Acoustic','Carved spruce top; non-cutaway and Regent'],['Kalamazoo Electric','Laminated maple, full-depth cutaway'],['Factory Pickup Layout','Two pickups on the E252 electric'],['Important Comparison','A Broadway isn’t a thin center-block Sheraton']],
 secondaryActions:[{label:'Inspect Broadway Construction',href:'#identity'},{label:'Read Broadway Values',href:'/post/epiphone-broadway-value-guide/'}],
 intro:{html:'<p>Identify a vintage Epiphone Broadway by construction first. The older acoustic model has a carved spruce top, while the Kalamazoo E252 is a full-depth electric with laminated maple construction and two pickups. A familiar headstock or block fingerboard doesn’t distinguish those versions. The <a href="/post/epiphone-broadway-value-guide/">Broadway value guide</a> provides separate comparisons once the factory period and original configuration are established.</p>',calloutTitle:'A Deep Body Does Not Prove A Carved Acoustic Top',callout:'The Kalamazoo Broadway is a full-depth electric. Check the actual top construction rather than inferring it from the body’s thickness or arched shape.'},
 sections:[
 section('identity','Broadway Specifications That Separate The Families','Acoustic And Electric Construction',[
  {type:'table',caption:'Broadway Identification References',columns:['Version','Body And Neck','Hardware And Markings'],rows:[
   ['New York Acoustic','Carved spruce top; walnut and later maple body groups','Acoustic bridge, period Epiphone decoration and pre-Gibson label'],
   ['Broadway Regent','Acoustic cutaway within the older family','Cutaway construction must agree with the parent model'],
   ['Philadelphia-Era Acoustic','Large acoustic archtop documented in the 1954 catalog','Maple body, ornate headstock, block markers and Frequensator'],
   ['Kalamazoo E252 / E252N','Laminated maple top and back, maple rims, mahogany neck','Two pickups, separate volume and tone controls, selector and Frequensator'],
   ['1961 Electric Dimensions','17⅜-inch width, full-depth body and 25½-inch scale','Read the E252 shaded and E252N natural catalog designations']
  ]},
  p('<p>The body’s arch isn’t enough to identify how its top was made. Compare a visible edge or interior evidence where accessible, and have uncertain construction inspected. Don’t remove a pickup or force a mirror through an f-hole merely to complete an initial appraisal request. The first photographs can establish which questions need closer work.</p>')
 ]),
 section('history','The Broadway Before Kalamazoo','New York Acoustics And Philadelphia Continuation',[
  {type:'columns',items:[
   {title:'The New York Acoustic Model',html:'<p>The Broadway dates to the original 1931 Epiphone archtop line. Its early body size and appointments developed through the 1930s, with walnut and later maple constructions represented in the model history. A later maple Broadway should not be used as the universal visual template for an early walnut example.</p><p>Look at the body dimensions, headstock decoration, fingerboard markers and tailpiece together. Replaced inlay or a later tailpiece can make one clue misleading. The acoustic identity also remains intact when a removable pickup has been fitted, provided the underlying model and alteration are described separately.</p>'},
   {title:'Philadelphia And The Acoustic Regent',html:'<p>The 1954 catalog documents the Broadway as a carved spruce-top acoustic with maple body and elaborate appointments. The Broadway Regent is the cutaway version of the acoustic Broadway. It should not be confused with the later factory electric simply because both guitars can have a cutaway and an Epiphone tailpiece.</p><p>Keep the factory chronology in order: the older New York and Philadelphia instruments precede CMI’s 1957 purchase and the start of Kalamazoo production in 1958. The <a href="/post/epiphone-sheraton-history-value/">Sheraton history</a> documents that factory transition. A printed address on a surviving label supports the record without necessarily establishing a precise build year.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[acoustic,pickups],quote:'These comparison instruments show an acoustic with an accessory pickup and the later Epiphone mini-humbucker family.'},
 section('timeline','Broadway Changes Across The American Years','Follow Construction And Electronics',[
  {type:'timeline',items:[
   {date:'1931 Through The 1930s',title:'The Acoustic Broadway Develops',html:'<p>Use the appropriate early catalog for size and ornamentation. The change from walnut to maple belongs to the older acoustic history, not the later switch from carved acoustic construction to a laminated electric body.</p>'},
   {date:'Postwar And Philadelphia Years',title:'Non-Cutaway And Regent Acoustics',html:'<p>The large acoustic remains the reference, with the Regent identifying a cutaway option. Inspect the original rim and binding around the cutaway rather than treating a seller’s terminology as proof of the factory version.</p>'},
   {date:'1958 To The Early 1960s',title:'The Kalamazoo Electric Broadway',html:'<p>The Gibson-built Broadway uses a full-depth electric body. Early instruments carry New York pickups; the Gibson mini-humbucker transition follows the broader Epiphone electric chronology. A broad year group should not be mistaken for a uniform pickup specification.</p>'},
   {date:'1961 Catalog',title:'The E252 Specification Is Explicit',html:'<p>The catalog describes two adjustable-pole pickups, independent tone and volume controls, toggle selection and laminated maple construction. Read those details as a set. A three-pickup layout or a center-block double-cutaway body points to another model or substantial alteration.</p>'},
   {date:'Later 1960s',title:'Check The Individual Finish And Features',html:'<p>Continue to compare the serial, neck and hardware rather than dating a Broadway from its color. Natural, sunburst and cherry descriptions need finish evidence. This guide doesn’t assign an exact factory color schedule from an ambiguous year grouping.</p>'}
  ]}
 ],'dark'),
 section('kalamazoo','How Gibson Changed The Broadway','Full-Depth Laminated Construction',[
  p('<p>The 1961 E252 catalog description specifies laminated arched maple for both top and back, with maple rims and a mahogany neck. The width is 17⅜ inches, and the full-depth body is substantially deeper than the Zephyr thinline shown beside it. The long 25½-inch scale also distinguishes it from several smaller Gibson and Epiphone electric archtops.</p><p>This is a construction change from the older carved spruce-top acoustic Broadway. Don’t describe the Kalamazoo electric as a carved acoustic merely because the name continued. A fitted pickup on an older acoustic and a factory E252 are different manufacturing configurations, even when both can be played through an amplifier.</p>'),
  {type:'columns',items:[
   {title:'Pickup And Control Checks',html:'<p>The E252 has two factory pickups with separate volume and tone controls and a selector for either or both. Early New York single coils give way to Gibson-made mini-humbuckers in the electric line. Inspect the actual pickup construction, mounting and wiring before assigning the transition from a serial alone.</p><p>A mini-humbucker can retain an old cover while the coil or internal parts have changed. Keep technician documentation for repairs. Epiphone mini-humbuckers and Firebird pickups are different internal designs; don’t treat them as equivalent because both use narrow metal covers. A routed full-size replacement is another alteration that needs to be recorded.</p>'},
   {title:'Logo, Neck And Frequensator',html:'<p>The Epiphone headstock decoration, bound rosewood fingerboard with block markers and Frequensator belong in the model comparison. The 1961 catalog also specifies nickel-plated metalwork and a rosewood bridge. A replacement bridge or tailpiece may be practical, but it should not be silently treated as the factory equipment.</p><p>Photograph the heel, truss-rod cover, logo and tuner backs. A headstock repair can affect the serial area, and changed tuners can leave extra holes. Record those findings independently of the broader conclusion that the guitar is a Kalamazoo Broadway.</p>'}
  ]},
  p('<p>For a Gibson-family comparison, the ES-5 demonstrates a full-depth laminated electric archtop with a long scale. The <a href="/post/gibson-es-5-switchmaster-history-value/">ES-5 guide</a> documents those features. Its three-pickup circuit, maple neck and hardware are not the Broadway specification. The 1961 Broadway catalog specifies a 3⅜-inch body depth, measured at the rim. Its full-depth body separates it from the thinner Sheraton comparison shown here.</p><p>The Sheraton comparison photographs show a different distinction. Its thin double-cutaway center-block body does not become a Broadway because it carries the same pickup family. Use the photographs to compare visible mini-humbuckers, while taking the Broadway body specification from the original catalog and the guitar under examination.</p>')
 ],'dark'),
 section('factory-details','Physical Differences Across The Factory Move','Width, Neck And Decoration',[
  {type:'columns',items:[
   {title:'Read The Older Body And Neck As A Set',html:'<p>The New York model research records a smaller early Broadway and the later larger body, with walnut giving way to maple before the postwar instruments. Those changes mean a measurement should be tied to a period rather than treated as one permanent Broadway dimension. A late acoustic photograph cannot supply every feature expected on a 1931 guitar.</p><p>The 1954 acoustic catalog describes a laminated neck and carved spruce top. The Kalamazoo electric catalog instead specifies a mahogany neck and laminated maple top. Keep the distinction between a laminated neck and a laminated top clear: they describe different parts of the instrument and should not be combined into a vague claim that the entire guitar is laminated.</p>'},
   {title:'Keep Ornamentation Attached To The Correct Model',html:'<p>Block fingerboard markers occur on the Broadway, but blocks alone cannot distinguish it from every other Epiphone archtop. Compare their pattern with the headstock design, body binding and model label. A replaced fingerboard or restored inlay can retain the general appearance while removing some of the original dating evidence.</p><p>The Frequensator is another family feature rather than a Broadway-only identifier. Record the whole assembly and its attachment to the rim. A correct-looking tailpiece does not authenticate the body, and a replacement tailpiece does not erase an otherwise supported Broadway identity. Describe each conclusion at the level the evidence permits.</p>'}
  ]}
 ]),
 section('variants','Keep Broadway Variants And Alterations Separate','Cutaway, Finish And Pickup Installation',[
  {type:'cards',variant:'models',items:[
   {title:'Acoustic Non-Cutaway',html:'<p>Confirm the uninterrupted upper bout and acoustic construction. A floating or pickguard-mounted pickup should be described as an accessory. Inspect any added controls or jack separately so an amplified acoustic is not mistaken for the factory electric branch.</p>'},
   {title:'Acoustic Regent',html:'<p>Check that the cutaway, binding and rim are consistent with the period acoustic design. A repaired area around the cutaway is not automatically a conversion, but it needs documentation. Preserve the distinction between the original body and later work.</p>'},
   {title:'Kalamazoo Electric E252',html:'<p>The deep laminated body, two pickup positions and complete control layout establish the electrical branch. Model marking, scale and Epiphone appointments should corroborate it. A single correct mini-humbucker does not identify a guitar whose body and label point elsewhere.</p>'},
   {title:'Natural, Shaded And Claimed Cherry Finishes',html:'<p>The 1961 catalog explicitly lists natural and shaded versions. For another claimed finish, inspect the surface and seek documentation rather than dating it by color alone. Wear, fading, overspray and stripping can change the appearance substantially without changing the original factory model.</p>'}
  ]}
 ]),
 section('archive','Broadway And Comparison Photographs','Keep The Actual Models Named',[
  {type:'archive',items:[
   {label:'Older Acoustic Broadway',title:'1947 Epiphone Broadway',html:'<p>Joe’s customer archive supplies these views of a 1947 Broadway. The non-cutaway acoustic body, block fingerboard markers, floating bridge and Frequensator are visible, with a side view showing the deep rim. The surviving files are small, so they support the overall configuration rather than close inspection of finish or repairs. No readable serial is shown, and the archive year is not presented as a decoded number.</p>',photos:[ph.broadwayFront,ph.broadwayBody,ph.broadwaySide]},
   {label:'Kalamazoo Pickup Comparison',title:'1961 Sheraton With Mini-Humbuckers',html:'<p>The body view shows two mini-humbuckers and a Bigsby on Joe’s Sheraton. It is useful for recognizing the visible pickup family, but its body construction, tailpiece and decorative package should not be copied into a Broadway description. The caption names the actual guitar so the comparison stays limited.</p>',photos:[sheraton,pickups]},
   {label:'Older Acoustic Comparison',title:'1946 Triumph With An Added DeArmond',html:'<p>This Triumph illustrates an older acoustic instrument carrying an electrical accessory. It is not a Broadway specimen. Its label, dimensions and trim must not be treated as Broadway evidence, but the photograph makes the distinction between an accessory and a factory electric body concrete.</p>',photos:[acoustic]}
  ]}
 ],'archive'),
 section('dating','Read Broadway Labels And Serials In Context','Different Factories, Different References',[
  p("<p>Early Kalamazoo hollowbodies need a separate first check: an A followed by four digits on the interior label belongs to Epiphone’s early A-series, not the similarly named Gibson A-prefix chart. Photograph the whole label and keep any factory order number separate. A model code is not a serial number. Later impressed numbers can be compared with the shared Gibson system, with the guitar’s construction used to check the result.</p>"),
  p('<p>For a pre-Gibson Broadway, record the complete label and compare the guitar with the relevant acoustic catalog. Model-batch numbering and incomplete surviving factory records limit exact year claims. A serial estimate should be supported by body construction and appointments rather than repeated as a guaranteed completion date.</p><p>A Kalamazoo Broadway belongs in the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial-number system</a>. Photograph both the serial area and any internal model marking. Read prefixes and faint characters carefully, but leave uncertain digits uncertain. A plausible lookup result is only one part of the identification.</p><p>Ask whether the neck, label or finish has been repaired or replaced. An altered serial area can make an exact date impossible from photographs. That does not mean the whole instrument is unidentified; a supported model and production interval can still be a useful conclusion while the missing evidence is investigated.</p>')
 ]),
 section('checklist','A Kalamazoo Broadway Authentication Checklist','Confirm The E252 As A Whole',[
  {type:'checklist',items:[
   {title:'Measure The Full-Depth Body',html:'<p>Record the lower-bout width and rim depth, and show the single cutaway. Separate it from a thinline Zephyr or a double-cutaway Sheraton before interpreting shared hardware.</p>'},
   {title:'Check Laminated Electric Construction',html:'<p>Use accessible edge and interior evidence to establish the body type. A deep rim does not prove a carved spruce top. Leave an uncertain construction question for hands-on inspection instead of guessing from the sunburst.</p>'},
   {title:'Document Both Pickups And All Controls',html:'<p>Show the mounting, selector and four knobs together. Note mismatched parts and known rewiring. A changed cover or guard can conceal work, so retain any technician photographs of the original openings.</p>'},
   {title:'Compare Neck, Tailpiece And Markings',html:'<p>Photograph the headstock, fingerboard, heel, bridge and Frequensator attachment. Read the serial and model evidence alongside those features, using the appropriate Gibson reference for the Kalamazoo period.</p>'},
   {title:'Separate Repairs From Model Identity',html:'<p>List repaired breaks, finish work and replaced components individually. An identifiable Broadway may still have substantial alterations. Avoid an all-original claim unless the evidence supports each part of it.</p>'}
  ]}
 ],'light'),
 section('later','Later Broadways And Repaired American Examples','Scope And Originality',[
  p('<p>Japanese, Korean and Chinese Broadways, Elitist instruments and signature versions belong to later production programs. A familiar outline or old-style logo does not make them Kalamazoo originals. Their complete serial, country marking, label and factory paperwork should establish their actual series.</p><p>For an American Broadway, repairs should remain visible in the description even after the model is authenticated. The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> and <a href="/post/epiphone-broadway-value-guide/">Broadway value guide</a> address the financial consequences. The identification should explain what the guitar was built as and what is known to have changed.</p>'),
  epiCTA('Have Joe Check Your Broadway Evidence','<p>Send the full body, label, serial and pickup details for a <a href="/free-appraisal/">free appraisal</a>. Use <a href="/sell-my-epiphone-guitar/">Sell My Epiphone</a> to discuss a purchase offer after the configuration and condition are clear.</p>')
 ]),
 section('references','Broadway Research References','Catalogs And House Comparisons',[
  {type:'sources',items:[
   source('Epiphone Serialization Reference','https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf','Epiphone section, page 1071: the early hollowbody A-label sequence differs from Gibson’s A-prefix series; later impressed numbers require feature checks.'),
   source('New York Epiphone Model Research','https://wiedler.ch/nyepireg/models.html','Early Broadway development, materials and acoustic family identification.'),
   source('1954 Epiphone Catalog','https://wiedler.ch/nyepireg/docs/1954_catalog.pdf','Philadelphia-era acoustic Broadway construction and appointments.'),
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','Kalamazoo E252 construction, dimensions, controls, hardware and finish designations.'),
   source('1964 Epiphone Catalog, Page 2','https://www.vintageguitarandbass.com/epiphone/catalogues/1964_2.php','Original full-depth Broadway illustration within the Kalamazoo electric line.'),
   source('JVG Sheraton History','/post/epiphone-sheraton-history-value/','House factory chronology, pickup transition and center-block comparison.'),
   source('JVG ES-5 History','/post/gibson-es-5-switchmaster-history-value/','Limited comparison of deep laminated electric construction and long scale; no production totals transferred.'),
   source('Epiphone Serial Research','https://wiedler.ch/nyepireg/research.html','Limits of precise pre-Gibson serial dating.')
  ]}
 ])
 ],
 faqs:[
 {q:'Does A Kalamazoo Broadway Have A Carved Spruce Top?',a:'The 1961 E252 catalog specifies laminated maple top and back. Do not transfer the older acoustic Broadway’s carved spruce construction to the Kalamazoo electric.'},
 {q:'Is A Broadway A Sheraton With A Deeper Body?',a:'They are distinct models. The Broadway is a full-depth single-cutaway hollow electric; the Sheraton uses a thin double-cutaway center-block design.'},
 {q:'Did Early Kalamazoo Broadways Use New York Pickups?',a:'Yes. The early electric period includes New York single coils before the Gibson mini-humbucker transition. Check the actual components and supporting date evidence.'},
 {q:'Can A Refinished Broadway Still Be An Authentic American Guitar?',a:'Yes. Model authenticity and finish originality are separate findings. Identify the guitar and disclose the refinish and other repairs individually.'}
 ],
 closing:'<p>Let construction establish the Broadway family, then reconcile its pickups, appointments and markings. Keep an added accessory or repair separate from the factory identity. The <a href="/post/epiphone-broadway-value-guide/">Broadway value guide</a> provides the next comparison once those details agree.</p>'
}
];
