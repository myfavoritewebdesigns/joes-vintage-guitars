import type { ImageMetadata } from "astro";

import guideImage from "../assets/blog/one-owner-1960-fender-telecaster/original-owner-with-1960-telecaster.jpg";
import mesaImage from "../assets/phoenix-metro-guides/mesa-1966-gibson-trini-lopez-seller.webp";
import phoenixImage from "../assets/phoenix-metro-guides/phoenix-1956-fender-telecaster-seller.webp";
import scottsdaleImage from "../assets/phoenix-metro-guides/scottsdale-gibson-style-o-sellers.webp";
import chandlerImage from "../assets/phoenix-metro-guides/chandler-1966-fender-coronado-seller.webp";
import gilbertImage from "../assets/phoenix-metro-guides/gilbert-1962-gibson-es-335-seller.webp";
import tempeImage from "../assets/blog/one-owner-1956-martin-000-21/original-owner-daughter-with-1956-martin-000-21.jpg";

export interface PhoenixMetroPage {
  pageNumber: number;
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  heroSummary: string;
  city: string;
  kind: "guide" | "service";
  image: ImageMetadata;
  imageAlt: string;
  imageCaption: string;
}

export const phoenixMetroPages: PhoenixMetroPage[] = [
  {
    pageNumber: 1,
    slug: "where-to-sell-vintage-guitar-phoenix",
    navLabel: "Phoenix Selling Guide",
    eyebrow: "Phoenix Vintage Guitar Selling Guide",
    title: "Where To Sell A Vintage Guitar In Phoenix",
    seoTitle: "Where To Sell A Vintage Guitar In Phoenix | Local Guide",
    description:
      "Compare private sales, online marketplaces, consignment, auctions, trade-ins, and a specialist buyer for vintage guitars in Phoenix before you choose.",
    heroSummary:
      "Compare the real work, costs, timing, and risks behind each selling option before you decide what fits your guitar.",
    city: "Phoenix",
    kind: "guide",
    image: guideImage,
    imageAlt:
      "Original owner holding a blonde 1960 Fender Telecaster purchased by Joe's Vintage Guitars",
    imageCaption:
      "An original owner with his 1960 Fender Telecaster. First-hand history, originality, and condition all matter when choosing how and where to sell a vintage guitar.",
  },
  {
    pageNumber: 2,
    slug: "sell-vintage-guitar-mesa-az",
    navLabel: "Mesa Guitar Buyer",
    eyebrow: "Mesa Vintage Guitar Buyer",
    title: "Sell Your Vintage Guitar In Mesa, Arizona",
    seoTitle: "Sell Your Vintage Guitar in Mesa, AZ | Joe's Vintage Guitars",
    description:
      "Sell a vintage guitar directly to an experienced Mesa buyer. Get a free appraisal and no-obligation offer from Joe's Vintage Guitars by appointment.",
    heroSummary:
      "Start with clear photos, learn what you have, and meet Joe by appointment at the Mesa shop when the instrument is a fit.",
    city: "Mesa",
    kind: "service",
    image: mesaImage,
    imageAlt:
      "Mesa seller holding a cherry 1966 Gibson Trini Lopez inside Joe's Vintage Guitars",
    imageCaption:
      "A Mesa seller with a cherry 1966 Gibson Trini Lopez inside Joe's Vintage Guitars. The exact guitar, its parts, condition, case, and history all shaped the appraisal.",
  },
  {
    pageNumber: 3,
    slug: "sell-vintage-guitar-phoenix-az",
    navLabel: "Phoenix Guitar Buyer",
    eyebrow: "Vintage Guitar Buyer Serving Phoenix",
    title: "Sell Your Vintage Guitar In Phoenix, Arizona",
    seoTitle: "Sell Your Vintage Guitar in Phoenix, AZ | Free Appraisal",
    description:
      "Get a free expert appraisal for a vintage guitar in Phoenix. Work directly with Joe's Vintage Guitars, a specialist buyer based nearby in Mesa.",
    heroSummary:
      "Send photos before making the drive, get a specialist's opinion, and arrange the right next step for one guitar, an estate, or a collection.",
    city: "Phoenix",
    kind: "service",
    image: phoenixImage,
    imageAlt:
      "Phoenix seller holding a modified 1956 Fender Telecaster with original pickups and electronics",
    imageCaption:
      "A Phoenix seller with a modified 1956 Fender Telecaster that retained its original pickups and electronics. Specific changes matter more than the word modified alone.",
  },
  {
    pageNumber: 4,
    slug: "sell-vintage-guitar-scottsdale-az",
    navLabel: "Scottsdale Guitar Buyer",
    eyebrow: "Vintage Guitar Buyer Serving Scottsdale",
    title: "Sell Your Vintage Guitar In Scottsdale, Arizona",
    seoTitle: "Vintage Guitar Buyer Serving Scottsdale, AZ | Free Appraisal",
    description:
      "Sell a collectible or inherited vintage guitar in Scottsdale. Start with a private photo review and direct offer from Joe's Vintage Guitars.",
    heroSummary:
      "Get a discreet photo review for a collectible guitar, documented family instrument, estate, or collection before deciding how to sell it.",
    city: "Scottsdale",
    kind: "service",
    image: scottsdaleImage,
    imageAlt:
      "Scottsdale sellers with a Gibson Style O acoustic guitar",
    imageCaption:
      "Scottsdale sellers with a Gibson Style O. Original photographs and ownership history help preserve the evidence that belongs with a collectible guitar.",
  },
  {
    pageNumber: 5,
    slug: "sell-vintage-guitar-chandler-az",
    navLabel: "Chandler Guitar Buyer",
    eyebrow: "Vintage Guitar Buyer Serving Chandler",
    title: "Sell Your Vintage Guitar In Chandler, Arizona",
    seoTitle: "Sell Your Vintage Guitar in Chandler, AZ | Expert Buyer",
    description:
      "Get a free appraisal and direct offer for a vintage guitar in Chandler. Start with photos, then meet by appointment at Joe's nearby Mesa shop.",
    heroSummary:
      "A photo-first review can identify the instrument, flag the details that matter, and prevent an unnecessary trip before a Mesa appointment.",
    city: "Chandler",
    kind: "service",
    image: chandlerImage,
    imageAlt:
      "Chandler seller holding a one-owner 1966 Fender Coronado II in Lake Placid Blue",
    imageCaption:
      "A Chandler seller with a one-owner 1966 Fender Coronado II in Lake Placid Blue. The one-owner history, finish, hardware, electronics, and case all deserved careful documentation.",
  },
  {
    pageNumber: 6,
    slug: "sell-vintage-guitar-gilbert-az",
    navLabel: "Gilbert Guitar Buyer",
    eyebrow: "Inherited Guitar Help For Gilbert Families",
    title: "Sell Your Vintage Guitar In Gilbert, Arizona",
    seoTitle: "Sell an Inherited or Vintage Guitar in Gilbert, AZ",
    description:
      "Unsure what an old guitar is worth? Gilbert sellers can get a free appraisal and direct offer from nearby vintage guitar specialist Joe Dampt.",
    heroSummary:
      "Preserve the guitar, its case, loose parts, and family records, then start with photos before cleaning, repairing, or transporting it.",
    city: "Gilbert",
    kind: "service",
    image: gilbertImage,
    imageAlt:
      "Gilbert seller with Joe Dampt and a cherry 1962 Gibson ES-335 with two PAF humbuckers",
    imageCaption:
      "A Gilbert seller with Joe and a cherry 1962 Gibson ES-335 with two PAF humbuckers. Pickup details and first-hand ownership evidence helped explain the guitar's significance.",
  },
  {
    pageNumber: 7,
    slug: "sell-vintage-guitar-tempe-az",
    navLabel: "Tempe Guitar And Amp Buyer",
    eyebrow: "Vintage Guitar And Amp Buyer Serving Tempe",
    title: "Sell Your Vintage Guitar In Tempe, Arizona",
    seoTitle: "Sell Your Vintage Guitar Or Amp In Tempe, AZ | Appraisal",
    description:
      "Tempe musicians and families can get a free appraisal for vintage guitars, basses, and amplifiers from nearby specialist Joe's Vintage Guitars.",
    heroSummary:
      "Start with photos of an older guitar, bass, amplifier, or small gear group and learn which details deserve an in-person inspection.",
    city: "Tempe",
    kind: "service",
    image: tempeImage,
    imageAlt:
      "Original owner's daughter holding her family's one-owner 1956 Martin 000-21 in Tempe",
    imageCaption:
      "The original owner's daughter holding her family's 1956 Martin 000-21 in Tempe. The photograph preserves part of the guitar's story before it changed hands.",
  },
];

export function getPhoenixMetroPage(slug: PhoenixMetroPage["slug"]): PhoenixMetroPage {
  const page = phoenixMetroPages.find((candidate) => candidate.slug === slug);
  if (!page) throw new Error(`Unknown Phoenix metro page: ${slug}`);
  return page;
}
