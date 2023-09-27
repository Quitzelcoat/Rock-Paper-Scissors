// Create a function getComputerChoice
// create an array for 3 values(rock,paper,scissors).
// Choose the array inside func to random choose the values from it.

let choices = ["rock", "paper", "scissors"];

let theUser = 0;
let theComputer = 0;

function getComputerChoice () {

    let choose = choices[Math.floor(Math.random() * choices.length)];
    return choose;
}

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "You draw this round by choosing " + playerSelection + " While computer also chose " + computerSelection;
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        theUser++;
        return "Congratulations! you won by choosing " + playerSelection + " while the computer chose " + computerSelection;
    }

    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        theComputer++;
        return "Sorry! you lost because the computer chose " + computerSelection + " while the you chose " + playerSelection;
    } else (!(playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper")); {
        return "Sorry please input the right words!"
    }

}

/*
create a new function in which add the previous function (of computer vs user) into this function 
to run previous function 5 times and each time add the score by 1. Of if the computer wins
it gets 1 score and if user wins it gets 1 score to it for 5 times and in the end show
the message telling wether user won more points than computer or not.

inputs:
put previous function into this function 5 times.
each time it should add 1 or subtract 1 from the 5 turns and show how many turns are left.
after each turn it should input the total num of times the user and computer won.
create another input which will show the result of the all 5 turns and tell if computer won or the user.

output:
shows 5 turns and after each round should add 1 or subtract 1 5 times and show the remaining numbers.
Show the total score of the user and the computer after each turn
when last turn is done instead of the num show message of if the user won the total score or the computer

run for 5 rounds each time adding 1 to 5 rounds or subtracting 1 from 5 to show it 4.
first time to last if computer wins 1 point to computer and if player wins 1 point to player.
after 5 times if player total points > computer points write you win.
if total points of computer > player points write you loose play again. 
*/

function game() {


    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock", "Paper", "Scissors");
        const computerSelection = getComputerChoice();

        const currentRound = playRound(playerSelection, computerSelection);

        console.log("Round: ", (i + 1));
        console.log(currentRound);
        console.log("User Score:", theUser);
        console.log("Computer Score", theComputer);

        
    }

    if (theComputer > theUser) {
        return "Unpredicted! You Lost. Please try again next time";
    } else if (theUser > theComputer) {
        return "Congratulations! You Won a new achievement has been made.";
    } else {
        return "Good try! Its a tie. Try your luck next time";
    }
}

alert(game());
const playerSelection = prompt("Rock, Paper, Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
