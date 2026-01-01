const myButton = document.getElementById('myButton');
const hand1 = document.getElementById('hand1');
const hand2 = document.getElementById('hand2');
const hand3 = document.getElementById('hand3');
let randomNum1;
let randomNum2;
let randomNum3;


function getComputerChoice(){
    randomNum1 = Math.random();
    hand1.textContent = randomNum1;
}

myButton.onclick = getComputerChoice



