//DOM selectors

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playerScore = document.getElementById("playerScoreNumber")
const computerScore = document.getElementById("computerScoreNumber")
const playerChoice = document.getElementById("pChoice")
const computerChoice = document.getElementById("cChoice")
const outcomeTextElement = document.getElementById("outcomeText")
const restartBtn = document.getElementById("restartBtn")

let playerCurrentScore = 0;
let computerCurrentScore = 0;
const options = ["rock", "paper", "scissors"]


// event listeners

window.addEventListener("load", () => {
    restartBtn.style.display = "none";
})

rock.addEventListener("click", function(){
    computeScore("rock", computerChoiceSelection())
})

paper.addEventListener("click", function(){
    computeScore("paper", computerChoiceSelection())
})

scissors.addEventListener("click", function(){
    computeScore("scissors", computerChoiceSelection())
})

restartBtn.addEventListener("click", () => {
    location.reload()
})

// functions

function computerChoiceSelection(){
    let choice = Math.floor(Math.random() * options.length)  // computer random choice
    return options[choice];

    
}

function computeScore(playerSelection){

    const computerSelection = computerChoiceSelection()


    if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerCurrentScore ++;
        outcomeTextElement.textContent = "You win this round!"

    } 

    if(
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")

    ){
        computerCurrentScore ++;
        outcomeTextElement.textContent = "Computer Wins this round!"
    }

    if(
        (playerSelection === computerSelection)

    ){

        outcomeTextElement.textContent = "It's a Draw!"
    }

    updateChoice(playerSelection, computerSelection)
    updateScore()

}


function updateScore(){
    playerScore.textContent = playerCurrentScore;
    computerScore.textContent = computerCurrentScore;

    if(playerScore.textContent === "5"){
        outcomeTextElement.textContent = "You beat the computer!"
        restartBtn.style.display = "block";
        rock.replaceWith(rock.cloneNode(true));
        paper.replaceWith(paper.cloneNode(true)) /// clones the node elements and by doing so removes the event listeners
        scissors.replaceWith(scissors.cloneNode(true))
    } 

    if(computerScore.textContent === "5"){
        outcomeTextElement.textContent = "The computer wins!"
        restartBtn.style.display = "block";
        rock.replaceWith(rock.cloneNode(true));
        paper.replaceWith(paper.cloneNode(true))
        scissors.replaceWith(scissors.cloneNode(true))
        
    }
    
}


function updateChoice(playerSelection, computerSelection){ // updates the display of which option has been chosen
    switch(playerSelection){
        case "rock":
            playerChoice.innerText = "✊"
            break;
        case "paper":
            playerChoice.innerText = "✋"
            break;
        case "scissors":
            playerChoice.innerText = "✌️"
            break;
    }

    switch(computerSelection){
        case "rock":
            computerChoice.innerText = "✊"
            break;
        case "paper":
            computerChoice.innerText = "✋"
            break;
        case "scissors":
            computerChoice.innerText = "✌️"
            break;
    }
}

