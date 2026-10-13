import type { ImageMetadata } from "astro";

import fenderHero from "../assets/images/appraisal-spokes/fender-portrait.jpg";
import fenderSerial from "../assets/images/appraisal-spokes/details/fender-serial.jpg";
import fenderNeckPlate from "../assets/images/appraisal-spokes/details/fender-neck-plate.jpg";
import gibsonHero from "../assets/images/appraisal-spokes/gibson-portrait.jpg";
import martinHero from "../assets/images/appraisal-spokes/martin-portrait.jpg";
import chibsonTrussRod from "../assets/images/chibson-fake-truss-rod-example.jpg";
import gibsonTrussRod from "../assets/images/gibson-truss-rod-nut-authentication.jpg";
import fakeGibsonBridge from "../assets/images/fake-gibson-bridge-identification.jpg";
import gibsonAbr1 from "../assets/images/gibson-abr-1-bridge-identification.jpg";
import fakeGibsonHeadstock from "../assets/images/gibson-fake-headstock-identification.jpg";
import gibsonHeadstock from "../assets/images/gibson-headstock-identification.jpg";
import fakeGibsonSerial from "../assets/images/fake-gibson-serial-number-identification.jpg";
import gibsonSerial from "../assets/images/gibson-serial-number-identification.jpg";
import fakeMartinSerial from "../assets/images/fake-martin-serial-number-identification.jpg";
import martinSerial from "../assets/images/genuine-martin-serial-number-identification.jpg";
import martinExteriorGrain from "../assets/images/how-to-tell-if-a-martin-is-fake.jpg";
import martinInteriorGrain from "../assets/images/martin-grain-pattern-identification-interior.jpg";
import martinCenterStrip from "../assets/images/martin-center-strip-logo-location.jpg";
import fenderTimeline from "../assets/images/vintage-fender-authentication.jpg";
import fakeFenderTrussRod from "../assets/images/fender-truss-rod-fake-plug.jpg";
import fenderWalnutPlug from "../assets/images/fender-walnut-truss-rod-plug.jpg";
import fenderHeelAdjust from "../assets/images/fender-heel-adjust-truss-rod-plug.jpg";
import fenderBullet from "../assets/images/fender-bullet-truss-rod.jpg";

export interface AuthenticationImage {
  src: ImageMetadata;
  alt: string;
  title: string;
  note: string;
}

export interface AuthenticationSection {
  id: string;
  title: string;
  eyebrow: string;
  bodyHtml: string;
  bullets: string[];
  caution: string;
  portrait?: boolean;
  images: AuthenticationImage[];
}

export interface AuthenticationGuide {
  brand: "Gibson" | "Martin" | "Fender";
  slug: string;
  hero: ImageMetadata;
  heroAlt: string;
  description: string;
  lede: string;
  intro: string;
  quick: Array<{ id: string; title: string; note: string }>;
  sections: AuthenticationSection[];
  evidence: Array<{ title: string; body: string }>;
  resources: Array<{ category: string; title: string; body: string; href: string }>;
  photos: string[];
  faqs: Array<{ q: string; a: string }>;
}

const guideImage = (src: ImageMetadata, alt: string, title: string, note: string): AuthenticationImage => ({ src, alt, title, note });
const resource = (category: string, title: string, body: string, href: string) => ({ category, title, body, href });

