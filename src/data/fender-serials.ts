/**
 * Fender serial-number dating logic as DATA + a pure resolver.
 *
 * This is the single source of truth for the v2 serial tool: the interactive
 * decoder, the static reference tables, and (eventually) serial spoke pages
 * all render from these exports, so the tool and the visible knowledge can
 * never drift apart.
 *
 * PARITY CONTRACT: `decodeSerial()` / `answerStep()` reproduce the observable
 * behavior of the original widget (`public/scripts/fsn-tool.js` doSearch +
 * card handlers) EXACTLY, result strings included. Do not "improve" ranges,
 * wording, or branch order here without re-running
 * `node scripts/verify-fsn-parity.mjs`, which drives the ORIGINAL tool in a
 * real browser across a boundary corpus and diffs it against this resolver.
 * (Dating-logic content changes are Joe's call, not a refactor concern.)
 *
 * The original's dead code paths (DB.bridge/DB.neck lookup via lookupNum,
 * the L-location step, state._numericMatches) are intentionally NOT ported:
 * they are unreachable in the original flow, so they are not behavior.
 */

// ─── Outcome + step model ────────────────────────────────────────────────────

export type StepId =
  | "location"   // bridge / neck / headstock (low numeric serials)
  | "instrument" // guitar / bass (bridge-plate numerics)
  | "vneck"      // V-prefix: neck plate vs neck heel
  | "rneck"      // R-prefix: neck plate vs neck heel
  | "sneck"      // S-prefix: front of headstock vs neck heel
  | "sjapan"     // S-prefix on neck heel: MIJ vs CIJ
  | "tuneck"     // T/U-prefix: MIJ vs CIJ
  | "nloc"       // N-prefix: headstock vs neck heel
  | "opqjapan"   // O/P/Q-prefix: MIJ vs CIJ (letters reused across both eras)
  | "bjapan"     // B-prefix: MIJ vs CIJ
  | "plate76"    // 76-prefix: 1976 headstock decal vs an early-1960s neck plate
  | "ajapan";    // A-prefix: MIJ vs CIJ (reused across both eras)

export type Outcome =
  | { kind: "result"; year: string; warn?: boolean }
  | { kind: "fallback" }
  | { kind: "ask"; step: StepId; note?: string };

const result = (year: string, warn = false): Outcome =>
  warn ? { kind: "result", year, warn: true } : { kind: "result", year };
const fallback = (): Outcome => ({ kind: "fallback" });
const ask = (step: StepId, note?: string): Outcome =>
  note ? { kind: "ask", step, note } : { kind: "ask", step };

// ─── Operative data (mirrors the original tables verbatim) ──────────────────

interface Range { min: number; max: number; year: string; note?: string }

/** 1954–1963 neck plate ranges with genuine production overlaps (8001–99999 direct path). */
export const NECK_EARLY: Range[] = [
  { min: 8001, max: 10000, year: "1955" },
  { min: 9000, max: 16000, year: "1956" },
  { min: 16000, max: 25000, year: "1957" },
  { min: 25000, max: 30000, year: "1958" },
  { min: 30000, max: 40000, year: "1959" },
  { min: 40000, max: 58000, year: "1960" },
  { min: 55000, max: 72000, year: "1961" },
  { min: 72000, max: 93000, year: "1962" },
  { min: 93000, max: 99999, year: "1963" },
];

/** Neck plate ranges used after the user picks "neck plate" for a low serial. */
export const NECK_FULL: Range[] = [
  ...NECK_EARLY,
  { min: 100000, max: 110000, year: "1963" },
  { min: 110001, max: 149999, year: "1963 (L-series)" },
  { min: 150000, max: 199999, year: "1964 (L-series)" },
];

/**
 * 100000–199999 without an L prefix = F-plate CBS transition.
 *
 * JOE-CONFIRMED DIVERGENCE (2026-07-15 call, boundary confirmed 2026-07-17):
 * 180000–200000 INCLUSIVE is a known 1966/1967 serial overlap and must return
 * BOTH years, not a flat 1966. The guide page's own F-plate table already encodes
 * it — 1966 runs "110000 to 200000" and 1967 runs "180000 to 210000" — so the
 * overlap was always in the data; only the tool flattened it. Serial 200000 itself
 * sits in the overlap (Joe's call: the ranges are approximate, so the shared edge
 * reports both years); 200001+ is a clean 1967. The original widget answers a flat
 * "1966" across the overlap and a flat "1967" at 200000, so this is an intentional
 * break from parity (see EXPECTED_DIVERGENCES in verify-fsn-parity.mjs).
 */
