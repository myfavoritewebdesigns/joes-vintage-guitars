/** Editorial data for the paired guides. Photo identities are separate from model names. */
export interface ModelSection { heading: string; paragraphs: string[] }
export interface ModelGuide {
 key: string; name: string; group: 'Guitars' | 'Basses' | 'Lap Steels'; period: string;
 intro: string; photoSet: string; comparison: string; variants: [string,string][];
 authentication: ModelSection[]; valuation: ModelSection[];
 sources: {title:string;url:string;note:string}[];
}
const section=(heading:string,...paragraphs:string[]):ModelSection=>({heading,paragraphs});
const factory=(year:string,month:string,note:string)=>({title:`Rickenbacker ${month} ${year} Factory Price List`,url:`https://www.rickenbacker.com/wp-content/uploads/2024/06/Pricelist-${year}-${month}.pdf`,note});
export const rickenbackerModels:ModelGuide[]=[
 {
 key:'325',name:'310, 315, 320 And 325',group:'Guitars',period:'Original Short-Scale Guitars And Later Reissues',photoSet:'325',
 comparison:'The photos show a 1997 325 from our archive. This later instrument illustrates reissue features; it is not a 1958 or 1964 original.',
 intro:'A small body, three toaster pickups and a black finish can make a Rickenbacker look like a familiar Beatles guitar. Authentication starts further back: which short-scale model is it, when was it built, and which features belong to that version? A later 325 can be a desirable guitar in its own right, but its value needs a different comparison group from an original Capri.',
 variants:[['310 / 315','Short-scale, two-pickup relatives; verify the original tailpiece or vibrato configuration.'],['320 / 325','Three-pickup short-scale family, with fixed-tailpiece and vibrato configurations.'],['Rose Morris 1996','Export designation associated with the short-scale three-pickup guitar. Do not read 1996 as its year.'],['V59, V63, C58 And C64','Later recreations with different period features. The suffix describes the inspiration, not the manufacturing date.'],['350 / 350V63','Full-scale relative; a similar silhouette does not make it a 325.']],
 authentication:[
 section('Measure The Scale Before Naming The Model','Photograph the whole guitar beside a ruler, then measure from the nut to the twelfth fret and double that distance. This separates the short-scale family from a similar-looking full-scale 350. Count the pickups and photograph the tailpiece attachment. A removed vibrato can leave a guitar looking like a fixed-tailpiece version, so the current hardware alone cannot settle the original model.','Do not identify a guitar as a 1958 Capri because it has a thick-looking body or gold plastics. Record body depth, neck joint, soundhole or closed top, fret count and headstock shape together. Those observations give an appraiser something more useful than a seller’s nickname.'),
 section('Separate Original Production From Reissues','Our 1997 example has three toaster-style covers, gold plastics and a Bigsby. Those details establish its appearance, not a 1950s date. Photograph the complete jackplate serial, including the letters above the digits, and compare that date with the construction. The factory’s later price lists explicitly describe V59 and V63 versions as vintage-series models.','Look for a consistent instrument beneath the styling: tuner footprints, neck finish, pickup leads and mounting holes should make sense together. A modern replacement nameplate can carry an old-looking logo. An authentic older jackplate can also be transferred to another guitar. Neither part is enough on its own.'),
 section('Inspect The Vibrato And Control Layout','Different 325 versions use different vibratos, guards and control arrangements. Compare the specific version before calling a four-knob or five-knob layout incorrect. Examine the body around the vibrato hinge, strap button and bridge for abandoned holes, filled screw marks or a footprint from a previous unit. A Lennon-inspired modification may be intentional owner work.','Test each pickup selection through a clean amplifier and note what each control actually changes. Photograph any loose original arm, bridge or knobs separately. A tidy-looking guard can conceal routing or changed wiring, so an internal inspection may be needed if an expensive original-era claim depends on untouched electronics.'),
 section('Check Short-Scale Playability And Repairs','Play every fret at normal tuning and inspect the neck from both sides. Record action at the twelfth fret, remaining fret height and bridge adjustment room. A small guitar with high action is not automatically normal because it is short scale. Check for separation at the neck joint and finish lines that continue into the wood.','Inspect the headstock behind the nut and around the tuner screws. Changed tuners may leave extra holes; a repaired headstock may have localized overspray. Keep those findings separate from ordinary finish checking. Ask for repair invoices and before-and-after photos when a seller describes major work as only a setup.')
 ],
 valuation:[
  {
    "heading": "Price The Manufacturing Era First",
    "paragraphs": [
      "Original late-1950s and 1960s short-scale guitars, Rose Morris exports, later production 320s and V/C-series reissues belong in separate groups. A 1997 guitar with 1958 styling should be compared with the same reissue version and similar condition. An original 1960s guitar needs original-era evidence, even if a newer instrument looks cleaner.",
      "The chart separates original short-scale guitars from later recreations. Confirm the manufacturing date and full model designation before choosing a row. The earliest production examples and instruments with documented famous-player ownership need an individual appraisal."
    ]
  },
  {
    "heading": "Weigh Modifications In The Context Of The Version",
    "paragraphs": [
      "A changed vibrato, added controls or altered pickguard may make a guitar more useful to its owner while reducing its appeal to an originality-focused buyer. The effect depends on whether the change was reversible, whether wood was removed, and whether the original pieces survive. Do not subtract the cost of a replacement part and assume that fully accounts for a routed body.",
      "Keep the case, paperwork and any original hardware together. A well-documented repair can leave a desirable playing instrument, but it changes the original-condition assumptions behind the chart. Explain what was repaired and what remains original."
    ]
  },
  {
    "heading": "Build A Useful Appraisal File",
    "paragraphs": [
      "Include the scale measurement, full serial, front and rear headstock views, the complete control area and the tailpiece mounting. For a claimed early Capri or export, include body depth, soundhole shape and any dated receipt. State the exact reissue suffix when known.",
      "Specify whether you want an estimated market value or an immediate purchase offer. A direct offer accounts for the work, preparation and selling time involved after purchase; the chart is not a guaranteed amount Joe can pay for every example."
    ]
  }
],
 sources:[factory('1988','June','Lists the V59 and V63 configurations as later vintage-series offerings.'),{title:'Rickenbacker Legacy Models',url:'https://www.rickenbacker.com/series/legacy/',note:'Manufacturer descriptions distinguish C-series recreations from the originals they reference.'}]
 },
 {
 key:'330-340',name:'330 And 340',group:'Guitars',period:'Capri, Standard And Export Thinlines',photoSet:'360',comparison:'The photographs show our 1960s 360, a related deluxe model. Its triangle inlays and binding are comparison details, not standard 330 specifications.',
 intro:'A vintage 330 or 340 should be identified by its body, neck, pickup count and original hardware configuration before a value is assigned. These standard thinlines share parts with deluxe Rickenbackers, but a 360’s binding and triangle inlays should not become the checklist for a 330. Early Capri instruments, later 1960s guitars and 1970s production also need separate comparisons.',
 variants:[['330 / 335','Two-pickup family; check fixed-tailpiece versus vibrato specification.'],['340 / 345','Three-pickup relatives; added middle pickups can imitate this layout.'],['Rose Morris 1997 / 1998','Export model numbers, not dates. Check the f-hole, configuration and supporting history.'],['330/12 / 340/12','Twelve-string versions need the separate twelve-string inspection and value guide.']],
 authentication:[
 section('Start With The Standard-Model Features','Record the fretboard markers, body edge treatment, number of pickups and output jack arrangement. Dot markers and a plainer body distinguish the standard family from many deluxe 360/370 versions. Our 360 photographs intentionally show that contrast. An unbound guitar is not automatically a cheaper modified 360, and a triangular-inlay neck is not normal evidence for a standard 330.','Photograph both cutaways, the heel and the entire back. Early Capri construction differs from later examples, so compare a claimed early guitar with the correct period rather than a current production specification sheet.'),
 section('Check Two Pickups Against Three','A third pickup does not by itself establish a factory 340. Look at pickup spacing, guard edges, unused screw holes and the finish around each opening. If the middle pickup was added, the routing and wiring can matter more than whether the pickup itself is a real Rickenbacker part. Document the work rather than relabeling the guitar from its present appearance.','Use the serial date to choose the right pickup comparison. Toaster-style and Hi-Gain designs occur in different periods, and a later replacement can fit neatly. A technician can inspect pickup leads, solder joints and cavity edges if those details affect an originality claim.'),
 section('Distinguish Exports And Vibrato Conversions','A traditional f-hole is useful evidence for an export-style instrument, but it does not prove a particular export model or original market. Record the complete configuration and any dealer paperwork. The numbers 1997 and 1998 can appear in model names; they must not be entered as manufacturing years without reading the serial.','For 335 and 345 claims, check the original vibrato mounting and any missing arm or attachment hardware. A replacement R tailpiece can hide part of a conversion. Conversely, an added vibrato does not turn a factory 330 into an original 335.'),
 section('Inspect The Neck Angle And Body Edges','Sight along both sides of the neck and check the action with the guitar tuned. Photograph the bridge from the side. If the bridge is already at its lowest useful setting and the strings remain high, a routine saddle adjustment may not solve the problem. Look for heel movement, old glue, refinished seams or a documented neck reset.','Check the soundhole edge, jack area and strap-button holes for cracks or repairs. Compare exposed finish with protected areas when professionally inspected. A darker patch or lighter area can come from wear or fading; a refinishing conclusion needs several clues together.')
 ],
 valuation:[
  {
    "heading": "Compare Era, Pickup Count And Originality",
    "paragraphs": [
      "Use a 330 comparison for a 330 and a 340 comparison for a factory three-pickup guitar. A converted 330 should carry a description of its conversion, even if it now sounds like a 340. Keep early Capri guitars, ordinary later production and documented export variants in distinct groups.",
      "Use the chart as a starting point for an original instrument in excellent condition. A refret, changed electronics or a repaired neck can place a guitar outside that range. The 330, 335, 340 and 345 rows retain their own configurations instead of treating pickup count as a fixed dollar premium."
    ]
  },
  {
    "heading": "Put Structural Work Ahead Of Cosmetic Grading",
    "paragraphs": [
      "A guitar with normal checking, buckle wear and healthy neck geometry can be easier to sell than a glossy example with a problematic neck angle. Price a proposed neck reset using an actual repair assessment and then compare with other repaired instruments. The repair bill alone does not measure the change in collector demand.",
      "A refret, replacement nut or changed bridge can improve playability. Explain the work plainly and include the originals if retained. Routing, stripped fingerboard finish and multiple changed pickups require more explanation than a simple consumable replacement."
    ]
  },
  {
    "heading": "Keep Export Claims And Paperwork Connected",
    "paragraphs": [
      "An original receipt, period photographs and a consistent serial can support a guitar’s history. They should match the instrument’s distinctive features. A loose export tag or an old case does not prove that the guitar inside originally shipped to that market.",
      "For an offer, send the complete body, headstock, jackplate and any modification photos. If the guitar has three pickups, show the middle pickup and surrounding guard closely. If you have a twelve-string, use the separate twelve-string guide before choosing comparison prices."
    ]
  }
],
 sources:[factory('1976','June','Period model descriptions distinguish pickup counts and vibrato variants.'),{title:'Rickenbacker Guitar Schematics',url:'https://www.rickenbacker.com/guitar-schematics/',note:'Separate factory circuits are provided for the two-pickup and three-pickup families.'}]
 },
 {
 key:'360-370',name:'360 And 370',group:'Guitars',period:'Six-String Deluxe Thinlines',photoSet:'360',comparison:'Our Mapleglo six-string 360 is archived as a 1960s instrument. The photographs document this guitar’s visible features; they do not independently establish an exact year or untouched electronics.',
 intro:'The 360 and 370 family includes more than one body shape and several hardware combinations. A sharp-edged early-style body, a rounded later body and an F-series full-body guitar need different comparisons. Start with the instrument’s construction and serial, then determine whether its pickups, vibrato, wiring and finish still match that identity.',
 variants:[['360 / 365','Deluxe two-pickup six-strings, with fixed-tailpiece and vibrato variants.'],['370 / 375','Three-pickup deluxe relatives. Confirm the middle pickup was factory installed.'],['OS / NS','Old-style and new-style body descriptions. Inspect the actual outline and edge treatment.'],['F-Series','Larger full-body instruments; do not group them with ordinary thinlines.'],['360/12 / 370/12','Separate twelve-string construction and market; see the paired twelve-string guides.']],
 authentication:[
 section('Identify The Body Version','Photograph the top and back straight on, then the body edge from the side. A rounded top edge and bound back differ visibly from a double-bound, sharper-edged body. Our natural-finish 360 shows the rounded front and checkerboard detail at the back. These are observations about this example, not a shortcut to an exact year.','Check the outline, depth, soundhole and neck joint before accepting an OS or F suffix. A refinished body can make edge contours less obvious. An unusually rounded binding edge may also reflect sanding, so evaluate the surface and binding thickness together.'),
 section('Use Inlays And Binding As Supporting Evidence','The archive guitar has large triangular fingerboard inlays and contrasting binding details. Photograph the entire fingerboard so changes in marker size, fret count and binding are visible. Later factory changes and vintage-style recreations mean one inlay cannot authenticate the whole instrument.','Inspect binding joints for shrinkage, replacement sections and separation. Examine the neck binding beside each fret for evidence of a refret. New frets can be good repair work; the question is what was changed, how neatly it was done and whether the seller describes it accurately.'),
 section('Test The Pickups And Both Outputs','The five-control layout and twin-output arrangement deserve a functional test. Check the normal mono output first, then test the stereo output with appropriate equipment. An incorrectly chosen cable can make part of a working guitar seem dead. Record which output and pickup selection produced each result.','A three-pickup 370 claim needs more than a third chrome cover. Check the guard, pickup spacing and evidence of additional routing. Likewise, a 365 or 375 with a replaced vibrato should be identified from its original configuration when that can be established, not simply renamed after the hardware now fitted.'),
 section('Examine The Heel, Headstock And Finish','Our rear views show why a whole-instrument photograph is useful alongside details. Follow the neck stripe and finish from the headstock to the heel. Look closely where a repair could interrupt that continuity, but do not confuse a normal wood joint with a break. Photograph suspicious lines under diffuse light from two angles.','At the body, inspect the bridge setting, soundhole edge and jackplate screws. Original paint elsewhere does not rule out local overspray or a repaired neck joint. A full appraisal should distinguish untouched finish, touch-up, overspray and complete refinishing instead of describing all four as simply original or not original.')
 ],
 valuation:[
  {
    "heading": "Separate Ordinary Thinlines From Special Variants",
    "paragraphs": [
      "A 360 six-string is not interchangeable with a 360/12, an F-series guitar or an instrument with famous-player provenance. The body version, exact model and original hardware configuration come before finish color in choosing comparisons. A three-pickup conversion should not borrow the asking price of an untouched factory 370.",
      "The chart distinguishes early Capri construction, old-style bodies and new-style bodies. A repaired headstock or altered output circuit calls for an individual adjustment. Do not use a clean six-string range for a twelve-string, an F-series guitar or a converted instrument."
    ]
  },
  {
    "heading": "Evaluate Repairs Without Losing The Guitar’s Identity",
    "paragraphs": [
      "Neck angle, headstock repairs, changed wiring and missing vibrato parts can materially affect a buyer’s decision. Ask what was repaired, who did it and whether the guitar now plays correctly. A receipt and clear close-ups reduce uncertainty; the word professional without supporting detail does not.",
      "Keep cosmetic wear in perspective. Clear descriptions of checking, worn plating and small finish chips allow a buyer to distinguish age from structural trouble. A newer-looking refinished guitar should not automatically receive the same condition grade as an original-finish instrument with similar shine."
    ]
  },
  {
    "heading": "Present A Complete Six-String Comparison",
    "paragraphs": [
      "For a useful appraisal, show the full front and back, both headstock faces, the entire fingerboard, body edge, outputs and serial. Include a side view of the bridge and a description of action. State whether it is a six-string, twelve-string or converted instrument.",
      "Do not use an exceptionally expensive artist-owned example to set an ordinary guitar’s asking price. Match construction and condition first, then assess documented rarity or provenance separately. The original case adds context, but it cannot resolve conflicting evidence on the guitar."
    ]
  }
],
 sources:[factory('1976','June','Lists deluxe thinlines, vibrato versions and F-series models separately.'),{title:'Rickenbacker Factory Circuit Diagrams',url:'https://www.rickenbacker.com/guitar-schematics/',note:'Compare the two-pickup and three-pickup stereo circuits for the correct family.'}]
 },
 {
 key:'12-string',name:'Vintage Twelve-Strings',group:'Guitars',period:'330/12, 360/12, 370/12 And Related Models',photoSet:'36012',comparison:'These photos show the Fireglo 360/12 filed in our archive as a 1966 instrument. It is a comparison for other twelve-string models, not a photograph of a 330/12, 1993 or convertible.',
 intro:'A vintage Rickenbacker twelve-string needs both an identity check and a close look at how it plays. The compact headstock, paired strings and distinctive body can hide differences between original twelve-strings, six-string conversions and later vintage-style models. Neck geometry, the nut and the bridge often explain more about a buyer’s likely costs than a small finish blemish.',
 variants:[['330/12 / 340/12','Standard thinlines with two or three pickups.'],['360/12 / 370/12','Deluxe twelve-strings; identify the body style and pickup count.'],['336/12 / 366/12 / 456/12','Convertible versions with a string-comb mechanism; missing hardware affects identification and value.'],['Rose Morris 1993','Export twelve-string designation; distinguish later 1993Plus production.'],['V64 / C63 / 381/12 / 620/12','Different reissue or model families. Compare each with its own construction and production era.']],
 authentication:[
 section('Confirm A Factory Twelve-String Neck','Photograph the headstock front, back and both sides. The six additional tuners and their channels should be evaluated as part of the neck’s construction. A six-string converted to twelve strings can have filled holes, irregular machining or a different tuner layout. A real Rickenbacker body does not automatically make a conversion an original 360/12.','Record the nut width, string count, fret count and serial. Check for cracks at tuner screws and along the headstock channels. Our archive photos show why both faces matter: the front does not reveal all the rear mounting details.'),
 section('Match The Body And Controls To The Model','Use the body outline, binding, inlays, pickup count and outputs to distinguish standard and deluxe families. The Fireglo 360/12 pictured here has deluxe appointments; those should not be imposed on a plainer 330/12. A third pickup can be original on the right model or an addition to a two-pickup guitar.','For a convertible, photograph the complete comb mechanism and its mounting. Missing hardware may leave clues that a simple model label overlooks. Keep a larger double-neck or full-body version out of an ordinary thinline comparison, even if one neck carries the same twelve strings.'),
 section('Check The Nut, Saddles And Intonation','Play paired strings together and separately, checking open notes and fretted notes up the neck. Photograph the nut slots and bridge from directly above. Deep or widened nut slots, damaged saddles and mismatched string spacing can affect tuning and feel. A twelve-saddle replacement may improve adjustment but should be disclosed as such when it is not original.','Check the bridge height and neck angle with the guitar at playing tension. A low bridge with high action deserves a repair assessment. Do not assume every difficult-playing twelve-string only needs lighter strings; a twisted neck or poor neck angle changes the problem.'),
 section('Distinguish Reissues And Repaired Originals','A vintage-style trapeze, toaster pickups and double binding can appear on later recreations. Date the actual instrument from its serial and supporting construction, then check the version-specific hardware. V64 and C63 names describe historical inspiration, not a 1964 or 1963 manufacturing date.','Inspect for a refret, a changed nut, neck-reset evidence and headstock repair. A good refret may make a valuable guitar usable again, while concealed routing or a six-to-twelve conversion changes its collector identity. Keep the repair history with the guitar and retain any removed original parts.')
 ],
 valuation:[
  {
    "heading": "Choose The Right Twelve-String Market",
    "paragraphs": [
      "Start with the exact family: 330/12, 360/12, 370/12, export, convertible or later reissue. Next match the body version and decade. Do not use a six-string price and add an arbitrary amount for six more strings. Production differences and demand for specific versions matter more than the string count alone.",
      "The chart keeps original twelve-strings, later reissues and convertible models in separate rows. Early old-style bodies can differ substantially from later rounded-body guitars. Confirm the body version, finish and original string configuration before selecting a range."
    ]
  },
  {
    "heading": "Budget For Playability With An Actual Diagnosis",
    "paragraphs": [
      "A prospective buyer needs to know whether the guitar tunes, intonates and plays comfortably. Remaining fret height, nut work, bridge condition and neck geometry should be assessed together. Price a documented repair need with a written estimate, then compare against instruments that have similar work already completed.",
      "A replacement bridge or refret can broaden the guitar’s player appeal, but original parts still matter to some collectors. Report both what is fitted and what comes in the case. Do not advertise a converted six-string as an original twelve-string simply because the conversion was expensive."
    ]
  },
  {
    "heading": "Value Complete Convertible And Export Examples Carefully",
    "paragraphs": [
      "An intact convertible comb, correct case and matching paperwork can distinguish a complete instrument from a project. Verify that the mechanism belongs to that model and works as intended. A missing comb is not necessarily restored by buying the first similar-looking part available online.",
      "Export and early-body claims need close photographs and a consistent date. If the identity or repair history is uncertain, request an individual appraisal before applying the chart. Clear twelve-string-specific photos are more useful than an artist association that cannot be documented."
    ]
  }
],
 sources:[factory('1976','June','Distinguishes twelve-string, convertible and full-body model designations.'),factory('1989','June','Documents later V-series twelve-strings as separate offerings.')]
 },
 {
 key:'381',name:'381 And 381V69',group:'Guitars',period:'Carved-Body Originals And Reissues',photoSet:'360',comparison:'Our 1960s 360 is used only to compare pickups, inlays, binding and inspection angles. It does not show the 381’s carved body or German-carve edge.',
 intro:'The 381 requires a clear distinction between original-era production and the later 381V69 family. Its carved body is central to that identification. Decorative binding or toaster-style pickups on another Rickenbacker cannot establish a 381, and the “69” in a V69 name is not the year that particular guitar was made.',
 variants:[['Original 381','Original-era carved-body model; inspect the serial and period hardware together.'],['381V69','Later six-string vintage-series recreation.'],['381/12V69','Twelve-string version; evaluate the neck, nut and bridge as a twelve-string.'],['360 / 370','Related deluxe thinlines, with different body construction.']],
 authentication:[
 section('Document The Carving And Body Depth','Ask for raking-light views across the top and back, plus a side view showing depth. The 381’s sculpted surfaces need to be visible, not inferred from a front photograph or a seller’s model field. Our flat-angle 360 photographs are useful for hardware comparison but cannot substitute for this body evidence.','Inspect the carved edge and binding joints for sanding, repair or separation. Refinished contours can lose definition. A dark finish can make carving harder to read, so use soft side lighting rather than bright glare or heavy image filters.'),
 section('Read V69 As A Model Suffix','A later V69 is not an original 1969 instrument. The factory’s 1989 price list describes the 381V69 and its twelve-string relative as contemporary offerings. Photograph the complete serial, neck joint and headstock, then establish the manufacturing date independently of the model name.','Keep the original model and reissue hardware expectations separate. The 1969 dealer example cited here has early Hi-Gain pickups, illustrating why toaster covers are not a universal originality requirement for every original 381. Judge the precise instrument against its period.'),
 section('Inspect Binding, Electronics And Neck Geometry','Follow all body and neck binding with close photographs. Local replacements, shrinking joints and loose areas deserve a specific description. Binding repair on a carved body can be more involved than replacing an inexpensive external part, so obtain a repair assessment before assigning a condition grade.','Test pickup switching and outputs, then inspect the bridge setting and action. On a twelve-string, add nut-slot and paired-string intonation checks. A visually impressive top should not distract from a weak pickup, altered circuit or a neck that needs work.'),
 section('Verify Finish And Original Hardware Claims','Compare protected and exposed finish when a qualified repairer has reason to inspect beneath hardware. Look for incompatible footprints, extra holes or finish over old damage. A set of period-looking knobs or toasters is not proof that the whole guitar escaped modification.','Keep dated photographs, original receipts and any repair records together. Figured maple varies between instruments; attractive grain is not a substitute for a consistent serial and construction. Avoid assigning a production-count rarity claim unless a reliable record supports that specific version.')
 ],
 valuation:[
  {
    "heading": "Separate Original 381s From V69 Guitars",
    "paragraphs": [
      "The first price question is which production group the guitar belongs to. Original-era 381s and later V69 instruments have different comparison pools, and the twelve-string version needs its own. A later guitar can be highly desirable without being described as a 1969 original.",
      "Use the original 381 row for the original production period and the V69 rows for later recreations. The twelve-string V69 and John Kay signature version have their own entries. Binding deterioration, changed electronics or sanding around the carved edge requires an individual adjustment."
    ]
  },
  {
    "heading": "Assess Carving, Binding And Finish Together",
    "paragraphs": [
      "A clean, well-preserved carved body can be a major part of the guitar’s appeal. Binding separation, replacement sections or sanding during a refinish may reduce that appeal even when the guitar plays well. Have a repairer distinguish cosmetic aging from active deterioration.",
      "Original pickups and wiring also deserve attention. Restoring a changed instrument can cost more than the visible replacement parts, and restoration does not make it untouched. Describe a repaired or restored guitar accurately and compare with others carrying similar work."
    ]
  },
  {
    "heading": "Make The Appraisal Specific To Your Instrument",
    "paragraphs": [
      "Send front, back and side views that show the carving, the serial, full fingerboard, both headstock faces and detailed binding photos. For V69 instruments, include the complete model designation and purchase paperwork if available. For a twelve-string, add a bridge and nut close-up.",
      "State whether you want an immediate purchase offer or an estimate of market value. A rare model may take time to find its buyer. Documented condition gives an appraisal a firmer basis than the word rare."
    ]
  }
],
 sources:[factory('1989','June','Describes the carved-body V69 models and distinguishes six and twelve strings.'),{title:'1969 381 Dealer Examination',url:'https://www.gbase.com/gear/rickenbacker-381-1969-fireglosunburstvintage',note:'Instrument-specific description of the original-era example used in the value discussion.'}]
 },
 {
 key:'425-450-460',name:'420, 425, 450 And 460',group:'Guitars',period:'Compact Solidbody And Twelve-String Models',photoSet:'425',comparison:'The photographs show our archive-labeled 1964 Jetglo 425. Its single pickup and control layout are specific to this example; two-pickup and deluxe variants differ.',
 intro:'The compact 400-series solidbodies deserve identification on their own terms. A single-pickup 425 is not an incomplete 450, and a bound 460 is more than a color variation. These guitars can also carry substantial owner modifications beneath a large pickguard. Start with the construction, pickup layout and serial before deciding what is original or how much it is worth.',
 variants:[['420 / 425','Single-pickup solidbody family; check the period’s hardware configuration.'],['450 / 450/12','Two-pickup six-string and twelve-string versions.'],['460','Deluxe relative with different appointments.'],['456/12','Convertible twelve-string; inspect the comb mechanism and its mounting.'],['900 / 950 And Electro Models','Related entry-level instruments require their own model and branding checks.']],
 authentication:[
 section('Count Pickups And Identify The Body','Our Jetglo 425 shows one toaster-style pickup, a large white guard, two knobs and a switch. A switch does not necessarily mean there is a missing second pickup. Photograph the whole control area and test its actual function. Compare the complete configuration with the appropriate factory circuit rather than assuming all Rickenbackers have the same controls.','Record body outline, neck construction, fingerboard markers and binding. A 460 claim should be supported by its deluxe appointments, not just a handwritten model number. If the guitar is a twelve-string, inspect its headstock machining and tuners as well as its body.'),
 section('Look Beneath The Story Of A Large Pickguard','The guard can cover changed pickup routes, plugged holes and rewiring. Begin with external clues: mismatched screws, an unusual guard outline or a pickup sitting at an odd angle. If the price depends on originality, have a qualified person document the cavities and wiring without damaging the old guard.','A replacement pickup with a vintage-looking cover may fit cleanly. Compare leads, mounting and period construction as well as the cover shape. Keep a changed pickup separate from a body routed for a much larger unit; those changes have different consequences.'),
 section('Inspect The Bridge And String Path','Photograph the bridge from above and from both sides. Check that the strings run sensibly along the fingerboard and that the instrument intonates. A replacement bridge can be useful, but added posts, drilled holes or a relocated assembly should be disclosed. Look for a footprint from removed hardware.','On a 450/12 or 456/12, examine paired-string spacing at the nut and saddles. A missing convertible mechanism can make a model harder to recognize. Record any loose original parts in the case before deciding the guitar was built without them.'),
 section('Check The Neck And Black Finish Carefully','The rear headstock and neck photographs show the angles needed to inspect tuner changes and repairs. Look around the nut, heel and screw holes for breaks, filled holes or finish discontinuities. A dark finish can hide a repair in a straight-on photograph, so use side lighting as well.','Jetglo does not automatically mean a refinish, nor does uniform black paint prove an original surface. Inspect protected edges, finish over old damage and hardware footprints together. Check the neck at playing tension and report fret wear and action separately from cosmetic condition.')
 ],
 valuation:[
  {
    "heading": "Use The Exact Solidbody Variant",
    "paragraphs": [
      "A 425, 450, 460 and convertible twelve-string serve different buyers. Match pickup count, appointments and original configuration before comparing prices. A modified one-pickup guitar should not be priced as a factory two-pickup example simply because it now has two pickups.",
      "Use the separate 425, 450 and 460 rows for their actual production periods. The early tulip body and later cresting-wave designs belong in different groups. A second pickup or deluxe binding does not create a fixed premium that can be added to another model’s range."
    ]
  },
  {
    "heading": "Account For Routing And Binding Work",
    "paragraphs": [
      "A changed switch tip or missing screw is different from enlarged pickup cavities. For deluxe instruments, inspect binding separation and replacement sections closely. Obtain a repair estimate for active problems, and keep the buyer’s concern about originality separate from the cost of making the guitar playable.",
      "Retain a removed pickup, bridge or guard when possible. A usable original part can help a future owner, but a box of parts does not undo wood removal or make a restored instrument untouched."
    ]
  },
  {
    "heading": "Document The Details That Support An Offer",
    "paragraphs": [
      "Send the complete serial, bridge, controls, front and rear headstock, body back and neck joint. Include close-ups of any extra holes or finish repairs. For a twelve-string or convertible, show all tuning machines and any comb hardware.",
      "A practical selling description should state what works, what has changed and what comes with the guitar. An original case can add interest, but disclose broken latches or poor fit. Compare the instrument’s present condition rather than the condition you expect after unpriced repairs."
    ]
  }
],
 sources:[factory('1977','January','Lists the compact solidbody and twelve-string variants separately.'),{title:'Rickenbacker One-Pickup Circuit References',url:'https://www.rickenbacker.com/guitar-schematics/',note:'Factory schematic index includes the one-pickup 420 and related entry-level models.'}]
 },
 {
 key:'600-series',name:'600-Series Solidbodies',group:'Guitars',period:'Combo, 610, 615, 620 And 625',photoSet:'425',comparison:'Our 1964 425 is shown for hardware, tuner and condition comparisons. It is not a 600-series guitar and does not demonstrate the cresting-wave body or its construction.',
 intro:'Rickenbacker’s 600-series names span different generations of solidbody guitars. An early Combo, a later 610 or 620, and a modern 660 should not be treated as the same instrument with different trim. Confirm the body and neck construction, production period and full model name before using a price guide.',
 variants:[['Early Combo 600 / 800','Earlier designs with their own pickup and construction history.'],['610 / 615','Later cresting-wave family with plainer appointments; verify fixed-tailpiece or vibrato configuration.'],['620 / 625','Deluxe relatives; compare binding, inlays, outputs and original hardware.'],['610/12 / 620/12','Twelve-string versions require additional neck and headstock inspection.'],['650 / 660','Later distinct designs and specifications; do not use their prices for an early Combo.']],
 authentication:[
 section('Establish Which Generation You Have','Photograph the entire body front and back, including the neck-to-body transition. A familiar cresting-wave silhouette does not date the guitar. Early Combo instruments and later 600-series production need different period references. Write down the exact model claimed, then test that claim against the construction and serial.','Look at fingerboard markers, binding, pickup design and outputs together. A nameplate or swapped jackplate cannot resolve a body that belongs to another design. Our 425 comparison photographs help identify inspection angles, but its outline is not a model template for this family.'),
 section('Check The Neck And Body Construction','Rear views should show the center section, body wings and finish around their joins where visible. Examine any separation carefully before describing it as finish checking. Paint can conceal the wood layout, so a qualified inspection may be needed if the construction is in doubt.','Check the headstock, nut area and heel for repaired breaks or added finish. Record fret count and marker layout, allowing for period changes. A refretted neck can be perfectly usable, but a replacement fingerboard or heavily altered profile needs a fuller description.'),
 section('Match Pickups, Controls And Tailpiece','An early Combo’s pickup system should not be judged against a later 620’s Hi-Gain configuration. Conversely, vintage-style toaster covers on a later guitar do not establish an early manufacturing date. Compare the wiring, mounting and body routes with the specific version.','Photograph fixed-tailpiece or vibrato mounting from the side and rear edge. Look for plugged holes and outline marks from removed hardware. On deluxe versions, test both output arrangements correctly; a rewired mono-only instrument should not be advertised as retaining every original electrical function.'),
 section('Inspect Twelve-String And Later Variants Separately','For a 620/12 or 610/12, inspect the tuner channels, nut slots and paired-string intonation. Check bridge adjustment room with the strings at normal tension. A converted six-string belongs in a different description from a factory twelve-string even if the workmanship is neat.','Later 650 and 660 instruments have their own specifications and buyer expectations. Use their actual model designations and serial dates. Avoid giving a later guitar a 1960s identity because it has checkerboard binding, vintage-style pickups or a period-looking case.')
 ],
 valuation:[
  {
    "heading": "Match The Solidbody Generation",
    "paragraphs": [
      "The early Combo 600 and Combo 800 are distinct from later 610, 615, 620 and 625 guitars. Use the row for the actual model and production period. A modern-looking cresting-wave outline does not establish that an instrument belongs to the earliest Combo generation.",
      "The chart identifies six-string, twelve-string and vibrato versions separately. Broad later-production rows are a starting point for those models, not a premium for an early guitar. Original finish, neck condition and surviving hardware determine whether the listed condition assumptions fit."
    ]
  },
  {
    "heading": "Balance Original Parts And Player Condition",
    "paragraphs": [
      "Changed pickups, a replaced tailpiece or added vibrato may affect collectors differently from players. Determine whether modifications required routing or drilling. The cost of a replacement part is only one part of the value question; reversibility and the surviving original hardware also matter.",
      "Structural repairs, neck adjustment problems and poorly executed refinishing need separate consideration. A clean-looking guitar with unresolved neck trouble is not a comparable substitute for a healthy worn example. Ask for a repair assessment before committing to a restoration budget."
    ]
  },
  {
    "heading": "Prepare A Model-Specific Appraisal",
    "paragraphs": [
      "Include front and rear whole-instrument photos, the serial, neck construction, pickups, outputs and tailpiece attachment. For an early Combo, document the complete pickup assembly rather than only its cover. For twelve-strings, add both headstock faces and a bridge close-up.",
      "State the known repairs and include removed original parts. If the guitar falls between the years shown or has an unusual configuration, ask Joe for an individual estimate. Do not move it into a higher-valued row on appearance alone."
    ]
  }
],
 sources:[factory('1992','September','Period reference for later 600-series configurations; not an early Combo specification.'),{title:'Rickenbacker Company History',url:'https://www.rickenbacker.com/legacy/',note:'Background on the earlier electric-guitar designs and their evolution.'}]
 },
 {
 key:'480-481',name:'480, 481 And 483',group:'Guitars',period:'Bass-Shaped Solidbody Guitars',photoSet:'4003',comparison:'The photographs show a 1989 4003 bass to explain the related body silhouette and inspection angles. It is not a 480, 481 or 483 guitar; its pickups, neck and bridge are different.',
 intro:'The bass-like body outline makes a 480-series guitar easy to notice, but it does not identify the version. The 480, 481 and 483 differ in pickups, controls and neck details. Those differences matter both for authentication and for finding useful price comparisons, especially on instruments that have been routed or rewired.',
 variants:[['480','Two-pickup guitar; inspect the model’s own neck and electronics.'],['481','Deluxe model associated with slanted frets, humbucking pickups and phase switching.'],['483','Three-pickup relative listed in the 1982 factory price list.'],['4080 / 4080/12','Double-neck instruments are separate models, not ordinary 480s with an accessory neck.']],
 authentication:[
 section('Identify The Guitar Beyond Its Body Outline','Count strings, frets and pickups, and photograph the neck attachment. The bass-shaped body is a useful first clue, but our comparison bass has a different construction and electrical layout. Do not use a 4001 or 4003 specification to authenticate the guitar.','Compare the complete model configuration with a period factory reference. A 480 with an added pickup should not automatically be relabeled a 483. Look for changed guard edges, unusual screw positions and evidence that a pickup opening was enlarged.'),
 section('Inspect The 481’s Neck And Switching','On a claimed 481, photograph the fingerboard straight on so the fret angle is visible. Slanted frets are part of the model’s distinctive design, not automatically a bad refret. However, replacement frets and fingerboard work still deserve a close inspection for clean slots, secure seating and accurate playing notes.','Document the humbucking pickups and additional switching. Test the actual circuit rather than assuming a switch works because it is present. If rewired, record what changed and whether the original components are retained. A standard two-pickup guitar fitted with larger pickups is not enough to prove a factory 481.'),
 section('Check The Neck Joint And Bridge Geometry','Photograph the neck attachment, surrounding finish and any visible gaps. Check alignment down both sides of the fingerboard, then play the instrument across its range. A shifted or poorly fitted neck can affect string alignment and action even when the body looks clean.','Inspect the bridge height and saddle travel. Photograph any moved bridge, plugged holes or replacement hardware. Distinguish a setup adjustment from structural work or a changed neck; the latter can alter both the repair cost and the instrument’s identity.'),
 section('Look For Guard Repairs And Enlarged Routes','Large guards can conceal modifications, and old plastic can crack around screws or controls. Record repairs without removing a brittle guard unnecessarily. If internal photos are needed, have someone experienced handle the inspection.','Compare the pickups, pots and switches with the correct model circuit. A pot date is only the date of that component and can predate assembly or belong to a replacement harness. Use it to support the serial and construction, not override contradictory physical evidence.')
 ],
 valuation:[
  {
    "heading": "Keep The 480 And 481 Markets Separate",
    "paragraphs": [
      "The 481’s unusual fret and pickup arrangement is part of its identity. It can appeal to a different buyer from a 480, so a simple price premium based on the higher model number is unreliable. A three-pickup 483 also needs evidence of factory configuration before being valued as that model.",
      "The chart separates the 480, angled-fret 481 and three-pickup 483. Confirm that the neck, pickups and controls match the original model before choosing the range. A repaired guard or changed pot is a different issue from a replacement neck or enlarged pickup routing."
    ]
  },
  {
    "heading": "Price Specialist Repairs Before Buying Parts",
    "paragraphs": [
      "Fingerboard or fret work on a 481 should be evaluated by a repairer familiar with that design. Confirm what can be retained and what must be replaced. An estimate for an ordinary straight-fret guitar may not describe the actual work required.",
      "Original pickups and switches can be difficult to replace correctly. A working modified guitar can still suit a player, but it should be compared with similarly modified instruments. Routing damage or a replacement neck affects more than the cost of the missing component."
    ]
  },
  {
    "heading": "Show The Features A Buyer Cannot Infer",
    "paragraphs": [
      "Send a straight-on fingerboard photo, neck joint, all switches, pickups, bridge and complete serial. Include a clear account of which controls function and any repair history. Show the case and loose parts separately.",
      "For a proposed asking price, look for the same model with a similar degree of alteration. Do not substitute 4001 bass prices because the outline is similar, or a double-neck price because one neck resembles a 480."
    ]
  }
],
 sources:[factory('1982','June','Lists the 480, 481 and 483 as distinct configurations.'),{title:'Rickenbacker 481 And 480 Circuit References',url:'https://www.rickenbacker.com/guitar-schematics/',note:'Separate diagrams document the 481’s phase-switch circuit and the 480 circuit.'}]
 },
 {
 key:'4000-4001',name:'4000 And 4001',group:'Basses',period:'Original Basses, S Models And Export Variants',photoSet:'4003',comparison:'The photos show our 1989 4003, a later related bass. They illustrate inspection points and differences; they do not demonstrate original 1960s 4001 or horseshoe-pickup specifications.',
 intro:'A vintage 4001 needs more than a recognizable body and jackplate date. Early and later production can differ in pickups, inlays, binding and neck details. The one-pickup 4000, plainer S variants, export instruments and later vintage-style recreations also need to be separated before an originality claim or price makes sense.',
 variants:[['4000','One-pickup bass; an added neck pickup can imitate a different model.'],['4001','Two-pickup family with period-dependent construction and appointments.'],['4001S / Rose Morris 1999','Plainer and export variants; verify dots, binding, output and period details together.'],['4001FL / 4008','Fretless and eight-string variants need their own construction checks.'],['4001V63 / C64 / C64S','Later recreations; vintage-style hardware does not make them original 1960s basses.']],
 authentication:[
 section('Establish The Original Model Configuration','Photograph the body, full fingerboard, outputs and both sides of the headstock. Determine whether the bass began as a one-pickup 4000 or a two-pickup model. Added neck pickups may require routing and a replacement guard, so the present pickup count alone cannot settle that question.','Compare plain and deluxe appointments as a group. Dots, triangle inlays, binding and mono or stereo wiring should fit the claimed version. A bass lacking deluxe trim is not automatically a stripped 4001; it may belong to an S or export specification.'),
 section('Identify The Pickup Beneath The Cover','A chrome arch over a bridge pickup is not proof of an original horseshoe assembly. Our later 4003 has a cover over its bridge pickup, but that visual resemblance does not make it an early magnetic horseshoe. Inspect the actual pickup construction with appropriate help if its originality affects the price.','Neck pickup types and positions also need period comparison. Changes occurred across production, and older-looking replacement pickups are available. Avoid assigning an exact year from a toaster cover, binding pattern or inlay alone; check the serial and several independent construction details.'),
 section('Inspect The Neck Before Adjusting Anything','Check relief on both sides, action at normal tension and the condition of the fingerboard-to-neck joint. Ask about previous rod work, fingerboard lifting or neck repairs. Different Rickenbacker rod systems require different handling, so an unidentified older bass should not be adjusted by trial and error.','Photograph the bridge and tailpiece from the side. Look for lifting, extra mounting screws, replacement footprints and changed saddle travel. A newer bridge may improve adjustment but can also involve additional holes. Record the actual work rather than calling every replacement a reversible upgrade.'),
 section('Check Fretless, Eight-String And Reissue Claims','A factory fretless bass should be distinguished from a defretted one by the fingerboard, marker layout and evidence of filled slots. A conversion can play well but belongs in a different description. Eight-string conversions also require checking the headstock, nut and bridge construction.','For a V63 or C-series bass, use the manufacturing serial and model suffix together. Period-looking pickups or a reversed headstock can be deliberate reissue features. Keep documented export provenance separate from resemblance to an artist’s instrument.')
 ],
 valuation:[
  {
    "heading": "Do Not Give Every 4001 The Same Price",
    "paragraphs": [
      "A 1960s bass, an early-1970s transitional example and a later-1970s 4001 can attract different buyers. Match the period, exact variant, pickups, finish and structural condition. One-pickup 4000s, S models and factory fretless instruments should not be folded into a single average.",
      "The chart separates early instruments, transitional 1973 features and later production. Match the original finish where a color is specified. The 4000, 4001, factory fretless, S-series and later reissues each need their own row; an export-model claim also needs supporting identification."
    ]
  },
  {
    "heading": "Separate Wear From Expensive Neck Problems",
    "paragraphs": [
      "Buckle wear and finish checking are visible; truss-rod damage or a lifting fingerboard can be harder to assess remotely. A playable bass with documented cosmetic wear can be a better comparison than a shiny bass needing uncertain structural work. Obtain a specific repair assessment where needed.",
      "Changed pickups, a routed body or refinishing can alter collector interest. Keep replaced parts when available and explain what remains original. A good modern bridge does not erase the effect of additional holes, although it may be a useful feature for a player."
    ]
  },
  {
    "heading": "Document Color And Provenance Claims",
    "paragraphs": [
      "Confirm the original finish before assigning a rare-color premium. Compare the surface, period and protected areas. A photograph’s white balance can make the same bass look quite different, so an uncertain Autumnglo or Walnut description needs closer inspection.",
      "Send a full serial photo, pickup and tailpiece details, neck and fingerboard views, outputs and any repair records. For export, fretless or artist-associated claims, include supporting paperwork. An unsupported story should not be priced as documented provenance."
    ]
  }
],
 sources:[factory('1977','January','Period reference for 4000, 4001, fretless and multi-string variants.'),{title:'Rickenbacker Factory FAQ',url:'https://www.rickenbacker.com/faq/',note:'Explains differences between original horseshoe pickups, covers and later recreations.'},factory('1988','June','Lists the later 4001V63 separately from contemporary standard basses.')]
 },
 {
 key:'4003',name:'Vintage 4003 Basses',group:'Basses',period:'Early Production And 1980s Variants',photoSet:'4003',comparison:'The photographs show the blue 1989 4003 in our archive. Earlier 4003 construction and later modern features must be checked separately.',
 intro:'An early 4003 should be judged against its own production period, not a current bass with the same model name. Guard layout, truss-rod arrangement, hardware and electrical details changed over time. The 1989 example photographed here provides a useful reference, but it cannot establish every feature of an early-1980s instrument.',
 variants:[['4003','Standard two-pickup bass; record the actual production date.'],['4003S','Plainer variant with different appointments and output configuration.'],['4003FL','Factory fretless version; distinguish a later defret.'],['4003S/5 / S/8','Five-string and eight-string versions; check original neck and bridge construction.'],['Special Finishes And Trim','Black hardware, special colors and limited variants require period-specific evidence.']],
 authentication:[
 section('Date The Bass Before Comparing Features','Read the whole serial, including any letters on a separate line, then compare the guard, neck and hardware with that period. Some early 4003s use a two-piece pickguard associated with a different adjustment arrangement. Our 1989 bass represents a later point in the model’s development.','Do not assume an early bass was modified simply because it differs from a current specification. Equally, do not assume every later component was factory fitted. Document the individual parts and look for extra holes, altered mounting or changes in the finish around them.'),
 section('Compare The 4003 With The 4001 And S Models','The silhouette alone will not separate a late 4001 from an early 4003. Use the serial, neck system and period construction together. A swapped jackplate can create a misleading date, and a replacement guard can hide earlier holes.','Record binding, fretboard markers and output layout. Standard and S variants should not be forced into the same visual checklist. Test the bass through the appropriate output and record its actual functions. A later vintage-tone switch should not be assumed original to an early instrument.'),
 section('Inspect Pickups, Bridge And Neck Health','Our front close-up shows a neck Hi-Gain pickup with visible poles and a separate chrome cover over the bridge assembly. Photograph what is actually fitted; a shiny cover does not establish the pickup type below it. Check pickup output and control function through a clean amplifier.','Inspect tailpiece lift and saddle adjustment, then check neck relief on both sides. A lifted fingerboard edge, split near the neck or evidence of repeated rod work needs assessment. Do not force an adjustment to prove that a bass is healthy before selling it.'),
 section('Verify Special Versions And Original Finish','Black trim or unusual paint can be factory specification, owner customization or restoration. Photograph the entire bass and the hardware closely, and seek period documentation for a special-edition claim. Color appearance alone is unreliable under mixed lighting.','For five-string, eight-string or fretless versions, inspect the headstock, nut, bridge and fingerboard for conversions. A replacement guard or neck can change the configuration without changing the body’s serial plate. Describe what the instrument is now and what evidence supports its original identity.')
 ],
 valuation:[
  {
    "heading": "Use Early 4003 Comparisons For Early Basses",
    "paragraphs": [
      "Match the model variant, production period, finish, originality and neck condition. Standard 4003 basses, factory fretless examples and special editions belong in separate rows. An early manufacturing date alone does not settle the value of a particular bass.",
      "The standard-model row covers a broad production period and is a starting point, not a separate premium for every early year. Special editions, factory fretless basses and five- or eight-string versions have their own rows. Unusual early features or a disputed finish need an individual appraisal."
    ]
  },
  {
    "heading": "Consider Function Alongside Original Parts",
    "paragraphs": [
      "A working bridge, healthy neck and reliable pickups matter to players. Changed hardware can improve function, but extra holes, altered routes and refinishing can reduce collector appeal. Document both sides instead of describing every replacement as an upgrade that raises value.",
      "A split or lifting fingerboard needs a repair diagnosis. Subtracting an estimated repair bill from a clean example’s price may still overstate value because buyers also account for repair history and uncertainty. Use repaired comparisons where possible."
    ]
  },
  {
    "heading": "Support Special-Edition Premiums With Evidence",
    "paragraphs": [
      "An unusual color, black hardware or a limited-edition name should be supported by period details and a consistent serial. Ask whether the finish is original and whether all special components remain. A standard bass repainted to resemble a scarce version belongs in a modified category.",
      "For an appraisal, send the serial, complete front and back, both headstock faces, bridge side view, outputs and detailed neck photos. Include original parts and receipts. State whether you want a purchase offer or an estimate of market value."
    ]
  }
],
 sources:[factory('1988','June','Lists standard, S, fretless and multi-string 4003 versions.'),{title:'Rickenbacker Factory FAQ',url:'https://www.rickenbacker.com/faq/',note:'Explains early 4003 differences from the 4001, including the two-piece guard and neck system.'}]
 },
 {
 key:'4005',name:'Vintage 4005 Basses',group:'Basses',period:'Original Hollowbody Basses And Later Recreations',photoSet:'4005',comparison:'The photos show the 1968 Azureglo 4005 from Joe’s archive. They document this instrument; other years, WB versions and modern recreations differ.',
 intro:'The original 4005 combines a hollow body with a bass neck and a very different shape from the 4001. Its originality and condition need close inspection around the neck joint, bridge, binding and thin body edges. Later 4005-named instruments should be identified separately before choosing a value comparison.',
 variants:[['4005','Original hollowbody bass family; inspect the period’s pickups and appointments.'],['4005 WB','Double-bound body variant; confirm the actual body construction.'],['4005/6','Six-string bass version, not a standard six-string guitar.'],['4005XC / 4005V','Later models with their own specifications and manufacturing dates.']],
 authentication:[
 section('Confirm The Hollowbody Model And Version','Photograph the body outline, front and back edges, soundhole, depth and neck joint. Our blue 1968 example has a rounded front and decorative rear binding. A WB claim requires a body comparison that shows its different edge treatment, not merely a close-up of one strip of binding.','Count strings and tuning machines and measure the scale. A 4005/6 is not just a conventional guitar with the wrong strings. Later 4005XC and 4005V models also need their actual manufacturing date and specification; a familiar model number does not establish original-era construction.'),
 section('Inspect The Neck Joint And Bridge Relationship','Use side views to show string height over the body and the bridge’s adjustment room. The neck angle and bridge location affect both action and intonation. Look for moved hardware, filled holes, a changed bridge or evidence of a neck reset. Do not assume a bridge relocation is factory work because the bass now plays in tune.','Follow the heel and upper back closely for separation or repaired cracks. Our detailed rear views show the areas an appraiser needs to see. A repair should be described by its location and extent, with supporting photographs or invoices when available.'),
 section('Match Pickups, Controls And Outputs','The photographed bass has two toaster-style pickups and five controls. Other original-era 4005s can have different period hardware, so do not make this one example a universal specification. Test each pickup and output correctly, then document wiring changes or missing functions.','Check the R tailpiece and bridge for cracks, repairs and replacement parts. Look at the body beneath and beside their mounting points for evidence of previous hardware. A repaired tailpiece and a repaired body are separate findings and should not be combined into a vague note about wear.'),
 section('Inspect Binding, Finish And Tuner Footprints','The archive close-ups show checking, edge wear and rear binding clearly. Those photographs are more useful than a distant glossy front view for identifying condition. Examine loose binding, replaced sections and cracks around the soundhole or jack area.','Azureglo or another unusual color needs evidence of original finish before it receives a premium. Compare exposed and protected areas through a qualified inspection, and record any overspray. Rear headstock views can reveal changed tuner footprints even when the front appears untouched.')
 ],
 valuation:[
  {
    "heading": "Match The Original 4005 Configuration",
    "paragraphs": [
      "An original 4005, a double-bound WB and a modern recreation belong in different groups. The chart separates the original four-string bass from six- and eight-string versions. Match the production years and original finish where the row specifies a color.",
      "The ranges assume excellent, original condition. A moved bridge, fingerboard repair, changed pickups or refinishing needs an individual adjustment. The vintage rows do not apply to modern XC or V-series recreations, even where the body styling is similar."
    ]
  },
  {
    "heading": "Give Structural Condition A Full Description",
    "paragraphs": [
      "A neck reset, fingerboard reglue or moved bridge may be necessary repair work, but buyers need to know about it. Show the result and explain whether the bass now has usable action and accurate intonation. Obtain a repair assessment for any unresolved movement or separation.",
      "Original finish and pickups can matter to collectors, while worn frets or a broken case may be more straightforward to address. Evaluate each issue independently. There is no defensible universal percentage deduction that applies equally to a tuner swap, refinishing and a major neck repair."
    ]
  },
  {
    "heading": "Check Rare Colors And Repair History",
    "paragraphs": [
      "A scarce original color can affect demand, but a blue finish by itself does not prove a factory Azureglo example. Verify the finish and date before assigning a premium. The chart does not supply a separate Azureglo range, so an original-color claim should be reviewed individually.",
      "For an offer, include the full serial, body edges, heel, bridge side views, both headstock faces and clear photos of finish wear. Keep the original case and documentation with the bass. Explain any repairs a future owner will need to undertake."
    ]
  }
],
 sources:[factory('1977','January','Lists original-era 4005 and six-string bass variants.'),{title:'Joe’s 1968 Azureglo 4005 Archive Listing',url:'https://reverb.com/item/93803936-rickenbacker-4005-1968-azureglo',note:'The owned instrument pictured throughout this guide.'},{title:'Current Rickenbacker Guitar And Bass Models',url:'https://www.rickenbacker.com/guitars/',note:'Manufacturer descriptions identify modern recreations separately from original production.'}]
 },
 {
 key:'4002',name:'Vintage 4002 Basses',group:'Basses',period:'Original Deluxe Basses And Later Reissues',photoSet:'4003',comparison:'The photos show our 1989 4003 for general bass-condition comparisons. They do not show the 4002’s pickups, ebony fingerboard, binding or additional output.',
 intro:'An original 4002 is a distinct model, not simply a 4001 with upgraded pickups. Its construction details and unusual electronics require a model-specific inspection. Sparse listings also make it easy to mistake an ambitious asking price for established market value. Verify the identity first, then assess condition and comparable evidence.',
 variants:[['Original 4002','Deluxe bass with model-specific pickups, appointments and output system.'],['Later 4002 Reissues','Later instruments must be dated independently; the model name alone is insufficient.'],['Modified 4001 / 4003','Added pickups or electronics do not establish a factory 4002.']],
 authentication:[
 section('Check The Whole Deluxe Specification','Photograph the fingerboard, headstock edge, body binding, pickguard and pickup placement. Original 4002 examples use a distinctive combination of appointments, including an ebony board with dot markers and model-specific electronics. A dark fingerboard or unusual pickguard alone is not enough.','Compare the claimed instrument with a documented original example and a period factory reference. Our 4003 photos illustrate useful inspection angles only. A 4003’s triangle inlays and normal pickup placement are not evidence for a 4002 claim.'),
 section('Test The Model-Specific Electronics','Document every output and have the circuit tested with suitable equipment. The 4002’s additional low-impedance output and special pickups distinguish it from an ordinary two-pickup bass. A nonfunctioning output may indicate wiring trouble or a changed component rather than a simple cable issue.','Ask for internal photographs and service records when originality is part of the asking price. Replacement pickups, disconnected windings or a simplified harness can change both function and collector appeal. An added external socket does not prove the original factory circuit survives.'),
 section('Inspect The Neck, Binding And Hardware','Check relief on both sides, fret condition and action at playing tension. Look for fingerboard separation, repaired cracks and evidence of previous rod work. Photograph the bridge from the side and note any additional mounting holes or modern replacement assembly.','Inspect binding around the body and headstock for replaced sections or refinishing. Do not assume a clean-looking edge is untouched. Compare tuner footprints and the serial plate with the rest of the instrument, allowing for documented repairs rather than dismissing every changed part as a counterfeit.'),
 section('Separate Later Reissues From Original Production','Later 4002-named instruments exist, including documented 2026 dealer offerings. A familiar outline and deluxe trim cannot establish a 1970s date. Read the actual serial, inspect the current construction and request purchase documentation.','Avoid repeating production totals from listings as established fact. Published counts can conflict. For a specific bass, a consistent identity, clear provenance and documented condition are stronger evidence than an unsupported claim that it is one of a particular number.')
 ],
 valuation:[
  {
    "heading": "Value An Original 4002 As Its Own Model",
    "paragraphs": [
      "The chart applies to original 4002 production from 1977 to 1984 in excellent, original condition. This model’s electronics, appointments and construction need to be checked together before applying the range. A modified 4001 or 4003 does not become a 4002 because it has similar cosmetic details.",
      "Later recreations require a separate appraisal. The original-era range does not cover a modern reissue, an instrument with replacement model-specific pickups or a bass with unresolved structural repairs. Complete original electronics and documented condition are central to the estimate."
    ]
  },
  {
    "heading": "Evaluate Missing Electronics Before Setting A Price",
    "paragraphs": [
      "A changed or damaged model-specific pickup may be harder to replace correctly than a common control pot. Have the complete circuit tested and identify any absent functions. A bass that works through one output may still have substantial electrical changes.",
      "Structural condition also matters: binding work, a repaired neck and a replacement bridge should be documented individually. A restoration estimate helps define the cost, but restored condition may still attract a different buyer from an untouched example."
    ]
  },
  {
    "heading": "Use An Individual Appraisal For A Serious Sale",
    "paragraphs": [
      "Send the serial, full front and back, all outputs, pickup close-ups, fingerboard and binding details. Include service records and any original components that were removed. A short recording of all working output modes can supplement the photographs.",
      "For a scarce bass, the time available to find a buyer can affect an acceptable offer. Tell Joe whether you want an estimate of market value or an immediate purchase offer, and disclose any work that remains unresolved."
    ]
  }
],
 sources:[factory('1977','January','Lists the original deluxe 4002 with its special output arrangement.'),{title:'Rickenbacker 4002 Circuit Reference',url:'https://www.rickenbacker.com/guitar-schematics/',note:'Factory index includes a separate 4002 high- and low-impedance circuit.'},{title:'Documented 1979 4002',url:'https://www.ronsvintage.com/bass/rickenbacker-model-4002',note:'Owner’s instrument-specific photographs and description; production-count claims are not used here.'}]
 },
 {
 key:'3000-3001',name:'3000 And 3001 Basses',group:'Basses',period:'Short-Scale And Full-Scale Solidbodies',photoSet:'4003',comparison:'The photos show a 1989 4003 for general inspection and condition comparisons. It has different neck construction, pickups and hardware from a 3000 or 3001.',
 intro:'The 3000 and 3001 are distinct Rickenbacker bass designs with a smaller market than the familiar 4001. Their neck construction, scale and single-pickup electronics should be evaluated directly. A bolt-on neck is not evidence of a fake when it belongs to the correct model, and a 4001 price is not a useful substitute for a matched 3000-series comparison.',
 variants:[['3000','Short-scale bass; verify scale, neck and original control configuration.'],['3001','Full-scale relative with its own control arrangement.'],['Modified Examples','Replacement pickups, guards and bridges need explicit disclosure.']],
 authentication:[
 section('Measure The Scale And Inspect The Neck Joint','Measure nut to twelfth fret and double it, then photograph the neck attachment. The short-scale 3000 and full-scale 3001 should not be identified solely by a seller’s title. Their bolt-on construction differs from the familiar 4001/4003 layout.','Check neck alignment, the joint and screw area for cracks, enlarged holes or evidence of a replacement neck. A properly fitted original neck is part of the model’s identity. Our comparison 4003 photos cannot establish the correct joint or body shape for these basses.'),
 section('Verify The Single-Pickup Circuit','Photograph the pickup, guard, controls and output. Compare the specific model’s circuit rather than applying a standard four-knob 4001 checklist. The 3000 and 3001 can have different control arrangements, so record what each control actually does.','Look for altered pickup openings, added switches or a replacement guard concealing extra routes. A common aftermarket pickup may make a usable player, but its presence should be disclosed. Keep original pickup parts and wiring if they survive.'),
 section('Inspect The Bridge And Fingerboard','Check saddle adjustment, bridge mounting and string alignment along the fingerboard. Replacement hardware may leave a visible footprint or new screw holes. Test intonation and action at normal tension, and record any setup limitation.','Inspect the fingerboard surface and fretwork without assuming it should match the glossy board on a different Rickenbacker family. A refret, altered radius or replacement nut should be documented. Examine the rear headstock for changed tuners and repair evidence.'),
 section('Corroborate The Date And Finish','Use the complete serial alongside construction and any dated paperwork. A replacement plate can carry a plausible date while the neck or body tells a different story. Photograph labels and markings before cleaning or polishing them.','Check finish around the neck joint, pickup opening and hardware footprints. An attractive refinish is still a refinish. Keep plain wear, local touch-up and stripped or repainted surfaces in separate descriptions so a buyer can compare the bass accurately.')
 ],
 valuation:[
  {
    "heading": "Identify The 3000 Or 3001 Before Valuing It",
    "paragraphs": [
      "The short-scale 3000 and longer-scale 3001 serve different players. Measure the scale and confirm the neck, pickup and control layout before selecting the chart row. A 4001 or 4003 price is not a substitute for an appraisal of these designs.",
      "Both rows assume original instruments in excellent condition. The individual bass’s setup, neck attachment, electronics and repair history determine how closely it fits that assumption. A changed pickup or enlarged route can move it outside the range."
    ]
  },
  {
    "heading": "Allow For Originality And Practical Use",
    "paragraphs": [
      "A functioning original pickup, sound neck attachment and adjustable bridge support a straightforward sale. Replacement pickups, enlarged routes and extra switches can reduce collector interest even if a player likes the result. Describe modifications in terms a buyer can verify.",
      "Consider weight, balance, fret wear and action as well as cosmetics. A bass that needs work should be priced with a repair diagnosis rather than a vague promise of an easy setup. Original cases and loose parts add context but cannot compensate for undisclosed structural issues."
    ]
  },
  {
    "heading": "Build A Clear Selling Description",
    "paragraphs": [
      "State the measured scale, serial, control functions, modifications and known repairs. Include whole-instrument photos, neck-joint details and a close view of the bridge and pickup. Photograph the original case and any paperwork separately.",
      "Tell Joe whether you want a market-value estimate or a direct purchase offer. A specific appraisal can account for fret wear, missing parts and the work needed to make the bass reliable for its next player."
    ]
  }
],
 sources:[factory('1977','January','Separates the short-scale 3000 from the full-scale 3001.'),{title:'Rickenbacker 3000-Series Circuit Reference',url:'https://www.rickenbacker.com/guitar-schematics/',note:'Factory circuit index includes the 3000/3001 family; compare the actual model and period.'}]
 },
 {
 key:'frying-pan',name:'Frying Pan A-22 And A-25',group:'Lap Steels',period:'Early Cast-Aluminum Electric Steels',photoSet:'a22',comparison:'The photographs show the A-22 filed in Joe’s archive as a 1930s instrument. They document its casting, pickup, badge and wear; they do not independently establish an exact year or original coating.',
 intro:'An early Rickenbacher Frying Pan should be identified from its cast body, scale, pickup construction and surviving markings. Its round shape is recognizable, but later recreations and modified instruments can look similar at first glance. The condition of the casting and horseshoe pickup matters far more than a modern guitar serial-number decoder can tell you.',
 variants:[['A-22','Shorter-scale cast-aluminum Frying Pan family.'],['A-25','Longer-scale version; measure the instrument rather than trusting the listing title.'],['Six- And Seven-String Examples','Count original tuner positions and inspect evidence of later conversions.'],['Later Recreations','Similar instruments from later makers are not original Rickenbacher production.']],
 authentication:[
 section('Measure The Scale And Inspect The Casting','Measure from the nut to the bridge contact point and record the result. The original A-22 and A-25 families are associated with roughly 22.5-inch and 25-inch scales. A listing title can be wrong, especially on converted instruments. Photograph the entire front and back so the casting and neck proportions are visible.','Look for cracks, welding, ground surfaces or drilled holes in the aluminum. Our archive views show wear on the round body and rear neck. Wear itself does not date a casting, and a polished or repainted surface should not automatically be described as original.'),
 section('Document The Horseshoe Assembly','Photograph the pickup from above, from the side and around its mounting. On an original horseshoe design the magnetic structure is part of the pickup system. Do not treat it as an optional decorative cover or remove it casually. Have weak output assessed before deciding a pickup must be replaced.','Record visible patent markings, mounting details and any evidence of rewinding or repaired leads. A later replacement can resemble the original externally. Electrical resistance alone cannot prove a pickup’s age or originality; it must be considered with construction and service history.'),
 section('Read Badges And Numbers In Context','Early Rickenbacher spelling and Electro branding belong to the company’s history. Photograph the badge, headstock end and any stamped numbers. Do not feed an early steel’s marks into a later guitar decoder and present its output as a manufacturing date.','Use a combination of construction, pickup details, controls and period documentation to narrow the era. A removable badge or changed tuner set may be older or newer than the instrument. An exact-year claim should be supported by more than a familiar nameplate.'),
 section('Inspect Controls, Tuners And Conversions','Count original tuner holes and inspect the nut and bridge for added string positions. Extra tuners, drilled metal or a new nut can reveal a six-to-eight or other conversion. Such an instrument may still be playable, but it needs a modified description.','Check jack mounting, control holes and solder work. An added tone control changes originality even if it is useful. Inspect the case and any matching amplifier separately; a case or amplifier found with the steel does not by itself establish that they were sold together.')
 ],
 valuation:[
  {
    "heading": "Use The Correct Scale And Construction Group",
    "paragraphs": [
      "Compare an A-22 with documented A-22 examples and an A-25 with measured long-scale examples. Separate later recreations and converted instruments. A familiar round silhouette is not enough to borrow the price of an original early steel.",
      "The chart gives separate ranges for the early A-22 and A-25 groups shown. Confirm the scale length and supported era before applying a row. Added controls, repaired castings, converted string counts and extensive pickup work can put an instrument outside the original-condition range."
    ]
  },
  {
    "heading": "Assess The Casting And Pickup Before Cosmetics",
    "paragraphs": [
      "Cracked or altered aluminum, extra tuner holes and extensive pickup changes can affect both collectibility and practical use. A specialist’s diagnosis is useful when the pickup is weak or the instrument has been electrically modified. Replacing original parts without that assessment can remove evidence and create unnecessary cost.",
      "Surface wear, polishing and recoating should be described separately. An original case can add interest, but a deteriorated case may offer little protection for shipping. Value an accompanying amplifier on its own identity and condition before treating the pair as an original set."
    ]
  },
  {
    "heading": "Preserve The Evidence For An Appraisal",
    "paragraphs": [
      "Send full front and back views, measured scale, headstock end, badge, pickup, controls and close-ups of damage. Include a description of output and any known service work. Photograph loose parts and old paperwork rather than cleaning them first.",
      "Avoid an exact-year or rarity claim based on an uncertain online serial chart. An appraisal can state an era and its evidence without pretending to know a precise year. That clarity is more useful to a buyer than an unsupported early date."
    ]
  }
],
 sources:[{title:'Rickenbacker Company History: Early Electric Instruments',url:'https://www.rickenbacker.com/legacy/',note:'Manufacturer history describes cast-aluminum Frying Pans, scale options and early steel designs.'}]
 },
 {
 key:'bakelite-lap-steel',name:'Bakelite And Other Lap Steels',group:'Lap Steels',period:'Model B, BD, Panda And Related Steels',photoSet:'a22',comparison:'The photos show our cast-aluminum A-22, not a Bakelite Model B. They illustrate early horseshoe-pickup and inspection details. They do not show Model B construction.',
 intro:'Rickenbacher and Rickenbacker lap steels include Bakelite, metal and wood-bodied designs. A black-and-white “Panda” nickname does not establish an exact model or date, and not every horseshoe-equipped steel has a Bakelite body. Authentication starts with the material, construction, string count and pickup system before moving to badges, plate colors and value.',
 variants:[['Model B / B6 / B7','Bakelite family; distinguish string count and construction details.'],['BD And Panda Examples','Later versions and collector nicknames require inspection of the actual instrument.'],['Silver Hawaiian And Metal Models','Metal-bodied designs have different construction and condition concerns.'],['Model 100 / 102 / J6','Other steel models should be identified separately from Bakelite instruments.'],['Console And Double-Neck Steels','Count necks, strings and original stand or leg hardware; do not price as a single lap steel.']],
 authentication:[
 section('Identify The Body Material First','Photograph the front, rear, sides and neck joint. Bakelite construction should be distinguished from a painted wood body or a metal shell. Chrome or white plates can cover part of the surface, so their color is not enough to identify the material beneath. Our aluminum A-22 photos are a contrast, not a Model B construction reference.','Inspect for chips, cracks and repaired joints, especially around stress points and hardware mounting. A dark polished surface can hide damage in a distant photo. Use soft light and several angles without applying polish or chemicals to improve the appearance.'),
 section('Check String Count, Bridge And Pickup','Count the tuner positions and inspect the nut and bridge for added slots. A seven-string factory instrument and a converted six-string need different descriptions. Look for extra drilling, replaced plates or altered string anchoring. Photograph the pickup and its mounting in relation to the body.','A horseshoe pickup should be assessed as a complete assembly. Rewinds, replacement leads and changed magnetic parts need documentation. A working pickup does not prove untouched originality, while low output does not automatically mean the original unit must be discarded.'),
 section('Use Plates, Controls And Branding As A Group','Record plate material and color, control count, knob style, output location and badge spelling. These features can help place an instrument within a production period, but replaced plates and knobs can disrupt the pattern. Do not assign an exact date from the Panda nickname alone.','Early markings should be photographed in full and interpreted with appropriate period references. A later guitar serial chart may not apply. Original receipts, dated photographs and service records can narrow an era more reliably than a single removable cosmetic part.'),
 section('Distinguish Lap, Spanish And Console Designs','Some early instruments share materials or pickup ideas while serving different playing styles. Inspect the neck, string height and playing surface before calling a Bakelite instrument a lap steel or a fretted Spanish guitar. Motorized Vibrola instruments are a separate specialist category.','For double-neck or console models, document all necks, pickups, controls, legs and fittings. Missing original support hardware can affect usability and value. A stripped wood-bodied steel should be described as stripped or refinished rather than reclassified from its newly exposed color.')
 ],
 valuation:[
  {
    "heading": "Match Material, Model And Production Era",
    "paragraphs": [
      "A prewar Bakelite Model B, a later Panda, a wood-bodied student steel and a double-neck console belong in different comparison groups. Match string count and original pickup condition as well as appearance. A case or amplifier should be identified separately before assigning value to a package.",
      "The chart separates the Model B and BD from student models and steel- or wood-bodied instruments. The broad Model B row covers the stated production period; it does not assign a separate premium to every plate color or nickname. Cracks, missing parts and converted string counts need individual review."
    ]
  },
  {
    "heading": "Give Cracks And Missing Parts Full Weight",
    "paragraphs": [
      "A crack in Bakelite is different from a finish scratch, and an incomplete pickup assembly is different from a worn knob. Obtain a specialist repair assessment before assuming either can be restored cheaply. Some replacement work can make the steel usable while leaving a lasting collector-value difference.",
      "Original decorative plates, tuners and cases can matter, but their condition should be described accurately. Replaced tuner buttons are not the same as a fully changed tuner set with additional holes. Keep old parts with the instrument and photograph them separately."
    ]
  },
  {
    "heading": "Choose A Sale Description That Can Be Verified",
    "paragraphs": [
      "Include material, string count, visible marks, control functions, repairs and missing pieces. Send photographs of both sides, the pickup, neck joint, bridge, tuners and any cracks. If the exact year is uncertain, state the supported era instead.",
      "For an uncommon console, motorized model or unusually early steel, seek an individual appraisal. The chart only covers the configurations and years shown. Clear documentation and an accurate condition description give both buyer and seller a better basis for discussing price."
    ]
  }
],
 sources:[{title:'Rickenbacker Company History: Bakelite And Steel Models',url:'https://www.rickenbacker.com/legacy/',note:'Manufacturer background on the different early materials and instrument designs.'},{title:'1937-Labeled Model B6, Cream City Music',url:'https://www.creamcitymusic.com/vintage-rickenbacker-electro-model-b6-lap-steel-1937/',note:'Dealer examination of a specific Bakelite example, including its replaced tuners.'},{title:'Joe’s B6 Panda Photo Listing',url:'https://reverb.com/item/85283504-rickenbacker-b6-panda-1950s-black',note:'Model-specific photos from Joe’s sold instrument archive.'}]
 },
];
export const rickenbackerGuideSlug=(model:ModelGuide,kind:'authentication'|'value')=>`rickenbacker-${model.key}-${kind}-guide`;
