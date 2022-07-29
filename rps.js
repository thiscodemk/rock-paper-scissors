let uno = 2;
let computerSelection = 3;

document.getElementById('uno').innerHTML = playerSelection;
document.getElementById('#computerSelection').innerHTML = computerSelection;

function computerPlay() {
    const items = ['scissors','paper','rock'];
    var randomItem = items[Math.floor(Math.random()*items.length)];
    return (randomItem);
  }

computerPlay();

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection,computerSelection);
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
//________________________________________________________________________________________________

//1.Wir brauchen Buttons, nach dem Klick muss die Auswahl von Spieler und Computer übergeben werden.
// connected buttons with each choice
window.onload=function(){
    const buttonScissors = document.querySelector('#buttonScissors');
    buttonScissors.addEventListener('click', () => {
    playRound("scissors",computerPlay());
})

const buttonRock = document.querySelector('#buttonRock');
    buttonRock.addEventListener('click', () => {
    playRound("rock",computerPlay());
})

const buttonPaper = document.querySelector('#buttonPaper');
    buttonPaper.addEventListener('click', () => {
    playRound("paper",computerPlay());
})

}

//2.Anschließend muss daraus abgeleitet werden, wer die Runde gewonnen hat. 
//2.1 Danach muss über das Ergebnis wer gewonnen hat, entweder playerCount oder computerCount erhöht werden.
//2.2 Die Variablen playerCount und computerCount sollen in einem Element auf der Seite angezeigt werden
//3. Wenn entweder playerCount oder computerCount ===5 ist, diesen als Gewinner darstellen

//Loop mit 5 Runden vom Spiel
//Punktestand zählen und ausgeben
//Am Ende den Gewinner feststellen

//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));

let playerCount = 0;
let computerCount = 0;

function game() {
    for (let i = 0; i < 3; i++) {
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
    if (playerCount==computerCount) {
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