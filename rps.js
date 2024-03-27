
let playerChoice;

//ask player for rock, paper, or scissors
function getPlayerChoice(){
    playerChoice = prompt("Choose Wisely");
    return playerChoice;
}

let computerChoice;

//computer picks rock, paper, or scissors
function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3);
    //console.log(randomInt);
    
    
    if (randomInt >=0 && randomInt<1) {
        computerChoice = "Rock";

    } else if (randomInt >=1 && randomInt <2) {
        computerChoice = "Paper";

    } else {computerChoice = "Scissors"};

    return computerChoice;
}


//player and computer choices compared to determine winner
function playRound(playerChoice,computerChoice) {
    if (playerChoice == computerChoice) {
        return "Draw";

    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "Winner";

    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "Winner";

    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "Winner";

    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "Loser";
        
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return "Loser";

    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "Loser";

    } else {
        return "Try Again";
    }
    
}

function playGame() {
    getPlayerChoice();
    getComputerChoice();
    playRound();
}