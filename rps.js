//ask player for rock, paper, or scissors

/*function getPlayerChoice(){
    return document.getElementById("playerInput").value.toLowerCase();
}*/

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
    
    /*playerChoice = getPlayerChoice();*/
    console.log(`Player threw ${playerChoice}`);

    computerChoice = getComputerChoice();
    console.log(`Computer threw ${computerChoice}`);

    const results = document.querySelector('#results');
    const roundResults = document.querySelector('#roundResults');
    const newLine = document.createElement('br');
    
    
    let winner = '';
    if (playerChoice == computerChoice) {
        winner = "Draw";

    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        winner = "Player";

    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        winner = "Player";

    } else if (playerChoice == "paper" && computerChoice == "rock") {
        winner = "Player";

    } else if (playerChoice == "rock" && computerChoice == "paper") {
        winner = "Computer";
        
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        winner = "Computer";

    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        winner = "Computer";

    } else {
        return "Try Again";
    }
    roundResults.textContent = `Computer threw ${computerChoice} | Player threw ${playerChoice} | Round goes to ${winner}`;
    
    let playerTally;
    const pTally = document.createElement('h2');
    let computerTally;
    const cTally = document.createElement('h2');
    
    if(winner === "Draw") {
        return;
    } else if (winner === "Player") {
        playerTally++;
    } else if (winner === "Computer") {
        computerTally++;
    } else {
        return "Error";
    }

    pTally.textContent = `Player Score: ${playerTally}`;
    cTally.textContent = `Computer Score: ${computerTally}`;

    /*Display running score*/    
    /*appendChild throwing "not a node" error*/
    results.appendChild(playerTally);
    results.appendChild(computerTally);
    
}
/*Announce winner after 5 points accumulated on either side*/
/*functionality needs to be tested after tallying is setup correctly*/
function decideGame(){
    if (playerTally | computerTally < 5) {
        return;
    } else if (playerTally >= 5) {
        playerTally = 0;
        computerTally = 0;
        return "Player Wins";
    } else if (computerTally >= 5) {
        playerTally = 0;
        computerTally = 0;
        return "Player Loses";
    } else {
        return "Play Again"}
}

/*add custom events to change the styles in response to player winning/losing rounds.*/

/*function playGame() {
    console.log(playRound());
    return;
}*/

/*new ui*/

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

