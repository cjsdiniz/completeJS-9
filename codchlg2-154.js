'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogs = [...dogsJulia, ...dogsKate];

const calcAverageHumanAge = dogs => {
  const dogsAgeHuman = dogs.map(x => (x <= 2 ? x * 2 : 16 + x * 4));
  const dogsAgeHuman18plus = dogsAgeHuman.filter(x => x >= 18);
  console.log(`Dogs ages: ${dogs}`);
  console.log(`1) Dogs ages human like: ${dogsAgeHuman}`);
  console.log(`2) Dogs ages human like > 18: ${dogsAgeHuman18plus}`);
  console.log(
    `3) Average Dogs age human like > 18: ${
      dogsAgeHuman18plus.reduce((p, c) => p + c) / dogsAgeHuman18plus.length
    }`
  );
};
//TEST DATA
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
// calcAverageHumanAge(dogs);
calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
//console.log(Math.average(dogs));
