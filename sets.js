'use strict';

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risoto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Bob'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Garlic Bread');
console.log(ordersSet);
