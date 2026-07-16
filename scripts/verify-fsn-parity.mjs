#!/usr/bin/env node
/**
 * Parity gate for the v2 Fender serial resolver (src/data/fender-serials.ts).
 *
 * Drives the ORIGINAL widget (reference/fsn-tool-html.html +
 * public/scripts/fsn-tool.js) in headless Chromium across a boundary corpus —
 * every numeric range edge, every prefix branch, every follow-up answer path —
 * and diffs the outcomes against the new pure resolver. Exit 0 = identical.
 *
 * Run after ANY edit to the resolver or the original tool:
 *   node scripts/verify-fsn-parity.mjs
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { chromium } from "playwright";

const ROOT = process.cwd();
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "fsn-parity-"));

// ── 1. Bundle the TS resolver so Node can import it ─────────────────────────
const resolverOut = path.join(tmp, "resolver.mjs");
execSync(
  `"${path.join(ROOT, "node_modules/.bin/esbuild")}" src/data/fender-serials.ts --bundle --format=esm --platform=neutral --outfile="${resolverOut}"`,
  { cwd: ROOT, stdio: "pipe" }
);
const { decodeSerial, answerStep } = await import("file://" + resolverOut.replace(/\\/g, "/"));

// ── 2. Corpus ────────────────────────────────────────────────────────────────
const LOC_PATHS = [[], ["neck"], ["headstock"], ["bridge", "guitar"], ["bridge", "bass"]];

const askNumerics = [
  100, 101, 350, 351, 500, 501, 600, 601, 699, 700, 701, 899, 900, 901, 999,
  1000, 1299, 1300, 1301, 1999, 2000, 2001, 2500, 2501, 2999, 3000, 3001,
  4500, 4501, 5999, 6000, 6001, 7999, 8000,
].map(String).concat(["0100", "0301", "0455", "0600", "0601", "0899", "0900", "0901", "0999"]);

const plainNumerics = [
  1, 50, 99,
  8001, 8999, 9000, 9999, 10000, 10001, 15999, 16000, 16001, 24999, 25000,
  25001, 29999, 30000, 30001, 39999, 40000, 40001, 54999, 55000, 55001,
  57999, 58000, 58001, 71999, 72000, 72001, 92999, 93000, 93001, 99998, 99999,
  100000, 100001, 109999, 110000, 110001, 149999, 150000, 199999,
  200000, 209999, 210000, 210001, 249999, 250000, 250001, 280000, 280001,
  299999, 300000, 300001, 330000, 330001, 369999, 370000, 370001, 499999,
  500000, 500001, 510000, 519999, 520000, 520001, 579999, 580000, 580001,
  689999, 690000, 690001, 749999, 750000, 750001, 999999, 7500001,
].map(String).concat(["0001", "0050", "0099"]);

/** @type {Array<{serial:string, answers:string[]}>} */
const cases = [];
for (const s of askNumerics) for (const p of LOC_PATHS) cases.push({ serial: s, answers: p });
for (const s of plainNumerics) cases.push({ serial: s, answers: [] });

const add = (serial, ...paths) => {
  if (!paths.length) paths = [[]];
  for (const p of paths) cases.push({ serial, answers: p });
};

