console.log('Hallo Welt')

let inputGuess = document.getElementById("inputGuess");
		let outputResult = document.getElementById("outputResult");
		let outputCount = document.getElementById("outputCount");
		
		let number; 
        let count;
		number = Math.floor(Math.random() * 100);

        console.log(number);
        console.log(count);




count = 0;

function checkNumber() {
	count = count + 1;
    if(count < 12){
        outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht.";
    } else {
        outputCount.innerHTML = "Du hast Verloren.";    
    }

    let guess = parseInt(inputGuess.value);			
if (guess < number){
	outputResult.innerHTML  = "Dein Tipp war zu niedrig.";
}
else if (guess > number){
	outputResult.innerHTML  = "Dein Tipp war zu hoch.";
}
else if (guess == number){
	outputResult.innerHTML  = "Richtig!";	
}
}

 

function newGame() {
    number = Math.floor(Math.random() * 100);
    count = 0;
    inputGuess.value = "";
    outputResult.innerHTML = "";
    outputCount.innerHTML = "";
    
    
}





