import type {SerialQuestion} from './serial-questions.ts';
import {withAnswer} from './serial-questions.ts';

/** Gretsch's two official charts differ at year boundaries. Estimates retain those overlaps. */
export type GretschEra='auto'|'sequential'|'datecode'|'baldwin'|'revival'|'modern'|'orange';
export interface GretschResult {title:string;detail:string;anchor:string;}
export interface GretschLookup extends GretschResult {questions:SerialQuestion[];}
export const gretschRanges:[string,number,number][]=[['1939 to 1946',1,1999],['1945 to 1949',1000,3999],['1950',3000,5999],['1951',1,1999],['1951',4000,5099],['1952',5000,7099],['1953',6000,9099],['1954',9000,13099],['1955',13000,18099],['1956',17000,21999],['1957',21000,26999],['1958',26000,30999],['1959',30000,34999],['1960',34000,39999],['1961',39000,45999],['1962',45100,53099],['1963',53000,63999],['1964',63000,78999],['1965',77000,85999]];
export const gretschFactories:Record<string,string>={JT:'Japan, Terada',JD:'Japan, Dyna Gakki',JF:'Japan, Fuji-Gen',CS:'United States, Custom Shop',CY:'China, Yako',KP:'Korea, Peerless',KS:'Korea, Samick/SPG'};
// These prefixes are evidenced by instruments and dealer records, separately
// from Gretsch's published 2013 two-letter list. Do not invent factory names.
export const gretschObservedPrefixes:Record<string,string>={UC:'U.S. Custom Shop examples',IS:'Indonesian production',CYG:'Chinese Electromatic examples',ISG:'Indonesian Streamliner examples'};
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
const miss:GretschResult={title:'More Information Needed',detail:'This number does not match a Gretsch serial format the lookup recognizes. Copy every letter and digit, check the serial location and compare the label photos. A model number such as 6120 is not a serial number.',anchor:'gretsch-label-types'};
function vintageDates(s:string,late:boolean):string[]{const out:string[]=[];for(const len of [1,2]){const mo=Number(s.slice(0,len)),yd=Number(s[len]),unit=s.slice(len+1);if(mo<1||mo>12||s[0]==='0'||!/^\d{1,4}$/.test(unit))continue;const yr=late?(yd>=2?1970+yd:1980+yd):(yd>=5?1960+yd:1970+yd);if((late&&yr>1981)||(!late&&yr>1972))continue;out.push(`${months[mo-1]} ${yr}`);}return [...new Set(out)];}
function sequentialYears(s:string):string[]{const n=Number(s);return n<1?[]:[...new Set(gretschRanges.filter(([,lo,hi])=>n>=lo&&n<=hi).map(([year])=>year))];}
/** A space, dot or hyphen between two groups of digits is a separator (Baldwin and revival formats). Commas are dropped. */
function normalize(input:string):string{const t=input.trim().toUpperCase().replace(/,/g,'');const split=/^(\d+)\s*(?:[.-]|\s)\s*(\d+)$/.exec(t);return split?`${split[1]}-${split[2]}`:t.replace(/\s+/g,'');}

