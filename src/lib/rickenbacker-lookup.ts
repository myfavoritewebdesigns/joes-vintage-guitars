export interface RickenbackerResult { title:string; message:string; href:string; link:string; invalid?:boolean; }
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
const lateMonths='MNPRSTUVWXYZ';
const manual=(message:string):RickenbackerResult=>({title:'Check The Instrument And Serial',message,href:'#serial-charts',link:'Compare The Serial Formats'});
const invalid=(message:string):RickenbackerResult=>({...manual(message),title:'Check Your Serial Number',invalid:true});
const dated=(title:string,message:string):RickenbackerResult=>({title,message:message+' Check the model and installed features before judging originality.',href:'#dating-guides',link:'Compare The Feature Guides'});

/** Guitar/bass formats, verified against the maker's published decoder in October 2026.
 * Early model-specific numbers, reused prefixes and replacement plates need context.
 * Do not silently turn punctuation or incomplete stamps into successful dates.
 */
export function lookupRickenbacker(raw:string, currentYear=new Date().getFullYear()):RickenbackerResult {
 const serial=raw.trim().toUpperCase().replace(/[\s-]/g,'');
 if(!serial)return invalid('Enter the complete serial, including letters and digits from both parts of the stamp.');
 if(!/^[A-Z0-9]+$/.test(serial))return invalid('Use letters and digits. Spaces and hyphens may separate the stamped groups; other punctuation needs to be checked.');
 if(/^Z\d+$/.test(serial))return manual('A Z prefix followed by digits can identify a replacement plate. Z also appears in the late-1990s month chart. Confirm the plate and instrument before assigning a date.');
 if(/^XX\d+$/.test(serial))return manual('XX is not a regular guitar year-and-month pair. It can resemble an amplifier code or an unusual plate. This lookup covers guitars and basses; compare the whole instrument.');
 if(/^(?:[468]C|(?:65|85)C|[23](?:L)?[TVR]|B\d{4}$|V\d{2,4}$|C\d{3,4}$|U\d{3,4}$)/.test(serial))return manual('This may be an early model-specific number. Check the model, serial location and early-format chart. Some sequences contain a year digit; others do not encode a date.');
 if(/^\d{7}$/.test(serial)){
  const year=serial.startsWith('99')?1999:2000+Number(serial.slice(0,2));
  const week=Number(serial.slice(2,4));
  if(week<1||week>52)return invalid('The regular modern guitar format uses a week from 01 to 52. Check both stamped groups.');
  if(year>currentYear)return invalid('This number would indicate a future year. Check the digits and whether this is an early instrument with a different numbering system.');
  return dated(`Week ${String(week).padStart(2,'0')}, ${year}`,`The seven-digit format reads year ${serial.slice(0,2)}, week ${serial.slice(2,4)} and sequence ${serial.slice(4)}. It does not identify a particular day.`);
 }
 if(/^[A-Z][A-L]\d{2,4}$/.test(serial)){
  const year=1961+serial.charCodeAt(0)-65;
  const month=months[serial.charCodeAt(1)-65];
  if(/^J[KL]/.test(serial))return manual(`${serial.slice(0,2)} reads as ${month} 1970 in the regular system, but these prefixes are also associated with the November to December 1960 transition. Compare the model and construction to resolve the decade.`);
  return dated(`${month} ${year}`,`The first letter ${serial[0]} gives the year and the second letter ${serial[1]} gives the month. Sequence: ${serial.slice(2)}.`);
 }
 if(/^[A-L]\d{5}$/.test(serial))return dated(`${months[serial.charCodeAt(0)-65]} ${1987+Number(serial[1])}`,`The month letter is followed by a year digit and four sequence digits. Sequence: ${serial.slice(2)}.`);
 if(/^[MNPRSTUVWXY][01]\d{4}$/.test(serial))return dated(`${months[lateMonths.indexOf(serial[0])]} ${1997+Number(serial[1])}`,`The 1997 to 1998 month sequence skips O and Q. Sequence: ${serial.slice(2)}.`);
 return invalid('This does not match a complete regular guitar or bass serial format. Check for missing characters, a replacement plate or an early model-specific number.');
}