export const F_PLATE_TRANSITION: Range[] = [
  { min: 100000, max: 110000, year: "1965", note: "F-plate serial (CBS Transition)" },
  { min: 110001, max: 179999, year: "1966", note: "F-plate serial (CBS Era)" },
  {
    min: 180000,
    max: 200000,
    year: "1966 or 1967",
    note: "F-plate serial, CBS Era. Known serial overlap in this range. Cross-date with the features below to confirm the year",
  },
];

/** 200001–750000 F-plate CBS era (200000 sits in the 1966/1967 overlap above). */
export const F_PLATE: Range[] = [
  { min: 200001, max: 210000, year: "1967" },
  { min: 210001, max: 250000, year: "1968" },
  { min: 250001, max: 280000, year: "1969" },
  { min: 280001, max: 300000, year: "1970" },
  { min: 300001, max: 330000, year: "1971" },
  { min: 330001, max: 370000, year: "1972" },
  { min: 370001, max: 520000, year: "1973" },
  { min: 500001, max: 580000, year: "1974" },
  { min: 580001, max: 690000, year: "1975" },
  { min: 690001, max: 750000, year: "1976" },
];

/** Bridge plate, guitar (1950–1954) — first match wins, boundaries overlap on purpose. */
export const BRIDGE_GUITAR: Range[] = [
  { min: 1, max: 1300, year: "1950–1952", note: "Broadcaster/No-Caster/Early Telecaster" },
  { min: 1300, max: 3000, year: "1951–1954", note: "Telecaster name established ~mid-1951" },
  { min: 3000, max: 5999, year: "1952–1954", note: "Transition to neck plate approaching" },
];

/** L-series neck plate (5 digits after the L). */
export const L_SERIES: Range[] = [
  { min: 1, max: 20000, year: "1963" },
  { min: 20001, max: 55000, year: "1964" },
  { min: 55001, max: 99999, year: "1965" },
];

/**
 * Direct prefix → answer map, in the ORIGINAL object's insertion order.
 * Matching replicates the original lookupPrefix: keys sorted longest-first
 * (stable for ties), first startsWith match wins.
 */
export const PREFIXES: Array<[string, string]> = [
  ["76", "1976"],
  ["E0", "1980"], ["E1", "1981"], ["E2", "1982"], ["E3", "1983"], ["E4", "1984"],
  ["E5", "1985"], ["E6", "1986"], ["E7", "1987"], ["E8", "1988"], ["E9", "1989"],
  ["Z0", "2000"], ["Z1", "2001"], ["Z2", "2002"], ["Z3", "2003"], ["Z4", "2004"],
  ["Z5", "2005"], ["Z6", "2006"], ["Z7", "2007"], ["Z8", "2008"], ["Z9", "2009"],
  ["US10", "2010"], ["US11", "2011"], ["US12", "2012"], ["US13", "2013"], ["US14", "2014"],
  ["US15", "2015"], ["US16", "2016"], ["US17", "2017"], ["US18", "2018"], ["US19", "2019"],
  ["US20", "2020"], ["US21", "2021"], ["US22", "2022"], ["US23", "2023"], ["US24", "2024"],
  ["US25", "2025"], ["US26", "2026"],
  // US27+ is handled open-ended in decodeSerial so the tool does not dead-end each
  // January. These literal rows stay only so the sorted-prefix lookup keeps its
  // original shape; the regex rule runs first and answers identically for US10-US26.
  ["CA", "1981–1983 (Gold Series, see serial charts)"],
  ["CB", "1981–1983 (P-Bass Special, see serial charts)"],
  ["CE", "1981–1983 (Black & Gold Tele, see serial charts)"],
  ["JV", "1982–1984 (Made in Japan, see serial charts)"],
  ["SQ", "1983–1984 (Made in Japan)"],
  ["F", "1986–1987 (Made in Japan)"],
  ["G", "1987–1988 (Made in Japan)"],
  ["H", "1988–1989 (Made in Japan)"],
  ["I", "1989–1990 (Made in Japan)"],
  ["J", "1989–1990 (Made in Japan)"],
  ["K", "1990–1991 (Made in Japan)"],
  ["M", "1992–1993 (Made in Japan)"],
  // O/P/Q are NOT listed here on purpose. Each letter was reused across both
  // Japanese eras, so decodeSerial asks MIJ-vs-CIJ before answering (Joe confirmed
  // 2026-07-15: "it needs to, because they were reused"). Leaving them in this flat
  // table is what made the tool answer CIJ for an early-90s MIJ guitar.
];

