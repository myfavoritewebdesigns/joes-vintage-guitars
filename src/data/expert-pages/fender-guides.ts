// Keep this inventory asset-free: the sitemap and page share its guide count.
const stratocasterYearGuides = Array.from({ length: 12 }, (_, index) => ({ year: 1954 + index }));
const telecasterValueGuides = [
  { year: "1950", name: "Fender Broadcaster", slug: "1950-broadcaster" },
  { year: "1951", name: "Fender Nocaster", slug: "1951-nocaster" },
  { year: "1951", name: "Fender Telecaster", slug: "1951-telecaster" },
  ...Array.from({ length: 14 }, (_, index) => ({ year: `${1952 + index}`, name: "Fender Telecaster", slug: `${1952 + index}` })),
  { year: "1966, 1967 And 1968", name: "Fender Telecaster", slug: "1966-1968" },
];

export type Guide = { title: string; href: string; covers: string };
const methods: Guide[] = [
  { title: "Fender Serial Number Guide", href: "/fender-guitars-serial-number-guide/", covers: "Serial locations, year charts and checks against the rest of the guitar." },
  { title: "Fender Serial Number Lookup Tool", href: "/fender-guitars-serial-number-guide/#lookup", covers: "The interactive serial lookup inside my published serial guide." },
  { title: "Fender Neck Dates", href: "/fender-neck-dates/", covers: "Neck heel dates, stamps and model codes." },
  { title: "Fender Body Dates", href: "/fender-body-dates/", covers: "Body dates and markings inside the cavities." },
  { title: "Fender Pot Codes", href: "/fender-pot-codes/", covers: "Potentiometer manufacturer and date codes." },
  { title: "Fender Pickup Dates", href: "/fender-pickup-dates/", covers: "Pickup dates, bobbins and construction details." },
  { title: "Fender Physical Features", href: "/fender-physical-features/", covers: "Logos, fingerboards, pickguards, tuners and hardware." },
];
const modelDating: Guide[] = [
  ["Stratocaster", "stratocaster"], ["Telecaster", "telecaster"], ["Jazzmaster", "jazzmaster"],
  ["Jaguar", "jaguar"], ["Mustang", "mustang"], ["Jazz Bass", "jazz-bass"], ["Precision Bass", "precision-bass"],
].map(([model, slug]) => ({ title: `Fender ${model} Dating Guide`, href: `/fender-${slug}-dating-guide/`, covers: `${model} identification and changes in its construction and parts.` }));
const modelValues: Guide[] = [
  { title: "Fender Value Hub", href: "/vintage-fender-value-guide/", covers: "A directory of my Fender guitar and bass value guides." },
  ...[ ["Stratocaster", "stratocaster"], ["Telecaster", "telecaster"], ["Esquire", "esquire"], ["Jazzmaster", "jazzmaster"],
    ["Jaguar", "jaguar"], ["Jazz Bass", "jazz-bass"], ["Precision Bass", "precision-bass"] ].map(([model, slug]) => ({
      title: `Fender ${model} Value Guide`, href: `/vintage-fender-${slug}-value-guide/`, covers: `${model} values by year, finish and condition.`,
    })),
  { title: "Fender Mustang History And Value", href: "/post/fender-mustang-history-value/", covers: "Standard and Competition Mustang history, identification and values." },
  { title: "Fender Bass VI Value Guide", href: "/post/fender-bass-vi-value-guide/", covers: "Original Bass VI values and condition comparisons." },
  { title: "Fender Telecaster Thinline, Custom And Deluxe Value Guide", href: "/post/fender-telecaster-thinline-custom-deluxe-value-guide/", covers: "Values for the Thinline, Custom and Deluxe models." },
];
export const individualValueModels = [
  { model: "Fender Stratocaster", description: "My Stratocaster year guides cover values, originality and condition from 1954 to 1965.", guides: stratocasterYearGuides.map(g => ({ title: `${g.year}`, href: `/vintage-fender-stratocaster-value-guide/${g.year}/` })) },
  { model: "Fender Telecaster, Broadcaster And Nocaster", description: "My Telecaster family year guides cover values, finishes and condition from 1950 to 1968.", guides: telecasterValueGuides.map(g => ({ title: `${g.year} ${g.name.replace("Fender ", "")}`, href: `/vintage-fender-telecaster-value-guide/${g.slug}/` })) },
];
const individualValues: Guide[] = individualValueModels.flatMap(model => model.guides.map(guide => ({ ...guide, covers: model.description })));
const detailedGuides: Guide[] = [
  ["1952 Fender Telecaster Authentication", "1952-fender-telecaster-authentication-guide", "Blackguard Telecaster construction and originality."],
  ["1959 Fender Telecaster Authentication", "1959-fender-telecaster-authentication-guide", "Originality and specifications of the 1959 Telecaster."],
  ["1962 Fender Stratocaster Authentication", "1962-fender-stratocaster-authentication-guide", "Slab boards, black pickups and pre-CBS details."],
  ["1963 Fender Stratocaster Authentication", "1963-fender-stratocaster-authentication-guide", "Dating and originality of the 1963 Stratocaster."],
  ["1966 Fender Stratocaster Authentication", "1966-fender-stratocaster-authentication-guide", "Specifications and originality of the 1966 Stratocaster."],
  ["1967 Fender Stratocaster Authentication", "1967-fender-stratocaster-authentication-guide", "Specifications and originality of the 1967 Stratocaster."],
  ["Fender Custom Color Authentication", "fender-custom-color-authentication-guide", "Custom color finishes and evidence of refinishing."],
  ["Fender Esquire Authentication", "fender-esquire-authentication-guide", "Factory Esquire identity and later conversions."],
  ["Fender Bass VI Authentication", "fender-bass-vi-authentication-guide", "Identification and originality of the six-string Bass VI."],
  ["Fender Telecaster Thinline, Custom And Deluxe Authentication", "fender-telecaster-thinline-custom-deluxe-authentication-guide", "The different factory layouts and identifying features."],
  ["Pink Paisley Telecaster Guide", "fender-pink-paisley-telecaster-guide", "Original Pink Paisley Telecaster finishes and details."],
  ["Hardtail Stratocaster Guide", "hardtail-stratocaster-vintage-guide", "The fixed-bridge Stratocaster and its construction."],
  ["Early Slab-Body Precision Bass Guide", "1952-fender-precision-bass-guide", "Identification and dating of the early Precision Bass."],
  ["Gold-Guard Precision Bass Guide", "gold-guard-fender-precision-bass", "Identification and specifications of gold-guard Precision Basses."],
  ["Jazzmaster Evolution Guide", "fender-jazzmaster-evolution-guide-1958-1971", "The Jazzmaster's specification changes."],
  ["Vintage Fender Jaguar Guide", "vintage-fender-jaguar-guide", "Jaguar dating and authentication."],
  ["Vintage Fender Jazz Bass Guide", "vintage-fender-jazz-bass-guide", "Jazz Bass dating and identification."],
].map(([title, slug, covers]) => ({ title, href: `/post/${slug}/`, covers }));
detailedGuides.push({ title: "How To Spot A Fake Fender", href: "/how-to-spot-a-fake-fender/", covers: "Fender authentication and signs of replacement or reproduction parts." });
const amplifierGuides: Guide[] = [
  { title: "Fender Amplifier Serial Number Guide", href: "/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/", covers: "Amplifier serial numbers and dating evidence." },
  { title: "Fender Amplifier Eras", href: "/post/fender-amp-eras-tweed-brownface-blackface-silverface/", covers: "Tweed, brownface, blackface and silverface identification." },
  ...[ ["Bassman", "bassman"], ["Champ And Vibro Champ", "champ"], ["Deluxe And Deluxe Reverb", "deluxe-reverb"],
    ["Princeton And Princeton Reverb", "princeton-reverb"], ["Super And Super Reverb", "super-reverb"],
    ["Twin And Twin Reverb", "twin-reverb"], ["Vibrolux And Vibrolux Reverb", "vibrolux"] ].flatMap(([model, slug]) => [
      { title: `Fender ${model} Identification`, href: `/post/fender-${slug}-authentication-guide/`, covers: `${model} models, construction and dating.` },
      { title: `Fender ${model} Values`, href: `/post/fender-${slug}-value-guide/`, covers: `${model} values by model and condition.` },
    ]),
];
export const guideGroups = [
  { title: "Serial Numbers And Component Dates", guides: methods },
  { title: "Model Dating Guides", guides: modelDating },
  { title: "Guitar And Bass Value Guides", guides: modelValues },
  { title: "Individual Year Value Guides", guides: individualValues },
  { title: "Detailed Guitar And Bass References", guides: detailedGuides },
  { title: "Fender Amplifier References", guides: amplifierGuides },
];

export const guideLinkCount = guideGroups.reduce((count, group) => count + group.guides.length, 0);
