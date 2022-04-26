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
// ordersSet.clear(); // Deletes all set
console.log(ordersSet);

for (const ord of ordersSet) {
  console.log(ord);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const uniqueStaff = new Set(staff);
console.log(uniqueStaff);
console.log(...uniqueStaff);
