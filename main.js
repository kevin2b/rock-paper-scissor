

const dictionary = ["rock", "paper", "scissor"];
const map = {
  "rock": 0,
  "paper": 1,
  "scissor": 2
}

playMatch();

function playMatch(){
  const playerChoice = document.querySelector(".player-choice");
  let playerScore = 0;
  let computerScore = 0;

  playerChoice.addEventListener("click", (event)=>{
    let selected = getPlayerChoice(event);

    if (selected !== undefined){
      const computerChoice = getComputerChoice();
      const result = playRound(computerChoice, selected);

      //Update internal score
      if (result[0] === -1){
        computerScore++;
      }
      if (result[0] === 1){
        playerScore++;
      }

      //Check whether victory is decided and updates UI
      if (playerScore === 5){
        logMessage("You Win! Select to play again.", playerScore, computerScore);
        playerScore = 0;
        computerScore = 0;
      }
      else if (computerScore === 5){
        logMessage("You Lost! Select to play again.", playerScore, computerScore);
        playerScore = 0;
        computerScore = 0;
      }
      else{
        logMessage(result[1], playerScore, computerScore);
      }
    }



  });
}

function getPlayerChoice (event){
  if (event.target.classList.contains("rock")){
    return "rock";
  }
  if (event.target.classList.contains("paper")){
    return "paper";
  }
  if (event.target.classList.contains("scissor")){
    return "scissor";
  }
}

function logMessage(message, playerScore, computerScore){
  const messageDOM = document.querySelector(".message");
  const playerScoreDOM = document.querySelector("#player-score");
  const cpuScoreDOM = document.querySelector("#cpu-score");

  messageDOM.textContent = message;
  playerScoreDOM.textContent = playerScore;
  cpuScoreDOM.textContent = computerScore;
}

//Choices should be "rock", "paper" or "scissor"
//Returns an array with two values, first value is a number where -1 is a loss, 0 is a draw and 1 is a win
//Second value is a game message regarding the result of the round
function playRound(computerChoice, playerChoice){
  //Assume row represents computer choice, column player choice.
  //rock = 0, paper = 1, scissor = 2. -1 means computer win, 0 is draw and 1 means player win
  const resultMatrix = [[0,1,-1],
                        [-1,0,1],
                        [1,-1,0]];
  
  const result = resultMatrix[map[computerChoice]][map[playerChoice]];

  computerChoice = capitalizeFirstLetter(computerChoice);
  playerChoice = capitalizeFirstLetter(playerChoice);

  if (result == -1){
    return [-1, "You Lose! " + computerChoice + " beats " + playerChoice + "."];
  }
  if (result == 1){
    return [1, "You Win! " + playerChoice + " beats " + computerChoice + "."];
  }
  return [0, "Draw! Both players chose " + computerChoice + "."];
}

function getComputerChoice(){
  //Generate a real number from [0,3)
  let compSelect = Math.random() * 3;

  //Round generated number to 0, 1 or 2 which represents rock, paper and scissor
  compSelect = Math.floor(compSelect);
  return dictionary[compSelect];
}

function capitalizeFirstLetter(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}