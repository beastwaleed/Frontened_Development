const buttons = document.querySelectorAll("button");
const resultElem = document.querySelector("#result");
const playerScoreElem = document.querySelector("#user-score");
const computerScoreElem = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        resultElem.textContent = `${result} You choose ${playerChoice}, computer chose ${computerChoice}. `;
        displayResult(playerChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        playerScoreElem.textContent = playerScore;
        return "You win!";
    } else {
        computerScore++;
        computerScoreElem.textContent = computerScore;
        return "You lose!";
    }
}