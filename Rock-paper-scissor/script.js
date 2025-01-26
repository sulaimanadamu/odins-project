const options = [{"SCISSORS": './images/scissors.png'}, {"ROCK":'./images/rock.png'}, {"PAPER":'./images/paper.png'}]
const computerChoiceImg = document.querySelector('#computerChoiceimg')
const dialogBox = document.querySelector('#dialog-box')
const btns = document.querySelector('#btns')
let humanChoice = ''
let [computerChoice, imageSrc] = Object.entries(options[getRandomInt(options.length)])[0]

console.log(dialogBox.style.height)



//set random image for computer before the spin.
computerChoiceImg.src = imageSrc

btns.addEventListener('click', getHumanChoice)

function getHumanChoice(e){
    humanChoice = e.target.getAttribute('data-represent')
    btns.removeEventListener('click', getHumanChoice)
    removeUnselectedSigns(e.target.parentNode, this)
    spin()
}

function removeUnselectedSigns(selected, element){
    element.textContent = ''
    element.appendChild(selected)
}

function spin(){
    console.log("started spin")
    const intervalId = setInterval(getComputerChoice, 500)
    setTimeout(() => {
    clearInterval(intervalId); 
    playRound(humanChoice, computerChoice,dialogBox)
    }, 10000);
}

function getComputerChoice(){
        const entries = Object.entries(options[getRandomInt(options.length)])
        const [computerChoiceimg, src] = entries[0]
        computerChoiceImg.src = src
        computerChoice = computerChoiceimg
}





let humanScore = 0
let computerScore = 0
let error = 0



function getRandomInt(max){
    return Math.floor(Math.random() * max)
}


function playRound(humanChoice, computerChoice, displayDomElement){
    let comments = document.createElement('h1')
    let scoreBoard = document.createElement('h2')

    if(humanChoice === computerChoice){
       comments.textContent = "Wow, its a tie"
    }

    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore =+ 1
        comments.textContent = "You win, Rock beats scissors anyday anytime."
    }

    else if(computerChoice === "SCISSORS" && humanChoice ==="PAPER"){
        computerScore += 1
       comments.textContent = "Scissors beats Paper anyday anytime, computer win!"
    }

    else if(computerChoice === "PAPER" && humanChoice ==="ROCK"){
        humanScore += 1
       comments.textContent = "You win, Paper beats Rock anyday anytime"
    }

    else if( computerChoice === "ROCK" && humanChoice === "SCISSORS"){
         computerScore += 1
         comments.textContent = "Computer Won!"
    }

    else if(humanChoice === "SCISSORS" &&  computerChoice ==="PAPER"){
         computerScore += 1
       comments.textContent = "Computer Won!"
    }

    else if(humanChoice === "PAPER" && computerChoice ==="ROCK"){
        computerScore += 1
        comments.textContent = "Computer Won!"
    }

    scoreBoard.textContent = `${computerScore} === ${humanScore}`

    displayDomElement.appendChild(comments)
    displayDomElement.appendChild(scoreBoard)
    const displayStyle = displayDomElement.style
    displayStyle.textAlign = 'center'
    displayStyle.fontSize = '0.8rem'
    displayStyle.fontFamily

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