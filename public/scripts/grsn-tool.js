(function () {

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

  /* ── RENDER RESULTS ── */
  function renderResults(results) {
    const container = document.getElementById('jvg-tool-results');
    container.innerHTML = '';
    container.classList.add('is-visible');

    const validResults = results.filter(r => r.type !== 'empty');

    if (validResults.length === 0) return;

    // Multi-result banner
    const multiTypes = validResults.filter(r => r.type !== 'error');
    if (multiTypes.length > 1) {
      const banner = document.createElement('div');
      banner.className = 'jvg-multi-banner';
      banner.innerHTML = `<strong>⚠ Multiple valid interpretations found</strong>
        This serial number falls in an overlapping range — ${multiTypes.length} possible date readings are shown below.
        Use the cross-check links in each card to compare your guitar's physical features and confirm the correct era.`;
      container.appendChild(banner);
    }

    validResults.forEach((result, i) => {
      const card = buildCard(result, i + 1, multiTypes.length > 1);
      container.appendChild(card);
    });
  }

  /* ── CARD BUILDER ── */
  function buildCard(r, index, isMulti) {
    const card = document.createElement('div');
    card.className = 'jvg-result-card';

    if (r.type === 'error') {
      card.classList.add('is-error');
      card.innerHTML = `
        <div class="jvg-rc-header">
          <span class="jvg-rc-era-badge badge-error">⚠ Not Recognized</span>
        </div>
        <div class="jvg-rc-date" style="padding:1rem 1.2rem;">
          <div class="jvg-rc-date-sub" style="font-size:0.9rem;color:#1a1a1a;">${r.msg}</div>
        </div>
        ${buildCTA('Not sure? We\'ll help you identify it.', true)}`;
      return card;
    }

    const interpLabel = isMulti ? `<span class="jvg-rc-interp">Interpretation ${index}</span>` : '';

    card.innerHTML =
      buildHeader(r, interpLabel) +
      buildDateBlock(r) +
      buildAnomaly(r) +
      buildBreakdown(r) +
      buildExpect(r) +
      buildCrossCheck(r) +
      buildCTA(ctaText(r), false);

    return card;
  }

  function buildHeader(r, interpLabel) {
    const badgeClass = r.type === 'fender' ? 'badge-modern' : '';
    return `<div class="jvg-rc-header">
      <span class="jvg-rc-era-badge ${badgeClass}">${r.era}</span>
      ${interpLabel}
    </div>`;
  }

  function buildDateBlock(r) {
    let main = '', sub = '';

    switch (r.type) {
      case 'sequential':
      case 'four-digit':
        main = `Approximately <strong>${r.year}</strong>`;
        sub = r.eraSub || '';
        break;
      case 'pre-war':
        main = `<strong>1939–1945</strong> — Pre-War Production`;
        sub = 'Serial written in pencil inside the body. Often faded or illegible on surviving instruments.';
        break;
      case 'date-coded':
        main = `<strong>${r.monthName} ${r.year}</strong>`;
        sub = `Unit #${r.unit.toLocaleString()} produced that month`;
        break;
      case 'hyphenated':
        main = `<strong>${r.monthName} ${r.year}</strong>`;
        sub = `Unit #${r.unit || '—'} — Baldwin / Booneville era`;
        break;
      case 'fender':
        main = `<strong>${r.monthName} ${r.year}</strong>`;
        sub = `${r.factory.series} · ${r.factory.facility}, ${r.factory.country} · Unit #${r.unit.toLocaleString()}`;
        break;
      case 'japan':
        main = `<strong>1989–2002</strong>`;
        sub = 'Japan-era Gretsch (Fred Gretsch family / pre-Fender). Primarily Terada factory.';
        break;
    }

    return `<div class="jvg-rc-date">
      <div class="jvg-rc-date-main">${main}</div>
      ${sub ? `<div class="jvg-rc-date-sub">${sub}</div>` : ''}
    </div>`;
  }

  function buildAnomaly(r) {
    if (!r.anomaly && !r.decadeAmbiguous) return '';
    let html = '';

    if (r.anomaly === '1957_1965') {
      html = `<div class="jvg-rc-anomaly">
        <strong>⚠ The 1957 / 1965 Label Anomaly</strong>
        Serials in the 21,000–26,000 range present a known complication. Around 1957, approximately 1,000 serial number labels were misplaced at the factory. They were rediscovered and used in 1965 — meaning some guitars with serials in this range are genuine 1957 instruments, while others are 1965 guitars wearing 1957-range labels. You must cross-check physical features to determine which you have. A genuine 1957 instrument will have DeArmond DynaSonic or "No-Line" Filter'Tron pickups (if late 1957), Humptop inlays, and a single-cutaway body. A 1965 instrument will have very different hardware — HiLo'Trons or patent-number Filter'Trons, thumbprint inlays, and possibly a double-cutaway body.
      </div>`;
    }

    if (r.anomaly === '1965_lost_labels') {
      html = `<div class="jvg-rc-anomaly">
        <strong>⚠ Lost Label Note</strong>
        Serials in the 78,000–85,000 range also coincide with some of the rediscovered 1957-batch labels being used in 1965. In addition, some guitars in this range have date-coded serials beginning from August 1966 that can overlap with the top end of the sequential system. Cross-check features carefully.
      </div>`;
    }

    if (r.decadeAmbiguous && r.type === 'date-coded') {
      const altMonth = r.month;
      const altYear = r.year - 1; // e.g. if decoded as Jan 1970, could be Oct/Nov/Dec 1969
      html += `<div class="jvg-rc-anomaly">
        <strong>⚠ Decade Ambiguity — Verify with Physical Features</strong>
        Serials where the month code is October (10), November (11), or December (12) from 1969 can be misread as January of 1970, 1971, or 1972. Similarly, a serial read here as ${r.monthName} ${r.year} may alternatively decode as a different month/year combination. The physical features of the guitar — pickup type, body shape, nameplate presence — are the only reliable way to confirm which decade applies.
      </div>`;
    }

    return html;
  }

  function buildBreakdown(r) {
    let cells = [];

    switch (r.type) {
      case 'sequential':
        cells = [
          { label:'Serial Number', value: r.num.toLocaleString() },
          { label:'System',        value:'Sequential' },
          { label:'Known Range',   value: r.range },
          { label:'Est. Year',     value: r.year },
        ];
        break;
      case 'four-digit':
        cells = [
          { label:'Serial Number', value: r.num.toLocaleString() },
          { label:'System',        value:'Sequential' },
          { label:'Est. Year',     value: r.year },
        ];
        break;
      case 'pre-war':
        cells = [
          { label:'Serial',   value: r.digits },
          { label:'System',   value:'Penciled / Hand-written' },
          { label:'Location', value:'Inside body back' },
          { label:'Era',      value:'1939–1945' },
        ];
        break;
      case 'date-coded':
        cells = [
          { label:'Month Digit(s)', value: String(r.month) + ' = ' + r.monthName },
          { label:'Year Digit',    value: (() => { for (const [k,v] of Object.entries(DC_YEAR_MAP)) { if (v === r.year) return k + ' = ' + r.year; } return r.year; })() },
          { label:'Unit Number',   value: '#' + r.unit.toLocaleString() },
          { label:'"Made in USA"', value: r.madeInUSA ? 'Yes — post-June 1967' : 'Not yet added (pre-June 1967)' },
        ];
        break;
      case 'hyphenated':
        cells = [
          { label:'Month',       value: r.month + ' = ' + r.monthName },
          { label:'Year Digit',  value: (() => { for (const [k,v] of Object.entries(HYP_YEAR_MAP)) { if (v === r.year) return k + ' = ' + r.year; } return String(r.year); })() },
          { label:'Unit Number', value: '#' + (r.unit || '—') },
          { label:'Factory',     value: 'Booneville, Arkansas (post-1969)' },
        ];
        break;
      case 'fender':
        cells = [
          { label:'Factory Code', value: r.prefix },
          { label:'Country',      value: r.factory.country },
          { label:'Facility',     value: r.factory.facility },
          { label:'Year',         value: r.year },
          { label:'Month',        value: r.month + ' = ' + r.monthName },
          { label:'Unit #',       value: '#' + r.unit.toLocaleString() },
        ];
        break;
      case 'japan':
        cells = [
          { label:'Digits',   value: r.digits },
          { label:'System',   value:'9-digit (last 3 hyphenated)' },
          { label:'Factory',  value:'Terada, Japan (primarily)' },
          { label:'Era',      value:'1989–2002' },
        ];
        break;
    }

    if (cells.length === 0) return '';

    return `<div class="jvg-rc-breakdown">
      <div class="jvg-rc-breakdown-title">Serial Breakdown</div>
      <div class="jvg-breakdown-grid">
        ${cells.map(c => `<div class="jvg-breakdown-cell">
          <span class="bc-label">${c.label}</span>
          <span class="bc-value">${c.value}</span>
        </div>`).join('')}
      </div>
    </div>`;
  }

  function buildExpect(r) {
    const features = getFeaturesForResult(r);
    if (!features.length) return '';

    return `<div class="jvg-rc-expect">
      <div class="jvg-rc-expect-title">What to Expect on a Guitar from This Era</div>
      <ul>${features.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>`;
  }

  function getFeaturesForResult(r) {
    switch (r.type) {
      case 'pre-war':
        return [
          'Snakehead or Bulb-style headstock tapering to a point',
          'Script "Gretsch" logo — pearloid inlay on professional models, painted on budget Electromatics',
          'Serial penciled in graphite inside the body — often faded or missing',
          'Pre-war Synchromatic archtop body styles with cat-eye sound holes on higher models',
        ];
      case 'four-digit':
        return [
          'Post-war script logo with transitional headstock shapes',
          'DeArmond DynaSonic pickups on electrics from ~1949 onward',
          'Early paper label (Brooklyn Label) visible through the f-hole from ~1949',
          'Pre-T-Roof block logo era — look for transitional features',
        ];
      case 'sequential':
        return getSequentialFeatures(r);
      case 'date-coded':
        return getDateCodedFeatures(r);
      case 'hyphenated':
        return [
          'Baldwin-era "Gretsch Guitars" black & white rectangular label (Booneville Label) inside body',
          '"Made in USA" stamp on back of headstock — large, deep, sometimes messy impression',
          '7000-series model numbers (e.g. 7660, 7594, 7670) instead of the original 6000-series',
          'Blacktop Filter\'Trons (Filter\'Trons in open HiLo\'Tron frames) on many models — ceramic magnets',
          'Adjustamatic bridge standard on most models from 1971',
          'Nameplates eliminated; truss rod cover and headstock less vintage-correct than pre-Baldwin',
        ];
      case 'japan':
        return [
          'Japan-era Terada production — often very high quality and vintage-correct',
          'G-prefix model numbers (G6120, G6136, etc.) as reissues of golden-era designs',
          'Korean budget models (1999–2002) used a sticker serial — often missing',
          'Pre-Fender era means pre-2003 specification; TV Jones pickup redesign had not yet been implemented',
        ];
      case 'fender':
        return getFenderFeatures(r);
    }
    return [];
  }

  function getSequentialFeatures(r) {
    const num = r.num;
    if (num <= 12999) return [
      'T-Roof Block Logo — but verify: may still be script on very early 1950s instruments',
      'DeArmond DynaSonic single-coil pickups standard on all electrics',
      'Brooklyn Label (white rectangle, "60 Broadway, Brooklyn 11, N.Y.") inside body',
      'Melita or early adjustable bridges; Bigsby optional',
    ];
    if (num <= 20999) return [
      'T-Roof Block Logo in gold or silver on the headstock — the classic golden-era look',
      'DeArmond DynaSonic pickups standard through 1957 model year',
      'Single cutaway body on all major models',
      'Western Inlays (engraved celluloid, NOT pearl) on 6120/6121 through mid-1956; Horseshoe headstock inlay from mid-1956',
      'Steer Head peghead inlay on early 6120/6121 (1954–mid 1956)',
    ];
    if (num <= 26000) return [
      'T-Roof Block Logo — 1957 model year',
      'Humptop block inlays — the single strongest 1957-only dating marker',
      'DeArmond DynaSonics on most models; "No-Line" Filter\'Trons on very late 1957 instruments',
      'Orange Oval label (2nd generation, from serial #25,001) — "Musical Instrument Makers Since 1883"',
      '⚠ See anomaly note: this range may indicate a 1965 instrument with a rediscovered 1957 label',
    ];
    if (num <= 30000) return [
      '"No-Line" Filter\'Tron pickups (plain smooth covers, no markings) — 1958 only, serials ~26,500–28,500',
      '"Pat. Applied For" Filter\'Trons from ~serial 28,500 onward',
      'Thumbprint (Neo-Classic) inlays replace Humptops for the 1958 model year',
      'Single cutaway body; new bar-style bridge replaces Melita',
      'Orange Oval label inside body',
    ];
    if (num <= 34999) return [
      'Zero fret introduced — its presence confirms 1959 or later',
      'Gretsch "V" Bigsby on 6120 and Country Gentleman',
      '"Pat. Applied For" Filter\'Trons transitioning to patent-number covers (~serial 37,600)',
      'Thumbprint inlays standard; Country Gentleman nameplate on headstock',
      'Horizontal logo on White Falcon (replacing earlier vertical orientation)',
    ];
    if (num <= 45999) return [
      'Patent number Filter\'Trons (U.S. PAT 2,892,371) — ridged plastic surrounds from ~serial 37,600',
      'HiLo\'Tron pickups appear on budget models (Anniversary, Tennessean, Clipper) from 1960',
      'Body depth thinning on 6120 (2½" by 1960, 2¼" by 1961)',
      'Trestle bracing inside 6120 and Country Gentleman (1958–1961) — high-value marker',
      'Double cutaway transition begins late 1961 on Country Gent; 6120 follows shortly after',
    ];
    if (num <= 77999) return [
      'Double cutaway "Electrotone" sealed body with simulated (painted) f-holes on 6120/Country Gent from 1962',
      'George Harrison-spec Country Gentleman configuration (1961/62 onward)',
      'Super\'Trons appear from 1964 — blade/bar pole pieces visible through cover',
      'Orange Oval label transitioning; some models go headstock-only (Ghost Period begins ~1965)',
      'Nashville nameplate on 6120 from 1964',
    ];
    return [
      'Final pre-Baldwin sequential production — transitional features',
      'Ghost Period approaching: labels disappear ~1965, serial moves to headstock only',
      'Date-coded system begins August 1966 — a 5-digit number at the top of the sequential range may also decode as a date-coded serial',
      'Cross-check carefully: physical features are essential for confirming the date',
    ];
  }

  function getDateCodedFeatures(r) {
    const year = r.year;
    const base = [
      year >= 1967 ? '"Made in USA" stamped on headstock back — larger, deeper impression than pre-Baldwin serials' : 'Transitional: "Made in USA" stamp added June 1967',
      'Serial stamped on back or top of headstock — no interior label during Ghost Period (~1965–1969)',
    ];
    if (year <= 1966) {
      base.push('Late Family Era / Early Baldwin transition — possibly still Brooklyn production');
      base.push('Cross-check for Orange Oval or Ghost Period (no label) inside the body');
    }
    if (year >= 1967 && year <= 1969) {
      base.push('Baldwin ownership — production still in Brooklyn until 1969');
      base.push('"That Great Gretsch Sound" orange label appears ~1969 on f-hole instruments — 5-digit sequential, not date-coded');
      base.push('Filter\'Tron pickups with patent number; HiLo\'Trons on budget models');
    }
    if (year >= 1970) {
      base.push('Baldwin Arkansas era — production moved to Booneville, Arkansas in 1969');
      base.push('Model renumbering to 7000-series begins 1971 (6120→7660, White Falcon→7594)');
      base.push('Blacktop Filter\'Trons (ceramic magnets, HiLo\'Tron frames) increasingly common');
    }
    return base;
  }

  function getFenderFeatures(r) {
    const year = parseInt(r.year);
    const features = [
      `${r.factory.series} — built at ${r.factory.facility}, ${r.factory.country}`,
      'Modern serial printed on back of headstock — clean, legible, consistent format',
    ];
    if (r.factory.country === 'Japan') {
      features.push('Terada/Japan production is highly regarded — adherence to 1950s vintage blueprints');
      features.push('Filter\'Trons redesigned by TV Jones for Fender era — alnico magnets reinstated for vintage accuracy');
    }
    if (r.factory.country === 'China' || r.factory.country === 'Korea') {
      features.push('Electromatic or Streamliner series — excellent value-tier instruments with modern quality control');
    }
    if (r.factory.facility === 'Gretsch Custom Shop') {
      features.push('US Custom Shop — Nashville-built, highest specification Gretsch instruments available');
    }
    if (year >= 2003 && year <= 2007) {
      features.push('Early Fender era — headstock shapes and truss rod covers corrected immediately to vintage spec');
      features.push('Hollow bodies returned to 3-ply construction; Filter\'Trons re-voiced for vintage accuracy');
    }
    return features;
  }

  /* ── CROSS-CHECK LINKS ── */
  function buildCrossCheck(r) {
    const links = getCrossCheckLinks(r);
    if (!links.length) return '';

    return `<div class="jvg-rc-crosscheck">
      <div class="jvg-rc-crosscheck-title">🔍 Cross-Check on This Page</div>
      <div class="jvg-rc-crosscheck-links">
        ${links.map(l => `<a class="jvg-cc-link" href="${l.url}">${l.label}</a>`).join('')}
      </div>
    </div>`;
  }

  function getCrossCheckLinks(r) {
    const all = {
      logos:    { url:'#gretsch-headstock-logo-changes', label:'Headstock Logo Guide' },
      labels:   { url:'#gretsch-label-types',            label:'Label Identification' },
      pickups:  { url:'#gretsch-pickup-dating',          label:'Pickup Dating' },
      inlays:   { url:'#gretsch-fingerboard-inlay-dating', label:'Fingerboard Inlays' },
      bodies:   { url:'#gretsch-body-cutaway-dating',    label:'Body & Cutaway Changes' },
      bigsby:   { url:'#gretsch-bigsby-vibrato-dating',  label:'Bigsby & Hardware' },
      checklist:{ url:'#gretsch-dating-checklist',       label:'Quick Dating Checklist' },
      era1:     { url:'#gretsch-serial-numbers-1939-1966', label:'Era 1: Sequential Guide' },
      era2:     { url:'#gretsch-serial-numbers-1966-1972', label:'Era 2: Date-Coded Guide' },
      era3:     { url:'#gretsch-serial-numbers-1972-1981', label:'Era 3: Hyphenated Guide' },
      era4:     { url:'#gretsch-serial-numbers-1989-2002', label:'Era 4: Japan/Korea Guide' },
      era5:     { url:'#gretsch-serial-numbers-2003-present', label:'Era 5: Fender Era Guide' },
      advanced: { url:'#gretsch-advanced-dating-guide',  label:'Advanced Dating Overview' },
      factory:  { url:'#gretsch-serial-numbers-2003-present', label:'Factory Prefix Table' },
    };

    switch (r.type) {
      case 'pre-war':
        return [all.logos, all.labels, all.era1, all.checklist];
      case 'four-digit':
        return [all.logos, all.labels, all.pickups, all.era1, all.checklist];
      case 'sequential':
        if (r.anomaly === '1957_1965') {
          return [all.pickups, all.inlays, all.logos, all.labels, all.bodies, all.checklist, all.era1];
        }
        return [all.pickups, all.inlays, all.logos, all.labels, all.bodies, all.bigsby, all.checklist];
      case 'date-coded':
        if (r.decadeAmbiguous) {
          return [all.era2, all.pickups, all.bodies, all.logos, all.labels, all.checklist, all.advanced];
        }
        return [all.era2, all.pickups, all.bodies, all.labels, all.logos, all.checklist];
      case 'hyphenated':
        return [all.era3, all.pickups, all.labels, all.logos, all.bodies, all.checklist];
      case 'japan':
        return [all.era4, all.advanced, all.checklist];
      case 'fender':
        return [all.era5, all.factory, all.advanced];
    }
    return [all.advanced, all.checklist];
  }

  /* ── CTA ── */
  function buildCTA(text, prominent) {
    return `<div class="jvg-rc-cta">
      <div class="jvg-rc-cta-text">
        <strong>Not 100% sure what you have?</strong>
        ${text}
      </div>
      <a class="jvg-cta-btn" href="${APPRAISAL_URL}">Free Appraisal →</a>
    </div>`;
  }

  function ctaText(r) {
    switch (r.type) {
      case 'sequential': return 'Our team can verify the date, originality, and current market value of your Gretsch — no obligation.';
      case 'date-coded': return 'Overlapping eras can be tricky. Bring it in or send photos and we\'ll give you a confirmed date and free valuation.';
      case 'hyphenated': return 'Baldwin-era Gretsch values vary widely by condition and originality. Get a free expert opinion from Joe\'s.';
      case 'fender':     return 'We buy modern Gretsch instruments too. Find out what yours is worth with a free appraisal.';
      case 'japan':      return 'Japan-era Gretsches are undervalued by many buyers. Get an accurate assessment from our experts.';
      default:           return 'Get a free, no-obligation appraisal and identification from Joe\'s Vintage Guitars in Phoenix.';
    }
  }

  /* ── PUBLIC API ── */
  window.jvgDecode = function () {
    const input = document.getElementById('jvg-serial-input');
    const val = input.value;
    if (!val.trim()) { input.focus(); return; }
    const results = decode(val);
    renderResults(results);
  };

  window.jvgTry = function (serial) {
    const input = document.getElementById('jvg-serial-input');
    input.value = serial;
    input.focus();
    window.jvgDecode();
  };

  /* ── Enter key support ── */
  document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('jvg-serial-input');
    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') window.jvgDecode();
      });
    }
  });

  // Also wire up for Avada which may load after DOMContentLoaded
  (function wireInput() {
    const input = document.getElementById('jvg-serial-input');
    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') window.jvgDecode();
      });
    }
  })();

})();
