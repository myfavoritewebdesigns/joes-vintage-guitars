import { guitarData, lxData, mandolinData, navSolidData, navHplData, navSoData, backpackerData } from '../data/martin-serials';

export type MartinInstrument = 'guitar' | 'lx' | 'backpacker' | 'mandolin' | 'nav-solid' | 'nav-hpl' | 'nav-so';
export interface MartinResult { year: string | null; message: string; }
const lastYear = (rows: { y: string; b: number }[], n: number): MartinResult => {
  const index = rows.findIndex(row => n <= row.b);
  if (index < 0) return { year: null, message: 'This number is beyond the published chart for this instrument. Check the model and contact Martin for confirmation.' };
  const row = rows[index];
  const previous = rows[index - 1];
  if (previous && Number(row.y) - Number(previous.y) > 1) return { year: `${Number(previous.y) + 1} to ${row.y}`, message: 'The published table skips intervening years. This interval cannot establish one exact year.' };
  return { year: row.y, message: 'Matched to the published year-end serial table for the selected instrument.' };
};

export function lookupMartin(raw: string, type: MartinInstrument): MartinResult {
  const input = raw.trim();
  if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(input)) return { year: null, message: 'Enter the serial number using digits only, or standard comma grouping. Do not include the model name.' };
  const n = Number(input.replaceAll(',', ''));
  if (!Number.isSafeInteger(n) || n < 1) return { year: null, message: 'Enter a positive serial number. Zero is not a valid Martin serial number.' };
  if (type === 'guitar') {
    if (n >= 900001 && n <= 902908) return { year: '1981 to 1982', message: 'Sigma-Martin exception: these numbers were reserved for Sigma-Martins. They do not date a standard Martin to 2002. Confirm the branding and model.' };
    if (n < 8001) return { year: null, message: 'The regular Martin guitar sequence begins at 8001 in 1898. Check whether this is another instrument type, an early guitar, or a partial number.' };
    const row = guitarData.find(r => n >= r.a && n <= r.b);
    return row ? { year: row.y, message: 'Matched to the regular guitar sequence. The serial establishes the production year; it does not establish the model, originality, or value.' } : { year: null, message: 'Beyond the verified 2025 endpoint of 3,043,480. A later number needs current factory confirmation; this lookup does not project a 2026 year-end range.' };
  }
  if (type === 'mandolin') {
    if (n >= 259996 && n <= 260020) return { year: '1976', message: 'This is the documented 1976 mandolin exception, outside the usual mandolin sequence.' };
    if (n >= 509122 && n <= 916759) {
      if (n >= 900001 && n <= 902908) return { year: null, message: 'This interval belongs to the Sigma-Martin exception, not the shared mandolin sequence.' };
      const row = guitarData.find(r => n >= r.a && n <= r.b);
      return { year: row?.y ?? null, message: 'From 1991, Martin used the guitar sequence for mandolins. Production after 1993 was by custom order and ended in 2002. Verify that the instrument is a Martin mandolin.' };
    }
    if (n > 26297) return { year: null, message: 'Outside the documented early mandolin series, the 1976 exception, and the later shared sequence. Recheck the number with Martin.' };
    return lastYear(mandolinData, n);
  }
  if (type === 'lx' && n <= 41279) return { year: '2005 or earlier', message: 'Martin publishes a 2005 year-end total but no earlier annual boundaries here. A low LX number cannot be assigned to 2005 alone.' };
  if (type === 'nav-so') {
    const row = navSoData.find(r => n >= r.a && n <= r.b);
    return row ? { year: row.y, message: row.approximate ? 'The first published interval covers 2000 to 2006. It does not establish an exact year.' : 'Matched to the Navojoa SO ukulele sequence.' } : { year: null, message: 'Number not found in the published SO ukulele chart.' };
  }
  return lastYear(type === 'lx' ? lxData : type === 'backpacker' ? backpackerData : type === 'nav-solid' ? navSolidData : navHplData, n);
}
