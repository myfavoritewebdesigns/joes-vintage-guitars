/**
 * Prove the generated server decoders agree with Joe's real browser widgets.
 *
 * This is the gate that makes functions/api/_decoders.generated.ts safe to trust.
 * It executes the ORIGINAL, unmodified public/scripts/*-tool.js inside a Node vm
 * with a minimal DOM stub, drives each widget the way a visitor would, and
 * compares the answer against the generated module for a corpus of serials.
 *
 * The point is to catch a bad SLICE. Both sides come from the same source text,
 * so any disagreement means the extraction or the input/output shim changed
 * behaviour, which is exactly the risk worth gating on.
 *
 *   node scripts/verify-decoder-parity.mjs
 *
 * Exits non-zero on any mismatch.
 */
import fs from "node:fs";
import vm from "node:vm";

const norm = (s) =>
  String(s || "")
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

/** Minimal DOM good enough for these four widgets. */
function makeDom() {
  const store = {};
  const mkEl = (id) => {
    const el = {
      id,
      value: "",
      innerHTML: "",
      textContent: "",
      className: "",
      style: {},
      classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
      // Gretsch builds its answer with createElement + appendChild, so a no-op
      // here would read as "the widget returned nothing" and fake a mismatch.
      appendChild(child) {
        this.children.push(child);
        return child;
      },
      setAttribute() {},
      removeAttribute() {},
      addEventListener() {},
      focus() {},
      scrollIntoView() {},
      querySelector: () => null,
      querySelectorAll: () => [],
      closest: () => null,
      getBoundingClientRect: () => ({ top: 0, bottom: 0, height: 0 }),
      children: [],
      parentNode: null,

    };
    return el;
  };
  const document = {
    getElementById(id) {
      if (!store[id]) store[id] = mkEl(id);
      return store[id];
    },
    createElement: (t) => mkEl("created-" + t),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener() {},
    body: mkEl("body"),
    documentElement: mkEl("html"),
  };
  return { document, store };
}

function runWidget(file) {
  const src = fs.readFileSync(`public/scripts/${file}-tool.js`, "utf8");
  const { document, store } = makeDom();
  // gsn-tool.js wraps its whole body in a DOMContentLoaded handler, so the stub
  // has to actually fire that event or none of its functions ever exist.
  const domReady = [];
  document.addEventListener = (type, cb) => {
    if (type === "DOMContentLoaded" && typeof cb === "function") domReady.push(cb);
  };
  const sandbox = {
    document,
    console,
    setTimeout,
    clearTimeout,
    alert() {},
    location: { hash: "", href: "https://www.joesvintageguitarsaz.com/" },
    navigator: { userAgent: "node" },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: file + "-tool.js" });
  for (const cb of domReady) cb();
  return { sandbox, store };
}

const gen = await import("../functions/api/_decoders.generated.ts").catch(async () => {
  // The generated file is TS-annotation free by design, so Node can load it
  // directly once it is renamed; fall back to a stripped copy if the runtime
  // refuses the .ts extension.
  const raw = fs.readFileSync("functions/api/_decoders.generated.ts", "utf8");
  const tmp = "scripts/.decoders.parity.mjs";
  fs.writeFileSync(tmp, raw);
  const mod = await import("./.decoders.parity.mjs");
  fs.unlinkSync(tmp);
  return mod;
});

/** Read an element's rendered text, including anything appended as children. */
function collect(el) {
  if (!el) return "";
  const own = el.innerHTML || el.textContent || "";
  const kids = (el.children || []).map(collect).filter(Boolean).join(" ");
  return [own, kids].filter(Boolean).join(" ");
}

let checked = 0;
const failures = [];
const check = (label, expected, actual) => {
  checked++;
  if (norm(expected) !== norm(actual)) {
    failures.push({ label, widget: norm(expected), generated: norm(actual) });
  }
};

