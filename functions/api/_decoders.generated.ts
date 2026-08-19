// GENERATED FILE - DO NOT EDIT BY HAND.
// Regenerate with:  node scripts/gen-serial-decoders.mjs
//
// Every line of dating logic below is sliced verbatim from Joe's own browser
// widgets. Edit those, then regenerate. Source fingerprints:
//   public/scripts/gsn-tool.js  sha256:4b289b5175d93b6a  44543 bytes
//   public/scripts/grsn-tool.js  sha256:58dee0b4956ff2f6  31930 bytes
//   public/scripts/gsl-tool.js  sha256:f60f603b27e03265  7982 bytes
//   public/scripts/rsn-tool.js  sha256:b6bd9d029d6d3d8b  9659 bytes
/* eslint-disable */
// @ts-nocheck

/**
 * @typedef {Object} DecodeResult
 * @property {string} text Plain-text answer, HTML stripped, safe to hand to a model.
 * @property {boolean} ambiguous True when the widget flags the serial as spanning years.
 */

const strip = (h) =>
  String(h)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, ", ")
    .replace(/&ndash;/g, "-")
    .replace(/&approx;/g, "approx ")
    .replace(/&rarr;/g, "->")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

/** More than one year named in the answer means the widget is telling us the
 *  serial genuinely spans eras. Surfacing that is the whole point: asked to
 *  read this out of prose, the model collapsed these to a single year. */
const isAmbiguous = (t) => new Set(t.match(/\b(19|20)\d{2}\b/g) || []).size > 1;
const wrap = (html) => {
  const text = strip(html);
  return { text, ambiguous: isAmbiguous(text) };
};

// Each brand keeps its own scope. Three of the four widgets declare MONTHS, and
// two declare decode(), so concatenating them into one module scope collides.
// The IIFE boundary is what lets every slice stay verbatim.

