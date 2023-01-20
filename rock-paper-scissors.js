let computerSelection;
let playerSelection;

function getComputerChoice() {
    
    min = Math.ceil(1);
    max = Math.floor(4);
    computerSelection = Math.floor(Math.random() * (max - min) + min);

    if (computerSelection === 1) {
        return computerSelection = "rock";
    }
    else if (computerSelection === 2) {
        return computerSelection = "paper";
    }
    else {
        return computerSelection = "scissors";
    }
}

function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors")) {
        return playerSelection;
    }
    else {
        alert("Please enter rock, paper, or scissors.");
        return getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("You chose " + playerSelection);
    console.log("The computer chose " + computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie! You and the computer chose " + playerSelection + ".";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats scissors!";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You lose! Paper beats rock!";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "You lose! Rock beats scissors!";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats paper!";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win! Rock beats paper!";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "You lose! Scissors beats paper!";
    }
    else {
        return "Something went wrong.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
}