document.getElementById("incrementBtn").addEventListener("click",incrementCounter);
document.getElementById("decrementBtn").addEventListener("click",decrementCounter);
document.getElementById("resetBtn").addEventListener("click",reserCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}

function incrementCounter(){
    counterValue++;
    updateCounterDisplay();
}

function decrementCounter(){
    counterValue--;
    updateCounterDisplay();
}

function reserCounter(){
    counterValue = 0;
    updateCounterDisplay();
}