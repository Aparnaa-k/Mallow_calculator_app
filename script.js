let display = document.getElementById("display");
let currentInput = "";

// Appending number based on the input
function appendNumber(num) {
    if (currentInput === "0" && num !== ".") {
        currentInput = "";
    }
    currentInput += num;
    display.innerText = currentInput;
}
// Appending operator based on the input
function appendOperator(operator) {
    if (currentInput.length === 0) return;
    if (isNaN(currentInput[currentInput.length - 1])) return;
    currentInput += operator;
    display.innerText = currentInput;
}

// Clearing the display
function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

// Toggle sign
function toggleSign() {
    if (currentInput === "") return;
    currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : "-" + currentInput;
    display.innerText = currentInput;
}

// Percentage calculation
function percentage() {
    if (currentInput === "") return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.innerText = currentInput;
}

// calculateResult function
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
}
