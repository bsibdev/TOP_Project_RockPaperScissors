//ask player for rock, paper, or scissors
function getPlayerChoice(){
    let playerChoice = promt("Choose Wisely");
}

//computer picks rock, paper, or scissors
function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice
    
    if (randomInt <2) {
        computerChoice = "Rock";

    } else if (randomInt > 2 && randomInt <3) {
        computerChoice = "Paper";

    } else {computerChoice = "Scissors"}
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

function playGame () {
    getPlayerChoice()
    getComputerChoice()
    playRound();
}