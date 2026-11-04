import histories from './martin-model-history.json';

const summaries: Record<string, { label: string; note: string }> = {
  'd-21': { label: 'D-21 History', note: 'The original run, binding, saddles, neck reinforcement and bridge plates.' },
  'd-28': { label: 'D-28 And D-28S History', note: 'Body joints, bracing, herringbone and the rosewood transition.' },
  'd-35': { label: 'D-35 And D-35S History', note: 'Three-piece backs, lighter bracing and the 12-fret D-35S.' },
  'd-45': { label: 'D-45 History', note: 'Prewar production, inlay changes and the 1968 return.' },
  'om-18': { label: 'OM-18 History', note: 'Early bridges, pickguards, tuners and the 1934 name change.' },
  'om-28': { label: 'OM-28 History', note: 'The original Orchestra Model and its later return.' },
  'om-45': { label: 'OM-45 And Deluxe History', note: 'Standard and Deluxe appointments during the original production run.' },
  'small-early': { label: 'Small And Early Martin History', note: 'Body sizes, style changes, steel strings and 14-fret models.' },
  classical: { label: 'Classical Martin History', note: 'The G, C and N families and their construction changes.' },
  '12-string': { label: 'D12-20 And D12-35 History', note: 'The two 12-string dreadnoughts and their production changes.' },
  tenor: { label: 'Martin Tenor History', note: 'Four-string model families, body joints and production periods.' },
  plectrum: { label: 'Martin Plectrum History', note: 'Long-neck four-string models, OM-18P production and later special orders.' },
  archtop: { label: 'Martin Archtop History', note: 'C, R and F models, soundholes and carved or pressed tops.' },
  electric: { label: 'Martin Electric History', note: 'The E, F and GT families and changes to their designs.' },
};

export const martinModelLinks = Object.fromEntries(histories.map(guide => [guide.key, {
  href: `/post/${guide.slug}/`, ...summaries[guide.key],
}])) as Record<string, { href: string; label: string; note: string }>;
martinModelLinks['d18e-d28e'] = {
  href: '/post/martin-d18e-vs-d28e-authentication-guide/',
  label: 'D-18E And D-28E Identification',
  note: 'Factory electric dreadnought pickups, controls and model differences.',
};

export const martinModelGroups = [
  { title: 'Dreadnoughts', keys: ['d-21', 'd-28', 'd-35', 'd-45'] },
  { title: 'Orchestra Models', keys: ['om-18', 'om-28', 'om-45'] },
  { title: 'Small Bodies, Nylon And Four Strings', keys: ['small-early', 'classical', 'tenor', 'plectrum'] },
  { title: '12-Strings, Archtops And Electrics', keys: ['12-string', 'archtop', 'electric', 'd18e-d28e'] },
];

export const martinSectionModels: Record<string, Record<string, string[]>> = {
  'martin-guitar-dating-guide': {
    'neck-joint-and-frets': ['om-18', 'om-28', 'tenor', 'plectrum'],
    'bridges-and-saddles': ['small-early', 'd-21'],
    pickguards: ['d-28', 'd-35'],
    'trim-and-inlays': ['d-45', 'om-45'],
    'bracing-and-bridge-plates': ['classical', '12-string', 'archtop', 'electric', 'd18e-d28e'],
  },
  'prewar-martin-guitar-guide': {
    'prewar-martin': ['small-early', 'archtop', 'classical'],
    'x-brace-position-and-neck-width': ['d-28'],
    'prewar-necks-and-frets': ['om-18', 'om-28', 'tenor', 'plectrum'],
    'prewar-woods-and-trim': ['d-45', 'om-45'],
  },
};

export const martinSellingModels: Record<string, string[]> = {
  'Martin D-28': ['d-28', 'd-21', 'd-35'],
  'Martin 0 Models': ['small-early'],
  'Martin OM Models': ['om-18', 'om-28', 'om-45'],
  'Martin Style 40, 41, 42 and 45': ['d-45'],
  'Martin Electric Models': ['electric'],
};
