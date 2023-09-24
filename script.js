// Create a function getComputerChoice
// create an array for 3 values(rock,paper,scissors).
// Choose the array inside func to random choose the values from it.


function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let choose = choices[Math.floor(Math.random() * choices.length)];
    console.log(choose);
}


function playRound (playerSelection, computerSelection) {
    
    playerSelection = prompt("Rock, Paper, Scissors.");
    
    computerSelection = getComputerChoice;
    
    if (playerSelection == "rock" && getComputerChoice == "rock") {
        console.log("you won");
    } else {
        console.log("you lost");
    }
    
    console.log(playerSelection)
    
}

playRound();
getComputerChoice();