export function decodeGretsch(input:string,era:GretschEra='auto',now=new Date(),labelKnown=false):GretschResult{
 const s=normalize(input);if(!s||s.length>20||!/^[A-Z0-9-]+$/.test(s))return miss;
 if(era==='orange')return {title:'Later Orange Label Needs A Feature Check',detail:'Orange and gray labels reading “That Great Gretsch Sound” can carry five-digit sequences beginning with 1 or 2. These are not month/year date codes. Photograph the whole label and guitar; the number alone cannot supply an exact year.',anchor:'gretsch-label-types'};
 if(/^(?:9[0-9]|89|0[0-2])\d{4,6}-[A-Z]{1,4}\d{1,4}$/.test(s))return {title:'Revival Model Letters Need Confirmation',detail:'Some revival archtops carry model letters after the separator, such as 925400-CV37 on a G400CV. Preserve the letters and compare the complete model label. This is outside the automatic numeric/SS/SH split; the tool does not force it into a different model or promise an exact date.',anchor:'gretsch-revival-model-variants'};
 if(era==='modern'||(era==='auto'&&/^[A-Z]/.test(s))){
  const extended=/^(CYGC|CYG|ISG)(\d{8,10})$/.exec(s);
  if(extended)return {title:extended[1]+' Prefix: Date Needs Confirmation',detail:`${extended[1]==='ISG'?'Indonesian Streamliner':'Chinese Electromatic'} examples use this longer prefix. Preserve the complete number ${s}. The older two-letter year/month formula is not verified for this run, so the lookup does not interpret the next digit pair as a month or promise that the first pair is an exact build year. Check the factory record, model label and original paperwork.`,anchor:'gretsch-modern-variants'};
  if(/^(IOG|IWA|CMG|CYGC)[A-Z0-9]+$/.test(s))return {title:'Factory / Model Confirmation Needed',detail:'This prefix or extended marking occurs outside the standard two-letter chart. Roots acoustics and newer import runs need their full model, country label and original paperwork checked. Keep suffix letters. The lookup does not assign an exact date or factory from this unverified format.',anchor:'gretsch-modern-variants'};
  const m=s.match(/^([A-Z]{2,3})(\d{2})(\d{2})(\d{4,5})$/);if(!m)return miss;
  const year=2000+Number(m[2]),month=Number(m[3]),unit=Number(m[4]);
  if(year<2003||month<1||month>12||unit===0||year>now.getFullYear()||(year===now.getFullYear()&&month>now.getMonth()+1))return miss;
  const factory=gretschFactories[m[1]],observed=gretschObservedPrefixes[m[1]],standard=!!factory&&m[4].length===4;
  if(m[4].length===5&&m[1]!=='ISG')return {title:'Extended Sequence Needs Confirmation',detail:'This is longer than the documented four-digit sequence for this prefix. Check the complete stamp with Gretsch before accepting a date.',anchor:'gretsch-modern-variants'};
  return {title:`${standard?'':'Possible '}${months[month-1]} ${year}`,detail:`${factory?factory+'.':observed?observed+'. This prefix is documented on instruments beyond Gretsch’s older official list.':'Factory prefix '+m[1]+' is not in the documented prefix list; confirm it with Gretsch.'} ${standard?`Sequence ${m[4]} is a factory/year count across models.`:`The date positions suggest ${months[month-1]} ${year}; confirm the model and complete label. Sequence ${m[4]} is retained without assuming how this run was counted.`}${standard&&unit<=100?' Gretsch describes 0001 to 0100 as reserved for prototypes, samples and special instruments; the serial alone does not establish rarity or value.':''}`,anchor:standard?'gretsch-serial-numbers-2003-present':'gretsch-modern-variants'};
 }
 if(era==='revival'||(era==='auto'&&/^(?:\d{6,8}[A-Z]{0,4}-\d{1,4}|\d{7,12}|\d{6,8}[A-Z]{1,4}\d{1,4})$/.test(s))){
  const year=Number(s.slice(0,2))>=89?1900+Number(s.slice(0,2)):2000+Number(s.slice(0,2));
  if(year<1989||year>2002)return miss;
  const readings:{month:number;model:string;suffix:string;unit:string}[]=[];
  for(const ml of [1,2])for(const modelLength of [3,4]){
   const month=Number(s.slice(2,2+ml)),model=s.slice(2+ml,2+ml+modelLength),tail=s.slice(2+ml+modelLength);
   const end=/^([A-Z]{0,4})-?(\d{1,4})$/.exec(tail);
   if(month<1||month>12||! /^[0-9]{3,4}$/.test(model)||(modelLength===4&&!/^[67]/.test(model))||!end||Number(end[2])===0)continue;
   if(end[1]&&!['SS','SH'].includes(end[1]))continue;
   readings.push({month,model,suffix:end[1],unit:end[2]});
  }
  if(!readings.length)return /[A-Z]/.test(s)?{title:'Revival Model Letters Need Confirmation',detail:'This resembles a revival serial with a model-letter group outside the documented SS and SH examples. Keep every character and compare the complete model label and factory record.',anchor:'gretsch-revival-model-variants'}:miss;
  const dates=[...new Set(readings.map(r=>`${months[r.month-1]} ${year}`))];
  return {title:`Possible ${dates.join(' Or ')}`,detail:`Japanese revival reading${readings.length>1?'s':''}: ${readings.map(r=>`${months[r.month-1]} ${year}, model ${r.model.length===3?'digits ':''}${r.model}${r.suffix}, sequence ${r.unit}`).join('; ')}. ${readings.length>1?'The missing separator or variable group lengths leave more than one reading. ':''}Match the full model line and original stamp; three model digits do not always imply a 6000-series model. SS and SH occur within documented Brian Setzer serials. These sequences relate to the model run; Korean stickers use separate rules.`,anchor:'gretsch-serial-numbers-1989-2002'};
 }
 if(s.includes('-')){if(era!=='auto'&&era!=='baldwin')return miss;const m=s.match(/^(\d{1,2})-(\d)(\d{1,4})$/);if(!m)return miss;const month=Number(m[1]),yd=Number(m[2]),year=yd>=2?1970+yd:1980+yd;if(month<1||month>12||m[1][0]==='0'||year>1981)return miss;return {title:`Possible ${months[month-1]} ${year}`,detail:'This fits a Baldwin-era month, year digit and unit sequence. Confirm a matching U.S. instrument and label; a hyphen by itself does not prove the era.',anchor:'gretsch-serial-numbers-1972-1981'};}
 if(!/^\d{1,6}$/.test(s))return miss;
 if(era==='datecode'||era==='baldwin'){const dates=vintageDates(s,era==='baldwin');return dates.length?{title:dates.join(' Or '),detail:'Possible date-code readings. The single year digit and variable month length can be ambiguous. Use the model, label and body features to select the period; this is not a confirmed manufacture date.',anchor:era==='baldwin'?'gretsch-serial-numbers-1972-1981':'gretsch-serial-numbers-1966-1972'}:miss;}
 const n=Number(s);if(n<1)return miss;const years=sequentialYears(s);
 if(era==='sequential')return years.length?{title:years.join(' / '),detail:`Approximate sequential-chart range. Gretsch’s published tables overlap and differ at boundaries.${s.length===4?' Unusual four-digit serials also occur on some 1965 and 1966 instruments; model features can override this early-chart estimate.':''}${n>=21000&&n<=26999?' Misplaced 1957-range labels also appeared on some 1965 and 1966 instruments.':''}${!labelKnown&&/^[12]\d{4}$/.test(s)?' On an orange and gray label reading “That Great Gretsch Sound”, a five-digit number like this one is a separate sequence that cannot be dated.':''} Check the model and original features before choosing a year.`,anchor:'gretsch-serial-numbers-1939-1966'}:miss;
 const dates=vintageDates(s,false);if(!years.length&&!dates.length)return miss;
 if(!dates.length)return decodeGretsch(s,'sequential');
 if(!years.length)return decodeGretsch(s,'datecode');
 return {title:'More Than One Possible Date',detail:`Sequential charts suggest ${years.join(' / ')}. A date-code reading could be ${dates.join(' or ')}. The same digits belong to different Gretsch systems, and where the number appears on the guitar decides which reading applies.`,anchor:'gretsch-serial-number-lookup'};
}

