import type { ImageMetadata } from "astro";
import guideImage1 from "../assets/images/fender-sn/neck-plate-tool.jpg";
import guideImage2 from "../assets/serial-locations/interior-label.jpg";
import guideImage3 from "../assets/images/martin-serial/Model-Name-Serial-Number-Martin.jpg";
import guideImage4 from "../assets/images/gretsch-dating/club-label.jpg";
import guideImage5 from "../assets/images/guild-hub/f48-label.jpg";
import guideImage6 from "../assets/images/rickenbacker-serial/rickenbacker-output-jack-serial-number-two-letter-code.jpg";
import guideImage7 from "../assets/images/fender-amp-serial/Princeton-Tube-Chart.jpg";
import guideImage8 from "../assets/images/fender-sn/1959-fender-jazzmaster-neck-heel.jpg";
import guideImage9 from "../assets/images/fender-sn/1952-fender-precision-bass-body-date.jpg";
import guideImage10 from "../assets/images/fender-sn/fender-1965-potentiometer.jpg";
import guideImage11 from "../assets/images/fender-sn/1966-fender-stratocaster-pickup-dates.jpg";
import guideImage12 from "../assets/blog/1967-fender-stratocaster-authentication-guide/1967-fender-stratocaster-bridge-saddles.jpg";
import guideImage13 from "../assets/blog/1962-fender-stratocaster-authentication-guide/1962-fender-stratocaster-sunburst-8-scaled.jpg";
import guideImage14 from "../assets/blog/1952-fender-telecaster-authentication-guide/1952-fender-telecaster-body-scaled.jpg";
import guideImage15 from "../assets/blog/fender-jazzmaster-evolution-guide-1958-1971/1959-fender-jazzmaster-gold-guard-full-front-scaled.jpg";
import guideImage16 from "../assets/blog/vintage-fender-jaguar-guide/1966-fender-jaguar-olympic-white-1-scaled.jpg";
import guideImage17 from "../assets/blog/fender-mustang-history-value/1971-fender-mustang-competition-blue-front.jpg";
import guideImage18 from "../assets/blog/gold-guard-fender-precision-bass/1959-fender-precision-bass-full-shot-scaled.jpg";
import guideImage19 from "../assets/images/1964-fender-jazz-bass-original-owner-scaled.jpg";
import guideImage20 from "../assets/pots/gibson-1969-cts-pot-code.jpg";
import guideImage21 from "../assets/blog/gibson-les-paul-tv-model-guide/1957-gibson-les-paul-tv-model-logo-close-up.jpg";
import guideImage22 from "../assets/tuners/1966-gibson-es-335-double-line-klusons.jpg";
import guideImage23 from "../assets/knobs/gibson-prewar-knobs-1930s.jpg";
import guideImage24 from "../assets/features-hardware/gibson-made-in-usa-stamp-scaled.jpg";
import guideImage25 from "../assets/les-paul-family/1956-les-paul-goldtop.jpg";
import guideImage26 from "../assets/sg-family/early-60s-gibson-sg-standard-comparison.webp";
import guideImage27 from "../assets/es-330/dot-neck-es-330.jpg";
import guideImage28 from "../assets/es-family/1963-es-345-sunburst.jpg";
import guideImage29 from "../assets/martin-dating/1930-martin-0-21-2.jpg";
import guideImage30 from "../assets/images/martin-serial/Model-Name-Serial-Number-Martin.jpg";
import guideImage31 from "../assets/martin-dating/1930-martin-0-21-3.jpg";
import guideImage32 from "../assets/blog/martin-small-early-authentication-guide/small-early-detail-1.jpg";
import guideImage33 from "../assets/blog/one-owner-1956-martin-000-21/1956-martin-000-21-neck-block-stamp.jpg";
import guideImage34 from "../assets/images/gretsch-dating/club-label.jpg";
import guideImage35 from "../assets/images/gretsch-dating/gent-pickups.jpg";
import guideImage36 from "../assets/images/gretsch-dating/orange-bigsby.jpg";
import guideImage37 from "../assets/images/gretsch-dating/viking-controls.jpg";
import guideImage38 from "../assets/images/gretsch-dating/single6120.jpg";
import guideImage39 from "../assets/images/gretsch-dating/orange-head.jpg";
import guideImage40 from "../assets/images/gretsch-dating/rally-front.jpg";
import guideImage41 from "../assets/images/gretsch-dating/black-front.jpg";
import guideImage42 from "../assets/images/guild-hub/artist-serial.jpg";
import guideImage43 from "../assets/images/guild-hub/f50-label.jpg";
import guideImage44 from "../assets/images/guild-hub/f50-label.jpg";
import guideImage45 from "../assets/images/guild-hub/f50-front.jpg";
import guideImage46 from "../assets/images/guild-hub/early-x-front.jpg";
import guideImage47 from "../assets/images/guild-hub/thunder-controls.jpg";
import guideImage48 from "../assets/images/guild-hub/d150-label.jpg";
import guideImage49 from "../assets/images/rickenbacker-serial/rickenbacker-toaster-pickup-scaled.jpg";
import guideImage50 from "../assets/images/rickenbacker-serial/rickenbacker-kluson-tuners-scaled.jpg";
import guideImage51 from "../assets/images/rickenbacker-dating/360-silver-top-knobs-and-bridge.jpg";
import guideImage52 from "../assets/images/rickenbacker-serial/rickenbacker-checklerboard-binding-scaled.jpg";
import guideImage53 from "../assets/images/1968-rickenbacker-4005-azureglo-scaled.jpg";
import guideImage54 from "../assets/images/rickenbacker-dating/360-12-fireglo-finish.jpg";

