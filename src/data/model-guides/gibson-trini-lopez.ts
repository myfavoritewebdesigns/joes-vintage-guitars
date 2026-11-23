import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

const r=(i:number)=>range('trini-lopez',i);
const date='November 18, 2026';

export const triniLopezGuides:ModelGuideData[]=[{
 ...gBase('trini-lopez','value'),date,title:'Gibson Trini Lopez Value Guide',seoTitle:'Gibson Trini Lopez Value Guide: Standard And Deluxe Prices',
 description:'Prices for 1964 to 1970 Trini Lopez Standard and Deluxe guitars, with cherry, Pelham Blue and Sparkling Burgundy comparisons and the effect of refinishing.',
 eyebrow:'Gibson Trini Lopez Prices · Standard And Deluxe',dek:'Use separate rows for the full-depth Deluxe and thin-bodied Standard. For a Standard, its factory finish and year determine the starting price comparison.',hero:ph.triniFront,
 glanceTitle:'Trini Lopez Estimated Values',glance:[['1965 Standard, Pelham Blue',r(2)],['1964 Standard, Cherry',r(0)],['1966 To 1970 Standard, Cherry',r(5)],['1966 To 1970 Deluxe',r(10)]],
 secondaryActions:[{label:'View Trini Lopez Prices',href:'#values'},{label:'Identify Your Trini Lopez',href:'/post/gibson-trini-lopez-authentication-guide/'}],
 intro:{html:`<p>In excellent condition with factory equipment throughout and the original case, a cherry Standard from 1966 to 1970 is estimated at ${r(5)}. A 1965 Standard retaining factory Pelham Blue is ${r(2)}. Full-depth Deluxes have separate entries in the chart. Joe’s cherry 1967 below came from one owner and it’s all original. Establish the finish and model using the <a href="/post/gibson-trini-lopez-authentication-guide/">Trini Lopez identification reference</a> before choosing your comparison row.</p>`,calloutTitle:'Blue And Burgundy Need Proof',callout:'Check that it’s the factory finish before applying the premium for Sparkling Burgundy or Pelham Blue. Both exceed cherry Standard prices, but a guitar repainted in either color needs a refinish valuation.'},
 sections:[
 section('values','Trini Lopez Values By Model, Year And Finish','Excellent Original Guitars With The Original Case',[
 gChart('trini-lopez'),p(`<p>Match a Standard’s date and finish together. The 1965 estimates are ${r(2)} for Pelham Blue, ${r(1)} for cherry and ${r(3)} for Sparkling Burgundy. For 1966 onward, compare ${r(6)} for Burgundy with ${r(5)} for cherry. Pelham Blue has a separate 1966 entry at ${r(4)}.</p><p>These figures estimate retail value in November 2026 for excellent instruments with original equipment and their original cases. A purchase offer is assessed separately. The ${r(7)} entry covers only the later Custom Shop reissue from 2010 to 2011.</p>`)]),
 section('standard','Trini Lopez Standard Prices By Year','How Many Were Made Shapes The Price',[
 p(`<p>A cherry 1964 Standard is estimated at ${r(0)}. That figure includes the premium for the earliest production. Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">shipping-ledger reference</a> records 3 Standards in 1964, then 321 for 1965 and 485 for 1966. The largest annual shipment was 783 in 1967.</p><p>That peak helps explain the prevalence of late-1960s cherry guitars for sale and the broad coverage of the 1966 to 1970 row. Total Standard shipments across 1964 to 1970 reached 1,966 in the ledger.</p><p>After establishing color and model, assess condition. Inspect the lower bout, headstock edges and neck back for finish wear. Normal wear remains part of an original cherry guitar; touch-ups and overspray require a different comparison.</p>`),
 {type:'photos',photos:[ph.triniBack,ph.triniHead]}
 ],'dark'),
 section('colors','Cherry, Sparkling Burgundy And Pelham Blue','Factory Color Changes The Row',[
 {type:'cards',variant:'models',items:[
 {title:'Cherry',html:`<p>Most Standards are cherry. The estimates run ${r(1)} for 1965, ${r(0)} for 1964 and ${r(5)} for 1966 to 1970. Exposure to light can move cherry toward brown or orange, leaving often-brighter original color beneath the guard.</p>`},
 {title:'Sparkling Burgundy',html:`<p>At ${r(3)} for 1965 and ${r(6)} for 1966 to 1970, these are the guide’s Burgundy Standard estimates. Inspect the metallic finish for edge wear and checking consistent with the age of the rest of the guitar.</p>`},
 {title:'Pelham Blue',html:`<p>The highest Standard figures belong to Pelham Blue: ${r(2)} in 1965 and ${r(4)} in 1966. As its clearcoat yellows, original blue usually takes on a greener appearance than a new paint sample. Uniform, bright blue calls for further inspection.</p>`}]},
 p('<p>Send views in ordinary room lighting as well as daylight. If the guard’s already removed, photograph the sheltered finish. Include visible color at f-hole edges or inside the control cavity where it’s visible without disassembly. The <a href="/how-much-does-a-refinish-hurt-guitar-value/">refinish pricing article</a> explains why changed color requires a comparison outside these rows.</p>')]),
 section('deluxe','Trini Lopez Deluxe Values','The Full-Depth Model',[
 p(`<p>Identify the Deluxe by its full-depth 17-inch body and pointed double cutaways, sharing the Kessel outline. The Standard instead follows the thin, rounded-horn ES-335 shape. The price guide specifies sunburst, triple binding and two humbuckers for the Deluxe. Estimates are ${r(9)} for 1965, ${r(8)} for 1964 and ${r(10)} for 1966 to 1970.</p><p>Despite lower production, the Deluxe’s guide price is lower in each corresponding year. Joe’s shipment totals for 1964 to 1970 list 302 Deluxes against 1,966 Standards. Reserve these rows for full-depth guitars with pointed horns. Compare the bodies in the <a href="/post/gibson-trini-lopez-authentication-guide/">Trini Lopez authentication guide</a>.</p>`)]),
 section('archive','Joe’s 1967 Trini Lopez Standard','An All-Original, One-Owner Cherry Standard',[
 {type:'archive',items:[{label:'1967 Gibson Trini Lopez Standard',title:'Cherry, Original And Played',html:'<p>The original owner supplied Joe’s all-original 1967 Standard. Light wear and checking extend across it, with a ding along the lower edge. Its strongly tapered neck thickens quickly, stays dead straight and allows very low action. The factory hard case accompanied it.</p><p>Behind the headstock, the number matches a range listed for 1967 in Joe’s Gibson serial reference. There’s no “Made in USA” marking, consistent with manufacture before 1970. The cherry finish has the sort of wear expected in its price row from an instrument played and stored in its case.</p>',photos:[ph.triniFront,ph.triniInlays,ph.triniSerial,ph.triniCase]}]}
 ],'archive'),
 section('changes','Conversions, Refinishes And Replaced Parts','What Moves A Trini Lopez Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Headstock And Neck Repairs',html:'<p>A repaired headstock break requires a comparison outside the original-condition rows. Photograph the peghead edges and the neck just behind the nut.</p>'},
 {title:'Refinished Or Oversprayed Bodies',html:'<p>Say if it’s been repainted or a fresh clear layer covers the old finish. The chart assumes the finish applied at the factory.</p>'},
 {title:'Replaced Tailpiece Or Tuners',html:'<p>Capture the tailpiece insert and the tuner strip behind the headstock. Record additional holes, including any left by a past Bigsby installation.</p>'},
 {title:'Reissues And Look-Alikes',html:'<p>Custom Shop recreations of the 1964 Standard have appeared in Cherry, Ebony, Sparkling Burgundy and Pelham Blue. You’ll also find Trini-style instruments from other companies. Use the <a href="/post/gibson-trini-lopez-authentication-guide/">identification guide</a> to distinguish those guitars from 1960s production.</p>'}]},
 p('<p>Have the guitar appraised in its current state and retain any parts already removed. Before spending on repairs, consult the advice on <a href="/should-i-restore-my-guitar-before-selling/">restoration before selling</a>.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Trini Lopez Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Whole Guitar In Daylight',html:'<p>Use daylight for full back and front views, adding one side view to establish depth alongside the finish color.</p>'},
 {title:'Headstock Front And Back',html:'<p>Make the serial readable and photograph the neck immediately behind the nut.</p>'},
 {title:'Hardware And Controls',html:'<p>Include the selector, knobs, pickups, tailpiece and bridge in clear views. Identify any changes you’re aware of.</p>'},
 {title:'Case And History',html:'<p>Show its case and pass along the ownership and repair history you know.</p>'}]},
 gCTA('Get A Value For Your Trini Lopez','<p>Send the photos and anything you know about the guitar. Joe can tell you which row it fits and how its condition changes the figure.</p>')
 ])],
 faqs:[
 {q:'What Is A 1967 Gibson Trini Lopez Standard Worth?',a:`An excellent, entirely original cherry Standard with its case falls in the 1966 to 1970 range of ${r(5)}. For Sparkling Burgundy, the corresponding estimate is ${r(6)}.`},
 {q:'Is A Pelham Blue Trini Lopez Worth More?',a:`Factory Pelham Blue brings a premium: ${r(4)} for a 1966 Standard and ${r(2)} for a 1965. Repainted blue examples need to be valued with their refinishing accounted for.`},
 {q:'Is The Deluxe Worth More Than The Standard?',a:'The scarcer Deluxe has a lower guide estimate than the Standard in every corresponding year.'}],
 closing:'<p>Establish year, model and color, then assess whether the finish remains original. Resolve uncertain details with the <a href="/post/gibson-trini-lopez-authentication-guide/">guide to identifying a Trini Lopez</a>.</p>'
},{
 ...gBase('trini-lopez','authentication'),date,title:'Gibson Trini Lopez Authentication Guide',seoTitle:'Gibson Trini Lopez Authentication Guide: Standard And Deluxe',
 description:'Check diamond soundholes, six-in-line headstocks, tailpieces and serials to identify Trini Lopez Standard and Deluxe models and distinguish 1960s examples from reissues.',
 eyebrow:'Gibson Trini Lopez Identification · Standard And Deluxe',dek:'Begin with body depth and horn shape to identify Standard or Deluxe. The Trini Lopez name covers both; nut width, plating and serial details help date each guitar.',hero:ph.triniFront,
 glanceTitle:'Trini Lopez At A Glance',glance:[['Standard Body','16-Inch Thinline, Rounded Horns'],['Deluxe Body','17-Inch Full Depth, Pointed Horns'],['Shared Features','Diamond Holes, Six-On-A-Side Headstock'],['Original Run','Late 1964 To About 1970']],
 secondaryActions:[{label:'Standard Or Deluxe?',href:'#models'},{label:'See Trini Lopez Values',href:'/post/gibson-trini-lopez-value-guide/'}],
 intro:{html:'<p>Bound diamond soundholes, split-diamond markers and six tuners along one side of the headstock identify the 1960s design. Choose Standard for a thin ES-335-style body with rounded horns, or Deluxe for a full-depth 17-inch body with pointed horns. The initial small shipments left in late 1964, with original production ending around 1970. Joe’s cherry Standard below is an original 1967 example retaining its factory equipment. After settling model and finish, consult the <a href="/post/gibson-trini-lopez-value-guide/">Trini Lopez price reference</a>.</p>',calloutTitle:'A Blue Trini Can Be A Reissue',callout:'Read the label and serial format before assigning a bright-colored guitar to the 1960s. Gibson Custom Shop 1964 Standard reissues include Cherry and Ebony as well as Sparkling Burgundy and Pelham Blue.'},
 sections:[
 section('models','Standard Or Deluxe?','Two Bodies, One Name',[
 {type:'table',caption:'Trini Lopez Standard And Deluxe Compared',columns:['Feature','Standard','Deluxe'],rows:[
 ['Body','16 inches wide, about 1¾ inches deep, maple center block','17 inches wide, about 3 inches deep, fully hollow'],
 ['Cutaways','Two rounded horns, ES-335 outline','Two pointed Florentine horns, Barney Kessel outline'],
 ['Fingerboard','Rosewood','Ebony in the catalog'],
 ['Controls','Standard Gibson layout','Selector moved to the treble horn, plus a standby switch on the bass horn'],
 ['Catalog finish','Cherry','Cherry sunburst'],
 ['Shipments, 1964 to 1970','1,966','302']]},
 p('<p>You’ll see the body-depth difference clearly from the side: the Standard has a thin rim and the Deluxe a full-depth body. Confirm with the cutaways, whose horns are rounded on a Standard and pointed on a Deluxe.</p><p>Joe’s <a href="/post/gibson-shipping-totals-1948-1979/">shipment-ledger page</a> supplies the totals. Approximately six and a half Standards shipped per Deluxe, making a Deluxe much less common to encounter.</p>')]),
 section('features','Features Every 1960s Trini Lopez Shares','Holes, Headstock, Inlays And Tailpiece',[
 {type:'cards',variant:'models',items:[
 {title:'Diamond Soundholes',html:'<p>Binding borders the diamond openings on 1960s instruments. Inspect the full perimeter of both holes.</p>'},
 {title:'Six-On-A-Side Headstock',html:'<p>There’s a gold Gibson logo against the black headstock, with six tuning machines along the bass edge. An especially early Deluxe had the headstock facing the opposite direction; Gibson soon revised it.</p>'},
 {title:'Split-Diamond Inlays',html:'<p>Split diamonds mark the fingerboard. On a Standard, you’ll find those markers in rosewood, with a 24¾-inch scale and 22 frets.</p>'},
 {title:'Trini Lopez Tailpiece',html:'<p>A rosewood insert carries the Trini Lopez nameplate within a trapeze decorated with raised diamonds. A Bigsby or an undecorated trapeze indicates a tailpiece replacement.</p>'}]},
 p('<p>Both versions use paired humbuckers, with Patent Number units already fitted to early 1965 Standards. A Standard’s Tune-o-matic has nylon saddles. The Deluxe’s Tune-o-matic rests on a rosewood support.</p>'),
 {type:'photos',photos:[ph.triniHead,ph.triniInlays]}]),
 section('archive','Joe’s 1967 Trini Lopez Standard','An All-Original Cherry Standard',[
 {type:'archive',items:[{label:'1967 Gibson Trini Lopez Standard',title:'One Owner, Original Parts',html:'<p>Joe acquired this 1967 directly from its original owner, and all equipment remains original. Cherry finish accompanies bound diamond openings, split-diamond board markers and a six-in-line headstock with one Kluson tuner strip. The neck’s pronounced taper becomes thick quickly.</p><p>The impressed rear-headstock number falls within a 1967 range in Joe’s <a href="/how-to-read-gibson-serial-numbers/">Gibson dating reference</a>. No MADE IN U.S.A. stamp appears underneath. Checking, mild wear and a lower-edge ding mark the finish, and the original hard case came with it.</p>',photos:[ph.triniFull,ph.triniSerial,ph.triniControls,ph.triniBack]}]}
 ],'archive'),
 section('dating','Dating A Trini Lopez','Nut Width, Hardware, Knobs And Serial',[
 {type:'timeline',items:[
 {date:'Late 1964',title:'The First Guitars Ship',html:'<p>The shipment counts were 2 Deluxes and 3 Standards. Nickel plating and a nut about 1 11/16 inches wide belong to these first guitars.</p>'},
 {date:'1965',title:'Full Production',html:'<p>Standard shipments reached 321, and both models appeared in the February 1965 price list. Nut narrowing and the shift from nickel to chrome occurred during that year, leaving either specification possible on a 1965.</p>'},
 {date:'1966 To 1967',title:'Narrower Nut And Chrome',html:'<p>Chrome fittings and a nut narrowed to about 1 9/16 inches became the regular specification. In 1967, Standard shipments reached their high of 783.</p>'},
 {date:'Around 1967',title:'Knob Change',html:'<p>The switch from reflector to witch-hat knobs took place around 1967. Reflectors remain on Joe’s 1967, illustrating a gradual change. Use knob design as a period clue.</p>'},
 {date:'1970',title:'MADE IN U.S.A. Stamp',html:'<p>Gibson began putting MADE IN U.S.A. beneath serial numbers in 1970. Its listings for these models ended around the same period.</p>'}]},
 p('<p>Find candidate years with the <a href="/how-to-read-gibson-serial-numbers/">Gibson number reference</a>. Reused 1960s ranges mean a single Trini serial may fit multiple dates. Compare its knobs, nut measurement and plating to choose among them. If the pots are factory equipment, the <a href="/gibson-pot-codes/">control-pot dating guide</a> provides another check.</p>')
 ],'dark'),
 section('finish','Checking A Cherry, Burgundy Or Pelham Blue Finish','Factory Color Comes Before Price',[
 p('<p>The catalogs specify cherry for the Standard and cherry sunburst for the Deluxe. Standards also exist in Pelham Blue, Sparkling Burgundy and, in small numbers, black. References differ over whether these were catalog options or special orders. Their premiums depend on original finish.</p><p>Yellowing clearcoat shifts old Pelham Blue toward green, while sheltered patches such as the area beneath a guard remain bluer. Consistent bright blue across the body warrants closer inspection. Cherry also fades unevenly, often becoming orange or brown on the top while protected areas retain brighter color.</p><p>Examine the lower bout, peghead edges and neck back where playing naturally causes wear. Original worn finish exposes layers of color and wood. Overspray tends to cover existing wear and dings. The <a href="/how-much-does-a-refinish-hurt-guitar-value/">guide to refinishing and price</a> explains the effect of changing color.</p>')]),
 section('red-flags','Reissues, Look-Alikes And Changed Parts','What To Question On A Trini Lopez',[
 {type:'cards',variant:'condition',items:[
 {title:'Custom Shop Reissues',html:'<p>The 1964 Standard recreations repeat the collectible colors of the originals. You’ll identify later manufacture through a modern numbering format and Custom Shop documents.</p>'},
 {title:'Unbound Diamond Holes',html:'<p>Diamond openings without binding are inconsistent with a 1960s Gibson, whose openings have bound edges.</p>'},
 {title:'Truss Rod Covers',html:'<p>A Custom-marked replacement cover sometimes appears on a Trini Lopez. Since covers swap easily, the wording can’t establish the model.</p>'},
 {title:'Tailpiece And Tuners',html:'<p>Inspect the tuner strip and the body’s tail end for additional holes. Changing the tailpiece removes the Trini Lopez nameplate.</p>'}]},
 p('<p>Gibson’s records include factory seconds among these models. They can be perfectly good instruments. Record any second stamp so it’s considered in the appraisal.</p>')
 ],'dark'),
 section('checklist','Build A Trini Lopez Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Front And Side Views',html:'<p>Use a side photograph to establish depth and a front photograph to show cutaways and soundholes.</p>'},
 {title:'Headstock Front And Back',html:'<p>Make the maker’s logo, tuner strip and number clear, including any stamps beside the serial.</p>'},
 {title:'Hardware',html:'<p>Capture the tailpiece nameplate, bridge and pickups, along with the knobs and switches.</p>'},
 {title:'Finish Close-Ups',html:'<p>Include close views where it’s worn or the color differs from surrounding areas.</p>'}]},
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
 {q:'How Do I Tell A Trini Lopez Standard From A Deluxe?',a:'A full-depth body measuring 17 inches across with pointed horns identifies the Deluxe. The Standard has a thin body and rounded horns.'},
 {q:'Are All Trini Lopez Guitars Cherry?',a:'The catalog lists cherry sunburst for the Deluxe and cherry for the Standard. Standard production also included Pelham Blue, Sparkling Burgundy and a small number of black guitars.'},
 {q:'When Was The Gibson Trini Lopez Made?',a:'Original shipments began late in 1964 and production continued until about 1970. The Custom Shop recreations arrived much later.'},
 {q:'What Does A Missing Trini Lopez Tailpiece Mean?',a:'A missing named tailpiece indicates replacement. Disclose the change when seeking an appraisal because it affects the value.'}],
 closing:'<p>Use the body to establish Standard or Deluxe, and the serial, hardware and nut to date it. After checking the finish, select the matching row in the <a href="/post/gibson-trini-lopez-value-guide/">Trini Lopez value chart</a>.</p>'
}];
