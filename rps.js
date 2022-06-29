function computerPlay() {
    const items = ['scissors','paper','rock'];
    var randomItem = items[Math.floor(Math.random()*items.length)];
    return (randomItem);
  }

computerPlay();

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
        return ("Papier umwickelt den Stein, leider verloren");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("Papier umwickelt den Stein, Du gewinnst");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("Stein zerstört Schere, Du verlierst");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("Stein zerstört Schere, Du gewinnst");
    }
  }

//Loop mit 5 Runden vom Spiel
//Punktestand zählen und ausgeben
//Am Ende den Gewinner feststellen

//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));


n=10

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        const playerSelection = prompt("Scissors, Paper or Rock?").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
  }

game();