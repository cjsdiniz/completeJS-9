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
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [fst, , snd] = restaurant.categories;
console.log(fst, snd);

// Switch Arrays
let [s, f] = [fst, snd];
console.log(f, s);
