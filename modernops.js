'use strict';

// # DATA:
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
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

  numGuests: 23,
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
    // console.log(ings);
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(...otherIng);
  },
};

// # DATA END.
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// order pizza if function exists
//if (restaurant.orderPizza) restaurant.orderPizza('cheese', 'tomato');
/*
console.log(3 || 'Me');
console.log(3 && null && 'Me');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guests3 = 10 && restaurant.numGuests;
console.log(guests3);

console.log('🚩');

const guests4 = restaurant.numGuests ?? 10;
console.log(guests4);

const t = 1 && restaurant.numGuests && 2;
console.log(t);
*/
/*
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
console.log('🚩');
restaurant ?? orderPizza('mushrooms', 'spinach');

restaurant.numGuests;

*/
/*
// ### Array examples
const arr = [1, 2, ...[3, 4]];

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);
console.log(a, b, ...rest);

const [p, , r, ...rest1] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(p, r, ...rest1);

// Objects examples
const { sat, ...wdays } = restaurant.openingHours;
console.log(wdays);

// 2.
const add = function (...nums) {
  let sum = 0;
  for (const i of nums) {
    sum += Number(i);
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('cheese', 'tomato', 'ham', 'mushrooms');
*/
/*
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

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy arrays
const mainMenuCp = [...restaurant.mainMenu];
console.log(mainMenuCp);

// Join 2+ Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'palavra';
console.log(...(str + 's'));
console.log('🚩');

// ### Example
const ings = ['cheese', 'ham', 'mushrooms'];
restaurant.orderPasta(...ings);

// Objects
const newRest = { founded: 1980, founder: 'Guiseppe', ...restaurant };
console.log(newRest);

const restCp = { ...restaurant };
restCp.name = 'Roma Linda';
console.log(restCp);

*/
