import test from 'node:test';
import assert from 'node:assert/strict';
import {keepEarlierAnswers,withAnswer} from './serial-questions.ts';
const q=(key:string)=>({key,prompt:key,choices:[{value:'a',label:'A'},{value:'b',label:'B'}]});
test('an answer is marked only when it matches a choice',()=>{assert.equal(withAnswer(q('where'),{where:'a'}).answer,'a');assert.equal(withAnswer(q('where'),{where:'z'}).answer,undefined);assert.equal(withAnswer(q('where'),{}).answer,undefined);});
test('changing an earlier answer clears the answers after it',()=>{const qs=[q('where'),q('label')];assert.deepEqual(keepEarlierAnswers(qs,{where:'a',label:'b',usa:'yes'},'where','b'),{where:'b'});assert.deepEqual(keepEarlierAnswers(qs,{where:'a'},'label','a'),{where:'a',label:'a'});});
