const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //thu
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// #Destructuring
// ## Stardard
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// ## Simple destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [fst, , snd] = restaurant.categories;
console.log(fst, snd);

// ## Switch Arrays
let [s, f] = [fst, snd];
console.log(f, s);

// ## Destruct examples
// ### 1.
console.log('🚩', restaurant.order(2, 0));
const [stt, main] = restaurant.order(2, 0);
console.log(stt, main);

// ### 2.
const nest = [2, 4, [6, 8]];

// ## Simple Destruct
const [i, , j] = nest;
console.log(i, j);

// ## Nested Destruct
const [k, , [l, m]] = nest;
console.log(k, l, m);

// ## Destructuring using default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// ###
const arr1 = [7, 8, 9];
const bnArr = [1, 2, arr1];
console.log(bnArr);

const nArr = [1, 2, ...arr1];
console.log(nArr);
console.log(...nArr);
