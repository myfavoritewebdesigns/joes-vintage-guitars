import { guitarGuides } from "../config/site";
import { appraisalPages } from "../data/appraisal-pages";
import { authenticationGuides } from "../data/authentication-guides";
import { phoenixMetroPages } from "../data/phoenix-metro-pages";
import { stratocasterYearGuides } from "../data/stratocasterValueYears";
import { telecasterValueGuides } from "../data/telecasterValueGuides";

export const siteMapGroupTitles = [
  "Main Pages", "Guitar Identification And Value", "Guitar Appraisal Guides",
  "Sell Your Guitar", "Phoenix Area Guitar Selling", "Serial Number Guides",
  "Authentication Guides", "Martin Dating Guides", "Fender Dating Guides",
  "Gibson Dating Guides", "Gretsch Dating Guides", "Guild Dating Guides",
  "Rickenbacker Dating Guides", "Value Guides", "Services", "Policies", "Other Pages",
] as const;

export type SiteMapGroup = (typeof siteMapGroupTitles)[number];
export interface SiteMapPage { label: string; group: SiteMapGroup; }
export type SiteMapRoute = `/${string}`;

// Existing sitemap labels, navigation labels and page headings. Discovery in
// sitemap.astro is independent of this map, so unlisted pages still appear.
export const siteMapPages: Record<SiteMapRoute, SiteMapPage> = {
  "/": { label: "Home", group: "Main Pages" },
  "/about-me/": { label: "About Joe", group: "Main Pages" },
  "/free-appraisal/": { label: "Free Vintage Guitar Appraisal", group: "Main Pages" },
  "/contact-me/": { label: "Contact", group: "Main Pages" },
  "/blog/": { label: "Blog", group: "Main Pages" },
  "/reverb-reviews/": { label: "Reverb Reviews", group: "Main Pages" },
  "/sell-my-fender-guitar/": { label: "Sell My Fender Guitar", group: "Sell Your Guitar" },
  "/sell-my-gibson-guitar/": { label: "Sell My Gibson Guitar", group: "Sell Your Guitar" },
  "/sell-my-martin-guitar/": { label: "Sell My Martin Guitar", group: "Sell Your Guitar" },
  "/sell-my-gretsch-guitar/": { label: "Sell My Gretsch Guitar", group: "Sell Your Guitar" },
  "/sell-my-guild-guitar/": { label: "Sell My Guild Guitar", group: "Sell Your Guitar" },
  "/sell-your-levin-or-goya-guitar/": { label: "Sell Your Levin or Goya Guitar", group: "Sell Your Guitar" },
  "/sell-my-epiphone-guitar/": { label: "Sell My Epiphone Guitar", group: "Sell Your Guitar" },
  "/sell-my-rickenbacker-guitar/": { label: "Sell My Rickenbacker Guitar", group: "Sell Your Guitar" },
  "/sell-my-national-guitar/": { label: "Sell My National Guitar", group: "Sell Your Guitar" },
  "/sell-your-vintage-dangelico-guitar-in-the-us/": { label: "Sell a Vintage D’Angelico Guitar", group: "Sell Your Guitar" },
  "/sell-an-amplifier-or-effect/": { label: "Sell an Amplifier or Effect", group: "Sell Your Guitar" },
  "/sell-a-guitar-collection/": { label: "Sell a Guitar Collection", group: "Sell Your Guitar" },
  "/fender-guitars-serial-number-guide/": { label: "Fender Serial Number Guide", group: "Serial Number Guides" },
  "/how-to-read-gibson-serial-numbers/": { label: "How to Read Gibson Serial Numbers", group: "Serial Number Guides" },
  "/martin-serial-and-model-numbers/": { label: "Martin Serial & Model Numbers", group: "Serial Number Guides" },
  "/rickenbacker-serial-numbers/": { label: "Rickenbacker Serial Numbers", group: "Serial Number Guides" },
  "/guild-serial-number-lookup/": { label: "Guild Serial Number Lookup", group: "Serial Number Guides" },
  "/gretsch-serial-number-lookup/": { label: "Gretsch Serial Number Lookup", group: "Serial Number Guides" },
  "/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/": { label: "Vintage Fender Amplifier Serial Numbers", group: "Serial Number Guides" },
  "/how-to-spot-a-fake-gibson/": { label: "How to Spot a Fake Gibson", group: "Authentication Guides" },
  "/how-to-spot-a-fake-martin/": { label: "How to Spot a Fake Martin", group: "Authentication Guides" },
  "/how-to-spot-a-fake-fender/": { label: "How to Spot a Fake Fender", group: "Authentication Guides" },
  "/martin-headstock-logo-dating-guide/": { label: "Martin Headstock Logo Dating Guide", group: "Martin Dating Guides" },
  "/martin-tuner-dating-guide/": { label: "Martin Tuner Dating Guide", group: "Martin Dating Guides" },
  "/martin-neck-block-stamps/": { label: "Martin Neck-Block Stamps", group: "Martin Dating Guides" },
  "/martin-guitar-dating-guide/": { label: "Martin Guitar Construction Features", group: "Martin Dating Guides" },
  "/prewar-martin-guitar-guide/": { label: "Prewar Martin Guitar Guide", group: "Martin Dating Guides" },
  "/martin-guitar-model-numbers/": { label: "Martin Guitar Model Numbers", group: "Martin Dating Guides" },
  "/fender-pot-codes/": { label: "Fender Pot Codes", group: "Fender Dating Guides" },
  "/fender-neck-dates/": { label: "Fender Neck Dates", group: "Fender Dating Guides" },
  "/fender-body-dates/": { label: "Fender Body Dates", group: "Fender Dating Guides" },
  "/fender-pickup-dates/": { label: "Fender Pickup Dates", group: "Fender Dating Guides" },
  "/fender-physical-features/": { label: "Fender Physical Features", group: "Fender Dating Guides" },
  "/fender-stratocaster-dating-guide/": { label: "How To Date A Fender Stratocaster", group: "Fender Dating Guides" },
  "/fender-telecaster-dating-guide/": { label: "How To Date A Fender Telecaster", group: "Fender Dating Guides" },
  "/fender-jazzmaster-dating-guide/": { label: "How To Date A Fender Jazzmaster", group: "Fender Dating Guides" },
  "/fender-jaguar-dating-guide/": { label: "How To Date A Fender Jaguar", group: "Fender Dating Guides" },
  "/fender-jazz-bass-dating-guide/": { label: "How To Date A Fender Jazz Bass", group: "Fender Dating Guides" },
  "/fender-precision-bass-dating-guide/": { label: "How To Date A Fender Precision Bass", group: "Fender Dating Guides" },
  "/fender-mustang-dating-guide/": { label: "How To Date A Fender Mustang", group: "Fender Dating Guides" },
  "/gibson-pot-codes/": { label: "Gibson Pot Codes", group: "Gibson Dating Guides" },
  "/gibson-headstock-logo-chronology/": { label: "Gibson Logo History", group: "Gibson Dating Guides" },
  "/gibson-knob-dating-guide/": { label: "Gibson Knob Dating Guide", group: "Gibson Dating Guides" },
  "/gibson-tuner-dating-guide/": { label: "Gibson Tuner Dating Guide", group: "Gibson Dating Guides" },
  "/gibson-physical-features-hardware-guide/": { label: "Gibson Physical Features And Hardware", group: "Gibson Dating Guides" },
  "/gibson-les-paul-dating-guide/": { label: "Gibson Les Paul Dating Guide", group: "Gibson Dating Guides" },
  "/gibson-sg-dating-guide/": { label: "Gibson SG Dating Guide", group: "Gibson Dating Guides" },
  "/gibson-es-335-345-355-dating-guide/": { label: "Gibson ES-335, ES-345 And ES-355 Dating Guide", group: "Gibson Dating Guides" },
  "/gibson-es-330-dating-guide/": { label: "Gibson ES-330 Dating Guide", group: "Gibson Dating Guides" },
  "/post/gibson-es-335-345-355-guide/": { label: "Gibson ES-335, ES-345 & ES-355 Comparison Guide", group: "Value Guides" },
  "/post/vintage-gibson-les-paul-family-guide/": { label: "Vintage Gibson Les Paul Family Guide", group: "Value Guides" },
  "/vintage-fender-stratocaster-value-guide/": { label: "Vintage Fender Stratocaster Value Guide", group: "Value Guides" },
  "/vintage-fender-telecaster-value-guide/": { label: "Vintage Fender Telecaster Value Guide", group: "Value Guides" },
  "/vintage-fender-esquire-value-guide/": { label: "Vintage Fender Esquire Value Guide", group: "Value Guides" },
  "/vintage-gibson-les-paul-market-value-guide/": { label: "Vintage Gibson Les Paul Market Value Guide", group: "Value Guides" },
  "/martin-d-28-d-18-d-45-dreadnought-value-guide/": { label: "Martin D-28, D-18 & D-45 Dreadnought Value Guide", group: "Value Guides" },
  "/repair/": { label: "Instrument Repair", group: "Services" },
  "/consignment/": { label: "Vintage Guitar Consignment", group: "Services" },
  "/privacy-policy/": { label: "Privacy Policy", group: "Policies" },
  "/terms/": { label: "Text Message Terms", group: "Policies" },
  "/refund_returns/": { label: "Refund & Returns Policy", group: "Policies" },
  "/gretsch-labels-and-serial-number-locations/": { label: "Gretsch Labels And Serial Number Locations", group: "Gretsch Dating Guides" },
  "/gretsch-pickup-dating-guide/": { label: "Gretsch Pickup Identification And Dating", group: "Gretsch Dating Guides" },
  "/gretsch-bridges-and-tailpieces/": { label: "Gretsch Bridges, Bigsbys And Tailpieces", group: "Gretsch Dating Guides" },
  "/gretsch-knobs-and-controls/": { label: "Gretsch Knobs, Switches And Control Layouts", group: "Gretsch Dating Guides" },
  "/gretsch-body-binding-and-inlays/": { label: "Gretsch Body Shapes, Binding And Inlays", group: "Gretsch Dating Guides" },
  "/gretsch-headstock-and-tuner-dating-guide/": { label: "Gretsch Headstocks, Logos And Tuners", group: "Gretsch Dating Guides" },
  "/gretsch-finish-colors/": { label: "Gretsch Finish Colors And Originality Checks", group: "Gretsch Dating Guides" },
  "/gretsch-vintage-vs-reissue/": { label: "Vintage Gretsch Or Reissue? How To Tell", group: "Gretsch Dating Guides" },
  "/guild-model-prefix-serial-number-charts/": { label: "Guild Model Prefix Serial Number Charts", group: "Guild Dating Guides" },
  "/guild-labels-and-serial-number-locations/": { label: "Guild Labels And Serial Number Locations", group: "Guild Dating Guides" },
  "/guild-factory-eras/": { label: "Guild Factory Eras And Serial Number Systems", group: "Guild Dating Guides" },
  "/guild-acoustic-guitar-identification/": { label: "Guild Acoustic Guitar Identification Guide", group: "Guild Dating Guides" },
  "/guild-electric-guitar-identification/": { label: "Guild Electric Guitar Identification Guide", group: "Guild Dating Guides" },
  "/guild-pickup-and-hardware-dating-guide/": { label: "Guild Pickup And Hardware Dating Guide", group: "Guild Dating Guides" },
  "/guild-vintage-vs-reissue/": { label: "Vintage Guild Vs. Reissue: How To Tell Them Apart", group: "Guild Dating Guides" },
  "/gibson-country-western-authentication-guide/": { label: "Gibson Country Western Authentication Guide", group: "Authentication Guides" },
  "/gibson-dove-authentication-guide/": { label: "Gibson Dove Authentication Guide", group: "Authentication Guides" },
  "/gibson-southern-jumbo-authentication-guide/": { label: "Gibson Southern Jumbo Authentication Guide", group: "Authentication Guides" },
  "/vintage-gibson-country-western-value-guide/": { label: "Vintage Gibson Country Western Value Guide", group: "Value Guides" },
  "/vintage-gibson-dove-value-guide/": { label: "Vintage Gibson Dove Value Guide", group: "Value Guides" },
  "/vintage-gibson-l-0-l-00-value-guide/": { label: "Gibson L-0 & L-00 Value and Authentication Guide", group: "Value Guides" },
  "/vintage-gibson-southern-jumbo-value-guide/": { label: "Vintage Gibson Southern Jumbo Value Guide", group: "Value Guides" },
  "/vintage-fender-jaguar-value-guide/": { label: "Vintage Fender Jaguar Value Guide", group: "Value Guides" },
  "/vintage-fender-jazz-bass-value-guide/": { label: "Vintage Fender Jazz Bass Value Guide", group: "Value Guides" },
  "/vintage-fender-jazzmaster-value-guide/": { label: "Vintage Fender Jazzmaster Value Guide", group: "Value Guides" },
  "/vintage-fender-precision-bass-value-guide/": { label: "Vintage Fender Precision Bass Value Guide", group: "Value Guides" },
  "/vintage-fender-value-guide/": { label: "Vintage Fender Value Guide", group: "Value Guides" },
  "/vintage-gibson-acoustic-value-guide/": { label: "Vintage Gibson Acoustic Guitar Value Guide", group: "Value Guides" },
  "/vintage-gibson-es-125-value-guide/": { label: "Vintage Gibson ES-125 Value Guide", group: "Value Guides" },
  "/vintage-gibson-es-330-value-guide/": { label: "Vintage Gibson ES-330 Value Guide", group: "Value Guides" },
  "/vintage-gibson-es-335-value-guide/": { label: "Vintage Gibson ES-335 Value Guide", group: "Value Guides" },
  "/vintage-gibson-es-355-value-guide/": { label: "Vintage Gibson ES-355 Value Guide", group: "Value Guides" },
  "/vintage-gibson-j-200-value-guide/": { label: "Vintage Gibson J-200 Value Guide", group: "Value Guides" },
  "/vintage-gibson-j-45-value-guide/": { label: "Vintage Gibson J-45 Value Guide", group: "Value Guides" },
  "/vintage-gibson-les-paul-custom-value-guide/": { label: "Vintage Gibson Les Paul Custom Value Guide", group: "Value Guides" },
  "/vintage-gibson-les-paul-junior-value-guide/": { label: "Vintage Gibson Les Paul Junior Value Guide", group: "Value Guides" },
  "/vintage-gibson-les-paul-special-value-guide/": { label: "Vintage Gibson Les Paul Special Value Guide", group: "Value Guides" },
  "/vintage-gibson-lg-series-value-guide/": { label: "Vintage Gibson LG Series Value Guide", group: "Value Guides" },
  "/vintage-gibson-sg-custom-value-guide/": { label: "Vintage Gibson SG Custom Value Guide", group: "Value Guides" },
  "/vintage-gibson-sg-junior-value-guide/": { label: "Vintage Gibson SG Junior Value Guide", group: "Value Guides" },
  "/vintage-gibson-sg-special-value-guide/": { label: "Vintage Gibson SG Special Value Guide", group: "Value Guides" },
  "/vintage-gibson-sg-standard-value-guide/": { label: "Vintage Gibson SG Standard Value Guide", group: "Value Guides" },
  "/vintage-gibson-sg-value-guide/": { label: "Vintage Gibson SG Value Guide", group: "Value Guides" },
  "/vintage-gibson-value-guide/": { label: "Vintage Gibson Value Guide", group: "Value Guides" },
  "/what-lowers-vintage-guitar-value/": { label: "What Lowers A Vintage Guitar's Value?", group: "Guitar Identification And Value" },
  "/how-much-does-a-refinish-hurt-guitar-value/": { label: "How Much Does A Refinish Hurt A Vintage Guitar's Value?", group: "Guitar Identification And Value" },
  "/how-to-tell-if-a-guitar-has-been-refinished/": { label: "How To Tell If A Vintage Guitar Has Been Refinished", group: "Guitar Identification And Value" },
  "/do-replaced-pickups-hurt-guitar-value/": { label: "Do Replaced Pickups Hurt A Vintage Guitar's Value?", group: "Guitar Identification And Value" },
  "/should-i-restore-my-guitar-before-selling/": { label: "Should I Restore My Vintage Guitar Before Selling It?", group: "Sell Your Guitar" },
  "/inherited-a-guitar/": { label: "Inherited A Guitar? What To Do Next", group: "Sell Your Guitar" },
  "/selling-a-loved-ones-guitar/": { label: "Is It Wrong To Sell A Loved One's Guitar?", group: "Sell Your Guitar" },
  "/what-guitar-do-i-have/": { label: "What Guitar Do I Have?", group: "Guitar Identification And Value" },
  "/found-an-old-guitar/": { label: "Found An Old Guitar?", group: "Guitar Identification And Value" },
  "/what-brand-is-my-guitar/": { label: "What Brand Is My Guitar?", group: "Guitar Identification And Value" },
  "/how-old-is-my-guitar/": { label: "How Old Is My Guitar?", group: "Guitar Identification And Value" },
  "/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/": { label: "What Affects My Guitar's Value?", group: "Guitar Identification And Value" },
  "/photo-license/": { label: "Photo License", group: "Policies" },
  "/rickenbacker-body-binding-and-inlays/": { label: "Rickenbacker Body, Binding And Inlays", group: "Rickenbacker Dating Guides" },
  "/rickenbacker-finish-colors/": { label: "Rickenbacker Finish Colors And Dating", group: "Rickenbacker Dating Guides" },
  "/rickenbacker-knobs-and-controls/": { label: "Rickenbacker Knobs And Controls", group: "Rickenbacker Dating Guides" },
  "/rickenbacker-pickup-dating-guide/": { label: "Rickenbacker Pickup Dating Guide", group: "Rickenbacker Dating Guides" },
  "/rickenbacker-tailpiece-dating-guide/": { label: "Rickenbacker Bridges And Tailpieces", group: "Rickenbacker Dating Guides" },
  "/rickenbacker-tuner-dating-guide/": { label: "Rickenbacker Tuner Dating Guide", group: "Rickenbacker Dating Guides" },
  "/videos/where-to-find-fender-serial-numbers/": { label: "Where To Find Fender Serial Numbers, Neck Dates And Pot Codes (Video)", group: "Guitar Identification And Value" },
};

