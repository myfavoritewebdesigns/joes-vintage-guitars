export const SITE_URL = "https://www.joesvintageguitarsaz.com";
export const SITE_NAME = "Joe's Vintage Guitars - We Buy Guitars!";
export const LEGAL_NAME = "Joe's Vintage Guitars";

export const contact = {
  phone: "(602) 900-6635",
  /** E.164 format for `tel:` and `sms:` hrefs. */
  tel: "+16029006635",
  /** Dashed format required by Organization JSON-LD (`+1-XXX-XXX-XXXX`). */
  telDashed: "+1-602-900-6635",
  email: "joesvintageguitars94@gmail.com",
  /** Google Maps share link for the storefront pin. */
  mapUrl: "https://g.page/joesvintageguitars?share",
  /** Decimal CID of Joe's Google Business Profile. Matches the g.page mapUrl
   *  above and every Google review deep-link on the site. Builds the
   *  "see our Google reviews" link in hrefs.googleReviews. */
  mapCid: "474893161839765348",
  address: {
    street: "47 N Fraser Dr E",
    city: "Mesa",
    region: "AZ",
    postalCode: "85203",
    country: "US",
    lat: 33.41735776080888,
    lng: -111.81037593707954,
  },
} as const;

/* ---------- Reusable inline-SVG icon paths (24x24 viewBox) ---------- */
/**
 * Same paths appear in Header / Footer / FloatingCTAs / ContactSection.
 * Importing from one place keeps the rendered HTML byte-identical to before
 * while removing the literal duplication.
 */
export const phoneIconPath = "M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.36 2.32.55 3.57.55a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.45.55 3.57a1 1 0 01-.24 1.02l-2.19 2.2z";
export const mailIconPath  = "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z";
export const smsIconPath   = "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 11H8v-2h8v2zm0-4H8V7h8v2z";
export const pinIconPath   = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z";

/* ---------- Form field constants ---------- */
/** "Best way to reply" radio options shared by ValueProp + ContactSection forms. */
export const replyMethods = ["Call", "Text", "Email"] as const;

/**
 * hCaptcha PUBLIC site key — safe to ship in client HTML. The matching SECRET
 * key lives only in the server env (HCAPTCHA_SECRET) and is used by
 * functions/api/contact.ts to verify each token against hcaptcha siteverify.
 */
export const hcaptchaSiteKey = "3600d774-af6e-4466-9654-d94ceeacc44c";

/** Convenience derived values to avoid `tel:` / `mailto:` / `sms:` string concat at call sites. */
export const hrefs = {
  tel: `tel:${contact.tel}`,
  sms: `sms:${contact.tel}`,
  mailto: `mailto:${contact.email}`,
  googleReviews: `https://maps.google.com/?cid=${contact.mapCid}`,
} as const;

/* ---------- Image licensing ---------- */
/**
 * Joe Dampt personally shot 100% of the photos on this site. They ship under a
 * PERMISSIVE attribution license: reuse is welcome (including commercially) as
 * long as the user credits Joe and links back to the site. The logo / brand
 * marks are the ONLY exception (all rights reserved — see /photo-license/#brand
 * -assets), and the logo's ImageObject asserts copyright only (no `license`, so
 * no "Licensable" badge on the brand mark).
 *
 * Single source of truth for the schema.org ImageObject license fields that
 * power Google's "Licensable images" feature (GSC "Image metadata" report).
 * Never hard-code these at a call site — import `imageLicense`.
 */
export const imageLicense = {
  /** Permissive terms page for Joe's photos. Used as BOTH `license` and `acquireLicensePage`. */
  photoLicenseUrl: `${SITE_URL}/photo-license/`,
  /** Restrictive brand-asset terms (anchor on the same page). For reference; the logo node uses copyright-only. */
  brandAssetsUrl: `${SITE_URL}/photo-license/#brand-assets`,
  /** Attribution string Google shows as the credit line. */
  creditText: "Joe Dampt, Joe's Vintage Guitars",
  creatorName: "Joe Dampt",
  copyrightNotice: "© Joe Dampt, Joe's Vintage Guitars",
} as const;

/* ---------- Social profiles ---------- */
/**
 * Discriminated on `useImg`. Most icons render as inline SVGs from a path;
 * Reverb's mark is an external <img>. The union makes the two shapes mutually
 * exclusive so a malformed entry fails at typecheck.
 */
