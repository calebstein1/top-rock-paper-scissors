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

    let convertToNum = (pSel, cSel) => {
        let pnum;
        let cnum;

        switch (pSel) {
            case "rock":
                pnum = 1;
                break;
            case "paper":
                pnum = 2;
                break;
            case "scissors":
                pnum = 3;
                break;
            default:
                alert("Whatever you entered, it certainly wasn't one of the right options, so you get rock");
                pnum = 1;
                playerSelection = "rock";
        }
        switch (cSel) {
            case "rock":
                cnum = 8;
                break;
            case "paper":
                cnum = 9;
                break;
            case "scissors":
                cnum = 10;
                break;
        }

        return pnum * cnum;
    }

    switch (convertToNum(playerSelection, computerSelection)) {
        case 8: {
            winlose = "tied";
            score = 1; 
            break;
        }
        case 9: {
            winlose = "lose";
            winner = "paper";
            loser = "rock";
            score = 0;
            break;
        }
        case 10: {
            winlose = "win";
            winner = "rock";
            loser = "scissors";
            score = 2;
            break;
        }
        case 16: {
            winlose = "win";
            winner = "paper";
            loser = "rock";
            score = 2;
            break;
        }
        case 18: 
            winlose = "tied";
            score = 1; 
            break;
        case 20:
            winlose = "lose";
            winner = "scissors";
            loser = "paper";
            score = 0;
            break;
        case 24:
            winlose = "lose";
            winner = "rock";
            loser = "scissors";
            score = 0;
            break;
        case 27:
            winlose = "win";
            winner = "scissors";
            loser = "paper";
            score = 2;
            break;
        case 30: {
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
    let scoring;
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
        scoring = calcScore(roundResult.slice(0,1));
        console.log(roundResult.slice(1));
    }
    while (computerScore === playerScore) {
        roundResult = playRound(prompt("rock, paper, or scissors").toLowerCase(), getComputerChoice());
        scoring = calcScore(roundResult.slice(0,1));
        console.log(roundResult.slice(1));
    }
    let finalResult = playerScore > computerScore ? "win" : "lose";

    console.log(`You scored ${playerScore}, the computer scored ${computerScore}. You ${finalResult}!`);
}

game();