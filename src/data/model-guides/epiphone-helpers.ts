import type { GuideBlock, ModelGuideData } from '../../components/model-guide/types';
import values from './epiphone-values.json';
export { p, section, source, authorBio } from './helpers';
export const money = (amount: number) => '$' + amount.toLocaleString('en-US');
export const epiRows = (model: string) => values.filter(row => row.family === `epiphone-${model}`);
export const range = (model: string, index: number) => {
  const row = epiRows(model)[index];
  if (!row) throw new Error(`Missing Epiphone price ${model}/${index}`);
  return `${money(row.low)} to ${money(row.high)}`;
};
export const epiChart = (model: string): GuideBlock => ({
  type: 'table', valueChart: true,
  caption: 'Joe’s Estimated Values: Excellent, Original Instruments With The Original Case',
  columns: ['Model', 'Pricing Year Group', 'Configuration', 'Estimated Value'],
  rows: epiRows(model).map(row => [row.model, row.years, row.configuration, `${money(row.low)} to ${money(row.high)}`]),
  note: 'U.S. dollars. Joe’s October 2026 estimates start with published reference-guide ranges and apply his pricing adjustment. They are not averages of completed sales. Estimates assume excellent, original condition and the original case where applicable. These are market estimates, not purchase offers. An individual appraisal accounts for repairs and changes.' + (['emperor','deluxe'].includes(model) ? ' Some overlapping pre-Gibson electric groups are omitted. Read the explanation below before choosing a comparison.' : '')
});
export const epiBase = (model: string, kind: ModelGuideData['kind']) => ({
  slug: `epiphone-${model}-${kind}-guide`, brand: 'Epiphone' as const, kind,
  date: 'October 30, 2026',
  authorBio: kind === 'value'
    ? 'Joe Dampt owns Joe’s Vintage Guitars in Mesa, Arizona. He buys and evaluates vintage guitars and uses instrument photographs, serial records and repair history when assessing a guitar.'
    : 'At his Mesa, Arizona shop, Joe Dampt buys and appraises vintage instruments from sellers around the country. These guides use documented photographs and production references to explain model identification, with condition and originality assessed for each guitar.'
});
export const epiCTA = (title: string, html: string): GuideBlock => ({type:'cta',title,html:html.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,'$1'),appraisalLabel:'Free Appraisal',sellLabel:'Sell My Epiphone',sellHref:'/sell-my-epiphone-guitar/'});
