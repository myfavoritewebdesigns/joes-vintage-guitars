import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph, comparison } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';

const acousticComparison=comparison(ph.triumph46Body,'This larger Triumph illustrates a pre-Gibson acoustic archtop; it is not an Olympic and does not establish Olympic dimensions or trim.');
const crestwoodComparison=comparison(ph.crestwoodBody,'The Crestwood’s mini-humbuckers differ from the Olympic’s narrow single-coil pickups.');

export const olympicGuides: ModelGuideData[] = [
{
 ...epiBase('olympic','value'), title:'Epiphone Olympic Value Guide',
 seoTitle:'Vintage Epiphone Olympic Value Guide: Acoustic And Electric',
 description:'Find Epiphone Olympic values for New York acoustics and Kalamazoo solidbodies, including Single, Double, short-scale and Special models with repair notes.',
 eyebrow:'Two Different Guitar Families · One Olympic Name',
 dek:'The New York Olympic is an acoustic archtop. The Kalamazoo Olympic is a solidbody electric. Their prices belong in separate groups.',
 hero:ph.olympicCase,
 glanceTitle:'Olympic Values By Family',
 glance:[['1940s Acoustic',range('olympic',2)],['Early Single-Pickup Solidbody',range('olympic',4)],['1963 To 1964 Olympic Double',range('olympic',8)],['Later Olympic Special',range('olympic',12)]],
 secondaryActions:[{label:'See Olympic Price Groups',href:'#values'},{label:'Identify Your Version',href:'/post/epiphone-olympic-authentication-guide/'}],
 intro:{html:`<p>The later New York acoustic Epiphone Olympic price group is estimated at ${range('olympic',2)}, while a 1963 to 1964 Kalamazoo Olympic Double solidbody is ${range('olympic',8)}. The shared name covers different kinds of guitars. These ranges assume excellent, original condition with the original case. Start with the <a href="/post/epiphone-olympic-authentication-guide/">Olympic authentication guide</a> if you are unsure which family, pickup count or scale length you have.</p>`,calloutTitle:'Choose Acoustic Or Solidbody First',callout:'Don’t compare a small 1930s archtop with a 1960s Olympic Special. Body construction, factory configuration and condition come before the year printed on an old tag.'},
 sections:[
 section('values','Olympic Prices By Instrument Type','Joe’s Estimated Market Values',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('olympic'),
  p('<p>The acoustic rows lead the chart, followed by the Kalamazoo electrics. Documented acoustic body widths progress from 13⅝ inches in 1931 to 14¾ inches in 1935 and 15¼ inches by 1936. A large-body 1936 example needs individual appraisal; the early pricing bracket does not make it a smaller-body guitar. The 1940 to 1949 six-string and 1937 to 1949 tenor ranges are pricing categories, not independent proof of manufacture through 1949. The authentication guide explains the earlier end found in documented-instrument research. “Single” and “Double” describe pickup count in the electric family; the configuration column separately describes the cutaway. An Olympic Double doesn’t simply mean any Olympic with two cutaways. Keep those two uses of “double” separate when choosing a range.</p><p>A factory pickup arrangement must be verified from the body and wiring evidence. Installing a second pickup in a Single doesn’t make it an original Double. Likewise, a short-scale guitar needs to be measured rather than identified from a photograph of its overall length. The earlier double-cutaway Olympic shown in the 1962 catalog has no separate price row here. Do not put it in a single-cutaway row just because its year overlaps. Send its body, pickup layout and markings for an individual estimate; the later asymmetrical double-cutaway rows are not a substitute.</p>')
 ]),
 section('acoustic','Value The New York Acoustic On Its Own Terms','Small Archtops And Tenors',[
  {type:'columns',items:[
   {title:'Early And Later Acoustic Sizes',html:`<p>The earlier 1931 to 1936 acoustic group is ${range('olympic',0)}. Later 1937 to 1939 examples are ${range('olympic',1)}, and the 1940 to 1949 group is ${range('olympic',2)}. These are acoustic instrument comparisons. An added pickup doesn’t move the guitar into the 1960s electric rows.</p><p>Photograph the bridge, neck joint, top and back carefully. A small archtop can need significant structural work even when its finish looks attractive. Show any repaired cracks and explain whether the action has been checked. Size and age don’t replace a condition assessment.</p>`},
   {title:'Four-String Olympic Tenors',html:`<p>The 1937 to 1949 tenor range is ${range('olympic',3)}. Verify that the four-string neck is the factory configuration rather than a conversion or a six-string guitar missing strings. The headstock, nut and bridge should be shown together.</p><p>Keep the tenor separate from the six-string comparison even when both guitars share similar body appointments. A repaired neck or altered string spacing needs to be disclosed. If you do not know whether the neck is original to the body, send clear joint and label photographs before selecting a value row.</p>`}
  ]},
  p('<p>The acoustic Olympic’s run ends before the Philadelphia and Gibson periods discussed for other Epiphone archtops. A claimed Philadelphia-era acoustic Olympic needs its model and year checked against the label and body. A family story placing an instrument in the 1950s may describe when it was purchased rather than when it was built.</p>')
 ],'dark'),
 section('kalamazoo','How Kalamazoo Olympic Versions Compare','Pickup Count, Scale And Body',[
  {type:'cards',variant:'rank',items:[
   {title:'Single-Pickup Olympics',html:`<p>The early single-cutaway Single is ${range('olympic',4)}. The 1963 to 1964 double-cutaway group is ${range('olympic',5)}, followed by ${range('olympic',6)} for the later row. Confirm the factory pickup opening and controls; a replaced guard can conceal a modification beneath it.</p>`},
   {title:'Olympic Double',html:`<p>The early single-cutaway Double range is ${range('olympic',7)}, with the 1963 to 1964 double-cutaway group at ${range('olympic',8)}. Later cherry or sunburst examples are ${range('olympic',9)}. The year should be corroborated by the body and headstock features rather than chosen from the higher range.</p>`},
   {title:'Short Scale And Olympic Special',html:`<p>The short-scale row is ${range('olympic',10)}. Olympic Specials have separate early and later entries. Measure the scale and identify the model before comparing prices. A small-looking guitar in a large case is not enough to establish the short-scale version.</p>`}
  ]},
  p('<p>For a Kalamazoo solidbody, originality questions often involve the pickup openings, tuners and bridge hardware. Photograph the instrument before changing anything. An old replacement part can have wear that resembles the rest of the guitar, so age alone does not establish that it left the factory there.</p><p>Unusual colors need a separate finish review. The ordinary ranges are not automatic custom-color appraisals, and a faded or stripped surface should not be assigned a rare finish name from a photograph alone. Show the edges, neck joint and protected areas that can be reached without disassembly. Leave an unresolved color unresolved until the evidence supports it.</p>')
 ]),
 {type:'photo-band',photos:[ph.olympicBody,ph.olympicSerial],quote:'This Olympic has visible tuner changes. Those belong in the appraisal, even when the model is clear.'},
 section('repairs','Changes That Affect An Olympic Estimate','Look Under The Familiar Outline',[
  {type:'cards',variant:'condition',items:[
   {title:'Routing For Larger Pickups',html:'<p>A larger pickup may require enlarging the original opening. The visible cover does not reveal the extent of that work. Include technician photographs or repair records if available. Read <a href="/do-replaced-pickups-hurt-guitar-value/">how pickup replacements affect value</a> before assuming that returning a small pickup restores untouched condition.</p>'},
   {title:'Tuners And Headstock Work',html:'<p>Show both sides of the headstock, including unused screw holes and any plugs. Replacing tuners may have enlarged the shaft holes as well. A repaired break is a separate issue from a tuner swap, so document each instead of grouping everything as normal wear.</p>'},
   {title:'Finish And Neck-Joint Repairs',html:'<p>Photograph a refinished surface, repaired heel or damaged joint directly. Use <a href="/what-lowers-vintage-guitar-value/">the condition guide</a> and <a href="/how-much-does-a-refinish-hurt-guitar-value/">the refinish guide</a> for the appraisal questions. New paint does not remove the need to explain the underlying work.</p>'}
  ]},
  p('<p>A missing vibrato arm, changed bridge or replacement pickguard should be listed even when the guitar plays properly. Those parts affect completeness and can help explain earlier modifications. Include any old pieces retained in the case. They may clarify what happened, although they cannot undo a filled hole or routed cavity.</p><p>Before restoring a guitar for sale, review <a href="/should-i-restore-my-guitar-before-selling/">whether repairs should come before an appraisal</a>. A working replacement can be a sensible player choice, but an owner should understand the original-condition comparison before spending money to chase the upper figure in a chart.</p>')
 ],'dark'),
 section('photos','Build A Useful Olympic Appraisal Submission','A Few Clear Views Beat A Guess',[
  {type:'checklist',items:[
   {title:'Identify The Body And Scale',html:'<p>Send complete front and back views. For a solidbody, include a measurement from the nut to the twelfth fret and explain where you measured. For an acoustic, include the lower-bout width and a side view of the body.</p>'},
   {title:'Show Serial, Pickups And Hardware',html:'<p>Photograph the serial at several light angles, the front of the headstock, all pickup positions and the bridge. Include the rear control cover and any visible alterations. Do not dismantle an instrument just to complete the first photo submission.</p>'},
   {title:'Explain Repairs And Ownership',html:'<p>List known changes and supply receipts if you have them. Photograph the case and loose parts. Separate the year someone bought the guitar from the year it was made, and tell Joe when either date is uncertain.</p>'}
  ]},
  p('<p>Describe whether the instrument currently tunes and plays, or whether it has been stored without a recent check. A short recording can demonstrate a working pickup or noisy control, but it does not replace clear condition photographs. Keep the original image resolution so the serial and small mounting details remain readable.</p><p>Case condition also belongs in the submission. A later case may be perfectly useful for protection, but it is not the original case assumed by the chart. Show the inside and the outside, and explain any damaged latch or poor fit before discussing shipment.</p>'),
  p('<p>If the guitar came from a family member, keep the inherited paperwork together. A purchase date and a build date can differ, so preserve both without silently substituting one for the other.</p>'),
  epiCTA('Ask Joe To Value Your Olympic','<p>Send the instrument details for a <a href="/free-appraisal/">free appraisal</a>. If you are selling, use <a href="/sell-my-epiphone-guitar/">Sell My Epiphone</a> and include the condition history. An offer is based on the individual guitar, not an automatic application of the chart’s upper endpoint.</p>')
 ],'light')
 ],
 faqs:[
 {q:'Is An Olympic Always An Electric Guitar?',a:'No. The New York Olympic was an acoustic archtop. The Kalamazoo name was used for solidbody electrics, which have separate value rows.'},
 {q:'Does Olympic Double Mean Double Cutaway?',a:'Double refers to the two-pickup version. Body cutaway style is a separate feature and must be checked independently.'},
 {q:'Does A Second Added Pickup Increase A Single To Double Value?',a:'It does not make the guitar a factory Olympic Double. The installation, routing and remaining original parts need an individual assessment.'},
 {q:'Are These Figures Purchase Offers?',a:'No. They are estimated market values for the stated condition and configuration. Joe reviews the actual instrument before making an offer.'}
 ],
 closing:'<p>Choose the Olympic family first, then its factory configuration and condition. The <a href="/post/epiphone-olympic-authentication-guide/">Olympic identification guide</a> helps with the name changes, scale and pickup layout. Clear photographs let the appraisal account for the instrument’s actual history.</p>'
},
{
 ...epiBase('olympic','authentication'), title:'Epiphone Olympic Authentication Guide',
 seoTitle:'Epiphone Olympic Authentication Guide: Acoustic Or Electric',
 description:'Identify an Epiphone Olympic archtop or Kalamazoo solidbody. Check pickup count, scale, serials and altered parts with photos from Joe’s guitar archive.',
 eyebrow:'New York Acoustic · Kalamazoo Solidbody',
 dek:'The Olympic name changed instruments. A 1930s archtop and a 1960s solidbody share a name, not a construction checklist.',
 hero:ph.olympicCase,
 glanceTitle:'Choose The Correct Olympic Family',
 glance:[['New York','Acoustic archtop, including tenor'],['Kalamazoo','Mahogany solidbody electric'],['Single And Double','One pickup or two pickups'],['Special And Short Scale','Separate configurations to identify']],
 secondaryActions:[{label:'Start With Construction',href:'#identity'},{label:'Compare Olympic Values',href:'/post/epiphone-olympic-value-guide/'}],
 intro:{html:'<p>An acoustic Epiphone Olympic and a Kalamazoo Olympic solidbody are different instruments. Establish that distinction before interpreting a serial or comparing parts. The older archtop did not continue unchanged through Philadelphia into Gibson production; the Olympic name returned on a solidbody line. The <a href="/post/epiphone-olympic-value-guide/">Olympic value guide</a> keeps those families separate, along with the Single, Double, short-scale and Special versions.</p>',calloutTitle:'Count Pickups And Cutaways Separately',callout:'Olympic Double describes the pickup version. It doesn’t establish the body shape, scale length or exact year.'},
 sections:[
 section('identity','Olympic Identity By Construction','Two Starting Points',[
  {type:'table',caption:'Olympic Family Checks',columns:['Family','Construction','Useful Evidence'],rows:[
   ['New York Acoustic','Small archtop with f-holes and an acoustic bridge','Body size, early appointments, label and approximate serial context'],
   ['Olympic Tenor','Four-string acoustic variant','Original four-string neck, tuner layout and bridge arrangement'],
   ['Kalamazoo Olympic','Solid mahogany body and set mahogany neck in the original catalog','Pickup count, body outline, headstock, scale and Gibson-era serial'],
   ['Olympic Special','Separate SB721 solidbody entry in the 1960s catalogs','Model designation and construction rather than the word Special alone'],
   ['Three-Quarter Olympic','Short-scale version shown alongside full-scale models in 1961','Measured scale and factory configuration']
  ]},
  p('<p>A front photograph should quickly distinguish an archtop from a solidbody. It will not necessarily distinguish a factory Single from a modified Double or a full-scale guitar from a shorter version. Those questions need measurements and closer views. Keep the model description provisional until the relevant evidence is available.</p>')
 ]),
 section('early','The New York Olympic And The Gap Before Kalamazoo','An Acoustic Name That Was Reused',[
  {type:'columns',items:[
   {title:'The Original Acoustic Olympic',html:'<p>The Olympic entered Epiphone’s acoustic line in 1931. Original catalog material and instrument research document its smaller archtop role and changes in body dimensions during the 1930s. The 1934 catalog is a useful period reference for the acoustic model. Compare its outline and appointments with the actual guitar instead of assuming that every inexpensive old Epiphone is an Olympic.</p><p>Inspect the f-holes, top, back and neck together. An added magnetic pickup doesn’t turn this guitar into a Kalamazoo solidbody. The tenor also needs a factory four-string neck; merely counting the strings currently installed isn’t sufficient identification.</p>'},
   {title:'No Continuous Philadelphia Archtop Run',html:'<p>The New York Epiphone Registry places the last documented acoustic Olympics in 1944. The value chart retains a broader 1940 to 1949 pricing category, which should not be read as proof of production in every listed year. It should not be extended through the Philadelphia years simply because other Epiphone archtops continued. A later purchase receipt can document ownership without proving that the guitar was built during that same year.</p><p>CMI acquired Epiphone in 1957 and Kalamazoo production began in 1958, as described in the <a href="/post/epiphone-sheraton-history-value/">Sheraton history</a>. The solidbody Olympic belongs to the new Gibson-built line. Its body, pickups, headstock and serial system must be assessed on that basis, not as incremental changes to the old acoustic.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[acousticComparison,ph.olympicBody],quote:'The Triumph comparison shows an acoustic archtop; the Olympic at right is a Kalamazoo solidbody.'},
 section('kalamazoo','What The Kalamazoo Olympic Is Built From','Body, Neck And Hardware',[
  p('<p>The 1961 catalog describes a solid mahogany body and mahogany neck with an adjustable truss rod, rosewood fingerboard and a combined bridge and tailpiece. It lists single-pickup and double-pickup full-scale models as well as a three-quarter version. These are shallow solid instruments, not deep acoustic bodies with a pickup added.</p><p>The full-scale catalog specification is 24¾ inches. The 1966 solidbody matrix continues that full scale and lists the Olympic and Olympic Double with double cutaways, 22 frets and a 1⅜-inch body thickness. Treat those as a dated catalog specification, then compare the individual guitar. An earlier catalog photograph should not be used as proof that all later bodies kept the same outline.</p>'),
  {type:'columns',items:[
   {title:'The Melody Maker Comparison',html:'<p>The Olympic’s narrow single-coil pickup format and simple solidbody construction belong in a different comparison from the mini-humbucker-equipped Crestwood. The Gibson Melody Maker is the useful contemporary reference for the narrow pickup and student solidbody approach. The Epiphone still needs its own body and model identification, particularly as the Olympic and Olympic Special designs separate.</p><p>Don’t apply the New York pickup to mini-humbucker transition from the Sheraton or Crestwood to every Olympic. A small pickup isn’t automatically a mini-humbucker. Joe’s archive Olympic has two narrow pickups; the comparison Crestwood has two visibly wider mini-humbuckers. Replacement covers or an enlarged route can complicate that first visual check.</p>'},
   {title:'Headstock And Tailpiece Changes',html:'<p>The original catalogs show both the earlier three-a-side approach and the later extended six-in-line headstock within the solidbody family. The <a href="/post/vintage-epiphone-crestwood-value-history-guide/">Crestwood history</a> explains the broader Kalamazoo design changes. Don’t turn a feature from that model into a universal cutoff date for every Olympic.</p><p>Inspect the bridge studs, any vibrato mounting and unused holes. These solidbody bridges and vibratos are different from the Frequensator used on Epiphone archtops. A modified Olympic carrying unfamiliar hardware needs an alteration description, not an attempt to fit an acoustic tailpiece rule to a solidbody.</p>'}
  ]},
  {type:'photos',photos:[crestwoodComparison,ph.olympicBody]},
  p('<p>A neck replacement or repaired headstock can preserve an old serial while changing the visible outline and tuners. Photograph the neck joint and the back of the headstock so those possibilities can be evaluated. The combination of features matters more than one isolated clue, especially on a guitar that has been altered for playing.</p>')
 ]),
 section('variants','Separate The Solidbody Olympic Versions','Factory Layout Before Year',[
  {type:'cards',variant:'models',items:[
   {title:'Olympic Single',html:'<p>The Single has one factory pickup. Confirm the pickup opening and control layout, and look for evidence of a removed second pickup beneath an altered guard. A guitar currently carrying one pickup might have started as a Double, so the present count is the first observation rather than the final conclusion.</p>'},
   {title:'Olympic Double',html:'<p>The Double has two factory pickup positions. Joe’s photographed example has two narrow pickups, four knobs and a selector. Inspect the openings, mounting and wiring history if a part appears mismatched. Two period pickups installed later don’t establish a factory Double configuration.</p>'},
   {title:'Three-Quarter Scale',html:'<p>The 1961 catalog gives the short-scale instrument its own designation. Measure from the nut to the twelfth fret and double that distance to establish scale length. Overall guitar length is affected by the headstock and body shape, so a small case or short-looking neck is not an adequate substitute.</p>'},
   {title:'Olympic Special',html:'<p>The Special is a distinct SB721 catalog entry. It should not be confused with a seller’s informal description of an unusual Olympic. Compare its body, neck joint, pickup count and hardware with the appropriate catalog. The 1966 catalog matrix and illustrations need to be read together rather than treating one photograph as a precise changeover calendar.</p>'}
  ]}
 ],'dark'),
 section('timeline','A Practical Olympic Production Sequence','Avoid A Single-Feature Date',[
  {type:'timeline',items:[
   {date:'1930s And 1940s',title:'The Acoustic Family',html:'<p>Use acoustic catalogs and pre-Gibson serial research. Preserve the distinction between smaller early bodies, later acoustic configurations and tenors. There is no reason to apply a Gibson headstock serial table to this part of the model’s history.</p>'},
   {date:'Early 1960s',title:'Single-Cutaway And Short-Scale Catalog Models',html:'<p>The 1961 catalog supplies an early solidbody reference, including full-scale and short-scale listings. Match the scale and pickup arrangement before comparing a guitar with that illustration. The catalog is evidence of an offering, not proof that every photograph represents the final specification of every instrument shipped that year.</p>'},
   {date:'1962 Catalog',title:'The Earlier Double-Cutaway Olympic',html:'<p>The 1962 catalog illustrates an Olympic with two cutaways and lists the Single, Double and three-quarter versions. This precedes the later asymmetrical body. A 1962 double-cutaway therefore should not be rejected because a price category describes an overlapping year group as single-cutaway. The value chart does not provide a separate estimate for this transitional configuration.</p>'},
   {date:'Mid-1960s',title:'Double-Cutaway Olympic And Separate Special',html:'<p>The later catalogs distinguish Olympic, Olympic Double and Olympic Special. Body asymmetry, headstock shape and hardware should be assessed as a group. A guitar combining an earlier headstock with a later-looking body needs further comparison rather than an automatic accusation of a replaced neck.</p>'},
   {date:'1970 Boundary',title:'End Of The Original American Scope',html:'<p>The house history places the move to Japanese production in 1970. Later imports, revived acoustic models and signature instruments belong to other production families. Their historical styling is not evidence of a 1960s build.</p>'}
  ]}
 ],'dark'),
 section('archive','A Kalamazoo Olympic From Joe’s Archive','Visible Alterations And A Readable Serial',[
  {type:'archive',items:[{label:'1960s Olympic Double',title:'Double Cutaway With A Three-A-Side Headstock',html:'<p>This Olympic has an asymmetrical double-cutaway body, two narrow pickups, four controls and a wraparound bridge. The headstock has three tuners on each side. The back view shows replacement tuners and extra mounting holes, which need to remain part of the description.</p><p>The photographs support a 1960s Olympic Double identification, but they do not settle an exact year or original finish claim. The serial and feature combination needs further reconciliation. The case shown is an SKB case; it should not be represented as the original 1960s case.</p>',photos:[ph.olympicCase,ph.olympicBody,ph.olympicHead,ph.olympicBack,ph.olympicSerial]}]}
 ],'archive'),
 section('serial','Serial 84467 And The Limits Of A Lookup','Keep Uncertainty Visible',[
  {type:'serials',items:[{serial:'84467',title:'Five Digits On The Rear Headstock',html:'<p>The full-size photograph supports 84467. Read the original image rather than relying on a thumbnail or archive description. The replaced tuners and unused holes are also visible in the same view.</p>',photo:ph.olympicSerial}]},
  p('<p>Kalamazoo Epiphones use Gibson-era numbering, so the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> is the appropriate reference. A candidate year still has to fit the body, headstock and other features. This example remains dated broadly to the 1960s here because the linked serial chart gives 1962, 1963 or 1964 for the range containing 84467. The photographs do not narrow those candidates to a single build year.</p><p>For the earlier acoustic Olympic, use pre-Gibson research instead. Model-batch numbering and incomplete surviving records limit the precision of serial estimates. Photograph the label, body and neck details, and retain every character that can actually be read. Do not restore missing digits from a number that seems close in an online list.</p>')
 ]),
 section('controls','Read The Pickguard And Control Layout','Evidence Of A Changed Configuration',[
  {type:'columns',items:[
   {title:'Separate The Guard From The Wood Beneath It',html:'<p>A replacement guard can be cut for a different pickup layout without revealing what happened to the body. Start by photographing the guard’s outline, screw positions and pickup openings. Look for exposed unused holes or a cover that does not sit squarely in its opening. Those observations identify questions for a closer examination; they do not by themselves prove a particular conversion.</p><p>For Joe’s Olympic, the photograph records two narrow pickups and four knobs in one view. Keep that complete view with any later close-ups so the parts can be related to the same instrument. A detached pickup photograph without its original location is less useful for establishing the factory configuration.</p>'},
   {title:'Document The Circuit Without Guessing From Sound',html:'<p>A working selector and two audible pickups establish that the present system functions. They do not establish that the wiring, pots or pickups are original. If a technician opens the control area for a necessary inspection, retain photographs of the component markings and connections before any repair.</p><p>Do not date the entire Olympic from one replaced potentiometer or from an unverified claim about how an original pickup should sound. Component evidence belongs beside the body and neck evidence. A changed circuit can be described precisely while leaving the broader model identification intact.</p>'}
  ]}
 ]),
 section('checklist','Inspect A Kalamazoo Olympic In This Order','Construction, Configuration And Changes',[
  {type:'checklist',items:[
   {title:'Measure The Scale And Identify The Body',html:'<p>Record the nut-to-twelfth-fret distance, both cutaways and the neck joint. Compare the body with the appropriate Olympic or Special catalog entry. Keep the measurement method in the photo record.</p>'},
   {title:'Check Factory Pickup Openings',html:'<p>Count the pickups and controls, then inspect visible edges for enlarged routes or altered guard openings. Technician photographs are useful when concealed work needs to be examined. Do not remove fragile parts for a first appraisal request.</p>'},
   {title:'Photograph Headstock And Tuners',html:'<p>Include logo, outline, serial and tuner backs. Note plugs, extra screw holes, enlarged shafts and any repaired break. A changed tuner set should not disappear behind a statement that the guitar is original.</p>'},
   {title:'Review Bridge And Vibrato Mounts',html:'<p>Show the studs, tailpiece area and any unused holes. Compare the installed hardware with the period model specification, while keeping later player modifications separate from factory options.</p>'},
   {title:'Reconcile The Evidence',html:'<p>When a serial candidate conflicts with the physical features, retain the broader period and ask for a closer review. The task is to identify the instrument accurately, not to produce a single year at any cost. Preserve the inspection photographs alongside any repair invoice.</p>'}
  ]}
 ],'light'),
 section('later','Repairs And Later Olympic Names','Originality Is A Separate Finding',[
  p('<p>A routed body, replaced neck or refinished surface requires a specific description. A legitimate Kalamazoo instrument can have substantial changes, and an old serial alone cannot certify the remaining structure. Follow the <a href="/what-lowers-vintage-guitar-value/">condition guide</a> once the model and alterations have been established.</p><p>Post-1970 Japanese, Korean and Chinese production, Elitist instruments and signature models must be identified as their actual later series. Modern acoustic name reuse also needs that distinction. A recreated Olympic outline or historical model year in a product name does not date the physical guitar. The full serial system, country marking and original paperwork are better starting points.</p>'),
  p('<p>Include a side photograph of the neck joint and bridge together, so a repair or changed setup can be assessed in context.</p>'),
  epiCTA('Send Your Olympic For A Closer Review','<p>Send the body, scale measurement, serial and modification photos for a <a href="/free-appraisal/">free appraisal</a>. The <a href="/post/epiphone-olympic-value-guide/">Olympic value guide</a> follows the confirmed configuration. Use <a href="/sell-my-epiphone-guitar/">Sell My Epiphone</a> to discuss a purchase offer.</p>')
 ]),
 section('references','Olympic Research References','Original Catalogs And House Dating Guides',[
  {type:'sources',items:[
   source('1934 Epiphone Catalog','https://acousticmusic.org/wp-content/uploads/2016/02/Epiphone-1934-Catalog.pdf','Original acoustic Olympic listing.'),
   source('New York Epiphone Model Research','https://wiedler.ch/nyepireg/models.html','Acoustic Olympic introduction, size development and end of the original acoustic run.'),
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','Original Olympic solidbody materials, full-scale and short-scale variants, pickup counts and hardware.'),
   source('1962 Epiphone Catalog, Page 9','https://www.vintageguitarandbass.com/epiphone/catalogues/1962_9.php','Original illustration of the earlier double-cutaway Olympic with Single, Double and three-quarter listings.'),
   source('1964 Epiphone Catalog, Page 5','https://www.vintageguitarandbass.com/epiphone/catalogues/1964_5.php','Original Olympic and Olympic Special catalog entries and illustrations.'),
   source('1960 Gibson Catalog, Page 12','https://www.vintageguitarandbass.com/gibson/catalogues/1960_12.php','Original Melody Maker description and illustration for the narrow-pickup student-solidbody comparison.'),
   source('1966 Epiphone Catalog, Page 4','https://www.vintageguitarandbass.com/epiphone/catalogues/1966_4.php','Solidbody specification matrix and comparison of Olympic pickups with the Crestwood family.'),
   source('JVG Crestwood History','/post/vintage-epiphone-crestwood-value-history-guide/','Broader Kalamazoo solidbody design chronology and Gibson-era serialization.'),
   source('JVG Gibson Serial Guide','/how-to-read-gibson-serial-numbers/','Number-system reference for Gibson-built Epiphones, checked against physical features.')
  ]}
 ])
 ],
 faqs:[
 {q:'Did The Acoustic Olympic Become The Kalamazoo Solidbody?',a:'The name was reused for a different instrument. The older acoustic run ended before the Gibson period, and the solidbody requires its own construction and serial checks.'},
 {q:'Does An Olympic Have Mini-Humbuckers Like A Crestwood?',a:'The original Olympic catalog family uses narrow single-coil pickups. Do not identify them as mini-humbuckers merely because they are small, and inspect any replacement installation separately.'},
 {q:'How Do I Identify A Short-Scale Olympic?',a:'Measure from the nut to the twelfth fret and double the distance, then compare the factory model and catalog specification. Overall guitar length is not the scale length.'},
 {q:'Why Is Joe’s Example Dated Only To The 1960s?',a:'The photographs establish the model family and readable serial, but an exact year needs the serial interpretation reconciled with the body and headstock configuration. The guide preserves that uncertainty.'}
 ],
 closing:'<p>Start with acoustic or solidbody, then establish the factory version and its alterations. Let the serial support that identification rather than overrule it. The <a href="/post/epiphone-olympic-value-guide/">Olympic value guide</a> provides separate comparisons once those questions are settled.</p>'
}
];
