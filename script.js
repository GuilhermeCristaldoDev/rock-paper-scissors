
function getComputerChoice() {
    let choice = getRandomNumber(3);

    return getMoveName(choice);
}

function getRandomNumber(range) {
    return Math.round(Math.random() * range)
}

function getMoveName(choice) {
    switch (choice) {
        case 1:
            return "rock"

        case 2:
            return "paper"

        case 3:
            return "scissors"
        default:
            return "erro ao escolher";
    }
}

function getPlayerChoice() {
    let choice = prompt("Choose between:\n1 - rock\n2 - paper\n3 - scissors")

    return getMoveName(choice);
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

let computerScore = 0;
let playerScore = 0;

function playRound(computerChoice, playerChoice) {
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            playerScore++;
        } else {
            console.log("You tied! Rock and Rock tie.");
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            playerScore++;
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        } else {
            console.log("You tied! Paper and Paper tie.");
        }
    } else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            playerScore++;
        } else {
            console.log("You tied! Scissors and Scissors tie.");
        }
    }
}

playRound(computerChoice, playerChoice);

