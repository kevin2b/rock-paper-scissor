

const dictionary = ["rock", "paper", "scissor"];
const map = {
  "rock": 0,
  "paper": 1,
  "scissor": 2
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(playRound(computerChoice, humanChoice));

function getComputerChoice(){
  //Generate a real number from [0,3)
  let compSelect = Math.random() * 3;

  //Round generated number to 0, 1 or 2 which represents rock, paper and scissor
  compSelect = Math.floor(compSelect);
  return dictionary[compSelect];
}

function getHumanChoice(){
  let answer;

  //Keep prompting user until they enter rock, paper or scissor case insensitive. Default rock.
  do{
    answer = prompt("Enter rock, paper or scissor", "rock");
    answer = answer.toLowerCase();
  } while(map[answer] === undefined);
  return answer;
}

//Choices should be "rock", "paper" or "scissor"
function playRound(computerChoice, humanChoice){
  //Assume row represents computer choice, column human choice.
  //rock = 0, paper = 1, scissor = 2. -1 means computer win, 0 is draw and 1 means player win
  const resultMatrix = [[0,1,-1],
                        [-1,0,1],
                        [1,-1,0]];
  
  const result = resultMatrix[map[computerChoice]][map[humanChoice]];

  computerChoice = capitalizeFirstLetter(computerChoice);
  humanChoice = capitalizeFirstLetter(humanChoice);

  if (result == -1){
    return "You Lose! " + computerChoice + " beats " + humanChoice + ".";
  }
  if (result == 1){
    return "You Win! " + humanChoice + " beats " + computerChoice + ".";
  }
  return "Draw! Both players chose " + computerChoice + ".";
}

function capitalizeFirstLetter(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}