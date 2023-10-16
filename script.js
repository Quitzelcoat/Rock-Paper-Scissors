let choices = ["rock", "paper", "scissors"];

let theUser = 0;
let theComputer = 0;
let round = 0;


/* computer random choice */

function getComputerChoice () {
    let choose = choices[Math.floor(Math.random() * choices.length)];
    return choose;
}

/* The result of the choosen choice */

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

/* Display the choices on the DOM */

const btns = document.querySelectorAll('button');
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const totalScore = document.getElementById("totalScore");


btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(round < 5) {
            const playerSelection = button.getAttribute('data-choice');
            const computerSelection = getComputerChoice();
            const choiceResult = playRound(playerSelection, computerSelection);
            const result = document.getElementById("result");
            result.textContent = choiceResult;
            round++;
            totalScore.textContent = `Rounds: ${round}`;
            playerScore.textContent = `Player: ${theUser}`;
            compScore.textContent = `Computer: ${theComputer}`;
        }

        if(round === 5) {
            const winner = document.getElementById("winner");

            if (theComputer > theUser) {
                winner.textContent = "Unpredicted! You Lost. Please try again next time";
            } else if (theUser > theComputer) {
                winner.textContent = "Congratulations! You Won a new achievement has been made.";
            } else {
                winner.textContent = "Good try! Its a tie. Try your luck next time";
            }
        }
    });
});

// To Reset the entire game

const resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener('click', () => {
    theUser = 0;
    theComputer = 0;
    round = 0;

    const result = document.getElementById("result");
    const totalScore = document.getElementById("totalScore");
    const winner = document.getElementById("winner");

    result.textContent = "";
    totalScore.textContent = "Round, 0";
    theUser.textContent = "Player: 2"
    theComputer.textContent = "Computer: 0";
    winner.textContent = "";
});

const computerSelection = getComputerChoice();