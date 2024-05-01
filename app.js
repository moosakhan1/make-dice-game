var secretNumber = Math.ceil(Math.random() * 6)+ 1;


console.log(secretNumber);

function add() {
    var guess = parseInt(document.getElementById("guessInput").value)
    var resultDisplay = document.getElementById("result"); 
    
    
    if (guess === secretNumber) {
        resultDisplay.textContent = `you win`
        console.log(resultDisplay.textContent);
    }else{
        resultDisplay.textContent = `Not a win ${secretNumber}`;
        console.log( resultDisplay.textContent);
    }
}