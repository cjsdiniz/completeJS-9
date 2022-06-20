'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogs = [...dogsJulia, ...dogsKate];

const calcAverageHumanAge = ages =>
  //console.log(`Dogs ages: ${ages}`);
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => (acc + age) / arr.length, 0);
//TEST DATA
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
// calcAverageHumanAge(dogs);
const avg1 = calcAverageHumanAge(data1);
const avg2 = calcAverageHumanAge(data2);
console.log(avg1, avg2);
//console.log(Math.average(dogs));
