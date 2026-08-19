/**
 * Generate a server-callable copy of Joe's brand serial decoders.
 *
 * The dating logic on this site lives in the browser widgets under
 * public/scripts/*-tool.js, and those widgets are the source of truth. The repo
 * rule is "never hand-rewrite the dating logic", so this script SLICES those
 * functions out verbatim and wraps them so a Cloudflare Function can call them.
 * Nothing here retypes a serial range.
 *
 * The widgets read their input from the DOM and write their answer back into
 * it. Where that happens the verbatim body is kept and only the input line and
 * the output sink are swapped for a parameter and a capture, so every branch,
 * range and wording between them is untouched.
 *
 *   node scripts/gen-serial-decoders.mjs           regenerate
 *   node scripts/gen-serial-decoders.mjs --check   fail if the widgets changed
 *
 * The generated file records a SHA-256 of every widget it was built from. If
 * Joe corrects a widget, --check fails and the file gets regenerated, rather
 * than the server silently dating guitars from stale logic.
 */
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";

const OUT = "functions/api/_decoders.generated.ts";
const SRC = (f) => `public/scripts/${f}-tool.js`;

const read = (f) => fs.readFileSync(SRC(f), "utf8");
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex").slice(0, 16);

/** Slice [from, to) by literal markers. Throws loudly if a marker moved. */
function slice(src, from, to, label) {
  const a = src.indexOf(from);
  if (a < 0) throw new Error(`${label}: start marker not found: ${JSON.stringify(from)}`);
  const b = to === null ? src.length : src.indexOf(to, a);
  if (b < 0) throw new Error(`${label}: end marker not found: ${JSON.stringify(to)}`);
  return src.slice(a, b).trimEnd();
}

