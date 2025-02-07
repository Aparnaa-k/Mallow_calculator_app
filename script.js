let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousValue = "";

// function for appending operators based on inputs
function appendOperator(op) {
    if (currentInput === "" && previousValue === "") return;
    
    if (currentInput === "" && previousValue !== "") {
        operator = op;
        display.innerText = previousValue + operator;
        return;
    }
    
    if (previousValue !== "" && operator !== "" && currentInput !== "") {
        calculateResult();
    }
    
    operator = op;
    previousValue = currentInput;
    currentInput = "";
    
    display.innerText = previousValue + operator;
}

// Functions for appending numbers, and decimal point
function appendNumber(num) {
    if (currentInput === "0" && num !== ".") {
        currentInput = "";
    }
    currentInput += num;
    display.innerText = currentInput;
}

// function for clearing the display
function clearDisplay() {
    currentInput = "";
    previousValue = "";
    operator = "";
    display.innerText = "0";
    console.log(currentInput);
}

// function for calculating percentage
function percentage() {
    if (currentInput === "") return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.innerText = currentInput;
}

// function for calculating the result
function calculateResult() {
    if (previousValue === "" || currentInput === "" || operator === "") return;

    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                display.innerText = "Error";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.innerText = result.toString();
    currentInput = result.toString();
    previousValue = "";
    operator = "";
}
