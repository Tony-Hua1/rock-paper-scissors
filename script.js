let playerSelection = "Paper";
let computerSelection = computerPlay();

playRound(playerSelection, computerSelection);

// console.log(playerSelection);
// console.log(computerSelection);

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
			console.log("It's a draw!");
		} else if (computerSelection == 'paper') {
			console.log("You lose! Paper beats Rock")
		} else if (computerSelection == 'scissors') {
			console.log("You win! Rock beats Scissors");
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'rock') {
			console.log("You win! Paper beats Rock");
		} else if (computerSelection == 'paper') {
			console.log("It's a draw!")
		} else if (computerSelection == 'scissors') {
			console.log("You lose! Scissors beats Paper");
		}
	} else if (playerSelection == 'scissors') {
		if (computerSelection == 'rock') {
			console.log("You lose! Rock beats Scissors!");
		} else if (computerSelection == 'paper') {
			console.log("You win! Scissors beats Paper")
		} else if (computerSelection == 'scissors') {
			console.log("It's a draw!");
		}	
	}
}