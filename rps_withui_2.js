window.onload=function(){
    const displayPlayerChoice = document.getElementById("playerSelection");
    const displayComputerChoice = document.getElementById("computerSelection");
    const displayResult = document.getElementById("result");
    const possibleChoices = document.querySelectorAll("button");
    let userChoice
    let computerChoice
    let result

    const displayUserCount = document.getElementById("playerCount")
    const displayComputerCount = document.getElementById("computerCount")
    let userCount = 0;
    let computerCount = 0;

    const displayEndResult = document.getElementById("endResult");
    let endResult 

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id
        displayPlayerChoice.innerHTML = userChoice
        playRound(userChoice, computerPlay());
        getResult();
        checkResults();
    }))


    function playRound(playerSelection, computerSelection) {
        displayComputerChoice.innerHTML = computerSelection;
        computerChoice = computerSelection;
      }

      function computerPlay() {
        const items = ['Scissors','Paper','Rock'];
        var randomItem = items[Math.floor(Math.random()*items.length)];
        return (randomItem);
      }

      function getResult() {
        if (computerChoice === userChoice) {
            result = "its a draw!"
        }
        if (computerChoice === 'Rock' && userChoice === 'Paper'){
            result = "you win!"
            userCount++;
        }
        displayResult.innerHTML = result;
        displayComputerCount.innerHTML = computerCount;
        displayUserCount.innerHTML = userCount;
      }

      function checkResults() {
        if (computerCount === 5 && userCount === 5) {
            endResult="Its a Draw! :)"
            displayEndResult.innerHTML = endResult;
        }
        else if (userCount == 5) {
            endResult="You Win!"
            displayEndResult.innerHTML = endResult;
        }
        else if (computerCount == 5){
            endResult="Computers Wins, Sorry! :("
            displayEndResult.innerHTML = endResult;
        }
        else {
            console.log("Noch kein Gewinner vorhanden")
        }
      }
}