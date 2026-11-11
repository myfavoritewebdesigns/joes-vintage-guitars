import test from 'node:test';
import assert from 'node:assert/strict';
import {lookupRickenbacker} from './rickenbacker-lookup.ts';
const lookup=(serial:string,answers:Record<string,string>={})=>lookupRickenbacker(serial,2026,answers);
// Independent fixtures: Rickbeat's contemporary chart, RickResource's March
// 2000 registry, photographed instrument records and the factory decoder.
// Conflicts with the current factory decoder are documented in the report.
test('regular monthly formats, including all late-1990s month letters',()=>{
 const cases=[['GD1234','April 1967'],[' gd 12-34 ','April 1967'],['AA101','January 1961'],['ZA1234','January 1986'],['ZL1234','December 1986'],['A01234','January 1987'],['L91234','December 1996'],['M01234','January 1997'],['N01234','February 1997'],['P01234','March 1997'],['Q07346','April 1997'],['R01234','May 1997'],['S01234','June 1997'],['T01234','July 1997'],['U01234','August 1997'],['V01234','September 1997'],['W01234','October 1997'],['X01234','November 1997'],['Y01234','December 1997'],['Q18063','April 1998'],['Q18376','April 1998'],['Y14700','December 1998']];
 for(const [serial,date] of cases)assert.equal(lookup(serial).title,date,serial);
});
test('year/week rollover preserves late 1998 and 1999',()=>{
 for(const [serial,date] of [['9846122','Week 46, 1998'],['9846042','Week 46, 1998'],['9847052','Week 47, 1998'],['9851041','Week 51, 1998'],['9912001','Week 12, 1999'],['0001001','Week 01, 2000'],['2108001','Week 08, 2021']])assert.equal(lookup(serial).title,date,serial);
 assert.match(lookup('9830123').title,/Transition Needs Confirmation/);
 assert.equal(lookup('2153001').title,'Week 53 Needs Confirmation');
});
test('JK and JL keep both decades; replacement plates never invent a build date',()=>{
 assert.equal(lookup('JK123').title,'November 1960 Or 1970');
 assert.equal(lookup('JL123').title,'December 1960 Or 1970');
 assert.match(lookup('Z11234').title,/Replacement Plate/);
 assert.match(lookup('XX1234').message,/replacement guitar plates/);
 assert.match(lookup('XX1234',{instrument:'amp'}).title,/Amplifier/);
});
test('early Combo rules are bounded and do not turn a 1960 4C340 into 1953',()=>{
 for(const [serial,year] of [['4C6231','1956'],['6C444','1954'],['8C410','1954'],['65C7110','1957'],['85C7121','1957'],['4C7414A','1957']]){assert.match(lookup(serial).title,new RegExp(year),serial);assert.match(lookup(serial).message,/undated|dropped the year/,serial);}
 assert.equal(lookup('4C340').title,'Early Combo: Date Not Encoded');
 assert.doesNotMatch(lookup('4C340').message,/1953/);
 assert.match(lookup('4C7414A').message,/two-pickup 450/);
 assert.equal(lookup('6C444A').invalid,true);
});
test('Capri configuration patterns and exact examples stay distinct',()=>{
 for(const serial of ['2T100','2V123','3T121','3V125','2LT127'])assert.equal(lookup(serial).title,'Capri / F-Series: About 1958 To 1960',serial);
 assert.equal(lookup('2R022').title,'Early Stereo Format: About 1960');
 for(const serial of ['2LT125','2LV126'])assert.equal(lookup(serial).title,'Documented 1958 Number',serial);
 for(const serial of ['V81','V111'])assert.equal(lookup(serial,{instrument:'guitar'}).title,'Documented 1958 Capri Number',serial);
 for(const serial of ['V82','V110','V112'])assert.doesNotMatch(lookup(serial,{instrument:'guitar'}).title,/Documented 1958/);
});
test('shared B and C prefixes need instrument context, including prewar Spanish guitars',()=>{
 assert.equal(lookup('B7100').questions?.[0].key,'instrument');
 assert.equal(lookup('B7100',{instrument:'bass'}).title,'Possible 1957 Bass');
 assert.equal(lookup('B8100',{instrument:'bass'}).title,'Possible 1958 Bass');
 assert.equal(lookup('B100',{instrument:'bass'}).title,'Early Bass: Date Not Encoded');
 assert.match(lookup('B7100',{instrument:'steel'}).title,/Early Steel/);
 assert.match(lookup('B36',{instrument:'guitar'}).message,/Spanish guitars/);
 assert.match(lookup('C2733',{instrument:'guitar'}).message,/Spanish guitars/);
 assert.match(lookup('C1234').title,/Identify The Instrument/);
 assert.doesNotMatch(lookup('B7100',{instrument:'mandolin'}).message,/M-prefix/);
});
test('student, mandolin and steel references do not become a universal year formula',()=>{
 assert.equal(lookup('V7379',{instrument:'guitar'}).title,'Possible 1957 Student Guitar');
 assert.match(lookup('V0139',{instrument:'guitar'}).message,/1960/);
 assert.match(lookup('M101').message,/documented 1958 example/);
 assert.match(lookup('M101',{instrument:'guitar'}).title,/Need Confirmation/);
 for(const serial of ['A123','B123','C123','D123','E123','U123'])assert.match(lookup(serial,{instrument:'steel'}).title,/Early Steel/,serial);
});
test('short digits ask location, preserving sticker and 425 exceptions',()=>{
 assert.equal(lookup('4510').questions?.[0].key,'location');
 assert.match(lookup('4510',{location:'sticker'}).message,/around 1965/);
 assert.match(lookup('1234',{location:'vibrato'}).message,/1965 to 1967/);
 assert.match(lookup('1234',{location:'plate'}).message,/missing date characters/);
 assert.equal(lookup('4510',{location:'attic'}).questions?.[0].answer,undefined);
});
test('amplifier candidates and unrecognized inputs remain honest about limitations',()=>{
 assert.match(lookup('JN1234').title,/Amplifier/);
 for(const serial of ['', 'GD', 'GD12ABC','GD1234!','2100001','2154001','3501001','O01234','P21234','a'.repeat(25)])assert.equal(lookup(serial).invalid,true,serial);
 assert.match(lookup('unrecognized').message,/does not prove a counterfeit/);
});
