'use strict';

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Objective Output:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
let recs = flights.split('+');
//console.log(recs);
// let fStatus = '';
for (const r of recs) {
  const fld = r.slice(1).split(';');
  //console.log(fld);
  let ret = `${fld[0].replace('_', ' ')} from ${fld[1]
    .slice(0, 3)
    .toUpperCase()} to ${fld[2].slice(0, 3).toUpperCase()} (${fld[3].replace(
    ':',
    'h'
  )})`;
  ret.startsWith('Delayed') ? (ret = '🔴 ' + ret) : (ret = '🟩 ' + ret);
  ret = ret.padStart(45);
  console.log(ret);
}
