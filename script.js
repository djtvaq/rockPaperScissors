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


let inputs = document.querySelectorAll('.input')
inputs.forEach(element => element.addEventListener('click', playRound))
let resultBox = document.querySelector('.results')
let playerScoreBox = document.querySelector('#playerScore')
let computerScoreBox = document.querySelector('#computerScore')





function roundCount() {

    playerScoreBox.innerText = playerScore
    computerScoreBox.innerText = computerScore

    if (playerScore === 5 || computerScore ===5 ) {
            if (playerScore > computerScore) {
                resultBox.innerText = 'You won the first to five! Select a new option to start a new game'
            } else if (playerScore < computerScore) {
                resultBox.innerText = 'You lost the first to five! Select a new option to start a new game'
            } else {
                resultBox.innerText = 'Its a draw!'
            }

            playerScore = 0
            computerScore = 0
    }
}

function playRound() {

    function getComputerChoice() {
        let computerChoiceGenerator = choices[Math.floor(Math.random() * 3)]
        return computerChoiceGenerator
    }

    const computerChoice = getComputerChoice()
    const playerChoice = this.id
    console.log(computerChoice)
    console.log(playerChoice)



    if (playerChoice === computerChoice) {
        console.log("Draw")
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        resultBox.innerText = `You win, ${playerChoice} beats ${computerChoice}!`
        console.log(playerScore)
        console.log(computerScore)
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        resultBox.innerText = `You lose, ${computerChoice} beats ${playerChoice}!`
        console.log(playerScore)
        console.log(computerScore)
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        resultBox.innerText = `You win, ${playerChoice} beats ${computerChoice}!`
        console.log(playerScore)
        console.log(computerScore)
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        resultBox.innerText = `You lose, ${computerChoice} beats ${playerChoice}!`
        console.log(playerScore)
        console.log(computerScore)
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        resultBox.innerText = `You win, ${playerChoice} beats ${computerChoice}!`
        console.log(playerScore)
        console.log(computerScore)
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        resultBox.innerText = `You lose, ${computerChoice} beats ${playerChoice}!`
        console.log(playerScore)
        console.log(computerScore)
    }

    roundCount()


}










