let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.querySelector("#result");

    resultDiv.innerHTML = `🐱 You chose: <b>${humanChoice}</b> <br> 🐰 Computer chose: <b>${computerChoice}</b>`;
    resultDiv.style.display = "block";

    if (humanChoice === computerChoice) {
        resultDiv.innerHTML += "<br>💖 It's a tie!";
    } else {
        const winConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (winConditions[humanChoice] === computerChoice) {
            humanScore++;
            resultDiv.innerHTML += "<br>🎉 You win this round!";
        } else {
            computerScore++;
            resultDiv.innerHTML += "<br>😿 Computer wins this round!";
        }
    }

    updateScore();
    checkWinner();
}

function updateScore() {
    document.querySelector("#score").innerHTML = `✨ Score - You: ${humanScore} | Computer: ${computerScore} ✨`;
}

function checkWinner() {
    updateScore(); // Asegurar que el puntaje final se actualice antes de mostrar el ganador

    if (humanScore === 5 || computerScore === 5) {
        const resultDiv = document.querySelector("#result");
        resultDiv.innerHTML += `<br><br>🎉 ${humanScore === 5 ? "Congratulations! You won! 🏆" : "Oh no! The computer won! 😿"} 🎉`;

        setTimeout(resetGame, 3000); // Espera 3 segundos antes de reiniciar
    }
}

function resetGame() {
    setTimeout(() => {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        document.querySelector("#result").textContent = "";
        document.querySelector("#result").style.display = "none";
    }, 3000); // Se mantiene visible unos segundos antes de resetear
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#rock").addEventListener("click", () => playRound("rock")); 
    document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
    document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));
});