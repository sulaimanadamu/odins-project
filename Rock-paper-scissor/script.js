const options = [{"SCISSORS": './images/scissors.png'}, {"ROCK":'./images/rock.png'}, {"PAPER":'./images/paper.png'}]
const computerChoiceImg = document.querySelector('#computerChoiceimg')
const dialogBox = document.querySelector('#dialog-box')
const btns = document.querySelector('#btns')
let computerChoiceSym = ''
let humanChoice = ''

//initial computer image befor the spin.
computerChoiceImg.src = Object.values(options[getRandomInt(options.length)])


btns.addEventListener('click', getHumanChoice)


function getHumanChoice(e){
    humanChoice = e.target.getAttribute('data-represent')
    btns.removeEventListener('click', getHumanChoice)
    removeUnselectedSigns(e.target.parentNode, this)
    console.log(humanChoice)
}

function removeUnselectedSigns(selected, element){
    element.textContent = ''
    element.appendChild(selected)
}


function randomImages(){
const intervalId = setInterval(randomImages, 500)
setTimeout(() => {
  clearInterval(intervalId); 
}, 10000);
}

function getComputerChoice(){
        const entries = Object.entries(options[getRandomInt(options.length)])
        const [computerChoice, src] = entries[0]
        computerChoiceImg.src = src
        computerChoiceSym = computerChoice
}





let humanScore = 0
let computerScore = 0
let error = 0



function getRandomInt(max){
    return Math.floor(Math.random() * max)
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


// allow us to repeat playing of the game.
// function playGame(){
//         // computerChoice = getComputerChoice(options.length)
//         // humanChoice = getHumanChoice()

//         console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//         playRound(humanChoice, computerChoice)
//         console.log("Computer: ", computerScore,"     ", "Your Score: ", humanScore)
//         console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// }

// playGame()