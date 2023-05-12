let playerScore = 0;
let computerScore = 0;
document.getElementById("player-score").textContent = playerScore;
document.getElementById("computer-score").textContent = computerScore;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => game(button.id)));

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

    let resultBegin = `${score}You play ${playerSelection}, computer plays ${computerSelection}. `;
    let resultEnd = winlose === "tied" ? "You tied!" : `You ${winlose}! ${winner} beats ${loser}!`;
    let result = resultBegin.concat(resultEnd, "");
    return result;
}

function game(playerChoice) {
    let roundResult;
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
    roundResult = playRound(playerChoice, getComputerChoice());
    calcScore(roundResult.slice(0,1));
    document.getElementById("round-results").textContent = roundResult.slice(1);
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
        let finalResult = playerScore > computerScore ? "win" : "lose";
        document.getElementById("round-results").textContent = `You scored ${playerScore}, the computer scored ${computerScore}. You ${finalResult}!`;

        buttons.forEach(button => button.setAttribute("disabled", "dsabled"));
        const rst = document.createElement("button");
        document.querySelector("body").appendChild(rst);
        rst.setAttribute("id", "rst");
        rst.textContent = "Reset";

        document.getElementById("rst").addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;

            document.getElementById("round-results").textContent = "";
            document.getElementById("player-score").textContent = playerScore;
            document.getElementById("computer-score").textContent = computerScore;
            buttons.forEach(button => button.removeAttribute("disabled"));

            document.querySelector("body").removeChild(rst);
        });
    }
}

game();