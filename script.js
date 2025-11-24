const buttonsDiv = document.querySelector("#choice-buttons");
const displayResult = document.querySelector("#results");

buttonsDiv.addEventListener("click", (event) => {
    let playerChoice = getMoveName(event.target.textContent);

    console.log(playRound(getComputerChoice(), playerChoice));
}) 

function getComputerChoice() {
    let choice = getRandomNumber(2);

    return getMoveName(choice);
}

function getRandomNumber(range) {
    return Math.round(Math.random() * range) + 1;
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

function winner(result, computerChoice, playerChoice) {
    if (result == 0) {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else if (result == 1) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You tied! ${computerChoice} and ${playerChoice} tie.`
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

function playGame() {


    function incrementScore(result) {
        if (result != null) {
            if (result == 1) {
                playerScore++;
            } computerScore++;
        }
    }

    let computerScore = 0;
    let playerScore = 0;
    let rounds = 1;

    while (rounds <= 5) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        let result = playRound(computerChoice, playerChoice);
        incrementScore(result);

        let message = winner(result, computerChoice, playerChoice);

        console.log(`Round ${rounds}:\n${message}\nComputer score: ${computerScore}\nPlayer score: ${playerScore}`);

        rounds++;
    }
}