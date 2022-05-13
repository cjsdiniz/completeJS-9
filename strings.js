'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[1]); // 7

console.log(airline.length); // 16
console.log('B737'.length); // 4

// Methods
console.log(airline.indexOf('r')); // First element
console.log(airline.lastIndexOf('r')); // Last element
console.log(airline.indexOf('Portugal')); //8 -> First occurrence

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleseat = function (seat) {
  // B and E are moddle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
  else console.log('You got lucky 😎');
};

checkMiddleseat('11B');
checkMiddleseat('22C');
checkMiddleseat('3E');
