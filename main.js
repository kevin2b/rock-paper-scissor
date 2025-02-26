

const dictionary = ["rock", "paper", "scissor"];
const map = {
  "rock": 0,
  "paper": 1,
  "scissor": 2
}

playMatch();

//Play rock, paper, scissor for 5 rounds.
function playMatch(){
  let score = 0;
  for (let i = 0; i < 5; i++){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const result = playRound(computerChoice, humanChoice);
    score += result[0];
    console.log(result[1]);
  }
  if (score > 0){
    console.log("You win!")
  }
  if(score < 0){
    console.log("You lose!")
  }
  if(score === 0){
    console.log("Draw!");
  }
}

//Choices should be "rock", "paper" or "scissor"
//Returns an array with two values, first value is a number where -1 is a loss, 0 is a draw and 1 is a win
//Second value is a game message regarding the result of the round
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
    return [-1, "You Lose! " + computerChoice + " beats " + humanChoice + "."];
  }
  if (result == 1){
    return [1, "You Win! " + humanChoice + " beats " + computerChoice + "."];
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

function getHumanChoice(){
  let answer;

  //Keep prompting user until they enter rock, paper or scissor case insensitive. Default rock.
  do{
    answer = prompt("Enter rock, paper or scissor", "rock");
    answer = answer.toLowerCase();
  } while(map[answer] === undefined);
  return answer;
}

function capitalizeFirstLetter(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}