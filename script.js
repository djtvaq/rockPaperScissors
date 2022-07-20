// Psuedocode
// The computer will choose randomly between rock, paper or scissors
// The player will input one of the three choices. 
// We will compare the choices and decide who is the winner.
// We will return a line that says whether the player lost or won.
// We will loop this FIVE times, to make a game that is best out of five.
// At the end a winner will be crowned. 

let choices = ['rock', 'paper', 'scissors']
let playerInput = prompt('Rock, Paper or Scissors?')
let playerChoice = playerInput.toLowerCase()

console.log(playerChoice)


function getComputerChoice() {
    let computerChoiceGenerator = choices[Math.floor(Math.random() * 3)]
    return computerChoiceGenerator
}

const computerChoice = getComputerChoice()

console.log(computerChoice)

console.log(playerChoice === computerChoice)


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw"
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return `You win, ${playerChoice} beats ${computerChoice}!`
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return `You lose, ${computerChoice} beats ${playerChoice}!`
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return `You win, ${playerChoice} beats ${computerChoice}!`
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return `You lose, ${computerChoice} beats ${playerChoice}!`
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return `You win, ${playerChoice} beats ${computerChoice}!`
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return `You lose, ${computerChoice} beats ${playerChoice}!`
    }
}

console.log(playRound(playerChoice, computerChoice))