// Follow-up questions for plain numbers. A visitor can't be expected to know the
// serial systems, but they can see where the number is and what the label looks like.
const whereQuestion:SerialQuestion={key:'where',prompt:'Where Did You Find The Number?',help:'The same digits can mean different things on a label and on a headstock.',link:{href:'/gretsch-labels-and-serial-number-locations/',text:'See where Gretsch put serial numbers.'},choices:[
 {value:'label',label:'On A Paper Label Inside The Body',hint:'Seen through an f-hole, or inside the control cavity on a Jet'},
 {value:'headstock',label:'On The Headstock',hint:'Stamped on the back or top edge, or on a metal plate on the front'},
 {value:'unknown',label:'Not Sure'}]};
const labelQuestion:SerialQuestion={key:'label',prompt:'Which Label Matches Yours?',help:'Read the wording and border as well as the digits.',link:{href:'/gretsch-labels-and-serial-number-locations/#brooklyn-and-orange-labels',text:'Compare the label photos.'},choices:[
 {value:'brooklyn',label:'Rectangle With A Brooklyn Address',hint:'A common 1950s label'},
 {value:'oval',label:'Orange Oval',hint:'Gretsch’s chart places this change in 1957'},
 {value:'tggs',label:'Orange And Gray, Reading “That Great Gretsch Sound”',hint:'The wording runs along the bottom edge'},
 {value:'baldwin',label:'Black And White Rectangle',hint:'Used in the Baldwin era of the 1970s'},
 {value:'unknown',label:'Not Sure'}]};
