/**
 * Plain-language follow-up questions for the Gretsch and Guild serial decoders.
 *
 * The decoders read the serial first and ask a question only when the answer
 * changes the result, such as where a plain number sits on the guitar or which
 * model shares a prefix. Visitors never have to name a serial system up front.
 */
export interface SerialChoice {value:string;label:string;hint?:string;}
export interface SerialQuestion {
 key:string;
 prompt:string;
 help?:string;
 /** Optional link under the help text, such as a photo guide */
 link?:{href:string;text:string};
 choices:SerialChoice[];
 /** The choice the visitor already picked, if any */
 answer?:string;
}

/** Marks the visitor's answer on a question when it matches one of its choices. */
export function withAnswer(question:SerialQuestion,answers:Record<string,string>):SerialQuestion{
 const given=answers[question.key];
 return question.choices.some(c=>c.value===given)?{...question,answer:given}:{...question};
}

/** Records an answer and drops answers to later questions, which may no longer apply. */
export function keepEarlierAnswers(questions:SerialQuestion[],answers:Record<string,string>,key:string,value:string):Record<string,string>{
 const order=questions.map(q=>q.key),next:Record<string,string>={};
 for(const k of order.slice(0,Math.max(0,order.indexOf(key))))if(answers[k]!==undefined)next[k]=answers[k];
 next[key]=value;
 return next;
}

/**
 * Renders questions as groups of buttons. Clicking a choice calls onAnswer,
 * and the caller re-runs the decoder with that answer. Answered questions stay
 * visible so a visitor can change an earlier answer.
 */
export function renderSerialQuestions(questions:SerialQuestion[],onAnswer:(key:string,value:string)=>void):HTMLElement|null{
 if(!questions.length)return null;
 const panel=document.createElement('div');
 panel.className='sq-panel';
 for(const q of questions){
  const group=document.createElement('div');
  group.className='sq-question';
  group.setAttribute('role','group');
  const id='sq-'+q.key;
  group.setAttribute('aria-labelledby',id);
  const prompt=document.createElement('p');
  prompt.className='sq-prompt';
  prompt.id=id;
  prompt.textContent=q.prompt;
  group.append(prompt);
  if(q.help||q.link){
   const help=document.createElement('p');
   help.className='sq-help';
   if(q.help)help.append(q.help);
   if(q.link){
    const a=document.createElement('a');
    a.href=q.link.href;
    a.textContent=q.link.text;
    help.append(q.help?' ':'',a);
   }
   group.append(help);
  }
  const list=document.createElement('div');
  list.className='sq-choices';
  for(const c of q.choices){
   const b=document.createElement('button');
   b.type='button';
   b.className='sq-choice';
   b.dataset.key=q.key;
   b.dataset.value=c.value;
   b.setAttribute('aria-pressed',String(q.answer===c.value));
   const label=document.createElement('span');
   label.className='sq-choice-label';
   label.textContent=c.label;
   b.append(label);
   if(c.hint){
    const hint=document.createElement('span');
    hint.className='sq-choice-hint';
    hint.textContent=c.hint;
    b.append(hint);
   }
   b.addEventListener('click',()=>onAnswer(q.key,c.value));
   list.append(b);
  }
  group.append(list);
  panel.append(group);
 }
 return panel;
}