const PREFIX_KEYS_SORTED: Array<[string, string]> = [...PREFIXES].sort(
  (a, b) => b[0].length - a[0].length
);

function lookupPrefix(raw: string): string | null {
  const up = raw.toUpperCase();
  for (const [key, year] of PREFIX_KEYS_SORTED) {
    if (up.startsWith(key)) return year;
  }
  return null;
}

// ─── The resolver: exact port of doSearch() ─────────────────────────────────

const DIGIT_MAPS = {
  cn: "199", // CN + digit → 199X (Custom Shop)
  cz: "200", // CZ + digit → 200X (Custom Shop)
  mn: "199", // MN + digit → 199X (Made in Mexico)
  mz: "200", // MZ + digit → 200X (Made in Mexico)
} as const;

/**
 * Decode a serial. Returns a final outcome or an `ask` when the original tool
 * would show a follow-up question step.
 */
export function decodeSerial(rawInput: string): Outcome {
  const raw = rawInput.trim();
  if (!raw) return fallback();

  // R-prefix — neck plate = Custom Shop (unreliable), neck heel = CIJ
  if (/^R\d+$/i.test(raw)) return ask("rneck");

  // CN prefix — Custom Shop, digit after CN = last digit of year
  if (/^CN\d/i.test(raw)) {
    const d = raw.replace(/^CN/i, "").charAt(0);
    return result(`${DIGIT_MAPS.cn}${d} (Custom Shop, CN prefix)`);
  }

  // CZ prefix — Custom Shop, digit after CZ = last digit of year
  if (/^CZ\d/i.test(raw)) {
    const d = raw.replace(/^CZ/i, "").charAt(0);
    return result(`${DIGIT_MAPS.cz}${d} (Custom Shop, CZ prefix)`);
  }

  // MX prefix — Made in Mexico, 2 digits after MX = year
  if (/^MX\d/i.test(raw)) {
    const two = raw.replace(/^MX/i, "").substring(0, 2);
    const n = parseInt(two, 10);
    return n >= 10 && n <= 30
      ? result(`20${two} (Made in Mexico)`)
      : result("Made in Mexico (2010s–2020s). Could not determine exact year.");
  }

  // MN prefix — Made in Mexico 1990s
  if (/^MN\d/i.test(raw)) {
    const d = raw.replace(/^MN/i, "").charAt(0);
    return result(`${DIGIT_MAPS.mn}${d} (Made in Mexico)`);
  }

  // MZ prefix — Made in Mexico 2000s
  if (/^MZ\d/i.test(raw)) {
    const d = raw.replace(/^MZ/i, "").charAt(0);
    return result(`${DIGIT_MAPS.mz}${d} (Made in Mexico)`);
  }

  // JD prefix — Japan Dyna (checked before single-letter J)
  if (/^JD\d/i.test(raw)) {
    const two = raw.replace(/^JD/i, "").substring(0, 2);
    const n = parseInt(two, 10);
    return n >= 10 && n <= 30
      ? result(`20${two} (Japan Dyna, back of headstock serial)`)
      : result("2010s (Japan Dyna, back of headstock serial)");
  }

  // T and U — appear in both MIJ and CIJ; must ask
  if (/^[TU]\d/i.test(raw)) return ask("tuneck");

  // N-prefix — American 1990s headstock vs MIJ neck heel
  if (/^N\d/i.test(raw)) return ask("nloc");

  // S-prefix — 1970s American headstock vs Japanese neck heel
  if (/^S\d/i.test(raw)) return ask("sneck");

  // A-prefix — reused across the MIJ (1985 to 1986) and CIJ (1997 to 1998) eras.
  // Digit count is NOT a reliable tell (both eras used 6 digits), so ask for the
  // "Made in Japan" vs "Crafted in Japan" decal instead. (Joe, 2026-07-22.)
  if (/^A\d+$/i.test(raw)) return ask("ajapan");

  // B-prefix — appears in both MIJ and CIJ; must ask
  if (/^B\d+$/i.test(raw)) return ask("bjapan");

  // L-prefix — 5 digits = L-series neck plate, 6 digits = MIJ
  if (/^L\d+$/i.test(raw)) {
    const digits = raw.replace(/^L/i, "");
    const num = parseInt(digits, 10);
    if (digits.length === 6) {
      return result(
        "1991–1992 (Made in Japan, back of neck heel serial). Note: make sure you entered the correct number of digits. Japanese MIJ L-serials have 6 digits after the L."
      );
    }
    if (digits.length === 5) {
      const hit = L_SERIES.find((r) => num >= r.min && num <= r.max);
      return hit
        ? result(
            `${hit.year} (L-series neck plate serial). Note: make sure you entered the correct number of digits. L-series neck plate serials have 5 digits after the L.`
          )
        : fallback();
    }
    return result(
      "Could not determine year. L-series neck plate serials have 5 digits after the L; Japanese MIJ serials have 6. Please recount your digits and try again."
    );
  }

  // US + 2 digits — 2010 onward. Open-ended (Joe, 2026-07-15: "throw in US27, why
  // not"), so it does not dead-end every January the way the literal US10-US26 table
  // did. Bounded at >= 10 because 2000s-era guitars use the Z prefix, not US00-US09.
  const usMatch = /^US(\d{2})/i.exec(raw);
  if (usMatch) {
    const yy = parseInt(usMatch[1], 10);
    if (yy >= 10) return result(`20${usMatch[1]}`);
  }

  // O/P/Q — reused across BOTH Japanese eras, so the printed neck-heel wording is
  // the only way to tell them apart. Must ask before answering.
  if (/^[OPQ]\d/i.test(raw)) return ask("opqjapan");

  // 76-prefix — ambiguous between a 1976 headstock decal serial and an early-1960s
  // neck plate that happens to start with 76 (a 5-digit 76xxx sits in the 1962
  // neck-plate range). A 7+ digit 76... is too long to be a plate, so it is a clean
  // 1976; a 2 to 3 digit 76... is too short to be a plate. In between, ask the
  // location. (Joe, 2026-07-22.)
  if (/^76\d+$/.test(raw)) {
    if (raw.length >= 7 || raw.length <= 3) return result("1976");
    return ask(
      "plate76",
      `Serial ${raw} could be a 1976 headstock serial or a neck plate from the early 1960s. Where is the serial located?`
    );
  }

  // Standard prefix table
  const pm = lookupPrefix(raw);
  if (pm) return result(pm);

  // V-prefix — Vintage Reissue neck plate vs MIJ neck heel
  if (/^V\d+$/i.test(raw)) return ask("vneck");

  // Pure numeric
  if (/^\d+$/.test(raw)) {
    const num = parseInt(raw, 10);

    if (num < 100) return fallback();

    // 4 digits with leading zero: bridge or neck plate, 1950–1954
    if (/^0\d{3}$/.test(raw)) {
      return ask(
        "location",
        `Serial ${raw} could be a bridge plate or neck plate serial from 1950–1954. Where is the serial located?`
      );
    }

    // 100–8000: bridge plates and early neck plates overlap
    if (num >= 100 && num <= 8000) {
      return ask(
        "location",
        `Low serials like ${raw} appear on both bridge plates (1950–1954) and early neck plates (1954–1955). Where is the serial located?`
      );
    }

    // 8001–99999: neck plate only, with genuine year overlaps
    if (num >= 8001 && num <= 99999) {
      const years = NECK_EARLY.filter((r) => num >= r.min && num <= r.max).map((r) => r.year);
      if (years.length === 1) return result(`${years[0]} (Neck plate serial)`);
      if (years.length > 1) {
        const uniq = years.filter((y, i, a) => a.indexOf(y) === i);
        return result(
          `${uniq[0]}–${uniq[uniq.length - 1]} (Neck plate serial, overlapping production run; cross-date with pot codes)`
        );
      }
      return fallback();
    }

    // 100000–200000 without L prefix: F-plate CBS transition (200000 is the
    // shared edge of the 1966/1967 overlap, so it routes here, not to F_PLATE)
    if (num >= 100000 && num <= 200000) {
      const hit = F_PLATE_TRANSITION.find((r) => num >= r.min && num <= r.max);
      return hit ? result(`${hit.year} (${hit.note})`) : fallback();
    }

    // 200001–750000: F-plate CBS era
    if (num >= 200001 && num <= 750000) {
      const hit = F_PLATE.find((r) => num >= r.min && num <= r.max);
      return hit ? result(`${hit.year} (F-plate serial, CBS Era)`) : fallback();
    }

    return fallback();
  }

  return fallback();
}

