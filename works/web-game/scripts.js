let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");



function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomumber = Math.floor(Math.random() * 3);
    return choices[randomumber];
}

function convert(letter) {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convert(userChoice)} loses to ${convert(computerChoice)}. You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convert(userChoice)} equals ${convert(computerChoice)}. It's a Draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', () => game("r"))

    paper.addEventListener('click', () => game("p"))

    scissors.addEventListener('click', () => game("s"))
}

main();