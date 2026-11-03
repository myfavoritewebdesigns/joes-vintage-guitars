import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph, comparison } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';
const sheraton=comparison(ph.sheratonCase,'This is a 1961 Sheraton, not a Windsor. Its Kalamazoo workmanship is a period comparison; the double-cutaway center-block body differs.');
const minis=comparison(ph.sheratonBody,'The Sheraton shows the mini-humbucker family. Its Bigsby and body are not Windsor specifications.');
const newYork=comparison(ph.deluxeBody,'This older Zephyr De Luxe Regent shows gold New York pickups. It is not a Windsor and does not establish Windsor body or control specifications.');

export const windsorGuides: ModelGuideData[] = [
{
 ...epiBase('windsor','value'),title:'Epiphone Windsor Value Guide',
 seoTitle:'Vintage Epiphone Windsor Value Guide: 1959 To 1962',
 description:'Compare vintage Epiphone Windsor prices by finish, pickup count and New York pickup or mini-humbucker configuration, with condition checks for appraisal.',
 eyebrow:'Kalamazoo Windsor · Natural And Sunburst · Single And Double',
 dek:'The Windsor chart separates early New York pickups from later mini-humbuckers, then matches the original finish and pickup count.',
 hero:sheraton,glanceTitle:'Windsor Price Comparisons',
 glance:[['Early Natural, One Pickup',range('windsor',0)],['Early Natural, Two Pickups',range('windsor',4)],['Later Sunburst, One Pickup',range('windsor',3)],['Later Natural, Two Pickups',range('windsor',6)]],
 secondaryActions:[{label:'See Windsor Ranges',href:'#values'},{label:'Authenticate A Windsor',href:'/post/epiphone-windsor-authentication-guide/'}],
 intro:{html:`<p>A vintage Epiphone Windsor is estimated at ${range('windsor',0)} for an early natural single-pickup example, ${range('windsor',4)} for an early natural double, and ${range('windsor',3)} for a later sunburst single with a mini-humbucker. These are excellent, original-condition estimates with the original case. Use the <a href="/post/epiphone-windsor-authentication-guide/">Windsor authentication guide</a> to establish the factory pickup type, count and finish before selecting a row.</p>`,calloutTitle:'The Windsor’s Short Run Does Not Set The Price Alone',callout:'A less familiar model still needs a supported configuration and condition assessment. Scarcity claims can’t replace evidence of original pickups, finish and structural condition.'},
 sections:[
 section('values','Windsor Values By Finish And Pickup Type','Eight Original-Configuration Comparisons',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('windsor'),
  p('<p>The chart uses 1959 to 1962 valuation groups. Those ranges do not establish a factory shipment in every year, and a proposed 1962 date needs the same serial and physical checks as an earlier guitar. Each row combines a finish, pickup count and pickup family; all those details need to agree before the estimate becomes a useful comparison.</p><p>These are market estimates rather than standing purchase offers. An offer follows review of the individual instrument. A guitar with replaced electronics, repaired wood or uncertain finish should not be presented as the excellent original assumed by the table merely because its model and year are correct.</p>')
 ]),
 section('early','Early Windsors With New York Pickups','Single And Double Versions',[
  {type:'columns',items:[
   {title:'The Single-Pickup Comparison',html:`<p>For 1959 to 1960, the natural single-pickup range is ${range('windsor',0)}, and sunburst is ${range('windsor',1)}. These rows require the early New York pickup configuration. A later mini-humbucker installed in an early body should be disclosed rather than silently counted as the original equipment.</p><p>Photograph the pickup mount and controls together. A single pickup is a legitimate factory version, not necessarily evidence of a missing bridge pickup. Filled holes or a changed guard can complicate the identification, so include any known electrical work.</p>`},
   {title:'The Two-Pickup Comparison',html:`<p>The early natural double is estimated at ${range('windsor',4)}, with sunburst at ${range('windsor',5)}. The factory double-pickup identity matters. Installing a second pickup in a single doesn’t create an original double or automatically justify the corresponding range.</p><p>Keep removed components with the guitar and photograph them separately. A loose pickup needs its own identification, but it may help document a change. Don’t reinstall it just for a photograph if that requires disturbing fragile wiring or altering the existing mounting.</p>`}
  ]}
 ],'dark'),
 section('later','Later Windsor Prices With Mini-Humbuckers','The 1961 To 1962 Groups',[
  {type:'cards',variant:'rank',items:[
   {title:'Natural Single',html:`<p>The later natural single-pickup estimate is ${range('windsor',2)}. Confirm the mini-humbucker configuration and original natural finish independently. A stripped sunburst isn’t the same condition comparison.</p>`},
   {title:'Sunburst Single',html:`<p>The sunburst single is ${range('windsor',3)}. Inspect the pickup, finish and neck joint rather than treating this as a catch-all row for any Windsor with one metal-covered pickup.</p>`},
   {title:'Factory Double',html:`<p>The natural double is ${range('windsor',6)}, and sunburst is ${range('windsor',7)}. Both pickups, the selector and the control layout should be documented before claiming an original double.</p>`}
  ]},
  p('<p>A broad pickup transition should not be used as a substitute for inspecting the actual guitar. Old New York pickups can be moved to another body, and a mini-humbucker can be rewound without changing the cover. The appraisal needs the supported factory configuration and a separate account of later work.</p><p>When the date is uncertain, send the serial and physical features together. Do not choose the earlier price group simply because one part appears old. A mixed set of components may explain the uncertainty more accurately than a firm year attached to an incomplete photograph.</p>')
 ]),
 section('finish','Original Finish And Gold Hardware','What The Photographs Need To Show',[
  p('<p>The chart separates natural and sunburst because those are different original finish comparisons. Show the whole guitar in even light, including the rim, back, neck and headstock. A front-only image can miss stripping, overspray or a repaired heel that changes the condition assessment.</p><p>The Windsor’s gold-plated equipment should be documented before it is polished or replaced. Wear and changed parts are different questions. A worn period tailpiece may retain useful evidence that a bright new replacement lacks, so include close photographs and any known history instead of judging originality by shine.</p>'),
  p('<p>If the finish has been changed, use <a href="/how-much-does-a-refinish-hurt-guitar-value/">the refinish guide</a> and describe the work directly. The guitar can still be identified as a Windsor while requiring a different value assessment. A finish color that resembles a catalog option does not erase an earlier refinish.</p>')
 ],'dark'),
 {type:'photo-band',photos:[newYork,minis],quote:'Comparison pickups on different Epiphones: the early New York and later mini-humbucker families must not be priced as interchangeable equipment.'},
 section('condition','Assess Windsor Repairs Before Ranking The Guitar','Structure And Electrical Originality',[
  {type:'cards',variant:'condition',items:[
   {title:'Headstock, Heel And Neck Angle',html:'<p>Photograph repaired breaks and the bridge adjustment from the side. A structurally sound repair and an unrepaired problem need different descriptions. Include paperwork that explains the work and its scope.</p>'},
   {title:'Pickup And Harness Work',html:'<p>Record rewinds, replacements and added controls. The <a href="/do-replaced-pickups-hurt-guitar-value/">pickup value guide</a> explains why an attractive cover or working circuit does not establish original electronics.</p>'},
   {title:'Missing Or Changed Hardware',html:'<p>Show the guard, bridge, tailpiece and tuner backs. List extra holes or missing parts rather than assuming they are minor. Use the <a href="/what-lowers-vintage-guitar-value/">general condition guide</a> to organize the findings.</p>'}
  ]},
  p('<p>Do not apply a separate guessed discount to every changed piece and add the results together. A pickup conversion may include the same routing, wiring and guard change, so those observations belong in one coherent assessment. Joe needs the complete repair history to judge the instrument, not a spreadsheet of unsupported deductions.</p><p>Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> before commissioning cosmetic work. An untouched problem can be described and assessed. Work undertaken solely to make the guitar look original may remove evidence while failing to recover its cost.</p>')
 ]),
 section('comparison','Compare A Windsor With The Correct Model','Avoid Borrowed Prices And Scarcity Claims',[
  p('<p>A Sorrento may resemble a Windsor in a small photograph, but its model-specific rows should not replace the Windsor chart. Likewise, a gold pickup or ornate Epiphone headstock does not make a guitar a Sheraton or Zephyr De Luxe. Confirm the body, neck and complete model identity first.</p><p>Do not use an unverified production total to support a premium. A short documented run is a historical observation, while a claim about how many survive is a different assertion. If you have factory paperwork or original sales documents, include them for review without assuming that they establish a particular dollar increase.</p><p>For an inherited guitar, separate the ownership story from the manufacturing evidence. A relative may have bought it after production ended or received it used. The story is worth preserving, but the date, pickup configuration and repair history still need to be checked against the instrument itself.</p>')
 ]),
 section('appraisal','Build A Useful Windsor Photo Set','Include The Uncertain Details',[
  {type:'checklist',items:[
   {title:'Photograph The Whole Guitar And Case',html:'<p>Include front, back and side views with the neck attached in the frame. Show the case open and closed, and state whether its connection to the guitar is documented or assumed.</p>'},
   {title:'Show Both Markings And Hardware',html:'<p>Send the headstock front and back, label, serial, pickup mounts, controls, bridge and tailpiece. Keep uncertain digits uncertain and add another angle where a mark is difficult to read.</p>'},
   {title:'Explain Changes And Current Condition',html:'<p>List known repairs, replaced parts and any playing problems. Include invoices, removed hardware and prior photographs. Do not operate a damaged instrument merely to provide a demonstration.</p>'}
  ]},
  p('<p>If you have photographs taken before a repair, send those alongside the current views. They can show the original control layout or the extent of a break more clearly than a finished repair. Keep the dates attached so the two conditions are not accidentally mixed into one description.</p><p>State what you do not know as plainly as what you do. A missing pickup invoice does not prove a rewind, but it also does not support a guarantee that the coil is untouched. That distinction keeps the appraisal grounded in evidence and makes the next inspection question clear.</p>'),
  epiCTA('Ask Joe About Your Windsor','<p>Request a <a href="/free-appraisal/">free appraisal</a> with the complete photographs. The <a href="/sell-my-epiphone-guitar/">Epiphone seller page</a> explains the offer and shipping process after the guitar has been reviewed.</p>')
 ],'light')
 ],
 faqs:[
  {q:'Do All Windsors Have Mini-Humbuckers?',a:'No. The chart separates the early New York pickup groups from the later mini-humbucker configurations.'},
  {q:'Does A Short Production Run Guarantee A Premium?',a:'No. The correct model, original equipment, finish and condition still need to be established before an individual value is assessed.'},
  {q:'Can I Price A Converted Single As A Double?',a:'No. The double-pickup rows describe factory configurations. A conversion needs its own review, including altered wood and controls.'},
  {q:'Are There Later 1960s Windsor Rows?',a:'No. The supported groups here end in 1962. Another Epiphone’s later production dates should not be applied to the Windsor.'}
 ],
 closing:'<p>The Windsor chart works when the pickup family, count and original finish are established together. Use the <a href="/post/epiphone-windsor-authentication-guide/">Windsor authentication guide</a> to resolve the model and period, then let the actual repairs and equipment shape the appraisal.</p>'
},
{
 ...epiBase('windsor','authentication'),title:'Epiphone Windsor Authentication Guide',
 seoTitle:'Epiphone Windsor Authentication Guide: 1959 To 1962',
 description:'Identify a Kalamazoo Epiphone Windsor by its pointed cutaway, gold hardware, oval markers and pickup configuration, with serial and alteration checks.',
 eyebrow:'Original Kalamazoo Windsor · Single And Double Pickup Models',
 dek:'The Windsor combines a thin pointed-cutaway body with gold hardware and oval markers. Its early New York pickups and later mini-humbuckers need different checks.',
 hero:sheraton,glanceTitle:'The Windsor Feature Group',
 glance:[['Original Period','1959 to 1962 groups'],['Body','Thin hollow electric, pointed cutaway'],['Appointments','Gold-plated hardware and oval markers'],['Electrical Versions','One or two pickups; early New York and later mini']],
 secondaryActions:[{label:'Check Windsor Identity',href:'#identity'},{label:'Compare Windsor Values',href:'/post/epiphone-windsor-value-guide/'}],
 intro:{html:'<p>Authenticate an Epiphone Windsor by matching the thin pointed-cutaway body, oval fingerboard markers, gold-plated equipment and original pickup layout. The early New York pickup versions and later mini-humbucker versions belong to the same short Kalamazoo run, with factory single and double configurations. The <a href="/post/epiphone-windsor-value-guide/">Windsor value guide</a> separates those combinations after the identity and condition are established.</p>',calloutTitle:'The Complete Feature Group Matters',callout:'Gold parts alone don’t identify a Windsor. The body, neck, pickups and markings must support the same model, and a changed part should be recorded separately.'},
 sections:[
 section('identity','Windsor Features To Establish First','The Original Kalamazoo Electric',[
  {type:'table',caption:'Windsor Identification Features',columns:['Area','Original Reference','What To Document'],rows:[
   ['Body','Thin hollow electric with Florentine cutaway','Full front, rim depth, back and neck joint'],
   ['Construction','Laminated maple top and back, maple rims','Visible construction and any repaired edges'],
   ['Neck','Mahogany, rosewood fingerboard, 24¾-inch scale','Scale, markers, headstock and heel'],
   ['Decoration','Oval pearloid markers and gold-plated metalwork','Inlays, tuner backs, pickup covers and tailpiece'],
   ['Factory Layout','One or two pickups','Original routing, controls and selector arrangement'],
   ['1961 Model Codes','E352T / TN and E352TD / TDN','Single or double pickup, shaded or natural finish']
  ]},
  p('<p>The 1961 catalog is the central physical reference. It describes the materials and lists both pickup counts and finishes, even though its illustration shows a single-pickup guitar. Read the whole entry before deciding that a different factory variant is an alteration. Conversely, a listed option doesn’t prove that a particular guitar left the factory in that form.</p>')
 ]),
 section('history','The Windsor Belongs To The Gibson-Era Line','A Short Run Within A Longer Factory Period',[
  {type:'columns',items:[
   {title:'Kalamazoo Origins',html:'<p>The Windsor guitar belongs to the Kalamazoo Epiphone line, while the value chart uses 1959 to 1962 pricing groups. Those groups are not a shipment ledger or evidence of uninterrupted production. A familiar older Epiphone product name doesn’t establish continuity of body construction or serial practice.</p><p>The <a href="/post/epiphone-sheraton-history-value/">Sheraton history</a> records CMI’s purchase of Epiphone in 1957 and the start of Kalamazoo production in 1958. Early Windsor hardware must be understood within that transfer, when New York pickup equipment appears on Gibson-built Epiphones.</p>'},
   {title:'Why The Broader 1970 Boundary Is Different',html:'<p>The Sheraton history dates the move of Epiphone production to Japan to 1970. That doesn’t extend the Windsor’s documented run through every year before the move. Keep the brand chronology separate from this model’s shorter availability.</p><p>A short model run alone does not explain the identity or value of an individual guitar. Compare its pickup count, finish and remaining hardware before making a rarity claim. A sparse set of surviving photographs cannot establish the number manufactured or still in existence.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[newYork,minis],quote:'These are comparison instruments: inspect the New York pickup and mini-humbucker families without confusing either guitar with a Windsor.'},
 section('timeline','Windsor Identification Across Its Short Run','Follow The Pickup Transition',[
  {type:'timeline',items:[
   {date:'1959 To 1960 Groups',title:'New York Pickup Configurations',html:'<p>The early Windsor groups use New York pickups, with single and double versions in natural and sunburst. Confirm the actual pickup construction and installation. A later cover or a moved pickup can make a superficial date match misleading.</p>'},
   {date:'1961 Catalog',title:'Both Pickup Counts Remain Listed',html:'<p>The catalog illustrates the single-pickup pointed-cutaway Windsor and separately lists E352TD and E352TDN doubles. Gold equipment, oval markers and the smaller thin-body format distinguish the model from neighboring Epiphones.</p>'},
   {date:'1961 To 1962 Groups',title:'Mini-Humbucker Versions',html:'<p>The later groups use Gibson-made mini-humbuckers. Their internal construction differs from the earlier New York single coil. A model label or serial alone can’t certify which pickup remains inside an old cover.</p>'},
   {date:'After The Documented Windsor Run',title:'Check A Claimed Later Example',html:'<p>A guitar described as a later 1960s Windsor needs its identification examined. Check whether it is a Sorrento, a modified instrument or a date-reading error before treating that description as an undocumented factory continuation.</p>'}
  ]}
 ],'dark'),
 section('construction','The Windsor’s Thin Maple Body And Mahogany Neck','Compare Shape, Depth And Scale',[
  p('<p>The 1961 catalog specifies laminated arched maple for the top and back, with maple rims and a mahogany neck. The pointed cutaway is described as Florentine. Its thin rim and 24¾-inch scale differ from the larger, longer-scale Zephyr, so a generic description such as old Epiphone hollowbody is not enough to establish the model.</p><p>The catalog lists a 1¾-inch body depth. Take a side photograph and record how a measurement was made rather than estimating from the front. The top and back are arched, so a rim measurement and a measurement across the deepest part of the body are not necessarily the same observation.</p>'),
  {type:'columns',items:[
   {title:'Neck, Fingerboard And Logo',html:'<p>The Windsor has a rosewood fingerboard with oval pearloid markers in the catalog reference. Compare the marker shape, headstock, logo and binding as a set. A decorative feature can be replaced, and a headstock repair can remove or obscure the most useful serial evidence.</p><p>Record the nut-to-twelfth-fret measurement and double it to check scale. Include the neck joint in a side view so a changed heel or reset is visible. Do not identify a model from fingerboard decoration while leaving the body and neck connection out of the photograph.</p>'},
   {title:'Gold Hardware And The Simple Tailpiece',html:'<p>The catalog calls for gold-plated machine heads, tailpiece and metal parts, plus an adjustable rosewood bridge. The illustrated tailpiece is a simple trapeze. A Frequensator taken from another Epiphone should not be treated as an upgrade that establishes a higher Windsor specification.</p><p>Show the tailpiece’s bottom attachment, tuner mounting holes and bridge assembly. Replaced gold hardware can look convincing from the front, while worn original plating may appear less uniform. Age and color alone do not prove that a component belongs to this guitar.</p>'}
  ]},
  p('<p>The contemporary Gibson ES-125TC offers a useful construction comparison: a thin pointed-cutaway maple-bodied electric with a mahogany neck and the same standard scale. Its pickup and decorative specification differ. The Windsor should retain its Epiphone model identity rather than being authenticated by a Gibson badge, pickup or replacement neck.</p><p>The Sorrento is another model to distinguish. It also uses a pointed single cutaway and mini-humbuckers in the Kalamazoo line, but the Windsor’s cataloged gold equipment and decorative package require their own comparison. A gold part fitted to a Sorrento does not by itself create a Windsor.</p>')
 ],'dark'),
 section('catalog-limits','Check The Windsor’s Twenty-Fret Neck','Count The Actual Instrument',[
  p('<p>The 1961 Windsor catalog specifies 20 frets and a 24¾-inch scale. Count the actual frets and photograph the fingerboard extension, including where it meets the body. A replacement fingerboard, changed neck or repaired joint needs to be described alongside the model identification. If the count or scale differs from the catalog, keep that measurement in the record and compare the rest of the guitar before concluding that a particular repair explains it.</p>')
 ]),
 section('electronics','Inspect The Pickups Beyond Their Covers','New York Single Coils And Gibson Mini-Humbuckers',[
  p('<p>The early New York pickup and the later mini-humbucker are different electrical designs. Match the model period, mounting and wiring before assuming that a rectangular metal cover identifies the internals. A repaired pickup can retain its cover while having altered coils or other components underneath.</p><p>Epiphone mini-humbuckers and Firebird pickups also have different internal construction. Do not use the Firebird name as a synonym for any narrow humbucker. When the distinction affects the identification, preserve a qualified technician’s photographs and findings instead of relying only on the outside dimensions.</p>'),
  {type:'columns',items:[
   {title:'Factory Single-Pickup Windsors',html:'<p>A single-pickup Windsor is a cataloged version. Show the whole top, guard and controls before concluding that a second pickup is missing. Filled routing, plugged controls or a replaced guard can reveal a conversion, but those need actual evidence rather than an assumption based on another guitar.</p><p>Record the working condition separately from originality. A quiet, functioning pickup may have been rewound, while an original pickup may need repair. Neither electrical test alone determines whether the complete instrument is a Windsor.</p>'},
   {title:'Factory Double-Pickup Windsors',html:'<p>The double needs both original pickup positions and its control arrangement checked. Look for enlarged cavities, extra screws or added controls that indicate later work. A tidy conversion is still a conversion, even when period parts were used.</p><p>Initial appraisal photos do not require dismantling the guitar. Begin with accessible mounting details and the owner’s repair records. If the body conceals a disputed installation, have it inspected without forcing a brittle harness through the f-hole.</p>'}
  ]}
 ]),
 section('variants','Read Windsor Model Numbers And Finish Designations','Four Catalog Codes, Two Electrical Periods',[
  {type:'cards',variant:'models',items:[
   {title:'E352T And E352TN Singles',html:'<p>The 1961 catalog lists E352T in shaded finish and E352TN in natural. The absence of D identifies the single-pickup listing in that entry. Confirm the original top and controls rather than assuming the current pickup count proves the code.</p>'},
   {title:'E352TD And E352TDN Doubles',html:'<p>The D versions are the factory doubles, with N designating natural in the catalog. Keep the entire code when transcribing a label or invoice. A shortened description can omit the distinction that matters most for the electrical inspection.</p>'},
   {title:'Natural And Shaded Finishes',html:'<p>Both finishes are listed for the pickup variants. That establishes availability, not the originality of a surviving finish. Photograph the back, rims, heel and headstock before treating a natural-looking guitar as a factory natural example.</p>'}
  ]},
  p('<p>Do not expand an unclear label into the code you expect to see. Preserve a faint character with a photograph and a cautious transcription. The physical layout may support a probable identification while the written model marking remains unresolved. Record the visible features and leave any unreadable model-code character unresolved.</p>')
 ]),
 section('archive','What Joe’s Comparison Photos Demonstrate','Pickup Families On Named Instruments',[
  {type:'archive',items:[
   {label:'New York Pickup Comparison',title:'1950s Zephyr De Luxe Regent',html:'<p>The gold rectangular pickups and mounting arrangement are visible on this older De Luxe-family electric. Its ornate headstock, Frequensator and body do not establish Windsor specifications. Use it to compare the early pickup family while keeping the actual instrument named.</p>',photos:[newYork]},
   {label:'Kalamazoo Mini-Humbucker Comparison',title:'1961 Epiphone Sheraton',html:'<p>The Sheraton shows the later mini-humbucker family on a different Kalamazoo model. Its center-block double-cutaway body and Bigsby are not Windsor features. These photos cannot supply a Windsor serial example or prove the originality of another guitar’s pickups.</p>',photos:[sheraton,minis]}
  ]}
 ],'archive'),
 section('dating','Windsor Dating Requires The Actual Guitar’s Markings','Kalamazoo Serials And Catalog Evidence',[
  p("<p>Early Kalamazoo hollowbodies need a separate first check: an A followed by four digits on the interior label belongs to Epiphone’s early A-series, not the similarly named Gibson A-prefix chart. Photograph the whole label and keep any factory order number separate. A model code is not a serial number. Later impressed numbers can be compared with the shared Gibson system, with the guitar’s construction used to check the result.</p>"),
  p('<p>From 1961, Kalamazoo Epiphones used the shared Gibson numbering system. Use the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> with clear headstock and label photographs. Record a visible factory order number separately from the serial. Combining two markings into one string can produce a plausible-looking but meaningless lookup.</p><p>Compare the proposed date with the pickup family and the rest of the instrument. A changed pickup does not automatically invalidate the body’s date, and a correct early pickup does not prove that it was installed there at the factory. Describe the supported body period and the equipment history separately.</p><p>A repaired headstock or missing label may prevent a narrow date from photographs. In that case, use the supported period and identify what additional evidence would resolve it. An ownership receipt, earlier photograph or repair record may help without being treated as a factory completion certificate.</p>'),
  {type:'serials',items:[{serial:'Windsor Number Needed',title:'No Windsor Serial Is Shown In These Comparisons',html:'<p>The photographs here show a De Luxe and a Sheraton. Their numbers are not transferred to the Windsor. Send the actual instrument’s serial, label and any visible internal stamp for a model-specific reading.</p>'}]}
 ]),
 section('checklist','A Windsor Authentication Checklist','Match The Model Before Assessing Originality',[
  {type:'checklist',items:[
   {title:'Confirm The Thin Florentine-Cutaway Body',html:'<p>Show the complete outline, rim and neck joint. Compare its scale and proportions with the Windsor reference, rather than confusing it with the larger rounded-cutaway Zephyr.</p>'},
   {title:'Check The Oval Markers And Gold Equipment',html:'<p>Photograph the headstock, fingerboard, tuner backs, bridge and tailpiece. Record replaced parts and repairs so decorative similarities do not conceal a different underlying model.</p>'},
   {title:'Identify Pickup Type And Original Count',html:'<p>Separate New York pickups from mini-humbuckers, then establish single or double factory layout. Include wiring history and altered openings where documented.</p>'},
   {title:'Reconcile Serial, Finish And Repair Evidence',html:'<p>Check the date against the feature group. Keep refinishing and structural repairs in the description even after the model is secure. Authentic identity does not mean untouched condition.</p>'}
  ]}
 ],'light'),
 section('exclusions','Exclude Later Production And Unrelated Windsor Names','Country Markings And Complete Model Identity',[
  p('<p>Later Japanese, Korean and Chinese Epiphones, Elitist instruments and signature models belong to their actual series. A historical-looking logo or a reused name does not prove Kalamazoo production. Check the full serial format, country identification and paperwork before applying this guide.</p><p>The Windsor name also occurs elsewhere in Epiphone’s product history, including mandolins. A name match does not make those instruments part of this electric guitar family. Establish the type of instrument before consulting a guitar serial or model table.</p><p>After identification, use the <a href="/what-lowers-vintage-guitar-value/">condition guide</a> for repairs and the <a href="/post/epiphone-windsor-value-guide/">Windsor value guide</a> for the correct finish and pickup comparison. Neither the model’s short run nor a correct serial removes the need to assess its present condition.</p>'),
  epiCTA('Have Joe Review Your Windsor','<p>Send the body, neck, markings and electrical details for a <a href="/free-appraisal/">free appraisal</a>. The <a href="/sell-my-epiphone-guitar/">Epiphone seller page</a> explains how to discuss selling after the instrument is reviewed.</p>')
 ]),
 section('references','Windsor Research References','Catalog Specifications And Dating Context',[
  {type:'sources',items:[
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','Windsor body, neck, gold hardware, markers and all four model-code listings.'),
   source('2026 Vintage Guitar Price Guide','https://online.fliphtml5.com/pyepf/xldo/','Windsor model dates and early versus later pickup groups; page 90.'),
   source('1960 Gibson Catalog, Page 9','https://www.vintageguitarandbass.com/gibson/catalogues/1960_9.php','ES-125TC construction and scale for the limited Gibson comparison.'),
   source('New York Epiphone Model Research','https://wiedler.ch/nyepireg/models.html','Separate Windsor mandolin naming and older electric pickup-family context.'),
   source('JVG Sheraton History','/post/epiphone-sheraton-history-value/','Factory ownership chronology and New York pickup to mini-humbucker transition.'),
   source('Epiphone Serialization Reference','https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf','Epiphone section, page 1071: the early hollowbody A-label sequence differs from Gibson’s A-prefix series; later impressed numbers require feature checks.'),
   source('JVG Gibson Serial Guide','/how-to-read-gibson-serial-numbers/','Kalamazoo serial interpretation and physical corroboration.')
  ]}
 ])
 ],
 faqs:[
  {q:'Did The Windsor Continue Throughout The 1960s?',a:'The supported Windsor groups here run from 1959 to 1962. The broader Epiphone factory history through 1970 should not be treated as the Windsor’s production span.'},
  {q:'Were Two-Pickup Windsors Factory Models?',a:'Yes. The 1961 catalog lists double-pickup E352TD and E352TDN versions alongside the singles. An individual guitar still needs its original installation verified.'},
  {q:'Does Gold Hardware Prove A Windsor?',a:'No. Gold equipment is one part of the feature group. Body, neck, markers, pickup layout and markings must agree.'},
  {q:'Should A Windsor Have A Frequensator?',a:'The 1961 reference illustrates a simple trapeze. A Frequensator from another Epiphone should be documented as a possible change rather than assumed to be the standard Windsor equipment.'}
 ],
 closing:'<p>A Windsor identification rests on its body, decoration, pickup configuration and markings together. Keep replaced parts and repairs visible in the conclusion. Once those details agree, the <a href="/post/epiphone-windsor-value-guide/">Windsor value guide</a> provides the relevant original-configuration comparisons.</p>'
}
];
