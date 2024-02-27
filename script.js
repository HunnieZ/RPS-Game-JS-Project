// Storing to DOM
let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".scoreBoard");
const outcome_p = document.querySelector('.outcome p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');



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
    outcome_p.innerText = `${convert(playerSelection)} (Player) beats ${convert(computerOutput)} (Comp). You Win!`;
}

function lose(playerSelection, computerOutput) {
    computerScore++;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    outcome_p.innerText = `${convert(playerSelection)} (Player) loses to ${convert(computerOutput)} (Comp). You Lose!`;
}

function draw(playerSelection, computerOutput) {
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    outcome_p.innerText = `${convert(playerSelection)} (Player) equals ${convert(computerOutput)} (Comp). It's a Draw!`;
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

// Event listeners for player choices

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    });

    paper_div.addEventListener('click', function() {
        game('p');
    });

    scissors_div.addEventListener('click', function() {
        game('s');
    });
}

main();
