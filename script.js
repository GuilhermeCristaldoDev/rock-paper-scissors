const buttonsDiv = document.querySelector("#choice-buttons");
const roundResult = document.querySelector("#round");
const roundText = document.querySelector("#round-text");
const computerScoreboard = document.querySelector("#computer-score");
const playerScoreboard = document.querySelector("#player-score");
const winnerDisplay = document.querySelector("#winner");

buttonsDiv.addEventListener("click", (event) => {
    let playerChoice = event.target.dataset.move;

    playGame(playerChoice)
})

function getComputerChoice() {
    let choice = getRandomNumber(2);

    return getMoveName(choice);
}

function getRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1;   
}

function getMoveName(choice) {
    switch (choice) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
        default:
            return "Error";
    }
}

function winnerRound(result, computerChoice, playerChoice) {
    if (result == 0) {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else if (result == 1) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You tied! ${computerChoice} and ${playerChoice} tie.`
    }
}

function displayMessage(round, result, computerScore, playerScore) {
    roundResult.textContent = `Round ${round}:`;
    roundText.textContent = result;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
}

function getWinner() {
    if (computerScore === playerScore) return "Tie"
    return computerScore > playerScore ? "Computer wins" : "Player wins"
}

function winnerMessage(message) {
    winnerDisplay.textContent = message;
}

let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function playGame(playerChoice) {

    function incrementScore(result) {
        if (result != null) {
            if (result == 1) {
                playerScore++;
            } else {
                computerScore++;
            }

        }
    }

    function playRound(computerChoice, playerChoice) {

        if (playerChoice == "Rock") {
            if (computerChoice == "Paper") {
                return 0
            } else if (computerChoice == "Scissors") {
                return 1

            } else {
                return null
            }
        } else if (playerChoice == "Paper") {
            if (computerChoice == "Rock") {
                return 1
            } else if (computerChoice == "Scissors") {
                return 0
            } else {
                return null
            }
        } else {
            if (computerChoice == "Rock") {
                return 0
            } else if (computerChoice == "Paper") {
                return 1

            } else {
                return null
            }
        }
    }

    winnerMessage("");
    
    let computerChoice = getComputerChoice();

    let result = playRound(computerChoice, playerChoice);

    rounds++;
    incrementScore(result);

    let message = winnerRound(result, computerChoice, playerChoice);

    displayMessage(rounds, message, computerScore, playerScore);

    if (rounds === 5) {
        let winner = getWinner();

        winnerMessage(winner);

        rounds = 0;
        playerScore = 0;
        computerScore = 0;
    }

}