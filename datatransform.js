'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [3, 1, 4, 3, 2];

// MAP
const map = arr.map(x => x * 2);
console.log('Arr: ', arr);
console.log('Map: ', map);

// FILTER
console.log(arr.filter(x => x > 2));

// REDUCE
console.log(arr.reduce((p, c) => p / c));

// FIND - Returns just the first element of the array
const find1st = movements.find(mov => mov < 0);
console.log(find1st);

console.log(accounts);
// const js = accounts.find(acc => acc.owner === 'Jonas');
const js = accounts.find(acc => acc.owner.startsWith('S'));
console.log(js);
