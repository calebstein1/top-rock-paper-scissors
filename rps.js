let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    let winlose;
    let winner;
    let loser;
    let score;

    switch (playerSelection.concat(computerSelection, "")) {
        case "rockrock": {
            winlose = "tied";
            score = 1; 
            break;
        }
        case "rockpaper": {
            winlose = "lose";
            winner = "paper";
            loser = "rock";
            score = 0;
            break;
        }
        case "rockscissors": {
            winlose = "win";
            winner = "rock";
            loser = "scissors";
            score = 2;
            break;
        }
        case "paperrock": {
            winlose = "win";
            winner = "paper";
            loser = "rock";
            score = 2;
            break;
        }
        case "paperpaper": 
            winlose = "tied";
            score = 1; 
            break;
        case "paperscissors":
            winlose = "lose";
            winner = "scissors";
            loser = "paper";
            score = 0;
            break;
        case "scissorsrock":
            winlose = "lose";
            winner = "rock";
            loser = "scissors";
            score = 0;
            break;
        case "scissorspaper":
            winlose = "win";
            winner = "scissors";
            loser = "paper";
            score = 2;
            break;
        case "scissorsscissors": {
            winlose = "tied";
            score = 1; 
        }
    }

    let resultBegin = `${score}You play ${playerSelection}, computer plays ${computerSelection}\n`;
    let resultEnd = winlose === "tied" ? "You tied!" : `You ${winlose}! ${winner} beats ${loser}!`;
    let result = resultBegin.concat(resultEnd, "");
    return result;
}

function game() {
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;
    let calcScore = (scoreNum) => {
        switch (scoreNum) {
            case "0":
                computerScore++;
                break;
            case "2":
                playerScore++;
                break;
            default:
                break;
        }
        
    }
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(prompt("rock, paper, or scissors").toLowerCase(), getComputerChoice());
        calcScore(roundResult.slice(0,1));
        console.log(roundResult.slice(1));
    }
    while (computerScore === playerScore) {
        roundResult = playRound(prompt("rock, paper, or scissors").toLowerCase(), getComputerChoice());
        calcScore(roundResult.slice(0,1));
        console.log(roundResult.slice(1));
    }
    let finalResult = playerScore > computerScore ? "win" : "lose";

    console.log(`You scored ${playerScore}, the computer scored ${computerScore}. You ${finalResult}!`);
}

game();