import type {SerialQuestion} from './serial-questions.ts';
import {withAnswer} from './serial-questions.ts';
export interface RickenbackerResult {title:string;message:string;href:string;link:string;invalid?:boolean;questions?:SerialQuestion[];}
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
// Contemporary Rickbeat chart and the 2000 Register retain Q. See the source report.
export const rickenbackerLateMonths='MNPQRSTUVWXY';
const manual=(message:string,anchor='serial-charts',title='Check The Instrument And Serial'):RickenbackerResult=>({title,message,href:'#'+anchor,link:'Compare The Matching Guide Section'});
const invalid=(message:string):RickenbackerResult=>({...manual(message),title:'Check Your Serial Number',invalid:true});
const dated=(title:string,message:string):RickenbackerResult=>({title,message:message+' Compare the model and original features with this date.',href:'#dating-guides',link:'Compare The Feature Guides'});
const instrumentQuestion:SerialQuestion={key:'instrument',prompt:'What Kind Of Instrument Is This?',help:'Early steels, basses and guitars can share similar prefixes.',choices:[{value:'guitar',label:'Guitar With A Fretted Neck'},{value:'bass',label:'Bass Guitar'},{value:'steel',label:'Lap Or Console Steel'},{value:'mandolin',label:'Mandolin'},{value:'amp',label:'Amplifier'},{value:'unknown',label:'Not Sure'}]};
const locationQuestion:SerialQuestion={key:'location',prompt:'Where Is This Number?',help:'A short number may be an early serial, an unusual 1960s stamp or only part of a later serial.',choices:[{value:'sticker',label:'Sticker Under The Headstock Clear Coat'},{value:'vibrato',label:'On A Model 425 Vibrato Cover'},{value:'plate',label:'Jackplate, Bridge Plate Or Neck Plate'},{value:'early',label:'On An Early Steel Or Other Early Instrument'},{value:'unknown',label:'Not Sure'}]};