const usaQuestion:SerialQuestion={key:'usa',prompt:'Is “Made In USA” Stamped Near The Number?',help:'Gretsch added that stamp after the early sequential numbers ended, so it points to the date-code reading.',choices:[
 {value:'yes',label:'Yes'},{value:'no',label:'No'},{value:'unknown',label:'Not Sure'}]};

function onLabel(s:string,label:string|undefined):GretschResult{
 if(label==='tggs')return decodeGretsch(s,'orange');
 if(label==='baldwin'){const r=decodeGretsch(s,'baldwin');return r===miss?{title:'Not A Baldwin Date Code',detail:'These digits don’t fit the Baldwin month, year digit and unit pattern. Check each digit, look for a faint dash or dot after the month and compare the Baldwin label photos.',anchor:'gretsch-serial-numbers-1972-1981'}:r;}
 const years=sequentialYears(s);
 if(label==='brooklyn'||label==='oval')return years.length?decodeGretsch(s,'sequential',undefined,true):{title:'Outside The Early Chart',detail:'This number is above the published sequential chart, which ends in the 85,000s in 1965. Check each digit against the label, then compare the label photos in case the label is a later design.',anchor:'gretsch-serial-numbers-1939-1966'};
 return {title:years.length?`${years.join(' / ')} On An Early Label`:'Check The Label Type',detail:`${years.length?`On an early Brooklyn or orange oval label, sequential charts suggest ${years.join(' / ')}. `:''}A black and white Baldwin label or an orange and gray label reading “That Great Gretsch Sound” reads differently. Pick the label that matches yours.`,anchor:'gretsch-label-types'};
}
function onHeadstock(s:string,usa:string|undefined):GretschResult{
 const years=sequentialYears(s),dates=vintageDates(s,false),late=vintageDates(s,true).filter(d=>!dates.includes(d));
 if(usa==='yes'){
  if(dates.length)return {title:dates.join(' Or '),detail:`A “Made in USA” stamp points to the date-code system.${late.length?` If the guitar is from the 1970s Baldwin years and has no separator after the month, the same digits read ${late.join(' or ')}.`:''} Compare the model, label and body features before choosing a year.`,anchor:'gretsch-serial-numbers-1966-1972'};
  if(late.length)return {title:`Possible ${late.join(' Or ')}`,detail:'These digits fit a 1970s Baldwin-era date code with no separator after the month. Look for a faint dash or dot after the month and compare the model and label.',anchor:'gretsch-serial-numbers-1972-1981'};
  return miss;
 }
 if(!years.length||!dates.length)return decodeGretsch(s,'auto');
 return {title:'More Than One Possible Date',detail:`Gretsch stamped some early sequential numbers on the headstock as well as the later date codes. Sequential charts suggest ${years.join(' / ')}. A date-code reading could be ${dates.join(' or ')}. ${usa==='no'?'With no “Made in USA” stamp, both readings stay open, so compare the model and features with the photo guides.':'A “Made in USA” stamp beside the number would point to the date code.'}`,anchor:'gretsch-serial-numbers-1966-1972'};
}

/**
 * Decodes a serial without asking the visitor to name its format. Formats that
 * identify themselves (letters, separators, long revival numbers) decode
 * straight away. A plain number of three to six digits can belong to several
 * systems, so the result carries plain-language questions about where the
 * number is and what the label looks like. Each answer narrows the reading.
 */
export function lookupGretsch(input:string,answers:Record<string,string>={},now=new Date()):GretschLookup{
 const s=normalize(input),base=decodeGretsch(input,'auto',now);
 if(!/^[1-9]\d{2,5}$/.test(s))return {...base,questions:[]};
 if(base===miss&&!vintageDates(s,true).length)return {...base,questions:[]};
 const where=withAnswer(whereQuestion,answers);
 if(where.answer==='label')return {...onLabel(s,answers.label),questions:[where,withAnswer(labelQuestion,answers)]};
 if(where.answer==='headstock')return {...onHeadstock(s,answers.usa),questions:[where,withAnswer(usaQuestion,answers)]};
 const open=base.title==='More Than One Possible Date'||base===miss;
 return {...base,detail:open?base.detail:base.detail+' Where the number sits on the guitar can change this reading.',questions:[where]};
}
