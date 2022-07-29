window.onload=function(){

    const displayPlayerChoice = document.getElementById("playerSelection");

    let playerCount = 0;
    let computerCount = 0;
    document.getElementById('playerCount').innerHTML = playerCount;
    document.getElementById('computerCount').innerHTML = computerCount;


    function computerPlay() {
        const items = ['scissors','paper','rock'];
        var randomItem = items[Math.floor(Math.random()*items.length)];
        return (randomItem);
      }
    
    computerPlay();

    function playRound(playerSelection, computerSelection) {
        console.log(playerSelection,computerSelection);
        if (playerSelection === computerSelection) {
            console.log("Works");
            return("Unentschieden");
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("Works");
            return ("Verloren");
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("Works");
            return ("Gewonnen");
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("Works");
            return ("Verloren");
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("Works");
            return ("Gewonnen");
        }
      }

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

