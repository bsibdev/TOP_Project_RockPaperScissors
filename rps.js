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

const pTally = document.createElement('h2');
pTally.setAttribute('id','playerScore')
const cTally = document.createElement('h2');
cTally.setAttribute('id','computerScore')
const results = document.querySelector('#results');

/*Display running score*/
pTally.textContent = `Player Score: 0`;
cTally.textContent = `Computer Score: 0`;

results.appendChild(pTally);
results.appendChild(cTally);

let playerTally = 0;
let computerTally = 0;
    

//player and computer choices compared to determine winner
function playRound(playerChoice,computerChoice) {
    /*test if tally input matches output (changes to undefined)
    console.log(`${playerTally} ${computerTally}`);
    /*playerChoice = getPlayerChoice();*/
    console.log(`Player threw ${playerChoice}`);

    computerChoice = getComputerChoice();
    console.log(`Computer threw ${computerChoice}`);

    const roundResults = document.querySelector('#roundResults');
    /*const newLine = document.createElement('br');*/
    
    
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
    
    
    

    if(winner === "Draw") {
        return;
    } else if (winner === "Player") {
        playerTally++;
        console.log(playerTally);
    } else if (winner === "Computer") {
        computerTally++;
        console.log(computerTally);
    } else {
        return "Error";
    }

    const pTally = document.querySelector('#playerScore');
    pTally.textContent = `Player Score: ${playerTally}`;
    const cTally = document.querySelector('#computerScore');
    cTally.textContent = `Computer Score: ${computerTally}`;

    

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
decideGame(playerTally,computerTally);
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

