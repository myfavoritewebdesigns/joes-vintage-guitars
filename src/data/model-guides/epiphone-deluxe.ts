import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph, comparison } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';

const acoustic=comparison(ph.triumph46Body,'This is a 1946 Triumph with an added DeArmond pickup, not a DeLuxe. It illustrates an acoustic archtop carrying a later electrical accessory.');
const acousticSide=comparison(ph.triumph46Side,'This Triumph side view illustrates the views useful for assessing an archtop neck joint and rim; DeLuxe specifications differ.');
const electric=comparison(ph.emperorBody,'This is a three-pickup Zephyr Emperor Regent, not a Zephyr De Luxe. Compare the electrical family without confusing the models.');

export const deluxeGuides: ModelGuideData[] = [
{
 ...epiBase('deluxe','value'), title:'Epiphone Deluxe Value Guide',
 seoTitle:'Vintage Epiphone Deluxe Value Guide: Acoustic And Electric',
 description:'Compare American Epiphone DeLuxe, Regent and Zephyr De Luxe prices, including Kalamazoo acoustic cutaways, with notes on finish, repairs and originality.',
 eyebrow:'DeLuxe, Regent And Zephyr De Luxe · American Archtops',
 dek:'Separate the carved-top acoustic, its cutaway versions and the factory electric De Luxe before comparing prices.',
 hero:ph.deluxeBody,
 glanceTitle:'DeLuxe Price Starting Points',
 glance:[['Early Sunburst Acoustic',range('deluxe',0)],['1950s Natural Non-Cutaway',range('deluxe',5)],['1960 To 1964 Kalamazoo',range('deluxe',12)],['Later Special-Order Acoustic',range('deluxe',13)]],
 secondaryActions:[{label:'See DeLuxe Ranges',href:'#values'},{label:'Confirm The Model',href:'/post/epiphone-deluxe-authentication-guide/'}],
 intro:{html:`<p>A vintage Epiphone DeLuxe can range from ${range('deluxe',5)} for a 1950 to 1957 natural non-cutaway acoustic to ${range('deluxe',0)} for an early 1931 to 1935 sunburst example. A Gibson-built 1960 to 1964 acoustic cutaway is estimated at ${range('deluxe',12)}. Those figures assume excellent, original condition and the original case. Use the <a href="/post/epiphone-deluxe-authentication-guide/">DeLuxe authentication guide</a> to distinguish acoustic, Regent and Zephyr electric versions before choosing a row.</p>`,calloutTitle:'DeLuxe Is A Model Family Here',callout:'The chart covers the American archtop family, including Zephyr De Luxe electrics. It doesn’t price every Epiphone product that happens to contain the word Deluxe.'},
 sections:[
 section('values','DeLuxe Prices By Body And Electrical Configuration','Joe’s Estimated Market Values',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('deluxe'),
  p('<p>The rows separate acoustic, non-cutaway electric and early electric-cutaway configurations; some later electric groups require an individual appraisal. Read the cutaway, pickup count and finish along with the dates. A Zephyr De Luxe with two factory pickups has a different comparison from a carved-top acoustic carrying a removable pickup. A later owner’s short description may omit exactly the detail needed to choose correctly.</p><p>The 1935 acoustic year appears in two ranges. Documented body widths change from 16⅜ inches in the early design to 17⅜ inches by 1935. Measure the lower bout and send the construction details for an individual estimate at that crossover; the overlapping year alone cannot select either range. The later cutaway electric ranges overlap under De Luxe Electric and Zephyr De Luxe Regent names, without enough information to select a dependable comparison. Those 1950s cutaway entries are omitted instead of presenting two competing estimates for the same guitar. Send the pickup layout, full label, body depth and any repair history for an individual appraisal. The earlier Zephyr rows do not supply a substitute price for a later instrument.</p>')
 ]),
 section('new-york','How New York Acoustic DeLuxes Compare','Finish And Body Configuration',[
  {type:'columns',items:[
   {title:'Prewar Non-Cutaways',html:`<p>The earliest sunburst group is ${range('deluxe',0)}. The later 1935 to 1944 sunburst row is ${range('deluxe',1)}, with a separate natural row for 1939 to 1944. Date and construction need to be established before applying those figures. A large ornate Epiphone isn’t automatically a DeLuxe, and a family recollection alone doesn’t establish a prewar year.</p><p>Preserve the headstock decoration, fingerboard pattern and body dimensions in the photo set. Those details help distinguish the instrument before condition is assessed. If inlay or binding was replaced, include that history. Attractive replacement work is still different from the original appointments assumed by the chart.</p>`},
   {title:'Postwar Acoustics And Regents',html:`<p>The 1945 to 1949 natural non-cutaway estimate is ${range('deluxe',3)}. Acoustic Regents have separate cutaway rows, including ${range('deluxe',7)} for the 1948 to 1952 natural group. A cutaway claim needs the body construction to support it; it should not be inferred from the word Regent on a later sales tag.</p><p>Original finish matters within each group. A stripped sunburst isn’t an original natural-finish guitar. Photograph protected edges and known finish repairs before comparing the natural and sunburst rows. Leave the finish unresolved if the available photographs do not answer the question.</p>`}
  ]}
 ],'dark'),
 section('philadelphia','Philadelphia-Era DeLuxes And Factory Electrics','Keep Acoustic And Zephyr Rows Separate',[
  p(`<p>The 1953 to 1957 natural acoustic cutaway is estimated at ${range('deluxe',9)}, while the sunburst version is ${range('deluxe',10)}. Factory electric De Luxe and Zephyr De Luxe versions appear separately. The factory period does not erase the difference between a carved acoustic and an instrument built around installed pickups and controls.</p><p>For a Zephyr De Luxe, report whether the body is cutaway or non-cutaway and whether it left the factory with one pickup or two. A second pickup added later can change the top and wiring. Show any filled opening, altered guard or extra control hole. Returning old-looking parts to the guitar does not restore uncut wood.</p><p>The label’s address is useful history, but it is not an automatic price premium. A Philadelphia-era instrument still needs its original configuration and condition established. A serial estimate near a transition should not be narrowed to whichever year produces the preferred value.</p>`)
 ]),
 section('kalamazoo','Kalamazoo DeLuxe Acoustic Values','The A212 And Later Special Orders',[
  {type:'cards',variant:'rank',items:[
   {title:'1958 To 1959 Acoustic Cutaways',html:`<p>The early Gibson-built range is ${range('deluxe',11)}. Confirm the Kalamazoo construction and factory markings rather than treating the new ownership date as proof of where every transitional instrument was completed. A clear neck, label and body record is the starting point.</p>`},
   {title:'1960 To 1964 Examples',html:`<p>The estimate is ${range('deluxe',12)}. Compare an acoustic DeLuxe with an acoustic DeLuxe. A fitted pickup may be useful for performance, but it creates a separate originality question and does not make this guitar equivalent to an older factory Zephyr electric.</p>`},
   {title:'1965 To 1970 Special-Order Group',html:`<p>The later range is ${range('deluxe',13)}. Special-order status does not explain every unusual part. Keep receipts and documented options with the guitar, and distinguish those records from a later assumption that a modification must have been factory work.</p>`}
  ]},
  p('<p>For the Kalamazoo acoustic, include the bridge height, neck angle and top condition in the appraisal photographs. The guitar’s ability to play cleanly matters alongside finish and hardware originality. A low bridge can conceal a geometry problem, so a statement that the action is low should not replace a side view.</p><p>Case and accessory history also belongs with this group. An original case is part of the chart’s assumption, while a replacement case needs to be described as such. Retained original tuners or a removed bridge can help explain an alteration, although storing a part in the case does not undo work performed on the instrument.</p>')
 ],'dark'),
 {type:'photo-band',photos:[ph.deluxeBody,ph.deluxeHead],quote:'1950s Zephyr De Luxe Regent: assess the two-pickup electric as its own version of the DeLuxe family.'},
 section('condition','Repairs That Need Individual Review','Beyond An Attractive Finish',[
  {type:'cards',variant:'condition',items:[
   {title:'Top And Neck Work',html:'<p>Show a reset neck, repaired heel, sunken top or repaired crack directly. A successful repair can make a guitar useful again while remaining relevant to its value. Include the repair invoice and photograph the area from more than one angle.</p>'},
   {title:'Binding, Inlay And Finish',html:'<p>Record replaced decorative material and added finish. Review <a href="/what-lowers-vintage-guitar-value/">condition factors</a> and <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish effects</a> before assuming that a brighter surface belongs at the top of an original-condition range.</p>'},
   {title:'Electric Components And Mounts',html:'<p>A replacement coil beneath an old cover is still a change. Keep technician notes for repairs and rewinds, and show altered pickup or control openings. The <a href="/do-replaced-pickups-hurt-guitar-value/">pickup replacement guide</a> explains the questions to raise.</p>'}
  ]},
  p('<p>Do not undertake cosmetic restoration just to make the guitar resemble an excellent example in the chart. Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> and have the current condition assessed first. An appraisal can help separate useful maintenance from work that removes evidence of the original instrument.</p><p>If a repair is only suspected, describe the visible clue instead of presenting a diagnosis as certain. A finish line, unusual reflection or changed screw can justify a closer inspection without proving the whole history. Clear observations are more useful than broad claims that everything is original or everything has been replaced.</p>')
 ]),
 section('submit','What To Send For A DeLuxe Appraisal','Make The Variant Clear',[
  {type:'checklist',items:[
   {title:'Show The Body And Decorative Details',html:'<p>Include front, back, side, headstock and fingerboard views. Add lower-bout width and rim-depth measurements. Keep the whole instrument visible in at least one photograph so close-ups can be placed in context.</p>'},
   {title:'Record Labels, Pickups And Repairs',html:'<p>Photograph the complete label and serial without cleaning them. Show every pickup and control on an electric, and the mounting of any accessory on an acoustic. Include known cracks, repaired joints and changed hardware.</p>'},
   {title:'Preserve The Ownership Record',html:'<p>Send receipts, old photographs and the case with a short account of what is known. Separate documented dates from family recollection. Keep loose parts together and explain where they were removed from.</p>'}
  ]},
  p('<p>Tell Joe whether the guitar has been checked recently or has remained in storage. That distinction helps keep an untested instrument from being described as ready to play without evidence.</p>'),
  epiCTA('Get A DeLuxe Value From Joe','<p>Send your evidence for a <a href="/free-appraisal/">free appraisal</a>. For a purchase offer, use <a href="/sell-my-epiphone-guitar/">Sell My Epiphone</a> and include the instrument’s repair history. The chart is a market comparison, not a promise of an offer at either endpoint.</p>')
 ],'light')
 ],
 faqs:[
 {q:'Are DeLuxe And Zephyr De Luxe Prices Interchangeable?',a:'No. The acoustic and factory electric versions need separate comparisons, including pickup count, cutaway configuration and finish.'},
 {q:'Does This Guide Include Kalamazoo DeLuxes?',a:'Yes. It has separate Gibson-built acoustic cutaway ranges for 1958 to 1959, 1960 to 1964, and the 1965 to 1970 special-order group.'},
 {q:'Is A Natural-Looking Guitar Automatically An Original Natural Finish?',a:'No. A stripped or refinished guitar can appear natural. Finish evidence must support the factory color before its original-condition row is used.'},
 {q:'Does This Chart Cover The FT De Luxe Flat-Top?',a:'No. This guide covers the American archtop family. A flat-top carrying the De Luxe name needs its own model identification and appraisal.'}
 ],
 closing:'<p>Identify the acoustic or electric branch, then the cutaway, pickup count and finish. The <a href="/post/epiphone-deluxe-authentication-guide/">DeLuxe authentication guide</a> helps establish those facts. A condition review then turns the chart into a useful comparison for the individual guitar.</p>'
},
{
 ...epiBase('deluxe','authentication'), title:'Epiphone Deluxe Authentication Guide',
 seoTitle:'Epiphone Deluxe Authentication Guide: American Archtops',
 description:'Identify American Epiphone DeLuxe and Zephyr De Luxe guitars through body construction, cutaways, pickups, labels and the Kalamazoo acoustic specification.',
 eyebrow:'DeLuxe And Regent · New York To Kalamazoo',
 dek:'The acoustic DeLuxe, Zephyr De Luxe and Kalamazoo A212 share a family name but need different construction checks.',
 hero:ph.deluxeBody,
 glanceTitle:'DeLuxe Family Identification',
 glance:[['Acoustic DeLuxe','Carved spruce top and ornate appointments'],['Regent','Cutaway version within the parent family'],['Zephyr De Luxe','Pre-Gibson factory electric branch'],['Kalamazoo A212','Acoustic cutaway listed in Gibson-era catalogs']],
 secondaryActions:[{label:'Compare DeLuxe Features',href:'#identity'},{label:'Find DeLuxe Values',href:'/post/epiphone-deluxe-value-guide/'}],
 intro:{html:'<p>Start an Epiphone DeLuxe identification by deciding whether the body was built as an acoustic archtop or as a factory electric. Then establish the cutaway, production period and original appointments. The <a href="/post/epiphone-deluxe-value-guide/">DeLuxe value guide</a> separates those configurations. The Zephyr De Luxe is the electric branch of the DeLuxe family; the ordinary Zephyr and Zephyr Emperor are separate designs.</p>',calloutTitle:'An Added Pickup Does Not Set The Factory Model',callout:'A carved acoustic DeLuxe carrying an accessory pickup should still be identified as the acoustic instrument, with the installation described separately.'},
 sections:[
 section('identity','Which DeLuxe Construction Are You Inspecting?','Acoustic, Regent Or Factory Electric',[
  {type:'table',caption:'American DeLuxe Identification Groups',columns:['Group','Construction Or Outline','Important Distinction'],rows:[
   ['Early Acoustic DeLuxe','Carved-top acoustic; body size changes over the original run','Don’t assume one width for all New York examples'],
   ['Acoustic DeLuxe Regent','Cutaway version of the ornate acoustic family','Regent doesn’t itself mean electric'],
   ['Zephyr De Luxe And Regent','Factory electric branch, with non-cutaway and cutaway versions','Pickup count and electrical layout must be checked against the period'],
   ['Philadelphia De Luxe Electric','Two-pickup cutaway in the 1954 catalog','Separate from the three-pickup Emperor Electric'],
   ['Kalamazoo A212 / A212N','Carved spruce-top acoustic cutaway','Natural and shaded options in 1961; special-order notation in 1966']
  ]},
  p('<p>De Luxe, DeLuxe and Deluxe spellings occur in the historical material. A spelling difference alone doesn’t identify a separate factory or year. Read the actual model context. The FT De Luxe flat-top and Crestwood Deluxe solidbody are different products and should not be authenticated with this archtop checklist.</p>')
 ]),
 section('history','The DeLuxe Through New York And Philadelphia','Body Size And Model Branches',[
  {type:'columns',items:[
   {title:'New York Carved-Top Acoustics',html:'<p>The DeLuxe was introduced in 1931 at the upper end of Epiphone’s acoustic range. Its body dimensions and decoration developed during the 1930s, so an early instrument should be compared with an early catalog rather than a postwar photograph. The Emperor later occupied the larger flagship position, but ornate decoration alone still doesn’t distinguish the two models.</p><p>The circa-1950 acoustic catalog describes the DeLuxe as the same body size as the Emperor at that point. That is a useful warning against a universal 17⅜-inch rule. Measure the actual instrument and compare the catalog period. A large DeLuxe isn’t automatically an Emperor, and size must be read with the inlay, headstock and model evidence.</p>'},
   {title:'Philadelphia Acoustics And Electrics',html:'<p>The 1954 catalog distinguishes acoustic DeLuxe instruments from the two-pickup De Luxe Electric. The electric has its own construction and controls; it’s not simply an acoustic guitar with a removable pickup. The catalog shows the DeLuxe’s elaborate appointments alongside an even more elaborate three-pickup Emperor Electric.</p><p>Preserve the Philadelphia period within the older Epiphone chronology, before CMI’s 1957 purchase. A New York address on a label or a catalog name carried forward through the move should be recorded as evidence, not converted into a precise completion date. The pre-Gibson numbering research supplies estimates rather than a complete factory calendar.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[acoustic,electric],quote:'Comparison instruments: the Triumph is an acoustic with an added pickup; the Zephyr Emperor Regent is a factory electric family.'},
 section('timeline','DeLuxe Development In Catalog Order','Use The Relevant Period',[
  {type:'timeline',items:[
   {date:'1931 And The 1930s',title:'The Original Acoustic DeLuxe',html:'<p>Check the early body size, headstock design and fingerboard decoration. Later ornamentation should not be used as a requirement for the earliest instruments. An old replacement part can complicate that comparison, so record the complete guitar.</p>'},
   {date:'The 1940s And Early 1950s',title:'Regents And Zephyr De Luxe Electrics',html:'<p>The acoustic cutaway and electrical branches require separate labels. Identify whether the top carries factory pickup openings and whether the guitar was built with a cutaway. A fitted pickup on an acoustic doesn’t answer either question.</p>'},
   {date:'1954',title:'A Cataloged De Luxe Electric',html:'<p>The Philadelphia-era catalog shows a two-pickup cutaway electric. Match the controls and body to that design rather than borrowing the Emperor’s three-pickup, six-button layout. Similar decoration is not enough to merge the models.</p>'},
   {date:'1958 Onward',title:'The Kalamazoo Acoustic A212',html:'<p>After the 1957 purchase and the 1958 Kalamazoo start, the DeLuxe appears as a Gibson-built acoustic cutaway. The 1961 catalog describes its construction explicitly, and the 1966 catalog marks the model as special order.</p>'}
  ]}
 ],'dark'),
 section('kalamazoo','What Defines A Kalamazoo DeLuxe A212','The Acoustic Construction And Its Appointments',[
  p('<p>The 1961 catalog specifies a carved spruce top, figured maple back and rims, and a maple neck with an adjustable truss rod. The guitar has a cutaway, a rosewood fingerboard with shell-shaped pearl inlays, an ornate bound headstock and gold-plated metalwork. Those details should be considered together when separating it from a Triumph or a different Gibson-built archtop.</p><p>The 1966 matrix gives a 17⅜-inch width, 20¾-inch body length, 3⅜-inch depth and 25½-inch scale for the DeLuxe. These are full-depth acoustic dimensions. Compare a measurement at the rim with the catalog depth, rather than measuring across the domed top and back. Catalog dimensions are a reference for identifying the version, not a substitute for examining its construction.</p>'),
  {type:'columns',items:[
   {title:'The Gibson L-5C Comparison',html:'<p>The contemporary Gibson L-5C shares the carved spruce and figured maple acoustic approach, maple neck and 25½-inch scale. The original Gibson catalog provides that comparison. The Epiphone retains different body dimensions, its own decorative pattern and a Frequensator rather than the L-5’s tailpiece design.</p><p>Use the relationship to understand the construction, not to authenticate a DeLuxe from a Gibson label or replacement part. A correct period tuner set can fit several instruments. The Epiphone logo, model marking, fingerboard and body should support the same conclusion.</p>'},
   {title:'No Automatic Mini-Humbucker Conversion',html:'<p>The A212 is cataloged as an acoustic. The transition from New York pickups to Gibson mini-humbuckers on other Epiphone electric models does not supply a factory pickup specification for it. An installed pickup needs its own mounting history, even when the component itself is old.</p><p>Epiphone mini-humbuckers are also not the same internal design as Firebird pickups. If a DeLuxe has been converted or fitted with a floating pickup, identify that actual component instead of applying the name of another Gibson pickup by resemblance. The conversion should remain visible in the final description.</p>'}
  ]},
  p('<p>The 1961 catalog gives A212 for shaded and A212N for natural finish. Check the model marking and surface together: a stripped shaded guitar should not be authenticated as an original natural example from its present color alone. Replaced binding or finish around the neck joint also deserves separate documentation.</p><p>The 1966 special-order mark documents catalog availability. It does not establish a production total, prove an unusual option was factory-installed or assign an exact year to a surviving guitar. Epiphone production moved to Japan in 1970; do not turn that boundary into a claim of uninterrupted annual production.</p>')
 ],'dark'),
 section('catalog-detail','Read DeLuxe Catalog Specifications By Date','A Listing Is Not A Changeover Ledger',[
  p('<p>The 1961 DeLuxe text describes a rosewood fingerboard, while the 1966 specification matrix lists ebony. Record those as dated catalog descriptions. They do not establish the exact day, serial or production batch when a material changed, and they should not be collapsed into one requirement for every Kalamazoo A212.</p><p>On the instrument, photograph the fingerboard under even light and record known replacement work. A dark surface can be difficult to identify accurately from a photograph, especially after oiling, staining or decades of use. If the wood species affects the identification, a hands-on examination is more useful than an absolute conclusion drawn from its color on a screen.</p><p>The same discipline applies to an illustration showing one bridge or tuner style. A catalog gives a period reference; an invoice, original photograph or untouched mounting can supply evidence about the individual guitar. When the two differ, describe the difference and investigate it rather than inventing a special-order explanation.</p>')
 ]),
 section('electric','Identifying A Zephyr De Luxe Or De Luxe Electric','Pickup Count And Factory Woodwork',[
  {type:'cards',variant:'models',items:[
   {title:'Non-Cutaway Zephyr De Luxe',html:'<p>Establish the non-cutaway body first, then the factory pickup count and control layout. One-pickup and two-pickup descriptions occur in the older electric family. A second pickup added by an owner needs to be distinguished from the original two-pickup configuration through mounting, wiring and woodwork evidence.</p>'},
   {title:'Zephyr De Luxe Regent',html:'<p>The Regent adds the cutaway distinction within this electric branch. Photograph the rim, binding and top around the cutaway as well as the electronics. Do not assume that any old cutaway Epiphone with two pickups belongs here; the decoration, dimensions and model evidence must also agree.</p>'},
   {title:'Philadelphia De Luxe Electric',html:'<p>The 1954 catalog provides a two-pickup cutaway reference with gold hardware. Its name overlaps older Zephyr terminology in descriptions of surviving instruments. Keep the physical specification explicit so a shortened name does not merge it with an acoustic Regent or the three-pickup Emperor.</p>'}
  ]},
  p('<p>When a pickup appears replaced, record what can be seen before naming what used to be there. Enlarged openings, altered mounts and changed controls may require inspection under the hardware. Ask a qualified technician to document that work if needed. Do not infer an untouched original system from aged covers alone.</p>')
 ]),
 section('photos','DeLuxe And Comparison Photographs','Read The Visible Configuration',[
  {type:'archive',items:[
   {label:'The Two-Pickup Electric',title:'1950s Zephyr De Luxe Regent',html:'<p>The two gold New York pickups, lower-bout selector, Frequensator and cloud-pattern fingerboard belong to the De Luxe electric comparison. The headstock view shows the elaborate flower-vine decoration. The pickguard is missing, with its mounting point visible on the body. These images establish visible features without proving that every remaining component is original. No readable serial is supplied in this set, so the caption retains the decade rather than deriving a precise year from the decoration.</p>',photos:[ph.deluxeBody,ph.deluxeHead]},
   {label:'Acoustic Comparison Only',title:'1946 Triumph With An Added Pickup',html:'<p>The Triumph shown here demonstrates why an acoustic body and an electrical accessory need separate descriptions. Its non-cutaway outline, deep rim and pickup mounting are visible. It does not document DeLuxe inlay, dimensions or factory hardware, and it should not be treated as a DeLuxe specimen.</p>',photos:[acoustic,acousticSide]},
   {label:'Electric Comparison Only',title:'1950s Zephyr Emperor Regent',html:'<p>This is the larger Emperor-family electric from Joe’s archive. Its three pickups and push-button bank differ from the two-pickup De Luxe Electric reference. The comparison is useful precisely because the model difference remains explicit. Do not use its serial or control layout as a DeLuxe template.</p>',photos:[electric]}
  ]}
 ],'archive'),
 section('pickup-history','Later Pre-Gibson Pickup Evidence','Check The Installed Unit',[
  p('<p>The instrument registry documents DeArmond Model 2000 pickups on Zephyr DeLuxe examples from 1954. The earlier New York pickup is not a requirement for every surviving pre-Gibson electric. Compare the actual pickup, mounting and controls with the appropriate period rather than treating a later factory specification as an automatic replacement.</p>')
 ]),
 section('dating','Date The DeLuxe Within The Correct Serial System','Pre-Gibson Estimates And Kalamazoo Numbers',[
  p("<p>Early Kalamazoo hollowbodies need a separate first check: an A followed by four digits on the interior label belongs to Epiphone’s early A-series, not the similarly named Gibson A-prefix chart. Photograph the whole label and keep any factory order number separate. A model code is not a serial number. Later impressed numbers can be compared with the shared Gibson system, with the guitar’s construction used to check the result.</p>"),
  p('<p>Pre-Gibson Epiphone serials were assigned in model batches, and surviving research cannot turn every number into an exact year. Photograph the label and any other marking in full. Read uncertain characters as uncertain, then compare the guitar’s construction and appointments with the catalogs. A label address helps the record but cannot settle every factory-transition question.</p><p>For the Kalamazoo A212, use the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial-number reference</a>. The serial range must fit the physical guitar and its model marking. A replacement neck, damaged label or refinished headstock can remove or alter part of that evidence, so record the missing information instead of filling it in from expectation.</p><p>Ownership paperwork can corroborate a date when it identifies the particular instrument. A receipt for an unspecified Epiphone is less conclusive than one with a matching serial or an unmistakable photograph. Keep purchase date and manufacture date separate, especially where a guitar may have remained in dealer stock.</p>')
 ]),
 section('inspection','A Kalamazoo DeLuxe Inspection Checklist','Confirm The A212 Features',[
  {type:'checklist',items:[
   {title:'Verify A Full-Depth Acoustic Cutaway',html:'<p>Measure the body and inspect the top construction. Compare it with the A212 specification rather than a thin electric. Photograph the heel and cutaway together so the neck-to-body relationship is clear.</p>'},
   {title:'Match The Decorative Package',html:'<p>Document the shell-pattern fingerboard inlays, bound headstock, logo and body binding. Replaced decorative material should be noted. One ornate headstock photograph is not enough when a different body or fingerboard remains out of frame.</p>'},
   {title:'Inspect Bridge And Frequensator',html:'<p>Show the bridge base and saddle, tailpiece arms and bottom attachment. Identify changed parts or unused holes. A period-looking replacement can be suitable for playing while still differing from the guitar’s factory equipment.</p>'},
   {title:'Record Every Electrical Addition',html:'<p>Show the pickup support, cable path, jack and controls. Distinguish a removable accessory from a routed installation. Do not let an added pickup obscure the original acoustic model or the extent of any woodwork.</p>'},
   {title:'Reconcile Label, Serial And Repairs',html:'<p>Compare the serial with the catalog period and construction. List headstock work, neck repairs and finish changes independently. If the evidence does not support one exact year, keep the production interval broad.</p>'}
  ]}
 ],'light'),
 section('later','Exclude Other Deluxe Names And Later Production','Keep The Identification Specific',[
  p('<p>The word Deluxe appears on other Epiphone instruments and products. It does not connect a Crestwood Deluxe, an FT De Luxe flat-top or an amplifier to this archtop family. Identify the complete product name and construction before applying the guide.</p><p>Later Japanese, Korean and Chinese instruments, Elitist releases and signature editions belong to their actual manufacturing series. Recreated decoration or a historical name does not establish a New York, Philadelphia or Kalamazoo build. Read the country marking, complete serial system and paperwork before making a vintage-American claim.</p><p>Once the model is identified, separate authenticity from originality. An American DeLuxe may have a repaired neck, replacement tailpiece or refinished body. The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> and <a href="/post/epiphone-deluxe-value-guide/">DeLuxe value guide</a> address those consequences without changing the evidence used to identify the original instrument.</p>'),
  epiCTA('Have Joe Review Your DeLuxe Photos','<p>Send the full guitar, measurements, label and altered areas for a <a href="/free-appraisal/">free appraisal</a>. Use <a href="/sell-my-epiphone-guitar/">Sell My Epiphone</a> when you want to discuss an offer, with repairs and added pickups included from the start.</p>')
 ]),
 section('references','DeLuxe Research References','Catalog Specifications And Factory Chronology',[
  {type:'sources',items:[
   source('Epiphone Serialization Reference','https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf','Epiphone section, page 1071: the early hollowbody A-label sequence differs from Gibson’s A-prefix series; later impressed numbers require feature checks.'),
   source('Circa-1950 Epiphone Acoustic Catalog','https://wiedler.ch/nyepireg/docs/1950_Acoustic.pdf','Original acoustic DeLuxe description and its large-body comparison with the Emperor.'),
   source('1954 Epiphone Catalog','https://wiedler.ch/nyepireg/docs/1954_catalog.pdf','Acoustic DeLuxe and two-pickup De Luxe Electric specifications.'),
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','Kalamazoo A212 and A212N materials, inlays, finish designations and hardware.'),
   source('1966 Epiphone Acoustic Catalog','https://www.vintageguitarandbass.com/epiphone/catalogues/1966_11.php','DeLuxe acoustic dimensions and special-order notation.'),
   source('1960 Gibson Catalog, Page 37','https://www.vintageguitarandbass.com/gibson/catalogues/1960_37.php','Original L-5C construction and scale for the limited Gibson comparison.'),
   source('New York Epiphone Model Research','https://wiedler.ch/nyepireg/models.html','Early DeLuxe development and acoustic versus electric model distinctions.'),
   source('JVG Sheraton History','/post/epiphone-sheraton-history-value/','House chronology for CMI ownership, Kalamazoo production and the 1970 move.')
  ]}
 ])
 ],
 faqs:[
 {q:'Did Kalamazoo Make An Acoustic DeLuxe?',a:'Yes. The 1961 catalog lists A212 and A212N acoustic cutaways, and the 1966 catalog includes the DeLuxe with a special-order notation.'},
 {q:'Does Regent Mean Factory Electric?',a:'No. Regent identifies a cutaway within the older model family. The body construction and electrical installation determine whether the guitar is acoustic or factory electric.'},
 {q:'Can Every DeLuxe Be Identified By One Body Width?',a:'No. Body size changed over the original run, and the circa-1950 acoustic catalog even compares its size with the Emperor. Use the correct period specification.'},
 {q:'Is The Crestwood Deluxe Part Of This Guide?',a:'No. The Crestwood Deluxe is a separate solidbody model. This guide covers the American DeLuxe archtop family and its Zephyr electric variants.'}
 ],
 closing:'<p>Let construction, cutaway, decoration and factory markings establish the DeLuxe variant. Keep accessories and repairs separate from that identity. Once the evidence agrees, the <a href="/post/epiphone-deluxe-value-guide/">DeLuxe value guide</a> provides the appropriate condition-based comparison.</p>'
}
];
