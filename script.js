var body = document.querySelector("body")
var pScore = document.querySelector(".your-score").lastElementChild
var cScore = document.querySelector(".computer-score").lastElementChild


var res = document.createElement("div")
res.classList.add("result")


var myScore = document.querySelector(".Rock")
myScore.addEventListener('click',()=>{
    playround("Rock")
})
var myScore = document.querySelector(".Paper")
myScore.addEventListener('click',()=>{
    playround("Paper")
})
var myScore = document.querySelector(".Scissor")
myScore.addEventListener('click',()=>{
    playround("Scissor")
})



let playerpoints = 0
let computerpoints = 0


function playround(playerSelection){
    let computerSelection = computerSelector()
    if ((computerSelection.toLowerCase() == 'scissor' && playerSelection.toLowerCase() == 'rock') || (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'scissor') || (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'paper')){
            pScore.innerHTML = playerpoints + 1
            playerpoints++
            res.innerHTML = "You win! You chose " + playerSelection + " and the computer chose " + computerSelection
        }
    else if ( computerSelection.toLowerCase() == playerSelection.toLowerCase() )
            res.innerHTML = "Its a tie! Both chose " + playerSelection 
    else{ 
            cScore.innerHTML = computerpoints + 1
            computerpoints++
            res.innerHTML = "Computer's win! You chose " + playerSelection + " and the computer chose " +computerSelection
        }
    var finalScore = document.querySelector(".final-score").appendChild(res)
    if ( playerpoints == 5 || computerpoints == 5 ){
        var winner = document.createElement("div")
        winner.classList.add("winner")
        winner.innerHTML = (playerpoints>computerpoints) ? "Player Wins" : "Computer Wins"
        finalScore.appendChild(winner)    
        playAgain()
        }
    }

function computerSelector(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0: 
            return "Scissor"
            break;
        case 1: 
            return "Paper"
            break;
        case 2: return "Rock"
    }
}
function playAgain(){
var but = document.querySelector('.start-game')
but.innerHTML = "<button class ='playAgain'>Play Again</button>"
var replay = document.querySelector(".playAgain")
replay.addEventListener("click",()=>{
    window.location.reload()
})
}
/*

function game(){
    for (let i =0;i<5;i++){
        playerSelection = prompt("Enter your choice")
        playround(playerSelection)
    }

    if (playerpoints < computerpoints) alert('Computer wins')
    else if (playerpoints > computerpoints) alert('Player wins')
    else alert('Its a tie')
}

game()*/

