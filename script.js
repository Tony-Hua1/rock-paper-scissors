let div = document.querySelector("div");
let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
rock.addEventListener("click", function() {
	str = playRound("Rock", computerPlay());
	div.innerHTML += str + "<br />";
	checkScore(str);
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function() {
	str = playRound("Paper", computerPlay());
	div.innerHTML += str + "<br />";
	checkScore(str);
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
	str = playRound("scissors", computerPlay());
	div.innerHTML += str + "<br />";
	checkScore(str);
});

function checkScore(str) {
	if (playerScore == 5 || computerScore == 5) {
		div.innerHTML += "<br />" + `Your Score: ${playerScore}` + "<br />";
		div.innerHTML += `Computer Score: ${computerScore}` + "<br />";
		
		if (playerScore > computerScore) {
			div.innerHTML += "You won the game!";
		} else if (playerScore < computerScore) {
			div.innerHTML += "You lost the game!";
		} else {
			div.innerHTML += "It is a draw game!";
		}
		
		div.innerHTML += "<br />" + "<br />";
		playerScore = 0;
		computerScore = 0;
	} else {
		if (str.substring(0, 7) == "You win") {
			playerScore++;
		} else if (str.substring(0, 8) == "You lose") {
			computerScore++;
		}
	}
}

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