export const dynamicSiteMapRoutes: SiteMapRoute[] = [];
function addPage(route: SiteMapRoute, label: string, group: SiteMapGroup, dynamic = false) {
  siteMapPages[route] ??= { label, group };
  if (dynamic) dynamicSiteMapRoutes.push(route);
}
for (const link of guitarGuides) addPage(link.href as SiteMapRoute, link.label, "Guitar Identification And Value");
for (const page of appraisalPages) addPage(`/free-appraisal/${page.slug}/`, `${page.brand} Guitar Appraisal`, "Guitar Appraisal Guides", true);
for (const page of phoenixMetroPages) addPage(`/${page.slug}/`, page.navLabel, "Phoenix Area Guitar Selling");
for (const page of authenticationGuides) addPage(`/how-to-spot-a-fake-${page.brand.toLowerCase()}/`, `How To Spot A Fake ${page.brand}`, "Authentication Guides", true);
for (const guide of stratocasterYearGuides) addPage(`/vintage-fender-stratocaster-value-guide/${guide.year}/`, `${guide.year} Fender Stratocaster Value Guide`, "Value Guides", true);
for (const guide of telecasterValueGuides) addPage(`/vintage-fender-telecaster-value-guide/${guide.slug}/`, `${guide.navLabel} Value Guide`, "Value Guides", true);

export const excludedSiteMapRoutes = new Set<string>([
  "/404/", "/thank-you/", "/jvg-shipping-process/", "/jvg-shipping-process-2/",
  "/fender-serial-tool-v2/", "/sitemap/",
]);

export function siteMapLabel(label: string): string {
  return label
    .replace(/&(?:mdash|ndash);|&#(?:8211|8212);|&#x(?:2013|2014);/gi, " to ")
    .replace(/[\u2013\u2014]/g, " to ")
    .replace(/\s+/g, " ").trim();
}

export function fallbackSiteMapLabel(route: string): string {
  return route.split("/").filter(Boolean).join(" ").replace(/[-_]+/g, " ")
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}
