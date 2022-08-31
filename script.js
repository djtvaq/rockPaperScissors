// Psuedocode
// The computer will choose randomly between rock, paper or scissors
// The player will input one of the three choices. 
// We will compare the choices and decide who is the winner.
// We will return a line that says whether the player lost or won.
// We will loop this FIVE times, to make a game that is best out of five.
// At the end a winner will be crowned. 



const choices = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

function game() {
    //best of five

   // for (let round = 0; round < 5; round++) {

        let playerInput = prompt('Rock, Paper or Scissors?')
        let playerChoice = playerInput.toLowerCase()

        function getComputerChoice() {
            let computerChoiceGenerator = choices[Math.floor(Math.random() * 3)]
            return computerChoiceGenerator
        }

        const computerChoice = getComputerChoice()

        console.log(playerChoice)
        console.log(computerChoice)

        if (playerChoice === computerChoice) {
            console.log("Draw")
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            playerScore++;
            console.log(`You win, ${playerChoice} beats ${computerChoice}!`)
            console.log(playerScore)
            console.log(computerScore)
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
            console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
            console.log(playerScore)
            console.log(computerScore)
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            playerScore++;
            console.log(`You win, ${playerChoice} beats ${computerChoice}!`)
            console.log(playerScore)
            console.log(computerScore)
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
            console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
            console.log(playerScore)
            console.log(computerScore)
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore++;
            console.log(`You win, ${playerChoice} beats ${computerChoice}!`)
            console.log(playerScore)
            console.log(computerScore)
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
            console.log(playerScore)
            console.log(computerScore)
        }
   // }

    if (playerScore > computerScore) {
        console.log('You won the best of five!')
    } else if (playerScore < computerScore) {
        console.log('You lost the best of five!')
    } else {
        console.log('Its a draw!')
    }
}



game()











