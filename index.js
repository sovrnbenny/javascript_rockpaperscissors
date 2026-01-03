const myButton = document.getElementById('myButton');
const hand1 = document.getElementById('hand1');
const hand2 = document.getElementById('hand2');
const hand3 = document.getElementById('hand3');
let randomNum1;
let randomNum2;
let randomNum3;


function getComputerChoice(){
    randomNum1 = Math.floor(Math.random() * 3) + 1;
    randomNum2 = Math.floor(Math.random() * 3) + 1;
    randomNum3 = Math.floor(Math.random() * 3) + 1;

        if(randomNum1 == 1){
        hand1.textContent = "rock";
        }
        else if(randomNum1 == 2){
        hand1.textContent = "paper"; 
        }
        else{hand1.textContent = "scissors";
        }

        if (randomNum2 === 1) {
        hand2.textContent = "rock";
        } 
        else if (randomNum2 === 2) {
        hand2.textContent = "paper"; 
        } 
        else {hand2.textContent = "scissors";
        }

        if (randomNum3 === 1) {
        hand3.textContent = "rock";
        } 
        else if (randomNum3 === 2) {
        hand3.textContent = "paper"; 
        } 
        else {hand3.textContent = "scissors";
        }
}

myButton.onclick = getComputerChoice



    