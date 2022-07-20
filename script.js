// Psuedocode
// The computer will choose randomly between rock, paper or scissors
// The player will input one of the three choices. 
// We will compare the choices and decide who is the winner.
// We will return a line that says whether the player lost or won.
// We will loop this FIVE times, to make a game that is best out of five.
// At the end a winner will be crowned. 





function playRound() {

    let choices = ['rock', 'paper', 'scissors']
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
       // playerScore++;
        console.log(`You win, ${playerChoice} beats ${computerChoice}!`)
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
       // computerScore++;
        console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
       // playerScore++;
        console.log(`You win, ${playerChoice} beats ${computerChoice}!`)
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
       // computerScore++;
        console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
       // playerScore++;
        console.log(`You win, ${playerChoice} beats ${computerChoice}!`)
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
       // computerScore++;
        console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
    } 
}



playRound()



// function game() {
//     //best of five
//     let playerScore = 0
//     let computerScore = 0


//     for (let round = 0; round < 5; round++) {



//     }
// }
