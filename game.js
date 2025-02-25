let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:").trim().toLowerCase();

    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie! No points awarded.");
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winConditions[humanChoice] === computerChoice) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Current score => User: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log(humanScore > computerScore
        ? `You won the game with ${humanScore} points!`
        : computerScore > humanScore
        ? `The computer won the game with ${computerScore} points!`
        : "It's a tie!"
    );
}

playGame();