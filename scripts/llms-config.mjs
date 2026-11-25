/** Editable llms.txt wording, grouping, featured posts and Markdown priorities. */
export const header = {
  title: "Joe's Vintage Guitars",
  summary: "Joe's Vintage Guitars is a by-appointment vintage guitar buyer and shop in Mesa, Arizona (Phoenix area), specializing in buying, selling, consigning, and appraising vintage electric and acoustic guitars, basses, and amps. Owner Joe is a longtime vintage-instrument specialist with a 4.9-star Reverb shop (joe-s-gear-emporium-4, 2,191 verified reviews).",
  // Preserve the approved Notes facts. The phone is supplied from site.ts.
  facts: (phone) => `Joe's Vintage Guitars is buy-and-consign focused; the value guides list editorial price ranges, not live sale offers. Location: 47 N Fraser Dr E, Mesa, AZ 85203. Phone: ${phone}. By appointment. Buys and consigns nationwide.`,
};

export const excludedPaths = new Set([
  "/thank-you/", "/jvg-shipping-process/", "/jvg-shipping-process-2/",
  "/404/", "/fender-serial-tool-v2/",
]);

export const moneyRules = [
  /^\/$/, /^\/sell-[^/]+\/$/, /^\/free-appraisal(?:\/[^/]+)?\/$/,
  /^\/(?:consignment|contact-me|where-to-sell-vintage-guitar-phoenix)\/$/,
];

// First match wins. Blog posts are selected separately by category below.
export const sectionRules = [
  { id: "sell", paths: moneyRules },
  { id: "sell", paths: [/^\/repair\/$/] },
  { id: "value", paths: [/value-guide\//, /^\/(?:what-lowers-vintage-guitar-value|do-replaced-pickups-hurt-guitar-value|how-much-does-a-refinish-hurt-guitar-value)\/$/] },
  { id: "authentication", paths: [/authentication|identification|how-to-spot-a-fake/, /^\/(?:found-an-old-guitar|what-guitar-do-i-have|what-brand-is-my-guitar|inherited-a-guitar|how-to-tell-if-a-guitar-has-been-refinished)\/$/] },
  { id: "serial", paths: [/^\/(?:fender|gibson|martin|guild|gretsch|rickenbacker)-/, /^\/(?:how-to-read-gibson-serial-numbers|vintage-fender-amplifier-serial-numbers-how-to-find-the-year|how-old-is-my-guitar|prewar-martin-guitar-guide)\/$/, /^\/videos\/where-to-find-fender-serial-numbers\/$/] },
  { id: "trust", paths: [/^\/(?:about-me|reverb-reviews|photo-license)\/$/] },
];

export const sections = [
  { id: "sell", title: "Sell Or Appraise Your Guitar" },
  { id: "serial", title: "Serial Number Lookup And Dating Guides" },
  { id: "value", title: "Value Guides" },
  { id: "authentication", title: "Authentication And Identification Guides" },
  { id: "blog", title: "Blog Posts By Topic" },
  { id: "trust", title: "About And Trust" },
  { id: "optional", title: "Optional" },
];

export const topPostsPerCategory = 8;
// Set a category slug to an ordered list of /post/.../ paths to curate it.
// Categories without an override use the latest JSON-LD dateModified, then URL.
export const topPostsByCategory = {};

// Ordered groups also determine priority in llms-full.txt. All matching pages
// still get individual copies if the aggregate reaches its byte limit.
export const markdownCopies = [
  ...moneyRules,
  "/fender-guitars-serial-number-guide/",
  "/how-to-read-gibson-serial-numbers/",
  "/martin-serial-and-model-numbers/",
  "/guild-serial-number-lookup/",
  "/gretsch-serial-number-lookup/",
  "/rickenbacker-serial-numbers/",
  "/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/",
  /^\/(?:vintage-[^/]*value-guide|martin-d-28-d-18-d-45-dreadnought-value-guide)\/$/,
  /^\/how-to-spot-a-fake-[^/]+\/$/,
  "/found-an-old-guitar/", "/what-guitar-do-i-have/",
  "/what-brand-is-my-guitar/", "/about-me/",
];

export const fullTextMaxBytes = 1_000_000;
