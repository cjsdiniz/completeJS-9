'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ingr1, ingr2, ...rest) {
    console.log(
      `Here's your pasta with the ingredients: ${ingr1},${ingr2},${rest}`
    );
  },

  orderPizza: function (mainIngr, ...otherIngr) {
    console.log(mainIngr, ...otherIngr);
  },
};

// # 1) Destructuring: Spread operator
// ## In Arrays
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log('Old arr: ', badNewArray);

const newArr = [1, 2, arr];
console.log('New arr: ', newArr);

const newSpreadArr = [1, 2, ...arr];
console.log('Spread arr: ', newSpreadArr);
console.log(...newSpreadArr);

// ###Create new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// ### Copy arrays
const mainMenuCp = [...restaurant.mainMenu];
console.log('Menu Cp: ', mainMenuCp);
console.log("Menu Cp': ", ...mainMenuCp);

// ### Join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
*/
// ### Iterables
// const str = 'Letter';
// const letters = [...str, "'", 's'];
// console.log(...letters);

// #### Pasta
// const ings = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// SPREAD:
/*
const ings = ['cheese', 'tomato', 'ham', 'mushrooms'];
//console.log(ings);
restaurant.orderPasta(...ings);

//Objects
const newRest = { ...restaurant, founded: 1980 };
console.log(newRest);

//
const restaurantCp = { ...restaurant };
restaurantCp.name = 'Restaurant Roma';
console.log(restaurant.name, '\n', restaurantCp.name);


const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);
console.log(a, b, others);

const [p, , r, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('Out1: ', p, r, other);
console.log('Out2: ', p, r, ...other);
console.log('Out3: ', ...other);

const { sat, ...wd } = restaurant.openingHours;
console.log('Weekdays: ', wd);
*/
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole,21',
  starterIndex: 1,
});




const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Deestructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [f, s] = restaurant.categories;
const [fst, , trd] = restaurant.categories;
console.log(f, s);
console.log(fst, trd);

// Nested arrays destructuring
const nested = [2, 4, [5, 8]];
const [q, , w] = nested;
console.log('Nested: ', q, w);

const [, , e] = nested;
console.log('Nested2: ', e);

const [e1, , [e2, e3]] = nested;
console.log('Nested2: ', e1, e2, e3);

// Default values
const [o = 1, p = 0, t = 2] = [, , 9];
console.log(o, p, t);

// #Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// ##Mutating variables
let m = 111;
let n = 999;
const obj = { m: 23, n: 7, c: 14 };
({ m, n } = obj);
console.log(m, n);
// ## Nested objects
const { fri } = openingHours;
console.log(fri);
// ### Organic
const {
  fri: { open: i, close: j },
} = openingHours;
console.log(i, j);

*/

// 2) Functions
const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 1, 4);
add(2, 3, 8, 5, 2);

const x = [23, 5, 12];
add(...x);

restaurant.orderPizza('cheese', 'tomato', 'ham', 'mushrooms');
restaurant.orderPizza('mushrooms');

// # Short-circuiting
// ## OR operator
console.log(3 || 'Mike');
console.log('' || 'Mike');
console.log(true || 0);
console.log(1 || true);
console.log(undefined || null);

restaurant.numGuests = 24;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guest1 = restaurant.numGuests || 10;
console.log(guest1);

// ## AND operator
restaurant.numGuests = 24;
const guest2 = restaurant.numGuests && 10;
console.log(guest2);

console.log('cheese' && 0 && 1);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
