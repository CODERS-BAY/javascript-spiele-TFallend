console.log('Hallo Welt')

let counter = 1;
let triesCounter = 1;

function changeScreen(readTries){

    if(readTries){
        triesCounter = parseInt(document.getElementById('tryCounter').value);
    }
    console.log(triesCounter);

    screen1.classList.toggle('active');
    screen2.classList.toggle('active');
}