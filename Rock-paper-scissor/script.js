const options = ["SCISSORS", "ROCK", "PAPER"]
let humanScore = 0
let computerScore = 0

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

//select a member of the array as computer choice
function getComputerChoice(arraySize){
    return options[getRandomInt(arraySize)]
}

//accept input from users 
function getHumanChoice(){
   let choice = prompt("Rock Paper Scissors? ")
   return choice
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Wow, its a tie"
    }

    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore += 1
        return "You win, Rock beats scissors anyday anytime."
    }

    else if(computerChoice === "SCISSORS" && humanChoice ==="PAPER"){
        humanScore += 1
         return "You win, Scissors beats Paper anyday anytime."
    }

    else if(computerChoice === "PAPER" && humanChoice ==="ROCK"){
        humanScore += 1
        return "You win, Paper beats Rock anyday anytime"
    }

    else if( computerChoice === "ROCK" && humanChoice === "SCISSORS"){
         computerScore += 1
        return "Computer Won!"
    }

    else if(humanChoice === "SCISSORS" &&  computerChoice ==="PAPER"){
         computerScore += 1
        return "Computer Won!"
    }

    else if(humanChoice === "PAPER" && computerChoice ==="ROCK"){
        computerScore += 1
        return "Computer Won!"
    }

}

console.log(getComputerChoice(options.length))
getHumanChoice()

