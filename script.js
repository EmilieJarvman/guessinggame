// Tutorial from Colt Steele / Udemy

let maximum = parseInt(prompt("Ange en siffra (det blir din högsta)"));
while (!maximum) {
    maximum = parseInt(prompt("Det måste vara en siffra!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Gissa en siffra!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "sluta") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("För högt! Gissa igen!")
    }
    else {
        guess = prompt("För lågt! Gissa igen!")
    }
}

if (guess === "sluta") {
    console.log("Ok, du gav upp.");
}
else {
    // console.log(`Bra jobbat! Du försökte ${attempts} gånger`);
    document.body.innerHTML = (`Bra jobbat! Du försökte ${attempts} gånger!`);
}

