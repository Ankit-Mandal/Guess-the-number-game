'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.ceil(Math.random() * 20);

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

// Actions do be performed when the 'Again' button is clicked, i.e., when the game is reset.
document.querySelector('.again').addEventListener('click', function () {
	// JS change
	score = 20;
	secretNumber = Math.ceil(Math.random() * 20);
	// HTML change
	document.querySelector('.game-name').textContent = 'Guess My Number!';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.score').textContent = score;
	displayMessage('🤔 Start guessing...');
	document.querySelector('.guess').value = '';
	// CSS change
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});

// Actions do be performed when the input button is clicked
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	// When there is no input
	if (!guess) {
		displayMessage('⛔ No number in input!');
	} else {
		// When player wins the game
		if (guess === secretNumber) {
			// HTML change
			document.querySelector('.game-name').textContent = 'My number is';
			document.querySelector('.number').textContent = secretNumber;
			displayMessage("🥳 You're Correct!");
			// CSS change
			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').style.width = '35rem';
			// Changing the highscore
			if (score > highScore) {
				highScore = score;
				document.querySelector('.highscore').textContent = highScore;
			}
			// Now that we have got the correct number, we will now disable the input button. This is to ensure that the score count doesn't continue to decrease even if we input random numbers, inspite of us already getting the correct number earlier.
			document.querySelector('.check').disabled = true;
		} else if (guess !== secretNumber) {
			if (score > 1) {
				document.querySelector('.score').textContent = --score;
				displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
			} else {
				document.querySelector('.score').textContent = 0;
				displayMessage('😢 You lost the game!');
			}
		}
	}
});
