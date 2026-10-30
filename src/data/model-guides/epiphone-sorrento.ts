import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph, comparison } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';
const body=comparison(ph.sheratonBody,'This is a Sheraton, not a Sorrento. Its mini-humbuckers illustrate the pickup family; the double-cutaway center-block body and Bigsby are different.');
const whole=comparison(ph.sheratonCase,'This 1961 Sheraton illustrates period Kalamazoo workmanship. It is not a Sorrento body, finish or hardware reference.');
const zephyr=comparison(ph.zephyrHead,'This is a Zephyr headstock. The period Epiphone badge is a comparison detail, not proof of a Sorrento model or date.');

export const sorrentoGuides: ModelGuideData[] = [
{
 ...epiBase('sorrento','value'),title:'Epiphone Sorrento Value Guide',
 seoTitle:'Vintage Epiphone Sorrento Value Guide: 1960 To 1970',
 description:'Check Kalamazoo Epiphone Sorrento values for one or two mini-humbuckers, with original finish, neck, pickup and repair details to photograph for appraisal.',
 eyebrow:'Kalamazoo Sorrento · One Or Two Mini-Humbuckers',
 dek:'The factory pickup count sets the first price comparison. Finish originality, neck condition and altered wiring decide how well it fits.',
 hero:whole,glanceTitle:'Sorrento Values By Pickup Count',
 glance:[['1960 To 1964, One Pickup',range('sorrento',0)],['1960 To 1964, Two Pickups',range('sorrento',3)],['1965, Two Pickups',range('sorrento',4)],['1966 To 1970, Two Pickups',range('sorrento',5)]],
 secondaryActions:[{label:'View Sorrento Prices',href:'#values'},{label:'Verify The Sorrento',href:'/post/epiphone-sorrento-authentication-guide/'}],
 intro:{html:`<p>A vintage Kalamazoo Epiphone Sorrento is estimated at ${range('sorrento',0)} with one pickup or ${range('sorrento',3)} with two pickups for the 1960 to 1964 group. Later examples have their own rows below. These estimates assume excellent, original condition and the original case. Use the <a href="/post/epiphone-sorrento-authentication-guide/">Sorrento authentication guide</a> to establish the original pickup configuration and American production before comparing values.</p>`,calloutTitle:'An Added Pickup Does Not Create A Factory Double',callout:'The two-pickup range describes an original two-pickup Sorrento. A converted single-pickup guitar needs its own appraisal, including any routing and changed controls.'},
 sections:[
 section('values','Kalamazoo Sorrento Price Ranges','Joe’s Estimates For Original Instruments',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('sorrento'),
  p('<p>The six rows separate pickup count and production group. They don’t assign a distinct premium to every color, neck shape or headstock detail. Record those features with the condition photographs; a finish or neck difference may require a separate assessment rather than a fixed surcharge.</p><p>The short-scale Sorrento listed in the 1961 catalog has no separate estimate here. Don’t silently apply a full-scale row to it. Likewise, a later reissue is outside this American chart even when its model name or advertised historical year resembles the years shown above.</p>')
 ]),
 section('early','Early Sorrento Values','Factory Single And Double Pickup Versions',[
  {type:'columns',items:[
   {title:'One Mini-Humbucker',html:`<p>The 1960 to 1964 single-pickup estimate is ${range('sorrento',0)}. Confirm that the guitar began with one pickup and retains the appropriate control arrangement. A filled bridge-pickup opening or changed pickguard needs explanation before the guitar can be described as an original single.</p><p>One pickup is a factory configuration, not automatically a missing component. Photograph the whole top and both sides of the neck pickup so Joe can distinguish the original layout from an altered instrument. A simple arrangement still deserves a careful wiring and pickup review.</p>`},
   {title:'Two Mini-Humbuckers',html:`<p>The corresponding two-pickup range is ${range('sorrento',3)}. The comparison assumes the factory double-pickup version rather than a later conversion. Include both mounting areas, the control layout and selector, along with any repair documentation.</p><p>If a pickup has been rewound or replaced, say which one and whether the removed part remains. Matching metal covers can conceal different internals. A guitar may sound balanced and play well while still requiring an originality adjustment.</p>`}
  ]}
 ],'dark'),
 section('later','Separate The 1965 And Later Price Groups','Date The Guitar Before Choosing The Row',[
  {type:'timeline',items:[
   {date:'1965',title:'The Middle Production Group',html:`<p>A one-pickup Sorrento is estimated at ${range('sorrento',1)}, and a two-pickup example at ${range('sorrento',4)}. The separate row doesn’t make a serial number conclusive. Reconcile it with the neck, headstock and hardware before assigning this narrow period.</p>`},
   {date:'1966 To 1970',title:'The Later American Comparison',html:`<p>The one-pickup estimate is ${range('sorrento',2)}, while the two-pickup range is ${range('sorrento',5)}. A clean later guitar should be judged on its actual condition, rather than automatically ranked below a more altered early instrument.</p>`}
  ]},
  p('<p>When the serial supports several possible years, preserve that uncertainty. Joe can review the neck proportions, logo, inlays and electrical evidence together. Picking the earliest possible date simply to reach a higher row turns an unresolved identification question into an unsupported value claim.</p><p>A purchase receipt may show when an owner acquired the guitar, not when it was built. Include the receipt because it can establish useful history, but keep its date separate from the factory date. The same distinction applies to an inherited description or a handwritten tag in the case.</p>')
 ],'dark'),
 section('finish','Royal Olive, Natural And Shaded Finishes','Document Color Without Assuming A Premium',[
  p('<p>The Sorrento’s cataloged finishes include Royal Olive, natural and shaded versions. The chart doesn’t split those colors into separate price rows. A distinctive-looking finish should prompt clear photographs and an originality check, rather than an automatic rare-color surcharge.</p><p>Photograph the back, rims, heel and headstock as well as the face. Color can look very different under indoor lamps and direct sun. Use even daylight and avoid a filter that shifts green, brown or red. Those pictures can show color and wear differences around hardware; finish chemistry and concealed restoration may require a hands-on inspection.</p>'),
  p('<p>Disclose stripping, overspray or a complete refinish even if the result resembles a catalog color. A natural-looking guitar may have started with a shaded finish. The <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish value guide</a> addresses that distinction. Finish evidence should be reviewed before the instrument is described as an excellent original example.</p>')
 ],'dark'),
 {type:'photo-band',photos:[whole,body],quote:'Comparison photos: this 1961 Sheraton shows period Epiphone mini-humbuckers, not a Sorrento body or a Sorrento price example.'},
 section('repairs','Condition Questions That Change A Sorrento Estimate','Keep Playability And Originality Separate',[
  {type:'cards',variant:'condition',items:[
   {title:'Headstock And Heel Repairs',html:'<p>Show repaired breaks from several angles, including any added finish. A stable professional repair is still part of the value discussion. Provide the invoice or explain what is known instead of hiding the repaired area in a distant photograph.</p>'},
   {title:'Pickup Routing And Wiring',html:'<p>Document enlarged cavities, extra controls and changed switches. Read <a href="/do-replaced-pickups-hurt-guitar-value/">how replacement pickups affect value</a> before assuming that a desirable replacement cancels the effect of altered wood.</p>'},
   {title:'Bridge Height And Neck Angle',html:'<p>Include the bridge, string height and neck joint in a side view. Good-looking frets do not answer a neck-angle question. Explain whether the guitar has been recently set up and whether the work involved replacement parts.</p>'}
  ]},
  p('<p>The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> provides broader context for changed parts and repairs. Avoid adding several guessed percentage penalties together. Some changes overlap, and the appraisal should consider the complete instrument instead of treating every screw as an independent calculation.</p><p>Before paying for restoration, read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a>. Replacing worn hardware may make sense for a player’s needs, but it should not be undertaken solely on the assumption that the expense will return in a sale. Send the current condition first.</p>')
 ]),
 section('comparison','Compare Complete Guitars At The Same Condition Level','Original Equipment And Documented Work',[
  p('<p>When comparing two Sorrentos, begin with the same factory pickup count and production group. Then list the differences that remain: a repaired headstock, replacement harness, changed tuners, missing guard or uncertain finish. This makes the comparison specific enough to discuss without assuming that two guitars with similar front photographs deserve the same estimate.</p><p>Repair documentation can resolve a question that appearance cannot. A receipt may identify a pickup rewind or a refret without implying that the rest of the guitar was restored. Read what the work actually covered, and do not expand a narrow repair record into a general all-original claim.</p>')
 ]),
 section('offer','What Joe Needs For A Sorrento Appraisal','Photographs, Measurements And Repair History',[
  {type:'checklist',items:[
   {title:'Show The Factory Layout',html:'<p>Send the full front, back and side, plus close-ups of each pickup and control. Include the complete cutaway and neck joint. These views help determine whether the one- or two-pickup configuration is original.</p>'},
   {title:'Photograph The Markings',html:'<p>Include the headstock face and back, serial and label. Photograph any visible internal stamp without moving or cleaning it. If a digit is unclear, send another angle rather than replacing it with a guess.</p>'},
   {title:'Describe What Has Changed',html:'<p>List repairs, refinishing, replacement tuners, altered pickups and any missing parts. Include the case and loose original pieces. State when the information comes from paperwork and when it comes from a former owner’s recollection.</p>'}
  ]},
  p('<p>If the guitar feels unusually small, include a scale measurement rather than assuming it is the regular model. Measure from the nut to the twelfth fret and double that distance, keeping the endpoints visible in a photograph. A short-scale version needs its own review because this chart does not provide a separate figure for it.</p><p>A case should be photographed open and closed, with the guitar seated inside. A period case that fits poorly is not necessarily the guitar’s original case. Identify replacement latches, damaged hinges and loose lining when known. Those details help Joe understand completeness and plan the next step without treating any old case as the one assumed in the chart.</p>'),
  epiCTA('Get An Individual Sorrento Estimate','<p>Send your photographs for a <a href="/free-appraisal/">free appraisal</a>. If you want to sell, use the <a href="/sell-my-epiphone-guitar/">Epiphone seller page</a> to review the process. The published market ranges are not guaranteed purchase offers.</p>')
 ],'light')
 ],
 faqs:[
  {q:'Is A Two-Pickup Sorrento Worth More?',a:'The chart gives separate ranges for factory single- and double-pickup versions. A conversion does not automatically qualify for the factory double-pickup range.'},
  {q:'Does Royal Olive Have A Separate Price?',a:'This chart has no separate color premium. The finish and its originality should be documented for the individual appraisal.'},
  {q:'Is The Short-Scale Sorrento Included In The Chart?',a:'No separate short-scale estimate is available here. Identify that version before applying a regular Sorrento comparison.'},
  {q:'Can I Use These Values For A Reissue?',a:'No. These rows describe original American Kalamazoo production, not later instruments that reuse the name.'}
 ],
 closing:'<p>A supported factory pickup layout, date and condition description make the Sorrento chart useful. If any of those remain uncertain, start with the <a href="/post/epiphone-sorrento-authentication-guide/">Sorrento authentication guide</a> and send Joe the unresolved details with the photographs.</p>'
},
{
 ...epiBase('sorrento','authentication'),title:'Epiphone Sorrento Authentication Guide',
 seoTitle:'Epiphone Sorrento Authentication Guide: Kalamazoo Years',
 description:'Authenticate a Kalamazoo Epiphone Sorrento using its cutaway, mini-humbuckers, headstock, inlays and serial, with checks for altered or later guitars.',
 eyebrow:'Original American Sorrento · 1960 To 1970',
 dek:'Check the pointed-cutaway body, original pickup count and period neck details before assigning a year from the serial.',
 hero:whole,glanceTitle:'Sorrento Identification Points',
 glance:[['Factory Versions','One or two mini-humbuckers'],['Original Body','Thin hollow electric with pointed cutaway'],['Standard Scale','24¾ inches; short-scale version also listed'],['Catalog Finishes','Royal Olive, shaded and natural']],
 secondaryActions:[{label:'Inspect The Sorrento',href:'#specifications'},{label:'Read Sorrento Values',href:'/post/epiphone-sorrento-value-guide/'}],
 intro:{html:'<p>An original Kalamazoo Epiphone Sorrento is a thin hollow electric with a pointed single cutaway and one or two mini-humbuckers. Its body, neck details and factory pickup configuration should agree before a serial is used to narrow the date. The <a href="/post/epiphone-sorrento-value-guide/">Sorrento value guide</a> separates the American price groups once those features are established.</p>',calloutTitle:'The Sorrento Is A Kalamazoo Model',callout:'It has no earlier New York acoustic run to authenticate. Don’t apply the history or single-coil pickup specification of an older Epiphone archtop simply because the headstock carries the same name.'},
 sections:[
 section('specifications','Sorrento Specifications From The Original Catalogs','Body, Neck And Factory Layout',[
  {type:'table',caption:'Kalamazoo Sorrento Identification References',columns:['Feature','Period Reference','Inspection Question'],rows:[
   ['Body','Thin arched maple body with pointed Florentine cutaway','Does the outline and depth match, without a second cutaway or center block?'],
   ['Standard Neck','Mahogany, rosewood fingerboard, 24¾-inch scale','Are the neck, joint and scale consistent with the model?'],
   ['Pickups','One or two mini-humbuckers','Was the current layout factory installed or converted?'],
   ['1961 Appointments','Dot fingerboard illustration and Epiphone headstock badge','Do later parts or a changed neck explain any mismatch?'],
   ['1966 Appointments','Catalog illustration shows oval markers and longer headstock','Does the feature group agree with the proposed period?'],
   ['Bridge And Tailpiece','Adjustable bridge and simple trapeze','Are changed parts or additional mounting holes present?']
  ]},
  p('<p>The catalog images are dated reference points, not proof of the exact day a feature changed. A transition should be supported by several details rather than one illustration. The guitar’s serial, neck, inlays and hardware should be assessed together, particularly when a repair may have replaced the most conspicuous feature.</p>')
 ]),
 section('origins','The Sorrento’s Place In The Kalamazoo Line','A Smaller Electric With Its Own Specification',[
  {type:'columns',items:[
   {title:'Gibson-Era Epiphone Production',html:'<p>The Sorrento belongs to the Gibson-era electric line that followed CMI’s 1957 purchase of Epiphone and the start of Kalamazoo production in 1958. The house <a href="/post/epiphone-sheraton-history-value/">Sheraton history</a> establishes that sequence and the move of production to Japan in 1970. This guide follows the original American Sorrento through that boundary.</p><p>Don’t create an older Philadelphia Sorrento history from an unrelated instrument with a similar name. Identify the actual model before applying the broader Epiphone chronology. The Sorrento’s relevant evidence is the Kalamazoo body, neck, electronics and numbering system.</p>'},
   {title:'The Gibson ES-125 Cutaway Comparison',html:'<p>The contemporary ES-125TC and ES-125TDC share the thin pointed-cutaway electric format, maple body description, mahogany neck and 24¾-inch standard scale. The original Gibson catalog provides that comparison. Their P-90 pickup equipment differs from the Sorrento’s mini-humbuckers.</p><p>A Gibson comparison explains the construction without making the names interchangeable. An Epiphone badge fitted to another body can’t establish a Sorrento. Check the complete model features, including pickup installation, neck decoration and markings, before drawing a factory conclusion.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[whole,body],quote:'The pictured Sheraton is a period comparison for mini-humbuckers. Its center-block body and double cutaway aren’t Sorrento features.'},
 section('timeline','Sorrento Features Across The American Run','Use Dated Catalog Snapshots',[
  {type:'timeline',items:[
   {date:'Early 1960s',title:'The Shorter Headstock And Dot-Marker Reference',html:'<p>The 1961 catalog illustrates a pointed cutaway, dot markers, headstock badge and two covered pickups. It also lists the single-pickup version. Treat the picture and model listings together rather than assuming only the photographed configuration existed.</p>'},
   {date:'1961 Finish And Scale Listings',title:'Royal Olive And Additional Options',html:'<p>The original listing includes Royal Olive, shaded and natural finishes, plus an E452T three-quarter version. The short-scale entry matters when a guitar’s proportions differ from the regular model. Measure it instead of labeling the neck incorrect from a distant picture.</p>'},
   {date:'By The 1966 Catalog',title:'Oval Markers And A Longer Headstock',html:'<p>The later illustration shows oval fingerboard markers and a longer headstock while retaining the pointed single cutaway. Those features help define a later comparison, but the catalog date alone doesn’t establish an exact changeover year.</p>'},
   {date:'The Later American Years',title:'Confirm The Whole Feature Group',html:'<p>Keep neck measurements, hardware and serial evidence together through the final American period. Don’t call a guitar early merely because it has a replacement badge or an old pickup. A later body with earlier parts needs its own description.</p>'}
  ]}
 ],'dark'),
 section('pickups','Authenticate The Factory Pickup Configuration','Single, Double And Converted Instruments',[
  p('<p>The regular Sorrento was offered with one or two mini-humbuckers. A factory single should not be described as a double with a missing pickup, and a second pickup added later doesn’t create a factory double. Examine the control arrangement and any visible evidence around the pickup openings before assigning the version.</p><p>The 1961 catalog gives the double-pickup model separate tone and volume controls with toggle selection. The single-pickup guitar has a simpler electrical arrangement. Match the model and original controls before interpreting a replaced switch or a pickguard that hides an opening.</p>'),
  {type:'columns',items:[
   {title:'Pickup Construction Matters',html:'<p>The Sorrento’s mini-humbuckers belong to the Epiphone electric pickup family, with a different internal design from Firebird pickups. Do not call them the same design because their covers appear narrow. A cover, label or resistance reading by itself is not a complete authentication.</p><p>Ask for repair records when a pickup has been rewound or replaced. If a technician examines the underside, preserve the photographs and written findings. An intact cover can remain with altered internal parts, so describe the level of inspection behind an originality claim.</p>'},
   {title:'Look For Added Controls And Woodwork',html:'<p>Photograph mismatched rings, additional holes, enlarged openings and unused selector positions. A neatly installed full-size humbucker is still a change from the factory mini-humbucker configuration. The extent of the routing is a separate question from whether the replacement functions well.</p><p>Do not pull a fragile harness through an f-hole for an initial inquiry. Start with accessible evidence and known history. Joe can identify which concealed details need a qualified inspection after seeing the guitar as a whole.</p>'}
  ]}
 ],'dark'),
 section('body','Inspect The Body, Cutaway And Neck Together','Construction Before Decoration',[
  p('<p>The Sorrento’s pointed Florentine cutaway differs from the Zephyr’s rounded cutaway and the Sheraton’s double-cutaway body. A single front view should show the entire outline. Add a side view to establish the thin rim and to reveal repaired binding, neck-joint work or a changed heel contour.</p><p>The 1961 specification describes arched maple top and back with maple rims and a mahogany neck. Its regular scale is 24¾ inches, with 20 frets listed. Measure the scale from the nut to the twelfth fret and double that distance. A bridge saddle’s adjusted position is not the most reliable endpoint for that measurement.</p>'),
  {type:'columns',items:[
   {title:'Fingerboard And Headstock Details',html:'<p>Compare dot or oval markers, fingerboard binding, logo and headstock proportions with the correct catalog period. Replaced inlays or a repaired headstock can remove evidence. The presence of an Epiphone name does not resolve a mismatch between the neck and body.</p><p>Photograph the tuner backs and mounting holes. A modern tuner can cover an older hole pattern, while a period replacement may look convincing from the front. Keep any conclusion about the tuners separate from the conclusion about the underlying guitar.</p>'},
   {title:'Bridge And Trapeze',html:'<p>The Sorrento uses a simple trapeze rather than the ornate Frequensator associated with other Epiphones. Compare the bridge assembly and tailpiece with the period catalog, noting replacements and extra attachment holes. Do not treat a more elaborate tailpiece as evidence of an undocumented higher model.</p><p>Show the bridge height, top arch and fingerboard extension in one side photograph. That view helps assess whether a changed bridge is simply a replacement or part of a larger setup or neck-angle issue. Describe repairs before assigning an all-original condition.</p>'}
  ]}
 ]),
 section('variants','Sorrento Model Numbers And Finishes','Read The Complete Catalog Entry',[
  {type:'cards',variant:'models',items:[
   {title:'E452T And E452TN',html:'<p>The 1961 single-pickup listings distinguish the regular model from the natural-finish N version. Royal Olive and shaded finishes are listed for E452T. The code supports a configuration only when the guitar and surviving finish agree with it.</p>'},
   {title:'E452TD And E452TDN',html:'<p>The D listings identify the two-pickup versions, with N again indicating natural in that catalog. Check both original pickup positions and the controls. A later conversion can reproduce the visible count without reproducing the factory installation.</p>'},
   {title:'The Three-Quarter Sorrento',html:'<p>The 1961 catalog includes an E452T three-quarter entry. Keep that version distinct from a shortened or replacement neck. The 1961 listing names that version but does not print a separate scale measurement beside it. Record the nut-to-twelfth-fret distance and double it; send that result with the full guitar and neck photographs before applying a standard-scale specification.</p>'}
  ]},
  p('<p>The 1966 listing also uses E452TC and E452TDC designations. Preserve the full code from paperwork rather than expanding an uncertain suffix from memory. The instrument’s actual finish, pickup count and catalog context are stronger evidence than a guessed explanation of a letter.</p><p>Finish assessment needs photographs of the back, rim and neck as well as the top. Royal Olive can be difficult to judge under colored lighting. A color name on a tag does not establish original finish, and a refinished natural guitar should not be treated as a factory natural simply because the wood is visible.</p>')
 ],'dark'),
 section('catalog-reading','Read Catalog Evidence Without Inventing A Changeover','Illustrations, Text And Surviving Instruments',[
  {type:'columns',items:[
   {title:'The Illustration And Description Can Differ',html:'<p>The 1961 Sorrento illustration shows a headstock badge, while its prose describes an inlaid name. That difference is a reason to compare actual instruments and their dates, not to declare every badge or every inlaid logo incorrect. A catalog can describe a developing product line without documenting the assembly sequence of each guitar.</p><p>Keep the source date attached to the feature it supports. Saying that an appointment appears in the 1966 illustration is narrower than claiming that it first appeared in 1966. The latter would require additional evidence that this catalog alone does not supply.</p>'},
   {title:'The Short-Scale Listing Needs A Separate Inspection',html:'<p>The three-quarter designation establishes that a smaller version was offered, but it does not excuse an unexplained neck replacement on a regular body. Record scale, fret count, neck joint and the complete instrument together. Compare those observations with period documentation before deciding which factory version is present.</p><p>If the measurements disagree with the description supplied by an owner, retain both in the record until the discrepancy is resolved. The physical guitar should determine the identification; a familiar model name should not force the measurements into a convenient category.</p>'}
  ]}
 ]),
 section('archive','Period Details In Joe’s Comparison Photographs','The Model Difference Remains Explicit',[
  {type:'archive',items:[
   {label:'Pickup-Family Comparison',title:'1961 Epiphone Sheraton',html:'<p>The Sheraton photograph shows two mini-humbuckers and their visible mounting arrangement. It is useful for recognizing the pickup family, but its body, Bigsby and decorative package are not Sorrento specifications. These photographs do not supply a serial or a dated original Sorrento specimen.</p>',photos:[whole,body]},
   {label:'Headstock-Badge Comparison',title:'1961 Epiphone Zephyr',html:'<p>This Zephyr headstock shows the period Epiphone badge and metal-button tuners. Use the badge as a comparison detail while keeping the Zephyr’s model identity intact. It cannot prove that an otherwise undocumented Sorrento has the same year or original tuners.</p>',photos:[zephyr]}
  ]}
 ],'archive'),
 section('dating','Date A Sorrento With More Than The Serial','Kalamazoo Numbers And Physical Evidence',[
  p("<p>Early Kalamazoo hollowbodies need a separate first check: an A followed by four digits on the interior label belongs to Epiphone’s early A-series, not the similarly named Gibson A-prefix chart. Photograph the whole label and keep any factory order number separate. A model code is not a serial number. Later impressed numbers can be compared with the shared Gibson system, with the guitar’s construction used to check the result.</p>"),
  p('<p>From 1961, Kalamazoo Epiphones used the shared Gibson numbering system. The <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> explains why some sequences need physical corroboration. Record the complete stamp, label and any visible factory order number separately. A missing mark is a gap in the evidence, not permission to invent a replacement number.</p><p>Use the headstock shape, markers, pickup mounting and neck dimensions to evaluate the dates the number could support. Original component codes can supply additional context when inspected, but a replaced pot cannot date the whole guitar. Keep the component date and proposed assembly period separate.</p>'),
  {type:'serials',items:[{serial:'No Sorrento Serial Shown',title:'Comparison Photos Are Not A Dating Sample',html:'<p>The archive photographs on this page show a Sheraton and a Zephyr. Their identities are explicit, and no number from either is used as a Sorrento serial example. Send the actual Sorrento markings for an individual reading.</p>'}]}
 ]),
 section('checklist','A Sorrento Authentication Checklist','Confirm The American Factory Configuration',[
  {type:'checklist',items:[
   {title:'Establish The Pointed-Cutaway Thinline Body',html:'<p>Show the complete outline and thin rim. Compare the neck joint and scale with the regular or short-scale version, rather than relying on a seller’s model label.</p>'},
   {title:'Confirm The Original Pickup Count',html:'<p>Document both the electrical layout and any altered wood. A one-pickup body converted to two needs to retain that history in its description.</p>'},
   {title:'Match Neck Details To The Proposed Period',html:'<p>Compare logo, markers, binding, tuners and neck measurements. Explain repairs or replacements that could make one feature misleading.</p>'},
   {title:'Photograph The Numbers And Finish',html:'<p>Read markings from the images, preserve uncertain digits and record refinishing separately. A correct serial does not certify the finish or the pickup internals.</p>'}
  ]}
 ],'light'),
 section('later-models','How To Exclude Later Sorrentos','Country, Series And Repair History',[
  p('<p>Later Japanese, Korean and Chinese Epiphones, Elitist models and signature editions belong to their actual manufacturing series. A historical year in a reissue name is a specification reference, not its manufacturing date. Check country markings, serial format and paperwork before calling a guitar Kalamazoo.</p><p>A valid American identification also does not mean every part is original. Neck repairs, replacement electronics and refinishes remain separate findings. The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> and <a href="/post/epiphone-sorrento-value-guide/">Sorrento value guide</a> explain how to continue after the factory identity is settled.</p>'),
  epiCTA('Send The Sorrento Details For Review','<p>Request a <a href="/free-appraisal/">free appraisal</a> with the full guitar, markings and altered areas. The <a href="/sell-my-epiphone-guitar/">Epiphone selling page</a> explains how to discuss an offer after the evidence is reviewed.</p>')
 ]),
 section('sources','Sorrento Research References','Catalogs And House Dating Guidance',[
  {type:'sources',items:[
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','Sorrento pickup variants, finish codes, scale, materials and short-scale listing.'),
   source('1966 Epiphone Catalog, Page 3','https://www.vintageguitarandbass.com/epiphone/catalogues/1966_3.php','Later headstock and oval-marker illustration with model matrix.'),
   source('1960 Gibson Catalog, Page 9','https://www.vintageguitarandbass.com/gibson/catalogues/1960_9.php','ES-125TC and TDC comparison for construction and standard scale.'),
   source('JVG Sheraton History','/post/epiphone-sheraton-history-value/','Ownership, Kalamazoo production and the 1970 factory boundary.'),
   source('Epiphone Serialization Reference','https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf','Epiphone section, page 1071: the early hollowbody A-label sequence differs from Gibson’s A-prefix series; later impressed numbers require feature checks.'),
   source('JVG Gibson Serial Guide','/how-to-read-gibson-serial-numbers/','Serial interpretation and corroborating physical features.')
  ]}
 ])
 ],
 faqs:[
  {q:'Did The Sorrento Come With One Pickup?',a:'Yes. The original catalog lists one- and two-mini-humbucker versions. Confirm the factory installation rather than inferring a missing or added pickup from count alone.'},
  {q:'Was There A Short-Scale Sorrento?',a:'The 1961 catalog lists an E452T three-quarter version. Measure the instrument before applying the standard-scale specification.'},
  {q:'Can Oval Inlays Prove An Exact Year?',a:'No. They help establish a feature group, but the serial, headstock, construction and repairs must be considered together.'},
  {q:'Are Sorrento And Firebird Pickups The Same?',a:'No. Epiphone mini-humbuckers and Firebird pickups have different internal designs. Similar cover dimensions are not enough to identify the pickup.'}
 ],
 closing:'<p>Authenticate the body and original pickup layout, then reconcile the neck details and serial. Keep finish and repair findings separate from the model conclusion. The <a href="/post/epiphone-sorrento-value-guide/">Sorrento value guide</a> provides the next comparison once those facts are supported.</p>'
}
];
