import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';

export const triumphGuides: ModelGuideData[] = [
{
 ...epiBase('triumph','value'), title:'Epiphone Triumph Value Guide',
 seoTitle:'Vintage Epiphone Triumph Value Guide: American Prices',
 description:'Compare vintage Epiphone Triumph prices from early New York archtops to Kalamazoo cutaways, with advice on added pickups, repairs and appraisal photos.',
 eyebrow:'Triumph And Triumph Regent · American Archtops',
 dek:'Price the acoustic guitar first. An added pickup, a cutaway or a factory change each needs its own description.',
 hero:ph.triumph46Body,
 glanceTitle:'Triumph Price Examples',
 glance:[['1936 To 1940 Sunburst',range('triumph',3)],['1941 To 1957 Sunburst',range('triumph',5)],['1958 To 1964 Kalamazoo',range('triumph',10)],['1966 To 1969 Kalamazoo',range('triumph',12)]],
 secondaryActions:[{label:'Find A Triumph Price',href:'#values'},{label:'Check The Model',href:'/post/epiphone-triumph-authentication-guide/'}],
 intro:{html:`<p>A vintage Epiphone Triumph in excellent, original condition with its original case is estimated at ${range('triumph',5)} for a 1941 to 1957 sunburst non-cutaway, and ${range('triumph',10)} for a 1958 to 1964 Kalamazoo cutaway. Earlier sizes and Regent versions have separate rows below. Use the <a href="/post/epiphone-triumph-authentication-guide/">Triumph authentication guide</a> to establish the body, factory period and alterations before treating a price as a match for your guitar.</p>`,calloutTitle:'An Added Pickup Needs Its Own Assessment',callout:'The 1946 Triumph shown here has an added DeArmond pickup. Its value starts with the acoustic Triumph and the condition of the installation, not an assumed factory electric model.'},
 sections:[
 section('values','Triumph Values From New York To Kalamazoo','Excellent, Original Examples',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('triumph'),
  p('<p>The year groups are tied to the configurations written beside them. The early walnut-bodied entry isn’t a substitute for the later maple-bodied instrument, and a rounded cutaway has a separate comparison from a non-cutaway. Read the whole row even if a family label supplies a year that appears to fit.</p><p>These figures assume the guitar is structurally sound and retains the original features described. An altered top, broken neck or broad refinish needs a different assessment. The chart doesn’t provide a factory electric Triumph range or a separate 1970 figure. If your instrument falls outside the listed configuration, send it for review instead of borrowing the nearest-looking number.</p>')
 ]),
 section('early','How The Early Triumph Groups Differ','Size And Original Materials',[
  {type:'timeline',items:[
   {date:'1931 To 1933',title:'The Earlier Body Configurations',html:`<p>The 1931 to 1932 walnut-bodied range is ${range('triumph',0)}, while the 1933 maple-bodied row is ${range('triumph',1)}. Identifying the wood and period matters more than selecting a year from an uncertain number. Good photographs of the back and sides help, but a construction question may require an in-person inspection.</p>`},
   {date:'1934 To 1940',title:'Larger Maple Archtops',html:`<p>The 1934 to 1935 estimate is ${range('triumph',2)}; the 1936 to 1940 group is ${range('triumph',3)}. Measure the lower bout and show the full instrument so the size change isn’t hidden by a tight crop. The price groups don’t make a repaired later guitar equivalent to a clean earlier one.</p>`},
   {date:'1941 To 1957',title:'Natural, Sunburst And Philadelphia-Era Examples',html:`<p>Natural non-cutaways are estimated at ${range('triumph',4)}, with sunburst examples at ${range('triumph',5)}. This period extends across the older factory history, including Philadelphia. Preserve the label wording, but don’t assign a premium from the city name alone. Finish originality and the condition of the carved top remain central to the comparison.</p>`}
  ]}
 ],'dark'),
 section('regent','Value A Regent As A Cutaway','Preserve The Original Outline',[
  p(`<p>The natural 1948 to 1952 Triumph Regent range is ${range('triumph',6)}, and the sunburst range is ${range('triumph',7)}. Later pre-Gibson cutaways have their own rows. The cutaway needs to be part of the factory body, not a later conversion. If the rim, binding or finish around that area looks different from the rest of the guitar, photograph it before assigning the Regent description.</p><p>A cutaway can be a useful playing feature without outweighing condition. A stable non-cutaway with documented repairs may be a clearer purchase than a cutaway with an unexplained neck joint or altered top. The chart gives a comparison for the stated condition, not a rule that every Regent must be worth more than every ordinary Triumph.</p>`)
 ]),
 section('kalamazoo','Kalamazoo Triumph Prices Need Their Own Comparison','Gibson-Built Acoustic Cutaways',[
  {type:'columns',items:[
   {title:'The Earlier A412 Instruments',html:`<p>The 1958 to 1964 sunburst cutaway estimate is ${range('triumph',10)}. Start with the Gibson-built acoustic specification and verify the factory markings. An older New York Triumph with a pickup fitted later does not enter this group because it resembles an electric guitar in a photograph.</p><p>For a Kalamazoo appraisal, include the headstock serial, internal label, bridge and a full side view. The neck angle and remaining bridge adjustment are useful condition evidence. A playable guitar still needs its original parts and finish reviewed before the excellent, original range can be applied.</p>`},
   {title:'The Mid And Late 1960s',html:`<p>The 1965 row is ${range('triumph',11)}, followed by ${range('triumph',12)} for 1966 to 1969. A narrow difference between neighboring rows should not distract from a major repair. Confirm the year with the guitar’s features, then assess its actual condition.</p><p>The Kalamazoo charts here cover sunburst. A cataloged natural-finish guitar still deserves identification, but it should not receive an invented natural-finish premium. Send the finish evidence and model marking for an individual estimate. Catalog availability and a published price estimate answer different questions.</p>`}
  ]},
  p('<p>Original hardware can be difficult to evaluate from a full-body view. Add close-ups of the Frequensator, bridge base, tuner backs and pickguard mounts. If a part is a replacement, say so and include the removed component if it survives. A functioning replacement may help playability, but an appraisal should not silently count it as the factory part.</p>')
 ],'dark'),
 {type:'photo-band',photos:[ph.triumph46Front,ph.triumph46Side],quote:'The side view helps explain the neck angle and body condition behind an attractive front photograph.'},
 section('condition','What Can Move A Triumph Outside Its Chart Range','Structural And Cosmetic Changes',[
  {type:'cards',variant:'condition',items:[
   {title:'A Pickup Installation',html:'<p>Show how the pickup is attached and where its cable and controls run. A removable accessory and a routed top are different alterations. Do not remove a fragile old installation just to improve the appearance for sale. The <a href="/do-replaced-pickups-hurt-guitar-value/">pickup guide</a> helps frame the questions about original and replacement components.</p>'},
   {title:'Neck And Top Repairs',html:'<p>Describe a reset, repaired heel, headstock break or distorted top directly. Include repair paperwork when available. A guitar can play well after serious work, but the repair remains part of its value description. Use angled photographs to show the repaired area and its relationship to the rest of the instrument.</p>'},
   {title:'Finish And Binding Work',html:'<p>Replaced binding and added finish should be visible in the submission. Review <a href="/what-lowers-vintage-guitar-value/">condition factors</a> and <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish effects</a> before treating a cleaner surface as a more original guitar. Preservation and cosmetic improvement are not always the same decision.</p>'}
  ]},
  p('<p>Frets, bridge saddles and tuners also affect a buyer’s immediate needs. Describe the guitar as it sits: whether it has been played recently, whether the action is comfortable and whether all tuners work. If it has been stored for decades, that is useful information. There is no need to promise playability you have not checked.</p><p>Before spending money on a restoration, read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> and request an appraisal in the present condition. The goal is to understand the instrument before choosing work, especially when old hardware or finish might be discarded in the process.</p>')
 ]),
 section('appraisal','Send A Triumph Photo Set That Answers The Basics','Identity, Condition And History',[
  {type:'checklist',items:[
   {title:'Start With Front, Back And Side Views',html:'<p>Show the entire body and neck in even light. Add a low side view along the strings and bridge. Include a lower-bout measurement if the instrument may belong to an early size group.</p>'},
   {title:'Photograph The Label And Alterations',html:'<p>Make the model and serial readable without removing the label. Show every pickup mount, extra hole and known repair. Keep original image files so small details remain available if Joe needs a closer look.</p>'},
   {title:'Include What Came With The Guitar',html:'<p>Photograph the case, old strings or accessories, loose parts and receipts. Explain the ownership history without assigning an exact year from memory alone. A dated photograph is strongest when the instrument can be identified within it.</p>'}
  ]},
  p('<p>Tell Joe whether the case is original, later or unknown. A sturdy replacement can protect the instrument without satisfying the original-case assumption in the chart. Photograph its fit around the headstock and body, and keep any old case labels or purchase paperwork with the guitar’s history.</p>'),
  epiCTA('Get An Appraisal For Your Triumph','<p>Use the <a href="/free-appraisal/">free appraisal form</a> for a value assessment, or <a href="/sell-my-epiphone-guitar/">send your Epiphone for an offer review</a> if you plan to sell. Include the pickup installation and repair history at the start so the estimate addresses your actual guitar.</p>')
 ],'light')
 ],
 faqs:[
 {q:'What Is A 1940s Epiphone Triumph Worth?',a:`For the 1941 to 1957 non-cutaway group, Joe’s estimate is ${range('triumph',4)} in natural and ${range('triumph',5)} in sunburst, assuming excellent, original condition with the original case.`},
 {q:'Does A DeArmond Pickup Make A Triumph A Factory Electric?',a:'No. An added pickup is assessed as an installation on the acoustic guitar. The mounting, any holes and the condition of the instrument need to be reviewed separately.'},
 {q:'Are Kalamazoo Triumphs Included?',a:'Yes. The chart has separate Gibson-built sunburst cutaway rows for 1958 to 1964, 1965, and 1966 to 1969.'},
 {q:'Should I Replace Old Hardware Before Asking For A Value?',a:'Get the guitar assessed first. Show the present parts and any removed originals so repair choices can be made with the instrument’s condition and originality understood.'}
 ],
 closing:'<p>Match the Triumph’s size, period and cutaway configuration, then describe its condition without hiding the added pickup or old repairs. The <a href="/post/epiphone-triumph-authentication-guide/">authentication guide</a> helps resolve the identity. An appraisal can then address the guitar you own instead of an ideal example from a chart.</p>'
},
{
 ...epiBase('triumph','authentication'), title:'Epiphone Triumph Authentication Guide',
 seoTitle:'Epiphone Triumph Authentication Guide: Dates And Details',
 description:'Identify a vintage Epiphone Triumph from its body, cutaway, label and hardware. Follow New York, Philadelphia and Kalamazoo versions with Joe’s photos.',
 eyebrow:'New York, Philadelphia And Kalamazoo · Triumph Archtops',
 dek:'An acoustic Triumph can carry an added pickup. Establish the original guitar before evaluating the electrical accessory.',
 hero:ph.triumph46Front,
 glanceTitle:'Triumph Identification Checks',
 glance:[['Original Family','Carved-top acoustic archtop'],['Regent','Acoustic cutaway version'],['Kalamazoo Model','A412 and natural A412N catalog designations'],['Photo Example','1946 Triumph with added DeArmond pickup']],
 secondaryActions:[{label:'Inspect A Triumph',href:'#identity'},{label:'Read The Value Guide',href:'/post/epiphone-triumph-value-guide/'}],
 intro:{html:'<p>An Epiphone Triumph is identified first as an acoustic archtop, even when an owner has fitted a pickup. The original body, neck, label and hardware establish the model; the pickup installation is a separate question. This guide follows the early New York instruments through Philadelphia and into Gibson’s Kalamazoo A412. Once that identity is supported, the <a href="/post/epiphone-triumph-value-guide/">Triumph value guide</a> supplies the appropriate price groups.</p>',calloutTitle:'Do Not Date The Guitar From Its Accessory',callout:'A pickup, pickguard or set of tuners can be younger than the instrument carrying it. Photograph the attachment and surrounding wood before treating that part as a factory specification.'},
 sections:[
 section('identity','Triumph Features By Factory Period','Read The Body Before The Serial',[
  {type:'table',caption:'The American Triumph Family',columns:['Period Or Version','Construction','Identification Focus'],rows:[
   ['Early New York','Smaller acoustic bodies; walnut and maple configurations change during the early 1930s','Width, back and side construction, early decoration and label'],
   ['Later New York And Philadelphia','Large spruce-top acoustic archtops, including cutaway Regents','Original outline, period headstock decoration, tailpiece and approximate serial dating'],
   ['Kalamazoo A412 / A412N','Carved spruce top, arched maple back and rims, mahogany neck in the 1961 catalog','Cutaway body, adjustable truss rod, Epiphone appointments and Gibson-era serial system'],
   ['Added-Pickup Instrument','Underlying acoustic model remains the starting identity','Pickup mounting, cable routing and any permanent changes to the top']
  ]},
  p('<p>Don’t force a later specification onto an early Triumph. A different lower-bout width or headstock decoration may fit an earlier catalog. Conversely, an old-looking pickup doesn’t establish an early factory electric version. The useful identification names the acoustic model, its likely period and the alterations that can actually be seen.</p>')
 ]),
 section('pre-gibson','The Triumph Before Gibson Ownership','New York And Philadelphia',[
  {type:'columns',items:[
   {title:'The New York Acoustic Sequence',html:'<p>The Triumph was part of Epiphone’s 1931 archtop line. Its early history includes changes in body size and in the wood used for the back and sides. The 1934 catalog documents a carved spruce top with maple for the body and neck. Measure a surviving guitar rather than assuming that every prewar example has the later large outline.</p><p>Compare the headstock, fingerboard markers and f-hole shape with a catalog from the relevant period. An elaborate decorative pattern isn’t enough to distinguish a Triumph from the more expensive Epiphone archtops. The complete set of body, ornamentation and label evidence should support the name.</p>'},
   {title:'The Philadelphia Continuation',html:'<p>The 1954 catalog preserves the Triumph as an acoustic model and shows cutaway and non-cutaway options. Natural and shaded finishes appear in the period catalog listings, with a tenor version also listed. The move to Philadelphia therefore belongs within the pre-Gibson Triumph story rather than being treated as a new Gibson production period.</p><p>Record a label’s address and model wording exactly, but avoid turning the printed address into a precise build date. Labels and parts can outlast a catalog season. An approximate date supported by construction is more defensible than a single year chosen only because the label looks familiar.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[ph.triumph46Body,ph.triumph46Label],quote:'This Triumph’s label and acoustic body identify the guitar separately from the added pickup.'},
 section('timeline','Triumph Changes To Check In Order','Model Development And Factory Transition',[
  {type:'timeline',items:[
   {date:'1931 To The Mid-1930s',title:'Body And Material Changes',html:'<p>The early model groups include walnut and then maple constructions. Treat dimensions and materials as identification evidence, not merely a finish description. A dark sunburst can hide the wood in a front photograph, so the back and rim views matter.</p>'},
   {date:'Late 1930s And 1940s',title:'The Larger Acoustic Format',html:'<p>The later pre-Gibson Triumph has the large archtop format familiar from Joe’s 1946 example. Its non-cutaway outline remains distinct from the Regent. Photograph the original bridge and tailpiece arrangement even if an accessory pickup now attracts most of the attention.</p>'},
   {date:'Late 1940s And 1950s',title:'Regent Cutaways',html:'<p>The acoustic cutaway appears within the Triumph family. Compare the rim and binding around the cutaway with period catalog drawings and photographs. The Regent name identifies the body option; it doesn’t promise factory-installed electronics.</p>'},
   {date:'1957 To 1958',title:'The Change To Gibson Ownership',html:'<p>CMI purchased Epiphone in 1957, with Kalamazoo production beginning in 1958. The <a href="/post/epiphone-sheraton-history-value/">Sheraton history</a> establishes that chronology. A late pre-Gibson guitar and an early Gibson-built Triumph need different construction and serial comparisons.</p>'},
   {date:'The 1960s',title:'The A412 Acoustic Cutaway',html:'<p>The 1961 catalog lists shaded A412 and natural A412N versions. The 1966 acoustic matrix still includes the Triumph. That supports the model’s continued place in the Kalamazoo line without supplying a production total for every year.</p>'}
  ]}
 ],'dark'),
 section('kalamazoo','Identifying A Kalamazoo A412 Triumph','Construction And Gibson Comparisons',[
  p('<p>The Kalamazoo Triumph is a full-depth acoustic cutaway. The 1966 catalog gives a 17⅜-inch body width, 20¾-inch body length, 3⅜-inch depth and 25½-inch scale. Measure the rim rather than including the arch of the top in the depth measurement. A ruler photographed in place helps explain a measurement that differs slightly from a printed specification.</p><p>The 1961 description specifies a carved spruce top, maple back and rims, and a mahogany neck with an adjustable truss rod. It also identifies a bound rosewood fingerboard, a rosewood bridge and a Frequensator tailpiece. Those features establish an acoustic construction; the model doesn’t become a laminated electric hollowbody because a magnetic pickup was added later.</p>'),
  {type:'columns',items:[
   {title:'What It Shares With A Gibson L-7C',html:'<p>The contemporary L-7C provides a useful Gibson comparison: the 1960 catalog specifies a carved spruce top, maple back and rims, mahogany neck, rosewood fingerboard and 25½-inch scale. The shared materials and long scale explain the relationship between the Kalamazoo acoustic families. They don’t make the two models identical.</p><p>The Epiphone keeps its own headstock decoration, fingerboard pattern and Frequensator. Compare the entire instrument with the Triumph catalog image rather than authenticating it from a Gibson feature list. A Gibson replacement bridge or tuner set may fit physically while still being a change that belongs in the description.</p>'},
   {title:'What Did Not Change Into An Electric Specification',html:'<p>The New York pickup to mini-humbucker transition described for Kalamazoo electric Epiphones doesn’t turn the A412 into a factory electric model. The cataloged Triumph is acoustic. A fitted DeArmond, floating pickup or later routed installation must be assessed on its own evidence.</p><p>Document whether the pickup hangs from the fingerboard, attaches to the pickguard or uses holes in the body. Follow the cable to its control and output location. Do not assume an old component was installed when the guitar was new. The installation can be period work, later work or unresolved without changing the underlying acoustic model identification.</p>'}
  ]},
  p('<p>The Kalamazoo headstock and label should be read together with the guitar’s serial. Use the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial-number guide</a>, because Gibson-built Epiphones follow the broader Kalamazoo numbering systems. Reused number ranges and replaced components make a serial-only conclusion inadequate. Photograph the front and back of the headstock, including the tuner mounts and any finish changes.</p><p>The published chronology places the end of original American Epiphone production in 1970. That is the boundary of this guide, not a claim that a Triumph was built in every month up to the move. A surviving catalog or price list documents an offering; a particular guitar still needs its own evidence.</p>')
 ],'dark'),
 section('variants','Separate The Triumph’s Factory Variants','String Count, Cutaway And Finish',[
  {type:'cards',variant:'models',items:[
   {title:'Six-String Non-Cutaway',html:'<p>Begin with the uninterrupted upper-bout outline and confirm that the instrument has a six-string neck. The non-cutaway body does not supply an exact year: it covers different early sizes and later pre-Gibson configurations. Check the lower-bout measurement, headstock and label together. A modern replacement guard or pickup may dominate the appearance, but neither should replace those basic checks.</p>'},
   {title:'Acoustic Regent Or Cutaway',html:'<p>The cutaway body should have a coherent rim, binding and finish around the neck access area. Inspect that construction rather than accepting Regent as an owner-supplied nickname. A repair near the cutaway is not automatically a conversion, so describe the visible evidence and seek an inspection when the work is unclear. Keep the older Regent terminology separate from the Kalamazoo A412 model code.</p>'},
   {title:'The Cataloged Tenor',html:'<p>The 1954 catalog includes a Triumph tenor. Count the original tuner positions and inspect the neck, nut and bridge arrangement before calling a four-string instrument a tenor. A six-string guitar with two strings missing remains a six-string model. If the neck or hardware has been converted, record that work instead of assigning the factory tenor identity from the present string count alone.</p>'},
   {title:'Natural And Shaded Kalamazoo Versions',html:'<p>The 1961 catalog distinguishes A412N natural from A412 shaded. A faded or stripped sunburst should not be relabeled natural without finish evidence. Photograph protected edges and the label before reaching a conclusion. The catalog confirms the finish option, while the instrument’s surface and records determine whether your example still wears that factory finish.</p>'}
  ]}
 ]),
 section('archive','Joe’s 1946 Triumph With A DeArmond Pickup','A Documented Acoustic Example',[
  {type:'archive',items:[{label:'New York Acoustic With Added Pickup',title:'1946 Triumph, Serial 55482',html:'<p>Joe’s photographs show a sunburst non-cutaway Triumph with a DeArmond pickup and its associated controls. The side view shows the deep acoustic body. The label photograph reads Triumph and serial 55482. The date comes from the documented archive identification; the serial itself should not be presented as an exact calendar code.</p><p>Use this guitar to understand the distinction between model and accessory. Its pickup is visible, but the body remains the acoustic Triumph being identified. The photographs do not prove the installation date or certify every component as original. A useful description preserves that distinction instead of calling the whole instrument a factory electric.</p>',photos:[ph.triumph46Front,ph.triumph46Body,ph.triumph46Label,ph.triumph46Side]}]}
 ],'archive'),
 section('numbers','Reading A Triumph Label And Serial','Approximate Pre-Gibson Dating',[
  p("<p>Early Kalamazoo hollowbodies need a separate first check: an A followed by four digits on the interior label belongs to Epiphone’s early A-series, not the similarly named Gibson A-prefix chart. Photograph the whole label and keep any factory order number separate. A model code is not a serial number. Later impressed numbers can be compared with the shared Gibson system, with the guitar’s construction used to check the result.</p>"),
  {type:'serials',items:[{serial:'55482',title:'A Readable Number On Joe’s Triumph',html:'<p>The full-size image supports all five digits. The label and model features identify the instrument together. Do not convert this example into a rule that every nearby serial was finished in the same year.</p>',photo:ph.triumph46Label}]},
  p('<p>Pre-Gibson New York Epiphones in the 50000-series acoustic run were numbered in model batches. No complete surviving factory ledger supplies exact completion dates for every instrument. The year remains an estimate supported by catalogs and physical features, as explained in the registry’s published study of model batches and surviving instruments.</p><p>A Kalamazoo number needs a different reference. Retain prefixes, spaces and all digits when photographing it, and compare the headstock marking with any internal label. If the readings disagree, report both. Do not choose whichever one produces the desired year or replace a damaged label to make the records look consistent.</p>')
 ]),
 section('checklist','A Kalamazoo Triumph Authentication Checklist','The A412 In Your Hands',[
  {type:'checklist',items:[
   {title:'Confirm A Full-Depth Acoustic Cutaway',html:'<p>Measure width and depth, inspect the arched top and back, and document the cutaway. Compare the body with the A412 catalog rather than a shallow Epiphone electric. A photograph through an f-hole may help, but concealed construction can require a qualified inspection.</p>'},
   {title:'Match Neck, Decoration And Hardware',html:'<p>Show the truss-rod cover, fingerboard markers, headstock decoration, bridge and Frequensator. Check for extra tuner holes and changed mounts. One correct component is not enough when the rest of the instrument points to a different model.</p>'},
   {title:'Identify Every Electrical Addition',html:'<p>Photograph the pickup support, controls and jack. Record any cutting or drilling. Keep the installation separate from the acoustic identity, and avoid removing parts that could damage an old pickguard or fragile finish.</p>'},
   {title:'Cross-Check The Serial And Label',html:'<p>Use the Gibson system for Kalamazoo examples and the pre-Gibson research for earlier instruments. A number that seems inconsistent should prompt another look at the guitar, not an automatic rejection or an invented explanation.</p>'},
   {title:'List Repairs Independently',html:'<p>Inspect the heel, headstock, binding and top for repairs. State which are known from invoices and which are only suspected from photographs. Model authentication and an all-original claim are different conclusions.</p>'}
  ]}
 ],'light'),
 section('repairs','Repairs And Later Name Reuse','Keep The Scope Clear',[
  p('<p>A neck reset, refret or replacement bridge may leave the guitar readily identifiable as a Triumph. Describe the work rather than treating every changed part as a false instrument. Conversely, an old label and a correct tailpiece cannot certify a rebuilt body. The extent of the original structure matters to the final description.</p><p>Later Japanese, Korean or Chinese Epiphones, Elitist releases and signature instruments are outside the original American production covered here. Do not use a historical name, Masterbilt wording or an old-style headstock as proof of a 1930s or Kalamazoo date. Establish the actual series from the guitar’s own label, origin marking, serial system and paperwork.</p><p>For the financial effect of a repair, continue to <a href="/what-lowers-vintage-guitar-value/">the condition guide</a> and the <a href="/post/epiphone-triumph-value-guide/">Triumph price guide</a>. Keep a value judgment separate from the evidence identifying the model, especially when the guitar has an added pickup that may be useful to a player.</p>'),
  epiCTA('Have Joe Review The Triumph Details','<p>Send the complete instrument, label, serial and pickup installation for a <a href="/free-appraisal/">free appraisal</a>. To discuss selling, use <a href="/sell-my-epiphone-guitar/">Sell My Epiphone</a> and include the known repair history.</p>')
 ]),
 section('references','Triumph Research References','Original Catalogs And Serial Research',[
  {type:'sources',items:[
   source('Epiphone Serialization Reference','https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf','Epiphone section, page 1071: the early hollowbody A-label sequence differs from Gibson’s A-prefix series; later impressed numbers require feature checks.'),
   source('1934 Epiphone Catalog','https://acousticmusic.org/wp-content/uploads/2016/02/Epiphone-1934-Catalog.pdf','Original Triumph materials and early acoustic specification.'),
   source('1954 Epiphone Catalog','https://wiedler.ch/nyepireg/docs/1954_catalog.pdf','Triumph acoustic, cutaway, finish and tenor versions during the Philadelphia period.'),
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','A412 and A412N construction, neck, bridge, hardware and finish designations.'),
   source('1966 Epiphone Acoustic Catalog','https://www.vintageguitarandbass.com/epiphone/catalogues/1966_11.php','Original specification matrix for the Kalamazoo Triumph.'),
   source('1960 Gibson Catalog, Page 38','https://www.vintageguitarandbass.com/gibson/catalogues/1960_38.php','Original L-7C specification used for the limited Gibson comparison.'),
   source('New York Epiphone Research','https://wiedler.ch/nyepireg/research.html','Model-batch numbering and limits of precise pre-Gibson serial dating.'),
   source('JVG Sheraton History','/post/epiphone-sheraton-history-value/','House ownership and factory chronology.')
  ]}
 ])
 ],
 faqs:[
 {q:'What Does Triumph Regent Mean?',a:'Regent identifies the cutaway version within the older acoustic Triumph family. It does not by itself indicate a factory electric guitar.'},
 {q:'Did Kalamazoo Continue The Triumph Name?',a:'Yes. The 1961 catalog documents A412 and A412N acoustic cutaways, and the model remains in the 1966 acoustic catalog.'},
 {q:'Can A Pickup Be Older Than The Guitar’s Current Wiring?',a:'Yes. An accessory can be reused or rewired. Inspect the whole installation and avoid assuming that the pickup’s age dates every component around it.'},
 {q:'Does Serial 55482 Prove An Exact 1946 Completion Date?',a:'No. Joe’s archive identifies the example as 1946, but pre-Gibson serials provide approximate dates. The number must be read with the model and physical features.'}
 ],
 closing:'<p>Identify the acoustic Triumph, establish the factory period and record any pickup installation separately. Use the label, construction and serial together. The <a href="/post/epiphone-triumph-value-guide/">Triumph value guide</a> then helps you choose a comparison that fits the actual instrument.</p>'
}
];