/** Date-bearing formats and explicitly bounded guidance for non-date-bearing families. */
export function lookupRickenbacker(raw:string,currentYear=new Date().getFullYear(),answers:Record<string,string>={}):RickenbackerResult {
 const serial=raw.trim().toUpperCase().replace(/[\s-]/g,'');
 if(!serial)return invalid('Enter the complete serial, including letters and digits from both parts of the stamp.');
 if(serial.length>24||!/^[A-Z0-9]+$/.test(serial))return invalid('Use letters and digits. Spaces and hyphens may separate the stamped groups; check other punctuation against the original stamp.');
 const question=withAnswer(instrumentQuestion,answers),kind=question.answer;
 const early=(result:RickenbackerResult):RickenbackerResult=>({...result,questions:[question]});
 const steel=()=>manual('Early Rickenbacher and Rickenbacker steels need their model, construction and hardware checked. Pre-1954 prefixes and the separate 1954 to 1960 steel sequences do not supply a dependable calendar date. Read a shared prefix in the context of the instrument.','early-steels','Early Steel: Date Requires A Feature Check');
 if(kind==='amp')return early(manual('Rickenbacker amplifiers use separate rules. The manufacturer’s decoder supports several amplifier sequences from 1969 to 1990. Compare the amp model, cabinet label and component dates.','amplifier-numbers','Use The Amplifier Dating Rules'));
 if(/^Z\d+$/.test(serial))return manual('Z followed only by digits is associated with replacement plates and supplies no dependable build date. Z followed by an A to L month letter is a different format used in 1986.','jvg-s-12-xx-replacement-jackplates','Replacement Plate: Date Undetermined');
 if(/^XX\d+$/.test(serial))return early(manual('XX plates are reported as replacement guitar plates, while XX also fits an amplifier sequence. Photograph the plate on the complete instrument. It cannot establish a guitar’s build date.','jvg-s-12-xx-replacement-jackplates'));
 if(/^\d{7}$/.test(serial)){
  const yy=Number(serial.slice(0,2)),year=yy>=98?1900+yy:2000+yy,week=Number(serial.slice(2,4));
  if(week===53)return manual('This resembles a modern year/week number with week 53. Published charts and decoders disagree about that week. Check the original stamp and ask Rickenbacker to confirm the complete number.','jvg-s-10-era-guide-1999-to-present-year-week','Week 53 Needs Confirmation');
  if(week<1||week>52)return invalid('The documented regular format uses weeks 01 to 52. Check both stamped groups.');
  if(year>currentYear)return invalid('This would indicate a future year. Recheck the digits and the instrument’s numbering system.');
  if(year===1998&&week<46)return manual('Seven-digit 98-prefix numbers are documented in late 1998, including week 46. This earlier week falls outside the transition examples checked for this guide. Confirm the stamp and factory record.','jvg-s-10-era-guide-1999-to-present-year-week','1998 Transition Needs Confirmation');
  return dated(`Week ${String(week).padStart(2,'0')}, ${year}`,`Year ${serial.slice(0,2)}, week ${serial.slice(2,4)}, sequence ${serial.slice(4)}.${year===1998?' Late-1998 numeric instruments are documented in contemporary registry records, overlapping letter-coded production.':''} The serial does not specify an exact day.`);
 }
 if(/^[A-Z][A-L]\d{1,5}$/.test(serial)){
  const year=1961+serial.charCodeAt(0)-65,month=months[serial.charCodeAt(1)-65];
  if(/^J[KL]/.test(serial))return manual(`${serial.slice(0,2)} can mean ${month} 1960 or ${month} 1970. Model, construction and original component dates must resolve this reused prefix. Sequence: ${serial.slice(2)}.`,'jvg-s-5-the-jk-jl-transition-november-to-december-1960',`${month} 1960 Or 1970`);
  return dated(`${month} ${year}`,`The first letter gives the year and the second gives the month. Sequence: ${serial.slice(2)}.${serial[0]==='Z'?' ZA to ZL is the documented 1986 series; a blanket replacement-plate interpretation of every Z prefix conflicts with dated instruments.':''}`);
 }
 if(/^[A-L]\d{5}$/.test(serial))return dated(`${months[serial.charCodeAt(0)-65]} ${1987+Number(serial[1])}`,`Month letter ${serial[0]}, year digit ${serial[1]}, sequence ${serial.slice(2)}.`);
 if(/^[MNPQRSTUVWXY][01]\d{4}$/.test(serial))return dated(`${months[rickenbackerLateMonths.indexOf(serial[0])]} ${1997+Number(serial[1])}`,`The contemporary chart runs M, N, P, Q, R, S, T, U, V, W, X, Y. Q is April and Y is December. Sequence: ${serial.slice(2)}. Some online decoders omit Q and shift later months; see the source comparison below.`);
 const combo=/^(4C|6C|8C|65C|85C)(\d{1,4})(A?)$/.exec(serial);
 if(combo){
  if(combo[3]&&combo[1]!=='4C')return invalid('The documented trailing A convention belongs to the 4C family. Check this unusual stamp against the model and a photograph.');
  const models:Record<string,string>={'4C':combo[3]?'Combo 450':'Combo 400 / 425 or 450','6C':'Combo 600','8C':'Combo 800','65C':'Combo 650','85C':'Combo 850'};
  const digit=Number(combo[2][0]),min=combo[1]==='4C'?6:combo[1].length===3?7:4;
  const yearPossible=combo[2].length>=2&&digit>=min&&digit<=9;
  return manual(`${models[combo[1]]} family.${combo[3]?' The A suffix is associated with the two-pickup 450.':''}${yearPossible?` In the early date-bearing scheme, ${digit} after C suggests ${1950+digit}.`:' This number does not contain a dependable year digit.'} Later 1958 to 1960 sequences dropped the year and can resemble earlier numbers. Confirm the model and period before accepting a year.`,'jvg-s-3-solidbody-combo-guitars-1954-to-late-1958',yearPossible?`Possible ${1950+digit} Or An Undated Later Sequence`:'Early Combo: Date Not Encoded');
 }
 if(/^[23]L?[TVR]\d{1,4}$/.test(serial)){
  const specials:Record<string,string>={'2LT125':'330F','2LV126':'365F'};
  if(specials[serial])return manual(`The manufacturer identifies this exact number with a 1958 ${specials[serial]}. This individual exception is not a date formula for other 2L numbers. A matching stamp alone cannot identify the historical instrument.`,'capri-specials','Documented 1958 Number');
  const stereo=serial.includes('R');
  return manual(`${serial[0]} is the usual pickup count. ${stereo?'R indicates the early stereo arrangement, associated with 1960.':'T usually indicates a non-vibrato tailpiece; V usually indicates a vibrato.'} These Capri and F-series sequences do not encode a month or an individual production year. Compare the exact model, pickups and tailpiece; historical exceptions exist.`,'jvg-s-4-hollowbody-capri-and-f-series-1958-to-october-1960',stereo?'Early Stereo Format: About 1960':'Capri / F-Series: About 1958 To 1960');
 }
 if(/^[A-EUVM]\d{1,4}$/.test(serial)){
  if(kind==='steel')return early(steel());
  if(serial.startsWith('M')&&kind&&kind!=='mandolin'&&kind!=='unknown')return early(manual('The M-prefix reference in this guide concerns early electric mandolins. The selected instrument needs its own model and serial evidence.','early-mandolins','Model And Prefix Need Confirmation'));
  if(serial.startsWith('M'))return early(manual('M-prefix numbers occur on early electric mandolins. M101 is a documented 1958 example, but its digits are not a general year/month formula. Identify the model and compare the construction.','early-mandolins','Early Mandolin: Date Requires A Feature Check'));
  if(serial[0]==='B'){
   if(kind==='guitar')return early(manual('B-prefix numbers also occur on early fretted Bakelite Spanish guitars. Establish the model and construction; the later 4000 bass year-digit rule does not date these guitars.','early-spanish','Early Spanish Guitar: Date Requires A Feature Check'));
   if(kind!=='bass')return early(manual('A B-prefix number may belong to an early 4000 bass, an older steel or an early fretted Spanish guitar. Choose the instrument type before applying the bass year-digit rule.','early-basses','Identify The Instrument Before Dating'));
   const m=/^B([789])(\d{2,3})$/.exec(serial);
   return early(manual(m?`On an early 4000 bass, ${m[1]} can indicate ${1950+Number(m[1])}. Later B-prefix sequences lost the year digit. Confirm construction and component dates.`:'This fits an early B-prefix bass sequence without a dependable embedded date. Compare the instrument with the 1957 to 1960 4000 bass family.','early-basses',m?`Possible ${1950+Number(m[1])} Bass`:'Early Bass: Date Not Encoded'));
  }
  if(serial[0]==='V'){
   if(kind!=='guitar')return early(manual('V occurs on short-scale guitars, including student solidbodies and early Capris. Identify the instrument before reading a year from these digits.','short-scale-numbers','Short-Scale Number Needs Model Context'));
   if(serial==='V81'||serial==='V111')return early(manual(`The manufacturer associates ${serial} with a 1958 Capri ${serial==='V81'?'325':'310'}. This is an individual documented exception; matching digits do not establish that the guitar is the historical example.`,'capri-specials','Documented 1958 Capri Number'));
   const m=/^V([78])(\d{2,3})$/.exec(serial);
   return early(manual(m?`A date-bearing student-model V code can suggest ${1950+Number(m[1])}. Other V sequences, including short-scale Capris, have different meanings. Verify the 900, 950 or 1000 model and its construction.`:'This V-prefix short-scale number has no dependable general date reading. Compare student models 900, 950 and 1000 with Capri models 310 to 325; some V0 examples are documented in 1960.','short-scale-numbers',m?`Possible ${1950+Number(m[1])} Student Guitar`:'Short-Scale Guitar: Individual Check Needed'));
  }
  if(serial[0]==='C'&&kind==='guitar')return early(manual('C-prefix numbers occur on early fretted Spanish guitars as well as some later 650 / 850-era Combos. They do not share one usable date code. Compare the body material, model and pickup arrangement; older Bakelite steels also use C.','jvg-s-3-solidbody-combo-guitars-1954-to-late-1958','Early C-Prefix Guitar: Date Not Encoded'));
  if(kind==='guitar'||kind==='bass'||kind==='mandolin')return early(manual('This early prefix does not provide a dependable date for the selected instrument. Compare the full model, stamp and construction rather than applying a steel sequence to another instrument.','model-specific-serials','Early Number: Model Confirmation Needed'));
  return early(manual('This prefix can occur on an early steel or another early instrument. Choose the instrument type, then compare the model and physical features. The prefix alone does not supply a calendar date.','early-steels','Early Number: Identify The Instrument'));
 }
 if(/^\d{1,6}$/.test(serial)){
  const loc=withAnswer(locationQuestion,answers);
  const result=loc.answer==='sticker'?manual('Small groups of 330 and at least one 365 used numbered headstock labels under the clear finish around 1965. No general date formula is established. Compare the label, model and original potentiometer codes.','jvg-s-13-1965-headstock-sticker-serials','Possible 1965 Headstock-Label Exception'):loc.answer==='vibrato'?manual('The vibrato-equipped 425 used a production number on the vibrato cover during 1965 to 1967. The year/month letters are absent. Original pot dates and comparison instruments may narrow the period.','jvg-s-14-vibrato-equipped-425-1965-to-1967','Model 425 Vibrato: About 1965 To 1967'):manual('Check both ends of the plate for missing date characters. Short numeric stamps can also occur on early steels, unusual headstock labels and 425 vibrato units. The digits alone cannot settle the date.','serial-locations','Short Number: Check Its Location');
  return {...result,questions:[loc]};
 }
 if(/^[A-Z][M-Z]\d{2,5}$/.test(serial))return early(manual('This second letter is outside the regular guitar month range A to L. Some amplifier serials use a later month alphabet. Confirm the instrument type and read the amplifier note.','amplifier-numbers','Possible Amplifier Or Unusual Number'));
 return invalid('This stamp is outside the documented formats in this guide. Recheck every character and photograph the number with the complete instrument. An unrecognized serial alone does not prove a counterfeit.');
}
