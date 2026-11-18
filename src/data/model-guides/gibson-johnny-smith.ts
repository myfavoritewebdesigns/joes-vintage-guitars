import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('johnny-smith',i);
const date='November 18, 2026';

export const johnnySmithGuides:ModelGuideData[]=[{
 ...gBase('johnny-smith','value'),date,title:'Gibson Johnny Smith Value Guide',seoTitle:'Gibson Johnny Smith Value Guide: 1961 To 1989 Prices',
 description:'Prices for Gibson Johnny Smith single-pickup and Double models, 1961 to 1989, accounting for floating pickup swaps, factory seconds, finish and replacement parts.',
 eyebrow:'Gibson Johnny Smith Prices · Single And Double Pickup',dek:'Collectors pay most for the first years of the 1960s. On later guitars, factory pickups, guards and tailpieces help determine where an example falls within its price range.',hero:ph.js62Front,
 glanceTitle:'Johnny Smith Estimated Values',glance:[['1961 To 1964',r(0)],['1965',r(1)],['1966 To 1969',r(2)],['1970 To 1989',r(3)]],
 secondaryActions:[{label:'View Johnny Smith Prices',href:'#values'},{label:'Identify Your Johnny Smith',href:'/post/gibson-johnny-smith-authentication-guide/'}],
 intro:{html:`<p>The estimate for 1961 to 1964 is ${r(0)}, compared with ${r(3)} for 1970 to 1989. Each assumes an excellent Johnny Smith with entirely original equipment and its original case. Sunburst and natural finishes share these rows, as do the single-pickup model and the Johnny Smith Double with two pickups. Joe’s 1970, pictured below, carries a factory-second stamp and replacements for its guard, pickup and tailpiece. Before selecting a comparison, establish the equipment with the <a href="/post/gibson-johnny-smith-authentication-guide/">Johnny Smith identification reference</a>.</p>`,calloutTitle:'The Floating Pickup Is Easy To Change',callout:'Owners have changed these floating pickups for decades because installation leaves the top uncut. Identify the pickup currently fitted to yours, and retain the factory one if it’s still with you.'},
 sections:[
 section('values','Johnny Smith Values By Year','Excellent Original Guitars With The Original Case',[
 gChart('johnny-smith'),p(`<p>For 1965 the estimate is ${r(1)}; for 1966 to 1969 it’s ${r(2)}. A natural finish or a second pickup doesn’t select a different guide row. Sunburst, natural, single-pickup and Double examples are grouped together, with those distinctions assessed during the individual appraisal.</p><p>The figures represent November 2026 retail estimates for excellent examples retaining all factory parts and their original cases. Purchase offers require their own assessment. Structural repairs, refinishing or replacement of the pickup, tailpiece or guard call for an individual valuation.</p>`)]),
 section('early','Why 1961 To 1964 Leads The Chart','The First Years Of A Carved Archtop',[
 p(`<p>Collectors place the highest value on the opening four years of production. The 1961 to 1964 estimate of ${r(0)} stands several thousand dollars above the 1965 estimate of ${r(1)}.</p><p>Shipments were limited. Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">ledger totals</a> list 28 single-pickup examples for 1961, exclusively sunburst, followed by 91 in 1962. In 1963, the Double began shipping with a total of 9.</p><p>Inspect condition carefully on these carved-top, carved-back guitars. A cracked top, a repaired brace or a high bridge resulting from a tired neck angle requires a comparison outside the clean-condition rows. That applies across production years.</p>`),
 {type:'photos',photos:[ph.js62Front,ph.js62Back]}
 ],'dark'),
 section('models','Single Pickup, Double Pickup And Natural Finish','What The Chart Groups Together',[
 {type:'cards',variant:'models',items:[
 {title:'Johnny Smith',html:'<p>The ledger records 963 single-pickup examples between 1961 and 1979. Each has a floating pickup, with the jack and volume control carried by the guard.</p>'},
 {title:'Johnny Smith Double',html:'<p>Ledger shipments total 625 through 1979 for this version. It began shipping in 1963 with a pair of floating pickups.</p>'},
 {title:'Natural Finish',html:'<p>Natural is the less common finish in both versions. It accounts for 209 among 963 single-pickup instruments and 112 among 625 Doubles.</p>'}]},
 p('<p>The combined price rows leave finish and model distinctions to the appraisal. Let Joe see the controls and pickups clearly, and use daylight photographs to show the color. Compare the versions in the <a href="/post/gibson-johnny-smith-authentication-guide/">Johnny Smith identification guide</a>.</p>')]),
 section('archive','Joe’s 1970 Johnny Smith','A Factory Second With Replaced Parts',[
 {type:'archive',items:[{label:'1970 Gibson Johnny Smith',title:'A Strong Player With An Unusual Serial',html:'<p>Construction and the label suggest 1970 for Joe’s Johnny Smith, despite the unusual-for-the-period serial 39708. SECOND is stamped on its headstock. Joe’s best explanation is a guitar built in 1970 and finished or assembled somewhat later. It arrived with its original hard case, a Lollar pickup, a replacement guard and a Howard Roberts fingers-style tailpiece.</p><p>The second stamp and replacement equipment lower its comparison with an excellent, original example. For daily playing, it offers exceptional playability and a full, musical amplified sound from the Lollar. That makes it well suited to someone buying a Johnny Smith for regular use.</p>',photos:[ph.jsFront,ph.jsSerial]}]}
 ],'archive'),
 section('changes','Pickups, Guards, Tailpieces And Seconds','What Moves A Johnny Smith Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Replaced Pickups',html:'<p>Many guitars now carry aftermarket pickups made in Johnny Smith style. They can sound excellent, though they replace factory equipment. Tell Joe whether you still have the original.</p>'},
 {title:'Replacement Guards',html:'<p>Controls attach to the factory multi-bound tortoise guard. Since replacement guards turn up often, send close views of both the binding and control attachments.</p>'},
 {title:'Changed Tailpieces',html:'<p>List a tailpiece change, including a fingers-style unit like Joe’s 1970 carries. The factory piece is identified by Johnny Smith’s name.</p>'},
 {title:'Factory Seconds',html:'<p>Report a stamped 2 or SECOND when requesting an appraisal. Gibson used these marks for guitars sold as seconds; playability needs to be judged separately.</p>'}]},
 p('<p>Retain the original equipment that accompanies your guitar. Before replacing or reinstalling parts, consult the advice on <a href="/should-i-restore-my-guitar-before-selling/">restoration ahead of a sale</a>. The <a href="/do-replaced-pickups-hurt-guitar-value/">pickup-change guide</a> explains how a swap affects an appraisal.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Johnny Smith Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Front And Back In Daylight',html:'<p>Use daylight to make the finish color and the carved top and back easy to assess.</p>'},
 {title:'Pickups, Guard And Controls',html:'<p>Photograph the guard’s edge and the pickup’s mounting closely enough to show their details.</p>'},
 {title:'Headstock Back And Label',html:'<p>Make the number and nearby stamps readable. Add a view through the f-hole of the interior label.</p>'},
 {title:'Side View Across The Bridge',html:'<p>A photograph from this angle records the height of the bridge and the angle of the neck.</p>'}]},
 gCTA('Get A Value For Your Johnny Smith','<p>Send the photos above and anything you know about the guitar’s history. Joe can tell you which row it fits and what its parts and condition do to the number.</p>')
 ])],
 faqs:[
 {q:'What Is A 1960s Gibson Johnny Smith Worth?',a:`Assuming an excellent guitar with original parts and its case, the estimates are ${r(2)} for 1966 to 1969, ${r(1)} for 1965 and ${r(0)} for 1961 to 1964.`},
 {q:'Is A Johnny Smith Double Worth More?',a:'Both pickup configurations use a shared set of guide rows. Joe assesses the individual guitar to account for its particular features.'},
 {q:'Does A Replaced Pickup Hurt A Johnny Smith’s Value?',a:'A changed pickup lowers the comparison with a guitar retaining all its original equipment. Having the factory pickup alongside the guitar helps the assessment.'}],
 closing:'<p>Establish originality before assessing the date and condition. For a part-by-part reference, use the <a href="/post/gibson-johnny-smith-authentication-guide/">guide to identifying a Johnny Smith</a>.</p>'
},{
 ...gBase('johnny-smith','authentication'),date,title:'Gibson Johnny Smith Authentication Guide',seoTitle:'Gibson Johnny Smith Authentication Guide: Pickups And Labels',
 description:'Check a Johnny Smith or Double using scale length, floating pickups, label and serial, then identify replacement equipment and interpret factory-second stamps.',
 eyebrow:'Gibson Johnny Smith Identification · JS And JSD',dek:'The Johnny Smith combines X-bracing beneath a carved top with a 25-inch scale and floating pickups. That combination distinguishes it from Gibson’s other archtops.',hero:ph.js62Front,
 glanceTitle:'Johnny Smith At A Glance',glance:[['Body','17 Inches, Carved Spruce Top'],['Scale','25 Inches'],['Pickups','Floating, Mounted Off The Top'],['Original Run','1961 To 1989']],
 secondaryActions:[{label:'What Makes A Johnny Smith',href:'#features'},{label:'See Johnny Smith Values',href:'/post/gibson-johnny-smith-value-guide/'}],
 intro:{html:'<p>Ted McCarty’s visit led Johnny Smith to draw plans based on his D’Angelico. Gibson introduced the resulting model in 1961 and added the two-pickup Double in 1963. It remained in the line through 1989, when Smith transferred his name to Heritage. A carved 17-inch body, floating pickups and a 25-inch scale belong to every example. Joe’s 1970 below shows a factory second with some changed equipment. You’ll find estimates in the <a href="/post/gibson-johnny-smith-value-guide/">Johnny Smith pricing guide</a>.</p>',calloutTitle:'Guild Made A Johnny Smith First',callout:'Look at the maker’s headstock and label. Guild offered a separate Johnny Smith Award from 1956, fitted with a floating DeArmond, and had renamed it Artist Award by 1961. A Guild-marked instrument belongs to that maker.'},
 sections:[
 section('features','What Makes A Gibson Johnny Smith','Top, Scale, Pickups And Hardware',[
 {type:'cards',variant:'models',items:[
 {title:'A Carved, X-Braced Top',html:'<p>Solid spruce is carved and X-braced for the top; most other Gibson archtops have parallel tone bars. Figured maple is carved for the back, with maple forming the sides. There’s a rounded cutaway in the 17-inch-wide body, which measures about 3 1/8 inches deep.</p>'},
 {title:'A 25-Inch Scale',html:'<p>At 25 inches, it’s a shorter scale than the 25½ inches used by the Super 400 and L-5. The Super 400 supplies the pattern for both the headstock and the pearl split-block markers in the ebony fingerboard.</p>'},
 {title:'Floating Pickups',html:'<p>Gibson first used mini-humbuckers on the Johnny Smith. Attachment to the neck and guard leaves the top without pickup cuts. The single-pickup version carries its volume and jack on the guard.</p>'},
 {title:'Gold Hardware',html:'<p>An adjustable ebony bridge accompanies gold-plated hardware. The named Johnny Smith tailpiece follows an L-5CES pattern. Published examples show Sealfast tuners from Kluson.</p>'}]},
 p('<p>Double the measurement between the nut’s front edge and the middle of fret 12. A result near 25 inches suggests a Johnny Smith; near 25½ inches suggests another model, including the Super 400 or L-5.</p><p>With a light through an f-hole, check for the model’s X-bracing if it’s visible. Binding is substantial too. A documented 1962 has seven layers around the top, bound f-holes and multiple layers around its guard.</p>'),
 {type:'photos',photos:[ph.js62Front,ph.js62Back]}]),
 section('models','Johnny Smith Or Johnny Smith Double','One Pickup Or Two, Sunburst Or Natural',[
 {type:'table',caption:'Johnny Smith Models And Ledger Shipments',columns:['Model','Pickups','Finishes','Ledger Shipments'],rows:[
 ['Johnny Smith','One floating pickup','Sunburst or natural','963, 1961 to 1979'],
 ['Johnny Smith Double','Two floating pickups','Sunburst or natural','625, 1963 to 1979']]},
 p('<p>As you count pickups, you’ll also need to inspect the controls. On a single-pickup example, the guard holds the jack and volume. A Double adds another pickup with its controls. Empty mounting holes on the guard or neck end can reveal an earlier pickup position.</p><p>According to Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">shipping-ledger reference</a>, natural accounts for the smaller share: 112 Doubles and 209 single-pickup guitars. The factory finish choices were limited to natural and sunburst. Another color means the guitar has been refinished.</p>')]),
 section('archive','Joe’s 1970 Johnny Smith','A Factory Second With An Unusual Serial',[
 {type:'archive',items:[{label:'1970 Gibson Johnny Smith',title:'Original Body, Replaced Pickup, Guard And Tailpiece',html:'<p>The label and build of Joe’s example point to 1970. Its Gibson Inc. label names Johnny Smith, and the peghead shows a split diamond and a Johnny Smith truss rod cover. Beside the gold Klusons, the serial reads 39708, with SECOND underneath. That number falls outside the expected pattern for the period.</p><p>Joe believes a 1970 build completed later may explain the unusual number. A Howard Roberts fingers-style unit replaces the named Johnny Smith tailpiece, while the guard is a replacement and the pickup a Lollar. It’s structurally sound, plays exceptionally well and came with its factory case.</p>',photos:[ph.jsFront,ph.jsHead,ph.jsSerial,ph.jsLabel,ph.jsBack]}]}
 ],'archive'),
 section('dating','Dating A Johnny Smith','Labels And Serial Formats',[
 {type:'timeline',items:[
 {date:'1961 To 1969',title:'Impressed Serials, No USA Stamp',html:'<p>Check behind the headstock for an impressed number. An orange oval label appears on a documented 1962. Because Gibson repeated number ranges during the 1960s, a serial may correspond to several years.</p>'},
 {date:'From 1970',title:'MADE IN U.S.A. Stamp',html:'<p>Beginning in 1970, MADE IN U.S.A. appears beneath Gibson serials. It distinguishes the period when a six-digit 1970s number also falls within a 1960s range.</p>'},
 {date:'1975 To 1977',title:'Eight-Digit Decals',html:'<p>The decal prefixes correspond to years: 99 for 1975, 00 for 1976, and 06 for 1977.</p>'},
 {date:'1977 On',title:'Eight-Digit Impressed Serials',html:'<p>Read the year by combining the first digit with the fifth. Reports indicate that some hand-built archtops retained earlier numbering styles into the late 1970s.</p>'}]},
 p('<p>Compare the number with the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial reference</a>, then reconcile it with the hardware and label design. Joe’s 1970 has a five-digit number outside the usual ranges. A mismatch alone doesn’t undermine identification when the construction and label support the guitar.</p>')
 ],'dark'),
 section('seconds','Reading A Factory Second Stamp','What A 2 Or SECOND Means',[
 p('<p>Seconds were sold with a headstock-back mark: a little 2 near the top or SECOND, as seen on Joe’s 1970. According to a former Gibson finish worker, 2 often indicated a return to the paint booth. Some factory seconds were sold to employees.</p><p>Usually the factory had found a cosmetic fault. Keep the stamp intact and disclose it as part of the instrument’s factory history. Assess its playing qualities and structural condition directly.</p>')]),
 section('red-flags','Replaced Parts And Look-Alikes','What To Question On A Johnny Smith',[
 {type:'cards',variant:'condition',items:[
 {title:'Aftermarket Pickups',html:'<p>Replacement units from Lollar and other makers fit the factory Johnny Smith mount. Check the cover and mounting parts against an original example with documentation.</p>'},
 {title:'Guards And Jacks',html:'<p>A newer guard is a common change. Some owners have also substituted a standard jack for the small factory jack. Inspect for added holes and fresh solder.</p>'},
 {title:'Tailpieces',html:'<p>Smith’s name should appear on the factory tailpiece. A piece without that identity is replacement equipment.</p>'},
 {title:'Copies And Later Guitars',html:'<p>Establish the maker using the serial, headstock and label. Ibanez’s 1970s copy was the 2461; Heritage produced a Johnny Smith after 1989. Gibson later followed the design with the LeGrand.</p>'}]},
 p('<p>Inspect the finish as well as the parts. Look for overspray on the binding and compare neck and back color with the top. Read the <a href="/what-lowers-vintage-guitar-value/">condition and value reference</a> for the treatment of repairs and replacements.</p>')
 ],'dark'),
 section('checklist','Build A Johnny Smith Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Front, Back And Side',html:'<p>Take daylight views of the full instrument, including a side photograph looking across the bridge.</p>'},
 {title:'Pickups, Guard And Tailpiece',html:'<p>Photograph the tailpiece, the edges around the guard and the pickup’s attachment points.</p>'},
 {title:'Headstock, Serial And Label',html:'<p>Include the peghead face and its reverse with all serial markings and stamps visible. Add the label seen through the f-hole.</p>'},
 {title:'Scale Length',html:'<p>Send the distance you’ve measured between the nut and fret 12 so the scale can be checked.</p>'}]},
 gCTA('Ask Joe To Identify Your Johnny Smith','<p>Send the photos above. Joe can confirm the model, the likely year and which parts are original.</p>')]),
 section('references','Johnny Smith Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Vintage Guitar: The Gibson Johnny Smith','https://vintageguitar.com/3569/gibson-johnny-smith','George Gruhn on the model’s origin, construction and finishes.'),
 source('Premier Guitar: Johnny Smith’s Fine-Tuned Signature','https://www.premierguitar.com/pro-advice/vintage-vault/johnny-smiths-fine-tuned-signature','Body, bracing, the Double and the Guild Johnny Smith Award.'),
 source('Guitar World: The Epiphone And Gibson Mini-Humbucker','https://www.guitarworld.com/features/the-story-of-the-epiphone-and-gibson-mini-humbucker','The Johnny Smith as the first Gibson with mini-humbuckers.'),
 source('ES-335.com: That Little 2 On The Headstock','https://www.es-335.com/2018/04/16/that-little-2-on-the-headstock/','Factory second stamps.'),
 source('Gibson Shipping Totals, 1948 To 1979','/post/gibson-shipping-totals-1948-1979/','Johnny Smith and Johnny Smith Double ledger figures.')]}])],
 faqs:[
 {q:'How Do I Know My Johnny Smith Is A Gibson?',a:'Look for Gibson identification on the label, headstock and serial alongside a 25-inch scale, carved spruce top and floating pickups. The name or design also appears on instruments from Ibanez, Guild and Heritage.'},
 {q:'What Does SECOND Stamped On The Headstock Mean?',a:'It records a factory-second sale by Gibson, most often because of a cosmetic fault. Include the mark in your description of the instrument.'},
 {q:'Did The Johnny Smith Come In Colors Other Than Sunburst?',a:'Natural was the sole alternative to sunburst in Gibson’s finish choices for this model.'},
 {q:'When Was The Gibson Johnny Smith Made?',a:'Production covered 1961 through 1989, with the Double’s second-pickup version joining the line in 1963.'}],
 closing:'<p>Match the top, pickup arrangement and scale, and assess the label alongside its serial. Record replacements before using the <a href="/post/gibson-johnny-smith-value-guide/">Johnny Smith value chart</a>.</p>'
}];