/** Slice one named function declaration verbatim, up to the next declaration. */
function fn(src, name, label) {
  const re = new RegExp(`^[ \\t]*function\\s+${name}\\s*\\(`, "m");
  const m = re.exec(src);
  if (!m) throw new Error(`${label}: function ${name} not found`);
  const after = m.index + m[0].length;
  const rest = src.slice(after);
  const next = /^[ \t]*(function\s+[A-Za-z0-9_]+\s*\(|\/\* ──)/m.exec(rest);
  return src.slice(m.index, next ? after + next.index : src.length).trimEnd();
}

const files = { gsn: read("gsn"), grsn: read("grsn"), gsl: read("gsl"), rsn: read("rsn") };

// Gibson: pure decoders lift straight out. The dispatcher (showSerialResults)
// reads two globals and ends by writing to the DOM, so we keep its body
// verbatim up to that write and pass the globals in as arguments instead.
const GIBSON_FNS = ["dayOfYearToDate", "decodeExactNorlinSeventies", "decodeExactReusedEras", "decodeASeries", "decodeEarlyLabel"]
  .map((n) => fn(files.gsn, n, "gibson"))
  .join("\n\n");

const GIBSON_DISPATCH = slice(files.gsn, '    var result = "";', "    document.getElementById('result-text')", "gibson dispatcher");

// Gretsch: one contiguous block of constants + decode() + helpers, all DOM free.
const GRETSCH = slice(files.grsn, "/* ── CONSTANTS ── */", "/* ── RENDER RESULTS ── */", "gretsch");

// Rickenbacker: lookup maps + fmt() + decode(), ending where the handler begins.
const RICK = slice(files.rsn, "var MONTHS = [", "window.jvgDecode = function(){", "rickenbacker");

// Guild: tables and helpers are DOM free. The decision logic lives inside
// window.gslDecode, which reads an <input> and calls show(html, cls) for every
// outcome, so a capturing show() keeps the body byte-identical to the widget.
const GUILD_TABLES = slice(files.gsl, "var SEQ = [", "function show(", "guild tables");
const GUILD_BODY = slice(files.gsl, "    if (!raw) {", "  };", "guild body");

const fingerprints = Object.entries(files)
  .map(([k, v]) => `//   public/scripts/${k}-tool.js  sha256:${sha(v)}  ${v.length} bytes`)
  .join("\n");

const header = `// GENERATED FILE - DO NOT EDIT BY HAND.
// Regenerate with:  node scripts/gen-serial-decoders.mjs
//
// Every line of dating logic below is sliced verbatim from Joe's own browser
// widgets. Edit those, then regenerate. Source fingerprints:
${fingerprints}
/* eslint-disable */
// @ts-nocheck
`;

// The emitted file is deliberately plain JavaScript inside a .ts extension: the
// Worker bundler is happy with it, and the parity harness can load a byte-copy
// of it directly in Node without a TypeScript step.
const body = `${header}
/**
 * @typedef {Object} DecodeResult
 * @property {string} text Plain-text answer, HTML stripped, safe to hand to a model.
 * @property {boolean} ambiguous True when the widget flags the serial as spanning years.
 */

const strip = (h) =>
  String(h)
    .replace(/<br\\s*\\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, ", ")
    .replace(/&ndash;/g, "-")
    .replace(/&approx;/g, "approx ")
    .replace(/&rarr;/g, "->")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/\\s+/g, " ")
    .trim();

/** Ambiguity has to come from the decoder's CLAIM, never from counting years in
 *  the whole answer. Rickenbacker names its format's era ("1961-1986 two-letter
 *  code") in the same sentence as a precise date, and Gretsch prints era
 *  boundaries, so a naive year count flags a confident answer as uncertain and
 *  makes the tool hedge when it should not.
 *
 *  Every widget puts its actual claim in the first <strong>, so that is what
 *  gets counted. */
const claimYears = (html) => {
  const m = String(html).match(/<strong>([\\s\\S]*?)<\\/strong>/);
  const claim = m ? m[1] : "";
  return new Set(claim.match(/\\b(18|19|20)\\d{2}\\b/g) || []);
};
const wrap = (html) => ({ text: strip(html), ambiguous: claimYears(html).size > 1 });

// Each brand keeps its own scope. Three of the four widgets declare MONTHS, and
// two declare decode(), so concatenating them into one module scope collides.
// The IIFE boundary is what lets every slice stay verbatim.

// ---------------------------------------------------------------------------
// GIBSON  (public/scripts/gsn-tool.js)
// ---------------------------------------------------------------------------
const GIBSON = (function () {
${GIBSON_FNS}

  function run(serial, selectedLocation, resolvedType) {
    // Same normalization the widget's startLookup() applies to the raw input.
    var currentSerial = String(serial || "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
${GIBSON_DISPATCH}
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
${GRETSCH}
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
  // The widget returning several result objects IS the ambiguity signal.
  return { text, ambiguous: parts.length > 1 };
}

// ---------------------------------------------------------------------------
// RICKENBACKER  (public/scripts/rsn-tool.js)
// ---------------------------------------------------------------------------
const RICKENBACKER = (function () {
${RICK}
  return { decode: decode };
})();

export function decodeRickenbacker(serial) {
  const r = RICKENBACKER.decode(String(serial || ""));
  if (r && r.err) return { text: strip(r.err), ambiguous: false };
  // Rickenbacker resolves to a single month and year or to an error; the era
  // range in its detail string is the format's span, not a second candidate.
  const text = strip([r && r.date, r && r.detail].filter(Boolean).join(". "));
  return { text: text || "No match in Joe's Rickenbacker data.", ambiguous: false };
}

// ---------------------------------------------------------------------------
// GUILD  (public/scripts/gsl-tool.js)
// ---------------------------------------------------------------------------
// The widget's decision logic lives in window.gslDecode, which reads an <input>
// and calls show(html, cls) for every outcome. Supplying a capturing show() and
// a raw parameter keeps every branch, range and string byte-identical.
const GUILD = (function () {
${GUILD_TABLES}

  // captured MUST live outside run(): every branch of the widget body ends in a
  // bare \`return;\` (it was a void event handler), so run() always returns
  // undefined and anything returned from its tail is unreachable. Read the
  // captured value after the call instead of from it.
  var captured = null;
  function show(html, cls) {
    captured = { html: html, cls: cls || "" };
  }
  function run(rawInput) {
    captured = null;
    var raw = String(rawInput || "").toUpperCase().replace(/[\\s\\-]/g, "");
${GUILD_BODY}
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
`;

if (process.argv.includes("--check")) {
  const existing = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  // Normalize line endings before comparing. Git checks this file out with CRLF
  // on Windows, so a naive split leaves a trailing \r on every line and the gate
  // reports STALE against fingerprints that are byte-identical.
  const norm = (s) => s.replace(/\r/g, "");
  const want = norm(fingerprints);
  const have = norm(existing)
    .split("\n")
    .filter((l) => l.includes("sha256:"))
    .join("\n");
  if (want !== have) {
    console.error("[decoders] STALE: a widget under public/scripts/ changed since generation.");
    console.error("expected:\n" + want);
    console.error("found:\n" + have);
    console.error("Run: node scripts/gen-serial-decoders.mjs");
    process.exit(1);
  }
  console.log("[decoders] up to date");
  process.exit(0);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);
console.log(`[decoders] wrote ${OUT} (${body.length} bytes)`);
for (const [k, v] of Object.entries(files)) console.log(`  from ${k}-tool.js sha256:${sha(v)}`);
