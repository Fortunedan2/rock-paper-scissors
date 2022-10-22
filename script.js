const choices = ['rock', 'paper', 'scissors'];
const beats = {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};

function computerChoice() {
   return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(computerChoice());

    
function playRound() {
    const getPlayerChoice = prompt("Choose your weapon: ").toLocaleLowerCase();
   
    console.log("You chose " + getPlayerChoice);

    const computerSelection = computerChoice();
    console.log("Computer chose " + computerSelection);
    
    if (getPlayerChoice == computerSelection) {
        console.log("Oh! It's a tie");
 }  
 
    else if (getPlayerChoice == "rock" && computerSelection == "paper") {
        console.log('You lose! Paper beats rock');
 }

    else if (getPlayerChoice == "paper" && computerSelection == "rock") {
        console.log('You win! Paper beats rock');
}

    else if (getPlayerChoice == "paper" && computerSelection == "scissors") {
        console.log('You lose! Scissors beats Paper');
}

    else if (getPlayerChoice == "scissors" && computerSelection == "paper") {
        console.log('You win! Scissors beats Paper');
}

    else if (getPlayerChoice == "scissors" && computerSelection == "rock") {
        console.log('You lose! Rock beats scissors');
}
    else if (getPlayerChoice == "rock" && computerSelection == "scissors") {
        console.log('You win! Rock beats scissors');
}

    else if (getPlayerChoice != "rock", "paper", "scissors") {
        alert('Seems you made a wrong choice');
    }
} 

function game() {
    
    return playRound()
}

for (let i = 0; i < 5; i++) {
    game();
}