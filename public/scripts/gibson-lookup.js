// Type-first Gibson serial lookup for /how-to-read-gibson-serial-numbers/.
// All dating comes from decoder.js (GibsonDecoder) and special-formats.js (GibsonSpecialFormats).
// This file only decides which questions to ask and maps the answers onto the same
// location / model / answers inputs the earlier dropdown form produced, so results are unchanged.
// Photo URLs come from the page (#gsl-photos), built by Astro's image pipeline.
(() => {
  const D = globalThis.GibsonDecoder;
  const SF = globalThis.GibsonSpecialFormats;
  const LIVE = '';
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- Photos (Joe's own serial photos from src/assets/serial-photos) ----------
  let CFG = { photos: {}, xc: {} };
  try { CFG = JSON.parse(document.getElementById('gsl-photos').textContent); } catch { /* photos stay blank; lookups still work */ }
  const PH = new Proxy(CFG.photos, { get: (t, k) => t[k] || ['', ''] });
  const img = (key, cls = '') => `<img class="${cls}" src="${PH[key][0]}" alt="${esc(PH[key][1])}" loading="lazy" decoding="async">`;

  // ---------- Questions ----------
  const WHERE = [
    // spot = [x%, y%] on src/assets/serial-lookup/gibson-byrdland-serial-location-map.png (headstock face, bass f-hole, treble f-hole)
    { value: 'headstock', n: 1, tag: 'Back of headstock', label: 'Back of the headstock', photo: 'impressed', spot: [50, 7], part: 'headstock',
      copy: 'Turn the guitar over. Most Gibson solidbody and semi-hollow guitars have the serial number here.' },
    { value: 'label', n: 2, tag: 'Paper label', label: 'On a paper label inside', photo: 'orange', spot: [24.5, 75], part: 'fbass',
      copy: 'Look through the f-hole or soundhole. Vintage acoustics and hollowbody electrics often have the number on an interior label.' },
    { value: 'fon', n: 3, tag: 'Bare wood (FON)', label: 'Stamped on bare wood inside', photo: 'fon', spot: [78, 78.5], part: 'ftreble',
      copy: 'Written or stamped directly on the bare wood inside the guitar, not on a label. This is a Factory Order Number (FON).' },
  ];
  const STEP = {
    where: { title: 'Where did you find the number?', help: 'Hover over or tap the numbered spots on the guitar. Where the number is tells us which Gibson system to read it with.' },
    how: { title: 'How is the number put on the headstock?', help: 'Look closely, or run a fingernail across it. Compare yours with these photos.',
      options: [
        { value: 'pressed', label: 'Pressed into the wood', photo: 'impressed', copy: 'The digits are dented into the wood and finished over.' },
        { value: 'ink', label: 'Printed in ink', photo: 'ink', copy: 'The digits sit on top of the finish rather than being pressed into the wood.' },
        { value: 'decal', label: 'A gold decal', photo: 'decal', copy: 'Printed in gold, often with the model name above it.' },
      ] },
    usa: { title: 'Is “Made in USA” stamped under the number?', help: 'Guitars made before 1970 do not have a “Made in USA” stamp underneath the serial number.',
      options: [
        { value: 'yes', label: 'Yes, “Made in USA” is under it', photo: 'madeInUsa', copy: 'Like this Les Paul Custom, with MADE IN U.S.A. pressed in below the number.' },
        { value: 'no', label: 'No, just the number', photo: 'impressed', copy: 'Like 846395 here, with nothing stamped underneath.' },
      ] },
    labelColor: { title: 'What does the label look like?', help: 'The early white-label chart only applies to an original white oval label. A modern or replacement label needs a different check.',
      options: [
        { value: 'white', label: 'An older white oval label', photo: 'white', copy: 'Check the paper color as well as whether the number has a letter in front.' },
        { value: 'orange', label: 'An orange oval label', photo: 'orange', copy: 'Orange labels are a different series from the early white labels.' },
        { value: 'other', label: 'Another label or a later replacement', photo: null, copy: 'Anything else, or a label that does not look original.' },
      ] },
    family: { title: 'Is it a regular production Gibson, or a reissue or special model?', help: 'Most Gibsons use Gibson’s standard serial system. Historic reissues, Les Paul Classics, Custom Shop and signature models have their own formats, and some look just like older numbers. Check the headstock, case candy and paperwork for the model name.' },
  };
  // Same keys and labels as the current tool's "Special format" dropdown, grouped.
  const SPECIAL_GROUPS = [
    ['Les Paul', [['lp-reissue', 'Historic Les Paul Reissue, 1954 to 1960'], ['lp-classic', 'Les Paul Classic, 1989 to 2014'], ['early-reissue', 'Guitar Trader or Other Early Les Paul Reissue'], ['heritage-80', 'Heritage Standard 80 or 80 Elite'], ['anniversary-25-50', 'Les Paul 25/50 Anniversary'], ['collectors-choice', 'Collector’s Choice'], ['centennial', '1994 Centennial Collection Limited Edition']]],
    ['ES Reissues', [['es-61-64', '1961 or 1964 ES Reissue'], ['es-63', '1963 ES-335 Reissue'], ['es-58', '1958 ES-335 Reissue'], ['es-59', '1959 ES Reissue']]],
    ['SG, Firebird, Flying V and Explorer', [['sg-reissue', 'Impressed SG, Firebird or Other Reissue'], ['korina-reissue', 'Historic 1958 Korina Flying V or Explorer'], ['heritage-v', 'Early-1980s Heritage Korina Flying V'], ['heritage-explorer', 'Early-1980s Heritage Korina Explorer']]],
    ['Custom Shop and Artist', [['cs', 'CS-prefix Custom Shop'], ['carved-top', 'Carved-top Custom Shop'], ['artist', 'Artist Signature Edition']]],
    ['Something Else', [['unknown-special', 'My Model or Format Is Not Listed']]],
  ];
  const SPECIAL_NAME = Object.fromEntries(SPECIAL_GROUPS.flatMap(([, list]) => list));

  // ---------- State ----------
  const fresh = () => ({ input: '', raw: '', fonShape: false, asSerial: false, where: null, how: null, usa: null, family: null, model: '', answers: {}, specialOpen: false });
  let state = fresh();
  let explore = false;

  const normSerial = (v) => v.trim().replace(/[\s-]+/g, '').toUpperCase();
  // Six digits plus a trailing A is a possible 1970 headstock stamp, so it is asked about rather than
  // auto-read as a 1935 FON; "Bare wood inside" still reads it as a FON.
  const isSuffixA = (c) => /^\d{6}A$/.test(c);
  const isFonShape = (c) => /^[Q-Z]\d+$/.test(c) || (/^\d+[A-H][A-Z]*\d{0,3}$/.test(c) && !isSuffixA(c));
  const isFon = () => (state.fonShape && !state.asSerial) || state.where === 'fon';
  const needsWhere = (r) => /^\d{1,6}$/.test(r) || /^A\d+$/.test(r) || isSuffixA(r);
  const needsHow8 = (r) => /^(99|00|06)\d{6}$/.test(r);
  // Same condition special-formats.js uses before it asks its own family question.
  const needsFamily = (r) => /^#?\d{1,6}$/.test(r) || /^A\d+$/.test(r) || /^[B-K]\d{3}$/.test(r);

  const plan = () => {
    const r = state.raw;
    if (!r) return [];
    if (state.fonShape && !state.asSerial) return [];
    const steps = [];
    if (needsWhere(r)) {
      steps.push('where');
      if (state.where === 'fon') return steps;
      if (state.where === 'headstock' && !state.model && !isSuffixA(r)) { steps.push('how'); if (state.how === 'pressed') steps.push('usa'); }
    } else if (needsHow8(r)) steps.push('how');
    if (needsFamily(r)) {
      steps.push('family');
      if (state.where === 'label' && /^\d+$/.test(r) && !state.model && state.family !== null) steps.push('labelColor');
    }
    return steps;
  };
  const answerOf = (step) => ({ where: state.where, how: state.how, usa: state.usa, family: state.family, labelColor: state.answers.labelKind }[step]);
  const current = () => plan().find((s) => answerOf(s) == null);

  // Map wizard answers onto the current tool's location values.
  const location = () => {
    if (state.where === 'label') return 'label';
    if (state.how === 'ink') return 'ink';
    if (state.how === 'decal') return 'decal';
    if (state.how === 'pressed') {
      if (needsHow8(state.raw)) return 'wood-usa';
      return state.usa === 'yes' ? 'wood-usa' : state.usa === 'no' ? 'wood-no-usa' : 'unknown';
    }
    return 'unknown';
  };

  const decode = () => {
    if (isFon()) return { ...D.decodeFon(D.clean(state.input)), questions: [] };
    const r = state.raw;
    // "Can't tell" on Made in USA for a six-digit number: the current tool's own
    // two-system answer for exactly this case (decodeStandard with location unknown).
    if (!state.model && state.usa === 'unsure' && /^\d{6}$/.test(r) && ['vintage', 'unknown'].includes(state.family)) {
      return { ...D.decodeStandard(r, 'unknown'), questions: [] };
    }
    // A plus six digits pressed into the headstock: the 1970s letter-stamp reading. special-formats.js
    // would otherwise send it to the 1947 to 1961 A-series chart, which stops at five digits.
    if (!state.model && /^A\d{6}$/.test(r) && state.where === 'headstock' && state.how === 'pressed') {
      const v = D.decodeStandard(r, location());
      const prelim = state.family !== 'vintage';
      return { ...v, preliminary: prelim, copy: v.copy + (prelim ? ' This is a preliminary reading. If this is a reissue or special model, choose it below before using the date.' : ''), questions: [] };
    }
    return SF.resolve({ raw: r, model: state.model, location: location(), answers: state.answers, standard: D.decodeStandard, carved: D.decodeCarved });
  };

  const setFamily = (value) => {
    state.family = value;
    if (value === 'vintage' || value === 'unknown') { state.model = ''; state.answers = { labelKind: state.answers.labelKind, family: value }; }
    else { state.model = value; state.answers = {}; }
  };

  // ---------- Live format sniff (from the page's "Find Your Format By Digit Count" table) ----------
  const sniff = (value) => {
    const raw = normSerial(value);
    if (!raw) return null;
    if (!/^[A-Z0-9#]+$/.test(raw)) return ['warn', 'Use only the letters and numbers on the stamp.'];
    if (isFonShape(D.clean(value))) return ['fon', 'Looks like a Factory Order Number (FON)'];
    if (/^CS/.test(raw)) return ['special', 'CS prefix: Custom Shop'];
    if (/^CC/.test(raw)) return ['special', 'CC prefix: Collector’s Choice'];
    if (/^(PAGE|JPP|JP|BONE|ACE|AFB|SL|PF|BG|GIBBONS|DA|ALLMAN|EC|CLAPTON|ERICCLAPTON)/.test(raw)) return ['special', 'Looks like an artist-edition prefix'];
    if (/^LE\d{6}$/.test(raw)) return ['letter', 'LE and six digits: a 1970s reissue model stamp'];
    if (/^[B-F]\d{6}$/.test(raw)) return ['letter', 'Letter and six digits: a mid-1970s headstock stamp'];
    if (/^A\d{6}$/.test(raw)) return ['letter', 'A and six digits: a 1970s stamp or an ES reissue. We’ll ask where it is.'];
    if (isSuffixA(raw)) return ['letter', 'Six digits and an A: possibly a 1970 stamp, or a FON. We’ll ask where it is.'];
    if (/^A\d+$/.test(raw)) return ['letter', 'A-prefix number. We’ll ask where it is.'];
    if (/^\d{9}$/.test(raw)) return ['modern', '9 digits: modern batch code or 2014 to mid-2019 model-year format'];
    if (/^\d{8}$/.test(raw)) return ['modern', '8 digits: 1970s decal or modern date code'];
    if (/^\d{3,6}$/.test(raw)) return ['vintage', `${raw.length} digits: vintage label, ink stamp, FON or a reused range. We’ll ask where it is.`];
    if (/^\d{1,2}$/.test(raw)) return ['vintage', 'Short number. We’ll ask where it is.'];
    return ['letter', `${raw.length} characters. Press Look It Up.`];
  };

  // ---------- Elements ----------
  const form = $('#lookup-form');
  const input = $('#serial-input');
  const chip = $('#gsl-sniff');
  const errorEl = $('#gsl-error');
  const stage = $('#gsl-stage');

  // ---------- Guitar map ----------
  const guitarSvg = $('#gsl-guitar-template').innerHTML;
  const renderMap = (opts = {}) => {
    const selected = opts.selected;
    return `
      <div class="map-grid">
        <div class="map" data-map>
          ${guitarSvg}
          ${WHERE.map((w) => `
            <button type="button" class="spot spot--${w.part}${selected === w.value ? ' is-on' : ''}" style="left:${w.spot[0]}%;top:${w.spot[1]}%" data-spot="${w.value}" aria-label="${w.n}: ${esc(w.label)}">
              <span class="spot__dot"><b>${w.n}</b></span><span class="spot__tag">${esc(w.tag)}</span>
            </button>`).join('')}
          <div class="pop" data-pop hidden></div>
        </div>
        <div class="map-options">
          ${WHERE.map((w) => `
            <button type="button" class="opt" data-pick="${w.value}" data-hover="${w.value}">
              ${img(w.photo, 'opt__img')}
              <span class="opt__text"><strong><span class="opt__n">${w.n}</span>${esc(w.label)}</strong><small>${esc(w.copy)}</small></span>
            </button>`).join('')}
        </div>
      </div>`;
  };
  const wireMap = (root, { onPick }) => {
    const map = $('[data-map]', root);
    const pop = $('[data-pop]', root);
    let open = null;
    // Light up one ring and its matching list card (null clears both).
    const mark = (value) => {
      root.querySelectorAll('[data-spot]').forEach((s) => s.classList.toggle('is-hot', s.dataset.spot === value));
      root.querySelectorAll('[data-hover]').forEach((s) => s.classList.toggle('is-hot', s.dataset.hover === value));
    };
    // Open the zoomed photo popup over the guitar (from a ring or a list card).
    const show = (value) => {
      const w = WHERE.find((x) => x.value === value);
      open = value;
      mark(value);
      pop.innerHTML = `${img(w.photo)}<div><strong>${w.n}. ${esc(w.label)}</strong><p>${esc(w.copy)}</p>${onPick ? `<button type="button" class="pop__go" data-pick="${w.value}">Mine is here →</button>` : ''}</div>`;
      pop.classList.toggle('pop--below', w.spot[1] < 30);
      pop.style.top = w.spot[1] < 30 ? `${w.spot[1] + 6}%` : '';
      pop.style.bottom = w.spot[1] < 30 ? '' : `${100 - w.spot[1] + 6}%`;
      pop.hidden = false;
    };
    const hide = () => { open = null; pop.hidden = true; mark(null); };
    // Listeners go on the freshly rendered grid, never on the persistent stage,
    // so going Back to this step does not stack duplicate handlers.
    const grid = $('.map-grid', root);
    let touch = false;
    let openAtDown = null;
    let quiet = false;
    grid.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; openAtDown = open; }, true);
    grid.querySelectorAll('[data-spot]').forEach((s) => {
      s.addEventListener('mouseenter', () => show(s.dataset.spot));
      s.addEventListener('focus', () => { if (!quiet) show(s.dataset.spot); });
      s.addEventListener('click', () => {
        // Touch: the first tap only shows the photo; a second tap or "Mine is here" picks it.
        if (!onPick || (touch && openAtDown !== s.dataset.spot)) { show(s.dataset.spot); return; }
        onPick(s.dataset.spot);
      });
    });
    // List cards: hovering (or focusing) one opens the zoomed photo over the guitar and lights its ring;
    // moving off the card (or tabbing away) closes it right away.
    grid.querySelectorAll('[data-hover]').forEach((o) => {
      const on = () => show(o.dataset.hover);
      const off = () => hide();
      o.addEventListener('mouseenter', on);
      o.addEventListener('focus', on);
      o.addEventListener('mouseleave', off);
      o.addEventListener('blur', off);
    });
    // The popup closes when the pointer or keyboard focus leaves the guitar, on Escape,
    // or on a tap on the photo itself (touch screens have no "mouse leave").
    map.addEventListener('mouseleave', (e) => { if (!pop.contains(e.relatedTarget)) hide(); });
    map.addEventListener('focusout', (e) => { if (!map.contains(e.relatedTarget)) hide(); });
    map.addEventListener('click', (e) => { if (!e.target.closest('[data-spot], [data-pop]')) hide(); });
    grid.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || !open) return;
      const spot = grid.querySelector(`[data-spot="${open}"]`);
      const fromPopup = pop.contains(document.activeElement);
      hide();
      // Return focus to the ring without reopening its popup.
      if (fromPopup && spot) { quiet = true; spot.focus(); quiet = false; }
    });
    grid.addEventListener('click', (e) => {
      const pick = e.target.closest('[data-pick]');
      if (!pick) return;
      // Explore view ("Where's my number?") has nothing to pick: a card click (a tap on a phone) shows its photo.
      if (onPick) onPick(pick.dataset.pick); else show(pick.dataset.pick);
    });
  };

  // ---------- Rendering ----------
  const setStage = (html, focus = true) => {
    stage.innerHTML = html;
    stage.classList.remove('enter'); void stage.offsetWidth; stage.classList.add('enter');
    if (focus) {
      const h = $('[data-focus]', stage);
      if (h) h.focus({ preventScroll: true });
      // Bring the new question or result to the top of the screen if it starts below the fold.
      const top = stage.getBoundingClientRect().top;
      if (top > innerHeight * 0.55 || top < 0) window.scrollTo({ top: top + scrollY - 12, behavior: 'smooth' });
    }
  };

  const header = (step) => {
    const steps = plan();
    const index = steps.indexOf(step);
    return `
      <div class="step__top">
        <button type="button" class="link-btn" data-back>← Back</button>
        <span class="step__count">Question ${index + 1} of ${steps.length}</span>
        <span class="dots">${steps.map((s, i) => `<i class="${i < index ? 'done' : i === index ? 'now' : ''}"></i>`).join('')}</span>
      </div>
      ${summaryChips(step)}
      <h2 class="step__title" tabindex="-1" data-focus>${esc(STEP[step].title)}</h2>
      <p class="step__help">${esc(STEP[step].help)}</p>`;
  };

  const photoCards = (options, selected) => `
    <div class="cards">${options.map((o) => `
      <button type="button" class="card-opt${selected === o.value ? ' is-on' : ''}" data-answer="${o.value}">
        ${o.photo ? img(o.photo, 'card-opt__img') : '<span class="card-opt__img card-opt__img--blank">?</span>'}
        <strong>${esc(o.label)}</strong><small>${esc(o.copy)}</small>
      </button>`).join('')}
    </div>`;

  const renderStep = (step, focus) => {
    let body = '';
    if (step === 'where') {
      body = renderMap({ selected: state.where }) + `
        <div class="step__foot">
          <button type="button" class="link-btn" data-answer="unknown">I’m not sure</button>
          <a class="link-btn" href="#find-number">▶ Watch Joe show where to look (1:48)</a>
        </div>`;
    } else if (step === 'how') {
      const options = needsHow8(state.raw) ? STEP.how.options.filter((o) => o.value !== 'ink') : STEP.how.options;
      body = photoCards(options, state.how) + `<div class="step__foot"><button type="button" class="link-btn" data-answer="unknown">Not sure</button></div>`;
    } else if (step === 'usa') {
      body = photoCards(STEP.usa.options, state.usa) + `<div class="step__foot"><button type="button" class="link-btn" data-answer="unsure">I can’t tell</button></div>`;
    } else if (step === 'labelColor') {
      body = photoCards(STEP.labelColor.options, state.answers.labelKind) + `<div class="step__foot"><button type="button" class="link-btn" data-answer="unknown">Not sure</button></div>`;
    } else if (step === 'family') {
      body = `
        <div class="fam">
          <button type="button" class="fam__btn" data-answer="vintage"><strong>A regular production Gibson</strong><small>Not a reissue or special edition. Read it with Gibson’s standard serial charts.</small></button>
          <button type="button" class="fam__btn fam__btn--more" data-open-special aria-expanded="${state.specialOpen}"><strong>A reissue or special model</strong><small>Historic, Custom Shop, Les Paul Classic, ES reissue, artist edition and more. Pick the model to use its own serial format.</small></button>
          <button type="button" class="fam__btn" data-answer="unknown"><strong>I’m not sure</strong><small>We’ll read it with the standard charts and mark the result as preliminary.</small></button>
        </div>
        ${state.specialOpen ? specialPicker() : ''}`;
    }
    setStage(`<div class="step">${header(step)}${body}</div>`, focus);
    const root = stage;
    if (step === 'where') wireMap(root, { onPick: (v) => answer('where', v) });
    root.querySelectorAll('[data-answer]').forEach((b) => b.addEventListener('click', () => answer(step, b.dataset.answer)));
    $('[data-back]', root)?.addEventListener('click', back);
    $('[data-open-special]', root)?.addEventListener('click', () => { state.specialOpen = !state.specialOpen; renderStep('family', false); $('.special', stage)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); });
    root.querySelectorAll('[data-special]').forEach((b) => b.addEventListener('click', () => answer('family', b.dataset.special)));
    wireChips(root);
  };

  const specialPicker = (current = '') => `
    <div class="special">
      ${SPECIAL_GROUPS.map(([group, list]) => `
        <div class="special__group"><p>${esc(group)}</p><div class="special__list">
          ${list.map(([key, label]) => `<button type="button" class="pill${current === key ? ' is-on' : ''}" data-special="${key}">${esc(label)}</button>`).join('')}
        </div></div>`).join('')}
    </div>`;

  const answer = (step, value) => {
    if (step === 'where') { state.where = value; state.how = null; state.usa = null; }
    else if (step === 'how') { state.how = value; if (needsHow8(state.raw)) state.where = 'headstock'; state.usa = null; }
    else if (step === 'usa') state.usa = value;
    else if (step === 'labelColor') state.answers.labelKind = value;
    else if (step === 'family') setFamily(value);
    render(true);
  };

  const back = () => {
    const steps = plan();
    const now = current();
    const index = now ? steps.indexOf(now) : steps.length;
    if (index <= 0) { state = fresh(); input.focus(); input.select(); stage.innerHTML = ''; stage.hidden = true; return; }
    clearFrom(steps[index - 1]);
    render(true);
  };

  const ORDER = ['where', 'how', 'usa', 'family', 'labelColor'];
  const clearFrom = (step) => {
    const from = ORDER.indexOf(step);
    if (from <= 0) { state.where = null; }
    if (from <= 1) state.how = null;
    if (from <= 2) state.usa = null;
    if (from <= 3) { state.family = null; state.model = ''; state.answers = { labelKind: state.answers.labelKind }; state.specialOpen = false; }
    if (from <= 4) delete state.answers.labelKind;
  };

  // Answer chips: the number plus each answer, click one to change it.
  const WHERE_NAME = { headstock: 'Back of headstock', label: 'Paper label', fon: 'Bare wood inside', unknown: 'Location not sure' };
  const HOW_NAME = { pressed: 'Pressed into wood', ink: 'Ink stamp', decal: 'Gold decal', unknown: 'Application not sure' };
  const USA_NAME = { yes: 'Made in USA under it', no: 'No Made in USA', unsure: 'Made in USA: can’t tell' };
  const LABEL_NAME = { white: 'White oval label', orange: 'Orange label', other: 'Other or replacement label', unknown: 'Label not sure' };
  const summaryChips = (upTo) => {
    const chips = [`<button type="button" class="chip chip--num" data-edit="number"><span>${esc(state.raw)}</span><b>✎</b></button>`];
    const stop = upTo ? ORDER.indexOf(upTo) : 99;
    if (state.fonShape && !state.asSerial) chips.push('<span class="chip">Read as a Factory Order Number</span>');
    if (state.where && ORDER.indexOf('where') < stop) chips.push(`<button type="button" class="chip" data-edit="where">${esc(WHERE_NAME[state.where])}</button>`);
    if (state.how && ORDER.indexOf('how') < stop) chips.push(`<button type="button" class="chip" data-edit="how">${esc(HOW_NAME[state.how])}</button>`);
    if (state.usa && ORDER.indexOf('usa') < stop) chips.push(`<button type="button" class="chip" data-edit="usa">${esc(USA_NAME[state.usa])}</button>`);
    if (state.family && ORDER.indexOf('family') < stop) chips.push(`<button type="button" class="chip" data-edit="family">${esc(state.model ? SPECIAL_NAME[state.model] : state.family === 'vintage' ? 'Regular production' : 'Reissue? Not sure')}</button>`);
    if (state.answers.labelKind && ORDER.indexOf('labelColor') < stop) chips.push(`<button type="button" class="chip" data-edit="labelColor">${esc(LABEL_NAME[state.answers.labelKind])}</button>`);
    return `<div class="chips" aria-label="Your answers. Select one to change it.">${chips.join('')}</div>`;
  };
  const wireChips = (root) => root.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => {
    const step = b.dataset.edit;
    if (step === 'number') { input.focus(); input.select(); window.scrollTo({ top: form.getBoundingClientRect().top + scrollY - 24, behavior: 'smooth' }); return; }
    if (step === 'where' && needsHow8(state.raw)) { clearFrom('how'); render(true); return; }
    clearFrom(step);
    render(true);
  }));

  // ---------- Result ----------
  const TONE = (c = '') => /^(Strong match|Format match|Year match|Chart match|Year decoded|Model year|Year matches your record)$/.test(c) ? 'good'
    : /(Check|Low confidence|needed|Conflicting|Disagree|not encoded|Manual)/i.test(c) ? 'warn' : 'mid';
  const isMulti = (d) => /^(Multiple years|Date range|Sources disagree|Two possible years|Multiple periods|Location needed)$/.test(d.certainty) || / or |\bto\b/.test(d.title);

  const breakdown = (d) => {
    const r = state.raw;
    const seg = (text, cls, label) => `<span class="seg ${cls}"><span class="seg__d">${esc(text)}</span><span class="seg__l">${label}</span></span>`;
    if (isFon()) {
      const c = D.clean(state.input);
      const m = /^([Q-Z])(\d+)$/.exec(c);
      if (m && /^\d{4}$/.test(d.title)) return seg(m[1], 'y', `Prefix letter<br><b>${d.title}</b>`) + seg(m[2], 'r', 'Batch and<br>position');
      return '';
    }
    if (d.href === '#modern' && /^\d{8,9}$/.test(r) && /^\d{4}$/.test(d.title)) {
      const day = Number(r.slice(1, 4));
      const date = D.dateFromDay(day, Number(d.title));
      return seg(r[0], 'y', `Year<br><b>${d.title}</b>`) + seg(r.slice(1, 4), 'd', `Day ${day}<br><b>${esc(date || '')}</b>`) + seg(r[4], 'y', 'Year')
        + (r.length === 9 ? seg(r[5], 'b', 'Batch') + seg(r.slice(6), 'r', 'Rank') : seg(r.slice(5), 'r', 'Rank that day'));
    }
    if (/Model Year$/.test(d.title) && /^\d{9}$/.test(r)) return seg(r.slice(0, 2), 'y', `Model year<br><b>20${r.slice(0, 2)}</b>`) + seg(r.slice(2), 'r', 'Sequence');
    if (d.href === '#ink-stamp' && /^\d{5,6}$/.test(r) && /^\d{4}$/.test(d.title)) return seg(r[0], 'y', `First digit<br><b>${d.title}</b>`) + seg(r.slice(1), 'r', 'Rest of the number');
    if (d.href === '#a-prefix' && /^A\d+$/.test(r) && /^\d{4}$/.test(d.title)) return seg('A', 'y', 'A-series') + seg(r.slice(1), 'r', `Sequence, not a date<br><b>${d.title} range</b>`);
    if (d.href === '#letter-prefix') {
      const lp = /^(LE|[A-F])(\d{6})$/.exec(r);
      if (lp && /^\d{4} to \d{4}$/.test(d.title)) return seg(lp[1], 'y', `Letter prefix<br><b>${d.title}</b>`) + seg(lp[2], 'r', 'Six-digit number');
      if (isSuffixA(r)) return seg(r.slice(0, 6), 'r', 'Six-digit number') + seg('A', 'y', 'Letter after<br><b>Possibly 1970</b>');
    }
    const cs = /^CS(\d)(\d{3,5})$/.exec(r);
    if (cs && state.model !== 'carved-top') return seg('CS', 'b', 'Custom Shop') + seg(cs[1], 'y', 'Last digit of<br>the year') + seg(cs[2], 'r', 'Sequence');
    return '';
  };

  // 1970s letter stamps: show Joe's photo of what the stamp should look like.
  const resultPhoto = (d) => {
    const m = d.href === '#letter-prefix' && /^(LE|[A-F])\d{6}$/.exec(state.raw);
    if (!m) return '';
    const key = m[1] === 'LE' ? 'lePrefix' : 'aPrefix';
    if (!PH[key][0]) return '';
    const cap = m[1] === 'LE' ? 'LE890141 on a Les Paul: the letters sit right in front of the digits, with “Made in U.S.A.” pressed in below.'
      : m[1] === 'A' ? 'An impressed A-prefix stamp: the letter sits right in front of the digits, with “Made in U.S.A.” pressed in below.'
        : `This stamp starts with an A. Yours should look the same, with a ${m[1]} in that spot.`;
    return `<figure class="res__photo"><span class="eyebrow">What it should look like</span>${img(key)}<figcaption>${esc(cap)}</figcaption></figure>`;
  };

  const XC = {
    pots: ['Pot Codes', '/gibson-pot-codes/', 'Date the original volume and tone pots.'],
    knobs: ['Knobs', '/gibson-knob-dating-guide/', 'Match the knob style to its era.'],
    tuners: ['Tuners', '/gibson-tuner-dating-guide/', 'Compare tuner types and markings.'],
    logo: ['Headstock Logos', '/gibson-headstock-logo-chronology/', 'Check the logo and headstock inlay.'],
    pickups: ['PAF and Patent Number Pickups', '/post/gibson-paf-patent-number-pickup-guide/', 'Identify the original pickups.'],
    neck: ['Neck Construction', '/gibson-physical-features-hardware-guide/#neck-construction', 'Check how the neck was built.'],
    volute: ['Volutes and Headstock Details', '/gibson-physical-features-hardware-guide/#headstock-clues', 'Check the back of the neck and headstock.'],
    bridge: ['Bridges and Tailpieces', '/gibson-physical-features-hardware-guide/#bridge-types', 'Compare the original hardware.'],
    cases: ['Case Identification', '/gibson-physical-features-hardware-guide/#cases', 'Match the case to the guitar.'],
    physical: ['All Physical Features', '/gibson-physical-features-hardware-guide/', 'Every construction clue in one guide.'],
  };
  const XC_SETS = {
    '#reused': ['pots', 'knobs', 'tuners', 'logo', 'neck', 'pickups'],
    '#norlin': ['volute', 'neck', 'logo', 'pots', 'tuners', 'bridge'],
    '#letter-prefix': ['volute', 'neck', 'logo', 'pots', 'tuners', 'bridge'],
    '#ink-stamp': ['pickups', 'pots', 'knobs', 'tuners', 'logo', 'bridge'],
    '#a-prefix': ['pickups', 'pots', 'knobs', 'tuners', 'logo', 'bridge'],
    '#white-label': ['logo', 'tuners', 'cases', 'physical'],
    '#fon': ['logo', 'tuners', 'cases', 'physical'],
    '#modern': ['logo', 'volute', 'cases', 'physical'],
  };
  const MODELS = [['Les Paul', '/gibson-les-paul-dating-guide/'], ['SG', '/gibson-sg-dating-guide/'], ['ES-335, 345, 355', '/gibson-es-335-345-355-dating-guide/'], ['ES-330', '/gibson-es-330-dating-guide/'], ['More model guides', '/category/specific-model-highlights/']];

  const followups = (d) => {
    const hidden = new Set();
    if (state.family && state.family !== 'unknown') hidden.add('family');
    if (state.answers.labelKind && state.answers.labelKind !== 'unknown') hidden.add('labelKind');
    const qs = (d.questions || []).filter((q) => !hidden.has(q.key));
    if (!qs.length) return '';
    return `<div class="fu"><p class="fu__title">Narrow it down</p>${qs.map((q) => {
      const val = q.key === 'family' ? (state.model || state.answers.family) : q.key === 'placement' ? location() : state.answers[q.key];
      const control = q.type === 'year'
        ? `<div class="fu__year"><input inputmode="numeric" maxlength="4" placeholder="e.g. 2015" value="${esc(state.answers[q.key] || '')}" data-year="${q.key}" aria-label="${esc(q.label)}"><button type="button" class="pill" data-year-go="${q.key}">Use this year</button></div>`
        : `<div class="fu__opts">${q.options.filter(([v]) => v !== 'unknown').map(([v, t]) => `<button type="button" class="pill${val === v ? ' is-on' : ''}" data-fu="${q.key}" data-v="${esc(v)}">${esc(t)}</button>`).join('')}</div>`;
      return `<div class="fu__q"><p class="fu__label">${esc(q.label)}</p>${control}${q.help ? `<p class="fu__help">${esc(q.help)}</p>` : ''}</div>`;
    }).join('')}</div>`;
  };
  const answerFollowup = (key, value) => {
    if (key === 'family') { setFamily(value); return; }
    if (key === 'placement') {
      const m = { label: ['label'], ink: ['headstock', 'ink'], 'wood-no-usa': ['headstock', 'pressed', 'no'], 'wood-usa': ['headstock', 'pressed', 'yes'], decal: ['headstock', 'decal'] }[value] || [];
      [state.where = null, state.how = null, state.usa = null] = m;
      return;
    }
    // Same answer-reset rules as the current decoder.js follow-up handler.
    if (['artist', 'earlyModel', 'numberKind', 'heritageKind', 'artistStandard', 'slashRun', 'signedPage', 'impressedModel'].includes(key)) {
      state.answers = { family: state.answers.family, artist: state.answers.artist, earlyModel: state.answers.earlyModel, labelKind: state.answers.labelKind };
    }
    if (key === 'evidence') { delete state.answers.documentYear; delete state.answers.documentDecade; }
    state.answers[key] = value;
  };

  const renderResult = (focus) => {
    const d = decode();
    const multi = isMulti(d);
    const bd = breakdown(d);
    const set = XC_SETS[d.href] || (String(d.href).startsWith('#format') || d.href === '#special' ? ['physical', 'logo', 'volute', 'cases'] : ['pots', 'knobs', 'tuners', 'logo', 'neck', 'physical']);
    const hint = state.model && D.hints[state.model];
    const canRefine = !isFon() && !state.model && state.family !== 'vintage';
    setStage(`
      <div class="result">
        <div class="step__top"><button type="button" class="link-btn" data-back>← Back</button><span class="step__count">Your result</span></div>
        ${summaryChips()}
        <div class="res">
          <div class="res__head"><span class="eyebrow">Lookup result</span><span class="badge badge--${TONE(d.certainty)}">${esc(d.certainty)}</span></div>
          <h2 class="res__title" tabindex="-1" data-focus>${esc(d.title)}</h2>
          ${bd ? `<div class="bd" aria-label="How the number reads">${bd}</div>` : ''}
          <div class="res__copy">${d.copy}</div>
          ${resultPhoto(d)}
          ${hint ? `<p class="res__tip"><b>Format tip:</b> ${esc(hint)}</p>` : ''}
          ${followups(d)}
          ${canRefine ? `<details class="refine"${state.specialOpen ? ' open' : ''}><summary>Is it a reissue or special model? Pick it to use its own serial format</summary>${specialPicker(state.model)}</details>` : ''}
          ${state.fonShape ? `<p class="res__alt"><button type="button" class="link-btn" data-toggle-kind>${state.asSerial ? 'Read it as a Factory Order Number instead' : 'Is this a serial number, not a FON? Read it as a serial'}</button></p>` : ''}
          <div class="res__actions">
            <a class="btn btn--gold" href="#gsl-xcheck" data-jump>Cross-check it <span aria-hidden="true">↓</span></a>
            <a class="btn btn--ghost" href="${d.href}">See the matching chart</a>
            <button type="button" class="link-btn" data-again>Look up another number</button>
          </div>
        </div>
      </div>
      <section class="xc" id="gsl-xcheck" aria-labelledby="xc-h">
        <p class="eyebrow">Next step</p>
        <h3 id="xc-h">Now confirm it with the guitar itself</h3>
        <p class="xc__lede">Serial numbers are not always 100 percent accurate${multi ? ', and this one fits more than one year' : ''}. Original parts and construction narrow it down. Start with these:</p>
        ${multi ? `
        <figure class="xc__ex">
          ${img('impressed')}
          <figcaption><span class="eyebrow">Worked example from Joe’s bench</span><strong>846395: 1966 or 1969?</strong>
          <p>This serial number corresponds to 1966 and 1969. We cross-referenced it with the <a href="${LIVE}/gibson-knob-dating-guide/" target="_blank" rel="noopener">knobs</a>, <a href="${LIVE}/gibson-physical-features-hardware-guide/#neck-construction" target="_blank" rel="noopener">neck construction</a>, <a href="${LIVE}/gibson-tuner-dating-guide/" target="_blank" rel="noopener">tuners</a> and <a href="${LIVE}/gibson-headstock-logo-chronology/" target="_blank" rel="noopener">logo</a> to determine that it was a 1966.</p></figcaption>
        </figure>` : ''}
        <div class="xc__grid">${set.map((k, i) => `<a class="xc__card" href="${LIVE}${XC[k][1]}" target="_blank" rel="noopener">
          <span class="xc__media"><img src="${CFG.xc[k] || ''}" alt="" width="480" height="320" loading="lazy" decoding="async"><span class="xc__n">${i + 1}</span></span>
          <span class="xc__body"><strong>${esc(XC[k][0])}</strong><small>${esc(XC[k][2])}</small></span><span class="xc__go" aria-hidden="true">→</span></a>`).join('')}</div>
        <p class="xc__models"><b>Model dating guides:</b> ${MODELS.map(([t, h]) => `<a href="${LIVE}${h}" target="_blank" rel="noopener">${esc(t)}</a>`).join('')}</p>
        <p class="xc__help">Still unsure? <a href="${LIVE}/free-appraisal/gibson/" target="_blank" rel="noopener">Send Joe photos for a free Gibson appraisal →</a></p>
      </section>`, focus);
    const root = stage;
    $('[data-back]', root).addEventListener('click', back);
    $('[data-again]', root).addEventListener('click', () => { state = fresh(); input.value = ''; chip.hidden = true; stage.innerHTML = ''; stage.hidden = true; input.focus(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    $('[data-jump]', root).addEventListener('click', (e) => { e.preventDefault(); $('#gsl-xcheck').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    $('[data-toggle-kind]', root)?.addEventListener('click', () => { state.asSerial = !state.asSerial; state.where = null; render(true); });
    root.querySelectorAll('[data-special]').forEach((b) => b.addEventListener('click', () => { state.specialOpen = true; setFamily(b.dataset.special); render(false); }));
    root.querySelector('.refine')?.addEventListener('toggle', (e) => { state.specialOpen = e.target.open; });
    root.querySelectorAll('[data-fu]').forEach((b) => b.addEventListener('click', () => { answerFollowup(b.dataset.fu, b.dataset.v); const y = scrollY; render(false); window.scrollTo({ top: y }); }));
    root.querySelectorAll('[data-year-go]').forEach((b) => b.addEventListener('click', () => {
      const key = b.dataset.yearGo; const v = $(`[data-year="${key}"]`, root).value.trim();
      state.answers[key] = v; const y = scrollY; render(false); window.scrollTo({ top: y });
    }));
    wireChips(root);
  };

  const render = (focus = true) => {
    stage.hidden = false;
    if (explore) return renderExplore();
    const step = current();
    if (step) renderStep(step, focus); else renderResult(focus);
  };

  const renderExplore = () => {
    setStage(`
      <div class="step">
        <div class="step__top"><button type="button" class="link-btn" data-close>× Close</button><span class="step__count">Finding your number</span></div>
        <h2 class="step__title" tabindex="-1" data-focus>Where to look on a Gibson</h2>
        <p class="step__help">Hover over or tap the numbered spots. Found it? Type it in the box above. Some Gibson guitars do not have a serial number; if yours does not, look inside for a Factory Order Number.</p>
        ${renderMap()}
        <div class="step__foot"><a class="link-btn" href="#find-number">▶ Watch Joe show where to look (1:48)</a></div>
      </div>`);
    wireMap(stage, {});
    $('[data-close]', stage).addEventListener('click', () => { explore = false; stage.innerHTML = ''; stage.hidden = true; input.focus(); });
  };

  // ---------- Start ----------
  const start = (value, preset = {}) => {
    explore = false;
    const raw = normSerial(value);
    errorEl.textContent = '';
    if (!raw) { errorEl.textContent = 'Type the complete serial or Factory Order Number first.'; input.focus(); return; }
    if (!/^[A-Z0-9#]+$/.test(raw) || raw.length > 40) { errorEl.textContent = 'Use the letters and numbers on the stamp. Spaces, hyphens and a # mark are accepted.'; return; }
    state = { ...fresh(), input: value, raw, fonShape: isFonShape(D.clean(value)) };
    if (preset.where) state.where = preset.where;
    if (preset.how) state.how = preset.how;
    if (preset.usa) state.usa = preset.usa;
    if (preset.family) setFamily(preset.family);
    render(true);
  };

  form.addEventListener('submit', (e) => { e.preventDefault(); start(input.value); });
  input.addEventListener('input', () => {
    const s = sniff(input.value);
    chip.hidden = !s;
    if (s) { chip.className = `sniff sniff--${s[0]}`; chip.textContent = s[1]; }
    errorEl.textContent = '';
  });
  document.querySelectorAll('[data-try]').forEach((b) => b.addEventListener('click', () => {
    const preset = JSON.parse(b.dataset.preset || '{}');
    input.value = b.dataset.try;
    input.dispatchEvent(new Event('input'));
    start(b.dataset.try, preset);
    $('#gsl-tool').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  $('#gsl-find-link').addEventListener('click', (e) => { e.preventDefault(); explore = true; render(true); });

  // Expose for testing in the console.
  globalThis.__gibsonLookup = { start, state: () => state, decode: () => decode() };
})();
