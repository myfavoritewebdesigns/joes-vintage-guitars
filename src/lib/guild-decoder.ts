import {modelSpecific1965, generalRanges, westerly1970} from '../data/guild-serial-data.ts';

export type GuildMode = 'auto'|'vintage'|'julian'|'later';
export interface GuildResult {title:string;detail:string;href:string;link:string;}
const charts='/guild-model-prefix-serial-number-charts/';
const result=(title:string,detail:string,href=charts,link='Open The Model Serial Charts'):GuildResult=>({title,detail,href,link});
const normModel=(s:string)=>s.toUpperCase().replace(/[^A-Z0-9]/g,'');
export const guildModelChoices=modelSpecific1965.rows.filter(r=>r.slice(1).some(c=>c!=='N/A')).map(r=>r[0]);

/** A chart match is evidence for an era, not authentication of a guitar or its parts. */
export function decodeGuild(raw:string,mode:GuildMode='auto',model=''):GuildResult{
 const serial=raw.trim().toUpperCase().replace(/[\s-]/g,'');
 if(!serial)return result('Enter A Serial Number','Copy every letter and digit from the label or headstock. If a character is unclear, use the photo guide first.','/guild-labels-and-serial-number-locations/','Find Your Serial Number');
 if(serial.length>24||!/^[A-Z0-9]+$/.test(serial))return result('Check The Serial','Use letters and digits only. Spaces and hyphens are accepted. Don’t replace an unreadable character with a guess.','/guild-labels-and-serial-number-locations/','Check The Label And Headstock');
 if(mode==='later')return result('Check The Model And Country','Oxnard, Corona and imported Guilds do not share one universal date code. Send the complete model, serial and country marking to Guild support or include clear photos with an appraisal.','/guild-vintage-vs-reissue/','Compare Later Guild Production');
 const julian=/^([TN])([A-Z])(\d{3})(\d{3})$/.exec(serial);
 if(julian&&(mode==='auto'||mode==='julian')){
  const [,plant,letter,dayText,unit]=julian,year=1997+letter.charCodeAt(0)-65,day=Number(dayText);
  const leap=year%4===0&&(year%100!==0||year%400===0),days=leap?366:365;
  if(day<1||day>days)return result('Invalid Day Of Year',`${year} has ${days} days. The day field ${dayText} is outside that calendar. Check the original serial photograph.`,'/guild-serial-number-lookup/#part8','Read The Julian Examples');
  const date=new Date(Date.UTC(year,0,day));
  const valid=plant==='T'?year>=2005&&year<=2008&&!(year===2005&&day<32)&&!(year===2008&&date.getUTCMonth()===11):year>=2008&&year<=2014&&!(year===2008&&date.getUTCMonth()<11);
  if(!valid)return result('Factory And Year Need Checking','That calendar reading falls outside the supported Tacoma or New Hartford factory period. Don’t extend the letter sequence indefinitely or use this system for an Oxnard or imported Guild.','/guild-factory-eras/','Compare Guild Factory Eras');
  const label=date.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});
  return result(label,`${plant==='T'?'Tacoma, Washington':'New Hartford, Connecticut'} format. ${letter} corresponds to ${year}; ${dayText} is day ${day}; ${unit} is the unit sequence. This is a calendar reading of the serial, subject to the model and factory markings agreeing.`,'/guild-serial-number-lookup/#part8','How The Julian Code Works');
 }
 if(mode==='julian')return result('Check The Julian Format','This system uses T or N, a year letter and six digits, such as TJ037016. A different format needs the vintage charts or later-production guidance.','/guild-factory-eras/','Choose The Correct Factory Era');
 if(/^\d+$/.test(serial)){
  if(serial.length>6||serial.startsWith('0'))return result('No Supported Numeric Match','This number does not match the vintage numeric charts used here. Keep leading zeroes and check the model, country and complete label.','/guild-labels-and-serial-number-locations/','Check Serial Locations And Formats');
  const n=Number(serial),early=[[1953,1000,1500],[1954,1500,2200],[1955,2200,3000],[1956,3000,4000],[1957,4000,5700],[1958,5700,8300]];
  const years=early.filter(([,first,last])=>n>=first&&n<=last).map(([year])=>year);
  if(years.length)return result(`Approximately ${years.join(' Or ')}`,`Guild's earliest records are approximate and some boundaries overlap. This fits the early U.S. sequence only; check the model and physical details before assigning a year.`,'/guild-serial-number-lookup/#part1','Read The Early Serial Chart');
  if(n>8300&&n<=12035)return result('Approximately 1959','Guild lists 12035 as its approximate last 1959 serial. This estimate uses the surrounding early records and must be checked against the instrument.','/guild-serial-number-lookup/#part1','Read The Early Serial Chart');
  const numeric=[...generalRanges.rows.slice(0,5),...westerly1970.rows].find(r=>n>=Number(r[1])&&n<=parseInt(r[2],10));
  if(numeric)return result(numeric[0],`Matches the published U.S. numeric range ${numeric[1]} to ${numeric[2]}. This is a sequence number, not a date encoded in the digits. Confirm that the guitar belongs to this vintage system.`,'/guild-serial-number-lookup/#'+(Number(numeric[0])<1970?'part1':'part2'),'View The Matching Numeric Chart');
  if(n>=38637&&n<=46695)return result('1965 To 1969 Needs A Model Check','Guild publishes incomplete numeric records for this transition. It does not supply first-number ranges that justify an exact year for this number. Compare the model-specific chart and physical features.',charts+'#models-1965','Open The 1965 To 1969 Model Chart');
  return result('No Supported Numeric Match','The published vintage numeric sequence does not resolve this number. Don’t force a later or imported serial into an early U.S. chart.','/guild-factory-eras/','Identify The Factory Era');
 }
 const matches:{model:string;year:string}[]=[];
 for(const row of modelSpecific1965.rows){if(model&&normModel(row[0])!==normModel(model))continue;row.slice(1).forEach((cell,i)=>{
  const range=/^([A-Z]+)(\d+)(?: to (?:[A-Z]+)?(\d+))?$/.exec(cell),input=/^([A-Z]+)(\d+)$/.exec(serial);
  if(range&&input&&input[1]===range[1]&&Number(input[2])>=Number(range[2])&&Number(input[2])<=Number(range[3]||range[2]))matches.push({model:row[0],year:modelSpecific1965.headers[i+1]});
 });}
 if(matches.length===1)return result(`${matches[0].year} Chart Match`,`${serial} falls in the ${matches[0].model} row of the 1965 to 1969 chart. Confirm that model before accepting the date; prefixes can recur in other Guild periods.`,charts+'#models-1965','Compare The Model Row');
 if(matches.length>1)return result('More Than One Model Match',matches.map(m=>`${m.model}: ${m.year}`).join('; ')+'. Select the model printed on the instrument, or compare photos before narrowing the date.',charts+'#models-1965','Compare The Reused Prefix');
 if(!/^[A-Z]+\d+$/.test(serial))return result('Unmatched Serial Format','The complete entry does not match a supported format. Check for a trailing letter, a hidden prefix or a transcription error.','/guild-labels-and-serial-number-locations/','Check Your Serial Photograph');
 return result('Use The Model Prefix Charts','This tool cannot assign an exact year from this prefix alone. The 1979 to 1994 records often list only annual endpoints. Search the full model and prefix, preserving gaps and resets. C-prefixed numbers may also need Corona context. If the guitar is a later model or import, use the factory guide.',charts,'Search The Model Prefix Charts');
}
