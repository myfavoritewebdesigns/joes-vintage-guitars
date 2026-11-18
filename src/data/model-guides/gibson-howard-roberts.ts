import type {ModelGuideData} from '../../components/model-guide/types';
import {jazzPhotos as ph} from './gibson-jazz-photos';
import {gBase,gChart,range,p,section,source,gCTA} from './gibson-helpers';

// Row order in gibson-values.json: 0 Epiphone Standard, 1 Epiphone Custom, 2 Gibson Custom, 3 Artist, 4 Artist Double, 5 Fusion.
const r=(i:number)=>range('howard-roberts',i);
const date='November 18, 2026';

export const howardRobertsGuides:ModelGuideData[]=[{
 ...gBase('howard-roberts','value'),date,title:'Gibson Howard Roberts Value Guide',seoTitle:'Gibson Howard Roberts Value Guide: Custom, Artist And Fusion',
 description:'Howard Roberts values for the Kalamazoo Epiphone, Gibson Custom, Artist and Fusion. See how replaced pickups, missing guards and neck repairs change price.',
 eyebrow:'Howard Roberts Prices · Epiphone And Gibson',dek:'The Howard Roberts name covers Kalamazoo-built Epiphones, two Gibson oval-hole archtops and a semi-hollow Fusion. Each has its own row.',hero:ph.hrFront,
 glanceTitle:'Howard Roberts Estimated Values',glance:[['Epiphone Custom, 1965 To 1970',r(1)],['Gibson Custom, 1975 To 1981',r(2)],['Gibson Artist, 1976 To 1980',r(3)],['Fusion, 1979 To 2009',r(5)]],
 secondaryActions:[{label:'View Howard Roberts Prices',href:'#values'},{label:'Identify Your Howard Roberts',href:'/post/gibson-howard-roberts-authentication-guide/'}],
 intro:{html:`<p>A Gibson Howard Roberts Custom from the 1975 to 1981 price group is estimated at ${r(2)}, and the gold-trimmed Howard Roberts Artist at ${r(3)}. The Kalamazoo-built Epiphone Howard Roberts Custom from 1965 to 1970 is ${r(1)}. All three assume excellent, all-original condition with the original case. Joe’s 1974 Howard Roberts Custom and a 1977 example appear below. Use the <a href="/post/gibson-howard-roberts-authentication-guide/">Howard Roberts authentication guide</a> to sort out which version you have.</p>`,calloutTitle:'Count The Knobs And Check The Plating',callout:'Chrome hardware and a rosewood fingerboard point to a Gibson Custom. Gold hardware and ebony point to an Artist. An Epiphone label and a carved spruce top point to the earlier Kalamazoo guitars.'},
 sections:[
 section('values','Howard Roberts Values By Model','Excellent Original Guitars With The Original Case',[
 gChart('howard-roberts'),p(`<p>Match the maker and model first. The Gibson Artist Double Pickup is ${r(4)}. The two Epiphone rows cover the Kalamazoo guitars made before Epiphone production moved overseas in 1970: ${r(0)} for the Standard and ${r(1)} for the Custom.</p><p>These are November 2026 retail estimates for excellent, all-original guitars with the original case. They aren’t purchase offers. The price guide’s Gibson Custom row starts in 1975, and Gibson’s first Customs date to 1974, like Joe’s. A 1974 guitar is compared with the same row. Later imported Epiphone Howard Roberts models aren’t covered by these figures.</p>`)]),
 section('epiphone','The Kalamazoo Epiphone Howard Roberts','Standard And Custom, 1964 To 1970',[
 {type:'cards',variant:'models',items:[
 {title:'Epiphone Howard Roberts Standard',html:`<p>Estimated at ${r(0)}. The price guide describes a single-cut archtop, bound front and back, in cherry or sunburst, and notes that the catalog listed it as an acoustic though it was built as an electric. Premier Guitar mentions pickup-free versions too.</p>`},
 {title:'Epiphone Howard Roberts Custom',html:`<p>Estimated at ${r(1)}. The price guide gives the Custom one pickup and a walnut finish, with natural offered in 1966 only. Other references also report black Customs. It adds an ebony fingerboard and a vine peghead inlay.</p>`}]},
 p('<p>These guitars came out of Gibson’s Kalamazoo plant, with carved spruce tops. Published production figures put them at a few hundred guitars in all. One count gives 290 Standards and 52 Customs. Joe buys Kalamazoo Epiphones, and the <a href="/sell-my-epiphone-guitar/">Sell My Epiphone page</a> covers how that works.</p><p>Read the label and serial before pricing one. The 1990s Epiphone Howard Roberts guitars were built overseas with laminated tops, and they don’t belong in these rows.</p>')
 ],'dark'),
 section('gibson','Gibson Custom, Artist And Artist Double','Plating, Fingerboard And Pickup Count',[
 {type:'cards',variant:'models',items:[
 {title:'Howard Roberts Custom',html:`<p>The 1975 to 1981 group is ${r(2)}. The price guide describes one humbucker, chrome hardware and a rosewood fingerboard. Finishes included cherry, sunburst and wine red.</p>`},
 {title:'Howard Roberts Artist',html:`<p>The 1976 to 1980 group is ${r(3)}. The Artist has gold hardware and an ebony fingerboard, in natural, sunburst or wine red.</p>`},
 {title:'Artist Double Pickup',html:`<p>The 1979 to 1980 group is ${r(4)}. It adds a second pickup. These are scarce, so check any claimed example carefully.</p>`}]},
 p('<p>All three Gibson models share the 16-inch body with an oval soundhole and a single cutaway. The plating, the fingerboard wood and the pickup count separate them. Gold parts added to a Custom don’t make it an Artist, so check the fingerboard and the label as well.</p>')]),
 section('fusion','The Fusion Is A Different Guitar','A Semi-Hollow With Two Humbuckers',[
 p(`<p>The Howard Roberts Fusion, later the Fusion II and Fusion III, is a semi-hollow guitar with a center block, two humbuckers and f-holes. It has no oval soundhole. The price guide’s row covers 1979 to 2009 at ${r(5)}.</p><p>Fusion parts also turn up on other guitars. Joe’s 1970 <a href="/post/gibson-johnny-smith-value-guide/">Johnny Smith</a> wears a Howard Roberts fingers-style tailpiece, the kind associated with the Fusion. If a tailpiece looks out of place, check what model it came from.</p>`)]),
 section('archive','Joe’s Howard Roberts Guitars','A 1974 Custom And A 1977 Example',[
 {type:'archive',items:[
 {label:'1974 Gibson Howard Roberts Custom',title:'All Original Except The Pickup And Guard',html:'<p>Joe’s 1974 Custom plays very well, the frets are in perfect shape and it came with its original hard case. The pickguard is missing, and there’s heavier surface checking where it used to be. The original pickup has been replaced with an Ibanez Super 70 Johnny Smith-style pickup. Joe likes it a little better than the 1970s Howard Roberts pickup: the stock pickup is thick and focused, and the Super 70 is more open and airy.</p><p>The missing guard and the replaced pickup put it below the excellent, original row. Clean frets, a good neck and the original case still count in its favor.</p>',photos:[ph.hrCase,ph.hrBack]},
 {label:'1977 Gibson Howard Roberts',title:'Gold Hardware And A Professional Neck Reset',html:'<p>Joe’s 1977 example has gold hardware and the floral vine headstock inlay. Its neck had come away from the body and was professionally reset with a perfect neck set, though some cosmetic scars remain. It looks like it had a bridge pickup and switch at one point, and the switch no longer does anything. It came with a very beat-up original case.</p><p>The professional neck reset counts as a repair in an appraisal, along with the extra pickup and switch holes.</p>',photos:[ph.hr77Front,ph.hr77Head]}]}
 ],'archive'),
 section('changes','Pickups, Guards, Repairs And Refinishes','What Moves A Howard Roberts Out Of The Chart',[
 {type:'cards',variant:'condition',items:[
 {title:'Replaced Pickups',html:'<p>The Gibson pickup floats on its own mounting, so it’s easy to swap. Joe’s 1974 has an Ibanez Super 70. Keep the original if you have it.</p>'},
 {title:'Missing Or Extra Guards',html:'<p>Replacement and extra guards are common. Show the guard mounting and any holes left behind.</p>'},
 {title:'Neck Resets And Breaks',html:'<p>Describe neck resets and headstock repairs, with any receipts from the shop that did the work.</p>'},
 {title:'Refinishes',html:'<p>Compare the top with the back, sides and neck. A color the model wasn’t offered in points to a refinish.</p>'}]},
 p('<p>The <a href="/do-replaced-pickups-hurt-guitar-value/">replaced pickup guide</a> and the <a href="/what-lowers-vintage-guitar-value/">condition guide</a> explain how these changes are weighed. Read <a href="/should-i-restore-my-guitar-before-selling/">whether to restore before selling</a> before paying for work.</p>')
 ],'dark'),
 section('appraisal','What To Send For A Howard Roberts Appraisal','Photos And Facts Joe Uses',[
 {type:'checklist',items:[
 {title:'Front, Back And Soundhole',html:'<p>Show the whole guitar and the oval soundhole in good light.</p>'},
 {title:'Label Through The Soundhole',html:'<p>The label names the maker and model. Photograph it with a light.</p>'},
 {title:'Headstock Front And Back',html:'<p>Include the peghead inlay, the tuners and the serial.</p>'},
 {title:'Pickup, Controls And Tailpiece',html:'<p>Say which parts you know were changed, and include any original parts that came with the guitar.</p>'}]},
 gCTA('Get A Value For Your Howard Roberts','<p>Send the photos above and the guitar’s history. Joe can tell you which model you have and where it fits in the chart.</p>')
 ])],
 faqs:[
 {q:'What Is A 1970s Gibson Howard Roberts Custom Worth?',a:`In excellent, original condition with its case, the 1975 to 1981 Custom group is estimated at ${r(2)}. Replaced pickups and missing guards lower that.`},
 {q:'Is An Epiphone Howard Roberts Worth Less Than A Gibson?',a:`Not necessarily. The Kalamazoo Epiphone Custom is ${r(1)}, which overlaps the Gibson Custom’s ${r(2)}.`},
 {q:'Why Does The Artist Have Its Own Row?',a:'It’s the gold-trimmed Gibson version, with an ebony fingerboard, made from 1976 to 1980. Check the plating, the fingerboard and the label before using its row.'}],
 closing:'<p>Identify the maker and model, then check the pickup, guard and repairs. The <a href="/post/gibson-howard-roberts-authentication-guide/">Howard Roberts identification guide</a> walks through each version.</p>'
},{
 ...gBase('howard-roberts','authentication'),date,title:'Gibson Howard Roberts Authentication Guide',seoTitle:'Gibson Howard Roberts Authentication Guide: Models And Dates',
 description:'Identify an Epiphone or Gibson Howard Roberts by soundhole, top, hardware and label. Separate the Custom from the Artist and date one by its serial format.',
 eyebrow:'Howard Roberts Identification · Epiphone And Gibson',dek:'Kalamazoo Epiphones came first, then Gibson’s own Custom and Artist. The top, plating, fingerboard and label tell them apart.',hero:ph.hrFront,
 glanceTitle:'Howard Roberts At A Glance',glance:[['Epiphone Era','1964 To 1970, Kalamazoo'],['Gibson Custom','1974 To 1981, Chrome, Rosewood'],['Gibson Artist','1976 To 1980, Gold, Ebony'],['Shared Look','Single Cutaway, Oval Soundhole']],
 secondaryActions:[{label:'Which Howard Roberts?',href:'#models'},{label:'See Howard Roberts Values',href:'/post/gibson-howard-roberts-value-guide/'}],
 intro:{html:'<p>Howard Roberts was a Los Angeles session guitarist and jazz player. His signature archtop started at Epiphone, built in Gibson’s Kalamazoo plant from 1964, with a single cutaway and an oval soundhole where you’d expect f-holes. When Epiphone’s U.S. production ended in 1970, the model came back as a Gibson. Gibson’s Custom ran from 1974 to 1981, and the gold-trimmed Artist from 1976 to 1980. Joe’s 1974 Custom and 1977 example appear below. The <a href="/post/gibson-howard-roberts-value-guide/">Howard Roberts value guide</a> covers prices.</p>',calloutTitle:'The Fusion Shares The Name Only',callout:'The Howard Roberts Fusion is a semi-hollow, center-block guitar with f-holes and two humbuckers. It doesn’t have the oval soundhole, so it needs its own comparison.'},
 sections:[
 section('models','Which Howard Roberts Do You Have?','Maker, Years And Trim',[
 {type:'table',caption:'Howard Roberts Archtops Compared',columns:['Model','Years','Top','Fingerboard','Hardware'],rows:[
 ['Epiphone Howard Roberts Standard','1964 to 1970','Carved spruce','Rosewood, block inlays','Nickel'],
 ['Epiphone Howard Roberts Custom','1965 to 1970','Carved spruce','Ebony','Tune-o-matic bridge'],
 ['Gibson Howard Roberts Custom','1974 to 1981','Laminated maple','Rosewood, split-block inlays','Chrome'],
 ['Gibson Howard Roberts Artist','1976 to 1980','Laminated maple','Ebony','Gold'],
 ['Gibson Artist Double Pickup','1979 to 1980','Laminated maple','Ebony','Gold, two pickups']]},
 p('<p>Read the label through the soundhole first. It names Epiphone or Gibson and the model. Then check the top: the Kalamazoo Epiphones have carved spruce, and the Gibsons have laminated maple with seven-ply binding. On a Gibson, chrome and rosewood mean a Custom, and gold and ebony mean an Artist.</p><p>Sources disagree on a few dates. Some put the first Gibson Customs in 1973 and the first Artists in 1974. Joe’s Custom has a label naming the Howard Roberts Custom and dates to 1974.</p>')]),
 section('epiphone','Kalamazoo Epiphone Howard Roberts Details','Standard And Custom',[
 {type:'cards',variant:'models',items:[
 {title:'Body And Top',html:'<p>About 16¼ inches wide, with a pointed Florentine cutaway, an oval soundhole and a carved spruce top. The body is close to Gibson’s L-4C.</p>'},
 {title:'Standard Neck',html:'<p>A mahogany neck with a rosewood fingerboard, block inlays and a vertical oval inlay on the peghead.</p>'},
 {title:'Custom Neck',html:'<p>An ebony fingerboard, a vine inlay on the peghead and a Tune-o-matic bridge.</p>'},
 {title:'Floating Mini-Humbucker',html:'<p>A floating mini-humbucker, with the volume and tone controls mounted in the top. The Custom has one volume and one tone.</p>'}]},
 p('<p>The tailpiece on the Epiphones is a nickel trapeze with three raised parallelograms, over a rosewood bridge on the Standard. Kalamazoo Epiphone serials from 1961 to 1970 are pressed into the back of the headstock, and many numbers were duplicated. The <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> covers how to read them alongside the guitar’s other features.</p><p>Epiphone’s 1990s Howard Roberts reissues were built in Japan and later Korea with laminated tops, and the Korean guitars have a larger soundhole. An Epiphone label from the 1970s or later doesn’t make a guitar a Kalamazoo instrument.</p>')
 ],'dark'),
 section('gibson','Gibson Howard Roberts Custom And Artist Details','Body, Neck, Pickup And Hardware',[
 {type:'cards',variant:'models',items:[
 {title:'Body',html:'<p>A 16-inch, single-cut body of laminated maple with an oval soundhole and seven-ply binding.</p>'},
 {title:'Neck',html:'<p>A 25½-inch scale, a nut of about 1 11/16 inches and a three-piece maple neck. The fingerboard has split-block inlays, and the headstock has a vine inlay under the Gibson logo.</p>'},
 {title:'A Pickup Made For The Model',html:'<p>One full-size floating humbucker that Gibson made for this model, with a master volume and separate treble and bass tone controls.</p>'},
 {title:'Bridge, Tailpiece And Tuners',html:'<p>An adjustable ebony bridge with a pearl-inlaid base and an engraved trapeze tailpiece. The Artist’s tailpiece has an engraved ebony insert. Early guitars have Grover Rotomatic tuners, and later ones Schaller-made tuners.</p>'}]},
 p('<p>Wine red joined the finish list in 1975. Custom finishes were cherry, sunburst and wine red, and Artist finishes were natural, sunburst and wine red. On the Artist Double, the bridge pickup sits in a mounting ring. Artist Doubles are rarely seen, so any claimed example deserves a careful look.</p>'),
 {type:'photos',photos:[ph.hrLabel,ph.hrBack]}]),
 section('archive','Joe’s Howard Roberts Guitars','A 1974 Custom And A 1977 Example',[
 {type:'archive',items:[
 {label:'1974 Gibson Howard Roberts Custom',title:'Chrome Hardware, Rosewood And A Replaced Pickup',html:'<p>Joe’s 1974 Custom has the Gibson label naming the Howard Roberts Custom, chrome hardware, a rosewood fingerboard with split-block inlays, an inlaid bridge base and the three-knob control layout. It’s all original except the pickguard, which is missing, and the pickup, which is an Ibanez Super 70. Heavier checking marks where the guard sat.</p>',photos:[ph.hrFull,ph.hrBoard,ph.hrBridge,ph.hrLabel]},
 {label:'1977 Gibson Howard Roberts',title:'Gold Hardware And The Vine Inlay',html:'<p>Joe’s 1977 example has gold hardware, a black pickguard, one neck humbucker and the floral vine inlay under a pearl Gibson logo. The gold hardware matches the Artist. Its neck was professionally reset, and it shows signs that a bridge pickup and switch were installed at some point. The switch no longer does anything.</p>',photos:[ph.hr77Front,ph.hr77Head]}]}
 ],'archive'),
 section('dating','Dating A Gibson Howard Roberts','Serial Formats From The 1970s',[
 {type:'timeline',items:[
 {date:'1974 To 1975',title:'Six-Digit Serials',html:'<p>Impressed six-digit serials with MADE IN U.S.A. below them. These numbers overlap 1960s ranges, so the stamp matters.</p>'},
 {date:'1975 To 1977',title:'Eight-Digit Decals',html:'<p>Decals beginning 99, 00 and 06 identify 1975, 1976 and 1977. A 1976 Custom with a 00-prefix decal is a documented example.</p>'},
 {date:'1977 On',title:'Eight-Digit Impressed Serials',html:'<p>The first and fifth digits give the year. A 1978 Artist with an impressed eight-digit serial is a documented example.</p>'}]},
 p('<p>Use the <a href="/how-to-read-gibson-serial-numbers/">Gibson serial guide</a> to read the number, then check that the label, tuners and finish fit the same period. Grover Rotomatics point earlier and Schaller-made tuners later. Wine red points to 1975 or after.</p><p>A small 2 stamped on the back of the headstock marks a factory second. One 1976 Custom carries one. The stamp is part of the guitar’s history and should be mentioned when it’s described.</p>')
 ],'dark'),
 section('red-flags','Copies, Swapped Parts And Refinishes','What To Question On A Howard Roberts',[
 {type:'cards',variant:'condition',items:[
 {title:'Japanese Copies',html:'<p>Ibanez made a close copy, the 2453, in the mid-1970s, often with a Super 70 pickup. Greco, Goya, Hoyer and others made copies too. A non-Gibson headstock shape or label settles it.</p>'},
 {title:'Replaced Pickups And Guards',html:'<p>Extra and replacement guards are common. So are replaced pickups, like the Ibanez Super 70 in Joe’s 1974 Custom.</p>'},
 {title:'Refinishes',html:'<p>Compare the top with the back, sides and neck, and check the color against the finishes Gibson offered.</p>'},
 {title:'Mixed Trim',html:'<p>Gold parts on a rosewood-board guitar, or chrome on an ebony-board guitar, point to changed hardware. Check the label.</p>'}]},
 p('<p>The <a href="/what-lowers-vintage-guitar-value/">condition guide</a> explains how repairs and changed parts are weighed.</p>')
 ],'dark'),
 section('checklist','Build A Howard Roberts Identification Record','Photos Joe Needs To Identify Yours',[
 {type:'checklist',items:[
 {title:'Label Through The Soundhole',html:'<p>This one photo usually settles the maker and model.</p>'},
 {title:'Headstock Front And Back',html:'<p>Include the logo, the peghead inlay, the tuners and the serial.</p>'},
 {title:'Fingerboard And Hardware',html:'<p>Show the inlays, the plating on the tailpiece and the bridge.</p>'},
 {title:'Pickup Mounting And Knobs',html:'<p>Show the pickup mounting, the knobs and any extra holes.</p>'}]},
 gCTA('Ask Joe To Identify Your Howard Roberts','<p>Send the photos above. Joe can confirm the maker, the model, the likely year and which parts have been changed.</p>')]),
 section('references','Howard Roberts Identification Sources','Where These Details Come From',[
 {type:'sources',items:[
 source('Premier Guitar: The Howard Roberts Signature Epiphone','https://www.premierguitar.com/pro-advice/vintage-vault/howard-roberts-signature-epiphone','Epiphone body, neck, pickup and tailpiece, and the Gibson relaunch.'),
 source('Howard Roberts Guitars Reference','https://utstat.utoronto.ca/mikevans/hroberts/guitars/guitars.html','Model history, production counts and reissues, with cited sources.'),
 source('Archtop.com: 1976 Gibson Howard Roberts Custom','https://www.archtop.com/ac_76hrc_1022.html','Gibson Custom construction, controls and a factory second stamp.'),
 source('Archtop.com: 1978 Gibson Howard Roberts Artist','https://www.archtop.com/ac_78hra.html','Artist hardware, fingerboard and serial.'),
 source('Gibson Serial Number Guide','/how-to-read-gibson-serial-numbers/','1970s serial formats.')]}])],
 faqs:[
 {q:'Is My Howard Roberts An Epiphone Or A Gibson?',a:'Read the label through the soundhole and check the top. Kalamazoo Epiphones from 1964 to 1970 have carved spruce tops. Gibsons from 1974 on have laminated maple.'},
 {q:'How Do I Tell A Howard Roberts Custom From An Artist?',a:'The Custom has chrome hardware and a rosewood fingerboard. The Artist has gold hardware and an ebony fingerboard.'},
 {q:'Is The Howard Roberts Fusion The Same Guitar?',a:'No. The Fusion is a semi-hollow guitar with a center block, f-holes and two humbuckers.'},
 {q:'Are Ibanez Howard Roberts Guitars Gibsons?',a:'No. Ibanez made copies in the 1970s. The headstock, label and serial identify them.'}],
 closing:'<p>Read the label, check the top and the trim, and date the guitar from its serial format. Then use the <a href="/post/gibson-howard-roberts-value-guide/">Howard Roberts price guide</a>.</p>'
}];
