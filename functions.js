'use strict';
// # FUNCTIONS

// ## Example 1
console.log('🚩 Example 1 ');
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 100;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('TAP123');
createBooking('TAP123', 20);
createBooking('TAP123', 25);

// ## Example 2
console.log('🚩 Example 2 ');

const flight = 'TP2022';
const person = {
  name: 'Luís Diniz',
  passport: 164798654,
};

const checkIn = function (flightNum, passenger) {
  flightNum;
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 164798654) {
    // alert('Checked In');
    console.log('Checked In');
  } else {
    // alert('Wrong passport');
    console.log('Wrong passport');
  }
};

checkIn(flight, person);
console.log(flight);
console.log(person);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(person);
checkIn(flight, person);
console.log(person.passport);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(fn(str));
};

transformer('Test phrase', upperFirstWord);
transformer('Test phrase', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('✋');
// };

// document.body.addEventListener('click', high5);

// ['Carlos', 'Pedro', 'Joaquim'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet('Olá');
// greeter('Paulo');

// greet('Viva')('António');

// // Other way to write the Greet function
// const g = gr => n => console.log(`${gr} ${n}`);
// g('Olá')('Nuno');

const tap = {
  airline: 'TAP',
  iataCode: 'TP',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
};
/*
tap.book('123', 'André');
tap.book('456', 'José');
console.log('🚩', tap);

// Call method
const bk = tap.book;
bk.call(tap, 98, 'Nome');

// Apply method
const flight1 = [567, 'Jorge Reis'];
bk.apply(tap, flight1);
console.log(tap);

bk.call(tap, ...flight1);

console.log('🚩🚩🚩');
//Bind method
const bkLH = bk.bind(lufthansa);
const bkTP = bk.bind(tap);
bkLH(49, 'Ricardo');
bkTP(675, 'Luís');

const bkLH24 = bk.bind(lufthansa, 24);
bkLH24('Vitor');
*/
// With event listeners
tap.planes = 100;
tap.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', tap.buyPlane());

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.23, 100));

// ## IIFE
console.log('🚩\n *** IIFE ***');

(function () {
  console.log('IIFE');
})();

// OR

(() => {
  console.log('Never run again');
})();
