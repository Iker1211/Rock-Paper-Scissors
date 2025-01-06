function getComputerChoice (){
   const options = ["rock", "paper", "scissors"]; 

   let choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}

//const rounds = 5

function playGame () {

  /* Here Im importing the results of computerchoice function */

   let humanScore = 0;
   let computerScore = 0;
  // How to tab a block of code in VSCode?
   //Volver a usar playRound, hacer toda la monda dentro y hacer returns

   function playRound (humanChoice) {

     let humanPoints = document.getElementById("human-score");
     let computerPoints = document.getElementById("computer-score");

     let computerChoice = getComputerChoice(); 

     if (humanChoice === computerChoice) {
        console.log(humanScore);
        console.log(computerScore);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
        humanPoints.textContent = humanScore;
    } else {
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
        computerPoints.textContent = computerScore;
    }

      if (humanScore === 5) {

        humanPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
        alert("You won the game!");
        humanScore = 0;
        computerScore = 0;
        humanPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
      } else if (computerScore === 5) {

        humanPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
        alert("You lost the game!");
        humanScore = 0;
        computerScore = 0;
        humanPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
     }
    }

    document.addEventListener('DOMContentLoaded', function(event) {
     const gameZone = document.getElementById("game"); 

       gameZone.addEventListener('click', (event) => {
       let target = event.target;
       let result;

          switch(target.id) {
             case 'btn-rock':
                 result = playRound("rock");
                break;
             case 'btn-paper':
                 result = playRound("paper");
                break;
             case 'btn-scissors':
                 result = playRound("scissors");
                break;
          }
       });
    });
}

playGame ();