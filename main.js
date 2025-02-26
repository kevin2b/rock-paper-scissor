

const dictionary = ["rock", "paper", "scissor"];
const map = {
  "rock": 0,
  "paper": 1,
  "scissor": 2
}
console.log(getComputerChoice());
console.log(getHumanChoice());

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