import type { ImageMetadata } from "astro";

import fenderHero from "../assets/images/appraisal-spokes/fender-portrait.jpg";
import fenderSerial from "../assets/images/appraisal-spokes/details/fender-serial.jpg";
import fenderHardware from "../assets/images/appraisal-spokes/details/fender-neck-plate.jpg";
import gibsonHero from "../assets/images/appraisal-spokes/gibson-portrait.jpg";
import gibsonSerial from "../assets/images/appraisal-spokes/details/gibson-serial.jpg";
import gibsonPickup from "../assets/images/appraisal-spokes/details/gibson-pickup.jpg";
import martinHero from "../assets/images/appraisal-spokes/martin-portrait.jpg";
import martinStamp from "../assets/images/appraisal-spokes/details/martin-headstock-stamp.jpg";
import martinCenterStrip from "../assets/images/appraisal-spokes/details/martin-center-strip.jpg";
import gretschHero from "../assets/images/appraisal-spokes/gretsch-portrait.jpg";
import gretschSerial from "../assets/images/appraisal-spokes/details/gretsch-serial.jpg";
import gretschPickup from "../assets/images/appraisal-spokes/details/gretsch-pickup.jpg";
import guildHero from "../assets/images/appraisal-spokes/guild-portrait.jpg";
import guildModel from "../assets/images/appraisal-spokes/details/guild-model-details.jpg";
import guildCondition from "../assets/images/appraisal-spokes/details/guild-hardware-condition.jpg";
import rickenbackerHero from "../assets/images/appraisal-spokes/rickenbacker-portrait.jpg";
import rickenbackerSerial from "../assets/images/appraisal-spokes/details/rickenbacker-serial.jpg";
import rickenbackerPickup from "../assets/images/appraisal-spokes/details/rickenbacker-pickup.jpg";

export interface AppraisalLink {
  href: string;
  label: string;
}

export interface AppraisalPage {
  slug: string;
  brand: string;
  description: string;
  heroText: string;
  heroImage: ImageMetadata;
  ogImage: string;
  heroAlt: string;
  heroCaption: string;
  appraisalNotes: {
    heading: string;
    paragraphs: string[];
    checks: string[];
  };
  photoIntro: string;
  serialGuide: AppraisalLink;
  photoList: string[];
  evidence: Array<{
    image: ImageMetadata;
    alt: string;
    title: string;
    body: string;
  }>;
  factors: Array<{ title: string; body: string }>;
  valueGuide: AppraisalLink;
  models: string[];
  process: Array<{ title: string; body: string }>;
  resources: Array<AppraisalLink & { body: string }>;
  review: {
    name: string;
    body: string;
    href: string;
  };
  faqs: Array<{ q: string; a: string }>;
}

const jimReview = {
  name: "Jim W. in Pennsylvania",
  body: "I included a description of my guitar including serial number and a couple of photos. He responded immediately with a real pleasant email and gave me a value on my guitar.",
  href: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURtN192ejFBRRAB!2m1!1s0x0:0x69728d089b8a764!3m1!1s2@1:CIHM0ogKEICAgIDm7_vz1AE%7C%7C?hl=en",
};

