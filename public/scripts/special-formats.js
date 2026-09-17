// Model-specific recognition. Sources and boundaries: docs/special-format-coverage.md.
// No edition number or single year digit is promoted to a full build year.
(() => {
  const result = (title, copy, certainty = 'More info needed', questions = [], href = '#special') => ({ title, copy, certainty, questions, href });
  const question = (key, label, options, help = '', type = 'select') => ({ key, label, options, help, type });
  const unknown = ['unknown', 'Not sure'];
  const families = [
    unknown, ['vintage', 'Original vintage model, not a later reissue'],
    ['lp-classic', 'Les Paul Classic, 1989 to 2014'],
    ['lp-reissue', 'Historic Les Paul reissue'], ['korina-reissue', 'Historic Korina Flying V or Explorer reissue'],
    ['sg-reissue', 'Impressed SG, Firebird or other reissue'],
    ['es-61-64', '1961 or 1964 ES reissue'], ['es-63', '1963 ES-335 reissue'],
    ['es-58', '1958 ES-335 reissue'], ['es-59', '1959 ES reissue'],
    ['early-reissue', 'Guitar Trader or other early Les Paul reissue'],
    ['heritage-80', 'Heritage Standard 80 or 80 Elite'], ['heritage-v', 'Early-1980s Heritage Korina Flying V'],
    ['heritage-explorer', 'Early-1980s Heritage Korina Explorer'], ['anniversary-25-50', 'Les Paul 25/50 Anniversary'],
    ['centennial', '1994 Centennial Collection limited edition'], ['artist', 'Artist signature model'],
    ['unknown-special', 'Another model or format'],
  ];
  const familyQuestion = question('family', 'Is This a Reissue or Special Model?', families,
    'Short numbers and A-prefix numbers were reused. Check the model name and paperwork; the number alone cannot identify a vintage guitar.');
  const evidenceQuestions = (withYear = false, withDecade = false) => [
    question('evidence', 'What dated evidence matches this guitar and serial?', [
      unknown, ['factory', 'Factory paperwork or Gibson confirmation states the build year'],
      ...(withDecade ? [['decade', 'Matching model records establish the production decade']] : []),
      ['release', 'Only a model release year or an undated COA'], ['sale', 'Only a receipt or sale date'],
    ], 'A release, inspection, shipping or sale date is not automatically the manufacture date.'),
    ...(withYear ? [question('documentYear', 'What build year does that record state?', [], 'Enter the full four-digit year. This is your supplied evidence, not a factory-record search.', 'year')] : []),
  ];
  const check = (copy) => result('Check the Number and Model', copy, 'Check details');
  const unresolved = (name, copy, answers, earliest = 1900, latest = new Date().getFullYear()) => {
    const questions = evidenceQuestions(answers.evidence === 'factory');
    if (answers.evidence === 'factory' && answers.documentYear) {
      const year = Number(answers.documentYear);
      if (!/^\d{4}$/.test(answers.documentYear) || year < earliest || year > Math.min(latest, new Date().getFullYear())) {
        return result('Check the Paperwork Year', `${copy} The supplied year is outside the supported period. Recheck the model and the date on the record.`, 'Conflicting details', questions);
      }
      return result(`${name}: ${year} From Your Record`, `${copy} Your matching record gives <strong>${year}</strong> as the build year. The number itself does not supply that date; this tool has not independently verified the record.`, 'User-supplied year', questions);
    }
    return result(name, `${copy} Match the complete number to dated factory paperwork or ask Gibson to check its records. An undated COA or a release year may identify the edition without dating this instrument.`, 'Date not encoded', questions);
  };
  const yearDigit = (name, digit, sequence, answers, earliest = 1992, latest = new Date().getFullYear(), historic = false, listYears = true) => {
    if (Number(sequence) === 0) return check('An all-zero sequence needs verification against the complete stamp and factory paperwork. No year has been assigned.');
    const candidates = [];
    for (let year = earliest; year <= Math.min(latest, new Date().getFullYear()); year++) if (year % 10 === Number(digit)) candidates.push(year);
    const copy = `${name}. Production-year digit: <strong>${digit}</strong>. Sequence: <strong>${sequence}</strong>. A single digit cannot establish the decade.${historic ? ' Five versus six total digits does not establish a Historic reissue’s decade.' : ''}`;
    const questions = evidenceQuestions(answers.evidence === 'factory', true);
    if (answers.evidence === 'decade') {
      const decades = [...new Set(candidates.map(year => Math.floor(year / 10) * 10))];
      questions.push(question('documentDecade', 'Which production decade do those records establish?', [unknown, ...decades.map(decade => [String(decade), `${decade}s`])], 'Use a documented production decade for this model and guitar. Wear, serial length and purchase date alone are not enough.'));
      if (answers.documentDecade && answers.documentDecade !== 'unknown') {
        const year = Number(answers.documentDecade) + Number(digit);
        if (!decades.includes(Number(answers.documentDecade)) || !candidates.includes(year)) return result('Check the Documented Decade', `${copy} The supplied decade does not fit this format’s supported period.`, 'Conflicting details', questions);
        return result(`${name}: ${year}`, `${copy} With your documented <strong>${answers.documentDecade}s</strong> production decade, the digit reads as <strong>${year}</strong>. The decade is supplied by you, not independently verified by this tool.`, 'Year matches your record', questions);
      }
    }
    if (answers.evidence === 'factory' && answers.documentYear) {
      const year = Number(answers.documentYear);
      if (!/^\d{4}$/.test(answers.documentYear) || !candidates.includes(year)) return result('Serial and Paperwork Disagree', `${copy} The supplied year does not fit this year digit and supported period. Recheck the serial, model and record before assigning a year.`, 'Conflicting details', questions);
      return result(`${name}: ${year}`, `${copy} Your supplied build-year record gives <strong>${year}</strong>, which agrees with the digit. This is a match to your evidence, not independent verification.`, 'Year matches your record', questions);
    }
    return result(`${name}: Year Ends in ${digit}`, candidates.length ? `${copy}${listYears ? ` Years with this digit in the checked period: <strong>${candidates.join(', ')}</strong>.` : ''} Model records are needed to establish the production decade. Serial length alone does not establish it.` : `${copy} This digit does not fit the documented edition period. Check the exact model and records; another edition needs its own numbering rule.`, candidates.length ? 'Decade unresolved' : 'Conflicting details', questions);
  };
  const withQuestions = (value, questions) => ({ ...value, questions: [...questions, ...(value.questions || [])] });
  const edition = (name, sequence, answers, extra = '', earliest = 1990, latest = new Date().getFullYear()) => unresolved(name,
    `Edition sequence: <strong>${sequence}</strong>. This number does not encode a production date. ${extra}`, answers, earliest, latest);

  const artistOptions = [unknown,
    ['page', 'Jimmy Page Number One'], ['ace', 'Ace Frehley 1997 Custom run'],
    ['slash', 'Slash older Custom Shop model'], ['perry', 'Joe Perry trans-black or Boneyard'],
    ['frampton-custom', 'Peter Frampton Les Paul Custom'], ['frampton-special', 'Peter Frampton Les Paul Special'],
    ['gibbons', 'Billy Gibbons original Pearly Gates run'], ['allman', 'Duane Allman Cherry Sunburst run'],
    ['clapton', 'Eric Clapton Beano'], ['other', 'Another artist edition, including later releases'],
  ];
  const artistQuestion = question('artist', 'Which artist edition is named on the guitar or COA?', artistOptions,
    'An artist may have several editions with different numbering. Choose the exact model, not just the artist’s name.');
  const artistRules = {
    page: [ [/^PAGE(\d{3})$/, 'Jimmy Page Number One Aged', 150], [/^JPP(\d{3})$/, 'Jimmy Page Custom Authentic', null] ],
    ace: [ [/^ACE(\d{3})$/, 'Ace Frehley Custom Run', null] ],
    slash: [ [/^SL(\d{3})$/, 'Slash Custom Shop', null] ],
    perry: [ [/^JP(\d{3})$/, 'Joe Perry 1996 Custom Shop Trans-Black Edition', null], [/^BONE(\d{3})$/, 'Joe Perry Boneyard', null] ],
    'frampton-custom': [ [/^PF(\d{3})$/, 'Peter Frampton Les Paul Custom', null] ],
    gibbons: [ [/^BG(\d{3})$/, 'Pearly Gates VOS', 250], [/^GIBBONS(\d{3})$/, 'Pearly Gates Aged', 50] ],
    allman: [ [/^DA59(\d{3})$/, 'Duane Allman Cherry Sunburst VOS', 150], [/^ALLMAN(\d{3})$/, 'Duane Allman Cherry Sunburst Aged', 150] ],
    clapton: [ [/^EC(\d{3})$/, 'Eric Clapton Beano VOS', 350], [/^CLAPTON(\d{3})$/, 'Eric Clapton Beano Aged', 95], [/^ERICCLAPTON#?(\d{1,2})$/, 'Eric Clapton Beano Signed', 55] ],
  };
  const decodeArtist = (raw, answers, standard) => {
    if (/^\d{8,9}$/.test(raw)) {
      const q = question('artistStandard', 'Does this edition use a regular Gibson USA serial?', [unknown, ['usa', 'Yes, it is a regular Gibson USA serial'], ['other', 'Custom Shop, reissue or not confirmed']]);
      if (answers.artistStandard === 'usa') return withQuestions(standard(raw, 'unknown'), [q]);
      return result('Confirm the Artist Model’s Numbering', 'Some artist models use ordinary USA serials. Confirm the division and numbering system before applying that date formula.', 'Model needed', [q]);
    }
    const questions = [artistQuestion];
    if (!answers.artist || answers.artist === 'unknown') return result('Which Artist Edition Is This?', 'The prefix may identify an artist run, but the model and edition must agree. A short hand-written number alone cannot identify an artist.', 'Model needed', questions);
    if (answers.artist === 'other') return withQuestions(unresolved('Artist Edition Needs Checking', 'This edition does not have a verified numbering rule in this tool. Keep its complete prefix, numbers and any hand-written wording.', answers), questions);
    if (answers.artist === 'frampton-special') {
      const match = /^PF(\d)(\d{3})$/.exec(raw);
      const value = match && Number(match[2]) > 0 ? yearDigit('Frampton Les Paul Special', match[1], match[2], answers, 2005, new Date().getFullYear(), false, false) : check('The documented Special format is PF, one year digit and three sequence digits. Other Frampton editions need their own numbering check.');
      if (match) value.copy += ' The 2006 introduction is not a rule that every Special was built in 2006; a documented 2005 prototype also exists. Confirm any prototype or later production claim with matching factory records.';
      return withQuestions(value, questions);
    }
    if (answers.artist === 'page' && /^#?\d{1,2}$/.test(raw)) {
      const q = question('signedPage', 'Is this the hand-numbered, signed Jimmy Page Number One edition?', [unknown, ['yes', 'Yes, confirmed by the matching COA'], ['no', 'No or a different Page edition']]);
      questions.push(q);
      const sequence = raw.replace('#', '');
      if (answers.signedPage === 'yes' && Number(sequence) >= 1 && Number(sequence) <= 26) return withQuestions(edition('Jimmy Page Number One Signed', sequence, answers, Number(sequence) === 1 ? 'The launch account says Page retained number 1. This number needs artist-retained provenance verification, not just a generic signed-edition COA.' : 'The launch account numbers the 25 public signed guitars 2 to 26, although older serial FAQs say 1 to 25. Check the actual number and matching provenance.', 2004), questions);
      return result('Confirm the Signed Edition', 'The launch account describes 25 public signed Number One guitars numbered 2 to 26, with number 1 retained by Page. Older serial FAQs give 1 to 25. A bare number cannot establish the edition or a year.', 'Model needed', questions);
    }
    for (const [pattern, name, maximum] of artistRules[answers.artist] || []) {
      const match = pattern.exec(raw);
      if (!match) continue;
      if (!Number(match[1]) || (maximum && Number(match[1]) > maximum)) return withQuestions(check('This number is outside the documented edition range. Check the complete stamp and COA. That is not an authenticity verdict.'), questions);
      if (answers.artist === 'slash') {
        questions.push(question('slashRun', 'Which Slash Custom model do the guitar and paperwork identify?', [unknown, ['cranberry', 'Cranberry model introduced in 1997'], ['later', 'Regular model introduced in 2004']]));
      }
      const extra = answers.artist === 'slash' ? 'The SL prefix was shared by the 1997 cranberry and 2004-introduced models; neither release year is a decoded build year.'
        : answers.artist === 'allman' ? `${raw.startsWith('DA59') ? 'The 59 identifies the model being recreated, not the manufacture year. ' : ''}The Hot ’Lanta edition is a different run.`
        : answers.artist === 'gibbons' ? `${raw.startsWith('GIBBONS') ? 'GIBBONS is reported on an aged specimen, not a verified universal prefix for all aged or signed guitars. ' : ''}The aged-and-signed edition needs individual verification; a signed COA alone does not mean the guitar was signed. This reading is for the original run, not the later Collector’s Edition.` : '';
      const earliest = raw.startsWith('BONE') ? 2003 : answers.artist === 'slash' && answers.slashRun === 'later' ? 2004 : { ace: 1997, allman: 2013, gibbons: 2009, clapton: 2010, perry: 1996, page: 2004, slash: 1997 }[answers.artist] || 1990;
      return withQuestions(edition(name, match[1], answers, extra, earliest), questions);
    }
    return withQuestions(check('The number does not match a documented pattern for the selected edition. Check the full prefix, sequence and model name. Different widths, pilot runs and later editions need individual verification.'), questions);
  };

  const decodeModel = (raw, model, answers, standard, carved) => {
    if (model === 'artist') return decodeArtist(raw, answers, standard);
    if (model === 'cs') {
      const match = /^CS(\d)(\d{3,5})$/.exec(raw);
      return match ? yearDigit('Custom Shop', match[1], match[2], answers, 1993, new Date().getFullYear(), false, false) : check('The supported CS format has one year digit and a three- to five-digit sequence after CS. Longer examples do not turn the first two digits into a full year; check other lengths against the paperwork.');
    }
    if (model === 'lp-reissue' || model === 'korina-reissue') {
      const match = /^([4567890])(\d)(\d{3,4})$/.exec(raw);
      if (!match || (model === 'korina-reissue' && match[1] !== '8')) return check('This Historic format needs a model-year digit, one build-year digit and a three- or four-digit sequence. The documented 1958 Korina model digit is 8.');
      const modelYear = match[1] === '0' ? '1960' : `195${match[1]}`;
      return yearDigit(`${modelYear} ${model === 'korina-reissue' ? 'Korina Reissue' : 'Les Paul Reissue'}`, match[2], match[3], answers, 1992, new Date().getFullYear(), true);
    }
    if (model === 'sg-reissue') {
      const match = /^(\d)(\d{4})([1234578])$/.exec(raw);
      if (!match || !Number(match[2])) return check('The supported impressed reissue formats have six digits and a documented final model code. Other formats need individual checking.');
      const current = { 1: ['1961 SG Standard', 'sg-standard'], 2: ['1962 SG Standard or Custom', 'sg-both'], 3: ['1963 SG or Firebird', 'sg-firebird'], 4: ['1964 SG Standard', 'sg-standard'], 5: ['1965 Non-Reverse Firebird', 'firebird-other'], 7: ['1967 Flying V', 'v'], 8: ['1968 Les Paul Custom or Standard', 'lp'] }[match[3]];
      const legacy = { 1: ['SG Custom or Special', 'sg-custom'], 2: ['SG Standard', 'sg-standard'], 3: ['1963 Firebird I', 'firebird-1'], 4: ['1964 Firebird III', 'firebird-3'], 5: ['1965 Firebird V or VII', 'firebird-5'], 8: ['1968 Les Paul Custom', 'lp'] }[match[3]];
      const prefix = Number(raw.slice(0, 2));
      const oldYear = prefix >= 97 ? 1900 + prefix : 2000 + prefix;
      const hasOld = legacy && oldYear >= 1997 && oldYear <= Math.min(2020, new Date().getFullYear()) && Number(raw.slice(2, 5)) > 0;
      const modelQuestion = question('impressedModel', 'Which model is named on the guitar or COA?', [unknown, ['sg-standard', 'SG Standard'], ['sg-custom', 'SG Custom or Special'], ['firebird-1', 'Firebird I'], ['firebird-3', 'Firebird III'], ['firebird-5', 'Firebird V or VII'], ['firebird-other', 'Another Firebird'], ['v', 'Flying V'], ['lp', 'Les Paul Custom or Standard']]);
      const fits = tag => !answers.impressedModel || answers.impressedModel === 'unknown' || tag === answers.impressedModel || (tag === 'sg-both' && answers.impressedModel.startsWith('sg-')) || (tag === 'sg-firebird' && /^(sg-|firebird-)/.test(answers.impressedModel)) || (tag === 'firebird-other' && answers.impressedModel.startsWith('firebird-'));
      const readings = [];
      if (answers.reissueEra !== 'legacy' && fits(current[1])) for (let year = 2021; year <= new Date().getFullYear(); year++) if (year % 10 === Number(match[1])) readings.push({ year, name: current[0] });
      if (answers.reissueEra !== 'current' && hasOld && fits(legacy[1])) {
        readings.push({ year: oldYear, name: legacy[0] });
        // Dealer specimens establish that 00 to 09 were reused in the 2010s.
        // 00 in 2020 is a reported continuation, not a factory-confirmed cutoff.
        if (prefix < 10) for (const year of [oldYear + 10, oldYear + 20]) if (year <= Math.min(2020, new Date().getFullYear())) readings.push({ year, name: legacy[0] });
      }
      const copy = `Gibson publishes both an earlier two-position year format and a later single-year-digit format, with different final model codes. In the later model-code table, the final digit identifies <strong>${current[0]}</strong>, year ending <strong>${match[1]}</strong>.${hasOld ? ` The literal older year-prefix reading is <strong>${oldYear}</strong> for <strong>${legacy[0]}</strong>.${prefix < 10 ? ' Prefixes 00 to 09 also occur on 2010s guitars, so a leading zero does not prove the 2000s. The reported repetition includes 2020 for 00, but that boundary needs factory confirmation.' : oldYear >= 2010 ? ' That literal 2010s interpretation is not confirmed production evidence; observed 2010s examples reuse 00 to 09 instead.' : ''}` : ''} These are possible interpretations, not a verified universal changeover date. Later single-digit candidates here begin in 2021; conflicting transition-era records need individual checking.`;
      const eraQuestion = question('reissueEra', 'Which Year Format Do the Guitar’s Records Identify?', [unknown, ['legacy', 'Earlier two-position year format'], ['current', 'Later single-year-digit format']], 'Do not choose from the suggested year alone. Model codes, matching factory paperwork and Gibson confirmation help separate the systems; an aged-looking finish does not.');
      const questions = [modelQuestion, eraQuestion, ...evidenceQuestions(answers.evidence === 'factory')];
      if (answers.evidence === 'factory' && answers.documentYear) {
        const matches = readings.filter(item => item.year === Number(answers.documentYear));
        if (!/^\d{4}$/.test(answers.documentYear) || !matches.length) {
          const year = Number(answers.documentYear);
          const couldBeTransition = /^\d{4}$/.test(answers.documentYear) && year >= 1997 && year <= new Date().getFullYear() && ((fits(current[1]) && year % 10 === Number(match[1])) || (legacy && fits(legacy[1]) && raw[0] === '0' && year % 10 === Number(raw[1])));
          return result(couldBeTransition ? 'Check the Model and Transition-Era Records' : 'Serial and Paperwork Disagree', `${copy} ${couldBeTransition ? 'The supplied year falls outside the interpretations listed here but agrees with a year digit. Have Gibson verify the exact model and numbering system; this tool cannot reject or confirm that transition from the number alone.' : 'The supplied build year does not agree with the remaining readings.'}`, couldBeTransition ? 'Manual verification' : 'Conflicting details', questions);
        }
        return result(`Impressed Reissue: ${answers.documentYear}`, `${copy} Your supplied build year <strong>${answers.documentYear}</strong> agrees with the ${[...new Set(matches.map(item => item.name))].join(' or ')} reading. This matches your evidence; the record has not been independently verified.`, 'Year matches your record', questions);
      }
      if (!readings.length) return result('Model and Numbering Disagree', `${copy} No reading fits the selected model, production period and current year. Check the complete model name and serial.`, 'Conflicting details', questions);
      if (answers.impressedModel && answers.impressedModel !== 'unknown' && new Set(readings.map(item => item.year)).size === 1) {
        return result(`Impressed Reissue: Possible ${readings[0].year}`, `${copy} With the selected model and format, the remaining interpretation gives <strong>${readings[0].year}</strong>. Confirm the production period from matching factory records before using that date.`, 'Possible format match', questions);
      }
      return result('Impressed Reissue: Confirm the Year Format', `${copy} Years still possible with the selected details: <strong>${[...new Set(readings.map(item => item.year))].sort().join(', ')}</strong>. Confirm the exact model and dated factory record before choosing a reading.`, 'Year format unresolved', questions);
    }
    if (model === 'es-61-64') {
      const match = /^1(\d)(\d{4})$/.exec(raw);
      return match ? yearDigit('1961 or 1964 ES Reissue', match[1], match[2], answers, 1995) : check('This ES reissue reading requires six digits beginning with 1. Five-digit Heritage Explorer numbers and numeric 1963 ES reissues do not use this formula.');
    }
    if (['es-58', 'es-59', 'es-63'].includes(model)) {
      const code = { 'es-58': '8', 'es-59': '9', 'es-63': '3' }[model];
      const match = new RegExp(`^A${code}(\\d)(\\d{${model === 'es-63' ? '3' : '3,4'}})$`).exec(raw);
      if (match) return yearDigit({ 'es-58': '1958 ES-335 Reissue', 'es-59': '1959 ES Reissue', 'es-63': '1963 ES-335 Reissue' }[model], match[1], match[2], answers, 1995);
      if (model === 'es-63') return unresolved('1963 ES-335: Format Needs Checking', 'Some Memphis 1963 ES-335 reissues use numeric serials that do not follow the documented A3 format. This tool does not assign a year from that numeric pattern.', answers, 1995);
      return check(`This selected ES format begins A${code}, followed by a year digit and its sequence. Recheck the prefix and model.`);
    }
    if (model === 'carved-top') {
      const period = question('carvedPeriod', 'What Production Period Do the Model and Records Support?', [unknown, ['1990s', '1990s'], ['2000s', '2000 to 2009'], ['later', '2010 or later']], 'A leading 2 does not supply a complete decade after 2009. Do not choose a period just because the decoder suggests a year.');
      return withQuestions(carved(raw, answers), [period]);
    }
    if (model === 'lp-classic') {
      if (!/^\d{4,6}$/.test(raw)) return check('The documented 1989 to 2014 Les Paul Classic format has four, five or six digits.');
      let year;
      if (raw.length === 4 && raw[0] === '9') year = 1989;
      else if (raw.length === 5) year = raw[0] === '9' ? '1989 or 1999' : 1990 + Number(raw[0]);
      else if (raw.length === 6 && Number(raw.slice(0, 2)) <= 14) year = 2000 + Number(raw.slice(0, 2));
      if (!year) return check('This number does not fit the documented Classic year and digit-count rules. Confirm it is a Les Paul Classic, not a Historic or another reissue.');
      if (year === '1989 or 1999') {
        const q = question('classicYear', 'Which Year Is Supported by the Guitar’s Records?', [unknown, ['1989', '1989'], ['1999', '1999']], 'A five-digit Classic serial beginning with 9 can fit either year. Do not choose from digit count alone.');
        const confirmed = ['1989', '1999'].includes(answers.classicYear);
        return result(confirmed ? answers.classicYear : year, `On a confirmed Les Paul Classic, <strong>${raw}</strong> can mean 1989 or 1999. The four- and five-digit year-prefix system spans both years.${confirmed ? ` Your supplied records select <strong>${answers.classicYear}</strong>; the tool has not independently verified them.` : ' Use matching records to separate them.'}`, confirmed ? 'Year matches your record' : 'Two possible years', [q]);
      }
      return result(String(year), `On the selected Les Paul Classic model, <strong>${raw}</strong> reads as <strong>${year}</strong>. This Classic-specific digit-count rule does not apply to Historic reissues.`, 'Year decoded');
    }
    if (model === 'collectors-choice') {
      const match = /^CC(\d{1,2})([A-Z])(\d{3})$/.exec(raw);
      if (!match || !Number(match[1]) || !Number(match[3])) return check('Check the complete CC model number, letter and edition sequence. Unusual widths or zero numbers need verification against the COA.');
      const known = { '1A': 'Gary Moore Butterscotch Aged, with a Gary Moore-signed COA', '1V': 'Melvyn Franks Butterscotch VOS', '9A': 'Believer Burst, aged' };
      const mapping = known[`${Number(match[1])}${match[2]}`];
      return edition(`Collector’s Choice #${Number(match[1])}`, match[3], answers,
        `${match[1].length === 1 ? 'The usual guitar stamp has two model digits, such as 01 or 09. Check whether a leading zero was omitted in the transcription or COA; this is a provisional identification. ' : ''}${mapping ? `Documented model and variant: <strong>${mapping}</strong>.` : `Letter: <strong>${match[2]}</strong>. This model and letter combination is not verified in this tool; check its name on the COA.`}`, Number(match[1]) === 9 && mapping ? 2013 : 2010);
    }
    if (model === 'centennial') {
      const match = /^(\d{4})(0?[1-9]|1[0-4])$/.exec(raw);
      if (!match || Number(match[1]) < 1894 || Number(match[1]) > 1994) return check('The special Centennial Collection uses a commemorative number from 1894 to 1994 plus an issue suffix. Ordinary eight-digit 94-prefix serials belong in the standard decoder.');
      const names = { 4: 'Les Paul Classic Goldtop', 12: 'Les Paul Standard', 13: 'Les Paul Custom' };
      return unresolved('1994 Centennial Collection', `Commemorative number: <strong>${match[1]}</strong>. Issue suffix: <strong>${match[2]}</strong>${names[Number(match[2])] ? ` (${names[Number(match[2])]}, as identified in the reviewed collection reference)` : ''}. The suffix is not a reliable production month, and the commemorative number is not a build year. No edition position is calculated because published production counts disagree.`, answers, 1994);
    }
    if (['early-reissue', 'heritage-80', 'anniversary-25-50'].includes(model)) {
      const early = model === 'early-reissue';
      const earlyQuestions = early ? [question('earlyModel', 'Which Early Les Paul Reissue Is Confirmed?', [unknown, ['guitar-trader', 'Gibson-made Guitar Trader reissue'], ['regular-83-93', 'Regular Les Paul Reissue, 1983 to early 1993'], ['leos', 'Leo’s dealer reissue'], ['other', 'Another early reissue or not confirmed']], 'These models do not share one dating rule. Confirm the exact model before reading a vintage-looking headstock number.')] : [];
      if (early && answers.earlyModel === 'regular-83-93') {
        const match = /^(\d)(\d{4})$/.exec(raw);
        if (!match || !Number(match[2])) return withQuestions(check('The supported regular 1983 to early 1993 Les Paul Reissue stamp has a year digit followed by four sequence digits. Other widths or dealer editions need individual verification.'), earlyQuestions);
        const candidates = [1980 + Number(match[1]), 1990 + Number(match[1])].filter(year => year >= 1983 && year <= 1993);
        const questions = [...earlyQuestions, ...evidenceQuestions(answers.evidence === 'factory')];
        const copy = `On the confirmed regular Les Paul Reissue made from 1983 to early 1993, the first digit is the actual build-year digit, not the 1959 model year. Sequence: <strong>${match[2]}</strong>. This rule does not apply to Guitar Trader, Leo’s, Historic or original 1950s guitars.`;
        if (answers.evidence === 'factory' && answers.documentYear) {
          if (!/^\d{4}$/.test(answers.documentYear) || !candidates.includes(Number(answers.documentYear))) return result('Serial and Paperwork Disagree', `${copy} The supplied build year does not fit this model’s year digit and production period.`, 'Conflicting details', questions);
          return result(`Les Paul Reissue: ${answers.documentYear}`, `${copy} Your supplied matching record selects <strong>${answers.documentYear}</strong>; this tool has not independently verified it.`, 'Year matches your record', questions);
        }
        return result(`Les Paul Reissue: ${candidates.join(' or ')}`, `${copy}${candidates.length > 1 ? ' A leading 3 can mean 1983 or early 1993. Matching factory records must separate them.' : ` With this exact model confirmed, the digit reads as <strong>${candidates[0]}</strong>.`}`, candidates.length > 1 ? 'Two possible years' : 'Year decoded', questions);
      }
      const name = { 'early-reissue': 'Early Les Paul Reissue', 'heritage-80': 'Heritage Standard 80 / 80 Elite', 'anniversary-25-50': 'Les Paul 25/50 Anniversary' }[model];
      const q = question('numberKind', early ? 'Which number have you entered?' : 'Is this the eight-digit serial or the separate edition number?', [unknown,
        ['dated', early ? 'The separate eight-digit stamp on the control-cavity rim' : 'The normal eight-digit headstock serial'],
        ['edition', early ? 'The vintage-style headstock stamp' : 'The separate four-digit edition number'],
      ], early ? 'Gibson-made Guitar Traders have a separate cavity serial; only some other early reissues do. Nashville-made Leo’s examples may not. Do not disturb wiring to look for a number.' : 'These models carry a normal serial as well as an edition number. Enter each separately, not joined together.');
      const numberQuestions = [...earlyQuestions, q];
      if (answers.numberKind === 'dated') {
        if (!/^\d{8}$/.test(raw)) return withQuestions(check('Enter the separate eight-digit serial in the main box. Do not combine it with the edition number.'), numberQuestions);
        const decoded = standard(raw, 'wood-usa');
        // Refuse a plausible date in the wrong era; do not turn a mismatched model into certainty.
        const year = Number(decoded.title);
        const plausible = early ? year >= 1978 && year <= 1993 : model === 'heritage-80' ? year >= 1980 && year <= 1982 : year >= 1978 && year <= 1979;
        if (!plausible || decoded.certainty !== 'Format match') return withQuestions(check('The number does not give a valid date within this model’s usual production period. A later sale date or unusual instrument needs records; recheck the number and model.'), numberQuestions);
        return withQuestions({ ...decoded, copy: `${name}: the separate date-coded serial reads as follows. ${decoded.copy}`, certainty: 'Year decoded' }, numberQuestions);
      }
      if (answers.numberKind === 'edition' && !early && !/^\d{4}$/.test(raw)) return withQuestions(check('The selected edition number should have four digits. If you have eight digits, choose the normal serial instead; do not join the two numbers.'), [q]);
      return withQuestions(unresolved(name, early ? 'An early reissue’s headstock number can imitate a vintage serial. It does not establish 1959 or identify Guitar Trader by itself. Use the separate cavity serial on a confirmed Gibson-made Guitar Trader. Other early models do not all have it; select the regular 1983 to early 1993 Reissue above only if that exact model is confirmed.' : 'The four-digit edition number does not supply a build date. Use the separate eight-digit serial when it is available.', answers, early ? 1978 : model === 'heritage-80' ? 1980 : 1978, early ? 1993 : model === 'heritage-80' ? 1982 : 1979), numberQuestions);
    }
    if (model === 'heritage-v' || model === 'heritage-explorer') {
      const q = question('heritageKind', 'Which numbering is present on this Heritage guitar?', [unknown, ['edition', 'The short Heritage production identifier'], ['dated', 'A normal eight-digit serial']]);
      if (answers.heritageKind === 'dated') {
        if (!/^\d{8}$/.test(raw)) return withQuestions(check('Enter the complete eight-digit serial, not the shorter production identifier.'), [q]);
        const decoded = standard(raw, 'wood-usa');
        if (Number(decoded.title) < 1981 || Number(decoded.title) > 1984 || decoded.certainty !== 'Format match') return withQuestions(check('That date does not fit the usual early-1980s Heritage period. Confirm the model and serial with its records.'), [q]);
        return withQuestions(decoded, [q]);
      }
      const match = (model === 'heritage-v' ? /^[A-K]\d{3}$/ : /^1\d{4}$/).test(raw);
      if (!match) return result('Check the Heritage Numbering', 'The reference-listed identifiers are A to K plus three digits in a grouped Flying V/Moderne/Chet Atkins entry, or 1 plus four digits specifically for the Heritage Explorer. Other identifiers need individual model verification.', 'Check details', [q]);
      return withQuestions(unresolved(model === 'heritage-v' ? 'Heritage Korina Flying V' : 'Heritage Korina Explorer', `This short production identifier does not encode a year. It points to an early-1980s Heritage format only with the model confirmed. ${model === 'heritage-v' ? 'The A to K reference groups several models; it does not prove that every letter was used on Flying Vs. The letters are not a year-by-year dating key.' : 'The Gibson-hosted reference identifies the Explorer’s 1 plus four digits as a production number, not a date.'}`, answers, 1981, 1984), [q]);
    }
    return unresolved('Model or Format Not Listed', 'Do not apply a similar-looking serial rule to this guitar. Check its full model name, complete stamp, interior labels and paperwork.', answers);
  };

  const resolve = ({ raw, model, location, answers = {}, standard, carved }) => {
    let selected = model;
    let questions = [];
    if (!selected) {
      if (/^CS/.test(raw)) selected = 'cs';
      else if (/^CC/.test(raw)) selected = 'collectors-choice';
      else if (/^(PAGE|JPP|JP|BONE|ACE|AFB|SL|PF|BG|GIBBONS|DA|ALLMAN|EC|CLAPTON|ERICCLAPTON)/.test(raw)) selected = 'artist';
      else if (/^#?\d{1,6}$/.test(raw) || /^A\d+$/.test(raw) || /^[B-K]\d{3}$/.test(raw)) {
        questions = [familyQuestion];
        selected = answers.family;
        if (!selected || selected === 'unknown') {
          if (['label', 'ink', 'wood-no-usa', 'wood-usa', 'decal'].includes(location) && (/^\d{1,6}$/.test(raw) || /^A\d+$/.test(raw))) selected = 'vintage';
          else return result('Confirm the Model Before Dating', 'This number can fit more than one Gibson system. Choose the model family or select the number’s location to get a preliminary vintage-chart reading.', 'Model needed', questions);
        }
      }
    }
    if (selected === 'vintage') {
      let placement = location;
      if (placement === 'unknown') {
        questions.push(question('placement', 'Where and How Is the Number Applied?', [unknown, ['label', 'On an interior paper label'], ['ink', 'Ink-stamped on the headstock'], ['wood-no-usa', 'Pressed into wood, no Made in USA'], ['wood-usa', 'Pressed into wood, with Made in USA'], ['decal', 'Rear-headstock decal']]));
        placement = answers.placement || 'unknown';
      }
      if (placement === 'unknown') return result('Check the Number’s Location', 'Confirm the number’s location and application to choose the vintage chart.', 'Location needed', questions);
      const aPrefix = /^A\d+$/.test(raw);
      if (placement === 'label' && !aPrefix) {
        questions.push(question('labelKind', 'Is This an Older White Oval Label?', [unknown, ['white', 'Yes, an older white oval label'], ['orange', 'Orange label'], ['other', 'Another label or a later replacement']], 'The preliminary numeric-label result uses the early white-label chart. A modern or replacement label needs a different model-specific check.'));
        if (['orange', 'other'].includes(answers.labelKind)) return result('Check the Label and Model', 'This label is not confirmed as an original early white label. Use the model-specific format or have the complete label checked.', 'Label needed', questions);
        if (!/^\d{1,5}$/.test(raw)) return withQuestions(check('The early numeric white-label sequence runs from 1 to 99999. Recheck the number and model; longer numbers need another format.'), questions);
      }
      if (aPrefix && !['label', 'ink', 'wood-no-usa'].includes(placement)) return withQuestions(check('The vintage A-series occurs on interior labels and occasionally on headstocks. A decal or Made in USA stamp needs a separate model and format check.'), questions);
      if (placement === 'ink' && !aPrefix && !/^\d{5,6}$/.test(raw)) return withQuestions(check('This does not match the usual five- or six-digit vintage ink-stamp pattern. Recheck the number and model.'), questions);
      const value = standard(raw, placement);
      const preliminary = !model && (!answers.family || answers.family === 'unknown') || (placement === 'label' && !aPrefix && answers.labelKind !== 'white');
      const needsPreliminaryNote = preliminary && !(value.href === '#reused' && /^\d{4}$/.test(value.title));
      return withQuestions({ ...value, preliminary, copy: value.copy + (needsPreliminaryNote ? ' This is a preliminary vintage-chart reading. If this is a reissue, Classic or special model, choose it below before using the date.' : '') }, questions);
    }
    if (selected) return withQuestions(decodeModel(raw, selected, answers, standard, carved), questions);
    return standard(raw, location);
  };
  globalThis.GibsonSpecialFormats = { resolve };
})();
