// Create a function getComputerChoice
// create an array for 3 values(rock,paper,scissors).
// Choose the array inside func to random choose the values from it.

let choices = ["rock", "paper", "scissors"];

function getComputerChoice () {

    getComputerChoice = choices;

    let choose = getComputerChoice[Math.floor(Math.random() * choices.length)];
    console.log(choose);
}


function playRound (playerSelection, computerSelection) {
    
    playerSelection = prompt("Rock, Paper, Scissors.");
    
    computerSelection == getComputerChoice;
    
    if (playerSelection === computerSelection ) {
        console.log("you won");
    } else {
        console.log("you Lost");
    }
    
    console.log(playerSelection);
    
}

playRound();
getComputerChoice();