function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomInt = randomIntFromInterval(0, 2)

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[randomInt];
};

function playerPlay() {
    let playerChoice = prompt("Enter rock, paper or scissors")
    return playerChoice;
};

const playerSelection = playerPlay();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
        if(computerSelection === 'rock') {
            return 'tie';
        } else if(computerSelection === 'paper') {
            return 'lose'
        } else if(computerSelection === 'scissors') {
            return 'win'
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            return 'win';
        } else if(computerSelection === 'paper') {
            return 'tie'
        } else if(computerSelection === 'scissors') {
            return 'lose'
        }
    } else if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            return 'lose';
        } else if(computerSelection === 'paper') {
            return 'win'
        } else if(computerSelection === 'scissors') {
            return 'tie'
        }
    }
  }

function game(rounds) {
    let i = rounds;

    for(i; i >= 1; i--) {
        console.log(playRound(playerSelection, computerSelection));
    }
};

game(5);