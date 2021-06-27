console.log('Hallo');

function addPopUp(text, reload = false){

    //<div id="popUp">Du hast gewonnen <button>OK</button></div>
    let popup = document.createElement('div');
    popup.setAttribute('id', 'popUp');
    popup.append(text);

    let button = document.createElement('button');

    if(reload)
        button.addEventListener('click', reloadPage);
    else
        button.addEventListener('click', closePopup);



    button.append('OK');

    //button.addEventListener('click', closePopup);
    popup.append(button);
    document.getElementsByTagName('body')[0].prepend(popup);
}

function reloadPage() {
    location.reload();
}

function closePopup(){
    popUp.remove();
}