interface SvgSocial {
  label: string;
  href: string;
  useImg?: false;
  path: string;
}
interface ImgSocial {
  label: string;
  href: string;
  useImg: true;
  imgSrc: string;
  path?: never;
}
export type SocialLink = SvgSocial | ImgSocial;

/**
 * Master list of social profiles. Order is internal; consumers slice by ID.
 *
 * - `headerSocials` controls which appear (and in what order) in the header.
 * - `footerSocials` controls the footer's social bar.
 * - `socialSameAs` is the canonical `sameAs` list for Organization JSON-LD —
 *   order matches the live site's existing JSON-LD #2 to avoid SEO diffs.
 */
type SocialId = "youtube" | "reverb" | "facebook" | "instagram" | "tiktok" | "pinterest";

type SocialDef = SocialLink & { id: SocialId };

const socialsById: Record<SocialId, SocialDef> = {
  youtube: {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@joesvintageguitars",
    path: "M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.4-1.9.5-3.8.5-5.8s-.1-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z",
  },
  reverb: {
    id: "reverb",
    label: "Reverb",
    href: "https://reverb.com/shop/joe-s-gear-emporium-4",
    useImg: true,
    imgSrc: "/images/reverb-icon.svg",
  },
  facebook: {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/joesvintageguitars",
    path: "M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.14 8.44 9.9V14.95H7.9v-2.88h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.88h-2.33V22c4.78-.76 8.45-4.89 8.45-9.93z",
  },
  instagram: {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/joesvintageguitarsaz/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42a3.7 3.7 0 011.34.87c.42.42.68.82.87 1.34.16.42.36 1.06.42 2.23.05 1.26.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.2.52-.45.92-.87 1.34-.42.42-.82.68-1.34.87-.42.16-1.06.36-2.23.42-1.26.05-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 01-1.34-.87 3.7 3.7 0 01-.87-1.34c-.16-.42-.36-1.06-.42-2.23C2.18 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.2-.52.45-.92.87-1.34.42-.42.82-.68 1.34-.87.42-.16 1.06-.36 2.23-.42C8.42 2.18 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63a6 6 0 00-2.16 1.41A6 6 0 00.57 4.2C.28 4.96.07 5.84.01 7.11-.06 8.4-.07 8.8-.07 12.06s.01 3.66.07 4.94c.06 1.27.27 2.15.56 2.91a6 6 0 001.41 2.16 6 6 0 002.16 1.41c.76.3 1.64.5 2.91.56C8.34 23.99 8.74 24 12 24s3.66-.01 4.94-.07c1.27-.06 2.15-.27 2.91-.56a6 6 0 002.16-1.41 6 6 0 001.41-2.16c.3-.76.5-1.64.56-2.91.06-1.28.07-1.68.07-4.94s-.01-3.66-.07-4.94c-.06-1.27-.27-2.15-.56-2.91A6 6 0 0022 2.04 6 6 0 0019.86.63C19.1.34 18.22.13 16.95.07 15.66.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 105.84 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zM18.41 4.16a1.44 1.44 0 11-1.44 1.44 1.44 1.44 0 011.44-1.44z",
  },
  tiktok: {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@joesvintageguitar",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.07A6.33 6.33 0 005.7 20.1a6.34 6.34 0 0010.86-4.43V8.18a8.16 8.16 0 005.07 1.65V6.69z",
  },
  pinterest: {
    id: "pinterest",
    label: "Pinterest",
    href: "https://www.pinterest.com/joesvintageguitars0087/",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.43 7.62 11.18-.11-.95-.2-2.4.04-3.43.22-.94 1.4-5.95 1.4-5.95s-.36-.71-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.51 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.23 0 1.04.4 2.15.9 2.75.1.12.11.22.08.34-.09.37-.29 1.2-.33 1.36-.05.22-.17.27-.4.16-1.48-.69-2.41-2.86-2.41-4.6 0-3.75 2.72-7.19 7.84-7.19 4.12 0 7.32 2.94 7.32 6.86 0 4.09-2.58 7.39-6.16 7.39-1.2 0-2.34-.63-2.72-1.36l-.74 2.82c-.27 1.03-1 2.32-1.49 3.11C9.57 23.81 10.77 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z",
  },
};

/** Header social bar — YouTube, Reverb, Facebook, Instagram, TikTok (no Pinterest). */
export const headerSocials: SocialDef[] = [
  socialsById.youtube,
  socialsById.reverb,
  socialsById.facebook,
  socialsById.instagram,
  socialsById.tiktok,
];

