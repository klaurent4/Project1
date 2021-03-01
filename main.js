var rounds;
var playerChoice;
var globalTies = 0;
var globalWins = 0;
var globalLosses = 0;
var computerChoice;
var intRounds;
var playerChoice;
rounds = prompt("How many rounds would you like to play", "Number of rounds");
intRounds = parseInt(rounds, 10);
for (var i = 0; i < intRounds; i++) {
    playerChoice = prompt("rock, paper, or scissor? Enter r, p, or s", "r, p, or s");
    computerChoice = Math.floor(Math.random() * 3) + 0;

if (computerChoice == 0) {
    computerChoice = "r"
} 
if (computerChoice == 1) {
    computerChoice = "p"
} 
if (computerChoice == 2) {
    computerChoice = "s"
}

if (playerChoice == "r" && computerChoice == "s") {
    (globalWins = globalWins+1);
    alert("You won!");
    } else if (playerChoice == "r" && computerChoice == "p") {
    (globalLosses = globalLosses+1);
    alert("You lose!");
    } else if (playerChoice == "r" && computerChoice == "r") {
        (globalTies = globalTies+1);
        alert("You tied!");
    }
    else if (playerChoice == "p" && computerChoice == "s") {
    (globalLosses = globalLosses+1);
    alert("You lose!");
    } else if (playerChoice == "p" && computerChoice == "r") {
    (globalWins = globalWins+1);
    alert("You won!");
    } else if (playerChoice == "p" && computerChoice == "p") { 
        (globalTies = globalTies+1);
        alert("You tied!");
    }
    else if (playerChoice == "s" && computerChoice == "p") {
    (globalWins = globalWins+1);
    alert("You won!");
    } else if (playerChoice == "s" && computerChoice == "r") {
    (globalLosses = globalLosses+1);
    alert("You lose!");
    } else if (playerChoice == "s" && computerChoice == "s") { 
        (globalTies = globalTies+1);
        alert("You tied!");
    }  
}

alert("You won " + globalWins + " times." + " You tied " + globalTies + " times." + " You lost " + globalLosses + " times.");
