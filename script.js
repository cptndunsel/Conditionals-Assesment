var userChoice = prompt("Heads or Tails");
var randomNumber = Math.round(Math.random())
var computerChoice = "heads";
if (randomNumber < 1) {
} else {
    var computerChoice ="tails";
}
if (userChoice == computerChoice) {
    if (computerChoice == "heads") {
        alert("You guessed right! The coin flip landed on heads!");
    } else {
        alert("You guessed right! The coin flip landed on tails!");
    }
} else {
    if (computerChoice == "heads") {
        alert("Sorry, the coin flip landed on heads not tails.");
    } else {
        alert("Sorry, the coin flip landed on tails not heads.");
    }
}

var birthYear = prompt("Please enter your birth year:");
const currentYear = "2023"
var userAge = currentYear - birthYear;
if (userAge > 21) {
    alert("You are old enough to drink in the US!");
}
else if (userAge == 21) {
    alert("You are old enough to drink in the US...barely");
}
else {
    alert("Sorry, you are not old enough to drink in the US");
}


