const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
   return choices[Math.floor(Math.random() * choices.length)];
}
 
function playRound() {
    const human = prompt("Choose your weapon: ").toLocaleLowerCase();
   
    alert("You chose " + human);

    const computerPlay = computerChoice();
    alert("Computer chose " + computerPlay);
    
    if (human == computerPlay) {
        alert("Oh! It's a tie");
 }  
    else if (human == "rock" && computerPlay == "paper") {
        alert('You lose! Paper beats rock');
 }
    else if (human == "paper" && computerPlay == "rock") {
        alert('You win! Paper beats rock');
}
    else if (human == "paper" && computerPlay == "scissors") {
        alert('You lose! Scissors beats Paper');
}
    else if (human == "scissors" && computerPlay == "paper") {
        alert('You win! Scissors beats Paper');
}
    else if (human == "scissors" && computerPlay == "rock") {
        alert('You lose! Rock beats scissors');
}
    else if (human == "rock" && computerPlay == "scissors") {
        alert('You win! Rock beats scissors');
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