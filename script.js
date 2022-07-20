// Psuedocode
// The computer will choose randomly between rock, paper or scissors
// The player will input one of the three choices. 
// We will compare the choices and decide who is the winner.
// We will return a line that says whether the player lost or won.
// We will loop this FIVE times, to make a game that is best out of five.
// At the end a winner will be crowned. 

let choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice
}

console.log(getComputerChoice())