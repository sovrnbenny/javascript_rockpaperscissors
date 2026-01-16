const myButton = document.getElementById('myButton');
const computerHand = document.getElementById('computerHand');
const humanHand = document.getElementById('humanHand');
const computerCount = document.getElementById("computerCount");
const handCount = document.getElementById("humanCount");
let randomNum1;
let randomHand;
let computerScore = 0;
let humanScore =0;

function getComputerChoice(){
    randomNum1 = Math.floor(Math.random() * 3) + 1;

    let choice;  

    if (randomNum1 === 1) {
        choice = "rock";
    } else if (randomNum1 === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    computerHand.textContent = choice;   
    return choice;                       
}

function getHumanChoice(){
    
    randomHand = prompt("Choose rock, paper, or scissors").toLowerCase().trim();
    humanHand.textContent = randomHand;
    return randomHand;
}

function playGame() {
    
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return "tie";
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            handCount.textContent = humanScore;  // Update UI
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "human";
        } else {
            computerScore++;
            computerCount.textContent = computerScore;  // Update UI
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

   
    console.log("=== Starting 5-Round Game ===");
    playRound(getHumanChoice(), getComputerChoice());  // Round 1
    playRound(getHumanChoice(), getComputerChoice());  // Round 2
    playRound(getHumanChoice(), getComputerChoice());  // Round 3
    playRound(getHumanChoice(), getComputerChoice());  // Round 4
    playRound(getHumanChoice(), getComputerChoice());  // Round 5

    
    console.log("=== Game Over ===");
    if (humanScore > computerScore) {
        console.log(`Final Score: You ${humanScore} - Computer ${computerScore}. You win the game! 🎉`);
    } else if (computerScore > humanScore) {
        console.log(`Final Score: You ${humanScore} - Computer ${computerScore}. Computer wins the game! 😔`);
    } else {
        console.log(`Final Score: You ${humanScore} - Computer ${computerScore}. It's a tie game! 🤝`);
    }
}

// Button handler: Start the full game on click
myButton.onclick = function() {
    playGame();
};