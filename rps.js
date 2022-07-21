function computerPlay() {
    const items = ['scissors','paper','rock'];
    var randomItem = items[Math.floor(Math.random()*items.length)];
    return (randomItem);
  }

computerPlay();

//Branch Test
//Computer Wert in einer Variable speichern
//const computerSelection = computerPlay().toLowerCase();

//Funktion zur Auswahl durch den Spieler
//const playerSelection = prompt("Scissors, Paper or Rock?").toLowerCase();

//console.log(computerSelection);
//console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("Unentschieden");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("Verloren");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("Gewonnen");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("Verloren");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("Gewonnen");
    }
  }

//Loop mit 5 Runden vom Spiel
//Punktestand zählen und ausgeben
//Am Ende den Gewinner feststellen

//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));

let playerCount = 0;
let computerCount = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        const playerSelection = prompt("Scissors, Paper or Rock?").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        
        let roundResult = playRound(playerSelection, computerSelection);
    
        if (roundResult === "Gewonnen") {
            playerCount++;
        }
        else if (roundResult === "Verloren") {
            computerCount++;
        }
        else if (roundResult === "Unentschieden") {
            console.log("Unentschieden");
        }
        else {
            console.log("not working");
        }
        console.log(computerCount);
        console.log("Punkte Computer "+ computerCount + " zu " + playerCount + " Punkte Spieler");
    }
    if (playerCount===computerCount) {
        console.log("Unentschieden");
    }
    if (playerCount>computerCount) {
        console.log("Ergebnis: Du hast gewonnen! MEGA! :)");
    }
    else {
        console.log("Ergebnis: Du hast verloren, sorry :)");
    }
  }

game();