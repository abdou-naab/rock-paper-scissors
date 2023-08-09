var choices = ["rock","paper","scissors"]


// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
    let i =  Math.floor(Math.random()*choices.length);
    return choices[i];
}



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    if (!choices.includes(playerSelection)){
        console.warn(`wrong input, playerSelection = ${playerSelection}`)
        return;
    
    } else if (playerSelection === computerSelection) {
        // console.log(`Tie! Both chose ${playerSelection}.`);
        return [0,
                `Tie! Both chose ${playerSelection}.`,
                playerSelection,
                computerSelection]
    } else if (
        (playerSelection === choices[0] && computerSelection === choices[2]) ||
        (playerSelection === choices[1] && computerSelection === choices[0]) ||
        (playerSelection === choices[2] && computerSelection === choices[1])
    ) {
        // console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        return [1,
                `You Win! ${playerSelection} beats ${computerSelection}.`,
                playerSelection,
                computerSelection
            ]
    } else {
        // console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        return [-1,
                `You Lose! ${computerSelection} beats ${playerSelection}.`,
                playerSelection,
                computerSelection]
    }
}

function game(){
    let playerCounter= 0;
    let computerCounter= 0;
    
    while(playerCounter < 4 && computerCounter < 4){
        let playerSelection = prompt("Choose between Rock, Paper and Scissors !");
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        if (results[0] == 1){
            playerCounter++;
        } else if(results[0] == -1){
            computerCounter++;
        } 
        console.log(results[1])
        console.info(`Player: ${playerCounter} | Computer: ${computerCounter}`);
    }
    if (playerCounter === 4) {
        console.log("Congratulations! You won the game.");
    } else if (computerCounter === 4) {
        console.log("Sorry, you lost the game.");
    }
}