export interface StandaloneGuide {
  href: string;
  title: string;
  excerpt: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const SERIAL_DATING_CATEGORY = "serial-number-dating-guides";
export const MAIN_SERIAL_GUIDE_COUNT = 7;

// Existing standalone pages, in editorial order. The first seven are the main
// brand lookups. Keep their original URLs and leave publication dates unset.
export const serialDatingGuides: StandaloneGuide[] = [
  {
    href: "/fender-guitars-serial-number-guide/",
    title: "Fender Serial Number Lookup: Free Decoder & Dating Guide",
    excerpt: "Decode any Fender serial number, then confirm the year with neck heel dates and pot codes. Free lookup plus year-by-year charts from a Fender appraiser.",
    image: guideImage1,
    imageAlt: "Fender neck plate with a stamped serial number",
  },
  {
    href: "/how-to-read-gibson-serial-numbers/",
    title: "Gibson Serial Number Lookup",
    excerpt: "Free Gibson serial number lookup. Decode serials and FONs from 1902 to today, including reused 1960s ranges and Custom Shop, Historic and Classic formats.",
    image: guideImage2,
    imageAlt: "Gibson serial number on an interior paper label",
  },
  {
    href: "/martin-serial-and-model-numbers/",
    title: "Martin Serial Number Lookup",
    excerpt: "Find your Martin guitar’s year with the serial number lookup and year charts through 2025. Compare logos, tuners, neck-block stamps and construction photos.",
    image: guideImage3,
    imageAlt: "Martin model and serial number stamped on the neck block",
  },
  {
    href: "/gretsch-serial-number-lookup/",
    title: "Gretsch Serial Number Lookup And Dating Guide",
    excerpt: "Date your Gretsch with a free serial lookup, vintage charts and photo guides to labels, pickups, hardware and finishes. Compare original guitars and reissues.",
    image: guideImage4,
    imageAlt: "Model and serial number on a Gretsch guitar label",
  },
  {
    href: "/guild-serial-number-lookup/",
    title: "Guild Serial Number Lookup: How To Date A Guild Guitar",
    excerpt: "Look up your Guild serial number with vintage charts and a date-code decoder. Compare labels, factory eras, model prefixes and detailed guitar photos.",
    image: guideImage5,
    imageAlt: "Guild F48 label showing the model and serial number",
  },
  {
    href: "/rickenbacker-serial-numbers/",
    title: "Rickenbacker Serial Number Lookup",
    excerpt: "Date your Rickenbacker guitar or bass with our free serial number lookup. Find the serial, read date codes, and compare vintage features in photos.",
    image: guideImage6,
    imageAlt: "Rickenbacker output jack plate with a two-letter serial code",
  },
  {
    href: "/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/",
    title: "Vintage Fender Amp Serial Numbers: How To Find The Year",
    excerpt: "Wondering how old your vintage Fender amplifier is? Learn to date it using tube chart codes, transformer details, and era-specific features.",
    image: guideImage7,
    imageAlt: "Fender amplifier tube chart with the ink-stamped two-letter date code. The first letter is the year and the second letter is the month.",
  },
  {
    href: "/fender-neck-dates/",
    title: "Fender Neck Dates: How To Date A Fender By Its Neck Heel",
    excerpt: "Read the pencil date or ink stamp on your Fender's neck heel to date the guitar to the month. A step-by-step neck-date guide from a vintage Fender appraiser.",
    image: guideImage8,
    imageAlt: "The neck heel of a 1959 Fender Jazzmaster with a pencil date reading 1-59 for January 1959, the neck lifted out of the body",
  },
  {
    href: "/fender-body-dates/",
    title: "Fender Body Dates: How To Date A Fender By Its Body",
    excerpt: "Find the pencil or ink date inside your Fender's body, in the neck pocket or cavities, and read it as a build date, from a vintage Fender appraiser.",
    image: guideImage9,
    imageAlt: "The neck pocket of an early 1950s Fender Precision Bass, penciled 3-17-53 with a worker's initials T.G. above the date and a stamped D",
  },
  {
    href: "/fender-pot-codes/",
    title: "Fender Pot Codes: How To Date A Fender By Its Potentiometers",
    excerpt: "Read the maker and date code on your Fender's pots to date the guitar to the week. A step-by-step potentiometer dating guide from a vintage Fender appraiser.",
    image: guideImage10,
    imageAlt: "A CTS potentiometer inside a 1965 Fender, its casing stamped with the code 137 6518",
  },
  {
    href: "/fender-pickup-dates/",
    title: "Fender Pickup Dates: How To Date A Fender By Its Pickups",
    excerpt: "Read the pencil, ink, or numeric date on your Fender's pickup base to date the guitar. A step-by-step pickup dating guide from a vintage Fender appraiser.",
    image: guideImage11,
    imageAlt: "The underside of a 1966 Fender Stratocaster pickguard, its three pickups each dated on the base in November 1966",
  },
  {
    href: "/fender-physical-features/",
    title: "Dating A Fender By Its Parts",
    excerpt: "Date a vintage Fender from the parts you can see: logo, inlays, pickguards, saddles, tuners, and string trees, with the year each one changed.",
    image: guideImage12,
    imageAlt: "The bridge of a 1967 Fender Stratocaster, showing stamped steel saddles marked FENDER PAT. PEND.",
  },
  {
    href: "/fender-stratocaster-dating-guide/",
    title: "How To Date A Fender Stratocaster",
    excerpt: "Date a vintage Fender Stratocaster from what you can see: the headstock, logo, board, dots and pickguard, year by year from 1954 to 1971.",
    image: guideImage13,
    imageAlt: "A 1962 Fender Stratocaster in three-color sunburst with a small pre-CBS headstock and a rosewood fingerboard",
  },
  {
    href: "/fender-telecaster-dating-guide/",
    title: "How To Date A Fender Telecaster",
    excerpt: "Date a vintage Fender Telecaster from what you can see: the guard, the bridge, the saddles, the board and the logo, year by year from 1950 to 1971.",
    image: guideImage14,
    imageAlt: "A 1952 Fender Telecaster in butterscotch blonde with its original single-ply black phenolic pickguard and brass saddles",
  },
  {
    href: "/fender-jazzmaster-dating-guide/",
    title: "How To Date A Fender Jazzmaster",
    excerpt: "Date your vintage Fender Jazzmaster by neck, pickups, guards, hardware and serial numbers, with photographs and year-by-year changes from my archive.",
    image: guideImage15,
    imageAlt: "A 1959 Fender Jazzmaster in three-color sunburst with its original gold anodized aluminum pickguard, clay dot inlays, and amber switch tip",
  },
  {
    href: "/fender-jaguar-dating-guide/",
    title: "How To Date A Fender Jaguar",
    excerpt: "Date a vintage Fender Jaguar from what you can see: the inlays, the binding, the pickguard and the patent block, year by year from 1962 to 1975.",
    image: guideImage16,
    imageAlt: "A 1966 Fender Jaguar in original Olympic White finish with a bound rosewood fingerboard and chrome control plates",
  },
  {
    href: "/fender-mustang-dating-guide/",
    title: "How To Date A Fender Mustang",
    excerpt: "Date your vintage Fender Mustang by headstock, pickups, vibrato, guards and Competition finishes, with photographs and year-by-year identification clues.",
    image: guideImage17,
    imageAlt: "Full front view of a 1971 Fender Competition Mustang in Competition Blue with a diagonal racing stripe and a pearloid pickguard",
  },
  {
    href: "/fender-precision-bass-dating-guide/",
    title: "How To Date A Fender Precision Bass",
    excerpt: "Date a vintage Fender Precision Bass from what you can see: slab or contoured body, single or split coil and the gold anodized guard, 1951 to 1975.",
    image: guideImage18,
    imageAlt: "Full body shot of a 1959 Fender Precision Bass with a gold anodized aluminum pickguard and a maple fingerboard",
  },
  {
    href: "/fender-jazz-bass-dating-guide/",
    title: "How To Date A Fender Jazz Bass",
    excerpt: "Date a vintage Fender Jazz Bass from what you can see: stack knob or three knob, the binding, the inlays, the pickguard and the pickup bottoms, 1960 to 1975.",
    image: guideImage19,
    imageAlt: "The original owner of a 1964 Fender Jazz Bass holding it, showing the sunburst body, tortoiseshell pickguard, unbound rosewood board with dot inlays, and the three knob chrome control plate",
  },
  {
    href: "/gibson-pot-codes/",
    title: "Gibson Pot Codes",
    excerpt: "Read the maker and date code on a vintage Gibson’s pots: Centralab and CTS codes, where the stamp sits, and what a pot date can and can’t prove.",
    image: guideImage20,
    imageAlt: "1969 Gibson control cavity with 13769 visible on a CTS pot",
  },
  {
    href: "/gibson-headstock-logo-chronology/",
    title: "Gibson Headstock Logo Chronology",
    excerpt: "Date a Gibson by its headstock logo, from the slanted “The Gibson” script and wartime banner to the missing dot over the “i” and today’s logo.",
    image: guideImage21,
    imageAlt: "Gold silkscreened Gibson, Les Paul and TV Model markings on a 1957 headstock",
  },
  {
    href: "/gibson-tuner-dating-guide/",
    title: "Gibson Tuner Dating Guide",
    excerpt: "Date a vintage Gibson by its tuners: single-line and double-line Klusons, one or two button rings, Gibson Deluxe stamps, wafflebacks and Grovers.",
    image: guideImage22,
    imageAlt: "Double-line Kluson Deluxe tuners on a vintage Gibson ES-335",
  },
  {
    href: "/gibson-knob-dating-guide/",
    title: "Gibson Knob Dating Guide",
    excerpt: "Date a vintage Gibson by its knobs: barrel, speed, bonnet, reflector and witch hat styles, the years each appeared, and how to spot a replaced set.",
    image: guideImage23,
    imageAlt: "Black ridged prewar Gibson control knob with a metal pointer",
  },
  {
    href: "/gibson-physical-features-hardware-guide/",
    title: "Gibson Physical Features And Hardware",
    excerpt: "Date a vintage Gibson from its parts: the volute and Made in USA stamp, neck wood, pancake body, bridge, tailpiece and plating, and the years each changed.",
    image: guideImage24,
    imageAlt: "Made in USA stamp pressed into the back of a red 1971 Gibson Flying V Medallion headstock",
  },
  {
    href: "/gibson-les-paul-dating-guide/",
    title: "Gibson Les Paul Dating Guide",
    excerpt: "Date a vintage Gibson Les Paul by model and year: Goldtop and Burst changes, Custom, Junior, TV and Special tells, plus Deluxe, reissue and serial checks.",
    image: guideImage25,
    imageAlt: "Original 1956 Gibson Les Paul Goldtop with two P-90 pickups, ABR-1 bridge and stopbar tailpiece",
  },
  {
    href: "/gibson-sg-dating-guide/",
    title: "Gibson SG Dating Guide",
    excerpt: "Date a Gibson SG Standard, Custom, Special or Junior using model-specific changes to pickguards, pickups, bridges, vibratos, neck joints & serial numbers.",
    image: guideImage26,
    imageAlt: "Early Gibson SG Standard with a small pickguard, two humbuckers and sideways vibrato",
  },
  {
    href: "/gibson-es-330-dating-guide/",
    title: "Gibson ES-330 Dating Guide",
    excerpt: "Date a Gibson ES-330 with photos and a year-by-year guide to dot and block inlays, P-90 covers, neck joints, knobs, hardware, serial numbers and FONs.",
    image: guideImage27,
    imageAlt: "Sunburst Gibson ES-330 with dot inlays, black dogear P-90s and a trapeze tailpiece",
  },
  {
    href: "/gibson-es-335-345-355-dating-guide/",
    title: "Gibson ES-335, ES-345 And ES-355 Dating Guide",
    excerpt: "Date a Gibson ES-335, ES-345 or ES-355 using model-specific photos and timelines for inlays, pickups, bridges, necks, stereo wiring and Varitone controls.",
    image: guideImage28,
    imageAlt: "Sunburst Gibson ES-345 with a stopbar, gold hardware and Varitone controls",
  },
  {
    href: "/martin-guitar-dating-guide/",
    title: "Martin Guitar Construction Features And Dating",
    excerpt: "Compare Martin body joints, bridges, pickguards, woods, inlays and neck reinforcement with dated photos. Check each feature against the serial.",
    image: guideImage29,
    imageAlt: "Full front of a 1930 Martin 0-21 showing the neck meeting the body at the twelfth fret",
  },
  {
    href: "/martin-neck-block-stamps/",
    title: "Martin Neck-Block Stamps: Models, Serials And Maker’s Marks",
    excerpt: "Martin neck-block stamps show the serial and, from about October 1930, the model. Compare dated photos, hand stamping and separate maker’s marks.",
    image: guideImage30,
    imageAlt: "Model and serial number impressed on a Martin guitar neck block",
  },
  {
    href: "/martin-headstock-logo-dating-guide/",
    title: "Martin Headstock Logo Evolution And Dating Guide",
    excerpt: "Martin began using gold front logos in 1932. Compare rear stamps, outlined script and vertical pearl lettering in dated guitar photos.",
    image: guideImage31,
    imageAlt: "Plain slotted front headstock of Joe’s 1930 Martin 0-21",
  },
  {
    href: "/martin-tuner-dating-guide/",
    title: "Martin Tuner Dating Guide: Grover, Kluson And Waverly",
    excerpt: "Identify Martin Grover, Kluson and Waverly tuners with dated photos of clipped-end plates, wartime gears, wafflebacks, Rotomatics and strip tuners.",
    image: guideImage32,
    imageAlt: "Side of an 1860s Martin 2½-17 headstock showing three gears on an engraved strip plate",
  },
  {
    href: "/martin-guitar-model-numbers/",
    title: "Martin Guitar Model Numbers: Body Sizes And Styles",
    excerpt: "Decode Martin model stamps from 0-18 and 000-21 to D-28 and 000-45. Compare body sizes, style numbers, trim and dated photos.",
    image: guideImage33,
    imageAlt: "000-21 model designation and serial number on Joe’s 1956 Martin neck block",
  },
  {
    href: "/gretsch-labels-and-serial-number-locations/",
    title: "Gretsch Labels And Serial Number Locations",
    excerpt: "Find a Gretsch serial on the label, headstock or nameplate. Compare vintage and modern photos, reused labels and numbers that need a closer feature check.",
    image: guideImage34,
    imageAlt: "Vintage Gretsch paper label visible through a Country Club f-hole",
  },
  {
    href: "/gretsch-pickup-dating-guide/",
    title: "Gretsch Pickup Identification And Dating",
    excerpt: "Compare Gretsch DynaSonic, Filter’Tron, HiLo’Tron and Super’Tron pickups in detailed photos. Check covers, pole pieces, replacements and reissue features.",
    image: guideImage35,
    imageAlt: "Two Filter’Tron pickups on a vintage Gretsch Country Gentleman",
  },
  {
    href: "/gretsch-bridges-and-tailpieces/",
    title: "Gretsch Bridges, Bigsbys And Tailpieces",
    excerpt: "Identify Gretsch Melita, Space Control, bar and Adjusto-Matic bridges, Bigsbys and fixed tailpieces. Compare photos and spot later hardware on guitars.",
    image: guideImage36,
    imageAlt: "V-cut Gretsch Bigsby and bar bridge on an orange 6120",
  },
  {
    href: "/gretsch-knobs-and-controls/",
    title: "Gretsch Knobs, Switches And Control Layouts",
    excerpt: "Identify Gretsch G-arrow knobs, tone switches, master volumes, standby switches and mute controls. Compare vintage layouts, reissues and replacement parts.",
    image: guideImage37,
    imageAlt: "Knobs and lower-bout switch on a vintage Gretsch Viking",
  },
  {
    href: "/gretsch-body-binding-and-inlays/",
    title: "Gretsch Body Shapes, Binding And Inlays",
    excerpt: "Compare Gretsch cutaways, block and thumbnail inlays, T-Zone markers, binding and back pads. See photos and learn which details reappear on reissues.",
    image: guideImage38,
    imageAlt: "Single-cutaway orange Gretsch 6120 with thumbnail fingerboard inlays",
  },
  {
    href: "/gretsch-headstock-and-tuner-dating-guide/",
    title: "Gretsch Headstocks, Logos And Tuners",
    excerpt: "Date a Gretsch by headstock shape, logos and tuners. Compare original hardware, replacement clues and photographs before assigning a vintage guitar year.",
    image: guideImage39,
    imageAlt: "Gretsch logo and horseshoe on an orange 6120 headstock",
  },
  {
    href: "/gretsch-finish-colors/",
    title: "Gretsch Finish Colors And Originality Checks",
    excerpt: "Identify vintage Gretsch finishes, including orange, green, white and black. Compare factory colors, finish wear, repairs and photos from my archive.",
    image: guideImage40,
    imageAlt: "Two-tone Gretsch Rally with yellow top and contrasting sides",
  },
  {
    href: "/gretsch-vintage-vs-reissue/",
    title: "Vintage Gretsch Or Reissue? How To Tell",
    excerpt: "Tell a Gretsch from a later reissue using serial formats, labels and construction. Compare real guitar photos and separate parts from replacements.",
    image: guideImage41,
    imageAlt: "Modern Black Falcon with vintage-style gold appointments",
  },
  {
    href: "/guild-model-prefix-serial-number-charts/",
    title: "Guild Model Prefix Serial Number Charts",
    excerpt: "Search Guild model-prefix serial charts from 1965 to 1997. Compare published ranges, annual last numbers, reused prefixes, missing records and overlaps.",
    image: guideImage42,
    imageAlt: "JA100123 serial stamped above the tuners of a Guild Artist Award",
  },
  {
    href: "/guild-labels-and-serial-number-locations/",
    title: "Guild Labels And Serial Number Locations",
    excerpt: "Find a Guild serial on the headstock, label or neck block. Compare close-up photos, model lines, Hoboken labels and modern import country markings.",
    image: guideImage43,
    imageAlt: "Guild F50 label with AD355 serial and Hoboken address",
  },
  {
    href: "/guild-factory-eras/",
    title: "Guild Factory Eras And Serial Number Systems",
    excerpt: "Compare Guild’s New York, Hoboken, Westerly, Corona, Tacoma, New Hartford and Oxnard eras, with serial examples and guidance for imported models.",
    image: guideImage44,
    imageAlt: "Hoboken address on a Guild F50 label with AD355 serial",
  },
  {
    href: "/guild-acoustic-guitar-identification/",
    title: "Guild Acoustic Guitar Identification Guide",
    excerpt: "Identify Guild acoustic guitars by body, model name, labels and construction. Compare original features and photographs before checking the serial number.",
    image: guideImage45,
    imageAlt: "Natural Guild F50 acoustic with ornate headstock and block inlays",
  },
  {
    href: "/guild-electric-guitar-identification/",
    title: "Guild Electric Guitar Identification Guide",
    excerpt: "Compare Guild Starfire, X-175, X-500, Artist Award & Thunderbird photos. Check body construction, pickups, controls, serials and later reissue differences.",
    image: guideImage46,
    imageAlt: "Sunburst early Guild X175 with white pickup covers and harp tailpiece",
  },
  {
    href: "/guild-pickup-and-hardware-dating-guide/",
    title: "Guild Pickup And Hardware Dating Guide",
    excerpt: "Identify Guild pickups, bridges, tailpieces and tuners by model and era. Compare construction details and photos before deciding which parts are original.",
    image: guideImage47,
    imageAlt: "Close-up of Guild Thunderbird pickups and controls",
  },
  {
    href: "/guild-vintage-vs-reissue/",
    title: "Vintage Guild Vs. Reissue: How To Tell Them Apart",
    excerpt: "Separate Guild guitars from later models and reissues. Compare Westerly Collection labels, country markings, Newark St. names and replaced hardware.",
    image: guideImage48,
    imageAlt: "Westerly Collection label inside a later Guild D150NAT",
  },
  {
    href: "/rickenbacker-pickup-dating-guide/",
    title: "Rickenbacker Pickup Dating Guide",
    excerpt: "Identify Rickenbacker horseshoe, toaster and Hi-Gain pickups with photos and timelines. Compare guitar, bass and reissue features with the serial date.",
    image: guideImage49,
    imageAlt: "Chrome Rickenbacker toaster pickup with two dark slots",
  },
  {
    href: "/rickenbacker-tuner-dating-guide/",
    title: "Rickenbacker Tuner Dating Guide",
    excerpt: "Identify Rickenbacker Kluson, Grover and Schaller tuners. Compare housings, buttons, mounting patterns and model timelines with reference photos.",
    image: guideImage50,
    imageAlt: "Kluson tuners on the back of a Rickenbacker headstock",
  },
  {
    href: "/rickenbacker-knobs-and-controls/",
    title: "Rickenbacker Knobs And Controls",
    excerpt: "Compare Rickenbacker cooker, black vintage and silver-top knobs, plus four- and five-control layouts. Use photos and timelines to check dating clues.",
    image: guideImage51,
    imageAlt: "Silver-top controls and white pickguard on a Mapleglo Rickenbacker 360",
  },
  {
    href: "/rickenbacker-body-binding-and-inlays/",
    title: "Rickenbacker Body, Binding And Inlays",
    excerpt: "Date Rickenbacker features using body shapes, checkerboard binding, dot and triangle inlays, soundholes and headstock photos. Account for later reissues.",
    image: guideImage52,
    imageAlt: "Close view of checkerboard binding on a Rickenbacker body",
  },
  {
    href: "/rickenbacker-tailpiece-dating-guide/",
    title: "Rickenbacker Bridges And Tailpieces",
    excerpt: "Identify Rickenbacker R and trapeze tailpieces, Kauffman and Accent vibratos, and bridge details. Compare timelines, photos and signs of replacement parts.",
    image: guideImage53,
    imageAlt: "R tailpiece and bridge on Joe’s blue 1968 Rickenbacker 4005 bass",
  },
  {
    href: "/rickenbacker-finish-colors/",
    title: "Rickenbacker Finish Colors And Dating",
    excerpt: "Identify Rickenbacker Fireglo, Mapleglo and Jetglo finishes. Compare colors, finish wear and period details with photographs of guitars from my archive.",
    image: guideImage54,
    imageAlt: "Red Fireglo finish on a Rickenbacker 360/12",
  },
];
