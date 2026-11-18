import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('trini-lopez',i);
const date='November 18, 2026';

export const triniLopezGuides:ModelGuideData[]=[{
 ...gBase('trini-lopez','value'),date,title:'Gibson Trini Lopez Value Guide',seoTitle:'Gibson Trini Lopez Value Guide: Standard And Deluxe Prices',
 description:'Gibson Trini Lopez Standard and Deluxe values, 1964 to 1970. Compare cherry, Sparkling Burgundy and Pelham Blue, and see how refinishes change price.',
 eyebrow:'Gibson Trini Lopez Prices · Standard And Deluxe',dek:'The thin Standard and the full-depth Deluxe are priced separately, and the Standard’s price depends on its year and its factory color.',hero:ph.triniFront,
 glanceTitle:'Trini Lopez Estimated Values',glance:[['1965 Standard, Pelham Blue',r(2)],['1964 Standard, Cherry',r(0)],['1966 To 1970 Standard, Cherry',r(5)],['1966 To 1970 Deluxe',r(10)]],
 secondaryActions:[{label:'View Trini Lopez Prices',href:'#values'},{label:'Identify Your Trini Lopez',href:'/post/gibson-trini-lopez-authentication-guide/'}],
 intro:{html:`<p>A 1966 to 1970 Gibson Trini Lopez Standard in cherry is estimated at ${r(5)}, and a 1965 Standard in factory Pelham Blue at ${r(2)}. Both assume excellent, all-original condition with the original case. The Deluxe, the full-depth version, has its own rows. Joe’s 1967 cherry Standard, shown below, is an all-original, one-owner guitar. Use the <a href="/post/gibson-trini-lopez-authentication-guide/">Trini Lopez authentication guide</a> to confirm the model and finish before you pick a row.</p>`,calloutTitle:'Blue And Burgundy Need Proof',callout:'Pelham Blue and Sparkling Burgundy Standards are priced above cherry. A refinished guitar in one of those colors is priced as a refinish, so look for the signs of original finish before using those rows.'},
 sections:[
 section('values','Trini Lopez Values By Model, Year And Finish','Excellent Original Guitars With The Original Case',[
 gChart('trini-lopez'),p(`<p>The Standard rows change with both year and color. In 1965, cherry is ${r(1)}, Sparkling Burgundy is ${r(3)} and Pelham Blue is ${r(2)}. From 1966 on, cherry is ${r(5)} and Sparkling Burgundy is ${r(6)}. The 1966 Pelham Blue row is ${r(4)}.</p><p>These are November 2026 retail estimates for excellent, all-original guitars with the original case. They aren’t purchase offers. The 2010 to 2011 Custom Shop reissue row is ${r(7)}, and it applies only to that later guitar.</p>`)]),
 section('standard','Trini Lopez Standard Prices By Year','How Many Were Made Shapes The Price',[
 p(`<p>The earliest Standards bring the most. A 1964 cherry Standard is ${r(0)}. The ledger figures on Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">Gibson shipping totals page</a> show only 3 Standards for 1964, then 321 in 1965 and 485 in 1966. The peak was 1967, with 783.</p><p>That 1967 peak is why most cherry Standards on the market are late-1960s guitars, and why the 1966 to 1970 cherry row covers so many of them. Across 1964 to 1970, the ledger totals come to 1,966 Standards.</p><p>A Standard’s value starts with the model and color, then moves with condition. Check finish wear on the back of the neck, the edges of the headstock and the lower bout. Normal wear on an original cherry finish belongs to the guitar. Touch-up and overspray change the comparison.</p>`),
 {type:'photos',photos:[ph.triniBack,ph.triniHead]}
 ],'dark'),
 section('colors','Cherry, Sparkling Burgundy And Pelham Blue','Factory Color Changes The Row',[
 {type:'cards',variant:'models',items:[
 {title:'Cherry',html:`<p>Cherry is the color most Standards wear. The 1964 row is ${r(0)}, 1965 is ${r(1)} and 1966 to 1970 is ${r(5)}. Cherry fades toward orange or brown with light exposure, and the original color is often brighter under the pickguard.</p>`},
 {title:'Sparkling Burgundy',html:`<p>The guide prices a 1965 Sparkling Burgundy Standard at ${r(3)} and a 1966 to 1970 example at ${r(6)}. The metallic finish should show the same aging as the rest of the guitar, including checking and wear at the edges.</p>`},
 {title:'Pelham Blue',html:`<p>Pelham Blue is the top Standard row: ${r(2)} for 1965 and ${r(4)} for 1966. Pelham Blue clearcoat yellows with age, so an original blue Standard usually looks greener than a fresh paint chip. A bright, even blue deserves a closer look.</p>`}]},
 p('<p>Show the guitar in daylight and in your normal room light. Include the area under the pickguard if the guard is already off, and the inside of the control cavity or the f-hole edges if you can see color there without taking anything apart. The <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish value guide</a> explains why a color change moves a guitar out of these rows.</p>')]),
 section('deluxe','Trini Lopez Deluxe Values','The Full-Depth Model',[
 p(`<p>The Deluxe is a different guitar from the Standard. It uses a full-depth, 17-inch body with two pointed cutaways, the same outline as the Barney Kessel, where the Standard is a thin, ES-335-style body with rounded horns. The price guide describes it with two humbuckers, triple binding and a sunburst finish. A 1964 Deluxe is ${r(8)}, 1965 is ${r(9)} and 1966 to 1970 is ${r(10)}.</p><p>The Deluxe sold in much smaller numbers. Joe’s shipping page shows 302 Deluxes from 1964 to 1970, against 1,966 Standards. Even so, the guide prices the Deluxe below the Standard in every matching year. Use the Deluxe rows only for a full-depth, pointed-cutaway guitar. The <a href="/post/gibson-trini-lopez-authentication-guide/">authentication guide</a> shows how to tell the two apart.</p>`)]),
 section('archive','Joe’s 1967 Trini Lopez Standard','An All-Original, One-Owner Cherry Standard',[
 {type:'archive',items:[{label:'1967 Gibson Trini Lopez Standard',title:'Cherry, Original And Played',html:'<p>Joe’s 1967 Standard came from its original owner. It’s all original, with checking and light wear throughout and a ding on the lower edge. The neck has a big taper that gets thick quickly, it’s dead straight and the action is very low. It came in its original hard case.</p><p>The serial on the back of the headstock falls in a number range that Joe’s Gibson serial guide lists for 1967, and the guitar has no “Made in USA” stamp. That fits a guitar made before 1970. Its wear is the kind the cherry row expects from a guitar that was played and kept in its case.</p>',photos:[ph.triniFront,ph.triniInlays,ph.triniSerial,ph.triniCase]}]}
 ],'archive'),
 section('changes','Conversions, Refinishes And Replaced Parts','What Moves A Trini Lopez Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Headstock And Neck Repairs',html:'<p>Photograph the back of the neck behind the nut and the edges of the headstock. A repaired break there takes the guitar out of the original rows.</p>'},
 {title:'Refinished Or Oversprayed Bodies',html:'<p>A new color, or fresh clearcoat over the original, needs to be described plainly. The rows above assume factory finish.</p>'},
 {title:'Replaced Tailpiece Or Tuners',html:'<p>Show the tailpiece, its insert and the tuner strip on the back of the headstock. Mention any extra holes, including old Bigsby holes.</p>'},
 {title:'Reissues And Look-Alikes',html:'<p>Gibson’s Custom Shop has made 1964 Trini Lopez Standard reissues in Pelham Blue, Sparkling Burgundy, Ebony and Cherry, and other makers build Trini-style guitars. The <a href="/post/gibson-trini-lopez-authentication-guide/">authentication guide</a> lists what separates a 1960s guitar from them.</p>'}]},
 p('<p>Leave the guitar as it is before an appraisal. Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> before paying for repairs, and keep any removed parts with the guitar.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Trini Lopez Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Whole Guitar In Daylight',html:'<p>Send the front, back and one side so the body depth and finish color are both clear.</p>'},
 {title:'Headstock Front And Back',html:'<p>Include the serial and the area behind the nut.</p>'},
 {title:'Hardware And Controls',html:'<p>Show the pickups, bridge, tailpiece, knobs and switch, and point out anything you know was changed.</p>'},
 {title:'Case And History',html:'<p>Include the case and tell Joe what you know about the guitar’s owners and repairs.</p>'}]},
 gCTA('Get A Value For Your Trini Lopez','<p>Send the photos and anything you know about the guitar. Joe can tell you which row it fits and how its condition changes the figure.</p>')
 ])],
 faqs:[
 {q:'What Is A 1967 Gibson Trini Lopez Standard Worth?',a:`In cherry, excellent and all original with its case, a 1966 to 1970 Standard is estimated at ${r(5)}. Sparkling Burgundy is ${r(6)}.`},
 {q:'Is A Pelham Blue Trini Lopez Worth More?',a:`Yes, when the finish is original. A 1965 Pelham Blue Standard is ${r(2)} and a 1966 is ${r(4)}. A refinished blue guitar is priced as a refinish.`},
 {q:'Is The Deluxe Worth More Than The Standard?',a:'No. The Deluxe is rarer, but the price guide puts it below the Standard in each matching year.'}],
 closing:'<p>Confirm the model, year and color, then check the finish. Go back to the <a href="/post/gibson-trini-lopez-authentication-guide/">Trini Lopez identification guide</a> if any of those are in doubt.</p>'
},{
 ...gBase('trini-lopez','authentication'),date,title:'Gibson Trini Lopez Authentication Guide',seoTitle:'Gibson Trini Lopez Authentication Guide: Standard And Deluxe',
 description:'Identify a Gibson Trini Lopez Standard or Deluxe by its diamond holes, six-on-a-side headstock, tailpiece and serial. Separate 1960s guitars from reissues.',
 eyebrow:'Gibson Trini Lopez Identification · Standard And Deluxe',dek:'Two different bodies share the Trini Lopez name. Body depth and cutaway shape tell them apart, and the nut, hardware and serial narrow the year.',hero:ph.triniFront,
 glanceTitle:'Trini Lopez At A Glance',glance:[['Standard Body','16-Inch Thinline, Rounded Horns'],['Deluxe Body','17-Inch Full Depth, Pointed Horns'],['Shared Features','Diamond Holes, Six-On-A-Side Headstock'],['Original Run','Late 1964 To About 1970']],
 secondaryActions:[{label:'Standard Or Deluxe?',href:'#models'},{label:'See Trini Lopez Values',href:'/post/gibson-trini-lopez-value-guide/'}],
 intro:{html:'<p>A 1960s Gibson Trini Lopez has bound diamond-shaped soundholes, split-diamond fingerboard inlays and a six-on-a-side headstock. The Standard is a thin, ES-335-style guitar with rounded horns. The Deluxe is a full-depth, 17-inch archtop with pointed horns. Gibson shipped the first few in late 1964, and the original run ended around 1970. Joe’s 1967 cherry Standard below is an all-original example. Use the <a href="/post/gibson-trini-lopez-value-guide/">Trini Lopez value guide</a> once the model and finish are settled.</p>',calloutTitle:'A Blue Trini Can Be A Reissue',callout:'Gibson’s Custom Shop has made 1964 Trini Lopez Standard reissues in Pelham Blue, Sparkling Burgundy, Ebony and Cherry. Check the serial format and label before treating a colorful Trini as a 1960s guitar.'},
 sections:[
 section('models','Standard Or Deluxe?','Two Bodies, One Name',[
 {type:'table',caption:'Trini Lopez Standard And Deluxe Compared',columns:['Feature','Standard','Deluxe'],rows:[
 ['Body','16 inches wide, about 1¾ inches deep, maple center block','17 inches wide, about 3 inches deep, fully hollow'],
 ['Cutaways','Two rounded horns, ES-335 outline','Two pointed Florentine horns, Barney Kessel outline'],
 ['Fingerboard','Rosewood','Ebony in the catalog'],
 ['Controls','Standard Gibson layout','Selector moved to the treble horn, plus a standby switch on the bass horn'],
 ['Catalog finish','Cherry','Cherry sunburst'],
 ['Shipments, 1964 to 1970','1,966','302']]},
 p('<p>Look at the guitar from the side. It’s easy to see the Standard’s thin rim next to the Deluxe’s full-depth body. Then check the horns: rounded on the Standard, pointed on the Deluxe.</p><p>The shipment figures come from the ledger totals on Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">Gibson shipping totals page</a>. Gibson shipped about six and a half Standards for every Deluxe, so you’ll see a Deluxe far less often.</p>')]),
 section('features','Features Every 1960s Trini Lopez Shares','Holes, Headstock, Inlays And Tailpiece',[
 {type:'cards',variant:'models',items:[
 {title:'Diamond Soundholes',html:'<p>The diamond-shaped holes are bound on 1960s guitars. Check the binding all the way around each one.</p>'},
 {title:'Six-On-A-Side Headstock',html:'<p>The headstock is black with a gold Gibson logo and all six tuners on the bass side. One of the earliest Deluxes had the headstock flipped the other way, and Gibson changed it quickly.</p>'},
 {title:'Split-Diamond Inlays',html:'<p>The fingerboard carries split-diamond inlays. On the Standard the board is rosewood, with 22 frets on a 24¾-inch scale.</p>'},
 {title:'Trini Lopez Tailpiece',html:'<p>The trapeze tailpiece has a raised diamond pattern and a rosewood insert with a Trini Lopez nameplate. If there’s a plain trapeze or a Bigsby, the tailpiece has been changed.</p>'}]},
 p('<p>The Standard’s bridge is a Tune-o-matic with nylon saddles. The Deluxe uses a Tune-o-matic on a rosewood base. Both have two humbuckers. Early Standards from 1965 already had Patent Number pickups.</p>'),
 {type:'photos',photos:[ph.triniHead,ph.triniInlays]}]),
 section('archive','Joe’s 1967 Trini Lopez Standard','An All-Original Cherry Standard',[
 {type:'archive',items:[{label:'1967 Gibson Trini Lopez Standard',title:'One Owner, Original Parts',html:'<p>Joe’s 1967 Standard came from its original owner and is all original. It has the cherry finish, bound diamond holes, split-diamond inlays and the six-on-a-side headstock with its single Kluson tuner strip. The neck has a big taper that gets thick quickly.</p><p>The serial is impressed into the back of the headstock with no MADE IN U.S.A. stamp below it. The number falls in a range Joe’s <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> lists for 1967. The finish shows checking and light wear, with a ding on the lower edge, and the guitar came in its original hard case.</p>',photos:[ph.triniFull,ph.triniSerial,ph.triniControls,ph.triniBack]}]}
 ],'archive'),
 section('dating','Dating A Trini Lopez','Nut Width, Hardware, Knobs And Serial',[
 {type:'timeline',items:[
 {date:'Late 1964',title:'The First Guitars Ship',html:'<p>Gibson shipped 3 Standards and 2 Deluxes. These have a wide nut of about 1 11/16 inches and nickel-plated parts.</p>'},
 {date:'1965',title:'Full Production',html:'<p>Trini Lopez models appear on the February 1965 price list, and Standard shipments jump to 321. During 1965 the nut narrowed and nickel gave way to chrome, so a 1965 guitar can have either.</p>'},
 {date:'1966 To 1967',title:'Narrower Nut And Chrome',html:'<p>The narrower nut of about 1 9/16 inches and chrome hardware are standard. Standard shipments peak at 783 in 1967.</p>'},
 {date:'Around 1967',title:'Knob Change',html:'<p>Reflector knobs gave way to witch-hat knobs around 1967. Joe’s 1967 still has reflector knobs, so the knob style is a guide to the period and the change wasn’t overnight.</p>'},
 {date:'1970',title:'MADE IN U.S.A. Stamp',html:'<p>From 1970, Gibson stamped MADE IN U.S.A. below the serial. Gibson stopped listing the models around this time.</p>'}]},
 p('<p>Gibson reused serial ranges through the 1960s, so a Trini serial can match more than one year. Find the possible years in the <a href="/how-to-read-gibson-serial-numbers/">serial guide</a>, then let the nut width, plating and knobs pick between them. The <a href="/gibson-pot-codes/">pot code guide</a> adds another check when the pots are original.</p>')
 ],'dark'),
 section('finish','Checking A Cherry, Burgundy Or Pelham Blue Finish','Factory Color Comes Before Price',[
 p('<p>Cherry is the catalog color for the Standard, and cherry sunburst for the Deluxe. Gibson also made Standards in Sparkling Burgundy and Pelham Blue, and a few in black. Sources disagree on whether those colors were listed options or special orders, and they bring more when the finish is original.</p><p>Original Pelham Blue clearcoat yellows with age and turns the blue toward green. Areas that stayed covered, like under the pickguard, stay bluer. A guitar that’s the same bright blue everywhere needs a closer look. Original cherry fades the same way, often toward orange or brown on the top, with brighter color in protected spots.</p><p>Check the finish where wear naturally happens: the back of the neck, the headstock edges and the lower bout. Wear through original finish shows layers of color and wood. Overspray tends to sit on top of old wear and dings. The <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish value guide</a> explains what a color change does to price.</p>')]),
 section('red-flags','Reissues, Look-Alikes And Changed Parts','What To Question On A Trini Lopez',[
 {type:'cards',variant:'condition',items:[
 {title:'Custom Shop Reissues',html:'<p>The 1964 Standard reissues come in the same colors collectors want from the 1960s. A modern serial format and Custom Shop paperwork identify them.</p>'},
 {title:'Unbound Diamond Holes',html:'<p>1960s guitars have bound diamond holes. Unbound holes don’t match a 1960s Gibson.</p>'},
 {title:'Truss Rod Covers',html:'<p>Replacement covers marked Custom turn up on Trini Lopez guitars. A cover is easy to change and doesn’t identify the guitar.</p>'},
 {title:'Tailpiece And Tuners',html:'<p>Look for extra holes at the tail end and on the tuner strip. A replaced tailpiece loses the Trini Lopez nameplate.</p>'}]},
 p('<p>Factory seconds also appear in Gibson’s records for these models. A second can be a perfectly good guitar. Note any second stamp in the description so the appraisal can account for it.</p>')
 ],'dark'),
 section('checklist','Build A Trini Lopez Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Front And Side Views',html:'<p>The front shows the horns and holes. The side shows the body depth.</p>'},
 {title:'Headstock Front And Back',html:'<p>Include the logo, the tuner strip and the serial with anything stamped near it.</p>'},
 {title:'Hardware',html:'<p>Show the bridge, tailpiece nameplate, pickups, knobs and switches.</p>'},
 {title:'Finish Close-Ups',html:'<p>Photograph worn areas and any spot where the color looks different.</p>'}]},
 gCTA('Ask Joe To Identify Your Trini Lopez','<p>Send the photos above. Joe can confirm the model, the likely year and whether the finish is original.</p>')]),
 section('references','Trini Lopez Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Vintage Guitar: The Gibson Trini Lopez','https://vintageguitar.com/3400/gibson-trini-lopez','George Gruhn on the model’s history, first shipments and the Deluxe.'),
 source('Gibson Trini Lopez Standard Catalog Pages','https://www.vintageguitarandbass.com/gibson/Trini_Lopez_Standard.php','Standard specifications.'),
 source('Gibson Trini Lopez Deluxe Catalog Pages','https://www.vintageguitarandbass.com/gibson/Trini_Lopez_Deluxe.php','Deluxe specifications and shipments.'),
 source('Premier Guitar: 1968 Gibson Trini Lopez Deluxe','https://www.premierguitar.com/gear/reviews/vintage-vault-1968-gibson-trini-lopez-deluxe','Deluxe controls and hardware.'),
 source('True Vintage Guitar: 1966 Pelham Blue Trini Lopez','https://truevintageguitar.com/blogs/tvg-blog/1966-gibson-trini-lopez-pelham-blue','Nut, hardware and knob changes, and Pelham Blue aging.'),
 source('Gibson Shipping Totals, 1948 To 1979','/post/gibson-shipping-totals-1948-1979/','Standard and Deluxe ledger figures by year.')]}])],
 faqs:[
 {q:'How Do I Tell A Trini Lopez Standard From A Deluxe?',a:'Look at the depth and the horns. The Standard is a thin body with rounded horns. The Deluxe is a full-depth, 17-inch body with pointed horns.'},
 {q:'Are All Trini Lopez Guitars Cherry?',a:'Cherry was the catalog color for the Standard, and cherry sunburst for the Deluxe. Gibson also made Standards in Sparkling Burgundy and Pelham Blue, and a few in black.'},
 {q:'When Was The Gibson Trini Lopez Made?',a:'The first guitars shipped in late 1964, and the original run ended around 1970. Custom Shop reissues came much later.'},
 {q:'What Does A Missing Trini Lopez Tailpiece Mean?',a:'The guitar has had its tailpiece changed. That affects value, so mention it in an appraisal request.'}],
 closing:'<p>Confirm Standard or Deluxe from the body, date the guitar from its nut, hardware and serial, and check the finish. Then use the <a href="/post/gibson-trini-lopez-value-guide/">Trini Lopez price guide</a> for its row.</p>'
}];
