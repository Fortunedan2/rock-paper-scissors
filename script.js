function getComputerChoice(computerChoice = ['rock', 'paper', 'scissors']) {
    const computerRandom = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerRandom;
}

// console.log(getComputerChoice());

let getPlayerChoice = prompt(("Choose your weapon: "));
const playerSelection = getPlayerChoice;
console.log("You chose " + getPlayerChoice);

const computerSelection = getComputerChoice();
console.log("Computer chose " + computerSelection);
    
function playRound() {
    
    if (playerSelection == "rock") {
        message = "You lose! Paper beats Rock";
    
    return message
 }
}


function game() {
    return playRound()
}


console.log(game());