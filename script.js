game();

function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	let computerSelection = "";

	switch(randomNumber) {
		case 1:
			computerSelection = "Rock";
			break;
		case 2:
			computerSelection = "Paper";
			break;
		case 3:
			computerSelection = "Scissors";
			break;
		default:
			computerPlay = "";
	}
	return computerSelection;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection == 'rock') {
		if (computerSelection == 'rock') {
			return "It's a draw!";
		} else if (computerSelection == 'paper') {
			return "You lose! Paper beats Rock";
		} else if (computerSelection == 'scissors') {
			return "You win! Rock beats Scissors";
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'rock') {
			return "You win! Paper beats Rock";
		} else if (computerSelection == 'paper') {
			return "It's a draw!";
		} else if (computerSelection == 'scissors') {
			return "You lose! Scissors beats Paper";
		}
	} else if (playerSelection == 'scissors') {
		if (computerSelection == 'rock') {
			return "You lose! Rock beats Scissors!";
		} else if (computerSelection == 'paper') {
			return "You win! Scissors beats Paper";
		} else if (computerSelection == 'scissors') {
			return "It's a draw!";
		}	
	}
}

function game() {
	let playerSelection = prompt("Pick Rock, Paper, or Scissors: ");
	let computerSelection = computerPlay();
	let str = playRound(playerSelection, computerSelection);
	
	console.log(playRound(playerSelection, computerSelection));
}