import type {GuideBlock,ModelGuideData} from '../../components/model-guide/types';
import values from './fender-guitar-values.json';
import {authorBio} from './helpers';
export {p,section,source} from './helpers';
export const fBase=(model:string,kind:ModelGuideData['kind'])=>({slug:`fender-${model}-${kind}-guide`,brand:'Fender' as const,kind,plainNumbers:true,date:'November 4, 2026',authorBio,sellLabel:'Sell My Fender',sellHref:'/sell-my-fender-guitar/'});
const money=(v:number)=>'$'+v.toLocaleString('en-US');
export const fRange=(family:string,years:string,configuration?:string)=>{const r=values.find(r=>r.family===family&&r.years===years&&(!configuration||r.configuration===configuration));if(!r)throw Error(`Missing price ${family}/${years}/${configuration}`);return `${money(r.low)} to ${money(r.high)}`;};
export const fChart=(family:string):GuideBlock=>({type:'table',valueChart:true,caption:`Joe’s Estimated Values: ${values.find(r=>r.family===family)?.model}: Excellent, Original Condition With Original Case`,columns:['Year Group','Configuration','Estimated Value'],rows:values.filter(r=>r.family===family).map(r=>[r.years,r.configuration,`${money(r.low)} to ${money(r.high)}`]),note:'November 2026 estimates in U.S. dollars for excellent, original instruments with their original cases. An individual appraisal accounts for finish, repairs, parts and playing condition. These retail estimates are not purchase offers.'});
export const fCTA=(title:string,html:string):GuideBlock=>({type:'cta',title,html,appraisalLabel:'Free Appraisal',sellLabel:'Sell My Fender',sellHref:'/sell-my-fender-guitar/'});
