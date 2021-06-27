console.log('Hallo Welt')
let counter;
let userCounter = 0;
let pcCounter = 0;

let symbolPC;
let symbolUser;
let winCondition = 3;


function addCounter(){

    counter = document.getElementById('counterInput').value;

    if(counter < 1){

        //hier kommt ein PopUP
        addPopUp('Bitte geben Sie eine Zahl über 0 ein');
    } else {

        screenSissor1.classList.add('hidden');
        screenSissor2.classList.remove('hidden');

    }
}


function play(choice){

    if(counter > 0){
        
        let pcChoice = Math.ceil(Math.random() * 3);
        console.log(pcChoice);

        userChoiceImg.setAttribute('src', 'images/option' + choice + '.png');
        pcChoiceImg.setAttribute('src', 'images/option' + pcChoice + '.png');


        if(choice == pcChoice) {
            pcCounter++;
            userCounter++;

            document.getElementById('userCounterContainer').innerHTML = userCounter;

            document.getElementById('pcCounterContainer').innerHTML = pcCounter;

        } else if(choice == 'Option 1') {
            if(pcChoice == 'Option 2'){
                pcCounter++;
                document.getElementById('pcCounterContainer').innerHTML = pcCounter;
            } else {
                userCounter++;
                document.getElementById('userCounterContainer').innerHTML = userCounter;
            }
        } else if(choice == 'Option 2') {
            if(pcChoice == 'Option 3'){
                pcCounter++;
                document.getElementById('pcCounterContainer').innerHTML = pcCounter;
            } else {
                userCounter++;
                document.getElementById('userCounterContainer').innerHTML = userCounter;
            }
        }else if(choice == 'Option 3') {
            if(pcChoice == 'Option 1'){
                pcCounter++;
                document.getElementById('pcCounterContainer').innerHTML = pcCounter;
            } else {
                userCounter++;
                document.getElementById('userCounterContainer').innerHTML = userCounter;
            }
        }

        counter--;


        if(counter == 0){

            setTimeout(function(){
                if(userCounter > pcCounter){
                    addPopUp('Du hast gewonnen', true);
                } else if(pcCounter > userCounter){
                    addPopUp('Du hast verloren', true)
                } else{
                    addPopUp('Unentschieden', true)
                }
            }, 500); // Millisekunden

            
        }
    }

}