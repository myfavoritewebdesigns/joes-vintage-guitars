import type { ModelGuideData } from '../../components/model-guide/types';
import { epiPhotos as ph, comparison } from './epiphone-photos';
import { epiBase, epiChart, range, p, section, source, epiCTA } from './epiphone-helpers';
const deluxe=comparison(ph.deluxeBody,'This is a Zephyr De Luxe Regent. Its two-pickup configuration belongs to the DeLuxe family, not the ordinary pre-Gibson Zephyr.');
const emperor=comparison(ph.emperorBody,'This is a Zephyr Emperor Regent. The three pickups and push-button bank distinguish it from the ordinary Zephyr.');

export const zephyrGuides: ModelGuideData[] = [
{
 ...epiBase('zephyr','value'),title:'Epiphone Zephyr Value Guide',
 seoTitle:'Vintage Epiphone Zephyr Value Guide: American Models',
 description:'Compare Epiphone Zephyr and Zephyr Regent values from the early electrics to Kalamazoo thinlines, with pickup, finish and repair checks before appraisal.',
 eyebrow:'Zephyr, Regent And Kalamazoo Thinline · American Guitars',
 dek:'Choose the original factory version before comparing an early single-pickup Zephyr with a Gibson-built two-pickup thinline.',
 hero:ph.zephyrBody,glanceTitle:'Zephyr Estimates By Configuration',
 glance:[['Early Natural Zephyr',range('zephyr',0)],['Sunburst Regent',range('zephyr',7)],['Early Kalamazoo Natural',range('zephyr',10)],['1960 To 1964 Natural',range('zephyr',12)]],
 secondaryActions:[{label:'Compare Zephyr Prices',href:'#values'},{label:'Identify The Zephyr',href:'/post/epiphone-zephyr-authentication-guide/'}],
 intro:{html:`<p>A vintage Epiphone Zephyr is estimated at ${range('zephyr',0)} for an early natural example with its metal handrest, ${range('zephyr',7)} for a 1950 to 1953 sunburst Regent, and ${range('zephyr',12)} for a 1960 to 1964 natural Kalamazoo thinline. These ranges assume excellent, original condition with the original case. Check the <a href="/post/epiphone-zephyr-authentication-guide/">Zephyr authentication guide</a> before treating the shared name as one continuous specification.</p>`,calloutTitle:'The Pickup Count Needs Context',callout:'The ordinary pre-Gibson Zephyr is a single-pickup electric. The Kalamazoo E312T has two pickups. A two-pickup Zephyr De Luxe belongs to a separate model family.'},
 sections:[
 section('values','Zephyr And Regent Price Chart','Excellent Original Examples',[
  p('<p>On a phone, swipe across the chart to see the estimated values.</p>'),
  epiChart('zephyr'),
  p('<p>Read the model, years and configuration as one row. The natural finish on a postwar non-cutaway doesn’t put it in the same group as a natural Kalamazoo thinline. Likewise, an added pickup doesn’t turn a single-pickup Regent into a more expensive factory model. Photograph the complete body before choosing the closest comparison.</p><p>The chart stops at the last supported Zephyr groups rather than extending every name through 1970. It includes the tenor row but doesn’t price amplifiers, steel guitars or every product bearing the Zephyr name. The Zephyr De Luxe and Zephyr Emperor electrics have their own parent-model value guides.</p>')
 ]),
 section('early','Early Zephyr Prices Depend On Surviving Equipment','Handrests, Pickups And Body Changes',[
  {type:'columns',items:[
   {title:'Prewar And Wartime Configurations',html:`<p>The early natural range with a metal handrest is ${range('zephyr',0)}. The next group without that handrest is ${range('zephyr',1)}. Check the complete pickup and control arrangement rather than assuming that a missing accessory explains every difference between those instruments.</p><p>Keep any removed handrest, pickup cover or control parts with the guitar. A loose piece needs to be identified before it can count toward completeness, but discarding it removes useful evidence. Take separate photographs without trying to reinstall fragile hardware for the appraisal.</p>`},
   {title:'Postwar Non-Cutaways',html:`<p>The later natural non-cutaway single-pickup group is ${range('zephyr',4)}, while its sunburst group is ${range('zephyr',5)}. These are comparisons for the specified period and equipment. An old finish alone can’t establish that the pickup, bridge and wiring are original to the body.</p><p>Include the back and sides, especially if a repair has changed the electrical access or jack location. A replacement pickup may work perfectly while leaving a different opening underneath. Describe what is known and leave concealed woodwork for a qualified inspection.</p>`}
  ]}
 ],'dark'),
 section('regent','What A Cutaway Changes In The Comparison','Regent And Later Cutaway Names',[
  p(`<p>The natural 1950 to 1953 Regent estimate is ${range('zephyr',6)}, with sunburst at ${range('zephyr',7)}. The later Cutaway rows remain separate. Match the original rim shape and model identity rather than assigning a premium merely because the word Regent appears in an old description.</p><p>The ordinary Regent should not be confused with the ornate Zephyr De Luxe Regent. The <a href="/post/epiphone-deluxe-value-guide/">DeLuxe value guide</a> covers that family, while the <a href="/post/epiphone-emperor-value-guide/">Emperor value guide</a> covers the larger three-pickup electric. Both explain omitted electric price groups that need individual appraisal. Choosing the wrong parent model can distort the estimate more than a small disagreement over condition.</p>`),
  p('<p>A cutaway repair deserves clear photographs from the front, side and inside where visible. Replaced binding or finish around the neck joint can obscure the original work. You don’t need to decide the repair’s quality before contacting Joe; send the invoice or explain the history so it can be assessed alongside the images.</p>')
 ]),
 section('kalamazoo','Kalamazoo Zephyr Values','Two Pickups And A Thin Body',[
  {type:'timeline',items:[
   {date:'1958 To 1959',title:'Early Gibson-Built Zephyrs',html:`<p>The natural range is ${range('zephyr',10)} and sunburst is ${range('zephyr',11)}. Confirm the early electrical configuration and body identity. A replacement pickup set should not be ignored because the serial falls inside the right years.</p>`},
   {date:'1960 To 1964',title:'Later Thinline Comparisons',html:`<p>The natural estimate is ${range('zephyr',12)}, with sunburst at ${range('zephyr',13)}. Inspect the neck angle, covered pickups, bridge and tailpiece together. These figures do not establish that every surviving natural guitar retains its first finish.</p>`}
  ]},
  p('<p>The Kalamazoo Zephyr is not the full-depth Broadway. A front photograph can conceal that distinction, so include a side view and a body-depth measurement when possible. The long body and single cutaway should be documented with the neck attached in the frame, rather than cropped into a generic pickup close-up.</p><p>The pictured 1961 Zephyr is an identification example, not an all-original condition benchmark or a purchase offer. Its visible hardware can be compared with the period catalog, but photographs alone do not establish the history of its pickups or finish. Use the chart’s original-condition assumption only after those questions are answered.</p>')
 ],'dark'),
 {type:'photo-band',photos:[ph.zephyrBody,ph.zephyrHead],quote:'1961 Epiphone Zephyr: the body and headstock need to be assessed together, including any changed hardware.'},
 section('condition','Repairs That Need A Separate Zephyr Adjustment','Evaluate The Work Before Choosing A Range',[
  {type:'cards',variant:'condition',items:[
   {title:'Electrical Changes',html:'<p>Rewinds, replacement pickups, new pots and added controls need separate descriptions. Record any routing or enlarged holes. The <a href="/do-replaced-pickups-hurt-guitar-value/">pickup replacement guide</a> explains why a working pickup is not automatically an original one.</p>'},
   {title:'Neck And Top Movement',html:'<p>Photograph the heel, bridge height and top under the strings. A guitar that needs structural work should not be matched to an excellent-condition row without adjustment. Avoid forcing a bridge down or changing tension simply to improve its appearance in a photograph.</p>'},
   {title:'Finish And Binding',html:'<p>Include overspray, repaired binding and stripped areas in the description. Consult <a href="/how-much-does-a-refinish-hurt-guitar-value/">the refinish guide</a> for that specific issue and <a href="/what-lowers-vintage-guitar-value/">the broader condition guide</a> for other changes.</p>'}
  ]},
  p('<p>A professional repair can make a Zephyr usable while remaining relevant to its market value. Keep those judgments separate. A replaced bridge may allow good adjustment, but the missing original still affects how the instrument is described. Conversely, an untouched guitar with a failing neck joint is not excellent simply because its parts are old.</p><p>Before commissioning work, read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore a guitar before selling</a>. An appraisal can clarify which questions matter without requiring you to replace tuners, polish the plating or remove old finish. Keep the guitar and its removed parts in their present condition until the scope of any work is understood.</p>')
 ]),
 section('appraisal','Photograph The Details That Set The Zephyr Row','Give Joe The Complete Instrument',[
  {type:'checklist',items:[
   {title:'Begin With Front, Back And Side Views',html:'<p>Show the cutaway or non-cutaway outline, body depth, neck and case. Include the entire instrument in at least one photograph. The side view is particularly useful when distinguishing a deep older electric from a Kalamazoo thinline.</p>'},
   {title:'Record Markings And Electrical Parts',html:'<p>Photograph the headstock front and back, label, visible serial and any internal stamp. Add the pickup, control and jack details. Copy uncertain characters as uncertain instead of turning a blurred mark into a definite digit.</p>'},
   {title:'Add Repairs, Loose Parts And History',html:'<p>Send close-ups of damage and changed areas, plus repair paperwork. Explain whether the case is original, period or modern. A family purchase date can help the history without automatically proving the manufacturing year.</p>'}
  ]},
  p('<p>For a tenor, show the complete neck, tuner count and bridge spacing so the shorter string layout is clear. Do not use the six-string price simply because the finish and headstock look familiar. If an instrument has been converted, explain the conversion and photograph the original holes or remaining parts. The appraisal needs the present condition as well as the factory starting point.</p>'),
  p('<p>If the guitar has been stored for years, describe how it was kept and whether it has recently been played or serviced. A photograph cannot establish that a pickup works or that a repaired joint remains stable under tension. Include what you have observed without testing a damaged instrument just to complete the description.</p>'),
  epiCTA('Send Your Zephyr Photos To Joe','<p>Request a <a href="/free-appraisal/">free appraisal</a> with the complete photo set. The <a href="/sell-my-epiphone-guitar/">Epiphone selling page</a> explains the offer process. Any offer is based on the reviewed guitar, not an automatic payment of the chart’s upper figure.</p>')
 ],'light')
 ],
 faqs:[
  {q:'Is Every Zephyr A Single-Pickup Guitar?',a:'No. The ordinary pre-Gibson Zephyr is a single-pickup family, while the Kalamazoo E312T has two pickups. The De Luxe and Emperor electrics are separate families.'},
  {q:'Where Are The Other Zephyr Families Covered?',a:'Use the DeLuxe value guide for Zephyr De Luxe models and the Emperor value guide for Zephyr Emperor models. Those guides explain the overlapping electric price categories omitted from their charts. A Zephyr Emperor Regent needs an individual appraisal.'},
  {q:'Does A Natural Finish Establish The Natural Price Row?',a:'Only when the model and original finish are supported. A stripped or refinished guitar needs its own condition adjustment.'},
  {q:'Are Zephyr Amplifiers Included?',a:'No. This chart covers the listed American Spanish-style Zephyr guitars and the tenor row, not amplifiers or Hawaiian steel guitars.'}
 ],
 closing:'<p>Choose the correct Zephyr family, then evaluate the finish, electronics and structure. The <a href="/post/epiphone-zephyr-authentication-guide/">Zephyr authentication guide</a> explains the factory changes and the limits of serial dating. Send the uncertain details with the clear ones so the estimate reflects the actual guitar.</p>'
},
{
 ...epiBase('zephyr','authentication'),title:'Epiphone Zephyr Authentication Guide',
 seoTitle:'Epiphone Zephyr Authentication Guide: Dates And Models',
 description:'Identify American Epiphone Zephyrs by body depth, pickups, cutaway and markings, from early New York electrics to the two-pickup Kalamazoo thinline.',
 eyebrow:'New York, Philadelphia And Kalamazoo · Zephyr Identification',
 dek:'The ordinary Zephyr changed from a single-pickup electric to a two-pickup Kalamazoo thinline. Zephyr De Luxe and Emperor models belong to their own families.',
 hero:ph.zephyrBody,glanceTitle:'Identify The Factory Version',
 glance:[['Pre-Gibson Zephyr','Single-pickup electric; non-cutaway and Regent'],['Kalamazoo E312T','Two pickups, thin body and rounded cutaway'],['1961 Catalog Scale','25½ inches'],['Separate Families','Zephyr De Luxe and Zephyr Emperor']],
 secondaryActions:[{label:'Check Zephyr Features',href:'#identity'},{label:'See Zephyr Values',href:'/post/epiphone-zephyr-value-guide/'}],
 intro:{html:'<p>Identify an Epiphone Zephyr by its body construction, depth and factory pickup layout before dating the serial. The older ordinary Zephyr is a single-pickup electric; the Gibson-built E312T is a two-pickup thinline. The more ornate Zephyr De Luxe and Zephyr Emperor are different models. Once the family is established, the <a href="/post/epiphone-zephyr-value-guide/">Zephyr value guide</a> separates the relevant American configurations.</p>',calloutTitle:'Zephyr Does Not Identify One Body Specification',callout:'A pickup count means little without the factory period. Two pickups are correct for a Kalamazoo Zephyr but don’t make an older two-pickup De Luxe an ordinary Zephyr.'},
 sections:[
 section('identity','The Specifications That Identify A Zephyr','Start With The Body And Electrical Layout',[
  {type:'table',caption:'Zephyr Family Identification',columns:['Group','Body And Cutaway','Pickup And Hardware Reference'],rows:[
   ['Early Zephyr Spanish','Non-cutaway electric archtop, earlier smaller body','Single pickup; changing handrest and control arrangements'],
   ['Postwar Zephyr','Larger electric archtop; non-cutaway or Regent','Single pickup, period Epiphone headstock badge and trapeze'],
   ['Philadelphia Catalog Zephyr','1954 cutaway and non-cutaway electric versions','One pickup; tenor version also cataloged'],
   ['Kalamazoo E312T / E312TN','Thin rounded-cutaway body; laminated maple','Two pickups, four controls and selector; nickel-plated hardware'],
   ['1961 Catalog Measurements','17⅜ inches wide, 20¾ long, 1⅞ deep','25½-inch scale and 20 frets']
  ]},
  p('<p>These groups describe original construction rather than every combination found on a repaired guitar. A changed tailpiece or added pickup can obscure the model without changing what the body originally was. Record the current equipment, then compare it with the appropriate period specification. An old replacement part still needs to be described as a replacement.</p>')
 ]),
 section('older','Zephyr History Before Gibson','New York Development And Philadelphia Continuation',[
  {type:'columns',items:[
   {title:'The New York Electric',html:'<p>The Zephyr Spanish appeared in 1939 as an electric archtop. The early instrument used a smaller body than the later postwar version. Pickup position, handrest, controls and access arrangements changed through the run, so a 1950s front photograph can’t authenticate a prewar example.</p><p>Photograph the back as carefully as the face. Early electrical access and later repairs may leave evidence there that a headstock picture misses. Compare the entire configuration with an appropriate catalog or documented instrument rather than dating the guitar from one knob style.</p>'},
   {title:'The Regent And Philadelphia Period',html:'<p>The ordinary Zephyr gained a rounded-cutaway Regent version around 1950. The 1954 catalog uses Zephyr Electric for cutaway and non-cutaway versions and also lists a tenor. It shows the single-pickup family continuing during the Philadelphia period before the 1957 ownership change.</p><p>Documented Zephyrs from 1954 also show a DeArmond Model 2000 pickup. A later pre-Gibson example therefore should not be rejected simply because it lacks a New York pickup. Check the mounting and period configuration before deciding that the pickup was replaced.</p><p>The older model doesn’t become a carved acoustic merely because it resembles an acoustic archtop. Its factory electrical construction matters. Likewise, Regent identifies a cutaway within this family; it’s not a universal name for every ornate electric Epiphone with a rounded cutaway.</p>'}
  ]}
 ],'dark'),
 {type:'photo-band',photos:[deluxe,emperor],quote:'Comparison guitars: the Zephyr De Luxe and Zephyr Emperor retain their own model identities.'},
 section('timeline','Zephyr Changes To Check In Sequence','A Name Carried Into Different Construction',[
  {type:'timeline',items:[
   {date:'1939 And The Early 1940s',title:'The Early Electric Archtop',html:'<p>Check the small-body outline and original electrical hardware as a group. A missing handrest isn’t enough to date the guitar, and an added cover can’t establish an earlier factory version.</p>'},
   {date:'Postwar New York',title:'The Larger Body And Changing Pickup',html:'<p>The ordinary Zephyr develops into the larger postwar instrument with a single neck-area pickup. Document the pickup mount, controls and body before applying a later production label to it.</p>'},
   {date:'Around 1950 Through The Philadelphia Years',title:'Regent And Cutaway Versions',html:'<p>The rounded cutaway joins the non-cutaway family. Use the original model marking where readable, keeping the complete name rather than dropping De Luxe or Emperor from an ornate instrument’s identification.</p>'},
   {date:'1958 To The Early 1960s',title:'Kalamazoo Builds The Thinline',html:'<p>After CMI bought Epiphone in 1957, Kalamazoo production began in 1958. The Zephyr became a thin two-pickup electric in that line. Early New York pickups and later Gibson mini-humbuckers need to be evaluated within that factory transition.</p>'},
   {date:'1961 Catalog',title:'The E312T Specification',html:'<p>The catalog explicitly describes two pickups, independent tone and volume controls, a selector and laminated maple construction. Don’t carry the older ordinary Zephyr’s single-pickup specification into this model.</p>'}
  ]}
 ],'dark'),
 section('kalamazoo','The Kalamazoo Zephyr Is A Two-Pickup Thinline','Construction, Neck And Hardware',[
  p('<p>The 1961 catalog specifies laminated arched maple top and back, maple rims and a mahogany neck. Its 17⅜-inch width and 25½-inch scale give it a different set of proportions from the smaller Sorrento and Windsor. The listed depth is 1⅞ inches, compared with the full-depth Broadway on the facing half of the catalog spread.</p><p>Measure the rim rather than estimating depth from an angled photograph. Include the arch when describing what you measured, and do not force a precise catalog match from an imprecise tape reading. A clear side view can establish that the body is a thinline while leaving finer measurements for an inspection.</p>'),
  {type:'columns',items:[
   {title:'New York Pickups And Mini-Humbuckers',html:'<p>The early Gibson-era electric line used New York single coils before the transition to Gibson-made mini-humbuckers described in the <a href="/post/epiphone-sheraton-history-value/">Sheraton history</a>. Check the actual pickup and mounting arrangement. A metal cover alone cannot prove the coil type, manufacturing date or originality.</p><p>The E312T has two pickups with separate volume and tone controls and a selector. Trace any added switch, nonstandard ring or enlarged opening before treating it as a factory option. Epiphone mini-humbuckers and Firebird pickups have different internal construction; their narrow covers do not make them interchangeable identification evidence.</p>'},
   {title:'The Neck And Tailpiece',html:'<p>The catalog describes a bound rosewood fingerboard with pearl inlays, an adjustable truss rod and a rosewood bridge. The illustrated Zephyr has a simple trapeze tailpiece. Do not import the Broadway’s Frequensator specification merely because the guitars appear together in the catalog.</p><p>Photograph the headstock badge, truss-rod cover, tuner backs and heel. Older-looking Epiphone decoration can occur alongside Gibson-era construction, so the logo alone cannot settle the factory. Replacement tuners should be assessed through mounting evidence rather than their shine or apparent age.</p>'}
  ]},
  p('<p>Within the Gibson family, the ES-125 thinline shows the same broad approach of a thin hollow electric with a mahogany neck and arched maple body. It does not supply the Zephyr’s exact dimensions, long scale, inlay or pickup specification. Use the original catalogs to compare the construction, not to rename the Epiphone as a Gibson model.</p><p>The Sheraton history places the move of Epiphone production to Japan in 1970. That is a brand boundary, not evidence that the Zephyr remained in the catalog for every intervening year. The 1960 to 1964 price group is a valuation category, not proof that every year in that interval produced a shipment. Date an individual Zephyr from its own evidence.</p>')
 ],'dark'),
 section('inspection-details','Separate Factory Construction From Later Work','Evidence Under And Around The Hardware',[
  {type:'columns',items:[
   {title:'Read Mounting Evidence Before Naming An Option',html:'<p>Start with the visible edges of the pickup mounts, tailpiece attachment and pickguard bracket. Extra holes, mismatched outlines or a replaced guard can explain why a guitar differs from a catalog. Photograph each feature before making a conclusion about a special order. An unusual part needs evidence of when it was fitted, not merely evidence that it is old.</p><p>If a technician has already inspected the instrument, ask for photographs showing any enlarged pickup openings or changed wiring. Keep that documentation with the instrument. An assessment based on concealed features should be traceable to the person who actually saw them.</p>'},
   {title:'Check The Neck Joint And Playing Geometry',html:'<p>Include a side photograph that shows the heel, fingerboard extension and bridge together. That view helps separate a replacement bridge from a broader neck-angle problem. Show repaired seams and finish changes without concealing them behind a close crop of the pickup or pickguard.</p><p>The catalog’s material and dimension descriptions establish the intended model; they do not certify the condition of an individual survivor. A correctly identified E312T can still need structural work. Keep the model conclusion, the supported date and the repair assessment as separate entries so uncertainty in one does not get hidden by confidence in another.</p>'}
  ]}
 ]),
 section('variants','Keep These Zephyr Versions Separate','Cutaway, Tenor And Parent Models',[
  {type:'cards',variant:'models',items:[
   {title:'Ordinary Zephyr And Regent',html:'<p>The older ordinary model has one pickup, with non-cutaway and rounded-cutaway versions. Preserve the model wording on the label and compare the body with the correct period. Regent alone does not establish the pickup count of a different parent family.</p>'},
   {title:'Kalamazoo E312T And E312TN',html:'<p>The 1961 catalog uses E312T for shaded finish and E312TN for natural. Both are two-pickup thinlines. An N in paperwork does not authenticate a finish that has been stripped or altered; the wood and finish evidence still need inspection.</p>'},
   {title:'Tenor And Other Zephyr Names',html:'<p>A tenor requires its own neck and string-layout comparison. Zephyr Hawaiian instruments and amplifiers are outside this Spanish-style guitar guide. Their names and serial practices should not be used to date a six-string archtop.</p>'}
  ]},
  p('<p>The <a href="/post/epiphone-deluxe-authentication-guide/">Zephyr De Luxe</a> belongs with the DeLuxe archtop family, and the <a href="/post/epiphone-emperor-authentication-guide/">Zephyr Emperor Regent</a> belongs with the Emperor. The comparison photos show why the complete name matters: the De Luxe has ornate appointments and two pickups, while the Emperor has three pickups and a push-button selector bank. Neither is the ordinary pre-Gibson Zephyr.</p>')
 ]),
 section('photos','A Kalamazoo Zephyr From Joe’s Archive','Body And Headstock Evidence',[
  {type:'archive',items:[
   {label:'Kalamazoo Thinline',title:'1961 Epiphone Zephyr',html:'<p>The body photograph shows a natural-finish single cutaway, two covered pickups, four knobs, a selector and trapeze tailpiece. The headstock photograph shows the Epiphone badge and metal-button tuners. The bridge has a metal saddle assembly on a wooden base, which should be compared with the catalog’s rosewood-bridge description rather than automatically called original.</p><p>The archive dates this guitar to 1961. The supplied views do not show a label, serial or pickup undersides, so they cannot independently decode its year or certify its electrical parts. Those missing views remain part of the inspection request. A label or rear-headstock photograph would make this particular example more useful for dating; ask for those views when evaluating a similar guitar.</p>',photos:[ph.zephyrBody,ph.zephyrHead]},
   {label:'Different Parent Family',title:'1950s Zephyr De Luxe Regent Comparison',html:'<p>The two gold rectangular pickups, Frequensator and ornate decoration identify the comparison as a De Luxe-family electric. A shortened archive title can omit part of a model name, so match the instrument itself before applying the ordinary Zephyr specification or price.</p>',photos:[deluxe]}
  ]}
 ],'archive'),
 section('dating','Read Serial Numbers In Their Factory Context','Labels, Stamps And Corroborating Features',[
  p("<p>Early Kalamazoo hollowbodies need a separate first check: an A followed by four digits on the interior label belongs to Epiphone’s early A-series, not the similarly named Gibson A-prefix chart. Photograph the whole label and keep any factory order number separate. A model code is not a serial number. Later impressed numbers can be compared with the shared Gibson system, with the guitar’s construction used to check the result.</p>"),
  p('<p>Take a second photograph under light from the opposite side when a stamped character is difficult to read. Keep the original images with the transcription. A typed number without its photograph makes a later correction harder to verify and can carry an early reading mistake into every subsequent description.</p>'),
  p('<p>Pre-Gibson Epiphone serials can support an estimated production period, but batch assignments are not exact calendar certificates. Preserve the original number and label photograph. Do not invent a missing digit to make the number fit a familiar year, and do not use a later Kalamazoo sequence for a New York instrument.</p><p>From 1961, Kalamazoo Epiphones used Gibson’s shared numbering sequence. Use the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> together with the body, headstock and electrical features. Photograph any visible factory order number separately from the serial; they are different markings and should not be combined into one number.</p>'),
  {type:'serials',items:[{serial:'No Serial Visible',title:'The 1961 Archive Photograph',html:'<p>The pictured headstock face contains no readable serial. The archive year is not a decoded number. A back-of-headstock and interior label photograph would be needed before using this guitar as a dated serial example.</p>',photo:ph.zephyrHead}]}
 ]),
 section('checklist','Inspect A Kalamazoo Zephyr In This Order','The E312T Identification Checklist',[
  {type:'checklist',items:[
   {title:'Measure The Thin Rounded-Cutaway Body',html:'<p>Record width, depth and scale. Compare them with the E312T rather than the deeper Broadway or smaller Windsor. Keep the complete neck and body visible in the initial photo.</p>'},
   {title:'Document Both Pickup Installations',html:'<p>Show covers, rings, mounting screws, controls and selector. Record known replacements or rewinds. Have concealed construction examined by a technician when it is necessary, rather than pulling a fragile harness for a first inquiry.</p>'},
   {title:'Check The Bridge, Tailpiece And Neck',html:'<p>Compare the bridge assembly and simple trapeze with the period specification. Include heel and headstock repairs, tuner changes and extra screw holes. These affect originality even when the basic model identification is secure.</p>'},
   {title:'Reconcile The Markings',html:'<p>Read the serial and label from clear images, then compare their period with the physical features. Leave the year approximate if the surviving evidence cannot narrow it. A confident-looking transcription does not improve an unreadable photograph.</p>'}
  ]}
 ],'light'),
 section('exclusions','Separate Later Names From American Zephyrs','Imports, Reissues And Condition',[
  p('<p>Post-1970 Japanese, Korean and Chinese Epiphones, Elitist instruments and signature models belong to their actual production series. Historical decoration or a familiar Zephyr name does not establish a Kalamazoo build. Check country markings, serial format and supporting paperwork before assigning an American factory.</p><p>Identification also does not establish excellent condition. A correct American Zephyr may have a replacement pickup, neck repair or refinish. The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> and <a href="/post/epiphone-zephyr-value-guide/">Zephyr value guide</a> address those issues separately from the model and date.</p>'),
  epiCTA('Ask Joe To Review The Zephyr Evidence','<p>Send the complete instrument and its markings for a <a href="/free-appraisal/">free appraisal</a>. If you are selling, the <a href="/sell-my-epiphone-guitar/">Epiphone seller page</a> explains how to share the photos and repair history.</p>')
 ]),
 section('references','Zephyr Identification Sources','Original Catalogs And Model Research',[
  {type:'sources',items:[
   source('1954 Epiphone Catalog','https://wiedler.ch/nyepireg/docs/1954_catalog.pdf','Ordinary Zephyr Electric, cutaway, non-cutaway and tenor descriptions; separate DeLuxe and Emperor electrics.'),
   source('1961 Epiphone Catalog','https://jazzatelier.com/wp-content/uploads/2008/11/epiphone61_catalog.pdf','E312T and E312TN construction, two-pickup controls, dimensions, scale and hardware.'),
   source('New York Epiphone Model Research','https://wiedler.ch/nyepireg/models.html','Early Zephyr Spanish development, Regent naming and the separate electric families.'),
   source('1960 Gibson Catalog, Page 9','https://www.vintageguitarandbass.com/gibson/catalogues/1960_9.php','The limited ES-125 thinline construction comparison.'),
   source('JVG Sheraton History','/post/epiphone-sheraton-history-value/','House factory chronology and New York pickup to mini-humbucker transition.'),
   source('Epiphone Serialization Reference','https://jedistar.com/images/2024_May/BlueBookElectricSerialization.pdf','Epiphone section, page 1071: the early hollowbody A-label sequence differs from Gibson’s A-prefix series; later impressed numbers require feature checks.'),
   source('JVG Gibson Serial Guide','/how-to-read-gibson-serial-numbers/','Kalamazoo serial interpretation and corroborating features.')
  ]}
 ])
 ],
 faqs:[
  {q:'Does A Zephyr Have A Frequensator?',a:'The 1961 ordinary Kalamazoo Zephyr illustration uses a simple trapeze. A Frequensator on a different Zephyr-named model does not establish the E312T specification.'},
  {q:'Is The Zephyr Regent The Same As A Zephyr De Luxe Regent?',a:'No. The complete parent-model name matters. The De Luxe belongs to the DeLuxe guide, while the ordinary Regent belongs here.'},
  {q:'Can The Headstock Badge Date A Zephyr By Itself?',a:'No. Compare the badge with the body, neck, serial and electrical configuration. A familiar logo is only one part of the evidence.'},
  {q:'Were Kalamazoo Zephyrs Single-Pickup Guitars?',a:'The 1961 E312T specification has two pickups with separate volume and tone controls and a selector. Do not transfer the older ordinary Zephyr layout to that model.'}
 ],
 closing:'<p>Read the full model name, body and pickup layout before the serial. That separates the ordinary Zephyr from its ornate namesakes and distinguishes the Kalamazoo thinline from the earlier electric. Continue to the <a href="/post/epiphone-zephyr-value-guide/">Zephyr value guide</a> after the version and alterations are established.</p>'
}
];
