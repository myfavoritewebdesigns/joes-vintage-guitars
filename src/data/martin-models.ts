export const martinBodies = [
  { code: '0', name: 'Concert', detail: 'Smaller than 00 and 000. Compare 12-fret and 14-fret versions separately.' },
  { code: '00', name: 'Grand Concert', detail: 'The middle size in the 0, 00 and 000 family. The characters are zeros.' },
  { code: '000', name: 'Auditorium', detail: 'Larger than 00. Many traditional 14-fret examples have a shorter scale than an OM.' },
  { code: 'OM', name: 'Orchestra Model', detail: 'Shares the familiar 14-fret 000 body outline, usually with a longer scale. Check the exact model.' },
  { code: 'D', name: 'Dreadnought', detail: 'The large body family used by the D-18, D-28 and D-45. Both 12-fret and 14-fret versions exist.' },
  { code: '5', name: 'Size 5 / Terz', detail: 'A very small body seen on the 5-18. Martin historically described Size 5 as a Junior model.' },
  { code: '7', name: 'Size 7 / Small Dreadnought', detail: 'A reduced dreadnought body seen on the 7-28. This number identifies size, not the string count.' },
];

// These are comparison notes, not a list of every factory combination. The
// complete model and its production year determine woods, trim and construction.
export const martinStyles = [
  { code: '15', detail: 'Plain trim and a mahogany top are familiar vintage Style 15 features. Modern 15-series materials vary by model.', compare: 'Look at the top wood, body binding and full model suffix.' },
  { code: '16', detail: 'Specifications vary widely across the vintage Style 16 and later 16 Series. The number alone does not identify the wood.', compare: 'Confirm the year, suffix, neck joint and factory specification.' },
  { code: '17', detail: 'Many 20th-century examples have mahogany tops and modest trim. Other periods include spruce-top versions.', compare: 'Check the top wood and production period before comparing it with Style 15 or 18.' },
  { code: '18', detail: 'Spruce top, mahogany back and sides, and relatively plain trim on familiar vintage steel-string models.', compare: 'Compare the body binding, fingerboard dots and bridge wood for the year.' },
  { code: '21', detail: 'Spruce and rosewood with less ornate trim than Style 28. Rosettes, binding and fingerboard details changed over time.', compare: 'The photographed 1956 000-21 shows a model stamp paired with restrained decoration.' },
  { code: '28', detail: 'Spruce and rosewood with more elaborate trim than Style 21. Early herringbone was followed by other borders.', compare: 'Herringbone also appears on later HD models, so it does not prove a prewar date.' },
  { code: '35', detail: 'The familiar D-35 has a three-piece rosewood back and a bound fingerboard.', compare: 'Check the back seams. The 35 designation does not mean a pearl-bordered body.' },
  { code: '40', detail: 'Pearl details depend on the model and period. An early 40H and a later J-40 do not share every appointment.', compare: 'Check where pearl appears: rosette, fingerboard, headstock or body border.' },
  { code: '41', detail: 'Pearl around the top and rosette on familiar modern examples, without the Style 42 border around the fingerboard extension.', compare: 'Look closely where the fingerboard meets the top.' },
  { code: '42', detail: 'Pearl top trim extends around the fingerboard extension. Fingerboard inlays vary with the period.', compare: 'Check top decoration separately from back and side borders.' },
  { code: '45', detail: 'Pearl decoration extends to the top, back and sides, with elaborate fingerboard and headstock appointments.', compare: 'Photograph the body from every side. The 1976 000-45 in this guide shows a later example.' },
];

export function decodeMartinModel(raw: string) {
  const input = raw.trim().toUpperCase().replace(/\s+/g, '').replace(/^MARTIN/, '');
  if (!input) return { error: 'Enter the model stamp, such as D-28 or 000-18.' };
  if (/^[\d,]+$/.test(input)) return { error: 'That looks like a serial number. Use the serial lookup for the year, then read the separate model stamp.' };
  const match = /^(H)?(000|00|0|OM|D|5|7)-?(15|16|17|18|21|28|35|40|41|42|45)$/.exec(input);
  if (!match || (match[1] && match[2] !== 'D')) return { error: 'This tool covers the basic body and style codes in the tables below. Copy the full stamp, including any suffix, and check that model’s records. CUSTOM, X, LX, Junior and signature names need their own specifications.' };
  const body = martinBodies.find(item => item.code === match[2])!;
  const style = martinStyles.find(item => item.code === match[3])!;
  return { model: `${match[1] || ''}${body.code}-${style.code}`, body, style, herringbone: Boolean(match[1]) };
}