// R prefix
add("R1", ["neckplate"], ["neckheel"], []);
add("R123456", ["neckplate"], ["neckheel"]);
add("R12X");
// Custom Shop CN / CZ
for (let d = 0; d <= 9; d++) add(`CN${d}123`);
add("CNX12"); add("cn5x"); add("CZ0123"); add("CZ51"); add("CZ99999"); add("cz3456");
// Mexico
add("MX10"); add("MX21123"); add("MX30"); add("MX31"); add("MX09"); add("MX99"); add("MX1"); add("MX1A23"); add("mx15234");
add("MN0123"); add("MN11"); add("MN2"); add("MN9999");
add("MZ0"); add("MZ51234"); add("MZ9");
// Japan Dyna
add("JD10123"); add("JD24"); add("JD30"); add("JD31"); add("JD09"); add("JD9"); add("jd15123");
// T / U
add("T1234", ["mij"], ["cij"], []);
add("U987", ["mij"], ["cij"]);
add("TA12"); add("U");
// N
add("N4123", ["headstock"], ["neckheel"], []);
add("N0", ["headstock"]);
add("N9999", ["neckheel"]);
// S
add("S8123", ["headstock"], ["neckheel", "mij"], ["neckheel", "cij"], ["neckheel"]);
add("S0", ["headstock"]);
add("s7123", ["headstock"]);
add("  S8123  ", ["headstock"]);
// A / B
add("A12345"); add("A123456"); add("A1234"); add("A1234567"); add("A12B45");
add("B123456", ["mij"], ["cij"], []);
add("B12", ["mij"]);
// L
add("L1"); add("L12345"); add("L00001"); add("L20000"); add("L20001"); add("L55000");
add("L55001"); add("L99999"); add("L00000"); add("L123456"); add("L1234"); add("l67890");
// E / Z / US / 76
add("E0123"); add("E51234"); add("E9"); add("e81234"); add("E");
add("Z01"); add("Z51234"); add("Z9");
add("US10123"); add("US18"); add("US26"); add("US27"); add("US09"); add("us22345"); add("US1");
add("76"); add("761234"); add("7612345"); add("76000"); add("760"); add("7600");
// Rare 80s + Japan letters
add("CA123"); add("CB99"); add("CE1"); add("JV123"); add("SQ456");
add("F123"); add("G1"); add("H2"); add("I3"); add("J4"); add("K5"); add("M6");
add("O7"); add("P8"); add("Q9"); add("f123"); add("q12");
// V
add("V123", ["neckplate"], ["neckheel"], []);
add("V123456", ["neckplate"]);
add("V12X");
// Junk / bare letters
add("HELLO"); add("XYZ 123"); add("12AB34"); add("US"); add("MX"); add("MZ"); add("MN");
add("T"); add("B"); add("A"); add("L"); add("N"); add("S"); add("R"); add("V"); add("E5X");

// ── 3. Drive the ORIGINAL tool in Chromium ──────────────────────────────────
const toolHtml = fs.readFileSync(path.join(ROOT, "reference/fsn-tool-html.html"), "utf8");
const toolJs = fs.readFileSync(path.join(ROOT, "public/scripts/fsn-tool.js"), "utf8");
const harness = `<!doctype html><html><head><meta charset="utf-8"><style>.fsn-hidden{display:none}</style></head>
<body>${toolHtml}<script>${toolJs}<\/script></body></html>`;
const harnessPath = path.join(tmp, "harness.html");
fs.writeFileSync(harnessPath, harness);

const STEP_BY_EL = {
  "fsn-step-location": "location", "fsn-step-instrument": "instrument",
  "fsn-step-vneck": "vneck", "fsn-step-rneck": "rneck", "fsn-step-sneck": "sneck",
  "fsn-step-sjapan": "sjapan", "fsn-step-tuneck": "tuneck", "fsn-step-nloc": "nloc",
  "fsn-step-bjapan": "bjapan",
};
const ATTR_BY_STEP = {
  location: "data-location", instrument: "data-instrument", vneck: "data-vloc",
  rneck: "data-rloc", sneck: "data-sloc", sjapan: "data-sjapan",
  tuneck: "data-tujapan", nloc: "data-nloc", bjapan: "data-bjapan",
};

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("file://" + harnessPath.replace(/\\/g, "/"));

const oldOutcomes = await page.evaluate(
  ({ cases, STEP_BY_EL, ATTR_BY_STEP }) => {
    const $ = (id) => document.getElementById(id);
    const visibleStep = () => {
      for (const elId of Object.keys(STEP_BY_EL)) {
        const el = $(elId);
        if (el && !el.classList.contains("fsn-hidden")) return STEP_BY_EL[elId];
      }
      return null;
    };
    const readOutcome = () => {
      if (!$("fsn-result").classList.contains("fsn-hidden")) {
        return {
          kind: "result",
          year: $("fsn-year-value").textContent,
          warn: !$("fsn-r-warning").classList.contains("fsn-hidden"),
        };
      }
      if (!$("fsn-fallback").classList.contains("fsn-hidden")) return { kind: "fallback" };
      const step = visibleStep();
      return step ? { kind: "ask", step } : { kind: "none" };
    };
    const out = [];
    for (const c of cases) {
      $("fsn-btn-reset").click(); // resets state + input + hides everything
      $("fsn-input").value = c.serial;
      $("fsn-btn-search").click();
      let err = null;
      for (const answer of c.answers) {
        const step = visibleStep();
        if (!step) break; // outcome already final; leftover answers ignored
        const attr = ATTR_BY_STEP[step];
        const stepEl = document.querySelector(`.fsn-step:not(.fsn-hidden)`);
        const card = stepEl && stepEl.querySelector(`.fsn-card[${attr}="${answer}"]`);
        if (!card) { err = { kind: "driver-error", detail: `${c.serial}: no card ${attr}=${answer} on ${step}` }; break; }
        card.click();
      }
      out.push(err ?? readOutcome());
    }
    return out;
  },
  { cases, STEP_BY_EL, ATTR_BY_STEP }
);
await browser.close();

