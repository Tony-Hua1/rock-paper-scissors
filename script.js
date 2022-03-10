console.log("Hello, World!");

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