'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

const registerNewAnswer = {
  act: () => {
    poll.answers;
    console.log(poll.question);
    for (let i = 0; i < poll.options.length; i++) {
      console.log(poll.options[i]);
    }
    console.log('(Write option number)');
    let n = 4;
    while (n > 3 || n < 0) {
      n = Number(prompt('Please enter a number (0 to 3)'));
    }

    registerNewAnswer.addAnswer(n);
    registerNewAnswer.displayResults('string');
  },

  addAnswer(ans) {
    poll.answers[ans] += 1;
  },

  displayResults(type) {
    console.log(
      type === 'string' ? `Poll results are ${[...poll.answers]}` : poll.answers
    );
  },
};
//registerNewAnswer.menu();

document
  .querySelector('.poll')
  .addEventListener('click', registerNewAnswer.act);
// console.log(poll.answers);
