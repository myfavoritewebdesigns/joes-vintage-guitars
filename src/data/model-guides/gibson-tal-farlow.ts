import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('tal-farlow',i);
const date='November 18, 2026';

export const talFarlowGuides:ModelGuideData[]=[{
 ...gBase('tal-farlow','value'),date,title:'Gibson Tal Farlow Value Guide',seoTitle:'Gibson Tal Farlow Value Guide: Original And Reissue Prices',
 description:'Compare 1962 to 1971 Gibson Tal Farlow originals with 1993 to 2018 reissues, including the effects of Viceroy Brown finish, pickup changes and repairs on value.',
 eyebrow:'Gibson Tal Farlow Prices · 1960s Originals And Reissues',dek:'Similar looks and the same Tal Farlow name can conceal a price difference of thousands of dollars. Establish whether yours is a 1960s original or a later reissue.',hero:ph.farlowFront,
 glanceTitle:'Tal Farlow Estimated Values',glance:[['1962 To 1964 Viceroy Brown',r(0)],['1965 Viceroy Brown',r(1)],['1966 To 1971 Viceroy Brown',r(2)],['1993 To 2018 Reissue',r(3)]],
 secondaryActions:[{label:'View Tal Farlow Prices',href:'#values'},{label:'Identify Your Tal Farlow',href:'/post/gibson-tal-farlow-authentication-guide/'}],
 intro:{html:`<p>For an excellent, entirely original guitar with its original case, allow ${r(0)} for a 1962 to 1964 Tal Farlow retaining Viceroy Brown and ${r(3)} for the 1993 to 2018 reissue group. Gibson’s small original production makes proof of that early origin a large part of the value. Joe’s photos below show a 1962. Before choosing a range, consult the <a href="/post/gibson-tal-farlow-authentication-guide/">Tal Farlow identification reference</a> to determine whether your guitar belongs to the original run or the reissues.</p>`,calloutTitle:'Original Or Reissue Comes First',callout:'A reissue repeats both the finish and the scroll decoration. Establish the production group first; then choose the appropriate year range for your guitar.'},
 sections:[
 section('values','Tal Farlow Values By Production Group','Excellent Original Guitars With The Original Case',[
 gChart('tal-farlow'),p(`<p>Viceroy Brown is the brown sunburst specified by the guide for 1960s Tal Farlows. It applies to the original-run rows at the top of the chart, including ${r(1)} for 1965 and ${r(2)} for 1966 to 1971. The final entry is for Historic Collection reissues from 1993 to 2018, offered in several colors.</p><p>These November 2026 figures estimate retail value for excellent guitars with factory parts throughout and their original cases. A purchase offer requires a separate assessment. Modifications, repairs or refinishing call for an individual estimate.</p>`)]),
 section('original-run','Why Original Tal Farlows Bring More','A Small Run Of 1960s Guitars',[
 p(`<p>Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">shipment-ledger reference</a> records 215 Tal Farlows over 1962 to 1967. Annual counts are 2 for 1962, 39 for 1963, 41 for 1964, 77 for 1965, 39 for 1966 and 17 for 1967. The price guide extends through 1971. The ledger establishes recorded shipments without ruling out later manufacture.</p><p>Scarcity makes the condition and original equipment particularly relevant. Within the ${r(0)} range for 1962 to 1964, several thousand dollars separate the endpoints. A clean neck, original finish and pickups, and the factory case support the upper end.</p><p>Use Joe’s <a href="/post/gibson-paf-patent-number-pickup-guide/">PAF and Patent Number reference</a> for the pickup periods that cover early examples. Record what’s fitted, but leave the hollowbody assembled instead of opening it to check a decal. Ask for pickup-back photographs from any previous servicing.</p>`),
 {type:'photos',photos:[ph.farlowGuard,ph.farlowFront]}
 ],'dark'),
 section('reissues','Pricing A 1993 To 2018 Reissue','Historic Collection And Later Guitars',[
 p(`<p>At ${r(3)}, the reissue row includes several finish colors. A color other than brown suggests later production unless other evidence establishes otherwise. Many reissues are Viceroy Brown as well, so brown finish alone won’t establish 1960s origins.</p><p>Read the label and number, and check for a certificate. Having the case and paperwork makes a reissue easier to value than an undocumented example. For distinguishing features, see the <a href="/post/gibson-tal-farlow-authentication-guide/">Tal Farlow authentication reference</a>.</p>`)]),
 section('special-orders','Special Orders And Parts That Differ','Factory Options Need Paperwork',[
 p('<p>Some Tal Farlows were factory special orders. Documented options include chrome fittings, Grover machines, a Super 400 headstock shape and a cover marked Custom. Records establish such a feature as part of the factory specification; without records, it’s usually assessed as a later alteration. Collect the case, receipts, letters, first-owner photographs and any family history.</p><p>The 1962 in Joe’s photographs combines a Custom cover with a marbled four-point guard. A departure from catalog details can be a stock variation, a special order or a replacement. Examine nearby screw holes, solder and hardware wear alongside the rest of the instrument to judge which explanation fits.</p><p>Bridges are often replaced. That’s a smaller alteration than refinishing or repairing a broken headstock, but disclose it so the estimate uses an accurate description.</p>'),
 {type:'photos',photos:[ph.farlowHead]}]),
 section('changes','Repairs, Refinishes And Replaced Parts','What Moves A Tal Farlow Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Finish',html:'<p>Normal playing wear on original Viceroy Brown is included in the chart’s comparison, along with the finish’s tendency to fade and check. Later overspray or refinishing requires a different assessment.</p>'},
 {title:'Pickups And Wiring',html:'<p>Photograph the switch, knobs and pickups. Report known electrical work and inspect for wiring or solder that appears more recent than surrounding parts.</p>'},
 {title:'Neck And Headstock',html:'<p>A repaired break affects the price comparison. Include clear views of the heel and the neck immediately behind the nut.</p>'},
 {title:'Guard And Tailpiece',html:'<p>Record the tailpiece and guard in photos. Disclose anything missing or replaced, even when a replacement resembles factory equipment.</p>'}]},
 p('<p>Retain removed factory parts. Before buying repair work, read the guidance on <a href="/should-i-restore-my-guitar-before-selling/">restoring a guitar before sale</a>. For redone finishes, consult the <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinishing and value article</a>.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Tal Farlow Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Whole Guitar, Front And Back',html:'<p>Light the guitar evenly and frame it so the cutaway’s scroll is visible in the full views.</p>'},
 {title:'Headstock, Serial And Label',html:'<p>Photograph both faces of the headstock, making the serial legible, and capture the interior label through an f-hole.</p>'},
 {title:'Pickups, Guard And Tailpiece',html:'<p>Give each part a clear photograph and identify replacements you already know about.</p>'},
 {title:'Case And Paperwork',html:'<p>Show the case with any certificate or receipts, including records of repair work.</p>'}]},
 gCTA('Get A Value For Your Tal Farlow','<p>Send the photos and the guitar’s history. Joe can tell you whether it’s an original or a reissue and where it fits in the chart.</p>')
 ])],
 faqs:[
 {q:'What Is A 1960s Gibson Tal Farlow Worth?',a:`For excellent examples with original parts and their cases, estimates are ${r(1)} for 1965, ${r(0)} for 1962 to 1964, and ${r(2)} for 1966 to 1971.`},
 {q:'What Is A Tal Farlow Reissue Worth?',a:`Allow ${r(3)} for the 1993 to 2018 reissue group when the guitar is in excellent condition and retains its original case.`},
 {q:'How Many Original Tal Farlows Did Gibson Make?',a:'Joe’s shipping-ledger page records a total of 215 Tal Farlows over the years 1962 through 1967.'}],
 closing:'<p>Identify the production run before assigning a year and assessing condition. Follow the checks in the <a href="/post/gibson-tal-farlow-authentication-guide/">Tal Farlow identification page</a>.</p>'
},{
 ...gBase('tal-farlow','authentication'),date,title:'Gibson Tal Farlow Authentication Guide',seoTitle:'Gibson Tal Farlow Authentication Guide: Features And Dates',
 description:'Check Tal Farlow scrolls, inlays, humbuckers and Viceroy Brown finish to identify the model and distinguish original 1960s production from subsequent reissues.',
 eyebrow:'Gibson Tal Farlow Identification · 1960s Originals And Reissues',dek:'Crest markers, a cutaway scroll and brown sunburst establish the Tal Farlow design. The pickup type, tuning machines and serial system help distinguish original production from reissues.',hero:ph.farlowFront,
 glanceTitle:'Tal Farlow At A Glance',glance:[['Body','17-Inch ES-350 Outline, One Rounded Cutaway'],['Signature Detail','Binding Scroll At The Cutaway'],['Original Finish','Viceroy Brown Sunburst'],['Documented Shipments','215, From 1962 To 1967']],
 secondaryActions:[{label:'Original Or Reissue?',href:'#reissue'},{label:'See Tal Farlow Values',href:'/post/gibson-tal-farlow-value-guide/'}],
 intro:{html:'<p>Gibson launched the Tal Farlow in October 1962 after making three prototypes during 1960. It’s a full-depth electric archtop, 17 inches across, with paired humbuckers, a rounded cutaway and binding curled into a scroll beside it. Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">ledger shipment page</a> records 215 shipped through 1967. The model returned in 1993. Joe’s photographs below depict a 1962 example. Once you’ve established its production group, use the <a href="/post/gibson-tal-farlow-value-guide/">Tal Farlow pricing page</a> for a range.</p>',calloutTitle:'A Missing Scroll Doesn’t Rule Out An Original',callout:'Treat an absent scroll as something to investigate. Although most originals have one, a documented 1964 exists without it. Assess the serial, hardware, finish and inlays as a group.'},
 sections:[
 section('features','What Identifies A Gibson Tal Farlow','Body, Scroll, Inlays And Finish',[
 {type:'cards',variant:'models',items:[
 {title:'An ES-350 Body',html:'<p>The design begins with the ES-350 Farlow played during the 1950s. Its rounded-cutaway body measures 17 inches across and about 3 inches deep. Laminated maple forms the top, sides and back, with a pair of parallel braces supporting the top.</p>'},
 {title:'The Binding Scroll',html:'<p>Farlow proposed the scroll, which Gibson formed by curling binding into the body at the cutaway. Single binding surrounds the f-holes; triple binding borders the back and top.</p>'},
 {title:'Crest Inlays And Double-Crown Peghead',html:'<p>Pearl crests reverse the orientation of the J-200’s markers, and a double crown decorates the peghead. The rosewood board is bound, with 20 frets and a scale measuring 25½ inches.</p>'},
 {title:'Viceroy Brown And A Four-Point Guard',html:'<p>Gibson gave the model its own Viceroy Brown sunburst. You’ll also find a bound guard with a four-point outline made for this model.</p>'}]},
 p('<p>Examine the inlays and scroll before matching the guard outline and finish. They’re difficult to reproduce convincingly and distinguish this model from similarly equipped ES-175s and ES-350s.</p><p>Maple and mahogany strips form the five-piece neck. Its nut is about 1 11/16 inches wide, and Gibson’s catalog locates the body joint at fret 14.</p>')]),
 section('archive','Joe’s 1962 Tal Farlow','Scroll, Crowns And A Marbled Guard',[
 {type:'archive',items:[{label:'1962 Gibson Tal Farlow',title:'An Early Tal Farlow In Brown Sunburst',html:'<p>In Joe’s pictures, you’ll see a marbled, four-point guard between the humbuckers. The cutaway shows the binding scroll, the peghead has double crowns and the truss rod cover says Custom. Pink plush lines the case beneath the guitar.</p><p>Ledger shipments were only 2 in 1962, rising to 39 for 1963. Serial stamping happened during manufacture, while shipment could follow later. A number assigned in 1962 may therefore belong to a guitar shipped in 1963. Establish production dating and shipment dating separately.</p>',photos:[ph.farlowFront,ph.farlowHead,ph.farlowGuard]}]}
 ],'archive'),
 section('hardware','Pickups, Bridge, Tailpiece And Tuners','Check The Original Equipment',[
 p('<p>Full-size humbuckers work with a three-way selector and individual volume and tone controls for each pickup. Early examples may retain PAFs; Patent Number pickups were being used by 1964. Consult the <a href="/post/gibson-paf-patent-number-pickup-guide/">Gibson pickup identification reference</a> to distinguish them.</p><p>A rosewood base carries the Tune-o-matic, though changed bridges turn up often. The trapeze holds a rosewood insert inlaid with Tal Farlow’s name in pearl. If you’re looking at an unmarked insert or a different tailpiece, it indicates replacement.</p><p>Published hardware accounts vary: nickel with Klusons in some, chrome or alternate tuner buttons in others. Factory special orders could include a Custom cover, chrome fittings, Grovers or a Super 400-style headstock. Investigate an unfamiliar part before deciding it was swapped.</p>'),
 {type:'photos',photos:[ph.farlowGuard,ph.farlowHead]}
 ],'dark'),
 section('reissue','Original Or Reissue?','Separating 1960s Guitars From 1993 And Later',[
 {type:'table',caption:'Original Tal Farlow And Reissue Compared',columns:['Feature','1962 To 1967 Original','1993 And Later Reissue'],rows:[
 ['Finish','Viceroy Brown sunburst','Viceroy Brown and other colors, including natural, wine red and vintage sunburst'],
 ['Pickups','PAF on early guitars, then Patent Number','’57 Classic humbuckers'],
 ['Tuners','Kluson on most published examples','Grover Super Rotomatic'],
 ['Serial','Impressed 1960s number, often a reused range','Modern eight-digit format or a Custom Shop number'],
 ['Documented shipments','215 through 1967','Separate production']]},
 p('<p>Begin with the numbering system. Behind the headstock, original 1960s Gibsons have impressed serials whose ranges often recur in different years. Standard eight-digit numbers on 1990s reissues encode the year with digits one and five. Custom Shop examples from the 2000s instead use a variant beginning with 2; consult their labels and Custom Shop records too. Both systems are covered in the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial reference</a>.</p><p>Wine red or natural finish almost certainly indicates a reissue. For a brown guitar, assess tuners, pickups and the number together, because Viceroy Brown also appears on many reissues.</p>')]),
 section('dating','Dating An Original Tal Farlow','Shipments, Pickups And Serials',[
 p('<p>After a slow start, the shipment peak came in 1965 at 77. The final ledger year, 1967, records 17. Between 1963 and 1966, 196 of the total 215 guitars shipped.</p><p>Pickups offer the strongest dating help within that period. PAFs suggest the earliest production, while Patent Number units were standard by 1964. Repeated Gibson serial ranges throughout the 1960s leave several possible dates. Use the tuner design and original pot codes with the pickups to narrow them. The <a href="/gibson-pot-codes/">pot-code reference</a> explains those date markings.</p>')
 ],'dark'),
 section('red-flags','Repairs, Refinishes And Swapped Parts','What To Question On A Tal Farlow',[
 {type:'cards',variant:'condition',items:[
 {title:'Refinished Tops',html:'<p>Inspect a top whose color is redder or more uniform than the rest of the instrument. Compare it with the neck, back and sides.</p>'},
 {title:'Replaced Bridges',html:'<p>Changed bridges are frequent on Tal Farlows. Compare the thumbwheels and rosewood support with the guitar’s remaining hardware.</p>'},
 {title:'Truss Rod Covers',html:'<p>Identify the model through its body and inlays. A readily removable truss rod cover may have been changed.</p>'},
 {title:'Look-Alike Bodies',html:'<p>The body outline also appears on other 17-inch Gibson archtops. Adding a scroll requires rebinding work. Inspect the cutaway binding for interruptions, differing color or fresh finish.</p>'}]},
 p('<p>Keep removed equipment with the guitar and describe repairs directly. The <a href="/what-lowers-vintage-guitar-value/">condition reference</a> explains the assessment of repair work and replacement parts.</p>')
 ],'dark'),
 section('checklist','Build A Tal Farlow Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Cutaway And Scroll',html:'<p>Use clear lighting for a close photograph of the scroll and its surrounding binding.</p>'},
 {title:'Headstock And Fingerboard',html:'<p>Capture the crest markers, headstock decoration and truss rod cover clearly in your photos.</p>'},
 {title:'Serial And Label',html:'<p>Provide a rear headstock view plus a photograph of the label visible inside the f-hole.</p>'},
 {title:'Pickups, Bridge And Tailpiece',html:'<p>Photograph the tailpiece, bridge and pickups individually, noting any known changes.</p>'}]},
 gCTA('Ask Joe To Identify Your Tal Farlow','<p>Send the photos above. Joe will check the scroll, inlays, serial and hardware and let you know what he finds.</p>')]),
 section('references','Tal Farlow Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Gibson Tal Farlow Catalog Pages','https://www.vintageguitarandbass.com/gibson/Tal_Farlow.php','Catalog specifications, prototypes and launch date.'),
 source('Premier Guitar: Tal Farlow And His Gibson Model','https://www.premierguitar.com/tal-farlow-reluctant-jazz-great-and-his-gibson-model','History, inlays, finish and hardware.'),
 source('Fretted Americana: 1964 Gibson Tal Farlow','https://www.gbase.com/gear/gibson-tal-farlow-1964-viceroy-brown','Construction details and special orders, quoting Duchossoir.'),
 source('Archtop.com: 1993 Gibson Tal Farlow','https://www.archtop.com/ac_93talfarlow.html','Reissue pickups, tuners and serial format.'),
 source('Gibson Shipping Totals, 1948 To 1979','/post/gibson-shipping-totals-1948-1979/','Tal Farlow ledger figures by year.')]}])],
 faqs:[
 {q:'How Can I Tell An Original Tal Farlow From A Reissue?',a:'Start by decoding the serial system. Most originals combine a 1960s impressed number with Kluson machines. Reissues carry modern or Custom Shop numbering, Grovers and ’57 Classic humbuckers.'},
 {q:'Do All Original Tal Farlows Have The Scroll?',a:'A documented example from 1964 lacks the scroll, although it appears on most originals. Consider hardware, inlays and finish alongside it.'},
 {q:'What Is Viceroy Brown?',a:'Gibson called the original Tal Farlow’s brown sunburst finish Viceroy Brown.'},
 {q:'When Was The Tal Farlow Made?',a:'The introduction was in October 1962, with ledger shipments recorded to 1967 and price-guide coverage continuing to 1971. Reissue production started in 1993.'}],
 closing:'<p>Check the finish, inlays and scroll for model identity, then use pickups, serial and tuning machines to establish the production era. Both original and reissue estimates appear in the <a href="/post/gibson-tal-farlow-value-guide/">Tal Farlow value reference</a>.</p>'
}];
