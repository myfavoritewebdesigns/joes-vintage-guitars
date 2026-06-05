/* Guild Serial Number Decoder — Joe's Vintage Guitars
   ----------------------------------------------------
   Handler is attached to window.gslDecode so the inline tool markup
   (set:html'd into the page) can call it.

   Guild used several incompatible serial systems over its history, and many
   of them (the model-prefix eras) genuinely cannot be decoded from the
   number alone without the per-model charts. This decoder gives a confident
   answer for the two systems that ARE reliably decodable from the serial
   string itself, and routes everything else to the right chart on the page:

     1. Sequential numbers (1953-1979)  -> exact year from the combined
        Hoboken + early-Westerly sequential ranges.
     2. Modern Julian serials (2005+)   -> plant + year + build date + unit
        from the 2-letter / 6-digit format.
     3. Model-prefix serials (1965-1969 and 1979-1996) -> identified as such
        and pointed at the matching era charts (these need the per-model data).
*/
(function () {
  "use strict";

  /* --- 1. Sequential ranges, 1953-1979 (numeric serials only) ---------
     Boundaries normalised to be non-overlapping (prev end + 1). Pre-1960
     ranges are flagged approximate, exactly as the source charts note. */
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

  function show(html, cls) {
    var el = document.getElementById("gsl-result");
    if (!el) return;
    el.className = "gsl-tool__result is-visible" + (cls ? " " + cls : "");
    el.innerHTML = html;
  }

  window.gslDecode = function () {
    var input = document.getElementById("gsl-input");
    if (!input) return;
    var raw = (input.value || "").toUpperCase().replace(/[\s\-]/g, "");

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
  };

  // Enter key submits.
  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("gsl-input");
    if (input) {
      input.addEventListener("keyup", function (e) {
        if (e.key === "Enter") window.gslDecode();
      });
    }
  });
})();
