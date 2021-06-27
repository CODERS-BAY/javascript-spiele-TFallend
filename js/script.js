console.log('Hallo Welt')

let counter = 1;
let triesCounter = 1;

function changeScreen(){

    triesCounter = parseInt(document.getElementById('tryCounter').value);

    console.log(triesCounter);

    screen1.classList.toggle('active');
    screen2.classList.toggle('active');
}


let distanceToMonster = Math.random()*90+10;
distanceToMonster = Math.round(distanceToMonster);
console.log(distanceToMonster);

let pokemon = document.createTextNode('Das Pokemon ist ' + distanceToMonster + ' m entfernt.');
screen2.append(pokemon);


function pokeballThrow() {

    if(triesCounter < counter){
        alert('Die Pokebälle sind aus. Das Pokemon ist dir entwischt!')
    }else{
        let fallingSpeed = document.getElementById('landscape').value;  
        console.log(fallingSpeed);
        let speed = document.getElementById('strength').value;  
        console.log(speed);
        let angle = document.getElementById('angle').value * ( Math.PI / 180 );
        console.log(angle);
        let throwDistance = ((speed * speed) * Math.sin(2 * angle)) / fallingSpeed;
        throwDistance = Math.round(throwDistance);
        console.log(throwDistance);

        counter++

        if(throwDistance == distanceToMonster){
            let gotcha = document.createTextNode('Ash du hast es geschafft. Das Pokemon ist nun deins.')
            alert('Ash du hast es geschafft. Das Pokemon ist nun deins.');
        } else {
            let howFar = distanceToMonster - throwDistance;
            let result = document.createTextNode('Nicht getroffen! Du warst ' + howFar + ' Meter entfernt. Nimm einen neuen Pokeball!');
            alert('Nicht getroffen! Du warst ' + howFar + ' Meter entfernt. Nimm einen neuen Pokeball!');
            //screen2.append(result);
        }
    }


}




