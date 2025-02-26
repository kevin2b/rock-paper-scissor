

const dictionary = ["rock", "paper", "scissor"];
console.log(getComputerChoice());
console.log(getComputerChoice());

function getComputerChoice(){
  //Generate a real number from [0,3)
  let compSelect = Math.random() * 3;

  //Round generated number to 0, 1 or 2 which represents rock, paper and scissor
  compSelect = Math.floor(compSelect);
  return dictionary[compSelect];
}