
function getComputerChoice() {
    let choice = getRandomNumber(3);

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

function getRandomNumber(range) {
    return Math.round(Math.random() * range)
}

let computerChoice = getComputerChoice();

