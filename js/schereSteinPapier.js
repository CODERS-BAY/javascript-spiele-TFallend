ergebnisComputer = 0;
ergebnisSpieler = 0;


let display = function(text) {
  let ausgabeParagraph = document.getElementById('ausgabe');
	ausgabeParagraph.innerHTML = text + "<br>";
	return;
};

let displayErgebnis = function(text) {
  let ausgabeParagraph = document.getElementById('ergebnis');
	ausgabeParagraph.innerHTML = text + "<br>";
	return;
};

let vergleich = function (auswahlSpieler, auswahlComputer) {
	auswahlSpieler = auswahlSpieler.toLowerCase().trim();
	auswahlComputer = auswahlComputer.toLowerCase().trim();
    if (auswahlSpieler === auswahlComputer) {
			ergebnisComputer++;
			ergebnisSpieler++;
      return "Unentschieden!";
    } else if (auswahlSpieler === "stein") {
        if (auswahlComputer === "schere") {
					ergebnisSpieler++;
          return "Stein gewinnt";
        } else {
					ergebnisComputer++;
          return "Papier gewinnt!";
        }
    } else if (auswahlSpieler === "papier") {
        if (auswahlComputer === "stein") {
					ergebnisSpieler++;
          return "Papier gewinnt!";
        }
        else {
					ergebnisComputer++;
          return "Schere gewinnt!";
        }
    } else if (auswahlSpieler === "schere") {
        if (auswahlComputer === "stein") {
					ergebnisComputer++;
          return "Stein gewinnt!";
        }
        else {
					ergebnisSpieler++;
          return "Schere gewinnt!";
        }
    } else {
    	return "Falsche Eingabe!?"
    }
};

let erzeugeComputerAuswahl = function () {
	let zufallsZahl = Math.random();
	if (zufallsZahl < 0.34) {
		return "stein";
	} else if(zufallsZahl <= 0.67) {
		return "papier";
	} else {
		return "schere";
	} 	
};

let spielen = function (spielerAuswahl) {
	let meldung; 
	let ergebnis;
	let computerAuswahl = erzeugeComputerAuswahl();	
	
    meldung = "Du hast " + spielerAuswahl.substr(0, 1).toUpperCase() + spielerAuswahl.substr(1) + " und der Computer hat " + computerAuswahl.substr(0, 1).toUpperCase() + computerAuswahl.substr(1) + ".\n";
  meldung = meldung + vergleich(spielerAuswahl, computerAuswahl);
  display(meldung);	
	
	ergebnis = "Spieler: " + ergebnisSpieler + " / Computer: " + ergebnisComputer;
	displayErgebnis(ergebnis);
  
};