import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('johnny-smith',i);
const date='November 18, 2026';

export const johnnySmithGuides:ModelGuideData[]=[{
 ...gBase('johnny-smith','value'),date,title:'Gibson Johnny Smith Value Guide',seoTitle:'Gibson Johnny Smith Value Guide: 1961 To 1989 Prices',
 description:'Gibson Johnny Smith and Johnny Smith Double values from 1961 to 1989. See how floating pickups, factory seconds, finish and replaced parts affect price.',
 eyebrow:'Gibson Johnny Smith Prices · Single And Double Pickup',dek:'The early 1960s guitars lead the chart. After that, originality of the pickup, guard and tailpiece moves a Johnny Smith up or down inside its row.',hero:ph.jsFront,
 glanceTitle:'Johnny Smith Estimated Values',glance:[['1961 To 1964',r(0)],['1965',r(1)],['1966 To 1969',r(2)],['1970 To 1989',r(3)]],
 secondaryActions:[{label:'View Johnny Smith Prices',href:'#values'},{label:'Identify Your Johnny Smith',href:'/post/gibson-johnny-smith-authentication-guide/'}],
 intro:{html:`<p>A 1961 to 1964 Gibson Johnny Smith is estimated at ${r(0)}, and a 1970 to 1989 example at ${r(3)}. Both assume excellent, all-original condition with the original case. The price guide groups the one-pickup Johnny Smith and the two-pickup Johnny Smith Double together, in sunburst or natural. Joe’s 1970 Johnny Smith below is a factory second with a replaced pickup, guard and tailpiece. Use the <a href="/post/gibson-johnny-smith-authentication-guide/">Johnny Smith authentication guide</a> to check which parts are original before you choose a row.</p>`,calloutTitle:'The Floating Pickup Is Easy To Change',callout:'Gibson mounted the Johnny Smith pickup without cutting the top, so owners have swapped pickups for decades. List the pickup that’s on the guitar now and keep the original if you have it.'},
 sections:[
 section('values','Johnny Smith Values By Year','Excellent Original Guitars With The Original Case',[
 gChart('johnny-smith'),p(`<p>The chart covers both the Johnny Smith and the Johnny Smith Double, in sunburst or natural. A 1965 example is ${r(1)} and a 1966 to 1969 example is ${r(2)}. The guide doesn’t split the rows by pickup count or finish, so a natural or two-pickup guitar starts from the same row and the appraisal accounts for the difference.</p><p>These are November 2026 retail estimates for excellent, all-original guitars with the original case. They aren’t purchase offers. A replaced pickup, guard or tailpiece, a refinish or a structural repair needs an individual estimate.</p>`)]),
 section('early','Why 1961 To 1964 Leads The Chart','The First Years Of A Carved Archtop',[
 p(`<p>The 1961 to 1964 row is ${r(0)}, several thousand dollars above the 1965 row at ${r(1)}. These are the model’s first four years, and collectors pay the most for them.</p><p>They’re also scarce. The ledger figures on Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">Gibson shipping totals page</a> show 28 single-pickup guitars in 1961, all sunburst, and 91 in 1962. The two-pickup Double first shipped in 1963, with 9 that year.</p><p>Every Johnny Smith has a carved top and back, so condition carries real weight. Top cracks, a high bridge from a tired neck angle or a repaired brace all move a guitar out of these rows, whatever the year.</p>`),
 {type:'photos',photos:[ph.jsFull]}
 ],'dark'),
 section('models','Single Pickup, Double Pickup And Natural Finish','What The Chart Groups Together',[
 {type:'cards',variant:'models',items:[
 {title:'Johnny Smith',html:'<p>One floating pickup with its volume control and jack on the guard. The ledger figures show 963 from 1961 to 1979.</p>'},
 {title:'Johnny Smith Double',html:'<p>Two floating pickups, first shipped in 1963. The ledger figures show 625 through 1979.</p>'},
 {title:'Natural Finish',html:'<p>Natural guitars are the minority. Of the 963 single-pickup guitars, 209 shipped in natural. Of the 625 Doubles, 112 did.</p>'}]},
 p('<p>Because the chart combines these, the appraisal does the separating. Send clear photos of the controls and pickups so Joe can see which model you have, and photos in daylight so the finish is clear. The <a href="/post/gibson-johnny-smith-authentication-guide/">authentication guide</a> shows how the two models differ.</p>')]),
 section('archive','Joe’s 1970 Johnny Smith','A Factory Second With Replaced Parts',[
 {type:'archive',items:[{label:'1970 Gibson Johnny Smith',title:'A Strong Player With An Unusual Serial',html:'<p>Joe’s Johnny Smith appears to date to 1970 from its label and construction. The serial, 39708, is an outlier for that period, and the headstock is stamped SECOND. Joe’s best guess is a 1970 build that was finished or assembled a little later. It has a Lollar pickup, a replacement pickguard and a Howard Roberts fingers-style tailpiece, and it came with its original hard case.</p><p>The replaced parts and the second stamp put it below the excellent, original rows. It plays exceptionally well, and the Lollar pickup gives it a full, musical amplified voice. That combination suits a player who wants a Gibson Johnny Smith to use every day.</p>',photos:[ph.jsSerial]}]}
 ],'archive'),
 section('changes','Pickups, Guards, Tailpieces And Seconds','What Moves A Johnny Smith Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Replaced Pickups',html:'<p>Aftermarket Johnny Smith-style pickups are common and can sound excellent. They still mean the original pickup is gone. Say whether you have it.</p>'},
 {title:'Replacement Guards',html:'<p>The original guard is multi-bound tortoise and carries the controls. Replacement guards are common, so photograph the binding and the control mounting.</p>'},
 {title:'Changed Tailpieces',html:'<p>The factory tailpiece carries Johnny Smith’s name. A different tailpiece, like the fingers-style one on Joe’s 1970, should be listed.</p>'},
 {title:'Factory Seconds',html:'<p>A 2 or SECOND stamp marks a guitar Gibson sold as a second. Describe it in the appraisal request. The stamp says nothing about how well the guitar plays.</p>'}]},
 p('<p>Keep any original parts that come with the guitar. Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> before reinstalling or replacing anything, and the <a href="/do-replaced-pickups-hurt-guitar-value/">replaced pickup guide</a> for how pickup swaps are weighed.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Johnny Smith Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Front And Back In Daylight',html:'<p>Show the carved top, the back and the finish color clearly.</p>'},
 {title:'Pickups, Guard And Controls',html:'<p>Include close photos of the pickup mounting and the guard edge.</p>'},
 {title:'Headstock Back And Label',html:'<p>Send the serial, any stamp near it and the label through the f-hole.</p>'},
 {title:'Side View Across The Bridge',html:'<p>This shows the bridge height and the neck angle.</p>'}]},
 gCTA('Get A Value For Your Johnny Smith','<p>Send the photos above and anything you know about the guitar’s history. Joe can tell you which row it fits and what its parts and condition do to the number.</p>')
 ])],
 faqs:[
 {q:'What Is A 1960s Gibson Johnny Smith Worth?',a:`In excellent, original condition with its case, a 1961 to 1964 Johnny Smith is estimated at ${r(0)}, a 1965 at ${r(1)} and a 1966 to 1969 at ${r(2)}.`},
 {q:'Is A Johnny Smith Double Worth More?',a:'The price guide groups the one-pickup and two-pickup models in the same rows. Joe’s appraisal looks at the specific guitar.'},
 {q:'Does A Replaced Pickup Hurt A Johnny Smith’s Value?',a:'Yes, compared with an all-original guitar. Keeping the original pickup with the guitar helps.'}],
 closing:'<p>Check which parts are original, then the year and condition. The <a href="/post/gibson-johnny-smith-authentication-guide/">Johnny Smith identification guide</a> covers each part.</p>'
},{
 ...gBase('johnny-smith','authentication'),date,title:'Gibson Johnny Smith Authentication Guide',seoTitle:'Gibson Johnny Smith Authentication Guide: Pickups And Labels',
 description:'Identify a Gibson Johnny Smith or Johnny Smith Double by its floating pickups, scale, label and serial. Read factory second stamps and spot replaced parts.',
 eyebrow:'Gibson Johnny Smith Identification · JS And JSD',dek:'A carved, X-braced top, a 25-inch scale and pickups that float off the top make the Johnny Smith different from every other Gibson archtop.',hero:ph.jsFront,
 glanceTitle:'Johnny Smith At A Glance',glance:[['Body','17 Inches, Carved Spruce Top'],['Scale','25 Inches'],['Pickups','Floating, Mounted Off The Top'],['Original Run','1961 To 1989']],
 secondaryActions:[{label:'What Makes A Johnny Smith',href:'#features'},{label:'See Johnny Smith Values',href:'/post/gibson-johnny-smith-value-guide/'}],
 intro:{html:'<p>Gibson introduced the Johnny Smith in 1961, after Ted McCarty visited Smith and Smith drew up plans based on his D’Angelico. The two-pickup Johnny Smith Double followed in 1963. The model stayed in Gibson’s line until 1989, when Smith moved his name to Heritage. Every Johnny Smith has a 17-inch carved body, a 25-inch scale and pickups that float off the top. Joe’s 1970 example below is a factory second with replaced parts. The <a href="/post/gibson-johnny-smith-value-guide/">Johnny Smith value guide</a> covers prices.</p>',calloutTitle:'Guild Made A Johnny Smith First',callout:'Guild’s Johnny Smith Award, from 1956, was a different guitar with a floating DeArmond pickup. Guild renamed it the Artist Award by 1961. A Guild headstock or label means it isn’t a Gibson.'},
 sections:[
 section('features','What Makes A Gibson Johnny Smith','Top, Scale, Pickups And Hardware',[
 {type:'cards',variant:'models',items:[
 {title:'A Carved, X-Braced Top',html:'<p>The top is carved solid spruce with X-bracing, where most Gibson archtops use parallel tone bars. The back is carved figured maple with maple sides. The body is 17 inches wide and about 3 1/8 inches deep, with a rounded cutaway.</p>'},
 {title:'A 25-Inch Scale',html:'<p>The L-5 and Super 400 use a 25½-inch scale. The Johnny Smith is shorter at 25 inches. The fingerboard is ebony with pearl split-block inlays like the Super 400’s, and the headstock follows the Super 400 too.</p>'},
 {title:'Floating Pickups',html:'<p>The Johnny Smith was the first Gibson fitted with mini-humbuckers. They mount to the neck and guard, so the top isn’t cut. On the single-pickup guitar, the volume control and jack sit on the guard.</p>'},
 {title:'Gold Hardware',html:'<p>The hardware is gold-plated. The tailpiece follows the L-5CES design with Smith’s name on it, the bridge is adjustable ebony and the tuners on published examples are Kluson Sealfast.</p>'}]},
 p('<p>Measure the scale from the front of the nut to the center of the 12th fret and double it. About 25 inches points to a Johnny Smith. About 25½ inches points to a different model, such as an L-5 or Super 400.</p><p>Look through the f-hole for the bracing if you can see it with a light. An X-braced top is part of what makes the Johnny Smith a Johnny Smith. The binding is heavy: seven layers on the top edge on a documented 1962 example, with bound f-holes and a multi-bound guard.</p>')]),
 section('models','Johnny Smith Or Johnny Smith Double','One Pickup Or Two, Sunburst Or Natural',[
 {type:'table',caption:'Johnny Smith Models And Ledger Shipments',columns:['Model','Pickups','Finishes','Ledger Shipments'],rows:[
 ['Johnny Smith','One floating pickup','Sunburst or natural','963, 1961 to 1979'],
 ['Johnny Smith Double','Two floating pickups','Sunburst or natural','625, 1963 to 1979']]},
 p('<p>Count the pickups and look at the controls. The single-pickup guitar has its volume and jack on the guard. The Double adds a second pickup and its controls. Mounting holes in the guard or at the end of the neck can show where a pickup used to be.</p><p>The shipment figures come from Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">Gibson shipping totals page</a>. Natural finish is the smaller group: 209 of the single-pickup guitars and 112 of the Doubles. Gibson offered only sunburst and natural. A Johnny Smith in another color has been refinished.</p>')]),
 section('archive','Joe’s 1970 Johnny Smith','A Factory Second With An Unusual Serial',[
 {type:'archive',items:[{label:'1970 Gibson Johnny Smith',title:'Original Body, Replaced Pickup, Guard And Tailpiece',html:'<p>Joe’s Johnny Smith appears to date to 1970 from its label and construction. The Gibson Inc. label reads Johnny Smith, and the headstock carries the split-diamond inlay and a Johnny Smith truss rod cover. The serial is 39708, an outlier for that period, and SECOND is stamped below it next to gold Kluson tuners.</p><p>Joe thinks it was likely built in 1970 and completed later, which would explain the number. The pickup is a Lollar, the guard is a replacement and the tailpiece is a Howard Roberts fingers-style unit in place of the original Johnny Smith tailpiece. It’s structurally solid and plays exceptionally well, and it came with its original case.</p>',photos:[ph.jsHead,ph.jsSerial,ph.jsLabel,ph.jsBack]}]}
 ],'archive'),
 section('dating','Dating A Johnny Smith','Labels And Serial Formats',[
 {type:'timeline',items:[
 {date:'1961 To 1969',title:'Impressed Serials, No USA Stamp',html:'<p>The serial is impressed into the back of the headstock. A 1962 example has an orange oval label. Gibson reused serial ranges in this decade, so one number can match several years.</p>'},
 {date:'From 1970',title:'MADE IN U.S.A. Stamp',html:'<p>Gibson stamped MADE IN U.S.A. below the serial from 1970. Six-digit numbers from the 1970s overlap numbers from the 1960s, so the stamp is what separates them.</p>'},
 {date:'1975 To 1977',title:'Eight-Digit Decals',html:'<p>Serials on decals beginning 99, 00 and 06 identify 1975, 1976 and 1977.</p>'},
 {date:'1977 On',title:'Eight-Digit Impressed Serials',html:'<p>The first and fifth digits give the year. Some hand-built archtops are reported to have kept older-style numbers into the late 1970s.</p>'}]},
 p('<p>Read the serial with the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a>, then check it against the label style and the hardware. A number that doesn’t fit any range, like the five-digit serial on Joe’s 1970, isn’t a reason to doubt the guitar by itself. The construction and label still carry the identification.</p>')
 ],'dark'),
 section('seconds','Reading A Factory Second Stamp','What A 2 Or SECOND Means',[
 p('<p>Gibson sold some guitars as factory seconds and marked them on the back of the headstock. The mark can be a small 2 near the top of the headstock or the word SECOND, as on Joe’s 1970 Johnny Smith. A former Gibson finish worker has said the 2 often meant a second trip through the paint booth, and some seconds went to employees.</p><p>A second stamp is part of the guitar’s factory history, so leave it alone and mention it in any description. It usually reflects a cosmetic problem found at the factory. Judge how the guitar plays and holds up on its own merits.</p>')]),
 section('red-flags','Replaced Parts And Look-Alikes','What To Question On A Johnny Smith',[
 {type:'cards',variant:'condition',items:[
 {title:'Aftermarket Pickups',html:'<p>Lollar and other makers sell Johnny Smith-style pickups, and they fit the original mounting. Compare the pickup cover and mounting hardware with a documented original.</p>'},
 {title:'Guards And Jacks',html:'<p>Replacement guards are common, and some guitars have had the small original jack changed to a standard one. Look for extra holes and new solder.</p>'},
 {title:'Tailpieces',html:'<p>The original tailpiece carries Smith’s name. Any other tailpiece is a replacement.</p>'},
 {title:'Copies And Later Guitars',html:'<p>Ibanez made a Johnny Smith copy, the 2461, in the 1970s. Heritage made a Johnny Smith after 1989, and Gibson’s later LeGrand follows the design. Check the headstock, label and serial.</p>'}]},
 p('<p>Finish work also needs a look. Compare the color of the top with the back and the neck, and check the binding for overspray. The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> explains how changed parts and repairs are weighed.</p>')
 ],'dark'),
 section('checklist','Build A Johnny Smith Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Front, Back And Side',html:'<p>Show the whole guitar in daylight, plus a side view across the bridge.</p>'},
 {title:'Pickups, Guard And Tailpiece',html:'<p>Include the pickup mounting, the guard edges and the tailpiece.</p>'},
 {title:'Headstock, Serial And Label',html:'<p>Send the headstock face, the back with the serial and any stamp, and the label through the f-hole.</p>'},
 {title:'Scale Length',html:'<p>Measure from the nut to the 12th fret and send the number.</p>'}]},
 gCTA('Ask Joe To Identify Your Johnny Smith','<p>Send the photos above. Joe can confirm the model, the likely year and which parts are original.</p>')]),
 section('references','Johnny Smith Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Vintage Guitar: The Gibson Johnny Smith','https://vintageguitar.com/3569/gibson-johnny-smith','George Gruhn on the model’s origin, construction and finishes.'),
 source('Premier Guitar: Johnny Smith’s Fine-Tuned Signature','https://www.premierguitar.com/pro-advice/vintage-vault/johnny-smiths-fine-tuned-signature','Body, bracing, the Double and the Guild Johnny Smith Award.'),
 source('Guitar World: The Epiphone And Gibson Mini-Humbucker','https://www.guitarworld.com/features/the-story-of-the-epiphone-and-gibson-mini-humbucker','The Johnny Smith as the first Gibson with mini-humbuckers.'),
 source('ES-335.com: That Little 2 On The Headstock','https://www.es-335.com/2018/04/16/that-little-2-on-the-headstock/','Factory second stamps.'),
 source('Gibson Shipping Totals, 1948 To 1979','/post/gibson-shipping-totals-1948-1979/','Johnny Smith and Johnny Smith Double ledger figures.')]}])],
 faqs:[
 {q:'How Do I Know My Johnny Smith Is A Gibson?',a:'Check for a 25-inch scale, a carved spruce top, floating pickups, a Gibson headstock and label, and a Gibson serial. Guild, Heritage and Ibanez all made guitars with the Johnny Smith name or design.'},
 {q:'What Does SECOND Stamped On The Headstock Mean?',a:'Gibson sold the guitar as a factory second, usually for a cosmetic issue. Mention it when describing the guitar.'},
 {q:'Did The Johnny Smith Come In Colors Other Than Sunburst?',a:'Only natural. Gibson offered the model in sunburst and natural.'},
 {q:'When Was The Gibson Johnny Smith Made?',a:'From 1961 to 1989. The two-pickup Double was added in 1963.'}],
 closing:'<p>Confirm the scale, top and pickups, read the serial and label together and note which parts were replaced. Then use the <a href="/post/gibson-johnny-smith-value-guide/">Johnny Smith price guide</a>.</p>'
}];
