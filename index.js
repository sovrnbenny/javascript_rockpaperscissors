const myButton = document.getElementById('myButton');
const computerHand = document.getElementById('computerHand');
const humanHand = document.getElementById('humanHand');
let randomNum1;
let randomHand;


function getComputerChoice(){
    randomNum1 = Math.floor(Math.random() * 3) + 1;

        if(randomNum1 == 1){
        computerHand.textContent = "rock";
        }
        else if(randomNum1 == 2){
        computerHand.textContent = "paper"; 
        }
        else{computerHand.textContent = "scissors";
        }
}

function getHumanChoice(){
    
    randomHand = prompt("Choose rock, paper, or scissors");
    humanHand.textContent = randomHand
}

myButton.onclick = function() {
    getComputerChoice();
    getHumanChoice();
} 