// ── Gibson ───────────────────────────────────────────────────────────────────
// gsn-tool.js declares its functions at top level, so after running the file the
// dispatcher is callable directly once the two globals it reads are set.
{
  const { sandbox } = runWidget("gsn");
  const store = sandbox.document;
  const serials = [
    "42440", "61180", "64222", "71040", "96600", "99999", "106099", "106500", "106899",
    "109999", "111549", "115799", "118299", "120999", "139999", "140100", "144304",
    "144350", "144380", "149864", "149880", "149891", "152989", "174222", "176600",
    "176643", "250335", "305983", "310999", "320149", "320400", "320699", "329179",
    "330199", "332000", "332240", "348092", "349100", "368638", "369890", "370999",
    "385309", "390998", "406666", "409000", "409670", "410900", "429193", "500000",
    "1", "999", "800000", "070001", "A12345", "99123456", "82765432",
  ];
  const combos = [
    ["wood", "usa_no"], ["wood", "usa_yes"], ["label", "orange_label"],
    ["label", "white_label"], ["wood", "decal"], ["ink_headstock", ""],
  ];
  const resultEl = () => store.getElementById("result-text");
  // showSerialResults is closure-scoped, so drive the widget the way a visitor
  // does: enter serial, pick a location, and answer a conflict step only when
  // the widget actually asks. Whether it asks determines the resolvedType the
  // widget ends up passing, which is what the generated module must be given.
  const drive = (serial, loc, type) => {
    store.getElementById("serial-input").value = serial;
    resultEl().innerHTML = "";
    sandbox.setLookupType("serial");
    sandbox.startLookup();
    if (resultEl().innerHTML) return { html: resultEl().innerHTML, usedType: undefined };
    sandbox.processSelection(loc);
    if (resultEl().innerHTML) return { html: resultEl().innerHTML, usedType: undefined };
    sandbox.resolveConflict(type);
    return { html: resultEl().innerHTML, usedType: type };
  };

  for (const s of serials) {
    for (const [loc, type] of combos) {
      let widgetOut, usedType;
      try {
        const r = drive(s, loc, type);
        widgetOut = r.html;
        usedType = r.usedType;
      } catch (e) {
        widgetOut = "THREW:" + e.message;
        usedType = type;
      }
      // The widget prefixes the serial; the generated module returns only the
      // decision text, so compare on the part after that prefix.
      widgetOut = String(widgetOut).replace(/^<strong>Serial Number:[^<]*<\/strong><br><br>/, "");
      let genOut;
      try {
        genOut = gen.decodeGibson(s, loc, usedType).text;
      } catch (e) {
        genOut = "THREW:" + e.message;
      }
      check(`gibson ${s} ${loc}/${type || "none"} (widget used ${usedType || "none"})`, widgetOut, genOut);
    }
  }
}

// ── Gretsch / Rickenbacker / Guild ───────────────────────────────────────────
const inputDriven = [
  {
    brand: "gretsch", file: "grsn", inputId: "jvg-serial-input", entry: "jvgDecode",
    resultIds: ["jvg-tool-results"],
    genFn: (s) => gen.decodeGretsch(s),
    serials: ["1", "99", "1234", "5678", "12345", "123456", "35001", "45000", "60123",
      "112233", "9012345678", "AB12345678", "5-1234", "12-34567", "", "abc"],
  },
  {
    brand: "rickenbacker", file: "rsn", inputId: "jvg-sn-input", entry: "jvgDecode",
    resultIds: ["jvg-result-date", "jvg-result-detail"],
    genFn: (s) => gen.decodeRickenbacker(s),
    serials: ["AA1234", "BC0001", "JK123", "JL999", "ZL5555", "0123", "9912", "1545",
      "M5123", "XX999", "", "!!!"],
  },
  {
    brand: "guild", file: "gsl", inputId: "gsl-input", entry: "gslDecode",
    resultIds: ["gsl-result"],
    genFn: (s) => gen.decodeGuild(s),
    serials: ["1000", "5000", "23456", "100000", "211877", "211878", "999", "0",
      "TA123456", "NB001234", "TZ999999", "AB1234", "D1234", "", "???"],
  },
];

for (const cfg of inputDriven) {
  const { sandbox } = runWidget(cfg.file);
  for (const s of cfg.serials) {
    const inputEl = sandbox.document.getElementById(cfg.inputId);
    inputEl.value = s;
    for (const rid of cfg.resultIds) {
      const el = sandbox.document.getElementById(rid);
      el.innerHTML = "";
      el.textContent = "";
      el.children.length = 0;
    }
    let widgetOut;
    try {
      sandbox.window[cfg.entry]();
      widgetOut = cfg.resultIds.map((rid) => collect(sandbox.document.getElementById(rid))).filter(Boolean).join(". ");
    } catch (e) {
      widgetOut = "THREW:" + e.message;
    }
    let genOut;
    try {
      genOut = cfg.genFn(s).text;
    } catch (e) {
      genOut = "THREW:" + e.message;
    }
    // Rickenbacker and Guild render exactly their decode claim, so their years
    // must match the widget's set exactly. Gretsch renders a full card whose
    // "what to expect in this era" prose names era boundaries the decode never
    // claimed, so comparing sets there would measure the narration, not the
    // answer. For Gretsch the property that matters is CONTAINMENT: the server
    // must never assert a year the widget did not mention.
    const yearsOf = (t) => [...new Set(String(t).match(/\b(18|19|20)\d{2}\b/g) || [])].sort();
    const w = yearsOf(widgetOut);
    const g = yearsOf(genOut);
    if (cfg.brand === "gretsch") {
      const invented = g.filter((y) => !w.includes(y));
      check(
        `gretsch ${JSON.stringify(s)} invents no year`,
        "none",
        invented.length ? invented.join(",") : "none",
      );
      check(`gretsch ${JSON.stringify(s)} answered`, w.length > 0, g.length > 0);
    } else {
      check(`${cfg.brand} ${JSON.stringify(s)} years`, w.join(","), g.join(","));
    }
  }
}

console.log(`[decoder-parity] ${checked} cases checked, ${failures.length} mismatches`);
if (failures.length) {
  for (const f of failures.slice(0, 25)) {
    console.error(`\nMISMATCH ${f.label}`);
    console.error(`  widget   : ${f.widget.slice(0, 220)}`);
    console.error(`  generated: ${f.generated.slice(0, 220)}`);
  }
  if (failures.length > 25) console.error(`\n...and ${failures.length - 25} more`);
  process.exit(1);
}
console.log("[decoder-parity] PASS");
