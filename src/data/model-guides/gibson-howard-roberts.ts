import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

// Row order in gibson-values.json: 0 Epiphone Standard, 1 Epiphone Custom, 2 Gibson Custom, 3 Artist, 4 Artist Double, 5 Fusion.
const r=(i:number)=>range('howard-roberts',i);
const date='November 18, 2026';

export const howardRobertsGuides:ModelGuideData[]=[{
 ...gBase('howard-roberts','value'),date,title:'Gibson Howard Roberts Value Guide',seoTitle:'Gibson Howard Roberts Value Guide: Custom, Artist And Fusion',
 description:'Compare Kalamazoo Epiphone Howard Roberts prices with Gibson Custom, Artist and Fusion values, including deductions for pickup swaps, lost guards and neck repairs.',
 eyebrow:'Howard Roberts Prices · Epiphone And Gibson',dek:'Check the maker and construction before choosing a price row. The name spans Kalamazoo Epiphones, Gibson’s oval-hole Custom and Artist archtops, and the semi-hollow Fusion.',hero:ph.hrFront,
 glanceTitle:'Howard Roberts Estimated Values',glance:[['Epiphone Custom, 1965 To 1970',r(1)],['Gibson Custom, 1975 To 1981',r(2)],['Gibson Artist, 1976 To 1980',r(3)],['Fusion, 1979 To 2009',r(5)]],
 secondaryActions:[{label:'View Howard Roberts Prices',href:'#values'},{label:'Identify Your Howard Roberts',href:'/post/gibson-howard-roberts-authentication-guide/'}],
 intro:{html:`<p>Excellent condition, factory parts throughout and the original case are assumed in these estimates: ${r(2)} for the 1975 to 1981 Gibson Custom group, ${r(3)} for the gold-appointed Gibson Artist, and ${r(1)} for a Kalamazoo Epiphone Custom from 1965 to 1970. Joe’s examples below include a 1974 Custom and a 1977 guitar. If you’re unsure which version you own, consult the <a href="/post/gibson-howard-roberts-authentication-guide/">guide to identifying Howard Roberts models</a> before selecting a comparison.</p>`,calloutTitle:'Count The Knobs And Check The Plating',callout:'Look for rosewood with chrome fittings on a Gibson Custom, or ebony with gold fittings on an Artist. A carved spruce top together with an Epiphone label suggests the earlier Kalamazoo production.'},
 sections:[
 section('values','Howard Roberts Values By Model','Excellent Original Guitars With The Original Case',[
 gChart('howard-roberts'),p(`<p>Use the row for your guitar’s maker and version. An Artist Double Pickup is estimated at ${r(4)}. Kalamazoo Epiphone estimates are ${r(1)} for the Custom and ${r(0)} for the Standard. Those rows cover guitars built before Epiphone moved production overseas in 1970.</p><p>All figures are retail estimates for November 2026, assuming excellent condition, original parts and the original case; purchase offers are assessed separately. Gibson’s first Customs were built in 1974, including Joe’s, although the guide begins its Custom row at 1975. Use that row when comparing a 1974. These figures don’t cover later imported Epiphone Howard Roberts guitars.</p>`)]),
 section('epiphone','The Kalamazoo Epiphone Howard Roberts','Standard And Custom, 1964 To 1970',[
 {type:'cards',variant:'models',items:[
 {title:'Epiphone Howard Roberts Standard',html:`<p>It’s estimated at ${r(0)}. In the 2026 price guide, the Standard is a single-cutaway archtop with binding around both front and back, offered in sunburst or cherry. The guide says the catalog called it acoustic despite electric production. Premier Guitar also reports examples made without pickups.</p>`},
 {title:'Epiphone Howard Roberts Custom',html:`<p>For the Custom, it’s ${r(1)}. Its ebony board and vine headstock ornament distinguish the trim. The 2026 price guide specifies one pickup, walnut finish and a natural option confined to 1966. Black examples are reported in other references.</p>`}]},
 p('<p>Gibson built these carved-spruce-top Epiphones in Kalamazoo. Published totals suggest only a few hundred, with one count listing 52 Customs and 290 Standards. Joe buys Epiphones from that factory; the <a href="/sell-my-epiphone-guitar/">Epiphone selling page</a> explains the process.</p><p>Check both serial and label to establish the period before using these estimates. Overseas-built Howard Roberts models from the 1990s have laminated tops and require a different price comparison.</p>')
 ],'dark'),
 section('gibson','Gibson Custom, Artist And Artist Double','Plating, Fingerboard And Pickup Count',[
 {type:'cards',variant:'models',items:[
 {title:'Howard Roberts Custom',html:`<p>At ${r(2)}, this row spans 1975 to 1981. The price guide lists chrome fittings, a single humbucker and a rosewood board. Buyers could choose sunburst, wine red or cherry finishes.</p>`},
 {title:'Howard Roberts Artist',html:`<p>Gold fittings and an ebony board identify the Artist trim. Its 1976 to 1980 estimate is ${r(3)}, with wine red, natural and sunburst among the offered finishes.</p>`},
 {title:'Artist Double Pickup',html:`<p>A second pickup distinguishes this scarce version. The 1979 to 1980 estimate is ${r(4)}. Inspect a guitar claimed to be an Artist Double carefully before applying that figure.</p>`}]},
 p('<p>A 16-inch body, oval opening and single cutaway are common to these Gibson versions. Distinguish them by board wood, plating and number of pickups. Read the label and inspect the fingerboard too: fitting gold hardware to a Custom leaves it a Custom.</p>')]),
 section('fusion','The Fusion Is A Different Guitar','A Semi-Hollow With Two Humbuckers',[
 p(`<p>The Fusion row spans 1979 to 2009, with an estimate of ${r(5)}. This semi-hollow design, subsequently called Fusion II and Fusion III, combines a center block and twin humbuckers with f-holes. An oval soundhole belongs to the other Howard Roberts design.</p><p>Hardware from a Fusion can appear elsewhere. A Howard Roberts fingers-style tailpiece of the type associated with the Fusion is fitted to Joe’s 1970 <a href="/post/gibson-johnny-smith-value-guide/">Johnny Smith</a>. When hardware seems mismatched, establish the model it was made for.</p>`)]),
 section('archive','Joe’s Howard Roberts Guitars','A 1974 Custom And A 1977 Example',[
 {type:'archive',items:[
 {label:'1974 Gibson Howard Roberts Custom',title:'All Original Except The Pickup And Guard',html:'<p>The frets on Joe’s 1974 Custom are in perfect condition, it plays very well and its original hard case came with it. Where the missing pickguard once sat, the finish has heavier surface checking. An Ibanez Super 70 in Johnny Smith style replaces the factory pickup. Joe slightly prefers its open, airy response to the thicker, more focused sound of a stock 1970s Howard Roberts pickup.</p><p>Its good neck, clean frets and original case support the value, while the absent guard and pickup change keep the guitar below the chart’s excellent, original comparison.</p>',photos:[ph.hrCase,ph.hrBack]},
 {label:'1977 Gibson Howard Roberts',title:'Gold Hardware And A Professional Neck Reset',html:'<p>Gold fittings and a floral vine on the headstock appear on Joe’s 1977 guitar. After its neck separated from the body, a professional reset restored a perfect neck set, leaving some visible scars. Evidence suggests it previously carried a bridge pickup and a switch; that switch doesn’t operate now. The original case is very worn.</p><p>In valuing this example, account for the neck reset as repair work and for the holes associated with the added switch and pickup.</p>',photos:[ph.hr77Front,ph.hr77Head]}]}
 ],'archive'),
 section('changes','Pickups, Guards, Repairs And Refinishes','What Moves A Howard Roberts Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Replaced Pickups',html:'<p>A separate floating mount makes the Gibson pickup straightforward to replace. The Ibanez Super 70 in Joe’s 1974 is one example. Keep the factory pickup if you’ve still got it.</p>'},
 {title:'Missing Or Extra Guards',html:'<p>Added guards and replacement guards turn up often on these guitars. Photograph their attachments and any holes remaining from earlier mounts.</p>'},
 {title:'Neck Resets And Breaks',html:'<p>Include the repair shop’s receipts if you have them. Describe any reset to the neck and any repaired headstock break.</p>'},
 {title:'Refinishes',html:'<p>Look for agreement between the finish on the neck, sides, back and top. An unavailable factory color suggests that the guitar has been refinished.</p>'}]},
 p('<p>Use the <a href="/do-replaced-pickups-hurt-guitar-value/">pickup-swap reference</a> and <a href="/what-lowers-vintage-guitar-value/">guitar condition article</a> to understand the effect of this work. Before spending on repairs, read the advice about <a href="/should-i-restore-my-guitar-before-selling/">restoring a guitar ahead of selling it</a>.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Howard Roberts Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Front, Back And Soundhole',html:'<p>Photograph the complete instrument in clear light, including a view of its oval soundhole.</p>'},
 {title:'Label Through The Soundhole',html:'<p>Light the interior label so its maker and model information can be read in your photo.</p>'},
 {title:'Headstock Front And Back',html:'<p>Make the serial readable and show the headstock decoration together with the tuning machines.</p>'},
 {title:'Pickup, Controls And Tailpiece',html:'<p>List the replacements you know about. Also show any factory parts that accompanied your guitar.</p>'}]},
 gCTA('Get A Value For Your Howard Roberts','<p>Send the photos above and the guitar’s history. Joe can tell you which model you have and where it fits in the chart.</p>')
 ])],
 faqs:[
 {q:'What Is A 1970s Gibson Howard Roberts Custom Worth?',a:`For the 1975 to 1981 Custom row, allow ${r(2)} for an excellent example with factory parts and its case. A missing pickguard or changed pickup reduces the estimate.`},
 {q:'Is An Epiphone Howard Roberts Worth Less Than A Gibson?',a:`The ranges can overlap: ${r(1)} for the Kalamazoo Epiphone Custom and ${r(2)} for the Gibson Custom. The Epiphone therefore doesn’t necessarily carry a lower value.`},
 {q:'Why Does The Artist Have Its Own Row?',a:'Gibson’s 1976 to 1980 Artist pairs gold fittings with an ebony board, giving it a separate trim category. Confirm the label, board wood and plating before choosing that estimate.'}],
 closing:'<p>Settle the maker and version before assessing repairs, the guard and the pickup. For help distinguishing the versions, use the <a href="/post/gibson-howard-roberts-authentication-guide/">Howard Roberts identification reference</a>.</p>'
},{
 ...gBase('howard-roberts','authentication'),date,title:'Gibson Howard Roberts Authentication Guide',seoTitle:'Gibson Howard Roberts Authentication Guide: Models And Dates',
 description:'Use a Howard Roberts label, soundhole, top and fittings to establish Epiphone or Gibson origins, identify Custom or Artist trim, and read the serial’s date format.',
 eyebrow:'Howard Roberts Identification · Epiphone And Gibson',dek:'The label, top wood, board and plating distinguish Gibson’s Custom and Artist from the earlier Kalamazoo Epiphones. Those Epiphones began the model’s production history.',hero:ph.hrFront,
 glanceTitle:'Howard Roberts At A Glance',glance:[['Epiphone Era','1964 To 1970, Kalamazoo'],['Gibson Custom','1974 To 1981, Chrome, Rosewood'],['Gibson Artist','1976 To 1980, Gold, Ebony'],['Shared Look','Single Cutaway, Oval Soundhole']],
 secondaryActions:[{label:'Which Howard Roberts?',href:'#models'},{label:'See Howard Roberts Values',href:'/post/gibson-howard-roberts-value-guide/'}],
 intro:{html:'<p>The signature model for Los Angeles session and jazz guitarist Howard Roberts began as an Epiphone in 1964. Gibson’s Kalamazoo factory built it with a single cutaway and an oval opening in place of f-holes. Epiphone’s U.S. manufacturing ended in 1970; the design later returned under Gibson’s name. Custom production spanned 1974 to 1981, while the gold-appointed Artist ran from 1976 to 1980. Below are Joe’s 1974 Custom and his 1977 example. For estimates, see the <a href="/post/gibson-howard-roberts-value-guide/">Howard Roberts pricing page</a>.</p>',calloutTitle:'The Fusion Shares The Name Only',callout:'Compare a Fusion separately. It combines a center block with semi-hollow construction, two humbuckers and f-holes, so the oval-hole archtop comparison doesn’t apply to it.'},
 sections:[
 section('models','Which Howard Roberts Do You Have?','Maker, Years And Trim',[
 {type:'table',caption:'Howard Roberts Archtops Compared',columns:['Model','Years','Top','Fingerboard','Hardware'],rows:[
 ['Epiphone Howard Roberts Standard','1964 to 1970','Carved spruce','Rosewood, block inlays','Nickel'],
 ['Epiphone Howard Roberts Custom','1965 to 1970','Carved spruce','Ebony','Tune-o-matic bridge'],
 ['Gibson Howard Roberts Custom','1974 to 1981','Laminated maple','Rosewood, split-block inlays','Chrome'],
 ['Gibson Howard Roberts Artist','1976 to 1980','Laminated maple','Ebony','Gold'],
 ['Gibson Artist Double Pickup','1979 to 1980','Laminated maple','Ebony','Gold, two pickups']]},
 p('<p>The interior label identifies the maker and version, so begin there. Confirm construction next: Gibson used laminated maple with seven-ply binding, while Kalamazoo Epiphones have carved spruce tops. Among the Gibsons, rosewood and chrome identify a Custom; ebony and gold identify an Artist.</p><p>Published start dates aren’t unanimous. Some references give 1973 for the Gibson Custom and 1974 for the Artist. Joe’s guitar dates to 1974 and has a label explicitly naming it Howard Roberts Custom.</p>')]),
 section('epiphone','Kalamazoo Epiphone Howard Roberts Details','Standard And Custom',[
 {type:'cards',variant:'models',items:[
 {title:'Body And Top',html:'<p>A carved spruce top surrounds the oval opening. At about 16¼ inches across, the body resembles an L-4C, with a pointed Florentine cutaway.</p>'},
 {title:'Standard Neck',html:'<p>On the Standard, a vertical oval decorates the peghead. Block markers sit in a rosewood board over a mahogany neck.</p>'},
 {title:'Custom Neck',html:'<p>Look for the Custom’s vine peghead ornament and ebony board, together with its Tune-o-matic bridge.</p>'},
 {title:'Floating Mini-Humbucker',html:'<p>The mini-humbucker floats above the guitar, while tone and volume controls sit in the top. A Custom has one of each control.</p>'}]},
 p('<p>Three raised parallelograms decorate the nickel trapeze tailpiece. On a Standard it sits beyond a rosewood bridge. Kalamazoo Epiphones built from 1961 to 1970 have impressed numbers behind the headstock, with substantial duplication. Consult the <a href="/how-to-read-gibson-serial-numbers/">serial-number reference</a> and compare the remaining features when dating one.</p><p>Japan built the 1990s Howard Roberts reissues first, followed by Korea. Both use laminated tops, and Korean examples have a bigger soundhole. A label from the 1970s or later is insufficient evidence of Kalamazoo manufacture.</p>')
 ],'dark'),
 section('gibson','Gibson Howard Roberts Custom And Artist Details','Body, Neck, Pickup And Hardware',[
 {type:'cards',variant:'models',items:[
 {title:'Body',html:'<p>Seven-ply binding outlines the 16-inch laminated-maple body. It has one cutaway and an oval opening.</p>'},
 {title:'Neck',html:'<p>Split-block markers run along the fingerboard of a three-piece maple neck. Scale length is 25½ inches, with a nut about 1 11/16 inches wide. A vine ornament sits below the Gibson headstock logo.</p>'},
 {title:'A Pickup Made For The Model',html:'<p>Gibson developed the full-size floating humbucker for this guitar. Its controls comprise a master volume plus individual bass and treble tone adjustments.</p>'},
 {title:'Bridge, Tailpiece And Tuners',html:'<p>Look for pearl in the base of the adjustable ebony bridge and engraving on the trapeze tailpiece. The Artist adds an engraved ebony tailpiece insert. Grover Rotomatics belong to earlier production, followed by tuners made by Schaller.</p>'}]},
 p('<p>In 1975 Gibson added wine red. Custom choices included that color, cherry and sunburst; Artist choices were wine red, sunburst and natural. A mounting ring holds the Artist Double’s bridge pickup. These guitars are seldom encountered, so inspect a claimed Double closely.</p>'),
 {type:'photos',photos:[ph.hrLabel,ph.hrBack]}]),
 section('archive','Joe’s Howard Roberts Guitars','A 1974 Custom And A 1977 Example',[
 {type:'archive',items:[
 {label:'1974 Gibson Howard Roberts Custom',title:'Chrome Hardware, Rosewood And A Replaced Pickup',html:'<p>A Gibson label identifies Joe’s 1974 as a Howard Roberts Custom. Its split-block rosewood board, chrome fittings, decorated bridge base and three controls match that model. Apart from an absent pickguard and an Ibanez Super 70 replacing the pickup, it remains original. The guard’s former position has more pronounced finish checking.</p>',photos:[ph.hrFull,ph.hrBoard,ph.hrBridge,ph.hrLabel]},
 {label:'1977 Gibson Howard Roberts',title:'Gold Hardware And The Vine Inlay',html:'<p>The gold plating on Joe’s 1977 corresponds to Artist trim. It also has a black guard, a single neck humbucker and a floral vine beneath the pearl Gibson lettering. A professional has reset the neck. Signs suggest a bridge pickup and switch were added previously, and the remaining switch no longer operates anything.</p>',photos:[ph.hr77Front,ph.hr77Head]}]}
 ],'archive'),
 section('dating','Dating A Gibson Howard Roberts','Serial Formats From The 1970s',[
 {type:'timeline',items:[
 {date:'1974 To 1975',title:'Six-Digit Serials',html:'<p>Look below the six impressed digits for MADE IN U.S.A. Because the numeric ranges also occur in the 1960s, that accompanying stamp helps establish the period.</p>'},
 {date:'1975 To 1977',title:'Eight-Digit Decals',html:'<p>Read the decal prefix as follows: 99 means 1975, 00 means 1976 and 06 means 1977. A documented Custom from 1976 carries the 00 version.</p>'},
 {date:'1977 On',title:'Eight-Digit Impressed Serials',html:'<p>Combine digits one and five to read the year in this eight-digit impressed system. A documented 1978 Artist shows this format.</p>'}]},
 p('<p>After decoding the number with the <a href="/how-to-read-gibson-serial-numbers/">Gibson dating guide</a>, compare finish, label and tuners for agreement. Schaller-built machines indicate later production than Grover Rotomatics. Wine red places a guitar in 1975 or later.</p><p>Also record a small stamped 2 behind the headstock if you find one. It denotes a factory second, as seen on a documented 1976 Custom. Include that part of its history in the description.</p>')
 ],'dark'),
 section('red-flags','Copies, Swapped Parts And Refinishes','What To Question On A Howard Roberts',[
 {type:'cards',variant:'condition',items:[
 {title:'Japanese Copies',html:'<p>During the mid-1970s, Ibanez offered the closely copied 2453, often fitted with a Super 70. Copies also came from Hoyer, Goya, Greco and other makers. A headstock outline or label belonging to another maker establishes the difference.</p>'},
 {title:'Replaced Pickups And Guards',html:'<p>Pickup changes occur often, as the Super 70 in Joe’s 1974 shows. You’ll also encounter replacement pickguards and additional guards.</p>'},
 {title:'Refinishes',html:'<p>Check that the color belongs to Gibson’s offered finishes, then compare its appearance across the neck, back, sides and top.</p>'},
 {title:'Mixed Trim',html:'<p>Read the label when trim seems inconsistent. Chrome paired with ebony, or gold paired with rosewood, suggests a hardware change.</p>'}]},
 p('<p>For the effect of replacement parts and repairs on an assessment, consult the <a href="/what-lowers-vintage-guitar-value/">guide to condition and value</a>.</p>')
 ],'dark'),
 section('checklist','Build A Howard Roberts Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Label Through The Soundhole',html:'<p>A clear view of the interior label will usually establish both model and maker.</p>'},
 {title:'Headstock Front And Back',html:'<p>Photograph both headstock faces, capturing its serial, tuners, inlay and maker’s logo.</p>'},
 {title:'Fingerboard And Hardware',html:'<p>Include close-ups of the bridge, fingerboard markers and the tailpiece’s plated finish.</p>'},
 {title:'Pickup Mounting And Knobs',html:'<p>Record additional holes along with the controls and the way the pickup attaches.</p>'}]},
 gCTA('Ask Joe To Identify Your Howard Roberts','<p>Send the photos above. Joe can confirm the maker, the model, the likely year and which parts have been changed.</p>')]),
 section('references','Howard Roberts Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Premier Guitar: The Howard Roberts Signature Epiphone','https://www.premierguitar.com/pro-advice/vintage-vault/howard-roberts-signature-epiphone','Epiphone body, neck, pickup and tailpiece, and the Gibson relaunch.'),
 source('Howard Roberts Guitars Reference','https://utstat.utoronto.ca/mikevans/hroberts/guitars/guitars.html','Model history, production counts and reissues, with cited sources.'),
 source('Archtop.com: 1976 Gibson Howard Roberts Custom','https://www.archtop.com/ac_76hrc_1022.html','Gibson Custom construction, controls and a factory second stamp.'),
 source('Archtop.com: 1978 Gibson Howard Roberts Artist','https://www.archtop.com/ac_78hra.html','Artist hardware, fingerboard and serial.'),
 source('Gibson Serial Number Guide','/how-to-read-gibson-serial-numbers/','1970s serial formats.')]}])],
 faqs:[
 {q:'Is My Howard Roberts An Epiphone Or A Gibson?',a:'Check the wood as well as the maker named on the label inside the soundhole. Carved spruce belongs to the 1964 to 1970 Kalamazoo Epiphones; laminated maple appears on Gibsons from 1974 onward.'},
 {q:'How Do I Tell A Howard Roberts Custom From An Artist?',a:'Rosewood paired with chrome identifies Custom trim. For an Artist, look for an ebony fingerboard paired with gold fittings.'},
 {q:'Is The Howard Roberts Fusion The Same Guitar?',a:'The Fusion is a separate design: twin humbuckers and f-holes on a semi-hollow body built around a center block.'},
 {q:'Are Ibanez Howard Roberts Guitars Gibsons?',a:'Ibanez produced its own copies during the 1970s. Use their labels, serials and headstocks to establish the maker; they aren’t Gibson instruments.'}],
 closing:'<p>Establish the version from its label, top construction and appointments, then decode the serial format for dating. You can carry that identification to the <a href="/post/gibson-howard-roberts-value-guide/">Howard Roberts value reference</a>.</p>'
}];
