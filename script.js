function getComputerChoice (){
    const options = ["rock", "paper", "scissors"]; 

    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice () {
    let ask = prompt("Whats your option? ");
    return ask.toLowerCase();
}

const rounds = 5

function playGame (times) {

   const computerSelection = getComputerChoice();

    let humanScore = 0;
    let computerScore = 0;
 
    for ( x = 0; x < times; x ++){
      playRound (getHumanChoice(), computerSelection);
    }

    if (humanScore > computerScore) {
      alert('Human won!')
    } else if (computerScore > humanScore) {
      alert('Computer won!')
    } else {
      alert('empate mi so')
    }

    function playRound (humanChoice, computerChoice) {
      if (humanChoice == computerChoice) {
         computerScore ++;
         humanScore ++;
         console.log('empate mi so');
      } else if (humanChoice == "rock" && computerChoice == "paper") {
         computerScore++; 
         console.log('computer won!');
      } else if (humanChoice == "paper" && computerChoice == "scissors"){
         computerScore++;
         console.log('computer won!');
      } else if (humanChoice == "scissors" && computerChoice == "rock") {
         computerScore++;
         console.log('computer won!');
      } else {
         humanScore++;
         console.log('human won!');
      }
     }
 }

playGame (rounds);