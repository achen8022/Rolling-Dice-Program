function rollingDice()
{
    var diceOne = (Math.floor(Math.random() * 6) + 1);
    var diceTwo = (Math.floor(Math.random() * 6) + 1);
    var diceValues = document.createElement("p");
    var diceSum = document.createElement("p");
    diceValues.textContent = "You rolled a " + diceOne + " and a " + diceTwo + ".";
    diceSum.textContent = "Together you rolled a " + (diceOne + diceTwo) + ".";
    document.body.appendChild(diceValues);
    document.body.appendChild(diceSum);
}

const button = document.querySelector("button");
button.addEventListener("click", rollingDice);