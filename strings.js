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

// # Strings II
// Changing case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passenger = 'cARloS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerLower);
console.log(passengerCorrect);

// Comparing / checking email address format
const email = 'cjsdiniz@outmail.com';
const loginEmail = '  CjSDiniz@OutMail.com \n';
console.log(loginEmail);

const lowerEmail = loginEmail.toLowerCase().trim();
console.log(lowerEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$');

console.log(priceUS);

const announcement = 'Boarding door 23! Boarding door 23!';
console.log(announcement);
// Change first occurrence
console.log(announcement.replace('door', 'gate'));

// Change  all occurences
console.log(announcement.replace(/door/g, 'gate'));

// Change  all occurences, new way
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Air'));
console.log(newPlane.startsWith('air'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Pratice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('Your are not allowed');
  else console.log('Welcome aboard');
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and cameras');
checkBaggage('Got some snacks and a gun for protection');

// # Strings III
// split the string
console.log('a+very+nice+string'.split('+'));
console.log(...'a+very+nice+string'.split('+'));
console.log('Carlos Diniz'.split(' '));

const [firstName, lastName] = 'Carlos Diniz'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const newPassenger = 'joão pedro silva';
const nameCap = [];
const capName = function (name) {
  const a = name.split(' ');
  for (const nm of a) {
    nameCap.push(nm[0].toUpperCase() + nm.slice(1));
  }
  return nameCap;
};

console.log(...capName(newPassenger));
