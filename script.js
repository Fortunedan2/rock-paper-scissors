function getComputerChoice(computerChoice = ['rock', 'paper', 'scissors']) {
    const computerRandom = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerRandom;
}

// console.log(getComputerChoice());

    //let getPlayerChoice = prompt(("Choose your weapon: "));
   
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    
function playRound() {
    
    if (playerSelection == "rock") {
        message = "You lose! Paper beats Rock";
    
    return message
 }
}

game = playRound(playerSelection, computerSelection);

for (let i = 0; i < 5; i++) {
    message = "Try again!";
}


console.log(game);