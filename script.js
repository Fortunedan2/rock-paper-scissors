const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
   return choices[Math.floor(Math.random() * choices.length)];
}
 
function playRound() {
    const human = prompt("Choose your weapon: ").toLocaleLowerCase();
   
    console.log("You chose " + human);

    const computerPlay = computerChoice();
    console.log("Computer chose " + computerPlay);
    
    if (human == computerPlay) {
        console.log("Oh! It's a tie");
 }  
    else if (human == "rock" && computerPlay == "paper") {
        console.log('You lose! Paper beats rock');
 }
    else if (human == "paper" && computerPlay == "rock") {
        console.log('You win! Paper beats rock');
}
    else if (human == "paper" && computerPlay == "scissors") {
        console.log('You lose! Scissors beats Paper');
}
    else if (human == "scissors" && computerPlay == "paper") {
        console.log('You win! Scissors beats Paper');
}
    else if (human == "scissors" && computerPlay == "rock") {
        console.log('You lose! Rock beats scissors');
}
    else if (human == "rock" && computerPlay == "scissors") {
        console.log('You win! Rock beats scissors');
}
    else if (human != "rock", "paper", "scissors") {
        alert('Seems you made a wrong choice');
    }
} 

function game() {
    
    return playRound()
}

for (let i = 0; i < 5; i++) {
    game();
}