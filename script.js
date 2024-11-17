const rollButton = document.getElementById("rollButton");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const resultText = document.getElementById("result");
const colorSelect = document.getElementById("colorSelect");

rollButton.addEventListener("click", () => {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    const selectedColor = colorSelect.value;

    dice1.textContent = dice1Value;
    dice2.textContent = dice2Value;
    dice1.style.backgroundColor = selectedColor;
    dice2.style.backgroundColor = selectedColor;

    if (dice1Value === dice2Value) {
        resultText.textContent = `Result: ${dice1Value} and ${dice2Value} (Double Win!)`;
    } else {
        resultText.textContent = `Result: ${dice1Value} and ${dice2Value}`;
    }
});