export const authenticationGuides: AuthenticationGuide[] = [
  {
    brand: "Gibson",
    slug: "how-to-spot-a-fake-gibson",
    hero: gibsonHero,
    heroAlt: "Vintage Gibson Les Paul Custom shown in its case",
    description: "Learn how to spot a fake Gibson guitar by checking the truss rod hardware, bridge, headstock construction, serial stamp, finish, and electronics.",
    lede: "A copied serial number can look convincing. The safer test is whether the neck, hardware, construction, finish, and electronics all tell the same story for the claimed model and year.",
    intro: "Start with the easy exterior clues, then compare the details as a group. None of these signs should be used alone to condemn a guitar: legitimate Gibsons vary by model and era, and repairs can change what you see.",
    quick: [
      { id: "truss-rod", title: "Truss rod hardware", note: "See the adjustment system under the cover" },
      { id: "bridge", title: "Bridge and posts", note: "Compare the whole assembly with the claimed model" },
      { id: "serial", title: "Serial and headstock", note: "Check how the mark, finish, and wood construction agree" },
    ],
    sections: [
      {
        id: "truss-rod",
        title: "Look Under the Truss Rod Cover",
        eyebrow: "First field check",
        bodyHtml: "Gibson guitars have a brass truss rod nut adjusted with a nut driver. An Allen-wrench adjustment or a deeply recessed truss rod socket is a sign of a fake Gibson. Joe's <a class='inline-guide-link' href='/gibson-physical-features-hardware-guide/'>Gibson physical-features and hardware guide</a> gives the wider period context.",
        bullets: ["Compare the adjustment hardware with the exact model and production period.", "Check the cavity's shape, depth, and finish along with the nut.", "Stop if the cover is stuck or a screw will not turn easily; damage is not worth one clue."],
        caution: "Important: this is a screening clue, not a universal rule. Some Gibson-family instruments, modern variants, and repaired guitars can differ.",
        images: [
          guideImage(chibsonTrussRod, "Suspect recessed truss rod adjustment on a counterfeit Gibson-style guitar", "Suspect example", "Recessed socket and rough cavity on a counterfeit example."),
          guideImage(gibsonTrussRod, "Brass truss rod nut on an authentic vintage Gibson guitar", "Authentic comparison", "Traditional brass nut on the vintage Gibson used for this comparison."),
        ],
      },
      {
        id: "bridge",
        title: "Read the Bridge, Posts, and Thumbwheels",
        eyebrow: "Hardware clue",
        bodyHtml: "Copy guitars often use inexpensive import bridge hardware that only approximates Gibson's look. Large slotted post heads, unfamiliar bushings, and an assembly that does not match the claimed year can be a useful red flag. Compare the whole assembly with Joe's <a class='inline-guide-link' href='/gibson-physical-features-hardware-guide/'>Gibson bridge and hardware chronology</a>.",
        bullets: ["Identify the bridge family before judging one screw or saddle.", "Check post spacing, bushings, thumbwheels, retaining wire, saddle orientation, and plating together.", "Replacement hardware lowers originality, but replacement alone does not make the guitar counterfeit."],
        caution: "Gibson used more than one bridge design, and owners frequently replace worn bridges. Date the instrument before deciding what should be present.",
        images: [
          guideImage(fakeGibsonBridge, "Large slotted bridge post on a fake Gibson guitar", "Suspect example", "Import-style bridge hardware with a large slotted adjustment post."),
          guideImage(gibsonAbr1, "Vintage Gibson ABR-1 bridge and thumbwheel detail", "Period comparison", "ABR-1-style bridge detail from an authentic vintage Gibson."),
        ],
      },
      {
        id: "headstock",
        title: "Inspect the Headstock Construction",
        eyebrow: "Woodworking clue",
        bodyHtml: "On many classic USA Gibson necks, the wider sides of the headstock are formed by glued-on wood wings, leaving visible seams on the back. The counterfeit example shown here has no glued-on wings and no visible wing seams. That is a sign of a fake. A scarf joint is a separate warning sign. A Gibson neck never uses a scarf joint and should be made from one continuous piece of wood. Cross-check the outline and inlay with the <a class='inline-guide-link' href='/gibson-headstock-logo-chronology/'>Gibson headstock logo chronology</a>.",
        bullets: ["Use raking light to reveal wing seams, repairs, overspray, and altered contours.", "Compare the headstock angle, outline, thickness, logo placement, and tuner layout.", "A repaired headstock can add seams or finish work that mimic a construction clue."],
        caution: "Construction changed across Gibson's long history. Confirm the exact family and era before treating a seam as evidence.",
        images: [
          guideImage(fakeGibsonHeadstock, "No headstock seam visible on the back of a counterfeit Gibson-style guitar", "Suspect construction", "No seam on a counterfeit example."),
          guideImage(gibsonHeadstock, "Wood wing seams on the back of an authentic Gibson headstock", "Authentic comparison", "Subtle side-wing seams on an authentic Gibson headstock."),
        ],
      },
      {
        id: "serial",
        title: "Judge the Serial Number in Context",
        eyebrow: "Marking clue",
        bodyHtml: "A serial number can be copied from a real guitar in seconds. Gibson serial numbers were stamped into the wood before the finish was applied, so the finish should lie over the stamp. A laser-etched serial number is a sign of a fake Gibson. The same is true of a number that appears on top of the finish or cuts through it. The counterfeit example in the photos has a laser-etched serial number. Start with the <a class='inline-guide-link' href='/how-to-read-gibson-serial-numbers/'>Gibson serial-number lookup and charts</a>, then read <a class='inline-guide-link' href='/post/what-a-serial-number-cant-tell-you/'>what a serial number cannot tell you</a> before treating the number alone as proof.",
        bullets: ["Verify the format, number range, font, spacing, position, and production method.", "Check whether the logo, finish, neck construction, hardware, and electronics belong to the same period.", "Use an online serial-number lookup as a date clue, not an authenticity certificate."],
        caution: "A copied number can still fall within a valid Gibson range. The stamping method, finish, construction, hardware, and electronics all have to agree.",
        images: [
          guideImage(fakeGibsonSerial, "Laser-etched serial number on a fake Gibson-style headstock", "Suspect example", "Laser-etched serial number cut into the finish on a counterfeit example."),
          guideImage(gibsonSerial, "Finish-softened serial-number stamp on an authentic Gibson headstock", "Authentic comparison", "A stamped number integrated with the finish on an authentic Gibson."),
        ],
      },
    ],
    evidence: [
      { title: "Logo and inlays", body: "Shape, material, placement, and workmanship should fit the model and year." },
      { title: "Body and neck construction", body: "Top carve, neck joint, binding, cavities, and routes should match known factory practice." },
      { title: "Electronics", body: "Pickup construction, potentiometer codes, wiring, and solder joints should form a believable timeline." },
      { title: "Finish and aging", body: "Checking, wear, color in cavities, and finish beneath hardware should be consistent rather than theatrical." },
      { title: "Hardware", body: "Tuners, bridge, tailpiece, knobs, plastics, and fasteners should agree with one another." },
      { title: "Provenance", body: "Receipts and family history support the physical evidence, but paperwork never replaces it." },
    ],
    resources: [
      resource("Dating tool", "Gibson Serial Number Lookup", "Decode the number, identify the numbering system, and compare the correct year charts.", "/how-to-read-gibson-serial-numbers/"),
      resource("Construction guide", "Gibson Physical Features and Hardware", "Date neck construction, volutes, bridges, tailpieces, and other hard-to-change details.", "/gibson-physical-features-hardware-guide/"),
      resource("Electronics guide", "Gibson Pot Codes", "Read manufacturer and date codes, then compare them with the guitar's claimed year.", "/gibson-pot-codes/"),
      resource("Pickup guide", "Gibson PAF and Patent Number Pickups", "Compare covers, stickers, baseplates, solder, construction, and period value.", "/post/gibson-paf-patent-number-pickup-guide/"),
      resource("Headstock guide", "Gibson Logo Chronology", "Follow logo shapes and placement through the major Gibson production periods.", "/gibson-headstock-logo-chronology/"),
      resource("Model guide", "Vintage Gibson Les Paul Family", "Identify Les Paul models and the construction changes that separate them.", "/post/vintage-gibson-les-paul-family-guide/"),
      resource("Value guide", "Vintage Les Paul Market Values", "See how model, year, finish, originality, and repairs affect collector value.", "/vintage-gibson-les-paul-market-value-guide/"),
      resource("Authentication advice", "What a Serial Number Can't Tell You", "See why hardware, finish, cavities, electronics, and provenance must agree.", "/post/what-a-serial-number-cant-tell-you/"),
      resource("Selling guide", "Sell My Gibson Guitar", "Learn how Joe evaluates and buys vintage Gibson guitars nationwide.", "/sell-my-gibson-guitar/"),
    ],
    photos: ["Full front and back of the guitar", "Front and back of the headstock", "Serial number in straight and raking light", "Truss rod cavity with the cover safely removed", "Bridge, tailpiece, tuners, knobs, and plastics", "Pickup cavities, control cavity, pot codes, and solder only when safely accessible", "Neck joint, repairs, overspray, and suspicious seams", "Case, receipts, tags, and any removed original parts"],
    faqs: [
      { q: "Does a valid Gibson serial number prove the guitar is real?", a: "No. Counterfeiters can copy a valid number. The format, marking method, construction, hardware, finish, and electronics all need to agree." },
      { q: "Does a repaired or modified Gibson become a fake?", a: "No. An authentic Gibson can have replacement parts, a refinish, or a repaired headstock. Those changes affect originality and value, not necessarily manufacturer identity." },
      { q: "Should I take the guitar apart?", a: "Start with safe exterior photos. Remove only an easy truss rod cover if you are comfortable. Wait for guidance before pulling pickups or electronics." },
      { q: "Can Joe authenticate a Gibson from photos?", a: "Often, yes for an initial opinion. A rare, heavily altered, or exceptionally valuable guitar may still require an in-person inspection." },
    ],
  },
  {
    brand: "Martin",
    slug: "how-to-spot-a-fake-martin",
    hero: martinHero,
    heroAlt: "Vintage Martin 00-21 acoustic guitar shown in its case",
    description: "Learn how to spot a fake Martin guitar by checking the neck-block stamp, serial and model numbers, wood grain, center strip, construction, and finish.",
    lede: "A convincing headstock logo is not enough. Start inside the soundhole, then test whether the markings, wood, bracing, trim, hardware, and claimed production year agree.",
    intro: "Martin construction and markings changed over time, and not every authentic model uses the same materials. Use these checks to find contradictions, then verify the exact model and era before making a final call.",
    quick: [
      { id: "neck-block", title: "Neck-block stamp", note: "Check model, serial, typography, depth, and alignment" },
      { id: "grain", title: "Inside/outside grain", note: "Compare the wood only when solid construction is expected" },
      { id: "center-strip", title: "Interior construction", note: "Read the center strip, bracing, bridge plate, and workmanship together" },
    ],
    sections: [
      {
        id: "neck-block",
        title: "Start With the Neck-Block Markings",
        eyebrow: "First field check",
        bodyHtml: "Many steel-string Martins carry the model and serial number stamped into the neck block. Use Joe's <a class='inline-guide-link' href='/martin-serial-and-model-numbers/'>Martin serial-number lookup and model guide</a> to check the year. Compare the <a class='inline-guide-link' href='/martin-neck-block-stamps/'>dated neck-block stamps</a> and read the <a class='inline-guide-link' href='/martin-guitar-model-numbers/'>model-number decoder</a> before judging the lettering and format.",
        bullets: ["Photograph the full neck block square-on and in side light.", "Check the model and serial together; a plausible number paired with the wrong model format is still a problem.", "Compare the stamp with authenticated examples from the same production period."],
        caution: "Old stamps can be light, uneven, dirty, or partly hidden. One imperfect character does not prove a fake.",
        portrait: true,
        images: [
          guideImage(fakeMartinSerial, "Burning around the logo and thin, serif text on a fake Martin neck block stamp", "Suspect example", "Burning around the logo and thin, serif text on a fake Martin neck block stamp."),
          guideImage(martinSerial, "Stamped model and serial number on an authentic Martin guitar neck block", "Authentic comparison", "Machine-stamped model and serial on the authentic Martin used for comparison."),
        ],
      },
      {
        id: "grain",
        title: "Use the Inside-Outside Grain Test Carefully",
        eyebrow: "Material clue",
        bodyHtml: "When a specific Martin model and year should have solid back or side wood, distinctive grain lines should continue through the same piece. For dreadnought specifications, use the <a class='inline-guide-link' href='/martin-d-28-d-18-d-45-dreadnought-value-guide/'>D-18, D-28, and D-45 guide</a>; for smaller bodies, compare the <a class='inline-guide-link' href='/post/martin-0-00-000-history-authentication-value-guide/'>Martin 0, 00, and 000 guide</a>.",
        bullets: ["Choose one distinctive grain line and locate the same area inside the body.", "Use bright, angled light and account for color changes caused by finish and interior darkness.", "Confirm that the claimed model was actually built with solid wood before using this test."],
        caution: "Martin has made instruments with different construction and material specifications. Laminate construction is not itself counterfeit when it is correct for the model.",
        images: [
          guideImage(martinExteriorGrain, "Exterior back grain on a Martin-style guitar used for an authenticity comparison", "Outside reference", "Choose a distinctive line or swirl on the exterior."),
          guideImage(martinInteriorGrain, "Interior wood grain viewed through a Martin guitar soundhole", "Inside reference", "Look for the same grain path on the corresponding interior surface."),
        ],
      },
      {
        id: "center-strip",
        title: "Read the Center Strip and Interior Work",
        eyebrow: "Construction clue",
        bodyHtml: "The back center strip, bracing, bridge plate, kerfing, glue work, and tool marks reveal how the guitar was built. Joe's <a class='inline-guide-link' href='/post/1976-martin-000-45-specs-history-value-guide/'>1976 Martin 000-45 authentication study</a> shows how the stamp, trim, finish, and construction are checked together on a real instrument. Compare <a class='inline-guide-link' href='/martin-guitar-dating-guide/'>bracing and neck features</a> with the claimed year, then check the <a class='inline-guide-link' href='/martin-headstock-logo-dating-guide/'>logo</a> and <a class='inline-guide-link' href='/martin-tuner-dating-guide/'>tuner mounting evidence</a>.",
        bullets: ["Inspect the full strip rather than one cropped logo.", "Compare brace shape and placement, bridge plate material and size, and interior workmanship.", "Look for fresh sanding, added ink, altered braces, or repairs around the stamp."],
        caution: "A blank or unusual center strip is not universal proof of a fake. Model, year, factory, and prior repair history all matter.",
        images: [guideImage(martinCenterStrip, "C. F. Martin center-strip marking inside an acoustic guitar", "Interior maker's mark", "A center-strip marking photographed through the soundhole.")],
      },
    ],
    evidence: [
      { title: "Body size and style", body: "Dimensions, trim, rosette, binding, inlays, and back-strip pattern should match the style number." },
      { title: "Wood specification", body: "Top, back, sides, neck, fingerboard, and bridge materials should fit the exact year and model." },
      { title: "Bracing and bridge plate", body: "Pattern, shaping, scalloping, position, and bridge-plate construction provide strong period clues." },
      { title: "Bridge and pickguard", body: "Footprint, location, shape, material, and finish disturbance can reveal replacements or altered construction." },
      { title: "Headstock and tuners", body: "Logo style, stamp, volute, slots, tuner footprint, and extra holes should make sense together." },
      { title: "Finish and repairs", body: "Overspray, refinishing, neck resets, cracks, and bridge work affect originality without automatically making it fake." },
    ],
    resources: [
      resource("Dating tool", "Martin Serial and Model Numbers", "Find the neck-block stamps and use the complete year-by-year serial chart.", "/martin-serial-and-model-numbers/"),
      resource("Dreadnought guide", "Martin D-18, D-28 and D-45 Values", "Compare construction, originality, repairs, provenance, and current value by era.", "/martin-d-28-d-18-d-45-dreadnought-value-guide/"),
      resource("Small-body guide", "Martin 0, 00 and 000 Guitars", "Identify body size, style, woods, neck joint, bracing, tuners, and period changes.", "/post/martin-0-00-000-history-authentication-value-guide/"),
      resource("Model study", "1976 Martin 000-45", "See serial, stamp, finish, pearl work, construction, and value checked on a real example.", "/post/1976-martin-000-45-specs-history-value-guide/"),
      resource("Provenance story", "One Owner 1955 Martin D-28", "See how photographs, ownership history, repairs, and originality support the guitar's story.", "/post/one-owner-1955-martin-d28/"),
      resource("Authentication advice", "What a Serial Number Can't Tell You", "Learn why the number is only one part of a full vintage-guitar inspection.", "/post/what-a-serial-number-cant-tell-you/"),
      resource("Value advice", "Seven Factors That Determine Value", "Understand how identity, condition, originality, rarity, demand, and history affect price.", "/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/"),
      resource("Resource center", "Vintage Guitar Authentication Guides", "Browse Joe's model studies, authentication articles, value guides, and owner stories.", "/blog/"),
      resource("Selling guide", "Sell My Martin Guitar", "Learn how Joe evaluates and buys vintage Martin guitars nationwide.", "/sell-my-martin-guitar/"),
    ],
    photos: ["Full front, back, and both sides", "Front and back of the headstock", "Entire neck block with model and serial visible", "Center strip from end block toward the neck block", "Interior braces and bridge plate", "Bridge, saddle, pickguard, rosette, and binding", "Exterior and matching interior wood grain", "Cracks, repairs, overspray, case, and paperwork"],
    faqs: [
      { q: "Does a Martin serial number prove authenticity?", a: "No. It can establish a possible production year, but the stamp, model format, materials, construction, and specifications must also agree." },
      { q: "Is every laminate Martin-style guitar fake?", a: "No. Some legitimate instruments use laminate construction. The question is whether the materials match the exact model and production claim." },
      { q: "Should I remove anything to photograph the interior?", a: "Usually not. A phone camera, mirror, and good light through the soundhole are enough for the first review." },
      { q: "Can Joe authenticate a Martin from photos?", a: "Often, yes for an initial opinion. A rare pre-war instrument or a heavily rebuilt guitar may require hands-on inspection." },
    ],
  },
  {
    brand: "Fender",
    slug: "how-to-spot-a-fake-fender",
    hero: fenderHero,
    heroAlt: "Vintage Fender Telecaster shown in its case",
    description: "Learn how to spot a fake Fender guitar by checking the specification timeline, hidden date codes, truss rod layout, neck and body details, finish, and electronics.",
    lede: "Fender authenticity is a timeline problem. The neck, body, finish, hardware, plastics, pickups, potentiometers, and hidden dates should belong to the same model and production window.",
    intro: "A real Fender neck can sit on a replacement body. A real decal can also be applied to the wrong neck. Check whether the instrument left the factory together, was assembled later from factory parts, or contains counterfeit components.",
    quick: [
      { id: "timeline", title: "Specification timeline", note: "Find features that could not have existed together" },
      { id: "dates", title: "Dates and codes", note: "Compare neck, body, pickup, potentiometer, and serial clues" },
      { id: "truss-rod", title: "Truss rod layout", note: "Identify heel adjust, walnut plug, bullet, and import variations" },
    ],
    sections: [
      {
        id: "timeline",
        title: "Build a Specification Timeline",
        eyebrow: "First field check",
        bodyHtml: "Counterfeits and partscasters often combine individually plausible parts that never overlapped in Fender production. Start with Joe's <a class='inline-guide-link' href='/fender-guitars-serial-number-guide/'>Fender serial-number lookup</a>, then use the <a class='inline-guide-link' href='/fender-stratocaster-dating-guide/'>year-by-year Stratocaster dating guide</a> when that is the model in front of you.",
        bullets: ["Write down the claimed model and year before judging the details.", "Flag anachronisms: a later feature on an earlier claim, or wear that does not continue under adjacent parts.", "Separate three questions: Is the part Fender? Is it from the claimed era? Did the whole guitar leave the factory together?"],
        caution: "Fender was a production factory, not a museum. Transitional combinations exist, and owners have swapped bolt-on parts for decades.",
        images: [guideImage(fenderTimeline, "Vintage Fender guitar disassembled for expert authentication", "The whole timeline", "Check the neck, body, finish, hardware, and electronics. The decal is only one clue.")],
      },
      {
        id: "dates",
        title: "Make the Hidden Dates Talk to Each Other",
        eyebrow: "Dating clue",
        bodyHtml: "Depending on the model and period, useful clues can include the neck heel date, body-cavity markings, pickup dates, potentiometer codes, serial-number location, and hardware style. Joe's <a class='inline-guide-link' href='/fender-pot-codes/'>Fender pot-code guide</a> and <a class='inline-guide-link' href='/fender-neck-dates/'>neck-heel date guide</a> explain how those dates should support one another.",
        bullets: ["Photograph every mark before cleaning or rubbing it.", "Allow normal lag between component manufacture and final assembly.", "Treat a missing or unreadable date as unknown. It does not automatically mean the guitar is fake."],
        caution: "Do not remove a neck, pickguard, or electronics unless you are comfortable doing it safely. Start with exterior photos and ask which hidden view is worth the risk.",
        images: [
          guideImage(fenderSerial, "Serial number on a vintage Fender neck plate", "Serial location", "The serial is one clue within a larger date range."),
          guideImage(fenderNeckPlate, "Vintage Fender neck plate, finish, and hardware detail", "Assembly evidence", "Plate, fasteners, finish edges, and surrounding wear should tell one story."),
        ],
      },
      {
        id: "truss-rod",
        title: "Identify the Truss Rod Configuration",
        eyebrow: "Neck clue",
        bodyHtml: "Fender used several truss rod layouts. Many vintage necks adjust at the heel. A solid walnut plug at the headstock is one sign of a heel-adjust neck. Later headstock-adjust necks may have a walnut-lined access hole, while some 1970s necks use a bullet-style nut. Match the configuration to the model, factory, and production period. See the period examples in Joe's <a class='inline-guide-link' href='/post/1959-fender-telecaster-authentication-guide/'>1959 Telecaster authentication guide</a> and <a class='inline-guide-link' href='/post/1962-fender-stratocaster-authentication-guide/'>1962 Stratocaster authentication guide</a>.",
        bullets: ["Confirm where adjustment should occur for the claimed year.", "Look at the plug material, hole shape, surrounding finish, and headstock contour together.", "Remember that import Fender and Squier necks can legitimately use different plugs and hardware."],
        caution: "Do not judge the neck from the plug alone. Verify the adjustment location and match the complete layout to the model and year.",
        images: [
          guideImage(fakeFenderTrussRod, "Black insert at the truss rod opening of a fake Fender-style neck", "Suspect example", "A plastic-looking insert on a neck represented as a USA example."),
          guideImage(fenderWalnutPlug, "Dark walnut plug surrounding a Fender headstock truss rod opening", "Walnut plug", "A walnut plug on the USA Fender neck used for comparison."),
          guideImage(fenderHeelAdjust, "Solid walnut headstock plug on a heel-adjust Fender neck", "Heel adjustment", "Many vintage Fender necks adjust at the heel. A solid walnut plug at the headstock can indicate this layout."),
          guideImage(fenderBullet, "Bullet-style truss rod nut on a Fender headstock", "Bullet adjustment", "A period-specific bullet-style configuration used on some later Fender necks."),
        ],
      },
    ],
    evidence: [
      { title: "Neck and body relationship", body: "Heel shape, pocket fit, screw pattern, dates, finish transfer, and wear should be compatible." },
      { title: "Decal and headstock", body: "Logo style, placement, clear coat, contours, string tree, tuners, and holes should match the period." },
      { title: "Routes and cavities", body: "Pickup routes, control routes, tooling marks, paint shadows, shielding, and nail holes can identify factory practice." },
      { title: "Electronics", body: "Pickup construction, lead wire, potentiometer codes, switch, capacitor, and solder history should form one timeline." },
      { title: "Finish and color", body: "Under-pickguard color, neck pocket evidence, checking, wear, and overspray matter more than surface color alone." },
      { title: "Hardware and plastics", body: "Bridge, saddles, plates, knobs, pickguard, screws, and tuner footprints should fit the claimed specification." },
    ],
    resources: [
      resource("Dating tool", "Fender Serial Number Lookup", "Decode American, Mexican, Japanese, and Custom Shop serial formats, then cross-check the result.", "/fender-guitars-serial-number-guide/"),
      resource("Electronics guide", "Fender Pot Codes", "Read the maker, year, and week on the controls and understand what that date proves.", "/fender-pot-codes/"),
      resource("Neck guide", "Fender Neck Dates", "Read pencil dates, rubber stamps, product codes, and other neck-heel markings.", "/fender-neck-dates/"),
      resource("Model dating", "How to Date a Fender Stratocaster", "Follow year-by-year changes in the neck, body, hardware, electronics, logo, and finish.", "/fender-stratocaster-dating-guide/"),
      resource("Authentication study", "1959 Fender Telecaster", "Compare serial, neck and body dates, hardware, electronics, finish, reissues, and modifications.", "/post/1959-fender-telecaster-authentication-guide/"),
      resource("Authentication study", "1962 Fender Stratocaster", "See slab-board, pickup, neck-stamp, serial, hardware, finish, and reissue checks together.", "/post/1962-fender-stratocaster-authentication-guide/"),
      resource("Value guide", "Vintage Stratocaster Values", "See how year, color, finish, condition, and original parts affect pre-CBS values.", "/vintage-fender-stratocaster-value-guide/"),
      resource("Value guide", "Vintage Telecaster Values", "Compare values by year and the originality details that move the market.", "/vintage-fender-telecaster-value-guide/"),
      resource("Selling guide", "Sell My Fender Guitar", "Learn how Joe evaluates and buys vintage Fender guitars nationwide.", "/sell-my-fender-guitar/"),
    ],
    photos: ["Full front and back of the guitar", "Front and back of the headstock", "Serial-number location and neck plate or bridge plate", "Neck pocket and heel only if safely accessible", "Pickguard, bridge, saddles, tuners, knobs, and plastics", "Pickup, potentiometer, switch, and solder details only when safely accessible", "Body cavities, routes, paint edges, and finish beneath hardware", "Case, tags, receipts, removed parts, and family photographs"],
    faqs: [
      { q: "Does a Fender serial number prove the guitar is real?", a: "No. Serial locations and ranges can narrow a period, but a number can be copied and an original plate can be moved to another guitar." },
      { q: "What is the difference between a fake and a partscaster?", a: "A counterfeit is represented as something it is not. A partscaster may use factory or aftermarket parts and can be a good instrument, but it should not be sold as a factory-original vintage Fender." },
      { q: "Should I remove the neck or pickguard?", a: "Not for the first review. Send safe exterior photos, and Joe can tell you whether a hidden date or cavity view is necessary." },
      { q: "Can Joe authenticate a Fender from photos?", a: "Often, yes for an initial opinion. Original-finish claims, rare custom colors, and high-value pre-CBS guitars may still need closer or hands-on inspection." },
    ],
  },
];
