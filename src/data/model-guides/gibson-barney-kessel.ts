import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('barney-kessel',i);
const date='November 18, 2026';

export const barneyKesselGuides:ModelGuideData[]=[{
 ...gBase('barney-kessel','value'),date,title:'Gibson Barney Kessel Value Guide',seoTitle:'Gibson Barney Kessel Value Guide: Regular And Custom Prices',
 description:'Gibson Barney Kessel values for the Regular and Custom, 1961 to 1974. See how PAF pickups, gold hardware, headstock repairs and Bigsby holes change price.',
 eyebrow:'Gibson Barney Kessel Prices · Regular And Custom',dek:'Pick the trim first, then the year. The 1961 PAF guitars stand apart, and repairs or old Bigsby holes move a Kessel out of the clean rows.',hero:ph.kesselFront,
 glanceTitle:'Barney Kessel Estimated Values',glance:[['1961 Custom, PAF',r(0)],['1961 Regular, PAF',r(6)],['1966 To 1969 Regular',r(10)],['1970 To 1974 Regular',r(11)]],
 secondaryActions:[{label:'View Kessel Prices',href:'#values'},{label:'Identify Your Kessel',href:'/post/gibson-barney-kessel-authentication-guide/'}],
 intro:{html:`<p>A 1961 Gibson Barney Kessel Custom with its original PAF humbuckers is estimated at ${r(0)}. A 1966 to 1969 Barney Kessel Regular is ${r(10)}. Both figures assume excellent, all-original condition with the original case. Gibson built the Kessel in two trims from 1961 into the early 1970s, and the first-year PAF guitars sit far above every later year. Joe’s 1967 Kessel, shown below, keeps its original pickups and hardware and has an old headstock repair. If you aren’t sure which trim you have, start with the <a href="/post/gibson-barney-kessel-authentication-guide/">Barney Kessel authentication guide</a>.</p>`,calloutTitle:'Count The Holes Around The Tailpiece',callout:'Extra screw holes near the tailpiece usually point to a Bigsby that was mounted and later removed. Mention them in an appraisal request so the estimate starts from the guitar as it is today.'},
 sections:[
 section('values','Barney Kessel Values By Year And Trim','Excellent Original Guitars With The Original Case',[
 gChart('barney-kessel'),p(`<p>Each year group has a Custom row and a Regular row. The 2026 price guide describes the Custom with gold-plated hardware and the Regular with nickel-plated hardware, and it lists cherry sunburst as the finish for both. Match the trim before you match the year. In the 1963 to 1964 group, a Custom is ${r(2)} and a Regular is ${r(8)}.</p><p>These are November 2026 retail estimates for excellent, all-original guitars with the original case. They aren’t purchase offers. A repaired break, a refinish, replaced pickups or an old Bigsby installation each needs an individual look at the guitar.</p>`)]),
 section('first-year','What Puts A 1961 Kessel In Its Own Price Group','PAF Pickups And A Short First Year',[
 p(`<p>The 1961 rows are the only ones the guide labels with PAF pickups. A 1961 Custom is ${r(0)}, and a 1962 Custom drops to ${r(1)}. The Regular follows the same pattern: ${r(6)} for 1961 and ${r(7)} for 1962.</p><p>Few first-year Kessels exist. The ledger figures on Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">Gibson shipping totals page</a> show 19 Customs and 43 Regulars for 1961. Over the whole run, those figures add up to 740 Customs and 1,117 Regulars.</p><p>Pickups decide most of that gap. Joe’s <a href="/post/gibson-paf-patent-number-pickup-guide/">PAF and Patent Number pickup guide</a> dates the PAF decal from late 1957 to late 1962, so many 1962 guitars still left the factory with PAFs. The guide’s 1962 rows assume patent number pickups. A 1962 Kessel with documented original PAFs needs its own estimate.</p><p>Check the pickups before the year. A 1961 serial with replaced pickups loses the feature that sets the first-year price. Photograph the pickup backs only if the guitar has already been opened for service. Don’t take a vintage hollowbody apart just to read a decal.</p>`)
 ],'dark'),
 section('trim','How Much The Custom Trim Adds','Gold Hardware Against Nickel',[
 {type:'cards',variant:'models',items:[
 {title:'1962 To 1965',html:`<p>The Custom runs ${r(1)} for 1962 and ${r(3)} for 1965. The Regular runs ${r(7)} and ${r(9)} for the same years. The trims are within a few hundred dollars of each other.</p>`},
 {title:'1966 To 1969',html:`<p>A Custom is ${r(4)} and a Regular is ${r(10)}. The ledger figures on Joe’s shipping page show 361 Kessels for 1968, the most of any year, so late-1960s guitars are the ones sellers bring in most.</p>`},
 {title:'1970s Guitars',html:`<p>The Custom’s last group is 1970 to 1973 at ${r(5)}. The Regular’s is 1970 to 1974 at ${r(11)}. By this point the two trims are priced about the same.</p>`}]},
 p('<p>Gold plating wears through on the bridge, pickup covers and tailpiece of a Custom that was played hard. Worn original gold belongs to the guitar’s history. A set of newer gold parts on a Custom, or gold parts added to a Regular, changes the comparison. Keep any removed original hardware with the guitar.</p>')]),
 section('archive','Joe’s 1967 Barney Kessel','Original Parts And An Old Headstock Repair',[
 {type:'archive',items:[{label:'1967 Gibson Barney Kessel',title:'A Player-Grade Kessel With Its Original Hardware',html:'<p>Joe’s 1967 Kessel has its original pickups, electronics, tuners, bridge and tailpiece. The headstock was repaired a long time ago. The repair isn’t pretty, but it has stayed stable for years, the truss rod works and the neck is straight. There’s an extra hole near the tailpiece that suggests a Bigsby was mounted at some point before the stock tailpiece went back on. It came with its original hard case.</p><p>A guitar like this one sits below the chart’s excellent, original rows because of the repair. How far below depends on how stable the repair is and how it looks. That makes a well-documented player like this one a good buy for someone who wants a 1960s Kessel to play.</p>',photos:[ph.kesselFront,ph.kesselRepair,ph.kesselHead,ph.kesselCase]}]}
 ],'archive'),
 section('changes','Repairs, Bigsby Holes And Replaced Parts','What Moves A Kessel Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Headstock Breaks',html:'<p>Show the back of the neck behind the nut in good light, plus the side of the headstock. Mention whether the repair has moved and whether the truss rod still adjusts. A clean, stable repair and a fresh crack are priced very differently.</p>'},
 {title:'Bigsby And Tailpiece Holes',html:'<p>Photograph the end of the body around the tailpiece and strap button. Count the extra holes. Say whether the Bigsby is still with the guitar.</p>'},
 {title:'Pickups And Controls',html:'<p>Note any solder that looks newer than the rest, missing pickup rings or replaced knobs. The <a href="/do-replaced-pickups-hurt-guitar-value/">replaced pickup guide</a> explains why a swap that can be reversed is treated differently from one that cut wood.</p>'},
 {title:'Finish Work',html:'<p>Cherry sunburst fades unevenly, and the original color under the guard is often darker. A uniform, bright red over the whole body can mean overspray or a refinish. The <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish value guide</a> covers how a refinish changes the price.</p>'}]},
 p('<p>Keep the guitar as it is until it’s been looked at. Replacing a missing part before an appraisal can make a well-kept player look like a parts guitar. Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> before paying for work.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Kessel Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Front, Back And Both Cutaways',html:'<p>Send the whole front, the whole back and a side view in even light. Include the headstock face so the trim can be checked.</p>'},
 {title:'Headstock And Neck Joint',html:'<p>Photograph the back of the headstock, the serial and the area behind the nut. Those three photos answer most repair and dating questions.</p>'},
 {title:'Hardware Close-Ups',html:'<p>Show the bridge, tailpiece, pickups and knobs, plus any extra holes. Say which parts you know were changed.</p>'},
 {title:'Case And Paperwork',html:'<p>Include the case and any receipts. A case that matches the guitar’s era adds to the estimate.</p>'}]},
 gCTA('Get A Value For Your Barney Kessel','<p>Send the photos above and anything you know about the guitar’s history. Joe can tell you which row it fits and what its condition does to the number.</p>')
 ])],
 faqs:[
 {q:'What Is A 1967 Gibson Barney Kessel Worth?',a:`In excellent, original condition with its case, a 1966 to 1969 Kessel Regular is estimated at ${r(10)} and a Custom at ${r(4)}. Repairs, replaced parts and an old Bigsby installation lower that.`},
 {q:'Why Is A 1961 Kessel Worth So Much More Than A 1962?',a:'The 1961 rows assume original PAF pickups, and only a small number of first-year Kessels shipped. A 1962 with documented PAFs needs an individual estimate.'},
 {q:'Is The Custom Always Worth More Than The Regular?',a:'Through the 1960s the Custom is a few hundred dollars higher in each year group. In the 1970s groups the two trims are priced about the same.'}],
 closing:'<p>Pick the trim, check the pickups, then the year. Return to the <a href="/post/gibson-barney-kessel-authentication-guide/">Kessel identification guide</a> if the trim or the parts are in question.</p>'
},{
 ...gBase('barney-kessel','authentication'),date,title:'Gibson Barney Kessel Authentication Guide',seoTitle:'Gibson Barney Kessel Authentication Guide: Regular Or Custom',
 description:'Tell a Barney Kessel Regular from a Custom and date one by pickups, hardware, inlays and serials. Check headstock repairs, tailpieces and Bigsby holes.',
 eyebrow:'Gibson Barney Kessel Identification · Regular And Custom',dek:'Inlays, the peghead ornament, plating and tuners separate the two trims. Pickups, nut width and the serial format narrow down the year.',hero:ph.kesselFront,
 glanceTitle:'Regular Or Custom At A Glance',glance:[['Regular Inlays','Double Parallelograms, Crown Peghead'],['Custom Inlays','Bowties, Musical-Note Peghead'],['Regular Hardware','Nickel, Later Chrome, Kluson Tuners'],['Custom Hardware','Gold, Grover Rotomatic Tuners']],
 secondaryActions:[{label:'Compare The Two Trims',href:'#trims'},{label:'See Kessel Values',href:'/post/gibson-barney-kessel-value-guide/'}],
 intro:{html:'<p>Every Gibson Barney Kessel has the same 17-inch, full-depth body with two pointed Florentine cutaways and two humbuckers. The Regular and the Custom differ in their inlays, peghead ornament, plating and tuners. Gibson introduced both in 1961, and its catalog finish was cherry sunburst. Identify the trim first, then date the guitar from its pickups, hardware and serial. Joe’s 1967 Kessel below shows the Regular’s appointments. When the trim and year are settled, use the <a href="/post/gibson-barney-kessel-value-guide/">Barney Kessel value guide</a> to find its row.</p>',calloutTitle:'Read The Truss Rod Cover Last',callout:'A truss rod cover comes off with two screws, and replacement covers marked Custom turn up on Gibsons that left the factory without one. Joe’s 1967 Kessel has Regular inlays, a crown peghead inlay and nickel hardware under a Custom cover. The inlays and plating decide the trim.'},
 sections:[
 section('trims','Regular Or Custom: The Trim Differences','Inlays, Ornament, Plating And Tuners',[
 {type:'table',caption:'Barney Kessel Regular And Custom Appointments',columns:['Feature','Regular','Custom'],rows:[
 ['Fingerboard inlays','Pearl double parallelograms','Pearl bowties'],
 ['Peghead inlay','Pearl crown (some dealers call it a thistle)','Pearl musical note'],
 ['Hardware plating','Nickel; chrome on later guitars','Gold'],
 ['Tuners','Kluson','Grover Rotomatic'],
 ['Neck wood','Mahogany','Maple with mahogany strips'],
 ['Truss rod cover','Not a reliable trim check','Marked Custom']]},
 p('<p>Check two features that are hard to change: the fingerboard inlays and the peghead inlay. Swapping either one means replacing the fingerboard or the headstock overlay, and that work leaves marks. Plating and tuners come next. Gold parts can be added to a Regular, and a Custom can lose its gold parts over decades of repairs.</p><p>Published descriptions of the Regular’s bridge differ. Some describe an all-rosewood bridge, and others a Tune-o-matic on a rosewood base. Joe’s 1967 Regular has the Tune-o-matic on a rosewood base. The Custom’s Tune-o-matic sits on a rosewood base as well.</p><p>Gibson also built Kessels to special order. One documented 1967 Custom left the factory with chrome hardware, a Bigsby and other options, with factory paperwork to prove it. An unusual feature needs that kind of paperwork before it counts as factory. It shouldn’t be dismissed as a modification without a look either.</p>')]),
 section('body','The Body And Neck Both Trims Share','Width, Cutaways, Scale And Nut',[
 {type:'cards',variant:'models',items:[
 {title:'Body',html:'<p>Gibson’s 1970 catalog lists the body at 17 inches wide, 21 inches long and 3 inches deep, and the body is triple bound. Most Kessels have laminated tops, backs and sides. The catalog calls the top carved spruce, and some mid-1960s examples are reported to be solid, so confirm the construction on the guitar in hand.</p>'},
 {title:'Cutaways',html:'<p>Both horns come to sharp Florentine points. The Kessel is often described as Gibson’s first full-depth archtop with two cutaways. Measure the depth at the rim. The full-depth Trini Lopez Deluxe shares the Kessel’s pointed outline, while the Trini Lopez Standard is thin with rounded horns.</p>'},
 {title:'Neck And Headstock',html:'<p>The scale is 25½ inches, with 20 frets on a bound rosewood fingerboard. The headstock is the large, Super 400-style outline. The nut is about 1 11/16 inches on early guitars and narrowed to about 1 9/16 inches during 1965, so a 1965 Kessel can have either.</p>'}]},
 p('<p>Measure the nut with calipers across the top of the nut, where the fingerboard meets it. Photograph the calipers in place. A narrow nut on a guitar claimed to be a 1962, or a wide nut on a claimed 1968, means the year or the neck needs another look.</p><p>The heel was long on early Kessels and shortened after about 1965. Use a side view of the neck joint to compare. One feature that doesn’t fit isn’t proof of anything by itself. Two or three that disagree with the claimed year call for an in-person inspection.</p>'),
 {type:'photos',photos:[ph.kesselFull,ph.kesselBack]}]),
 section('archive','Joe’s 1967 Barney Kessel','A Regular With Its Original Hardware',[
 {type:'archive',items:[{label:'1967 Gibson Barney Kessel',title:'Regular Appointments Under A Custom Cover',html:'<p>Joe’s 1967 Kessel has the Regular’s pearl double-parallelogram inlays and crown peghead inlay, nickel hardware and a Tune-o-matic on a rosewood base. Its truss rod cover reads Custom. The pickups, electronics, tuners, bridge and tailpiece are original to the guitar.</p><p>The headstock was repaired long ago, and the dark finish over the back of the neck behind the nut shows where. An extra hole at the tail end suggests a Bigsby was mounted at some point before the stock tailpiece went back on. The orange oval label is visible through the f-hole. The guitar came with its original hard case.</p>',photos:[ph.kesselHead,ph.kesselInlays,ph.kesselTuners,ph.kesselLabel]}]}
 ],'archive'),
 section('electronics','Pickups, Controls And The Tailpiece','Check The Original Equipment',[
 p('<p>Both trims have two humbuckers with two volume controls, two tone controls and a three-way switch. The pickups follow Gibson’s general timeline. Joe’s <a href="/post/gibson-paf-patent-number-pickup-guide/">PAF and Patent Number pickup guide</a> dates the PAF decal from late 1957 to late 1962 and covers how the later pickups differ. A 1961 or 1962 Kessel can have PAFs.</p><p>The tailpiece is a trapeze with a raised wooden badge bearing Kessel’s name. Reproduction badges are sold, so check how the badge sits in the tailpiece and whether its wear matches the rest of the hardware. Look at the end of the body for extra screw holes. Bigsby installations and removals are common on Kessels.</p><p>Pickup sanding marks on the baseplate aren’t a sign of tampering by themselves. Gibson sanded pickup bases at the factory. Look at whether the solder, leads and mounting match the rest of the guitar. Leave pickup removal on a hollowbody to a repair shop. Photographs from a previous service are enough to start.</p>'),
 {type:'photos',photos:[ph.kesselCase,ph.kesselFront]}
 ],'dark'),
 section('dating','Dating A Kessel By Serial And Features','Serials Need Support From The Guitar',[
 p('<p>Kessels from 1961 to 1969 have a serial impressed into the back of the headstock, and an orange oval label inside repeats it. Gibson reused and duplicated number ranges in the 1960s, so a single serial can point to two, three or even four different years. Use the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial number guide</a> to find the possible years, then narrow them with the guitar.</p><p>From 1970, Gibson stamped MADE IN U.S.A. below the serial, and a volute appeared at the neck-to-headstock joint around 1969 to 1970. A six-digit serial with that stamp usually points to about 1970 to 1975. A Kessel with the stamp is a 1970s guitar, whatever the number says.</p><p>Inside the 1960s, the nut width, pickup type, plating and finish help. Early cherry sunbursts are darker. Later red dye fades to amber and sometimes to nearly natural. When the pots and tuners are original, the <a href="/gibson-pot-codes/">pot code guide</a> and the <a href="/gibson-tuner-dating-guide/">tuner dating guide</a> help narrow the year.</p>')]),
 section('red-flags','Rebuilt Bodies, Swapped Parts And Repairs','What To Question On A Kessel',[
 {type:'cards',variant:'condition',items:[
 {title:'Stripped And Rebuilt Guitars',html:'<p>For years the PAFs and gold hardware from an early Kessel were worth more than the guitar around them. Premier Guitar reports that many Kessels were stripped, and some were later rebuilt from the bare body. Check whether the pickups, pots and hardware all fit one period.</p>'},
 {title:'Headstock Repairs',html:'<p>Look at the back of the neck behind the nut in raking light. New finish over that area, like the dark finish on Joe’s 1967, usually marks an old break.</p>'},
 {title:'Refinished Or Oversprayed Tops',html:'<p>Faded cherry sunburst that has turned amber is normal. A bright, even red over the whole guitar suggests new finish. Compare the top with the color under the pickguard and inside the f-holes.</p>'},
 {title:'Added Gold Parts',html:'<p>Gold hardware on a guitar with parallelogram inlays and a crown peghead inlay is a Regular with changed parts. Keep the trim call with the inlays.</p>'}]},
 p('<p>Each of these changes how a Kessel is described and priced. Joe’s 1967 has an old repair and an extra tailpiece hole, and it plays and sounds great with its original parts. Describe what’s there, and the appraisal can start from the facts.</p>')
 ],'dark'),
 section('checklist','Build A Kessel Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Headstock Face And Fingerboard',html:'<p>These two photos show the peghead inlay and the fingerboard inlays, which settle the trim.</p>'},
 {title:'Headstock Back And Label',html:'<p>Send the serial, any stamp below it and the label through the f-hole.</p>'},
 {title:'Hardware And Tailpiece End',html:'<p>Show the bridge, tailpiece badge, tuners and the end of the body, including any extra holes.</p>'},
 {title:'Neck Joint And Nut',html:'<p>Include a side view of the heel and a caliper reading at the nut.</p>'}]},
 gCTA('Ask Joe To Identify Your Barney Kessel','<p>Send the photos above. Joe can confirm the trim, the likely year and which parts are original.</p>')]),
 section('references','Barney Kessel Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Gibson Barney Kessel Catalog Pages','https://www.vintageguitarandbass.com/gibson/Barney_Kessel.php','Catalog dimensions, scale and production notes.'),
 source('Premier Guitar: 1968 Gibson Barney Kessel Custom','https://www.premierguitar.com/pro-advice/vintage-vault/1968-gibson-barney-kessel-custom','Custom inlays, neck construction and electronics.'),
 source('Premier Guitar: Gibson And Barney Kessel','https://www.premierguitar.com/gibson-and-barney-kessel','Model history, the 1968 peak and stripped guitars.'),
 source('Guitarist: 1961 Gibson Barney Kessel','https://musicradar.com/news/old-gold-1961-gibson-barney-kessel','First-year construction, finish and heel changes.'),
 source('Guitar World: A 1967 Barney Kessel Custom Order','https://www.guitarworld.com/gear/electric-guitars/1967-gibson-barney-kessel-custom','A documented factory special order.'),
 source('Gibson Shipping Totals, 1948 To 1979','/post/gibson-shipping-totals-1948-1979/','Kessel ledger figures by year.')]}])],
 faqs:[
 {q:'How Do I Tell A Barney Kessel Regular From A Custom?',a:'Look at the inlays. A Regular has pearl double parallelograms on the fingerboard and a crown on the headstock. A Custom has bowties and a musical note, with gold hardware and Grover tuners.'},
 {q:'Does A Custom Truss Rod Cover Make My Kessel A Custom?',a:'No. The cover is easy to change. The fingerboard inlays, peghead inlay and plating decide the trim.'},
 {q:'When Did Gibson Make The Barney Kessel?',a:'Gibson introduced it in 1961. The ledger figures on Joe’s shipping page run through 1973, and the price guide lists the Regular through 1974.'},
 {q:'Did Barney Kessel Play His Gibson Model?',a:'He endorsed it, but on record he mostly played his 1940s ES-350 with a Charlie Christian pickup.'}],
 closing:'<p>Settle the trim from the inlays, date the guitar from its pickups, nut and serial, and list any repairs. Then take that description to the <a href="/post/gibson-barney-kessel-value-guide/">Barney Kessel price guide</a>.</p>'
}];