export const appraisalPages: AppraisalPage[] = [
  {
    slug: "fender",
    brand: "Fender",
    description: "Get a free Fender guitar appraisal from Joe Dampt. Send photos for help identifying the model, period, finish, original parts, and current market value.",
    heroText: "Send clear photos and every number you can find. I will identify the model and period, check the finish and original parts, and give you a value range based on recent sales.",
    heroImage: fenderHero,
    ogImage: "/images/og/appraisal/fender-guitar-appraisal.jpg",
    heroAlt: "Vintage 1959 Fender Telecaster shown full length in its case",
    heroCaption: "For a vintage Fender, the model, date, finish, and original parts all matter.",
    appraisalNotes: {
      heading: "How I Narrow Down a Vintage Fender",
      paragraphs: [
        "A Fender serial number can live on a bridge plate, neck plate, or headstock, depending on the period. Plates and necks can also move from one guitar to another. I use the number to establish a possible date range, then compare it with the logo, neck construction, body routes, hardware, and model features. A plate that dates to 1963 does not make the whole guitar a 1963 Fender if the rest of the instrument tells a later story.",
        "Finish work is often where the largest value difference appears. I look at paint in the neck pocket and cavities, undercoat at worn edges, checking, nail holes, shadow lines, and the way color sits beneath hardware. A real custom color, a later overspray, and a complete refinish need different comparisons. Natural play wear can be valuable evidence, so I do not want the guitar polished or cleaned before I see it.",
        "The hidden dates should make sense as a group. Neck dates, body dates, pot codes, pickup markings, cloth or plastic wire, pickguard screw patterns, tuners, and bridge details rarely point to one exact day, but they can support the same production window. Legitimate factory overlap happens, especially during transition years, so I do not reject a guitar because one part changed a few months before another.",
        "Once the identity is sound, I compare the guitar with the right buyer group. A pre-CBS custom-color Stratocaster, a blackguard Telecaster, a clean offset, and a modified 1970s bass are separate markets. The appraisal reflects the exact model, period, finish, original parts, repair history, case, and current demand rather than a broad Fender price range.",
      ],
      checks: [
        "Serial location and number format fit the claimed period",
        "Neck, body, pickup, and potentiometer dates tell a coherent story",
        "Finish evidence supports original color, overspray, or refinish",
        "Hardware, plastics, electronics, and case match the model and era",
      ],
    },
    photoIntro: "The neck plate or bridge plate is one clue, but it may not settle the date. I may also check the neck heel, body cavities, potentiometers, pickups, hardware, and finish.",
    serialGuide: { href: "/fender-guitars-serial-number-guide/", label: "Fender serial number and dating guide" },
    photoList: [
      "The complete front and back of the instrument",
      "The front and back of the headstock",
      "The neck plate, bridge plate, or visible serial number",
      "Close photos of the finish, pickguard, bridge, tuners, and pickups",
      "Any repair, crack, overspray, routing, or replaced part",
      "The case, tags, receipts, and family photographs if available",
    ],
    evidence: [
      { image: fenderSerial, alt: "Vintage Fender neck plate with a visible serial number", title: "Serial Number Location", body: "A clear photo of the neck plate or bridge plate gives me one date clue." },
      { image: fenderHardware, alt: "Close view of a vintage Fender neck plate, finish, and hardware", title: "Finish and Hardware Details", body: "Finish edges, screws, plates, and wear help me spot changed parts or later finish work." },
    ],
    factors: [
      { title: "Model and Production Period", body: "A Stratocaster, Telecaster, Esquire, offset, or bass needs the right comparison group. Construction changes can narrow the date beyond the serial number." },
      { title: "Original Finish and Color", body: "An original custom color can add value. A refinish, overspray, or touchup puts the guitar in a different part of the market." },
      { title: "Parts and Electronics", body: "I check the pickup, pot, bridge, tuner, pickguard, and wiring details. Their dates should make sense together." },
      { title: "Condition and Repairs", body: "Refrets, routed bodies, changed pickups, neck work, and repaired damage do not have the same effect on every Fender." },
    ],
    valueGuide: { href: "/vintage-fender-stratocaster-value-guide/", label: "Vintage Stratocaster Value Guide" },
    models: ["Stratocaster", "Telecaster", "Esquire", "Jazzmaster", "Jaguar", "Mustang", "Precision Bass", "Jazz Bass", "Coronado", "Vintage Fender Amplifiers"],
    process: [
      { title: "Send the Fender Clues", body: "Start with the full front and back, headstock, neck or bridge plate, finish wear, controls, and case. Leave the neck and pickguard in place unless I later ask for a safe detail." },
      { title: "I Match the Dates and Features", body: "I compare the serial range with the model, logo, neck and body construction, hardware, electronics, and finish evidence to establish the most defensible production period." },
      { title: "I Compare the Correct Fender Market", body: "I place the guitar with sales of the same model, era, finish status, originality, and repair level, then explain the value range and any detail that moved it." },
    ],
    resources: [
      { href: "/fender-guitars-serial-number-guide/", label: "Fender Serial Numbers and Dating", body: "Find the serial number and the other dates that may confirm the year." },
      { href: "/vintage-fender-stratocaster-value-guide/", label: "Vintage Stratocaster Value Guide", body: "See how year, color, condition, and original parts affect Stratocaster values." },
      { href: "/vintage-fender-telecaster-value-guide/", label: "Vintage Telecaster Value Guide", body: "Read about the features and repairs that matter on a vintage Telecaster." },
      { href: "/sell-my-fender-guitar/", label: "Sell My Fender Guitar", body: "Ask me for a separate cash offer after the appraisal." },
    ],
    review: jimReview,
    faqs: [
      { q: "Can You Appraise My Fender From Photos?", a: "Yes. Clear photos and a short description are usually enough to begin. I may ask for a closer view of the neck plate, finish, or electronics." },
      { q: "Do I Need to Remove the Fender Neck or Pickguard?", a: "No. Do not take the guitar apart for the first request. Send the photos you can take safely, and I will tell you if I need another detail." },
      { q: "Does a Fender Serial Number Set the Value?", a: "No. It gives me a possible production period. The model, finish, original parts, condition, repairs, and current demand determine the value." },
      { q: "Can a Refinished Fender Still Be Valuable?", a: "Yes. A refinish usually lowers collector value, but a desirable model with good original parts can still be worth plenty." },
    ],
  },
  {
    slug: "gibson",
    brand: "Gibson",
    description: "Get a free Gibson guitar appraisal from Joe Dampt. Send photos for help identifying the model, year, original parts, repairs, and current market value.",
    heroText: "A Gibson serial number is a starting point. I also check the model, construction, finish, hardware, electronics, repairs, and recent sales before I give you a value range.",
    heroImage: gibsonHero,
    ogImage: "/images/og/appraisal/gibson-guitar-appraisal.jpg",
    heroAlt: "Vintage 1958 Gibson Les Paul Custom shown full length in its case",
    heroCaption: "For a vintage Gibson, the model, period, finish, electronics, and repair history all matter.",
    appraisalNotes: {
      heading: "How I Read the Evidence on a Vintage Gibson",
      paragraphs: [
        "Gibson used several numbering systems, reused ranges, and sometimes shipped instruments after the parts were made. Depending on the guitar, I may need an ink-stamped serial, an impressed headstock number, a factory order number, or an interior label. I compare that marking with the logo, headstock shape, neck construction, body outline, binding, and factory specifications before assigning a production period.",
        "Model identification comes before price. A Les Paul Standard, Custom, Special, Junior, SG, ES model, archtop, and flat top can share a date range while belonging to completely different markets. Small details such as neck angle, pickup route, bridge type, top carve, bracing, inlays, and control layout can separate a valuable factory specification from a later conversion.",
        "Pickups and electronics deserve close attention. P-90s, Patent Applied For humbuckers, Patent Number pickups, wiring harnesses, potentiometer codes, solder joints, tuners, bridges, and tailpieces should be appropriate for the model and period. I do not assume every old-looking part was installed at the factory, and I also account for normal factory overlap instead of forcing every guitar into a rigid checklist.",
        "Headstock repairs, neck breaks, overspray, refinishing, changed pickups, and routed bodies can move the value substantially without making the guitar worthless. I judge how extensive the work is, whether it is stable, what original material remains, and which buyers still pursue that model. The final comparison is made with Gibsons that share those same strengths and limitations.",
      ],
      checks: [
        "Serial, factory order number, or label agrees with the construction",
        "Logo, headstock, neck joint, binding, and body match the model period",
        "Pickups, solder, controls, bridge, tailpiece, and tuners are evaluated",
        "Repairs and finish work are compared with similar market examples",
      ],
    },
    photoIntro: "Gibson reused some serial numbers and changed its numbering systems over time. Older instruments may also have factory order numbers or interior labels. I compare those markings with the construction and specifications in your photos.",
    serialGuide: { href: "/how-to-read-gibson-serial-numbers/", label: "Gibson serial number guide" },
    photoList: [
      "The complete front and back of the guitar",
      "The front and back of the headstock, including the serial number",
      "The neck joint, heel, and any repaired break or crack",
      "The pickups, bridge, tailpiece, tuners, knobs, and control layout",
      "Interior labels or factory markings on acoustic and hollowbody models",
      "The case, paperwork, replaced parts, and known repair history",
    ],
    evidence: [
      { image: gibsonSerial, alt: "Ink stamped serial number on a vintage Gibson headstock", title: "Serial Number and Headstock", body: "I compare the number with the logo, headstock construction, finish, and other period details." },
      { image: gibsonPickup, alt: "Patent Applied For pickup on a vintage Gibson guitar", title: "Pickup and Electronics Details", body: "Pickup type, covers, solder, wiring, and controls can make a large difference in value." },
    ],
    factors: [
      { title: "Model, Year, and Factory Details", body: "Les Pauls, SGs, ES models, archtops, flat tops, and mandolins have different markets. Construction details help me confirm the period and specification." },
      { title: "Finish and Color", body: "Original sunbursts, Goldtops, custom colors, and other factory finishes sell differently from refinished or oversprayed examples." },
      { title: "Pickups and Hardware", body: "I check the pickups, tuners, bridge, tailpiece, knobs, wiring, and solder. One changed part may matter more than another." },
      { title: "Neck and Structural Repairs", body: "A repaired headstock or neck break does not make a Gibson worthless. Its location, stability, appearance, and repair quality affect the price." },
    ],
    valueGuide: { href: "/vintage-gibson-les-paul-market-value-guide/", label: "Vintage Les Paul Market Value Guide" },
    models: ["Les Paul", "SG", "ES-335", "ES-175", "L-5", "Super 400", "J-45", "Hummingbird", "Southern Jumbo", "Firebird", "Explorer", "Flying V", "EB Basses", "Mandolins"],
    process: [
      { title: "Show the Gibson Markings", body: "Send the full guitar, both sides of the headstock, serial or label, neck joint, pickups, controls, hardware, finish, case, and every visible repair." },
      { title: "I Identify the Model and Factory Period", body: "I compare the numbering system with construction, logo, hardware, electronics, and finish so reused serials or replaced parts do not lead to the wrong year." },
      { title: "I Price the Actual Configuration", body: "The value range comes from sales of Gibsons with the same model, period, finish status, pickup and hardware originality, structural history, and condition." },
    ],
    resources: [
      { href: "/how-to-read-gibson-serial-numbers/", label: "Gibson Serial Numbers and Dating", body: "Check common Gibson serial formats and the limits of dating from one number." },
      { href: "/vintage-gibson-les-paul-market-value-guide/", label: "Vintage Les Paul Market Value Guide", body: "See the details that separate Les Paul models, periods, and price levels." },
      { href: "/post/what-a-serial-number-cant-tell-you/", label: "What a Serial Number Cannot Tell You", body: "Read why the finish, construction, hardware, and electronics still need inspection." },
      { href: "/sell-my-gibson-guitar/", label: "Sell My Gibson Guitar", body: "Ask me for a separate cash offer after the appraisal." },
    ],
    review: {
      name: "Mateo Cavestany",
      body: "Joe gave me an accurate and fair appraisal for my vintage Gibson.",
      href: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNfbW9UNVZ3EAE!2m1!1s0x0:0x69728d089b8a764!3m1!1s2@1:CIHM0ogKEICAgIC_moT5Vw%7C%7C?hl=en",
    },
    faqs: [
      { q: "Can You Appraise My Gibson From Photos?", a: "Yes. Clear photos of the full guitar, headstock, serial number, hardware, electronics, finish, and repairs are usually enough to begin." },
      { q: "Does the Gibson Serial Number Confirm the Year?", a: "Not always. Gibson reused numbers and changed systems. I compare the number with construction, hardware, electronics, and finish details." },
      { q: "Does a Repaired Headstock End the Value?", a: "No. I consider the model, the location and quality of the repair, how stable it is, and how the rest of the guitar compares with the market." },
      { q: "Should I Remove the Pickups Before Sending Photos?", a: "No. Send safe exterior photos first. I will tell you if an additional detail is needed." },
    ],
  },
  {
    slug: "martin",
    brand: "Martin",
    description: "Get a free Martin guitar appraisal from Joe Dampt. Send photos for help identifying the model, year, woods, repairs, originality, and current market value.",
    heroText: "A Martin serial number can date the guitar, but it cannot establish the value by itself. I also check the model, woods, construction, originality, repairs, condition, and recent sales.",
    heroImage: martinHero,
    ogImage: "/images/og/appraisal/martin-guitar-appraisal.jpg",
    heroAlt: "Vintage 1949 Martin 0-18 acoustic guitar shown full length",
    heroCaption: "For a vintage Martin, the model, year, wood, repair history, and structural condition all matter.",
    appraisalNotes: {
      heading: "How I Appraise an Older Martin",
      paragraphs: [
        "The neck block usually gives me the model and serial number, which makes Martin easier to date than many brands. That is only the first step. A D-28, 000-18, OM-28, 00-21, and size 0 guitar from the same decade can have very different construction, woods, scarcity, and demand. I verify that the stamp, body size, trim, headstock, tuners, and interior construction agree with the model named on the block.",
        "Wood and bracing can define the market. Brazilian rosewood, mahogany, Adirondack spruce, Sitka spruce, forward-shifted or rear-shifted bracing, scalloped braces, and wartime changes matter at specific dates. Photographs through the soundhole can show the center strip, bridge plate, brace shape, repairs, and replacement work. I use those details to keep an early guitar out of a later comparison group.",
        "Old Martins often need maintenance, and repair history needs context. A well-executed neck reset can preserve playability without carrying the same penalty as a shaved bridge, oversized replacement bridge, damaged bridge plate, heavy overspray, or poorly repaired cracks. I look at top movement, neck angle, saddle height, cracks, pickguard shrinkage, binding, finish, and previous work together rather than treating every repair alike.",
        "The appraisal also separates family history from market evidence. An original case, receipts, photographs, correspondence, and repair records help document the guitar, while completed sales show what buyers paid for comparable examples. The final range reflects the exact model, production year, woods, structural health, originality, repairs, and current demand for that part of the Martin market.",
      ],
      checks: [
        "Neck block model and serial number are photographed clearly",
        "Body size, woods, bracing, trim, bridge, and pickguard fit the period",
        "Neck angle, top movement, cracks, bridge plate, and old repairs are assessed",
        "Case, documents, provenance, and replaced parts stay with the guitar",
      ],
    },
    photoIntro: "The serial number and model stamp are usually on the neck block inside the soundhole. I also check the headstock, bridge, pickguard, top, back, sides, bracing, finish, and repair history.",
    serialGuide: { href: "/martin-serial-and-model-numbers/", label: "Martin serial and model number guide" },
    photoList: [
      "The complete front and back of the guitar",
      "The front and back of the headstock",
      "The neck block model and serial number",
      "The bridge, saddle, pickguard, soundhole, and top wear",
      "The back, sides, neck joint, binding, cracks, and repairs",
      "The case, paperwork, replaced parts, and family history",
    ],
    evidence: [
      { image: martinStamp, alt: "Vintage Martin headstock stamp and tuner detail", title: "Headstock and Tuner Details", body: "The logo, stamp, tuners, and finish help me check the period and original specification." },
      { image: martinCenterStrip, alt: "Martin center strip stamp viewed through the soundhole", title: "Interior Construction", body: "The center strip, neck block, bracing, bridge plate, and repair work help me assess originality and condition." },
    ],
    factors: [
      { title: "Model, Year, and Body Size", body: "A D-18, D-28, 0, 00, 000, or OM belongs to a different market. The production period and exact model define the comparison group." },
      { title: "Tonewoods and Construction", body: "Brazilian rosewood, mahogany, Adirondack spruce, bracing, and other period specifications can make a major difference in value." },
      { title: "Originality and Finish", body: "I check the finish, bridge, pickguard, tuners, bridge plate, and interior work. Replaced parts do not all affect value in the same way." },
      { title: "Structural Condition", body: "Neck resets, cracks, top movement, bridge work, binding repairs, and overspray matter, but well done maintenance is not the same as damage." },
    ],
    valueGuide: { href: "/martin-d-28-d-18-d-45-dreadnought-value-guide/", label: "Martin Dreadnought Value Guide" },
    models: ["D-18", "D-28", "D-35", "D-45", "0-18", "00-18", "000-18", "000-28", "OM-18", "OM-28", "00-21", "000-21", "12-Fret Martins"],
    process: [
      { title: "Photograph the Martin Inside and Out", body: "Include the complete guitar, neck block stamp, headstock, bridge and saddle, top, back, sides, neck joint, cracks, repairs, case, and paperwork." },
      { title: "I Establish the Specification", body: "The serial year is checked against the model, body size, woods, bracing, trim, hardware, finish, and interior work to identify the correct Martin period." },
      { title: "I Account for Structure and Maintenance", body: "I compare guitars with similar neck angle, crack and bridge history, finish condition, originality, and documentation before giving you the current market range." },
    ],
    resources: [
      { href: "/martin-serial-and-model-numbers/", label: "Martin Serial and Model Numbers", body: "Find the neck block stamp and use the serial number to confirm the year." },
      { href: "/martin-d-28-d-18-d-45-dreadnought-value-guide/", label: "Martin Dreadnought Value Guide", body: "Compare the periods and specifications that affect D-18, D-28, and D-45 values." },
      { href: "/post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/", label: "How to Value an Old Martin", body: "Learn why woods, originality, repairs, and condition matter after the year is known." },
      { href: "/sell-my-martin-guitar/", label: "Sell My Martin Guitar", body: "Ask me for a separate cash offer after the appraisal." },
    ],
    review: {
      name: "Tony Michaud",
      body: "They took the time to look at the photos of my Martin D18 and emailed back an appraisal.",
      href: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURMc2E2dTRRRRAB!2m1!1s0x0:0x69728d089b8a764!3m1!1s2@1:CIHM0ogKEICAgIDLsa6u4QE%7C%7C?hl=en",
    },
    faqs: [
      { q: "Can You Appraise My Martin From Photos?", a: "Yes. Clear photos of the complete guitar, neck block stamp, headstock, bridge, finish, cracks, and repairs are usually enough to begin." },
      { q: "Does the Serial Number Tell Me What the Martin Is Worth?", a: "No. It confirms a production year. The model, woods, originality, structural condition, repairs, and current demand determine the value." },
      { q: "Does a Neck Reset Hurt the Value?", a: "A well done neck reset is common maintenance on an older Martin. Poor work, changed geometry, or damage around the joint may affect value more." },
      { q: "Should I Repair Cracks Before the Appraisal?", a: "No. Send photos first. I can help you understand which repairs may be needed and how they affect the market." },
    ],
  },
  {
    slug: "gretsch",
    brand: "Gretsch",
    description: "Get a free Gretsch guitar appraisal from Joe Dampt. Send photos for help identifying the model, year, original parts, repairs, and current market value.",
    heroText: "For a Gretsch appraisal, I check the serial number, model features, pickups, hardware, finish, binding, repairs, and completed sales of comparable guitars.",
    heroImage: gretschHero,
    ogImage: "/images/og/appraisal/gretsch-guitar-appraisal.jpg",
    heroAlt: "Vintage 1959 Gretsch 6120 shown full length in its case",
    heroCaption: "A vintage Gretsch needs the right model, production period, pickups, hardware, and condition comparison.",
    appraisalNotes: {
      heading: "How I Separate Gretsch Models and Periods",
      paragraphs: [
        "Gretsch serial numbers appear on interior labels, headstocks, and other locations depending on the era. Some systems overlap, and labels can become faint or disappear. I compare the number with the label style, body depth, cutaway, headstock, logo, inlays, control layout, and model features before settling on a production window. On a Gretsch, the surrounding specification is often more useful than the number by itself.",
        "Pickups and hardware are major date and value clues. DeArmond Dynasonics, FilterTrons, HiLoTrons, and SuperTrons belong to different models and periods. Bridges, Bigsby units, G tailpieces, knobs, switches, tuners, pickguards, and thumbnail or hump-block inlays help establish what the guitar was when it left the factory. I also look for extra holes or routing that show a later conversion.",
        "Binding condition deserves its own part of the appraisal. Celluloid binding can shrink, crack, crumble, or separate even when the rest of the guitar looks clean. A localized repair is different from a full rebinding, and the cost of making a guitar stable can change what a buyer will pay. Neck resets, top movement, repaired cracks, finish work, and deteriorated pickguards also need to be priced by extent and quality.",
        "Gretsch values are model specific. A 1950s 6120, White Falcon, Duo Jet, Country Club, and a Baldwin-era guitar do not move together. After identifying the model and condition, I compare the instrument with sales from the same construction period, pickup configuration, finish, hardware setup, originality level, and repair category.",
      ],
      checks: [
        "Serial format, label, logo, inlays, and body construction agree",
        "Pickup type, controls, bridge, tailpiece or Bigsby, and tuners are checked",
        "Binding deterioration and structural repair needs are priced separately",
        "The guitar is compared with the same model family and production era",
      ],
    },
    photoIntro: "Gretsch serial number locations and formats changed over time. I compare the number with the label, headstock, body shape, inlays, pickups, controls, hardware, and construction.",
    serialGuide: { href: "/gretsch-serial-number-lookup/", label: "Gretsch serial number lookup" },
    photoList: [
      "The complete front and back of the guitar",
      "The front and back of the headstock",
      "The interior label or visible serial number",
      "The pickups, bridge, Bigsby, tailpiece, tuners, and controls",
      "The binding, finish, neck joint, cracks, and repairs",
      "The case, paperwork, replaced parts, and known history",
    ],
    evidence: [
      { image: gretschSerial, alt: "Vintage Gretsch interior label with serial number", title: "Label and Serial Number", body: "The label and serial number help with the date when the model features agree with that period." },
      { image: gretschPickup, alt: "Vintage Gretsch pickup and body detail", title: "Pickups and Hardware", body: "Pickup type, bridge, tailpiece, controls, inlays, and trim help define the model and originality." },
    ],
    factors: [
      { title: "Model and Production Period", body: "A 6120, Duo Jet, White Falcon, Country Gentleman, or Tennessean belongs to a different market. Period details help confirm the exact version." },
      { title: "Pickups and Electronics", body: "Dynasonic, FilterTron, HiLoTron, and SuperTron pickups have different periods and markets. Original wiring and controls also matter." },
      { title: "Finish, Binding, and Hardware", body: "Original finish, binding condition, Bigsby type, bridge, knobs, tuners, and case all help place the guitar in the right value range." },
      { title: "Condition and Repairs", body: "Binding deterioration, neck resets, top movement, cracks, refinishing, and changed parts affect each Gretsch model differently." },
    ],
    valueGuide: { href: "/post/gretsch-6120-history-value/", label: "Gretsch 6120 History and Value Guide" },
    models: ["6120", "Duo Jet", "White Falcon", "Country Gentleman", "Tennessean", "Country Club", "Anniversary", "Viking", "Chet Atkins Models", "Vintage Gretsch Basses"],
    process: [
      { title: "Show the Label and Gretsch Features", body: "Send the full body, headstock, label or serial, inlays, pickups, control layout, bridge, tailpiece or Bigsby, binding, neck joint, and case." },
      { title: "I Match the Model to Its Period", body: "I compare the number with construction, logo, inlays, pickups, hardware, and control layout, then note later parts, finish work, or conversions." },
      { title: "I Price Condition and Binding Correctly", body: "The value range uses sales of the same Gretsch model and era while accounting for originality, binding stability, structural work, finish, and case." },
    ],
    resources: [
      { href: "/gretsch-serial-number-lookup/", label: "Gretsch Serial Number Lookup", body: "Find the serial number and compare the common label and numbering systems." },
      { href: "/post/gretsch-6120-history-value/", label: "Gretsch 6120 History and Value", body: "See how pickups, hardware, inlays, and production changes affect a 6120." },
      { href: "/post/gretsch-duo-jet-history-value/", label: "Gretsch Duo Jet History and Value", body: "Read about the details that separate Duo Jet periods and versions." },
      { href: "/sell-my-gretsch-guitar/", label: "Sell My Gretsch Guitar", body: "Ask me for a separate cash offer after the appraisal." },
    ],
    review: {
      name: "John Haverlin",
      body: "Had him set up my Les Paul and Gretsch and he did a superb job. Look forward to coming back to him again in the future.",
      href: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNLN2JqMzVRRRAB!2m1!1s0x0:0x69728d089b8a764!3m1!1s2@1:CIHM0ogKEICAgICK7bj35QE%7C%7C?hl=en",
    },
    faqs: [
      { q: "Can You Appraise My Gretsch From Photos?", a: "Yes. Send the full guitar, serial number or label, headstock, pickups, hardware, finish, binding, and any repairs." },
      { q: "Does Binding Rot Make a Gretsch Worthless?", a: "No. Binding condition matters, but the model, year, originality, repair quality, and overall condition still determine the market." },
      { q: "Do Changed Pickups or a Replacement Bigsby Affect Value?", a: "They can. I look at the exact parts, whether the guitar was drilled or altered, and what original pieces remain." },
      { q: "Should I Clean or Repair It Before Sending Photos?", a: "No major work is needed. Photograph it as it is so I can see the finish, wear, binding, and old parts clearly." },
    ],
  },
  {
    slug: "guild",
    brand: "Guild",
    description: "Get a free Guild guitar appraisal from Joe Dampt. Send photos for help identifying the model, factory period, original parts, repairs, and current market value.",
    heroText: "For a Guild appraisal, I check the factory period, model, construction, woods, pickups, hardware, finish, repair history, and recent sales.",
    heroImage: guildHero,
    ogImage: "/images/og/appraisal/guild-guitar-appraisal.jpg",
    heroAlt: "Vintage 1950s Guild X-175 shown full length in its case",
    heroCaption: "New York, Hoboken, and Westerly Guilds each have details that help establish identity and value.",
    appraisalNotes: {
      heading: "How I Place a Vintage Guild in the Right Market",
      paragraphs: [
        "Guild moved through New York, Hoboken, and Westerly production, and each period has its own labels, serial ranges, construction, materials, and model lineup. I start with the serial and label, then compare the body shape, headstock, logo, trim, neck joint, woods, and hardware. That keeps an instrument from being dated only by a chart when its construction points to a different factory period.",
        "The Guild catalog is broad. An X-175 archtop, Starfire electric, Thunderbird, M-20, D-40, F-50, and 12-string jumbo need different evidence and different comparable sales. For electrics I pay close attention to pickups, controls, bridges, tailpieces, tuners, and body construction. For acoustics I focus more on woods, bracing, bridge work, neck angle, cracks, and top condition.",
        "Repairs also carry different weight across the range. A clean neck reset on a working acoustic is not the same as a broken headstock on an electric, a replaced bridge plate, broad overspray, or a full refinish. Binding work, refrets, changed pickups, replacement tuners, repaired cracks, and structural movement are judged by quality, extent, and how difficult the original specification would be to restore.",
        "Guild values can be less transparent than Fender or Gibson values because fewer close examples sell publicly. I use the exact factory period, model, wood or pickup specification, finish, condition, original parts, case, and provenance to choose comparisons. When the sales record is thin, I explain which evidence supports the range instead of pretending a price guide is precise.",
      ],
      checks: [
        "Factory period is supported by the label, serial, construction, and logo",
        "Acoustic woods and structure or electric pickups and hardware are identified",
        "Finish, binding, neck angle, cracks, and prior repairs are documented",
        "Comparable sales match the exact Guild model and production period",
      ],
    },
    photoIntro: "Guild serial numbers can help with the production period, but the model and factory details still need to match. I also check labels, construction, woods, pickups, hardware, finish, and repairs.",
    serialGuide: { href: "/guild-serial-number-lookup/", label: "Guild serial number lookup" },
    photoList: [
      "The complete front and back of the instrument",
      "The front and back of the headstock",
      "The serial number, label, and model markings",
      "The pickups, bridge, tailpiece, tuners, and controls",
      "The top, back, sides, neck joint, finish, and repairs",
      "The case, paperwork, replaced parts, and known history",
    ],
    evidence: [
      { image: guildModel, alt: "Vintage Guild model and construction detail", title: "Model and Factory Details", body: "Body shape, trim, woods, label, and construction help identify the model and production period." },
      { image: guildCondition, alt: "Vintage Guild hardware, finish, and condition detail", title: "Hardware and Condition", body: "The original parts, finish, play wear, repairs, and structural condition all affect the value." },
    ],
    factors: [
      { title: "Production Location and Period", body: "New York, Hoboken, and Westerly instruments have different construction details and markets. I check more than the serial number." },
      { title: "Model and Specifications", body: "Guild archtops, Starfires, Thunderbirds, flat tops, and 12 strings have different buyers. Body size, wood, pickups, and trim help define the model." },
      { title: "Original Parts and Finish", body: "I check the finish, pickups, tuners, bridge, tailpiece, pickguard, and case. The age and type of a replacement part can change its effect on value." },
      { title: "Structural Condition", body: "Neck resets, cracks, binding work, top movement, refrets, and finish repairs affect Guild acoustics and electrics differently." },
    ],
    valueGuide: { href: "/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/", label: "Seven Factors That Determine Value" },
    models: ["X-175", "X-500", "Starfire", "Thunderbird", "Bluesbird", "M-20", "F-30", "F-40", "F-50", "D-40", "D-50", "Guild 12 Strings"],
    process: [
      { title: "Start With the Guild Label and Model", body: "Send the complete instrument, headstock, label, serial, body and neck joint, hardware, finish, repairs, case, and any paperwork or family history." },
      { title: "I Identify the Factory Period", body: "I use the label, serial range, construction, woods, logo, trim, pickups, and hardware to distinguish New York, Hoboken, Westerly, and later production." },
      { title: "I Use Model-Specific Comparisons", body: "Archtops, Starfires, flat tops, and 12 strings are priced in their own markets with adjustments for originality, structural work, condition, and provenance." },
    ],
    resources: [
      { href: "/guild-serial-number-lookup/", label: "Guild Serial Number Lookup", body: "Use the serial number and production details to narrow the year and factory." },
      { href: "/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/", label: "Seven Factors That Determine Value", body: "See the evidence I use after identifying the exact instrument." },
      { href: "/post/blue-book-of-guitar-values-and-vintage-guitar-price-guide/", label: "Use Guitar Price Guides Correctly", body: "Read why a broad price table can miss the details of your Guild." },
      { href: "/sell-my-guild-guitar/", label: "Sell My Guild Guitar", body: "Ask me for a separate cash offer after the appraisal." },
    ],
    review: {
      name: "Amy Vickery",
      body: "They were very easy to deal with and appraised my 1979 Guild within minutes! I sent pictures and details via text and received a free estimated value right away!",
      href: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMzaWFfdUtREAE!2m1!1s0x0:0x69728d089b8a764!3m1!1s2@1:CIHM0ogKEICAgIC3ia_uKQ%7C%7C?hl=en",
    },
    faqs: [
      { q: "Can You Appraise My Guild From Photos?", a: "Yes. Clear photos of the full instrument, serial number, label, hardware, finish, and repairs are usually enough to begin." },
      { q: "Does the Guild Factory Location Affect Value?", a: "It can. New York, Hoboken, and Westerly production can draw different buyer interest. I still need the exact model and condition." },
      { q: "Do Repaired Cracks or a Neck Reset End the Value?", a: "No. I look at how well the work was done, how much of the guitar was affected, and what original parts remain." },
      { q: "Is This a Written Insurance Appraisal?", a: "No. I provide a free current market value opinion. A signed insurance appraisal is a separate service." },
    ],
  },
  {
    slug: "rickenbacker",
    brand: "Rickenbacker",
    description: "Get a free Rickenbacker guitar appraisal from Joe Dampt. Send photos for help identifying the model, year, original parts, repairs, and current market value.",
    heroText: "For a Rickenbacker, I check the exact model, production period, pickups, hardware, finish, original parts, condition, and recent sales before I give you a value range.",
    heroImage: rickenbackerHero,
    ogImage: "/images/og/appraisal/rickenbacker-guitar-appraisal.jpg",
    heroAlt: "Vintage 1968 Rickenbacker 4005 bass shown full length in its case",
    heroCaption: "A Rickenbacker's model, serial code, pickups, finish, binding, and original parts all affect its value.",
    appraisalNotes: {
      heading: "How I Confirm a Vintage Rickenbacker",
      paragraphs: [
        "Many Rickenbacker serial codes are stamped on the output jack plate. That plate can be replaced, so I treat the code as one clue rather than the whole answer. The body shape, neck construction, headstock, logo plate, truss rod cover, binding, inlays, controls, and hardware should fit the same model and period. Early lap steels and Frying Pan instruments require a different set of references from later guitars and basses.",
        "Pickups can make a large difference in both identity and value. Horseshoe, toaster, and high-gain designs changed across the catalog, and replacement pickups or rewound units do not carry the same market weight as intact originals. I also examine pickguards, knobs, wiring, potentiometers, bridges, tailpieces, tuners, and extra holes to see whether the visible configuration is still factory correct.",
        "Construction and condition need model-specific judgment. Checkerboard binding, crushed-pearl inlays, neck-through construction, double truss rods, stereo wiring, and unusual finishes can define a desirable specification. Neck movement, truss rod damage, changed routes, lifting binding, finish work, and repaired breaks can be expensive to correct, especially when model-specific replacement parts are hard to find.",
        "A 325, 360 12-string, 4001, 4003, and hollowbody 4005 attract different buyers. Once the model and production period are established, I compare the instrument with sales that share its pickup version, finish, binding and inlay package, original hardware, condition, repair history, and case. That prevents a common model from setting the range for a scarce configuration.",
      ],
      checks: [
        "Jack plate code is compared with the body, neck, logo, and trim",
        "Pickup version, wiring, controls, bridge, tailpiece, and tuners are checked",
        "Binding, inlays, truss rods, finish, and model-specific repairs are documented",
        "Sales comparisons match the exact Rickenbacker model and specification",
      ],
    },
    photoIntro: "Many Rickenbacker instruments have the serial code on the output jack plate. The code helps with the date, but I also check the model features, construction, pickups, binding, and finish.",
    serialGuide: { href: "/rickenbacker-serial-numbers/", label: "Rickenbacker serial number guide" },
    photoList: [
      "The complete front and back of the instrument",
      "The headstock, logo plate, tuners, and truss rod cover",
      "The output jack plate and its serial code",
      "The pickups, bridge, tailpiece, controls, and knobs",
      "The binding, finish, neck, body joints, and any repairs",
      "The case, paperwork, replaced parts, and known history",
    ],
    evidence: [
      { image: rickenbackerSerial, alt: "Vintage Rickenbacker output jack plate with serial code", title: "Jack Plate Serial Code", body: "A readable jack plate code helps with the date when the rest of the guitar matches that period." },
      { image: rickenbackerPickup, alt: "Vintage Rickenbacker toaster pickup and body detail", title: "Pickup Specification and Originality", body: "The pickup, pickguard, binding, controls, and hardware help me check the specification and original parts." },
    ],
    factors: [
      { title: "Model and Production Period", body: "A 325, 330, 360, 4001, 4003, or 4005 belongs to a specific market. The serial code and construction details help me place it in the right period." },
      { title: "Pickups and Electronics", body: "Toaster, horseshoe, high gain, and other pickup and wiring specifications can change both the identity and value." },
      { title: "Finish and Binding", body: "I consider the original finish, checkerboard binding, wear, touchups, overspray, and refinishing with the model and period." },
      { title: "Hardware and Condition", body: "Bridge parts, tailpieces, tuners, knobs, pickguards, and cases matter. Neck issues, changed routes, and repairs can put the guitar in a different buyer group." },
    ],
    valueGuide: { href: "/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/", label: "Seven Factors That Determine Value" },
    models: ["325", "330", "360", "365", "381", "4001", "4003", "4005", "12 String Guitars", "Capri Models", "Lap Steels", "Frying Pan Instruments"],
    process: [
      { title: "Photograph the Jack Plate and Model Features", body: "Include the full instrument, headstock and logo plate, jack plate code, pickups, controls, bridge, tailpiece, binding, inlays, finish, repairs, and case." },
      { title: "I Confirm the Rickenbacker Specification", body: "I compare the serial code with construction, pickup version, trim, wiring, and hardware to identify the model period and any later changes." },
      { title: "I Compare the Same Configuration", body: "The appraisal uses sales of the same model, pickup and trim package, finish, originality, structural condition, repair history, and case status." },
    ],
    resources: [
      { href: "/rickenbacker-serial-numbers/", label: "Rickenbacker Serial Numbers", body: "Find the jack plate code and check the common date formats." },
      { href: "/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/", label: "Seven Factors That Determine Value", body: "See how identity, condition, original parts, rarity, and demand affect an appraisal." },
      { href: "/post/what-a-serial-number-cant-tell-you/", label: "What a Serial Number Cannot Tell You", body: "Read why the model features, pickups, finish, hardware, and repairs still need inspection." },
      { href: "/sell-my-rickenbacker-guitar/", label: "Sell My Rickenbacker Guitar", body: "Ask me for a separate cash offer after the appraisal." },
    ],
    review: {
      name: "Cody Folk DeCou",
      body: "I dropped my Rickenbacker 4003 off with him on Thursday for a setup, and he had it ready to be picked up the following afternoon!",
      href: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURDMHZYQ0FnEAE!2m1!1s0x0:0x69728d089b8a764!3m1!1s2@1:CIHM0ogKEICAgIDC0vXCAg%7C%7C?hl=en",
    },
    faqs: [
      { q: "Can You Appraise My Rickenbacker From Photos?", a: "Yes. Send the full instrument, jack plate serial code, headstock, pickups, hardware, finish, binding, and repairs." },
      { q: "Does the Jack Plate Serial Code Set the Value?", a: "No. It gives me a possible production period. The exact model, pickups, finish, original parts, repairs, and condition determine the value." },
      { q: "Do Changed Pickups or Hardware Affect Value?", a: "Yes, especially on rarer models. I look at which parts were changed, what remains original, and whether the guitar was cut or drilled." },
      { q: "Should I Clean or Repair It Before Sending Photos?", a: "No major work is needed. Photograph it as it is. Heavy cleaning or an unnecessary repair can remove evidence or create a new problem." },
    ],
  },
];

export function getAppraisalPage(slug: string): AppraisalPage | undefined {
  return appraisalPages.find((page) => page.slug === slug);
}
