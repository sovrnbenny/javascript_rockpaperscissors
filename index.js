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

    let choice;  // ← we'll store the actual string here

    if (randomNum1 === 1) {
        choice = "rock";
    } else if (randomNum1 === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    computerHand.textContent = choice;   // still update the display
    return choice;                       // ← return the string!
}

function getHumanChoice(){
    
    randomHand = prompt("Choose rock, paper, or scissors").toLowerCase().trim();
    humanHand.textContent = randomHand;
    // add an error message for invalid entries
    return randomHand;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        humanCount.textContent = humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        computerScore++;
        computerCount.textContent = computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}





myButton.onclick = function() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection); 
}
