// Storing to DOM
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0; // Counter for rounds played

const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".scoreBoard");
const outcome_p = document.querySelector('.outcome p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const restart_button = document.getElementById('restart-button');

// Function to generate computer's choice
function getComputerOutput() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// Function to convert letters to words
function convert(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    // if (letter === 's') return 'Scissors';
    return 'Scissors';
}

// Functions to handle game outcomes
function win(playerSelection, computerOutput) {
    playerScore++;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    outcome_p.innerText = `${convert(playerSelection)} (Player) beats ${convert(computerOutput)} (Comp). \n You Win!`;
    roundCounter++;
    console.log("Round Counter:", roundCounter);
    checkEndGame();
}

function lose(playerSelection, computerOutput) {
    computerScore++;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    outcome_p.innerText = `${convert(playerSelection)} (Player) loses to ${convert(computerOutput)} (Comp). \n You Lose!`;
    roundCounter++;
    console.log("Round Counter:", roundCounter);
    checkEndGame();
}

function draw(playerSelection, computerOutput) {
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    outcome_p.innerText = `${convert(playerSelection)} (Player) equals ${convert(computerOutput)} (Comp). \n It's a Draw!`;
    roundCounter++;
    console.log("Round Counter:", roundCounter);
    checkEndGame();
}

// Function to play the game
function game(playerSelection) {   
    const computerOutput = getComputerOutput();
    switch (playerSelection + computerOutput) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(playerSelection, computerOutput);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(playerSelection, computerOutput);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(playerSelection, computerOutput);
            break;
    }
}

// Function to check if the game should end
function checkEndGame() {
    if (roundCounter >= 20) {
        // Remove event listeners to stop further interaction
        rock_div.removeEventListener('click', rockClickHandler);
        paper_div.removeEventListener('click', paperClickHandler);
        scissors_div.removeEventListener('click', scissorsClickHandler);
    }
}

// Function to handle player choice
function playerChoice(choice) {
    game(choice);
}

// Event listeners for player choices
function rockClickHandler() {
    playerChoice('r');
}

function paperClickHandler() {
    playerChoice('p');
}

function scissorsClickHandler() {
    playerChoice('s');
}

function restartGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    outcome_p.innerText = '';
    location.reload();
    // Add event listeners back
    rock_div.addEventListener('click', rockClickHandler);
    paper_div.addEventListener('click', paperClickHandler);
    scissors_div.addEventListener('click', scissorsClickHandler);
}

function main() {
    rock_div.addEventListener('click', rockClickHandler);
    paper_div.addEventListener('click', paperClickHandler);
    scissors_div.addEventListener('click', scissorsClickHandler);
    restart_button.addEventListener('click', restartGame);
}

main();
