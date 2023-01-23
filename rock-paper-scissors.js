let computerSelection;
let playerSelection;
let round = 1;
let winCounter = 0;
let lossCounter = 0;
let tieCounter= 0;
const roundDiv = document.querySelector('#round');
let playerSelectionHeading = document.createElement('h4');
let computerSelectionHeading = document.createElement('h4');
roundDiv.appendChild(playerSelectionHeading);
roundDiv.appendChild(computerSelectionHeading);

function getComputerChoice() {
    
    min = Math.ceil(1);
    max = Math.floor(4);
    computerSelection = Math.floor(Math.random() * (max - min) + min);

    if (computerSelection === 1) {
        return "rock";
    }
    else if (computerSelection === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionHeading.textContent = ("You chose " + playerSelection + ".");
    computerSelectionHeading.textContent = ("The computer chose " + computerSelection + ".");

    if (playerSelection === computerSelection) {
        tieCounter++;
        return "tie";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        winCounter++;
        return "win";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        lossCounter++;
        return "loss";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        lossCounter++;
        return "loss";    
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        winCounter++;
        return "win";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        winCounter++;
        return "win";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        lossCounter++;
        return "loss";
    }
    else {
        return "Something went wrong.";
    }
}

function game() {
    console.log("rounds won: " + winCounter);
    console.log("rounds lost: " + lossCounter);
    console.log("rounds tied: " + tieCounter);
    
    if ((round === 5) && (winCounter > lossCounter)) {
        console.log("Congratulations! You won the game!");
    }
    else if ((round === 5) && (winCounter < lossCounter)) {
        console.log("Oh no! You lost the game!");
    }
    else if ((round === 5) && (winCounter === lossCounter)){
        console.log("You tied the game!");
    }

    if (round === 5) {
        round = 0;
        winCounter = 0;
        lossCounter = 0;
        tieCounter = 0;
    }
}

let buttons = document.querySelectorAll('button');
    
buttons.forEach(function (i) {
    i.addEventListener('click', function () {
        playRound(i.id, getComputerChoice());
        game();
        round++;
    });
});