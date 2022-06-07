'use strict';
const arr = [3, 1, 4, 3, 2];

// MAP
const map = arr.map(x => x * 2);
console.log('Arr: ', arr);
console.log('Map: ', map);

// FILTER
console.log(arr.filter(x => x > 2));

// REDUCE
console.log(arr.reduce((p, c) => p / c));