/**
 * Resolve a follow-up answer. `raw` is the serial as originally entered
 * (whitespace-trimmed); `choice` is the picked card's data value.
 * Exact port of the original card handlers.
 */
export function answerStep(rawInput: string, step: StepId, choice: string): Outcome {
  const raw = rawInput.trim();
  const num = parseInt(raw, 10);

  switch (step) {
    case "location": {
      if (choice === "bridge")
        return ask("instrument", "Bridge plate serials were used on both guitars and basses. Is this a guitar or bass?");
      if (choice === "headstock") return fallback();
      // neck plate
      if (num >= 1 && num < 6000) return result("1954 (Neck plate serial)");
      if (num >= 6000 && num <= 8000)
        return result("1954–1955 (Neck plate serial, overlapping production run; cross-date with pot codes)");
      const years = NECK_FULL.filter((r) => num >= r.min && num <= r.max).map((r) => r.year);
      const uniq = years.filter((y, i, a) => a.indexOf(y) === i);
      if (uniq.length === 1) return result(`${uniq[0]} (Neck plate serial)`);
      if (uniq.length > 1)
        return result(
          `${uniq[0]}–${uniq[uniq.length - 1]} (Neck plate serial, overlapping production run; cross-date with pot codes)`
        );
      return fallback();
    }

    case "instrument": {
      if (choice === "bass") {
        const hasLeadingZero = raw.charAt(0) === "0";
        let year: string | undefined;
        if (!hasLeadingZero && num >= 100 && num <= 600) year = "1951–1952";
        else if (hasLeadingZero && num >= 1 && num <= 900) year = "1952–1953";
        else if (num >= 900 && num <= 2000) year = "1954";
        return year ? result(`${year} (Bridge plate, Precision Bass)`) : fallback();
      }
      // guitar — first match wins
      const hit = BRIDGE_GUITAR.find((r) => num >= r.min && num <= r.max);
      return hit ? result(`${hit.year} (Bridge plate, ${hit.note})`) : fallback();
    }

    case "sneck": {
      if (choice === "headstock") {
        const d = raw.replace(/^S/i, "").charAt(0);
        return result(`197${d} (Made in USA, front of headstock serial)`);
      }
      return ask("sjapan"); // neck heel → MIJ vs CIJ
    }

    case "sjapan":
      return choice === "mij"
        ? result("1994–1995 (Made in Japan, back of neck heel serial)")
        : result("2006–2008 (Crafted in Japan, back of neck heel serial)");

    case "bjapan":
      return choice === "mij"
        ? result("1985–1986 (Made in Japan)")
        : result("1997–1999 (Crafted in Japan)");

    case "nloc": {
      if (choice === "headstock") {
        const d = raw.replace(/^N/i, "").charAt(0);
        // Match the guide page: front of the headstock through 1995, back from 1996.
        // The original widget said "back" for every N serial (Joe, 2026-07-15: "just
        // have it match" the page).
        const loc = parseInt(d, 10) <= 5 ? "front of headstock" : "back of headstock";
        return result(`199${d} (Made in USA, ${loc} serial)`);
      }
      return result("1995–1996 (Made in Japan, back of neck heel serial)");
    }

    case "opqjapan": {
      const p = raw.charAt(0).toUpperCase();
      // Both branches mirror the guide page's own tables. MIJ is 1993 to 1994 for all
      // three letters; CIJ differs per letter.
      if (choice === "mij")
        return result("1993–1994 (Made in Japan, back of neck heel serial)");
      const cij: Record<string, string> = {
        O: "1997–2000",
        P: "1999–2002",
        Q: "2002–2004",
      };
      return result(`${cij[p]} (Crafted in Japan, back of neck heel serial)`);
    }

    case "tuneck": {
      const p = raw.charAt(0).toUpperCase();
      if (choice === "mij")
        return result(
          `${p === "T" ? "1994–1995" : "1995–1996"} (Made in Japan, back of neck heel serial)`
        );
      return result(
        `${p === "T" ? "2007–2010" : "2010–2011"} (Crafted in Japan, back of neck heel serial)`
      );
    }

    case "rneck":
      return choice === "neckplate"
        ? result("Unknown. R-prefix Custom Shop dating is unreliable.", true)
        : result("2004–2005 (Crafted in Japan, back of neck heel serial)");

    case "vneck":
      return choice === "neckplate"
        ? result(
            "Vintage Reissue (1982 to present), V-prefix neck plate serial. Serial alone cannot date V-prefix guitars; cross-date with neck heel stamp and pot codes."
          )
        : result("1996–1997 (Made in Japan, back of neck heel serial)");

    case "ajapan":
      return choice === "mij"
        ? result("1985 to 1986 (Made in Japan)")
        : result("1997 to 1998 (Crafted in Japan)");

    case "plate76":
      // "Headstock" is the 1976 decal; anything else is a neck plate, so route the
      // serial through the neck-plate resolution (a 76xxx plate lands on 1962).
      return choice === "headstock"
        ? result("1976 (headstock decal serial)")
        : answerStep(raw, "location", "neck");
  }
}

