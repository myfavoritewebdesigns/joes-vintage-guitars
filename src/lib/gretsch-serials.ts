import type {SerialQuestion} from './serial-questions.ts';
import {withAnswer} from './serial-questions.ts';

/** Gretsch's two official charts differ at year boundaries. Estimates retain those overlaps. */
export type GretschEra='auto'|'sequential'|'datecode'|'baldwin'|'revival'|'modern'|'orange';
export interface GretschResult {title:string;detail:string;anchor:string;}
export interface GretschLookup extends GretschResult {questions:SerialQuestion[];}
export const gretschRanges:[string,number,number][]=[['1939 to 1946',1,1999],['1945 to 1949',1000,3999],['1950',3000,5999],['1951',1,1999],['1951',4000,5099],['1952',5000,7099],['1953',6000,9099],['1954',9000,13099],['1955',13000,18099],['1956',17000,21999],['1957',21000,26999],['1958',26000,30999],['1959',30000,34999],['1960',34000,39999],['1961',39000,45999],['1962',45100,53099],['1963',53000,63999],['1964',63000,78999],['1965',77000,85999]];
export const gretschFactories:Record<string,string>={JT:'Japan, Terada',JD:'Japan, Dyna Gakki',JF:'Japan, Fuji-Gen',CS:'United States, Custom Shop',CY:'China, Yako',KP:'Korea, Peerless',KS:'Korea, Samick/SPG'};
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
const miss:GretschResult={title:'More Information Needed',detail:'This number does not match a Gretsch serial format the lookup recognizes. Copy every letter and digit, check the serial location and compare the label photos. A model number such as 6120 is not a serial number.',anchor:'gretsch-label-types'};
function vintageDates(s:string,late:boolean):string[]{const out:string[]=[];for(const len of [1,2]){const mo=Number(s.slice(0,len)),yd=Number(s[len]),unit=s.slice(len+1);if(mo<1||mo>12||s[0]==='0'||!/^\d{2,4}$/.test(unit))continue;const yr=late?(yd>=2?1970+yd:1980+yd):(yd>=5?1960+yd:1970+yd);if((late&&yr>1981)||(!late&&yr>1972))continue;out.push(`${months[mo-1]} ${yr}`);}return [...new Set(out)];}
function sequentialYears(s:string):string[]{const n=Number(s);return n<1?[]:[...new Set(gretschRanges.filter(([,lo,hi])=>n>=lo&&n<=hi).map(([year])=>year))];}
/** A space, dot or hyphen between two groups of digits is a separator (Baldwin and revival formats). Commas are dropped. */
function normalize(input:string):string{const t=input.trim().toUpperCase().replace(/,/g,'');const split=/^(\d+)\s*(?:[.-]|\s)\s*(\d+)$/.exec(t);return split?`${split[1]}-${split[2]}`:t.replace(/\s+/g,'');}

