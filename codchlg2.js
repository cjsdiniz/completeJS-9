'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const goals = Object.entries(game.scored);
for (const [g, plr] of goals) {
  console.log(`Goal ${Number(g) + 1}:  ${plr}`);
}

// 2. Calc odd average
const odds = Object.values(game.odds);
let avg = 0;
for (const o of odds) {
  avg += o;
}
avg /= odds.length;
console.log(`Odds average: ${avg.toFixed(2)}`);
// console.log(goals);

// 3. Print odds
let tm = '';
for (const [t, o] of Object.entries(game.odds)) {
  tm = game[t] ?? 'draw';
  console.log(tm, o);
}
console.log('🚩');
// 4. Scorers
let scorers = {
  name: [],
  goals: [],
};
let i = 0;
for (const pl of game.scored) {
  let gls = 0;
  // console.log(pl);
  if (scorers.name.includes(pl)) {
    i = scorers.name.indexOf(pl);
    scorers.goals[i] = Number(scorers.goals[i]) + 1;
    // gls = Number(scorers.goals[i]);
    // gls++;
    // scorers.goals[i] = gls;
  } else {
    scorers.name.push(pl);
    scorers.goals.push(1);
  }
}
console.log(scorers);
