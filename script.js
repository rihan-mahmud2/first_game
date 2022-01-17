'use strict';

const randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').innerHTML = randomNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Put a number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '32rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low number!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
