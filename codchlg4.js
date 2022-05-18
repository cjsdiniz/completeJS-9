'use strict';
///////////////////////////////////////
// Coding Challenge #4
// Convert list to camelCase
/* TEST DATA
     underscore_case
      first_name
    Some_Variable
      Calculate_AGE
    delayed_departure
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  let text = document.querySelector('textarea').value;
  //console.log(text);
  //convNames(varNames);
  convNames(text);
});

const varNames = [
  'underscore_case',
  ' first_name',
  'Some_Variable',
  '  Calculate_AGE',
  'delayed_departure',
];

const convNames = function (names) {
  let c = 1;
  let pad = 0;
  for (const n of names) {
    if (n.length > pad) {
      pad = 35 - n.length;
    }
    const [fst, snd] = n.trim().toLowerCase().split('_');
    let ret = fst + snd[0].toUpperCase() + snd.slice(1);
    ret = ret.padEnd(pad, ' ') + '✅'.repeat(c);
    c++;
    console.log(ret);
  }
};

//convNames(varNames);
