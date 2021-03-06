'use strict';

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

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ingr1, ingr2, ...rest) {
    console.log(
      `Here's your pasta with the ingredients: ${ingr1},${ingr2},${rest}`
    );
  },

  orderPizza(mainIngr, ...otherIngr) {
    console.log(mainIngr, ...otherIngr);
  },

  orderFlag() {
    console.log('Flag! 🚩');
  },
};

const question = new Map([
  ['question', "What's' your favorite colour?"],
  [1, 'Blue'],
  [2, 'Green'],
  [3, 'Orange'],
  ['correct', 3],
  [true, 'Correct 🍕'],
  [false, 'Try again'],
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const ans = Number(prompt('Answer:'));
console.log(ans);
// #1:
ans === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

// #2:
console.log(question.get(question.get('correct') === ans));

// Convert Map to Array
console.log(question);
console.log([question]);
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

/*
rest.set('name', 'Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest);

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log('Size: ', rest.size);

console.log(rest.get(arr));
*/