export function decodeGretsch(input:string,era:GretschEra='auto',now=new Date(),labelKnown=false):GretschResult{
 const s=normalize(input);if(!s||s.length>20||!/^[A-Z0-9-]+$/.test(s))return miss;
 if(era==='orange')return {title:'Later Orange Label Needs A Feature Check',detail:'Orange and gray labels reading “That Great Gretsch Sound” can carry five-digit sequences beginning with 1 or 2. These are not month/year date codes. Photograph the whole label and guitar; the number alone cannot supply an exact year.',anchor:'gretsch-label-types'};
 if(era==='modern'||(era==='auto'&&/^[A-Z]/.test(s))){const m=s.match(/^([A-Z]{2})(\d{2})(\d{2})(\d{4})$/);if(!m)return miss;const year=2000+Number(m[2]),month=Number(m[3]),unit=Number(m[4]);if(year<2003||month<1||month>12||unit===0||year>now.getFullYear()||(year===now.getFullYear()&&month>now.getMonth()+1))return miss;const factory=gretschFactories[m[1]];return {title:`${months[month-1]} ${year}`,detail:`${factory?factory+'.':'Factory prefix '+m[1]+' is not in the documented prefix list; confirm it with Gretsch.'} Sequence ${m[4]} is a factory/year count across models, not the model number.${unit<=100?' Gretsch describes 0001 to 0100 as reserved for prototypes, samples and special instruments; the serial alone does not establish rarity or value.':''} Compare the label and model before treating this as a confirmed identification.`,anchor:'gretsch-serial-numbers-2003-present'};}
 if(era==='revival'||(era==='auto'&&/^(?:\d{6,7}-\d{3,4}|\d{9,11})$/.test(s))){const m=s.match(/^(\d{2})(\d{1,2})(\d{3})-?(\d{3,4})$/);if(!m)return miss;const year=Number(m[1])>=89?1900+Number(m[1]):2000+Number(m[1]),month=Number(m[2]);if(year<1989||year>2002||month<1||month>12)return miss;return {title:`Possible ${months[month-1]} ${year}`,detail:`This matches a common Japanese revival format: year, month, model suffix ${m[3]}, then sequence ${m[4]}. Confirm the full model on the label. Korean stickers and other formats are not covered by this rule.`,anchor:'gretsch-serial-numbers-1989-2002'};}
 if(s.includes('-')){if(era!=='auto'&&era!=='baldwin')return miss;const m=s.match(/^(\d{1,2})-(\d)(\d{2,4})$/);if(!m)return miss;const month=Number(m[1]),yd=Number(m[2]),year=yd>=2?1970+yd:1980+yd;if(month<1||month>12||m[1][0]==='0'||year>1981)return miss;return {title:`Possible ${months[month-1]} ${year}`,detail:'This fits a Baldwin-era month, year digit and unit sequence. Confirm a matching U.S. instrument and label; a hyphen by itself does not prove the era.',anchor:'gretsch-serial-numbers-1972-1981'};}
 if(!/^\d{1,6}$/.test(s))return miss;
 if(era==='datecode'||era==='baldwin'){const dates=vintageDates(s,era==='baldwin');return dates.length?{title:dates.join(' Or '),detail:'Possible date-code readings. The single year digit and variable month length can be ambiguous. Use the model, label and body features to select the period; this is not a confirmed manufacture date.',anchor:era==='baldwin'?'gretsch-serial-numbers-1972-1981':'gretsch-serial-numbers-1966-1972'}:miss;}
 const n=Number(s);if(n<1)return miss;const years=sequentialYears(s);
 if(era==='sequential')return years.length?{title:years.join(' / '),detail:`Approximate sequential-chart range. Gretsch’s published tables overlap and differ at boundaries.${n>=21000&&n<=26999?' Misplaced 1957-range labels also appeared on some 1965 and 1966 instruments.':''}${!labelKnown&&/^[12]\d{4}$/.test(s)?' On an orange and gray label reading “That Great Gretsch Sound”, a five-digit number like this one is a separate sequence that cannot be dated.':''} Check the model and original features before choosing a year.`,anchor:'gretsch-serial-numbers-1939-1966'}:miss;
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
 * straight away. A plain number of four to six digits can belong to several
 * systems, so the result carries plain-language questions about where the
 * number is and what the label looks like. Each answer narrows the reading.
 */
export function lookupGretsch(input:string,answers:Record<string,string>={},now=new Date()):GretschLookup{
 const s=normalize(input),base=decodeGretsch(input,'auto',now);
 if(!/^[1-9]\d{3,5}$/.test(s))return {...base,questions:[]};
 if(base===miss&&!vintageDates(s,true).length)return {...base,questions:[]};
 const where=withAnswer(whereQuestion,answers);
 if(where.answer==='label')return {...onLabel(s,answers.label),questions:[where,withAnswer(labelQuestion,answers)]};
 if(where.answer==='headstock')return {...onHeadstock(s,answers.usa),questions:[where,withAnswer(usaQuestion,answers)]};
 const open=base.title==='More Than One Possible Date'||base===miss;
 return {...base,detail:open?base.detail:base.detail+' Where the number sits on the guitar can change this reading.',questions:[where]};
}
