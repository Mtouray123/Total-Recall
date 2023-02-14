

const choices = ["rock", "paper", "scissors"];

const randomNum = Math.floor(Math.random() * 3);

const computerChoice = choices [randomNum];

let userChoice = "";
let isNotvalid = true;

while (isNotvalid) {
    userChoice = prompt("Please choose rock, paper, or scissors")
    userChoice = userChoice.trim().toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        isNotvalid = false;
    }
}


if (userChoice === computerChoice) {
    console.log("It's a tie!");
} else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You score!");
} else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("You score!");
} else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You score!");
} else {
    console.log("Computer score!");
}

console.log('User Choice: ${userChoice} || Computer Choice ${computerchoice}');