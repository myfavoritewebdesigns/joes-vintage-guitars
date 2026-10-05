import { guitarData, lxData, mandolinData, navSolidData, navHplData, navSoData, backpackerData } from '../data/martin-serials';

export type MartinInstrument = 'guitar' | 'lx' | 'backpacker' | 'mandolin' | 'nav-solid' | 'nav-hpl' | 'nav-so';
export interface MartinResult { year: string | null; message: string; }
const lastYear = (rows: { y: string; b: number }[], n: number): MartinResult => {
  const index = rows.findIndex(row => n <= row.b);
  if (index < 0) return { year: null, message: 'This number is higher than the last entry for this instrument. Check the model and ask Martin to confirm the year.' };
  const row = rows[index];
  const previous = rows[index - 1];
  if (previous && Number(row.y) - Number(previous.y) > 1) return { year: `${Number(previous.y) + 1} to ${row.y}`, message: 'Martin’s table skips years within this range, so it can’t give an exact year.' };
  return { year: row.y, message: 'This number matches Martin’s year-end table for the instrument you selected.' };
};

export function lookupMartin(raw: string, type: MartinInstrument): MartinResult {
  const input = raw.trim();
  if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(input)) return { year: null, message: 'Enter the serial’s digits, with or without commas between groups of three digits. Leave out the model name.' };
  const n = Number(input.replaceAll(',', ''));
  if (!Number.isSafeInteger(n) || n < 1) return { year: null, message: 'Enter a positive serial number. Zero is not a valid Martin serial number.' };
  if (type === 'guitar') {
    if (n >= 900001 && n <= 902908) return { year: '1981 to 1982', message: 'Sigma-Martin exception: these numbers were reserved for Sigma-Martins. They do not date a standard Martin to 2002. Confirm the branding and model.' };
    if (n === 8000) return { year: null, message: 'Historical summaries often quote 8000 as Martin’s starting point, but the detailed production table used here begins at 8001 in 1898. Ask Martin to verify a stamp reading exactly 8000.' };
    if (n < 8001) return { year: null, message: 'The regular Martin guitar sequence begins at 8001 in 1898. Check whether this is another instrument type, an early guitar, or a partial number.' };
    const row = guitarData.find(r => n >= r.a && n <= r.b);
    return row ? { year: row.y, message: 'This number matches the regular guitar range for that year. Check the separate model stamp, then compare the guitar’s hardware and construction.' } : { year: null, message: 'This number is higher than 3,043,480, Martin’s last serial for 2025. Ask Martin to confirm the year; this lookup doesn’t estimate a 2026 range.' };
  }
  if (type === 'mandolin') {
    if (n >= 259996 && n <= 260020) return { year: '1976', message: 'This is the documented 1976 mandolin exception, outside the usual mandolin sequence.' };
    if (n >= 509122 && n <= 916759) {
      if (n >= 900001 && n <= 902908) return { year: null, message: 'This interval belongs to the Sigma-Martin exception, not the shared mandolin sequence.' };
      const row = guitarData.find(r => n >= r.a && n <= r.b);
      return { year: row?.y ?? null, message: 'From 1991, Martin used the guitar sequence for mandolins. Production after 1993 was by custom order and ended in 2002. Verify that the instrument is a Martin mandolin.' };
    }
    if (n > 26297) return { year: null, message: 'This number doesn’t match the early mandolin series, the 1976 exception or the later shared guitar sequence. Recheck it with Martin.' };
    return lastYear(mandolinData, n);
  }
  if (type === 'lx' && n <= 41279) return { year: '2005 or earlier', message: 'Martin’s LX table starts with the last serial for 2005. A lower number may be from 2005 or an earlier year.' };
  if (type === 'nav-so') {
    const row = navSoData.find(r => n >= r.a && n <= r.b);
    return row ? { year: row.y, message: row.approximate ? 'The first published group covers 2000 to 2006, so it won’t give you an exact year.' : 'This number matches the Navojoa SO ukulele table.' } : { year: null, message: 'Number not found in the published SO ukulele chart.' };
  }
  return lastYear(type === 'lx' ? lxData : type === 'backpacker' ? backpackerData : type === 'nav-solid' ? navSolidData : navHplData, n);
}
