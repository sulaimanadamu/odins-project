const options = ["Scissors", "Rock", "Paper"]

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

//select a member of the array as computer choice
function getComputerChoice(arraySize){
    return options[getRandomInt(arraySize)]
}

//select a member of the array as human choice
function getHumanChoice(arraySize){
    return options[getRandomInt(arraySize)]
}

console.log(getComputerChoice(options.length))
console.log(getHumanChoice(options.length))

console.log("hello world!")