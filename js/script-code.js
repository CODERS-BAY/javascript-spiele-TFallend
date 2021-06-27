$(document).ready(function(){

    console.log('Hallo Welt');

    let triesCounter = 1;


    let PCZahl1 = Math.ceil(Math.random() * 9);
    console.log(PCZahl1);
    let PCZahl2 = Math.ceil(Math.random() * 9);
    console.log(PCZahl2);
    let PCZahl3 = Math.ceil(Math.random() * 9);
    console.log(PCZahl3);

    $('.buttonCode').click(function(){

        


        triesCounter++;
    });


});

function changeScreen(){

    triesCounter = parseInt(document.getElementById('tryCounter').value);

    if(triesCounter < 1){

        //hier kommt ein PopUP
        addPopUp('Bitte geben Sie eine Zahl über 0 ein');
    } else if(triesCounter > 12){

        //hier kommt ein PopUP
        addPopUp('Bitte geben Sie eine Zahl unter 12 ein');
    } else {

        screen1.classList.toggle('active');
        screen2.classList.toggle('active');
    }

    console.log(triesCounter);
}


function tryCode() {
    let UserZahl1 = tryNumber1.value;
    console.log(UserZahl1);

    let UserZahl2 = tryNumber2.value;
    console.log(UserZahl2);

    let UserZahl3 = tryNumber3.value;
    console.log(UserZahl3);

}

