'use strict';
///////////////////////////////////////
// Coding Challenge #4
// Convert list to camelCase

const varNames = [
  'underscore_case',
  ' first_name',
  'Some_Variable',
  '  Calculate_AGE',
  'delayed_departure',
];

const convNames = function (names) {
  let c = 1;
  for (const n of names) {
    const [fst, snd] = n.trim().toLowerCase().split('_');
    const ret = fst + snd[0].toUpperCase() + snd.slice(1);
    c++;
    console.log(ret);
  }
};

convNames(varNames);
