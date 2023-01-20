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

    if ((playerSelection === "rock") || (playerSelection === "paper") || 
        (playerSelection === "scissors")) {
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
        return "tie";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "win";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "loss";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "loss";    
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "win";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "win";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "loss";
    }
    else {
        return "Something went wrong.";
    }
}

function game() {
    let winCounter = 0;
    let lossCounter = 0;
    let tieCounter= 0;
    let round;
    for (let i = 0; i < 5; i++) {
        round = playRound(getPlayerChoice(), getComputerChoice());
        if (round === "win") {
            console.log("You chose " + playerSelection + " and the computer chose " +
                        computerSelection + ". You win this round!");
            winCounter++;
            if (winCounter === 3) {
                break;
            }
        }
        else if (round === "loss") {
            console.log("You chose " + playerSelection + " and the computer chose " +
                        computerSelection + ". You lose this round!");
            lossCounter++;
            if (lossCounter === 3) {
                break;
            }
        }
        else {
            console.log("You chose " + playerSelection + " and the computer chose " +
                        computerSelection + ". You tied this round!");
            tieCounter++;
        }
    }
    console.log("rounds won: " + winCounter);
    console.log("rounds lost: " + lossCounter);
    console.log("rounds tied: " + tieCounter);
    if (winCounter > lossCounter) {
        console.log("Congratulations! You won the game!");
    }
    else if (winCounter < lossCounter) {
        console.log("Oh no! You lost the game!");
    }
    else {
        console.log("You tied the game!");
    }
}

game();