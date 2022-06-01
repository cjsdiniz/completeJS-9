'use strict';

// ## Example
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// ## Example 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 78;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

h();
f();
console.dir(f);
