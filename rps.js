//ask player for rock, paper, or scissors
function getPlayerChoice(){
    return document.getElementById("playerInput").value.toLowerCase();
}

//computer picks rock, paper, or scissors
function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3);
    //console.log(randomInt);
    
    
    if (randomInt >=0 && randomInt<1) {
        return "rock";

    } else if (randomInt >=1 && randomInt <2) {
        return "paper";

    } else {return "scissors"};
}


//player and computer choices compared to determine winner
function playRound(playerChoice,computerChoice) {
    
    playerChoice = getPlayerChoice();
    console.log(`Player threw ${playerChoice}`);

    computerChoice = getComputerChoice();
    console.log(`Computer threw ${computerChoice}`);


    if (playerChoice == computerChoice) {
        return "Draw";

    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "Winner";

    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "Winner";

    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "Winner";

    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return "Loser";
        
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "Loser";

    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "Loser";

    } else {
        return "Try Again";
    }
    
}

function playGame() {
    console.log(playRound());
    return;
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

document.addEventListener('click',(event) => {
    const target = event.target;
    switch(target.id) {
        case 'rock' :
            playerChoice = "rock";
            playRound(playerChoice);
            break;
        case 'paper' :
            playerChoice = "paper";
            playRound(playerChoice);
            break; 
        case 'scissors' :
            playerChoice = "scissors"
            playRound(playerChoice);
            break;
    }
})