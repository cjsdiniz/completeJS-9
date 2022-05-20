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

const flightNum = 'TP2022';
const person = {
  name: 'Luís Diniz',
  passport: 164798654,
};

const checkIn = function (flightNum, person) {};

checkIn(flightNum, person);