// ── 4. Run the NEW resolver over the same corpus ─────────────────────────────
const newOutcomes = cases.map((c) => {
  let outcome = decodeSerial(c.serial);
  for (const answer of c.answers) {
    if (outcome.kind !== "ask") break; // leftover answers ignored (matches driver)
    outcome = answerStep(c.serial, outcome.step, answer);
  }
  if (outcome.kind === "result") {
    return { kind: "result", year: outcome.year, warn: !!outcome.warn };
  }
  if (outcome.kind === "ask") return { kind: "ask", step: outcome.step };
  return { kind: "fallback" };
});

// ── 5. Diff ──────────────────────────────────────────────────────────────────

/**
 * Intentional, Joe-approved breaks from the original widget (2026-07-15 call).
 *
 * The gate's whole job is to prove the rewrite reproduces the original. Once we
 * deliberately FIX the original's mistakes, some cases must differ — but the gate
 * still has to catch the ones that differ by ACCIDENT. So every intentional break
 * is listed here with a reason, and anything else still fails.
 *
 * Keep this list short. It is the only thing separating "we changed it on purpose"
 * from "we broke it and didn't notice". Do not add an entry to silence a surprise;
 * work out why the surprise happened first.
 */
const EXPECTED_DIVERGENCES = [
  {
    why: "F-plate 180000-199999 returns the 1966/1967 overlap instead of a flat 1966 (matches the guide page's own table)",
    match: (c) => /^\d+$/.test(c.serial) && +c.serial >= 180000 && +c.serial <= 199999,
  },
  {
    why: "O/P/Q ask Made-in-Japan vs Crafted-in-Japan; the letters were reused across both eras, so the flat CIJ answer was wrong for early-90s guitars",
    match: (c) => /^[OPQ]\d/i.test(c.serial),
  },
  {
    why: "US-prefix answers open-ended (US27+) instead of dead-ending after US26",
    match: (c) => /^US\d{2}/i.test(c.serial),
  },
  {
    why: "N-prefix reports front of headstock through 1995 and back from 1996, matching the page; the original said 'back' for all of them",
    match: (c) => /^N\d/i.test(c.serial),
  },
];

let mismatches = 0;
let expected = 0;
const lines = [];
const expectedLines = [];
cases.forEach((c, i) => {
  const a = JSON.stringify(oldOutcomes[i]);
  const b = JSON.stringify(newOutcomes[i]);
  if (a === b) return;
  const allow = EXPECTED_DIVERGENCES.find((d) => d.match(c));
  if (allow) {
    expected++;
    expectedLines.push(`~ "${c.serial}" answers=[${c.answers.join(",")}] — ${allow.why}`);
    return;
  }
  mismatches++;
  lines.push(`✗ "${c.serial}" answers=[${c.answers.join(",")}]\n    old: ${a}\n    new: ${b}`);
});

const golden = cases.map((c, i) => ({ serial: c.serial, answers: c.answers, outcome: oldOutcomes[i] }));
fs.mkdirSync(path.join(ROOT, "reports/fsn-parity"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "reports/fsn-parity/golden.json"),
  JSON.stringify(golden, null, 1)
);

console.log(`cases: ${cases.length}`);
console.log(`expected divergences (Joe-approved fixes): ${expected}`);
if (expectedLines.length) console.log(expectedLines.slice(0, 30).join("\n"));
console.log(`mismatches: ${mismatches}`);
if (lines.length) console.log(lines.slice(0, 30).join("\n"));
console.log(`golden file: reports/fsn-parity/golden.json`);
fs.rmSync(tmp, { recursive: true, force: true });
process.exit(mismatches ? 1 : 0);
