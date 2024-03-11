let again = document.querySelector('.again');
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
let btncheck = document.querySelector('.check');
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;

let guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(guessNumber);

const clientMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    clientMessage('No number');
  } else if (guess === guessNumber) {
    clientMessage('Correct Number!');
    document.querySelector('body').style.background = ' #60b347';
    number.textContent = guessNumber;
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== guessNumber) {
    if (score > 1) {
      clientMessage(guess > guessNumber ? 'Too High' : 'Too Low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      clientMessage('You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(guessNumber);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
