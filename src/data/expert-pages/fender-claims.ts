import reviewSummary from "../reviews/reverb-summary.json";
import reviews from "../reviews/reverb.json";
import { guideLinkCount } from "./fender-guides";

export type FenderClaimStatus = "onfile" | "pending" | "confirmed" | "struck";
export type FenderClaimGroup = "Reviews" | "Published Work" | "Reach" | "Buying" | "The Bench" | "Authority";
export type FenderClaimPlacement = "why-joe" | "bench" | "bench-list" | "purchases" | "reference" | "videos" | "press" | "reviews";
export interface FenderClaim {
  id: `FC-${string}`;
  group: FenderClaimGroup;
  text: string;
  status: FenderClaimStatus;
  note: string;
  placement: FenderClaimPlacement;
}

const fender = reviewSummary.byBrand.fender;
const fiveStarPercent = Math.round(fender.fiveStar / fender.total * 100);
const reviewYears = new Set(reviews.filter(review => review.brand === "fender").map(review => Number(review.date.slice(0, 4))));
export const missingFenderReviewYears = Array.from({ length: 9 }, (_, i) => 2018 + i).filter(year => !reviewYears.has(year));

// Josh's 2026-11-16 candidates. Only Joe changes pending claims to confirmed or struck.
// Placement controls page order; group preserves the review categories in the brief.
export const fenderClaims: FenderClaim[] = [
  { id: "FC-01", group: "Reviews", text: "I have more documented Fender buyer reviews than any other vintage guitar dealer in the world.", status: "pending", note: `${fender.total} Fender reviews are on file. Confirm more than any other dealer in the world.`, placement: "why-joe" },
  { id: "FC-02", group: "Reviews", text: "Joe's Vintage Guitars has the largest published archive of vintage guitar dealer reviews on the web.", status: "pending", note: "2,191 reviews are on file. Confirm the largest published archive on the web.", placement: "reviews" },
  { id: "FC-03", group: "Reviews", text: `${fiveStarPercent} percent of Fender buyers who reviewed me on Reverb gave five stars.`, status: "onfile", note: `${fender.fiveStar} of ${fender.total}; percentage rounded to the nearest whole percent from reverb-summary.json.`, placement: "reviews" },
  { id: "FC-04", group: "Reviews", text: "Fender buyers have reviewed me on Reverb every year from 2018 to 2026.", status: missingFenderReviewYears.length ? "pending" : "onfile", note: missingFenderReviewYears.length ? `Confirm Fender reviews for the missing years: ${missingFenderReviewYears.join(", ")}.` : "Fender reviews in reverb.json cover every year from 2018 to 2026.", placement: "reviews" },
  { id: "FC-05", group: "Published Work", text: `I'm the author of the largest free Fender dating and value library online, with ${guideLinkCount} guide links on this page.`, status: "pending", note: `${guideLinkCount} guide links are rendered from the shared inventory. Confirm author of the largest free Fender dating and value library online.`, placement: "why-joe" },
  { id: "FC-06", group: "Published Work", text: "I'm the only vintage guitar dealer who publishes a value guide for every Stratocaster year from 1954 to 1965 and every Telecaster year from 1950 to 1968.", status: "pending", note: "Confirm the only dealer with this year-by-year coverage.", placement: "reference" },
  { id: "FC-07", group: "Published Work", text: "I built the Fender serial number lookup tool on this site.", status: "onfile", note: "The published Fender serial guide contains the lookup tool.", placement: "reference" },
  { id: "FC-08", group: "Published Work", text: "I'm a guest author for Vintage Verified, the Nashville vintage guitar authentication lab.", status: "onfile", note: "Guest essay linked from Joe's About page; JVG-0107 and JVG-P-0035.", placement: "press" },
  { id: "FC-09", group: "Reach", text: "I'm the most-watched vintage guitar buyer on Instagram.", status: "pending", note: "Confirm the most-watched vintage guitar buyer on Instagram.", placement: "why-joe" },
  { id: "FC-10", group: "Reach", text: "My top three videos have more than 3.7 million views as of November 11, 2026.", status: "pending", note: "Confirm the agency pull: 1,443,100 + 1,243,390 + 1,074,611 = 3,761,101 views on November 11, 2026.", placement: "videos" },
  { id: "FC-11", group: "Reach", text: "My 1962 Fender Jaguar video passed 400,000 Instagram views in its first eight days.", status: "pending", note: "Confirm posted November 3, 2026 and 402,516 Instagram views on November 11, 2026.", placement: "videos" },
  { id: "FC-12", group: "Buying", text: "I've bought vintage Fenders in all 50 states.", status: "pending", note: "All 50 states is on file for guitars generally. Confirm vintage Fenders in every state.", placement: "why-joe" },
  { id: "FC-13", group: "Buying", text: "I've bought more than 100 vintage Fender amps in a single trip.", status: "onfile", note: "Joe's video title: Buying Over 100 Vintage Fender Amps & Rare Guitars In The Middle Of Nowhere In Arizona!", placement: "purchases" },
  { id: "FC-14", group: "Buying", text: "I fly anywhere in the country to buy the right Fender in person.", status: "pending", note: "The 1952 Telecaster trip to Washington is on file. Confirm anywhere in the country.", placement: "purchases" },
  { id: "FC-15", group: "Buying", text: "I bought the largest vintage guitar collection in Arizona history: more than 700 guitars and amplifiers in Tucson.", status: "pending", note: "More than 700 guitars and amplifiers in Tucson is on file. Confirm the largest in Arizona history.", placement: "purchases" },
  { id: "FC-16", group: "Buying", text: "I've sourced vintage Fenders for Grammy-winning artists.", status: "pending", note: "Instruments sourced for over 10 Grammy winners is on file. Confirm vintage Fenders.", placement: "purchases" },
  { id: "FC-17", group: "The Bench", text: "I'm one of the only vintage Fender dealers who is also a working luthier.", status: "pending", note: "Confirm working luthier and one of the only vintage Fender dealers with that role.", placement: "bench" },
  { id: "FC-18", group: "The Bench", text: "Every Fender I appraise is opened and inspected by the same hands that repair it.", status: "pending", note: "Confirm every Fender appraisal includes opening and inspection by you, including the scope of remote appraisals.", placement: "bench" },
  { id: "FC-19", group: "The Bench", text: "I've personally restored hundreds of pre-CBS Fenders.", status: "pending", note: "1,000+ instruments repaired and restored is on file. Confirm hundreds of pre-CBS Fenders and give the Fender count.", placement: "bench" },
  { id: "FC-20", group: "The Bench", text: "I catch dozens of fake or misdescribed Fenders every year.", status: "pending", note: "Confirm dozens each year and correct the number if needed.", placement: "bench" },
  { id: "FC-21", group: "The Bench", text: "I've personally repaired or restored these Fenders.", status: "pending", note: "Confirm the personal repair or restoration list, with each instrument checked separately below.", placement: "bench" },
  ...[
    ["a", "a 1950 Broadcaster"],
    ["b", "a 1951 Nocaster"],
    ["c", "a blackguard Telecaster (1951 to 1954)"],
    ["d", "a 1954 Stratocaster"],
    ["e", "a 1957 maple-neck Stratocaster"],
    ["f", "a slab-board Stratocaster (1959 to 1962)"],
    ["g", "custom color Fenders in Fiesta Red, Lake Placid Blue, Sonic Blue, Burgundy Mist, Shoreline Gold and Sherwood Green"],
    ["h", "a 1958 Jazzmaster"],
    ["i", "a 1962 Jaguar"],
    ["j", "a Bass VI"],
    ["k", "a stack-knob Jazz Bass (1960 to 1961)"],
    ["l", "a 1951 to 1957 Precision Bass"],
    ["m", "1968 Pink Paisley and Blue Flower Telecasters"],
    ["n", "a tweed Bassman"],
    ["o", "a tweed Deluxe"],
    ["p", "a blackface Deluxe Reverb"],
  ].map(([suffix, instrument]): FenderClaim => ({
    // List item shows the instrument alone; FC-21 above carries the "personally repaired or restored" sentence.
    id: `FC-21${suffix}`, group: "The Bench", text: instrument.replace(/^an? /, "").replace(/^./, (c) => c.toUpperCase()),
    status: "pending", note: `Confirm your personal repair or restoration work on ${instrument}.`, placement: "bench-list",
  })),
  { id: "FC-22", group: "Authority", text: "I've been invited to Fender's corporate headquarters.", status: "pending", note: "The files mention a Fender corporate visit. Confirm the invitation and headquarters visit.", placement: "press" },
  { id: "FC-23", group: "Authority", text: "I'm a former traveling expert appraiser for Treasure Seekers Roadshow.", status: "onfile", note: "Joe's About page; JVG-P-0008.", placement: "press" },
  { id: "FC-24", group: "Authority", text: "I'm the dealer other dealers call for a second opinion on a Fender.", status: "pending", note: "Confirm other dealers call you for Fender second opinions.", placement: "why-joe" },
  { id: "FC-25", group: "Authority", text: "I've been featured by KJZZ 91.5 FM, Phoenix's NPR affiliate.", status: "onfile", note: "Joe's About page and linked KJZZ story; JVG-0108 and JVG-P-0037.", placement: "press" },
];

export const pendingFenderClaims = fenderClaims.filter(claim => claim.status === "pending");
export const hasPendingFenderClaims = pendingFenderClaims.length > 0;
export const claimsFor = (placement: FenderClaimPlacement) => fenderClaims.filter(claim => claim.placement === placement && claim.status !== "struck");
