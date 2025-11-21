
function getComputerChoice() {
    let choice = getRandomNumber(2);

    return getMoveName(choice);
}

function getRandomNumber(range) {
    return Math.round(Math.random() * range) + 1;
}

function getMoveName(choice) {
    console.log(choice  + " choice")
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

function getPlayerChoice() {
    let choice = Number(prompt("Choose between:\n1 - rock\n2 - paper\n3 - scissors"));

    return getMoveName(choice);
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
        if (computerChoice == "RocR") {
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

function winner(result, computerChoice, playerChoice) {
    if (result == 0) {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else if (result == 1) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You tied! ${computerChoice} and ${playerChoice} tie.`
    }
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    let rounds = 0;

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log(computerChoice);

    let result = playRound(computerChoice, playerChoice);
    result == 1 ? playerScore++ : computerScore++;

    let message = winner(result, computerChoice, playerChoice);

    console.log(`${message}\nComputer score: ${computerScore}\nPlayer score: ${playerScore}    
    `);
}