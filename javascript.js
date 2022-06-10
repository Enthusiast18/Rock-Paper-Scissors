let computerScore = 0;
let playerScore = 0;


function updateMessage (message) {
    const result = document.querySelector('.result');
    result.textContent = message;
}

function updateScore () {
    const score = document.querySelector('.score');
    score.textContent = playerScore + " - " + computerScore;
}

function computerPlay() {
    let index;
    index = (Math.random() * 10) % 3; 

    if(index < 1){ 
        return "ROCK";
    }
    else if (index < 2) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
    
}


function updateDisplay(pSelection, cSelection) {
    const p = document.querySelector('#btn1');
    const c = document.querySelector('#btn2');

    if(pSelection == "ROCK") {
        p.className = "fa fa-hand-fist";
    }
    else if(pSelection == "PAPER") {
        p.className = "fa fa-hand-paper";
    }
    else {
        p.className = "fa fa-hand-scissors";
    }


    if(cSelection == "ROCK") {
        c.className = "fa fa-hand-fist";
    }
    else if(cSelection == "PAPER") {
        c.className = "fa fa-hand-paper";
    }
    else {
        c.className = "fa fa-hand-scissors";
    }
}

function resetGame() {
    if(computerScore >= 5) {
        const result = document.querySelector('.result');

        result.textContent = "Game Reset!"
        playerScore = 0;
        computerScore = 0;
        updateScore();
    }
    else if (playerScore >= 5) {
        const result = document.querySelector('.result');

        result.textContent = "Game Reset!"
        playerScore = 0;
        computerScore = 0;
        updateScore();   
    }
}


function game(playerSelection) {

    resetGame();

    let computerSelection = computerPlay();

    let message = "";

    if(playerSelection == computerSelection) {
        message = "Draw!";
    }
    else if(playerSelection == "ROCK") {
        if(computerSelection == "SCISSORS") {
            message = "You Win!";
            playerScore += 1;
        }
        else {
            message = "You Lose!";
            computerScore += 1;
        }
    }
    else if(playerSelection == "SCISSORS") {
        if(computerSelection == "ROCK") {
            message = "You Lose!";
            computerScore += 1;
        }
        else {
            message = "You Win!";
            playerScore += 1;
        }
    }
    else {
        if(computerSelection == "ROCK") {
            message = "You Win!";
            playerScore += 1;
        }
        else {
            message = "You Lose!";
            computerScore += 1;
        }
    }

    if(playerScore >= 5) {
        message = "Congratulations! You Won Best of 5!";
    }
    else if(computerScore >= 5) {
        message = "Better Luck Next Time. Computer Won Best of 5."
    }


    updateMessage(message);
    updateScore();
    updateDisplay(playerSelection, computerSelection);
}