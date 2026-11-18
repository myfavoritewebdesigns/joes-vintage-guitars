import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('tal-farlow',i);
const date='November 18, 2026';

export const talFarlowGuides:ModelGuideData[]=[{
 ...gBase('tal-farlow','value'),date,title:'Gibson Tal Farlow Value Guide',seoTitle:'Gibson Tal Farlow Value Guide: Original And Reissue Prices',
 description:'Gibson Tal Farlow values for the 1962 to 1971 originals and the 1993 to 2018 reissues. See how Viceroy Brown finish, pickups and repairs change price.',
 eyebrow:'Gibson Tal Farlow Prices · 1960s Originals And Reissues',dek:'An original 1960s Tal Farlow and a later reissue share a name and a look. Their prices are thousands of dollars apart.',hero:ph.farlowFront,
 glanceTitle:'Tal Farlow Estimated Values',glance:[['1962 To 1964 Viceroy Brown',r(0)],['1965 Viceroy Brown',r(1)],['1966 To 1971 Viceroy Brown',r(2)],['1993 To 2018 Reissue',r(3)]],
 secondaryActions:[{label:'View Tal Farlow Prices',href:'#values'},{label:'Identify Your Tal Farlow',href:'/post/gibson-tal-farlow-authentication-guide/'}],
 intro:{html:`<p>A 1962 to 1964 Gibson Tal Farlow in its original Viceroy Brown finish is estimated at ${r(0)}. The later 1993 to 2018 reissues are ${r(3)}. Both figures assume excellent, all-original condition with the original case. Gibson made very few original Tal Farlows, and most of the price comes from proving a guitar is one of them. Joe’s photographs of a 1962 example appear below. Use the <a href="/post/gibson-tal-farlow-authentication-guide/">Tal Farlow authentication guide</a> to separate an original from a reissue.</p>`,calloutTitle:'Original Or Reissue Comes First',callout:'The reissue copies the scroll inlay and the finish. Settle which guitar you have before you look at a year row.'},
 sections:[
 section('values','Tal Farlow Values By Production Group','Excellent Original Guitars With The Original Case',[
 gChart('tal-farlow'),p(`<p>The first three rows cover the original run in Viceroy Brown, the brown sunburst the price guide lists for the 1960s guitars. A 1965 example is ${r(1)} and a 1966 to 1971 example is ${r(2)}. The last row covers the Historic Collection reissues made from 1993 to 2018 in various colors.</p><p>These are November 2026 retail estimates for excellent, all-original guitars with the original case. They aren’t purchase offers. A refinished, repaired or modified Tal Farlow needs an individual estimate.</p>`)]),
 section('original-run','Why Original Tal Farlows Bring More','A Small Run Of 1960s Guitars',[
 p(`<p>The ledger figures on Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">Gibson shipping totals page</a> show 215 Tal Farlows from 1962 to 1967: 2 in 1962, 39 in 1963, 41 in 1964, 77 in 1965, 39 in 1966 and 17 in 1967. The price guide lists the model through 1971, so treat those figures as the documented shipments, without assuming nothing was made later.</p><p>With so few made, condition and originality carry a lot of weight. A 1962 to 1964 guitar is ${r(0)}, a spread of several thousand dollars inside one row. Original finish, original pickups, a clean neck and the original case push a guitar toward the top of it.</p><p>The early guitars fall in the years Joe’s <a href="/post/gibson-paf-patent-number-pickup-guide/">PAF and Patent Number pickup guide</a> covers. Document the pickups as they are. Don’t open a hollowbody just to read a decal. If the guitar has been serviced before, ask whether anyone photographed the pickup backs.</p>`),
 {type:'photos',photos:[ph.farlowGuard,ph.farlowFront]}
 ],'dark'),
 section('reissues','Pricing A 1993 To 2018 Reissue','Historic Collection And Later Guitars',[
 p(`<p>The reissue row is ${r(3)}. These guitars were made in various colors, so a non-brown Tal Farlow points to a reissue unless something else proves otherwise. Many reissues carry a Viceroy Brown finish too, so color alone can’t prove a 1960s guitar.</p><p>Check the label, serial and any certificate that came with it. A reissue with its case and paperwork is easier to price than one with nothing. The <a href="/post/gibson-tal-farlow-authentication-guide/">authentication guide</a> covers the differences to look for.</p>`)]),
 section('special-orders','Special Orders And Parts That Differ','Factory Options Need Paperwork',[
 p('<p>Gibson built some Tal Farlows to order. Documented examples include a Super 400-style headstock, Grover tuners, chrome hardware and a truss rod cover marked Custom. With paperwork, a factory option is part of the guitar’s story. Without it, the same feature is usually treated as a later change, so gather whatever came with the guitar: the case, receipts, letters, the original owner’s photos or a family history.</p><p>Joe’s photographed 1962 Tal Farlow has a truss rod cover marked Custom and a marbled four-point pickguard. A part that differs from the catalog can be original, a special order or a later swap. The rest of the guitar, including the hardware wear, solder and screw holes around it, usually shows which.</p><p>Replacement bridges are common on these guitars. A replacement bridge is a small change next to a refinish or a broken headstock, and it should still be listed so the estimate starts from the right place.</p>'),
 {type:'photos',photos:[ph.farlowHead]}]),
 section('changes','Repairs, Refinishes And Replaced Parts','What Moves A Tal Farlow Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Finish',html:'<p>Viceroy Brown can fade and check. Original finish with normal playing wear is the baseline for these rows. Overspray or a refinish moves the guitar out of them.</p>'},
 {title:'Pickups And Wiring',html:'<p>Show the pickups, knobs and switch. Mention any work you know about, and look for solder or wire that looks newer than the rest.</p>'},
 {title:'Neck And Headstock',html:'<p>Photograph the back of the neck behind the nut and the heel. A repaired break changes the comparison.</p>'},
 {title:'Guard And Tailpiece',html:'<p>Show the pickguard and the tailpiece. A missing or replaced part should be listed, even if the replacement looks right.</p>'}]},
 p('<p>Keep any original parts that were removed. Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> before paying for repairs, and the <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish value guide</a> if the finish has been redone.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Tal Farlow Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Whole Guitar, Front And Back',html:'<p>Use even light. Make sure the cutaway and its scroll inlay are in the frame.</p>'},
 {title:'Headstock, Serial And Label',html:'<p>Send the headstock face, the back with the serial, and the label through the f-hole.</p>'},
 {title:'Pickups, Guard And Tailpiece',html:'<p>Show each one and say which parts you know were changed.</p>'},
 {title:'Case And Paperwork',html:'<p>Include the case and any certificate, receipt or repair record.</p>'}]},
 gCTA('Get A Value For Your Tal Farlow','<p>Send the photos and the guitar’s history. Joe can tell you whether it’s an original or a reissue and where it fits in the chart.</p>')
 ])],
 faqs:[
 {q:'What Is A 1960s Gibson Tal Farlow Worth?',a:`In excellent, original condition with its case, a 1962 to 1964 Tal Farlow is estimated at ${r(0)}, a 1965 at ${r(1)} and a 1966 to 1971 at ${r(2)}.`},
 {q:'What Is A Tal Farlow Reissue Worth?',a:`The 1993 to 2018 reissues are estimated at ${r(3)} in excellent condition with the original case.`},
 {q:'How Many Original Tal Farlows Did Gibson Make?',a:'The ledger figures on Joe’s shipping totals page show 215 from 1962 to 1967.'}],
 closing:'<p>Settle original or reissue first, then the year and condition. The <a href="/post/gibson-tal-farlow-authentication-guide/">Tal Farlow identification guide</a> walks through each check.</p>'
},{
 ...gBase('tal-farlow','authentication'),date,title:'Gibson Tal Farlow Authentication Guide',seoTitle:'Gibson Tal Farlow Authentication Guide: Features And Dates',
 description:'Identify an original Gibson Tal Farlow by its scroll inlay, Viceroy Brown finish, inlays and humbuckers. Separate 1960s guitars from the later reissues.',
 eyebrow:'Gibson Tal Farlow Identification · 1960s Originals And Reissues',dek:'The scroll, the brown sunburst and the crest inlays identify a Tal Farlow. Pickups, tuners and the serial format separate a 1960s guitar from a reissue.',hero:ph.farlowFront,
 glanceTitle:'Tal Farlow At A Glance',glance:[['Body','17-Inch ES-350 Outline, One Rounded Cutaway'],['Signature Detail','Binding Scroll At The Cutaway'],['Original Finish','Viceroy Brown Sunburst'],['Documented Shipments','215, From 1962 To 1967']],
 secondaryActions:[{label:'Original Or Reissue?',href:'#reissue'},{label:'See Tal Farlow Values',href:'/post/gibson-tal-farlow-value-guide/'}],
 intro:{html:'<p>A Gibson Tal Farlow is a 17-inch, full-depth electric archtop with one rounded cutaway, two humbuckers and a scroll formed from the binding at the cutaway. Gibson built three prototypes in 1960 and launched the model in October 1962. The ledger figures on Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">shipping totals page</a> show 215 shipped through 1967. Gibson revived the model in 1993. Joe’s photographs of a 1962 Tal Farlow appear below. When you know which guitar you have, the <a href="/post/gibson-tal-farlow-value-guide/">Tal Farlow value guide</a> gives its range.</p>',calloutTitle:'A Missing Scroll Doesn’t Rule Out An Original',callout:'Most original Tal Farlows have the scroll, but at least one documented 1964 example doesn’t. Use the inlays, finish, hardware and serial together.'},
 sections:[
 section('features','What Identifies A Gibson Tal Farlow','Body, Scroll, Inlays And Finish',[
 {type:'cards',variant:'models',items:[
 {title:'An ES-350 Body',html:'<p>Farlow played an ES-350 in the 1950s, and his model starts from that body: 17 inches wide, about 3 inches deep, with one rounded cutaway. The top is laminated maple with two parallel braces, over laminated maple back and sides.</p>'},
 {title:'The Binding Scroll',html:'<p>The scroll at the cutaway was Farlow’s idea. Gibson made it by curling the binding into the body. The top and back are triple bound, and the f-holes are single bound.</p>'},
 {title:'Crest Inlays And Double-Crown Peghead',html:'<p>The fingerboard inlays are upside-down versions of the J-200 crest, in pearl. The peghead carries a double-crown inlay. The board is bound rosewood with 20 frets on a 25½-inch scale.</p>'},
 {title:'Viceroy Brown And A Four-Point Guard',html:'<p>Viceroy Brown sunburst was the model’s own finish. The bound pickguard has four points, a shape made for this guitar.</p>'}]},
 p('<p>Start with the scroll and the inlays. Both are hard to fake well, and together they separate a Tal Farlow from an ES-350 or an ES-175 with similar hardware. Then check the finish color and the guard shape.</p><p>The neck is five pieces, maple with mahogany strips, and the nut measures about 1 11/16 inches. Gibson’s catalog puts the neck-to-body joint at the 14th fret.</p>')]),
 section('archive','Joe’s 1962 Tal Farlow','Scroll, Crowns And A Marbled Guard',[
 {type:'archive',items:[{label:'1962 Gibson Tal Farlow',title:'An Early Tal Farlow In Brown Sunburst',html:'<p>Joe’s photographs show the binding scroll at the cutaway, the double-crown peghead inlay and the four-point marbled pickguard between two humbuckers. The truss rod cover reads Custom. The guitar sits in a case with pink plush lining.</p><p>The ledger figures show only 2 Tal Farlows shipped in 1962 and 39 in 1963. Gibson stamped serials during production and shipped guitars later, so a guitar with a 1962 serial may have left the factory in 1963. Shipping year and serial year are separate questions.</p>',photos:[ph.farlowFront,ph.farlowHead,ph.farlowGuard]}]}
 ],'archive'),
 section('hardware','Pickups, Bridge, Tailpiece And Tuners','Check The Original Equipment',[
 p('<p>The Tal Farlow has two full-size humbuckers with two volume controls, two tone controls and a three-way switch. Early guitars can have PAFs, and Patent Number pickups were in use by 1964. Joe’s <a href="/post/gibson-paf-patent-number-pickup-guide/">PAF and Patent Number pickup guide</a> covers how to tell them apart.</p><p>The bridge is a Tune-o-matic on a rosewood base, and replacement bridges are common. The trapeze tailpiece has a rosewood insert with Tal Farlow inlaid in pearl. A plain insert or a different tailpiece means a change.</p><p>Published descriptions of the plating and tuners disagree. Some describe nickel hardware with Kluson tuners, others chrome plating or different tuner buttons. Gibson also built special orders with a Super 400 headstock, Grover tuners, chrome hardware or a Custom truss rod cover. An odd part needs a closer look before it’s called a replacement.</p>'),
 {type:'photos',photos:[ph.farlowGuard,ph.farlowHead]}
 ],'dark'),
 section('reissue','Original Or Reissue?','Separating 1960s Guitars From 1993 And Later',[
 {type:'table',caption:'Original Tal Farlow And Reissue Compared',columns:['Feature','1962 To 1967 Original','1993 And Later Reissue'],rows:[
 ['Finish','Viceroy Brown sunburst','Viceroy Brown and other colors, including natural, wine red and vintage sunburst'],
 ['Pickups','PAF on early guitars, then Patent Number','’57 Classic humbuckers'],
 ['Tuners','Kluson on most published examples','Grover Super Rotomatic'],
 ['Serial','Impressed 1960s number, often a reused range','Modern eight-digit format or a Custom Shop number'],
 ['Documented shipments','215 through 1967','Separate production']]},
 p('<p>The serial format is the quickest check. A 1960s Gibson serial is impressed into the back of the headstock, and many ranges repeat across years. A 1990s reissue uses Gibson’s standard eight-digit format, where the first and fifth digits give the year. Custom Shop examples from the 2000s use a variant that starts with 2, so check the label and any Custom Shop paperwork too. The <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> covers both.</p><p>A Tal Farlow in natural or wine red is almost certainly a reissue. A brown one needs the serial, pickups and tuners checked, since many reissues wear Viceroy Brown too.</p>')]),
 section('dating','Dating An Original Tal Farlow','Shipments, Pickups And Serials',[
 p('<p>Shipments started slowly, peaked at 77 in 1965 and fell to 17 in 1967, the last year with any in the ledger figures. So 196 of the 215 shipped from 1963 to 1966.</p><p>Inside that run, the pickups help most. PAFs point to the earliest guitars, and Patent Number pickups were standard by 1964. Gibson reused serial ranges through the 1960s, so the serial gives a set of possible years. The pickups, pot codes and tuner style narrow it down. The <a href="/gibson-pot-codes/">pot code guide</a> explains how to read the date on an original pot.</p>')
 ],'dark'),
 section('red-flags','Repairs, Refinishes And Swapped Parts','What To Question On A Tal Farlow',[
 {type:'cards',variant:'condition',items:[
 {title:'Refinished Tops',html:'<p>Compare the top with the back, sides and neck. A top that looks redder or more even than the rest deserves a closer look.</p>'},
 {title:'Replaced Bridges',html:'<p>Replacement bridges are common. Check the rosewood base and the thumbwheels against the rest of the hardware.</p>'},
 {title:'Truss Rod Covers',html:'<p>Covers are easy to swap. Use the inlays and body to identify the guitar.</p>'},
 {title:'Look-Alike Bodies',html:'<p>Other 17-inch Gibson archtops share the outline. A scroll can’t be added without new binding work. Check the binding at the cutaway for breaks, color changes or newer finish.</p>'}]},
 p('<p>Describe any repairs plainly, and keep removed parts with the guitar. The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> explains how repairs and replaced parts are weighed.</p>')
 ],'dark'),
 section('checklist','Build A Tal Farlow Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Cutaway And Scroll',html:'<p>Show the scroll and the binding around it in good light.</p>'},
 {title:'Headstock And Fingerboard',html:'<p>Include the peghead inlay, the truss rod cover and the crest inlays.</p>'},
 {title:'Serial And Label',html:'<p>Send the back of the headstock and the label through the f-hole.</p>'},
 {title:'Pickups, Bridge And Tailpiece',html:'<p>Show each one, and say which you know were replaced.</p>'}]},
 gCTA('Ask Joe To Identify Your Tal Farlow','<p>Send the photos above. Joe will check the scroll, inlays, serial and hardware and let you know what he finds.</p>')]),
 section('references','Tal Farlow Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Gibson Tal Farlow Catalog Pages','https://www.vintageguitarandbass.com/gibson/Tal_Farlow.php','Catalog specifications, prototypes and launch date.'),
 source('Premier Guitar: Tal Farlow And His Gibson Model','https://www.premierguitar.com/tal-farlow-reluctant-jazz-great-and-his-gibson-model','History, inlays, finish and hardware.'),
 source('Fretted Americana: 1964 Gibson Tal Farlow','https://www.gbase.com/gear/gibson-tal-farlow-1964-viceroy-brown','Construction details and special orders, quoting Duchossoir.'),
 source('Archtop.com: 1993 Gibson Tal Farlow','https://www.archtop.com/ac_93talfarlow.html','Reissue pickups, tuners and serial format.'),
 source('Gibson Shipping Totals, 1948 To 1979','/post/gibson-shipping-totals-1948-1979/','Tal Farlow ledger figures by year.')]}])],
 faqs:[
 {q:'How Can I Tell An Original Tal Farlow From A Reissue?',a:'Check the serial format first. Originals have an impressed 1960s serial and Kluson tuners on most examples. Reissues have a modern or Custom Shop serial, ’57 Classic pickups and Grover tuners.'},
 {q:'Do All Original Tal Farlows Have The Scroll?',a:'Most do, but at least one documented 1964 example doesn’t. Check the inlays, finish and hardware too.'},
 {q:'What Is Viceroy Brown?',a:'Viceroy Brown is the brown sunburst finish Gibson used on the original Tal Farlow.'},
 {q:'When Was The Tal Farlow Made?',a:'Gibson launched it in October 1962. The ledger figures run through 1967, though the price guide lists it through 1971. The reissue began in 1993.'}],
 closing:'<p>Confirm the scroll, inlays and finish, then check the serial, pickups and tuners to separate an original from a reissue. The <a href="/post/gibson-tal-farlow-value-guide/">Tal Farlow price guide</a> covers both.</p>'
}];
