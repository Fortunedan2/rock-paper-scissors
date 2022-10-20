function getComputerChoice(computerChoice = ['rock', 'paper', 'scissors']) {
    const computerRandom = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerRandom;
}

// console.log(getComputerChoice());


    
function playRound() {
    let getPlayerChoice = prompt(("Choose your weapon: "));
    const playerSelection = getPlayerChoice;
    console.log("You chose " + getPlayerChoice);

    const computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection);
    
    if (playerSelection == "rock") {
        message = "You lose! Paper beats Rock";
    
    return message
 }
}


function game() {
    return playRound()
}

for (let i = 0; i < 4; i++) {
    game();
}


console.log(game());