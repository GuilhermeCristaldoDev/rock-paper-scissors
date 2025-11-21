
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
    prompt("Choose between:\n1 - rock\n2 - paper\n3 - scissors")

    return getMoveName(choice);
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