// ---------------------------------------------------------------------------
// GIBSON  (public/scripts/gsn-tool.js)
// ---------------------------------------------------------------------------
const GIBSON = (function () {
function dayOfYearToDate(day, year) {
    if (!day || day < 1 || day > 366) return null;
    try {
        var d = new Date(year, 0);
        d.setDate(day);
        return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    } catch(e) { return null; }
}

function decodeExactNorlinSeventies(s) {
    var num = parseInt(s);
    var year = "";
    if (num <= 100000) year = "1973";
    else if (num <= 200000) year = "1970, 1971, 1972, 1973, 1974, or 1975";
    else if (num <= 300000) year = "1973, 1974, or 1975";
    else if (num <= 400000) year = "1974 or 1975";
    else if (num <= 500000) year = "1974 or 1975";
    else if (num <= 600000) year = "1974 or 1975";
    else if (num <= 700000) year = "1970, 1971, 1972, 1974, or 1975";
    else if (num <= 800000) year = "1970, 1971, or 1972";
    else if (num <= 900000) year = "1973, 1974, or 1975";
    else year = "1970, 1971, or 1972";
    return "Sequence with 'MADE IN USA' stamp points to <strong>" + year + "</strong>. Norlin serials are notoriously unreliable, so cross-check with <a href=\"#pots\">Pot Codes</a> for confirmation.";
}

function decodeExactReusedEras(s) {
    var num = parseInt(s);
    var year = "";
    if (num <= 42440) year = "1961";
    else if (num <= 61180) year = "1962";
    else if (num <= 64222) year = "1963";
    else if (num <= 71040) year = "1964";
    else if (num <= 96600) year = "1962, 1963, or 1964";
    else if (num <= 99999) year = "1963";
    else if (num <= 106099) year = "1963 or 1967";
    else if (num <= 106899) year = "1963";
    else if (num <= 109999) year = "1963 or 1967";
    else if (num <= 111549) year = "1963";
    else if (num <= 115799) year = "1963 or 1967";
    else if (num <= 118299) year = "1963";
    else if (num <= 120999) year = "1963 or 1967";
    else if (num <= 139999) year = "1963";
    else if (num <= 140100) year = "1963 or 1967";
    else if (num <= 144304) year = "1963";
    else if (num <= 144380) year = "1964";
    else if (num <= 149864) year = "1963";
    else if (num <= 149891) year = "1964";
    else if (num <= 152989) year = "1963";
    else if (num <= 174222) year = "1964";
    else if (num <= 176643) year = "1964 or 1965";
    else if (num <= 250335) year = "1964";
    else if (num <= 305983) year = "1965";
    else if (num <= 310999) year = "1965 or 1967";
    else if (num <= 320149) year = "1965";
    else if (num <= 320699) year = "1967";
    else if (num <= 329179) year = "1965";
    else if (num <= 330199) year = "1965 or 1967";
    else if (num <= 332240) year = "1965, 1967, or 1968";
    else if (num <= 348092) year = "1965";
    else if (num <= 349100) year = "1966";
    else if (num <= 368638) year = "1965";
    else if (num <= 369890) year = "1966";
    else if (num <= 370999) year = "1967";
    else if (num <= 385309) year = "1966";
    else if (num <= 390998) year = "1967";
    else if (num <= 406666) year = "1966";
    else if (num <= 409670) year = "1966, 1967, or 1968";
    else if (num <= 410900) year = "1966";
    else if (num <= 429193) year = "1966";
    else if (num <= 500999) year = "1965, 1966, 1968, or 1969";
    else if (num <= 501600) year = "1965";
    else if (num <= 501702) year = "1968";
    else if (num <= 502706) year = "1965 or 1968";
    else if (num <= 503109) year = "1968";
    else if (num <= 520955) year = "1965 or 1968";
    else if (num <= 530056) year = "1968";
    else if (num <= 530850) year = "1966, 1968, or 1969";
    else if (num <= 530993) year = "1968 or 1969";
    else if (num <= 540795) year = "1966 or 1969";
    else if (num <= 557999) year = "1966";
    else if (num <= 570643) year = "1966";
    else if (num <= 570755) year = "1966 or 1967";
    else if (num <= 570964) year = "1966";
    else if (num <= 580999) year = "1966, 1967, or 1969";
    else if (num <= 600998) year = "1966, 1967, or 1968";
    else if (num <= 606090) year = "1969";
    else if (num <= 700799) year = "1966, 1967, or 1969";
    else if (num <= 750999) year = "1968 or 1969";
    else if (num <= 800999) year = "1966, 1967, 1968, or 1969";
    else if (num <= 812838) year = "1966 or 1969";
    else if (num <= 820087) year = "1966 or 1969";
    else if (num <= 823830) year = "1966";
    else if (num <= 847488) year = "1966 or 1969";
    else if (num <= 858999) year = "1966 or 1969";
    else if (num <= 895038) year = "1967";
    else if (num <= 896999) year = "1968";
    else if (num <= 898999) year = "1967 or 1969";
    else if (num <= 899999) year = "1968";
    else if (num <= 909999) year = "1970";
    else year = "1968";
    return "Sequence points to <strong>" + year + "</strong>. Gibson reused these numbers in the 60s, so verify with <a href=\"#pots\">Pot Codes</a> or a <strong><a href=\"/free-appraisal/\">Free Appraisal</a></strong> for certainty.";
}

function decodeASeries(s) {
    var numPart = parseInt(s.substring(1));
    var year = numPart <= 1305 ? "1947" : numPart <= 2665 ? "1948" : numPart <= 4410 ? "1949" : numPart <= 6596 ? "1950" : numPart <= 9420 ? "1951" : numPart <= 12460 ? "1952" : numPart <= 17435 ? "1953" : numPart <= 18665 ? "1954" : numPart <= 21910 ? "1955" : numPart <= 24755 ? "1956" : numPart <= 26820 ? "1957" : numPart <= 28880 ? "1958" : numPart <= 32285 ? "1959" : numPart <= 34645 ? "1960" : "Beyond 1960 Range";
    return "Post-War 'A' Series serial (on interior orange label) built in: <strong>" + year + "</strong>.";
}

function decodeEarlyLabel(s) {
    var num = parseInt(s);
    var year = num <= 1150 ? "1903" : num <= 1850 ? "1904" : num <= 2550 ? "1905" : num <= 3350 ? "1906" : num <= 4250 ? "1907" : num <= 5450 ? "1908" : num <= 6950 ? "1909" : num <= 8750 ? "1910" : num <= 10850 ? "1911" : num <= 13350 ? "1912" : num <= 16100 ? "1913" : num <= 20150 ? "1914" : num <= 25150 ? "1915" : num <= 32000 ? "1916" : num <= 39500 ? "1917" : num <= 47900 ? "1918" : num <= 53800 ? "1919" : num <= 62200 ? "1920" : num <= 69300 ? "1921" : num <= 71400 ? "1922" : num <= 74900 ? "1923" : num <= 80300 ? "1924" : num <= 82700 ? "1925" : num <= 83600 ? "1926" : num <= 85400 ? "1927" : num <= 87300 ? "1928" : num <= 89750 ? "1929" : num <= 90200 ? "1930" : num <= 90450 ? "1931" : num <= 90700 ? "1932" : num <= 91400 ? "1933" : num <= 92300 ? "1934" : num <= 92800 ? "1935" : num <= 94100 ? "1936" : num <= 95200 ? "1937" : num <= 96050 ? "1938" : num <= 96600 ? "1940" : num <= 97400 ? "1941" : num <= 97700 ? "1942" : num <= 97850 ? "1943" : num <= 98250 ? "1944" : num <= 98650 ? "1945" : num <= 99300 ? "1946" : "1947";
    return "Early White Label serial built in: <strong>" + year + "</strong>.";
}

  function run(serial, selectedLocation, resolvedType) {
    // Same normalization the widget's startLookup() applies to the raw input.
    var currentSerial = String(serial || "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    var result = "";
    var s = currentSerial;
    var len = s.length;
    var firstDigit = s[0];
    var modernPrefixes = ['7', '8', '9', '0', '1', '2'];
    if (s.startsWith('A')) {
        result = decodeASeries(s);
    } else if (len === 6 && s[0] === '0' && (resolvedType === 'usa_yes' || resolvedType === 'usa_no')) {
        result = resolvedType === 'usa_yes'
            ? "Sequence with 'MADE IN USA' stamp points to <strong>1970</strong>. Norlin serials are notoriously unreliable, so cross-check with <a href=\"#pots\">Pot Codes</a> for confirmation."
            : "Sequence points to <strong>1967</strong>. Gibson reused these numbers in the 60s, so verify with <a href=\"#pots\">Pot Codes</a> or a <strong><a href=\"/free-appraisal/\">Free Appraisal</a></strong> for certainty.";
    } else if (resolvedType === 'white_label') {
        result = decodeEarlyLabel(s);
    } else if (resolvedType === 'usa_yes') {
        result = decodeExactNorlinSeventies(s);
    } else if ((selectedLocation === 'wood' || selectedLocation === 'label') && len >= 7 && modernPrefixes.includes(firstDigit) && resolvedType !== 'decal') {
        var yearDigits = s[0] + s[4];
        var fullYear = (parseInt(s[0]) <= 2) ? "20" + yearDigits : "19" + yearDigits;
        result = 'Modern Standard serial (1977\u2013Present). Your guitar was built in <strong>' + fullYear + '</strong>.';
    } else if (resolvedType === 'decal') {
        var prefix = s.substring(0, 2);
        var year = prefix === '99' ? "1975" : prefix === '00' ? "1976" : "1977";
        result = 'Decal Prefix from the mid-70s Norlin Era. Built in <strong>' + year + '</strong>.';
    } else if ((selectedLocation === 'wood' || resolvedType === 'orange_label' || resolvedType === 'usa_no' || selectedLocation === 'label') && len >= 4 && len <= 6 && !isNaN(s)) {
        result = decodeExactReusedEras(s);
    } else if (selectedLocation === 'ink_headstock' && len >= 5 && len <= 6 && !isNaN(firstDigit)) {
        var year = firstDigit === '0' ? '1960' : '195' + firstDigit;
        result = 'Golden Era ink-stamped headstock serial from <strong>' + year + '</strong>.';
    } else {
        result = "Tricky format. Common with vintage instruments. Match it against the charts below, or text Joe for expert help.";
    }
    return result;
  }
  return { run: run };
})();

export function decodeGibson(serial, selectedLocation, resolvedType) {
  return wrap(GIBSON.run(serial, selectedLocation, resolvedType));
}

// ---------------------------------------------------------------------------
// GRETSCH  (public/scripts/grsn-tool.js)
// ---------------------------------------------------------------------------
const GRETSCH = (function () {
/* ── CONSTANTS ── */
  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  const SEQUENTIAL_RANGES = [
    { min:1,     max:999,   year:'1939–1946', label:'Pre-War / Early Post-War',       era:'pre-war'   },
    { min:1000,  max:4999,  year:'1946–1950', label:'Early Post-War',                 era:'post-war'  },
    { min:5000,  max:8999,  year:'1950–1953', label:'Early 1950s',                    era:'early50s'  },
    { min:9000,  max:12999, year:'1953–1954', label:'Early 1950s',                    era:'early50s'  },
    { min:13000, max:16999, year:'1955',      label:'Mid-1950s — Golden Era begins',  era:'golden'    },
    { min:17000, max:20999, year:'1956',      label:'Mid-1950s — Golden Era',         era:'golden'    },
    { min:21000, max:26000, year:'1957',      label:'Golden Era — see anomaly note',  era:'golden', anomaly:'1957_1965' },
    { min:26001, max:30000, year:'1958',      label:'Late-1950s Golden Era',          era:'golden'    },
    { min:30001, max:34999, year:'1959',      label:'Late-1950s Golden Era',          era:'golden'    },
    { min:35000, max:39999, year:'1960',      label:'Early 1960s — peak Golden Era',  era:'golden'    },
    { min:40000, max:45999, year:'1961',      label:'Early 1960s',                    era:'golden'    },
    { min:46000, max:52999, year:'1962',      label:'Early 1960s',                    era:'golden'    },
    { min:53000, max:62999, year:'1963',      label:'Early 1960s',                    era:'golden'    },
    { min:63000, max:77999, year:'1964',      label:'Mid-1960s',                      era:'golden'    },
    { min:78000, max:85999, year:'1965',      label:'Mid-1960s — final pre-Baldwin',  era:'golden', anomaly:'1965_lost_labels' },
  ];

  const DC_YEAR_MAP = {'5':1965,'6':1966,'7':1967,'8':1968,'9':1969,'0':1970,'1':1971,'2':1972};

  const HYP_YEAR_MAP = {'3':1973,'4':1974,'5':1975,'6':1976,'7':1977,
                         '8':1978,'9':1979,'0':1980,'1':1981};

  const FACTORY_MAP = {
    'JT': { country:'Japan',  facility:'Terada',       series:'Professional Series' },
    'JD': { country:'Japan',  facility:'Dyna Gakki',   series:'Select Professional models' },
    'JF': { country:'Japan',  facility:'Fuji-Gen Gakki', series:'Select models' },
    'CS': { country:'USA',    facility:'Gretsch Custom Shop', series:'Nashville Custom Shop' },
    'CY': { country:'China',  facility:'Yako',         series:'Electromatic Series' },
    'KS': { country:'Korea',  facility:'Samick / SPG', series:'Streamliner Series' },
    'KP': { country:'Korea',  facility:'Peerless',     series:'Select Korean models' },
  };

  const APPRAISAL_URL = 'https://www.joesvintageguitarsaz.com/sell-my-gretsch-guitar/';

  /* ── DECODE ENTRY POINT ── */
  function decode(rawInput) {
    const raw = rawInput.trim();
    if (!raw) return [{ type:'empty' }];

    // 1. Fender era: 2 letters + 8 digits
    if (/^[A-Za-z]{2}\d{8}$/.test(raw)) {
      return [decodeFender(raw)];
    }

    // 2. Hyphenated Baldwin: 1-2 digits + hyphen + 2-5 digits
    if (/^\d{1,2}-\d{2,5}$/.test(raw)) {
      return [decodeHyphenated(raw)];
    }

    // 3. Pure digits
    const digits = raw.replace(/\D/g, '');
    const len = digits.length;
    const num = parseInt(digits, 10);

    if (len === 0) return [{ type:'error', msg:'No digits found. Please enter a valid serial number.' }];

    // Pre-war: 1-3 digits
    if (len <= 3) return [decodePreWar(digits)];

    // Early post-war: 4 digits
    if (len === 4) return [decodeFourDigit(digits, num)];

    // Japan era: 9+ digits
    if (len >= 9) return [decodeJapan(digits)];

    // 5-6 digits: sequential AND/OR date-coded
    if (len === 5 || len === 6) {
      return analyzeFiveOrSix(digits, num);
    }

    return [{ type:'error', msg:'Unrecognized format. Check the serial and try again.' }];
  }

  /* ── FIVE / SIX DIGIT ANALYSIS ── */
  function analyzeFiveOrSix(digits, num) {
    const results = [];

    // Sequential interpretation
    const seqResult = findSequential(num);
    if (seqResult) results.push(seqResult);

    // Date-coded interpretations
    const dcResults = parseDateCoded(digits);
    dcResults.forEach(r => results.push(r));

    if (results.length === 0) {
      results.push({ type:'error', msg:'This number doesn\'t match any known Gretsch serial format. It may be from a 1999–2002 Korean instrument with a lost sticker, or a non-standard sequence.' });
    }

    return results;
  }

  /* ── SEQUENTIAL LOOKUP ── */
  function findSequential(num) {
    for (const r of SEQUENTIAL_RANGES) {
      if (num >= r.min && num <= r.max) {
        return {
          type: 'sequential',
          era: 'Family Era — Sequential Production',
          year: r.year,
          eraSub: r.label,
          num: num,
          range: `${r.min.toLocaleString()}–${r.max.toLocaleString()}`,
          anomaly: r.anomaly || null,
        };
      }
    }
    return null;
  }

  /* ── DATE-CODED PARSING ── */
  function parseDateCoded(digits) {
    const results = [];

    // Try 1-digit month (months 1–9), year digit at index 1
    const m1 = parseInt(digits[0], 10);
    const y1char = digits[1];
    if (m1 >= 1 && m1 <= 9 && DC_YEAR_MAP.hasOwnProperty(y1char)) {
      const year = DC_YEAR_MAP[y1char];
      const unit = parseInt(digits.substring(2), 10);
      const decadeAmbiguous = (m1 >= 1 && m1 <= 9 && (y1char === '0'));
      results.push({
        type: 'date-coded',
        era: 'Late Family / Early Baldwin — Date-Coded',
        month: m1,
        monthName: MONTHS[m1 - 1],
        year: year,
        unit: unit,
        madeInUSA: year >= 1967,
        decadeAmbiguous: decadeAmbiguous,
        raw: digits,
      });
    }

    // Try 2-digit month (months 10–12), year digit at index 2
    if (digits.length >= 5) {
      const m2 = parseInt(digits.substring(0, 2), 10);
      const y2char = digits[2];
      if (m2 >= 10 && m2 <= 12 && DC_YEAR_MAP.hasOwnProperty(y2char)) {
        const year = DC_YEAR_MAP[y2char];
        const unit = parseInt(digits.substring(3), 10);
        // Flag decade ambiguity: Oct/Nov/Dec (10/11/12) 1969 vs Jan 1970/71/72
        // e.g. "109837": could be Oct-1969 (10+9+837) but "1" could be Jan + "09" = 1970
        const decadeAmbiguous = (year === 1970 || year === 1971 || year === 1972);
        results.push({
          type: 'date-coded',
          era: 'Late Family / Early Baldwin — Date-Coded',
          month: m2,
          monthName: MONTHS[m2 - 1],
          year: year,
          unit: unit,
          madeInUSA: year >= 1967,
          decadeAmbiguous: decadeAmbiguous,
          raw: digits,
        });
      }
    }

    return results;
  }

  /* ── INDIVIDUAL DECODERS ── */
  function decodePreWar(digits) {
    return {
      type: 'pre-war',
      era: 'Pre-War Family Era',
      year: '1939–1945',
      digits: digits,
    };
  }

  function decodeFourDigit(digits, num) {
    let year = '1945–1954';
    let note = '';
    if (num >= 1000 && num <= 1999) { year = '~1946–1947'; note = 'Very early post-war production.'; }
    if (num >= 2000 && num <= 2999) { year = '~1946–1949'; }
    if (num >= 4000 && num <= 5999) { year = '~1950'; }
    return {
      type: 'four-digit',
      era: 'Family Era — Post-War Sequential',
      year: year,
      num: num,
      note: note,
    };
  }

  function decodeHyphenated(raw) {
    const parts = raw.split('-');
    const month = parseInt(parts[0], 10);
    const rest = parts[1];
    const yearChar = rest[0];
    const unit = rest.substring(1);
    const year = HYP_YEAR_MAP[yearChar];
    return {
      type: 'hyphenated',
      era: 'Baldwin Era — Hyphenated Date Code',
      month: month,
      monthName: (month >= 1 && month <= 12) ? MONTHS[month - 1] : '?',
      year: year || '1973–1981 (year digit unclear)',
      unit: unit,
      raw: raw,
    };
  }

  function decodeFender(raw) {
    const upper = raw.toUpperCase();
    const prefix = upper.substring(0, 2);
    const yearStr = '20' + upper.substring(2, 4);
    const monthNum = parseInt(upper.substring(4, 6), 10);
    const unit = parseInt(upper.substring(6), 10);
    const factory = FACTORY_MAP[prefix] || { country:'Unknown', facility:'Unknown factory', series:'Unknown series' };
    return {
      type: 'fender',
      era: 'Fender Era — 2003 to Present',
      prefix: prefix,
      year: yearStr,
      month: monthNum,
      monthName: (monthNum >= 1 && monthNum <= 12) ? MONTHS[monthNum - 1] : '?',
      unit: unit,
      factory: factory,
      raw: upper,
    };
  }

  function decodeJapan(digits) {
    return {
      type: 'japan',
      era: 'Japan Era — 1989 to 2002',
      year: '1989–2002',
      digits: digits,
    };
  }
  return { decode: decode };
})();

export function decodeGretsch(serial) {
  const results = GRETSCH.decode(String(serial || ""));
  const list = (Array.isArray(results) ? results : [results]).filter((r) => r && r.type !== "empty");
  const parts = list
    .map((r) => {
      if (r.type === "error") return r.msg;
      // Field names come from the widget's own result objects.
      const when = r.year || r.range || "";
      return [
        [r.era, r.eraSub].filter(Boolean).join(" - "),
        when && "Dated " + when,
        r.monthName && "Month: " + r.monthName,
        r.unit && "Unit #" + r.unit,
        r.factory && "Factory: " + r.factory,
        r.note,
      ]
        .filter(Boolean)
        .join(". ");
    })
    .filter(Boolean);
  if (!parts.length) return { text: "No match in Joe's Gretsch data for that serial.", ambiguous: false };
  // More than one result IS the widget telling us the serial overlaps eras.
  const text = strip(
    (parts.length > 1 ? "This serial has " + parts.length + " possible readings. " : "") + parts.join(" | "),
  );
  return { text, ambiguous: parts.length > 1 || isAmbiguous(text) };
}

// ---------------------------------------------------------------------------
// RICKENBACKER  (public/scripts/rsn-tool.js)
// ---------------------------------------------------------------------------
const RICKENBACKER = (function () {
var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var MONTHS_MNY = {M:0,N:1,P:2,Q:3,R:4,S:5,T:6,U:7,V:8,W:9,X:10,Y:11};
    var MONTHS_AL  = {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11};
    var YEARS_AL   = {A:1961,B:1962,C:1963,D:1964,E:1965,F:1966,G:1967,H:1968,I:1969,J:1970,K:1971,L:1972,M:1973,N:1974,O:1975,P:1976,Q:1977,R:1978,S:1979,T:1980,U:1981,V:1982,W:1983,X:1984,Y:1985,Z:1986};

    function fmt(d){return d<10?'0'+d:String(d);}

    function decode(raw){
      var sn = raw.toUpperCase().replace(/[^A-Z0-9]/g,'');
      if(!sn) return {err:'Please enter a serial number.'};

      // ── 1999-present: two leading digits ──
      if(/^[0-9]{2}/.test(sn)){
        if(sn.length < 4) return {err:'Serial number too short for the modern YY-WW format. Need at least 4 digits.'};
        var yr2 = parseInt(sn.slice(0,2),10);
        var wk  = parseInt(sn.slice(2,4),10);
        if(isNaN(wk)||wk<1||wk>53) return {err:'Week number out of range (01–53). Check the serial number.'};
        var year = yr2 >= 99 ? 1999 : 2000 + yr2;
        var seq  = sn.length>4 ? sn.slice(4) : '';
        var detail = 'Week '+fmt(wk)+' of '+year+' · Production #: '+(seq||'—')+' · Format: 1999–present (YY+WW)';
        return {date:'Week '+fmt(wk)+', '+year, detail:detail};
      }

      var c0 = sn[0], c1 = sn[1];
      var isLetter0 = /[A-Z]/.test(c0);
      var isLetter1 = c1 && /[A-Z]/.test(c1);
      var isDigit1  = c1 && /[0-9]/.test(c1);

      // ── 1961-1986: two leading letters ──
      if(isLetter0 && isLetter1){
        // Check JK/JL Nov-Dec 1960 transition
        if(c0==='J' && (c1==='K'||c1==='L')){
          var mo60 = c1==='K'?'November':'December';
          return {date:mo60+' 1960', detail:'Transition serial number series (Nov–Dec 1960 only) · Format: JK/JL introduction period'};
        }
        if(!(c0 in YEARS_AL)) return {err:'First letter "'+c0+'" is not a valid year code for the 1961–1986 system (A=1961 to Z=1986).'};
        if(!(c1 in MONTHS_AL)) return {err:'Second letter "'+c1+'" is not a valid month code (A=Jan to L=Dec).'};
        var yr = YEARS_AL[c0];
        var mo = MONTHS[MONTHS_AL[c1]];
        var seq2 = sn.slice(2);
        return {date:mo+' '+yr, detail:'Production #: '+(seq2||'—')+' · Format: 1961–1986 two-letter code ('+c0+'='+yr+', '+c1+'='+mo+')'};
      }

      // ── 1987-1998: letter + digit ──
      if(isLetter0 && isDigit1){
        var digit = parseInt(c1,10);
        // M-Y = 1997-2006 months
        if(c0 in MONTHS_MNY){
          var yr97 = 1997 + digit;
          if(yr97 > 1998) return {err:'The M–Y month codes paired with a single year digit only cover 1997–1998. For 1999+, Rickenbacker switched to the YY+WW system (two leading digits).'};
          var mo97 = MONTHS[MONTHS_MNY[c0]];
          var seq3 = sn.slice(2);
          return {date:mo97+' '+yr97, detail:'Production #: '+(seq3||'—')+' · Format: 1997–1998 (M=Jan, N=Feb, P=Mar… Y=Dec; digit 0=1997, 1=1998)'};
        }
        // A-L = 1987-1996 months
        if(c0 in MONTHS_AL){
          var yr87 = 1987 + digit;
          var mo87 = MONTHS[MONTHS_AL[c0]];
          var seq4 = sn.slice(2);
          return {date:mo87+' '+yr87, detail:'Production #: '+(seq4||'—')+' · Format: 1987–1996 (A=Jan… L=Dec; digit 0=1987 … 9=1996)'};
        }
        return {err:'Could not identify a valid 1987–1998 month code from "'+c0+'". Valid month letters: A–L (1987–1996) or M–Y exc. O (1997–1998).'};
      }

      return {err:'Could not decode "'+sn+'". This may be a pre-1961 model-specific serial, an XX replacement jackplate, or the serial may contain errors. See the era guide below.'};
    }
  return { decode: decode };
})();

export function decodeRickenbacker(serial) {
  const r = RICKENBACKER.decode(String(serial || ""));
  if (r && r.err) return { text: strip(r.err), ambiguous: false };
  const text = strip([r && r.date, r && r.detail].filter(Boolean).join(". "));
  return { text: text || "No match in Joe's Rickenbacker data.", ambiguous: isAmbiguous(text) };
}

// ---------------------------------------------------------------------------
// GUILD  (public/scripts/gsl-tool.js)
// ---------------------------------------------------------------------------
// The widget's decision logic lives in window.gslDecode, which reads an <input>
// and calls show(html, cls) for every outcome. Supplying a capturing show() and
// a raw parameter keeps every branch, range and string byte-identical.
const GUILD = (function () {
var SEQ = [
    { y: 1953, a: 1000, b: 1500, approx: true },
    { y: 1954, a: 1501, b: 2200, approx: true },
    { y: 1955, a: 2201, b: 3000, approx: true },
    { y: 1956, a: 3001, b: 4000, approx: true },
    { y: 1957, a: 4001, b: 5700, approx: true },
    { y: 1958, a: 5701, b: 8300, approx: true },
    { y: 1959, a: 8301, b: 12035, approx: true },
    { y: 1960, a: 12036, b: 14713 },
    { y: 1961, a: 14714, b: 18419 },
    { y: 1962, a: 18420, b: 22722 },
    { y: 1963, a: 22723, b: 28943 },
    { y: 1964, a: 28944, b: 38636 },
    { y: 1965, a: 38637, b: 46606 },
    { y: 1966, a: 46607, b: 46608 },
    { y: 1967, a: 46609, b: 46637 },
    { y: 1968, a: 46638, b: 46656 },
    { y: 1969, a: 46657, b: 46695 },
    { y: 1970, a: 46696, b: 50978 },
    { y: 1971, a: 50979, b: 61463 },
    { y: 1972, a: 61464, b: 75602 },
    { y: 1973, a: 75603, b: 95496 },
    { y: 1974, a: 95497, b: 112803 },
    { y: 1975, a: 112804, b: 130304 },
    { y: 1976, a: 130305, b: 149625 },
    { y: 1977, a: 149626, b: 169867 },
    { y: 1978, a: 169868, b: 195067 },
    { y: 1979, a: 195068, b: 211877 }
  ];

  var MONTHS = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
  // Cumulative days before each month (non-leap year) for Julian-day -> date.
  var CUM = [0,31,59,90,120,151,181,212,243,273,304,334];

  function julianDayToDate(day) {
    if (day < 1 || day > 366) return null;
    var m = 11;
    for (var i = 0; i < 12; i++) {
      if (day <= CUM[i] + [31,28,31,30,31,30,31,31,30,31,30,31][i]) { m = i; break; }
    }
    return MONTHS[m] + " " + (day - CUM[m]);
  }

  function julianYear(ch) {
    // Documented in the guide: I=2005 ... N=2010 (consecutive letters).
    var code = ch.charCodeAt(0); // 'I' = 73
    if (code < 73 || code > 90) return null; // only I-Z map to 2005+
    return { year: 2005 + (code - 73), confident: 2005 + (code - 73) <= 2010 };
  }

  var APPRAISE = '<br><br>Want a confirmed date and a market value? ' +
    '<a href="/free-appraisal/" class="gsl-tool__link">Get a free appraisal from Joe</a>.';

  // captured MUST live outside run(): every branch of the widget body ends in a
  // bare `return;` (it was a void event handler), so run() always returns
  // undefined and anything returned from its tail is unreachable. Read the
  // captured value after the call instead of from it.
  var captured = null;
  function show(html, cls) {
    captured = { html: html, cls: cls || "" };
  }
  function run(rawInput) {
    captured = null;
    var raw = String(rawInput || "").toUpperCase().replace(/[\s\-]/g, "");
    if (!raw) { show("Enter a serial number to decode.", "is-error"); return; }

    // --- Julian (2005+): 2 letters + 6 digits, first letter T or N ---
    var jm = raw.match(/^([TN])([A-Z])(\d{3})(\d{3})$/);
    if (jm) {
      var plant = jm[1] === "T" ? "Tacoma, Washington" : "New Hartford, Connecticut";
      var jy = julianYear(jm[2]);
      var day = parseInt(jm[3], 10);
      var unit = parseInt(jm[4], 10);
      var date = julianDayToDate(day);
      if (!jy) {
        show("This looks like a modern Julian serial, but the year letter " +
          "<strong>" + jm[2] + "</strong> isn't in the 2005-onward range. Double-check the serial.", "is-warn");
        return;
      }
      var yearTxt = jy.confident
        ? "<strong>" + jy.year + "</strong>"
        : "<strong>~" + jy.year + "</strong> <small>(estimated &mdash; the guide documents 2005&ndash;2010; later year letters follow the same A&rarr;Z order, so confirm with Guild)</small>";
      show(
        "<strong>Modern Julian serial.</strong><br>" +
        "Plant: <strong>" + plant + "</strong><br>" +
        "Year: " + yearTxt + "<br>" +
        (date ? "Built on day " + day + " of the year (&approx; " + date + ")<br>" : "") +
        "Unit " + unit + " built that day." + APPRAISE
      );
      return;
    }

    // --- Pure numeric: sequential 1953-1979 ---
    if (/^\d+$/.test(raw)) {
      var n = parseInt(raw, 10);
      var hit = null;
      for (var i = 0; i < SEQ.length; i++) {
        if (n >= SEQ[i].a && n <= SEQ[i].b) { hit = SEQ[i]; break; }
      }
      if (hit) {
        var note = "";
        if (hit.approx) {
          note = "<br><small>Pre-1960 ranges are approximate; confirm against the instrument's features.</small>";
        } else if (hit.y >= 1965 && hit.y <= 1969) {
          note = "<br><small>Note: most 1965&ndash;1969 Guilds used a <em>model-specific</em> letter-prefix serial instead of a sequential number. If yours has letters, use the model charts below.</small>";
        }
        show("<strong>Your Guild dates to " + hit.y + "</strong> (sequential serial number)." + note + APPRAISE);
        return;
      }
      if (n < 1000) {
        show("Sequential Guild serials start around 1000 (1953). A number this low may be a model-specific or modern serial &mdash; check the charts below.", "is-warn");
        return;
      }
      show("This number is above the documented sequential range that ended at <strong>211877</strong> in Sept&nbsp;1979. From late 1979 Guild switched to letter-prefix serials, and modern guitars use the Julian system &mdash; find your serial's format in the charts below.", "is-warn");
      return;
    }

    // --- Letter-prefix (model-specific) serials, 1965-1969 & 1979-1996 ---
    var pm = raw.match(/^([A-Z]{1,3})(\d+)/);
    if (pm) {
      var prefix = pm[1];
      show(
        "<strong>Model-specific (prefix) serial.</strong> Guild used letter-prefix serials in " +
        "<strong>1965&ndash;1969</strong> and again from <strong>1979 through 1996</strong>, where the " +
        "prefix identifies the model and the number gives the year. The same prefix can mean different " +
        "models in different eras, so the number alone can't be decoded automatically.<br><br>" +
        "Find your prefix <strong>&ldquo;" + prefix + "&rdquo;</strong> in the era charts below " +
        "(on a computer, press <kbd>Ctrl</kbd>+<kbd>F</kbd> and type the prefix to jump to it).",
        "is-warn"
      );
      return;
    }

    show("That doesn't match a known Guild serial format. Guild serials are either all digits (1953&ndash;1979), a letter prefix plus digits (1965&ndash;1996), or two letters plus six digits (2005+). Double-check and try again.", "is-error");
  }
  return {
    run: function (s) {
      run(s);
      return captured;
    },
  };
})();

export function decodeGuild(serial) {
  const captured = GUILD.run(serial);
  if (!captured) return { text: "No match in Joe's Guild data for that serial.", ambiguous: false };
  return wrap(captured.html);
}
