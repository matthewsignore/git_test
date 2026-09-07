function getComputerChoice() {
   const rpsChoices = ["rock","paper","scissors"];
   let randValue = getRandomInt(0,3);
   console.log("computer choice is ", rpsChoices[randValue])
   return rpsChoices[randValue];
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

function updateScore(whoScored, newScore){
    if (whoScored == "player"){
        document.querySelector("#humScore").textContent = `Human score is: ${newScore}`;
    }
    else if(whoScored == "computer"){
        document.querySelector("#comScore").textContent = `Computer score is: ${newScore}`;
    }

}


function playRound(humanChoice){
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice =="paper")
        {
            console.log("Computer wins round!")
            computerScore = computerScore+=1;
            updateScore("computer",computerScore);
        }
    else if (humanChoice == "rock" && computerChoice =="scissors")
    {
        console.log("You win the round!")
        humanScore = humanScore+=1;
        updateScore("player",humanScore);

    }
    else if (humanChoice == "rock" && computerChoice =="rock")
    {
        console.log("Tie!")
    }

    else if (humanChoice == "paper" && computerChoice =="paper")
    {
        console.log("Tie!")
    }
    else if (humanChoice == "paper" && computerChoice =="scissors")
    {
        console.log("Computer win the round!")
        computerScore = computerScore+=1;
        updateScore("computer",computerScore);

    }
    else if (humanChoice == "paper" && computerChoice =="rock")
    {
        console.log("You win the round!")
        humanScore = humanScore+=1;
        updateScore("player",humanScore);

    }

    else if (humanChoice == "scissors" && computerChoice =="paper")
    {
        console.log("You win the round!")
        humanScore = humanScore+=1;
        updateScore("player",humanScore);

    }
    else if (humanChoice == "scissors" && computerChoice =="scissors")
    {
        console.log("Tie!")
    }
    else if (humanChoice == "scissors" && computerChoice =="rock")
    {
        console.log("Computer win the round!")
        computerScore = computerScore+=1;
        updateScore("computer",computerScore);

    }
    else {
        console.log("Error, no point awarded.")
    }

    console.log("Player score = ", humanScore,  "and Computer score = ", computerScore);
    if (computerScore >= 5){
        const winner = document.createElement("winner");
            winner.textContent= `Computer wins the game!`;
            document.body.appendChild(winner);
        
    }
    else if (humanScore >=5){
        winner.textContent= `Player wins the game!`;
        document.body.appendChild(winner);
    }
    return 
}

let humanScore = 0
let computerScore = 0

function playGame() {
    playRound();
    if (computerScore >= 5) {
        console.log("Computer has 5 points, computer wins!");
        return;
    }
    if (humanScore >= 5) {
        console.log("Player has 5 points, Player wins!");
        return;
    
}
}
console.log("Test");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("button clicked");
      let humanChoice = button.id;
      playRound(humanChoice);
    });
  });

//playGame();