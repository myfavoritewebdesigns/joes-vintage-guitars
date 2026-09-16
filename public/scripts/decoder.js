(() => {
  const form = document.querySelector('#lookup-form');
  if (!form) return;

  const input = document.querySelector('#serial-input');
  const label = document.querySelector('#number-label');
  const error = document.querySelector('#form-error');
  const resultPanel = document.querySelector('#result-panel');
  const resultTitle = document.querySelector('#result-title');
  const resultCopy = document.querySelector('#result-copy');
  const resultLink = document.querySelector('#result-chart-link');
  const confidence = document.querySelector('#confidence-badge');
  const modeButtons = [...document.querySelectorAll('.mode-button')];
  const specialToggle = document.querySelector('#special-toggle');
  const specialPanel = document.querySelector('#special-panel');
  const modelSelect = document.querySelector('#model-select');
  const modelHint = document.querySelector('#model-hint');
  const locationSelect = document.querySelector('#location-select');
  const locationWrap = document.querySelector('#location-wrap');
  const followupPanel = document.querySelector('#followup-panel');
  const followupFields = document.querySelector('#followup-fields');
  let answers = {};
  let mode = 'serial';

  const clean = (value) => value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  const makeResult = (title, copy, href, certainty = 'Estimated') => ({ title, copy, href, certainty });
  const ordinal = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = number % 100;
    return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  };
  const dateFromDay = (day, year) => {
    if (!day || day < 1 || day > 366) return null;
    const date = new Date(Date.UTC(year, 0, day));
    if (date.getUTCFullYear() !== year) return null;
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });
  };
  const thresholdYear = (number, thresholds) => {
    for (const [max, year] of thresholds) if (number <= max) return year;
    return null;
  };

  const decodeA = (raw) => {
    const number = Number(raw.slice(1));
    const year = thresholdYear(number, [[1305,1947],[2665,1948],[4410,1949],[6596,1950],[9420,1951],[12460,1952],[17435,1953],[18665,1954],[21910,1955],[24755,1956],[26820,1957],[28880,1958],[32285,1959],[34645,1960],[36147,1961]]);
    if (!year || number < 100) return makeResult('Outside the Documented A-Series', `“${raw}” is outside the charted A100 to A36147 run. Check the complete number and whether this is a later reissue.`, '#a-prefix', 'Check details');
    return makeResult(String(year), `A-prefix serial <strong>${raw}</strong> falls in the ${year} range. This series appears on white or orange interior labels and occasionally on the headstock. Confirm the model and features; label color does not set the year.`, '#a-prefix', 'Chart match');
  };

  const decodeWhiteLabel = (raw) => {
    const number = Number(raw);
    const year = thresholdYear(number, [[1150,1903],[1850,1904],[2550,1905],[3350,1906],[4250,1907],[5450,1908],[6950,1909],[8750,1910],[10850,1911],[13350,1912],[16100,1913],[20150,1914],[25150,1915],[32000,1916],[39500,1917],[47900,1918],[53800,1919],[62200,1920],[69300,1921],[71400,1922],[74900,1923],[80300,1924],[82700,1925],[83600,1926],[85400,1927],[87300,1928],[89750,1929],[90200,1930],[90450,1931],[90700,1932],[91400,1933],[92300,1934],[92800,1935],[94100,1936],[95200,1937],[95750,1938],[96050,1939],[96600,1940],[97400,1941],[97700,1942],[97850,1943],[98250,1944],[98650,1945],[99300,1946],[99999,1947]]);
    return year && number > 0
      ? makeResult(String(year), `Interior white-label serial <strong>${raw}</strong> falls in the estimated ${year} range.`, '#white-label', 'Strong match')
      : makeResult('No White-Label Match', 'This number is outside the charted white-label sequence. Check the label color and number.', '#white-label', 'Check details');
  };

  const decodeReused = (raw) => {
    // Preserve width: 012345 (six digits) is not the early number 12345.
    let rows;
    try { rows = JSON.parse(document.querySelector('#reused-range-data').textContent); }
    catch { return makeResult('Chart Data Could Not Load', 'Reload the page or use the printed chart. No year has been assigned.', '#reused', 'Check details'); }
    const number = Number(raw);
    const eligible = rows.filter(([start]) => raw.length === 6 ? start.length === 6 : start.length < 6);
    const matched = eligible.filter(([start, end]) => number >= Number(start) && number <= Number(end));
    if (!matched.length) {
      const below = eligible.filter(([, end]) => Number(end) < number).sort((a, b) => Number(b[1]) - Number(a[1]))[0];
      const above = eligible.filter(([start]) => Number(start) > number).sort((a, b) => Number(a[0]) - Number(b[0]))[0];
      const neighbors = [below, above].filter(Boolean).map(([start, end, years]) => `<strong>${start} to ${end}</strong> is listed as ${years}`).join('; ');
      return makeResult('Range Not Documented', `Serial <strong>${raw}</strong> is not in a documented range in this chart. ${neighbors ? `Nearby entries: ${neighbors}. ` : ''}Those are comparison years, not dates assigned to this number. Check the stamp, model and original pot codes.`, '#reused', 'Low confidence');
    }
    const years = matched[0][2];
    const disputed = number >= 600000 && number <= 606090;
    const note = disputed
      ? 'Published tables disagree here: the JVG table lists 1966 to 1969, while GuitarHQ lists 1969. Keep the wider possibilities until the guitar’s features support a date.'
      : /^\d{4}$/.test(years)
        ? 'Cross-check this result with the guitar’s other features because serial numbers are not always 100 percent accurate.'
        : 'Gibson reused this range; use parts and construction to narrow it.';
    return makeResult(years, `Impressed serial <strong>${raw}</strong> corresponds to <strong>${years}</strong>. ${note}`, '#reused', disputed ? 'Sources disagree' : /^\d{4}$/.test(years) ? 'Year match' : 'Multiple years');
  };

  const decodeNorlin = (raw) => {
    const number = Number(raw);
    let years;
    if (number <= 99999) years = '1970 transition or 1973';
    else if (number <= 199999) years = '1970 to 1975';
    else if (number <= 299999) years = '1973 to 1975';
    else if (number <= 599999) years = '1974 to 1975';
    else if (number <= 699999) years = '1970 to 72 or 1974 to 75';
    else if (number <= 799999) years = '1970 to 1972';
    else if (number <= 899999) years = '1973 to 1975';
    else years = '1970 to 1972';
    return makeResult(years, `Six-digit serial <strong>${raw}</strong> with “Made in USA” falls in the Norlin-era overlap. Pot codes and construction are needed for a tighter date.`, '#norlin', 'Date range');
  };

  const decodeModern = (raw, { allowUsaFormats = false } = {}) => {
    const nineDigitUsa = allowUsaFormats && raw.length === 9;
    // Gibson USA only: https://www.gibson.com/pages/serial-number-search
    // Prefixes 14 to 19 cannot encode a valid DDD day (400 to 999), so the
    // sequential rule does not overlap a valid split-year 2014/2019 serial.
    // Special selections are routed separately; keep the ordinary USA calculation here.
    if (nineDigitUsa && /^1[4-9]\d{7}$/.test(raw)) {
      const year = `20${raw.slice(0, 2)}`;
      const sequence = raw.slice(2);
      // Gibson's localized guide specifies the first sequence as 0000001:
      // https://www.gibson.com/de/pages/serial-number-search
      if (sequence === '0000000') return makeResult('Check the Sequence Number', `The prefix points to model year <strong>${year}</strong>, but sequence number <strong>${sequence}</strong> is outside the documented sequence, which starts at 0000001. Recheck the full serial number.`, '#modern', 'Check number');
      return makeResult(`${year} Model Year`, `Gibson USA serial <strong>${raw}</strong> matches the 2014 to mid-2019 model-year format. The first two digits give <strong>${year}</strong>; the remaining seven give sequence number <strong>${sequence}</strong>. This format does not encode a production day. The guitar may have been built late in the previous calendar year.`, '#modern', 'Model year');
    }
    if (!nineDigitUsa && raw.startsWith('94')) return makeResult('1994 Centennial year', `Eight-digit serial <strong>${raw}</strong> begins with Gibson’s 1994 Centennial prefix. Check the model’s specific sequence for the remaining digits.`, '#modern', 'Known exception');
    const year = Number(`${Number(raw[0]) <= 2 ? '20' : '19'}${raw[0]}${raw[4]}`);
    const day = Number(raw.slice(1, 4));
    const date = dateFromDay(day, year);
    if (!date) return makeResult(`Year reads as ${year}`, `The split-year digits point to <strong>${year}</strong>, but production day <strong>${day}</strong> is not valid. Recheck the serial or use a model-specific format.`, '#modern', 'Check number');
    const production = nineDigitUsa
      ? `Batch: <strong>${raw[5]}</strong>. Production rank: <strong>${raw.slice(6)}</strong>.`
      : `Production rank: <strong>${raw.slice(5)}</strong>.`;
    return makeResult(String(year), `Built around <strong>${date}</strong> (${ordinal(day)} day of the year). ${production}`, '#modern', 'Format match');
  };

  const decodeCarved = (raw, answers) => {
    if (!/^\d{8}$/.test(raw)) return makeResult('Check the Carved-Top Format', 'This orange-label rule requires eight digits. Other lengths need confirmation from Gibson; the ordinary USA formula has not been applied.', '#format-carved-top', 'Check details');
    const digit = Number(raw[4]);
    const period = answers.carvedPeriod;
    const year = raw[0] === '9' ? 1990 + digit : raw[0] === '2' ? 2000 + digit : null;
    if (!year || (period && period !== 'unknown' && period !== (raw[0] === '9' ? '1990s' : '2000s'))) return makeResult('Carved-Top Period Needs Checking', 'This supported rule covers 9-leading 1990s and 2-leading 2000s orange-label numbers. It does not establish a later decade. Ask Gibson to verify this model and serial.', '#format-carved-top', 'Conflicting details');
    const day = Number(raw.slice(1, 4));
    const date = dateFromDay(day, year);
    if (!date || Number(raw.slice(5)) === 0) return makeResult('Check the Carved-Top Number', 'The day of year or production sequence is invalid for this reading. Recheck all eight digits; no production date has been assigned.', '#format-carved-top', 'Check number');
    return makeResult(period && period !== 'unknown' ? String(year) : `Possible ${year}`, `Under the selected carved-top orange-label rule, <strong>${raw}</strong> reads as <strong>${date}, ${year}</strong>, sequence <strong>${raw.slice(5)}</strong>. The leading ${raw[0]} identifies the ${raw[0] === '9' ? '1990s' : '2000s'} system; it is not the ordinary Gibson USA split-year formula. Confirm that production period from the guitar and records. This is a documented format reading, not a factory-record lookup.`, '#format-carved-top', period && period !== 'unknown' ? 'Format match' : 'Period needs confirmation');
  };

  const decodeFon = (raw) => {
    const prefixes = {Z:1952,Y:1953,X:1954,W:1955,V:1956,U:1957,T:1958,S:1959,R:1960,Q:1961};
    const suffixes = {A:1935,B:1936,C:1937,D:1938,E:'1939 or 1941',F:1940,G:1941,H:1942};
    if (/^[Q-Z]\d+$/.test(raw) && prefixes[raw[0]]) return makeResult(String(prefixes[raw[0]]), `FON <strong>${raw}</strong> uses the 1952 to 1961 prefix-letter system. The letter dates the batch, not an exact completion day.`, '#fon', 'Strong match');
    const earlyA = /^(\d+)A$/.exec(raw);
    if (earlyA && Number(earlyA[1]) >= 11000 && Number(earlyA[1]) <= 11250) return makeResult('1924 to 1925', `FON <strong>${raw}</strong> belongs to the earlier 11000A to 11250A series. Here A does not mean 1935.`, '#fon', 'Estimated');
    // First letter after the batch is the year; later letters identify the brand/type.
    // Optional trailing digits are the instrument's ranking within the batch.
    const suffix = /^(\d+)([A-H])([A-Z]*)(\d{0,3})$/.exec(raw);
    if (suffix && Number(suffix[1]) > 0) {
      const year = suffix[2] === 'E' && suffix[3] ? 1939 : suffixes[suffix[2]];
      return makeResult(String(year), `FON <strong>${raw}</strong> uses <strong>${suffix[2]}</strong>, the first letter after the batch number, as its year code. Later letters do not replace that code.${suffix[2] === 'E' ? suffix[3] ? ' E followed by another letter points to 1939.' : ' A lone E has conflicting 1939 and 1941 readings; check the model and features.' : ''}${suffix[4] ? ' The final digits are the instrument’s batch ranking, not the year.' : ''}`, '#fon', String(year).includes('or') ? 'Two possible years' : 'Format match');
    }
    if (!/^\d+$/.test(raw)) return makeResult('No Letter-Code Match', 'This FON does not match the common prefix- or suffix-letter systems. Recheck the stamp and compare the early ranges.', '#fon', 'Check number');
    const number = Number(raw);
    const ranges = [
      [1,3650,'1902 to 1916'], [11000,12000,'1917 to 1923'], [11000,11250,'1924 to 1925 (A sometimes omitted)'],
      [8000,9999,'1925 to 1931'], [1,890,'1931 to 1933'], [1,1500,'1934'],
      [1,7900,'1940 to 1945'], [700,1000,'1947 (unreliable)'], [1100,3700,'1948'],
      [2000,2999,'1949'], [3000,5999,'1950'], [6000,9999,'1951'],
    ];
    const years = ranges.filter(([start, end]) => number >= start && number <= end).map(([, , years]) => years);
    return years.length ? makeResult(years.join('; or '), `Numeric FON <strong>${raw}</strong> occurs in these approximate chart periods. Gibson restarted and reused batch numbers. The model, logo and construction must narrow the date; wartime and immediate postwar ranges are particularly uncertain.`, '#fon', years.length > 1 ? 'Multiple periods' : 'Estimated') : makeResult('Compare the FON Charts', `Number-only FON <strong>${raw}</strong> cannot be dated uniquely without its model and construction details.`, '#fon', 'Needs context');
  };

  const decodeStandard = (raw, location) => {
    if (/^A\d+$/.test(raw)) return decodeA(raw);
    if (!/^\d+$/.test(raw)) return makeResult('Unrecognized standard format', 'Standard serials are numeric, except for the documented A-prefix series. Choose a special model format if applicable.', '#special', 'Check number');
    if (location === 'decal') {
      const prefixYears = {'99':'1975','00':'1976','06':'1977'};
      if (raw.length === 8 && prefixYears[raw.slice(0, 2)]) return makeResult(prefixYears[raw.slice(0, 2)], `Eight-digit decal serial <strong>${raw}</strong> uses the ${raw.slice(0, 2)} prefix.`, '#norlin', 'Strong match');
      return makeResult('No decal-prefix match', 'The documented transitional decal prefixes are 99 (1975), 00 (1976), and 06 (1977).', '#norlin', 'Check number');
    }
    if (raw.length === 8 || raw.length === 9) {
      const decalYears = {'99':'1975','00':'1976','06':'1977'};
      if (location === 'unknown' && raw.length === 8 && decalYears[raw.slice(0, 2)]) return makeResult('Two systems may apply', `Prefix <strong>${raw.slice(0, 2)}</strong> could be a ${decalYears[raw.slice(0, 2)]} decal serial. If the number is pressed into wood, use the modern format instead.`, '#norlin', 'Location needed');
      return decodeModern(raw, { allowUsaFormats: true });
    }
    if (/^\d{1,5}$/.test(raw) && location === 'label') return decodeWhiteLabel(raw);
    if ((raw.length === 5 || raw.length === 6) && location === 'ink') {
      if (raw[0] === '2') return makeResult('A Leading 2 Needs Verification', 'Do not date this stamp as 1952 from the first digit. Original 1952 Les Pauls normally have no serial number; a later reissue or another numbering system needs a model-specific check.', '#ink-stamp', 'Low confidence');
      if (raw[0] === '1') return makeResult('Possible 1961 Ink Stamp', 'A small number of 1961 instruments have a 1-leading ink stamp. This is a rare exception, so confirm the model, original stamp and construction before accepting 1961.', '#ink-stamp', 'Low confidence');
      const years = {'3':1953,'4':1954,'5':1955,'6':1956,'7':1957,'8':1958,'9':1959,'0':1960};
      return makeResult(String(years[raw[0]]), `Ink-stamped serial <strong>${raw}</strong> begins with ${raw[0]}, indicating <strong>${years[raw[0]]}</strong>.`, '#ink-stamp', 'Format match');
    }
    if (/^\d{3,6}$/.test(raw) && location === 'wood-no-usa') return decodeReused(raw);
    if (raw.length === 6 && location === 'wood-usa') return decodeNorlin(raw);
    if (raw.length === 6 && location === 'unknown') {
      const early = decodeReused(raw).title;
      const later = decodeNorlin(raw).title;
      return makeResult(`${early} or ${later}`, `A six-digit serial was reused across two systems. Check the back of the headstock: <strong>no “Made in USA”</strong> points to the 1961 to 1970 chart; <strong>with it</strong> points to the 1970s chart.`, '#reused', 'Location needed');
    }
    return makeResult('Needs a physical clue', `Serial <strong>${raw}</strong> does not resolve from length alone. Select where and how the number is applied, then try again.`, '#find-number', 'More info needed');
  };

  const hints = {
    cs: 'Include the CS prefix and every digit. Example: CS102644. A longer sequence does not establish the decade.',
    'lp-reissue': 'Historic Les Paul, not a Classic or an early dealer reissue. Example: 7 5123.',
    'korina-reissue': 'Historic 1958 Korina reissue, not the early-1980s Heritage series. Example: 8 0123.',
    'sg-reissue': 'Impressed reissues have both one- and two-digit year systems. Confirm the model before reading the date.',
    'es-61-64': 'Format begins 1Y. Example: 191234.',
    'es-58': 'Include A8. Example: A891234.',
    'es-59': 'Include A9. Example: A991234.',
    'es-63': 'Include A3 if present. Numeric Memphis examples need paperwork.',
    'carved-top': 'Use the eight-digit orange-label serial. Confirm the production period from the model and records.',
    'lp-classic': 'Numeric only; one- or two-digit year prefix.',
    artist: 'Keep the full prefix, numbers and any # mark. Choose the exact edition after entering it.',
    'collectors-choice': 'Include CC, the model number, letter and sequence. Example: CC 09A 017.',
    centennial: 'Special Centennial Collection only. Example: 1894 13. Standard eight-digit 94 serials use the standard decoder.',
    'early-reissue': 'Confirm Guitar Trader, Leo’s or the regular 1983 to early 1993 Reissue. Their headstock dating rules differ.',
    'heritage-80': 'Enter the normal eight-digit serial or the separate four-digit edition number, not both together.',
    'anniversary-25-50': 'Enter the normal eight-digit serial or the separate four-digit edition number, not both together.',
    'heritage-v': 'Early-1980s Heritage series, not a later Historic Korina reissue.',
    'heritage-explorer': 'Early-1980s Heritage series, not a later Historic Korina reissue.',
    'unknown-special': 'Keep the complete number. A similar-looking pattern may belong to a different model.',
  };

  const clearContext = () => {
    answers = {};
    followupPanel.hidden = true;
    followupFields.replaceChildren();
    resultPanel.hidden = true;
    error.textContent = '';
  };
  const renderQuestions = (questions = []) => {
    followupFields.replaceChildren();
    followupPanel.hidden = !questions.length;
    for (const item of questions) {
      const wrapper = document.createElement('div');
      const fieldLabel = document.createElement('label');
      fieldLabel.htmlFor = `followup-${item.key}`;
      fieldLabel.textContent = item.label;
      const field = document.createElement(item.type === 'year' ? 'input' : 'select');
      field.id = fieldLabel.htmlFor;
      field.name = item.key;
      field.dataset.answer = item.key;
      if (item.type === 'year') {
        field.type = 'text';
        field.inputMode = 'numeric';
        field.maxLength = 4;
        field.placeholder = 'e.g. 2015';
        field.autocomplete = 'off';
      } else {
        for (const [value, text] of item.options) {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = text;
          field.append(option);
        }
      }
      field.value = answers[item.key] || (item.type === 'year' ? '' : 'unknown');
      wrapper.append(fieldLabel, field);
      if (item.help) {
        const help = document.createElement('p');
        help.id = `${field.id}-help`;
        help.textContent = item.help;
        field.setAttribute('aria-describedby', help.id);
        wrapper.append(help);
      }
      followupFields.append(wrapper);
    }
  };

  const setMode = (nextMode) => {
    clearContext();
    mode = nextMode;
    modeButtons.forEach((item) => item.setAttribute('aria-checked', String(item.dataset.mode === mode)));
    label.textContent = mode === 'fon' ? 'Enter your Factory Order Number' : 'Enter your serial number';
    input.placeholder = mode === 'fon' ? 'e.g. T1234' : 'e.g. 70108276';
    specialToggle.hidden = mode === 'fon';
    specialPanel.hidden = mode === 'fon' || specialToggle.getAttribute('aria-expanded') !== 'true';
    locationWrap.hidden = mode === 'fon' || Boolean(modelSelect.value);
    resultPanel.hidden = true;
    error.textContent = '';
  };

  modeButtons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
  specialToggle.addEventListener('click', () => {
    const expanded = specialToggle.getAttribute('aria-expanded') === 'true';
    specialToggle.setAttribute('aria-expanded', String(!expanded));
    specialToggle.querySelector('[aria-hidden="true"]').textContent = expanded ? '+' : '×';
    specialPanel.hidden = expanded;
  });
  modelSelect.addEventListener('change', () => {
    clearContext();
    modelHint.textContent = hints[modelSelect.value] || '';
    locationWrap.hidden = Boolean(modelSelect.value);
    resultPanel.hidden = true;
  });
  input.addEventListener('input', clearContext);
  locationSelect.addEventListener('change', clearContext);
  const runLookup = (focusResult = true) => {
    const raw = mode === 'fon' ? clean(input.value) : input.value.trim().replace(/[\s-]+/g, '').toUpperCase();
    if (!raw) {
      error.textContent = mode === 'fon' ? 'Enter the complete Factory Order Number.' : 'Enter the complete serial or edition number.';
      resultPanel.hidden = true;
      return;
    }
    if (mode === 'serial' && (!/^[A-Z0-9#]+$/.test(raw) || raw.length > 40)) {
      error.textContent = 'Use the letters and numbers on the stamp. Spaces, hyphens and a # mark are accepted. For other markings, use the model-not-listed guidance.';
      resultPanel.hidden = true;
      return;
    }
    if (mode === 'serial' && !globalThis.GibsonSpecialFormats) {
      error.textContent = 'The model-format guide could not load. Reload the page or use the charts below; no year has been assigned.';
      resultPanel.hidden = true;
      return;
    }
    const decoded = mode === 'fon' ? decodeFon(raw) : globalThis.GibsonSpecialFormats.resolve({ raw, model: modelSelect.value, location: locationSelect.value, answers, standard: decodeStandard, carved: decodeCarved });
    error.textContent = '';
    renderQuestions(decoded.questions);
    resultTitle.textContent = decoded.title;
    resultCopy.innerHTML = decoded.copy;
    resultLink.href = decoded.href;
    confidence.textContent = decoded.certainty;
    resultPanel.hidden = false;
    if (focusResult) {
      const firstMissing = (decoded.questions || []).find(item => !answers[item.key] || answers[item.key] === 'unknown');
      const target = !decoded.preliminary && firstMissing && followupFields.querySelector(`#followup-${firstMissing.key}`);
      (target || resultPanel).focus();
    }
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Read year fields on submit too, including keyboard submission before blur.
    for (const field of followupFields.querySelectorAll('[data-answer]')) answers[field.dataset.answer] = field.value;
    runLookup();
  });
  followupFields.addEventListener('change', (event) => {
    const key = event.target.dataset.answer;
    if (!key) return;
    if (['family', 'artist', 'earlyModel', 'numberKind', 'heritageKind', 'artistStandard', 'slashRun', 'signedPage', 'impressedModel'].includes(key)) answers = key === 'family' ? {} : { family: answers.family, artist: answers.artist, earlyModel: answers.earlyModel };
    if (key === 'evidence') {
      delete answers.documentYear;
      delete answers.documentDecade;
    }
    answers[key] = event.target.value;
    runLookup(false);
    followupFields.querySelector(`#followup-${key}`)?.focus();
  });
  document.querySelector('#reset-button').addEventListener('click', () => {
    clearContext();
    input.value = '';
    modelSelect.value = '';
    modelHint.textContent = '';
    locationSelect.value = 'unknown';
    specialToggle.setAttribute('aria-expanded', 'false');
    specialToggle.querySelector('[aria-hidden="true"]').textContent = '+';
    specialPanel.hidden = true;
    locationWrap.hidden = mode === 'fon';
    input.focus();
  });
})();
