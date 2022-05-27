'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  addAnswer(ans) {
    poll.answers[ans] += 1;
  },

  registerNewAnswer() {
    const msg =
      poll.question +
      '\n' +
      poll.options.join('\n') +
      '\n(Write option number)';
    // poll.answers;
    // console.log();
    // console.log());
    // for (let i = 0; i < poll.options.length; i++) {
    //   console.log(poll.options[i]);
    // }
    // console.log();
    let n = 4;
    while (n > 3 || n < 0) {
      n = Number(prompt(msg + '\nPlease enter a number (0 to 3)'));
    }

    this.addAnswer(n);
    this.displayResults('string');
  },

  displayResults(type) {
    console.log(
      type === 'string' ? `Poll results are ${[...poll.answers]}` : poll.answers
    );
  },
};

// console.log(poll.answers);

// const
// };
//registerNewAnswer.menu();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);
