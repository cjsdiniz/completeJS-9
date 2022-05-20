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
    alert('Checked In');
  } else {
    alert('Wrong passport');
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