// ─── Step presentation metadata (drives the follow-up UI) ────────────────────

export interface StepCard {
  value: string;
  label: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export interface StepDef {
  id: StepId;
  label: string;
  cards: StepCard[];
}

const IMG = {
  neckPlate: { src: "/images/fender-sn/neck-plate-tool.jpg", alt: "Fender neck plate serial number", width: 360, height: 360 },
  bridgePlate: { src: "/images/fender-sn/bridge-plate-tool.jpg", alt: "Fender bridge plate serial number", width: 360, height: 360 },
  headstock: { src: "/images/fender-sn/headstock.jpg", alt: "Fender headstock serial number", width: 360, height: 240 },
  neckHeel: { src: "/images/fender-sn/fender-back-of-neck-serial-number-scaled.jpg", alt: "Back of neck heel serial location", width: 360, height: 240 },
  guitar: { src: "/images/fender-sn/guitar.jpg", alt: "Fender Telecaster guitar", width: 360, height: 240 },
  bass: { src: "/images/fender-sn/bass.jpg", alt: "Fender Jazz Bass", width: 360, height: 240 },
} as const;

export const STEPS: Record<StepId, StepDef> = {
  location: {
    id: "location",
    label: "Step 1: Where is the serial number?",
    cards: [
      { value: "neck", label: "Neck Plate", image: IMG.neckPlate },
      { value: "bridge", label: "Bridge Plate", image: IMG.bridgePlate },
      { value: "headstock", label: "Headstock", image: IMG.headstock },
    ],
  },
  instrument: {
    id: "instrument",
    label: "Step 2: Guitar or bass?",
    cards: [
      { value: "guitar", label: "Guitar", image: IMG.guitar },
      { value: "bass", label: "Bass", image: IMG.bass },
    ],
  },
  vneck: {
    id: "vneck",
    label: "Where is the V-prefix serial located?",
    cards: [
      { value: "neckplate", label: "Neck Plate", image: IMG.neckPlate },
      { value: "neckheel", label: "Back of Neck Heel", image: IMG.neckHeel },
    ],
  },
  rneck: {
    id: "rneck",
    label: "Where is the R-prefix serial located?",
    cards: [
      { value: "neckplate", label: "Neck Plate", image: IMG.neckPlate },
      { value: "neckheel", label: "Back of Neck Heel", image: IMG.neckHeel },
    ],
  },
  sneck: {
    id: "sneck",
    label: "Where is the S-prefix serial located?",
    cards: [
      { value: "headstock", label: "Front of Headstock", image: IMG.headstock },
      { value: "neckheel", label: "Back of Neck Heel", image: IMG.neckHeel },
    ],
  },
  sjapan: {
    id: "sjapan",
    label: "What does the back of the neck heel say?",
    cards: [
      { value: "mij", label: '"Made in Japan"' },
      { value: "cij", label: '"Crafted in Japan"' },
    ],
  },
  tuneck: {
    id: "tuneck",
    label: "What does the back of the neck heel say?",
    cards: [
      { value: "mij", label: '"Made in Japan"' },
      { value: "cij", label: '"Crafted in Japan"' },
    ],
  },
  nloc: {
    id: "nloc",
    label: "Where is the N-prefix serial located?",
    cards: [
      // "Headstock" (not "Back of Headstock"): on N0-N5 the serial is on the FRONT.
      // The old label offered only "Back", so an owner of a 1990-1995 guitar could
      // not answer truthfully and was pushed down the neck-heel branch.
      { value: "headstock", label: "Front or Back of Headstock", image: IMG.headstock },
      { value: "neckheel", label: "Back of Neck Heel", image: IMG.neckHeel },
    ],
  },
  opqjapan: {
    id: "opqjapan",
    label: "What does the back of the neck heel say?",
    cards: [
      { value: "mij", label: '"Made in Japan"' },
      { value: "cij", label: '"Crafted in Japan"' },
    ],
  },
  bjapan: {
    id: "bjapan",
    label: "What does the back of the neck heel say?",
    cards: [
      { value: "mij", label: '"Made in Japan"' },
      { value: "cij", label: '"Crafted in Japan"' },
    ],
  },
  plate76: {
    id: "plate76",
    label: "Where is the serial located?",
    cards: [
      { value: "headstock", label: "Front of Headstock", image: IMG.headstock },
      { value: "neck", label: "Neck Plate", image: IMG.neckPlate },
    ],
  },
  ajapan: {
    id: "ajapan",
    label: "What does the country-of-origin decal say?",
    cards: [
      { value: "mij", label: '"Made in Japan"' },
      { value: "cij", label: '"Crafted in Japan"' },
    ],
  },
};

// ─── Crawlable reference tables (rendered as static HTML) ────────────────────
// Assembled FROM the operative data above so the visible tables can never
// disagree with what the tool answers. New copy here follows the org copy
// rules (no em/en dashes: ranges use "to").

export interface RefRow { serial: string; years: string; notes: string }
export interface RefSection { id: string; title: string; intro: string; rows: RefRow[] }

const fmt = (n: number) => n.toLocaleString("en-US");

export const REFERENCE_SECTIONS: RefSection[] = [
  {
    id: "ref-bridge-plate",
    title: "Bridge Plate Serials, 1950 to 1954",
    intro:
      "The earliest Fenders carry the serial on the bridge plate. The same low numbers were used on guitars and basses, so the tool asks which one you have.",
    rows: [
      ...BRIDGE_GUITAR.map((r) => ({
        serial: `${fmt(r.min)} to ${fmt(r.max)}`,
        years: r.year,
        notes: `Guitar: ${r.note ?? ""}`,
      })),
      { serial: "100 to 600 (no leading zero)", years: "1951–1952", notes: "Precision Bass" },
      { serial: "0001 to 0900 (leading zero)", years: "1952–1953", notes: "Precision Bass" },
      { serial: "900 to 2,000", years: "1954", notes: "Precision Bass" },
    ],
  },
  {
    id: "ref-neck-plate",
    title: "Neck Plate Serials, 1954 to 1963",
    intro:
      "From mid-1954 the serial moved to the neck plate. Ranges genuinely overlap because plates were used out of order; where they do, the tool reports the span and points you to pot codes.",
    rows: [
      { serial: "0001 to 5,999", years: "1954", notes: "Overlaps bridge plate numbers; the tool asks where the serial is" },
      { serial: "6,000 to 8,000", years: "1954–1955", notes: "Overlapping production run" },
      ...NECK_EARLY.filter((r) => r.min >= 8001 || r.max > 8000).map((r) => ({
        serial: `${fmt(r.min)} to ${fmt(r.max)}`,
        years: r.year,
        notes: "Neck plate",
      })),
    ],
  },
  {
    id: "ref-l-series",
    title: "L-Series Neck Plates, 1963 to 1965",
    intro:
      "An L before five digits. A six-digit number after the L is a different instrument entirely: Made in Japan, 1991 to 1992.",
    rows: [
      ...L_SERIES.map((r) => ({
        serial: `L${String(r.min).padStart(5, "0")} to L${fmt(r.max).replace(/,/g, "")}`,
        years: r.year,
        notes: "Five digits after the L",
      })),
      { serial: "L + 6 digits", years: "1991–1992", notes: "Made in Japan, serial on the back of the neck heel" },
    ],
  },
  {
    id: "ref-f-plate",
    title: "F Plate Serials (CBS Era), 1965 to 1976",
    intro:
      'The big "F" neck plate era. Six-digit numbers without a letter prefix.',
    rows: [
      ...F_PLATE_TRANSITION.map((r) => ({
        serial: `${fmt(r.min)} to ${fmt(r.max)}`,
        years: r.year,
        notes: r.note ?? "",
      })),
      ...F_PLATE.map((r) => ({
        serial: `${fmt(r.min)} to ${fmt(r.max)}`,
        years: r.year,
        notes: "F-plate serial, CBS era",
      })),
    ],
  },
  {
    id: "ref-headstock-us",
    title: "American Headstock Serials, 1976 to Today",
    intro:
      "From late 1976 the serial moved to the headstock decal. The first characters encode the decade and year.",
    rows: [
      { serial: "76 + digits", years: "1976", notes: "Transition year" },
      { serial: "S + digit", years: "1970s", notes: "S7 = 1977, S8 = 1978, S9 = 1979 (front of headstock). An S on the neck heel is Japanese; the tool asks" },
      { serial: "E + digit", years: "1980s", notes: "E0 = 1980 through E9 = 1989" },
      { serial: "N + digit", years: "1990s", notes: "N0 = 1990 through N9 = 1999. Front of the headstock through 1995, back from 1996. An N on the neck heel is Japanese, 1995 to 1996" },
      { serial: "Z + digit", years: "2000s", notes: "Z0 = 2000 through Z9 = 2009" },
      { serial: "US + 2 digits", years: "2010 to today", notes: "US10 = 2010, US22 = 2022, and so on" },
      { serial: "CA / CB / CE + digits", years: "1981–1983", notes: "Gold Series, P-Bass Special, Black and Gold Telecaster" },
    ],
  },
  {
    id: "ref-custom-shop",
    title: "Custom Shop Serials",
    intro: "Custom Shop instruments use their own prefixes.",
    rows: [
      { serial: "CN + digit", years: "1990s", notes: "CN2 = 1992, CN7 = 1997, and so on" },
      { serial: "CZ + digit", years: "2000s", notes: "CZ0 = 2000 through CZ9 = 2009" },
      { serial: "R + digits", years: "Unreliable", notes: "The R number is stamped when the neck blank is cut, not when the guitar ships. Date by the COA or ask the Custom Shop. An R on the neck heel is Crafted in Japan, 2004 to 2005" },
    ],
  },
  {
    id: "ref-mexico",
    title: "Made in Mexico Serials",
    intro: "Ensenada-built instruments, serial on the front or back of the headstock.",
    rows: [
      { serial: "MN + digit", years: "1990s", notes: "MN0 = 1990 through MN9 = 1999" },
      { serial: "MZ + digit", years: "2000s", notes: "MZ0 = 2000 through MZ9 = 2009" },
      { serial: "MX + 2 digits", years: "2010 to today", notes: "MX10 = 2010, MX21 = 2021, and so on" },
    ],
  },
  {
    id: "ref-japan",
    title: "Japanese Serials (MIJ and CIJ)",
    intro:
      'Japanese Fenders say "Made in Japan" or "Crafted in Japan" next to the serial, usually on the back of the neck heel. Several letters were reused across both eras, so the tool asks which wording you see.',
    rows: [
      { serial: "JV + digits", years: "1982–1984", notes: "Made in Japan, the first JV models" },
      { serial: "SQ + digits", years: "1983–1984", notes: "Made in Japan" },
      { serial: "A + 5 digits", years: "Mid-1980s", notes: "Made in Japan. A + 6 digits is Crafted in Japan, 1997 to 1998" },
      { serial: "B + 6 digits", years: "1985–1986 or 1997–1999", notes: "Made in Japan vs Crafted in Japan; check the wording" },
      { serial: "F / G / H / I / J / K / M + digits", years: "1986 to 1993", notes: "Made in Japan, roughly one to two years per letter" },
      { serial: "L + 6 digits", years: "1991–1992", notes: "Made in Japan" },
      { serial: "T / U + digits", years: "1994–1996 or 2007–2011", notes: "Made in Japan vs Crafted in Japan; check the wording" },
      { serial: "N / S / V on the neck heel", years: "1994 to 2008", notes: "Japanese use of American-style letters; the tool separates them by location and wording" },
      { serial: "O / P / Q + digits", years: "1997 to 2002", notes: "Crafted in Japan" },
      { serial: "JD + 2 digits", years: "2010 to today", notes: "Japan Dyna: JD11 = 2011, JD24 = 2024" },
    ],
  },
  {
    id: "ref-reissue",
    title: "V-Prefix Vintage Reissues, 1982 to Today",
    intro:
      "American Vintage Reissues wear a V serial on the neck plate. The number alone cannot pin a year; cross-date with the neck heel stamp and pot codes. A V on the back of the neck heel is Made in Japan, 1996 to 1997.",
    rows: [
      { serial: "V + digits (neck plate)", years: "1982 to today", notes: "American Vintage Reissue; serial alone is not enough" },
      { serial: "V + digits (neck heel)", years: "1996–1997", notes: "Made in Japan" },
    ],
  },
];
