function computerPlay() {
    const items = ['scissors','paper','rock'];
    var randomItem = items[Math.floor(Math.random()*items.length)];
    return (randomItem);
  }

computerPlay();

//Computer Wert in einer Variable speichern
const computerSelection = computerPlay().toLowerCase();

//Funktion zur Auswahl durch den Spieler
const playerSelection = prompt("Scissors, Paper or Rock?").toLowerCase();

console.log(computerSelection);
console.log(playerSelection);

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
  
  console.log(playRound(playerSelection, computerSelection));

