import fs from 'node:fs';
import path from 'node:path';
import {load} from 'cheerio';

const guides=JSON.parse(fs.readFileSync('src/data/martin-value-guides.json','utf8'));
const origin='https://www.joesvintageguitarsaz.com';
const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
const errors=[];
const check=(ok,msg)=>{if(!ok) errors.push(msg);};
let images=0, priceRows=0;
for(const g of guides){
  const route=`/post/${g.slug}/`;
  const $=load(fs.readFileSync(`dist${route}index.html`,'utf8'));
  const article=$('.martin-values');
  check($('h1').length===1&&$('h1').text()===g.title,`${g.key}: heading`);
  check($('link[rel="canonical"]').attr('href')===origin+route,`${g.key}: canonical`);
  check(!/noindex|nofollow/.test($('meta[name="robots"]').attr('content')||''),`${g.key}: indexable`);
  check(sitemap.includes(origin+route),`${g.key}: sitemap inclusion`);
  check(article.find('table').length===1,`${g.key}: one price table`);
  const rows=article.find('tbody tr').toArray().map(tr=>$(tr).find('th,td').toArray().map(td=>$(td).text()));
  check(JSON.stringify(rows)===JSON.stringify(g.rows),`${g.key}: exact approved rows`);
  priceRows+=rows.length;
  check(article.find('.auth-dek').text()===g.lede,`${g.key}: approved lede`);
  const ids=$('[id]').map((i,n)=>$(n).attr('id')).get();
  check(new Set(ids).size===ids.length,`${g.key}: unique IDs`);
  article.find('a[href^="#"]').each((i,n)=>check(ids.includes($(n).attr('href').slice(1)),`${g.key}: anchor`));
  article.find('a[href]').each((i,n)=>{
    const href=$(n).attr('href');
    check(!/^https?:/.test(href)||new URL(href).origin===origin,`${g.key}: no third-party article links`);
    if(href.startsWith('/')) check(fs.existsSync(path.join('dist',href.split('#')[0],'index.html')),`${g.key}: internal link ${href}`);
  });
  article.find('img').each((i,n)=>{
    images++;
    check(!!$(n).attr('alt')&&!!$(n).attr('width')&&!!$(n).attr('height'),`${g.key}: image metadata`);
    check(fs.existsSync(path.join('dist',$(n).attr('src'))),`${g.key}: local photo`);
  });
  check($('form').length>=1,`${g.key}: production contact form`);
  check(!article.text().includes('market example'),`${g.key}: no market examples`);
  const auth=load(fs.readFileSync(`dist/post/${g.authenticationSlug}/index.html`,'utf8'));
  check(auth(`a[href="${route}"]`).length>=1,`${g.key}: reciprocal authentication link`);
}
const result={date:'2026-10-26',pages:guides.length,priceRows,contentPhotos:images,errors};
fs.writeFileSync('docs/martin-value-guides/page-validation.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));
if(errors.length)process.exitCode=1;
