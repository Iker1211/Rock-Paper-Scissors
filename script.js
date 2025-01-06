function getComputerChoice (){
    const options = ["rock", "paper", "scissors"]; 

    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice () {
    let ask = prompt("Whats your option? ");
    return ask.toLowerCase();
}

//const rounds = 5

function playGame () {

   /* Here Im importing the results of computerchoice function */
   let computerSelection = getComputerChoice(); 

    let humanScore = 0;
    let computerScore = 0;

    //Volver a usar playRound, hacer toda la monda dentro y hacer returns

    function playRound (humanChoice, computerChoice) {
     }

     document.addEventListener('DOMContentLoaded', function(event) {
      const gameZone = document.getElementById("game"); 
         const humanPoints = document.getElementById("human-score");
         const computerPoints = document.getElementById("computer-score");

        gameZone.addEventListener('click', (event) => {
        let target = event.target;
     
           switch(target.id) {
              case 'btn-rock':
                 playRound("rock", computerSelection);
                  if ( computerSelection === "paper" ) {
                     computerScore ++;
                     console.log('computer won!');
                  } else if ( computerSelection === "rock" ) {
                     computerScore ++;
                     humanScore ++;
                     console.log('empate');
                  } else {
                     humanScore ++;
                     console.log('human won!');
                  }
                 break;
              case 'btn-paper':
                 playRound("paper", computerSelection);

                 break;
              case 'btn-scissors':
                 playRound("scissors", computerSelection);

                 break;
           }
        });
     });

   //   for ( x = 0; x < times; x ++){
   //    playRound (getHumanChoice(), computerSelection);
   //  }
 
    if (humanScore > computerScore ) {
      alert('Human won!')
    } else if (computerScore > humanScore) {
      alert('Computer won!')
    } else {
      alert('empate mi so')
    }
 }

playGame ();