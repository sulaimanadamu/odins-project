const options = ["SCISSORS", "ROCK", "PAPER"]
let humanScore = 0
let computerScore = 0
let error = 0


function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

//select a member of the array as computer choice
function getComputerChoice(arraySize){
    return options[getRandomInt(arraySize)]
}

//accept input from users 
function getHumanChoice(){
    let choice = prompt("Rock,  Paper or Scissors? ")
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
       console.log( "Wow, its a tie")
    }

    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore =+ 1
       console.log( "You win, Rock beats scissors anyday anytime.")
    }

    else if(computerChoice === "SCISSORS" && humanChoice ==="PAPER"){
        humanScore += 1
        console.log( "You win, Scissors beats Paper anyday anytime.")
    }

    else if(computerChoice === "PAPER" && humanChoice ==="ROCK"){
        humanScore += 1
       console.log( "You win, Paper beats Rock anyday anytime")
    }

    else if( computerChoice === "ROCK" && humanChoice === "SCISSORS"){
         computerScore += 1
        console.log( "Computer Won!")
    }

    else if(humanChoice === "SCISSORS" &&  computerChoice ==="PAPER"){
         computerScore += 1
       console.log( "Computer Won!")
    }

    else if(humanChoice === "PAPER" && computerChoice ==="ROCK"){
        computerScore += 1
       console.log( "Computer Won!")
    }

}

computerChoice = getComputerChoice(options.length)
humanChoice = getHumanChoice()



console.log(humanScore)
console.log(computerScore)


// allow us to repeat playing of the game.
function playGame(numOfTimes){
    for(let i = 0; i < numOfTimes; i++){
        playRound(humanChoice, computerChoice)
        console.log("Computer: ", computerScore, "Your Score: ", humanScore)
    }
}

playGame(5)