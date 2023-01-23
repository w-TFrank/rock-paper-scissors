let computerSelection;
let playerSelection;
let round = 1;
let winCounter = 0;
let lossCounter = 0;
let tieCounter= 0;
const body = document.querySelector('body');
const choices = document.querySelector('#choices');
const counters = document.querySelector('#counters');
let roundCounter = document.querySelector('#round-counter');
let playerSelectionHeading = document.createElement('h4');
let computerSelectionHeading = document.createElement('h4');
let numberOfWins = document.createElement('h3');
let numberOfLosses = document.createElement('h3');
let numberOfTies = document.createElement ('h3');
let gameOver = document.createElement ('h1');
choices.appendChild(playerSelectionHeading);
choices.appendChild(computerSelectionHeading);
counters.appendChild(numberOfWins);
counters.appendChild(numberOfLosses);
counters.appendChild(numberOfTies);
body.appendChild(gameOver);

function getComputerChoice() {   
    min = Math.ceil(1);
    max = Math.floor(4);
    computerSelection = Math.floor(Math.random() * (max - min) + min);
    if (computerSelection === 1) {
        return "rock";
    } else if (computerSelection === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionHeading.textContent = ("You chose " + playerSelection + ".");
    computerSelectionHeading.textContent = ("The computer chose " + computerSelection + ".");
    roundCounter.textContent = ("Round " + round);

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
    numberOfWins.textContent = ("Won: " + winCounter);
    numberOfLosses.textContent = ("Lost: " + lossCounter);
    numberOfTies.textContent = ("Tied " + tieCounter);
    
    if (winCounter === 3) {
        gameOver.textContent = ("Congratulations! You won the game!");
        body.appendChild(playAgain);
        playAgain.textContent = "Play again";
    } else if (lossCounter === 3) {
        gameOver.textContent = ("Oh no! You lost the game!");
        body.appendChild(playAgain);
        playAgain.textContent = "Play again";
    } else if ((round === 5) && (winCounter > lossCounter)) {
        gameOver.textContent = ("Congratulations! You won the game!");
        body.appendChild(playAgain);
        playAgain.textContent = "Play again";
    } else if ((round === 5) && (winCounter < lossCounter)) {
        gameOver.textContent = ("Oh no! You lost the game!");
        body.appendChild(playAgain);
        playAgain.textContent = "Play again";
    } else if ((round === 5) && (winCounter === lossCounter)){
        gameOver.textContent = ("You tied the game!");
        body.appendChild(playAgain);
        playAgain.textContent = "Play again";
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
const playAgain = document.createElement('button');
playAgain.addEventListener('click', reset);

function reset() {
    round = 1;
    winCounter = 0;
    lossCounter = 0;
    tieCounter = 0;
    gameOver.textContent = "";
    playerSelectionHeading.textContent = "";
    computerSelectionHeading.textContent = "";
    numberOfWins.textContent = "";
    numberOfLosses.textContent = "";
    numberOfTies.textContent = "";
    roundCounter.textContent = ("Round " + round);
    playAgain.remove();
}