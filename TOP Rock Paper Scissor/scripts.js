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

function getHumanChoice() {
   let value = prompt("Rock, Paper, or Scissors?");
   console.log("human choice is ", value);
   return value;
}

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice =="paper")
        {
            console.log("Computer wins round!")
            computerScore = computerScore+=1;
        }
    else if (humanChoice == "rock" && computerChoice =="scissors")
    {
        console.log("You win the round!")
        humanScore = humanScore+=1;
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
    }
    else if (humanChoice == "paper" && computerChoice =="rock")
    {
        console.log("You win the round!")
        humanScore = humanScore+=1;
    }

    else if (humanChoice == "scissors" && computerChoice =="paper")
    {
        console.log("You win the round!")
        humanScore = humanScore+=1;
    }
    else if (humanChoice == "scissors" && computerChoice =="scissors")
    {
        console.log("Tie!")
    }
    else if (humanChoice == "scissors" && computerChoice =="rock")
    {
        console.log("Computer win the round!")
        computerScore = computerScore+=1;
    }
    console.log("Player score = ", humanScore,  "and Computer score = ", computerScore);
}

let humanScore = 0
let computerScore = 0

function playGame() {
    for (let i = 0; i < 50; i++) {
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
}
playGame();