/** Footer social bar — YouTube, Facebook, Instagram, TikTok only (no Reverb / Pinterest). */
export const footerSocials: SocialDef[] = [
  socialsById.youtube,
  socialsById.facebook,
  socialsById.instagram,
  socialsById.tiktok,
];

/**
 * Canonical `sameAs` URL list for Organization JSON-LD. Order + trailing slashes
 * match the live site's existing JSON-LD #2 so we don't trigger SEO diffs.
 */
export const socialSameAs: readonly string[] = [
  "https://www.facebook.com/joesvintageguitars/",
  "https://www.youtube.com/@joesvintageguitars",
  "https://reverb.com/shop/joe-s-gear-emporium-4",
  "https://www.pinterest.com/joesvintageguitars0087/",
  "https://www.instagram.com/joesvintageguitarsaz/",
  "https://www.tiktok.com/@joesvintageguitar/",
];

/** Generic full list (used rarely — most consumers should use headerSocials / footerSocials). */
export const socials: SocialDef[] = Object.values(socialsById);

/* ---------- Navigation ---------- */
export interface NavLink {
  label: string;
  href: string;
  /** Set true for cross-origin (adds target=_blank + rel=noopener). */
  external?: boolean;
}

export interface NavGroup {
  label: string;
  /** Optional — dropdowns may have no top-level destination. */
  href?: string;
  children: NavLink[];
}

/** Top row of the desktop header (also rendered in the mobile drawer). */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Joe", href: "/about-me/" },
  { label: "JVG Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-me/" },
];

/** "Sell My Guitar" dropdown in the header second row. */
export const sellMenu: NavGroup = {
  label: "Sell My Guitar",
  href: "/",
  children: [
    { label: "Sell My Guitar", href: "/" },
    { label: "Sell My Fender", href: "/sell-my-fender-guitar/" },
    { label: "Sell My Gibson", href: "/sell-my-gibson-guitar/" },
    { label: "Sell My Martin", href: "/sell-my-martin-guitar/" },
    { label: "Sell My Collection", href: "/sell-a-guitar-collection/" },
  ],
};

/** "Serial Numbers & Dating" dropdown in the header second row. */
export const idMenu: NavGroup = {
  label: "Serial Numbers & Dating",
  children: [
    { label: "Fender Serial Numbers & Dating", href: "/fender-guitars-serial-number-guide/" },
    { label: "Gibson Serial Numbers & Dating", href: "/how-to-read-gibson-serial-numbers/" },
    { label: "Martin Serial Numbers & Dating", href: "/martin-serial-and-model-numbers/" },
    { label: "Rickenbacker Serial Numbers & Dating", href: "/rickenbacker-serial-numbers/" },
    { label: "Gretsch Serial Numbers & Dating", href: "/gretsch-serial-number-lookup/" },
    { label: "Guild Serial Numbers & Dating", href: "/guild-serial-number-lookup/" },
    { label: "Fender Amplifiers", href: "/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/" },
  ],
};

/** Footer's top-row menu (matches primaryNav today, but kept separate for future divergence). */
export const footerTopMenu: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Joe", href: "/about-me/" },
  { label: "JVG Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-me/" },
];

/** Extended footer link shape: optional iconSrc, optional "pill" style. */
export interface FooterLink extends NavLink {
  /** Render as a white pill button with the Reverb "R" badge after the label. */
  isReverbPill?: boolean;
}

/** Footer's main menu (services). The brand sell pages render as their own
 *  row under this menu (Footer.astro sellChildren), not as a dropdown. */
export const footerMainMenu: FooterLink[] = [
  { label: "Sell My Guitar", href: "/" },
  { label: "Instrument Repair", href: "/repair/" },
  { label: "Free Appraisal", href: "/free-appraisal/" },
  { label: "Consignment", href: "/consignment/" },
  {
    label: "Inventory",
    href: "https://reverb.com/shop/joe-s-gear-emporium-4",
    external: true,
    isReverbPill: true,
  },
];

/** Legal/footer copyright row. */
export const footerLegal = {
  copyrightYear: new Date().getFullYear(),
  links: [
    { label: "Sitemap", href: "/sitemap/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Refund and Returns", href: "/refund_returns/" },
    { label: "Photo License", href: "/photo-license/" },
    { label: "Designed by MFWD", href: "https://myfavoritewebdesigns.com/", external: true },
  ] as NavLink[],
};
