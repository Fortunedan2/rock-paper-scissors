function getComputerChoice(computerChoice = ['rock', 'paper', 'scissors']) {
    const computerRandom = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerRandom;
}

// console.log(getComputerChoice());

    //let getPlayerChoice = prompt(("Choose your weapon: "));