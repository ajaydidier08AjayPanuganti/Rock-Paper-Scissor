let playerSelection = ""
let computerSelection = ""
let playerpoints = 0
let computerpoints = 0

function playround(playerSelection){
    computerSelection = computerSelector()
    if (!((playerSelection.toLowerCase() == 'scissor') || (playerSelection.toLowerCase() == 'rock') || (playerSelection.toLowerCase() == 'paper')))
        alert ("Incorrect option " + playerSelection)
    else if ((computerSelection.toLowerCase() == 'scissor' && playerSelection.toLowerCase() == 'rock') || (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'scissor') || (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'paper')){
            alert("You win! You chose " +playerSelection+ " and the computer chose " + computerSelection)
            playerpoints++
        }
    else if ( computerSelection.toLowerCase() == playerSelection.toLowerCase() )
            alert("Its a tie! You chose " + playerSelection + " and the computer chose " +computerSelection)
    else{ 
            alert("Computer's win! You chose " + playerSelection + " and the computer chose " +computerSelection)
            computerpoints++
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

function game(){
    for (let i =0;i<5;i++){
        playerSelection = prompt("Enter your choice")
        playround(playerSelection)
    }

    if (playerpoints < computerpoints) alert('Computer wins')
    else if (playerpoints > computerpoints) alert('Player wins')
    else alert('Its a tie')
}

game()

