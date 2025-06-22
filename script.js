const inputValue = document.querySelector('#input-value');
const valuesContainer = document.querySelector('#values-container');
const clearButton = document.querySelector('#clear');

let firstNumber = "";
let secondNumber = "";
let operation = "";
let justCalculated = false;
let operatorJustPressed = false;
let decimalUsedInFirst = false;
let decimalUsedInSecond = false;

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? 'Error' : a / b)
};

// Remove parentheses
function parseNumber(str) {
    return str.startsWith('(') && str.endsWith(')') ? parseFloat(str.slice(1, -1)) : parseFloat(str) || 0;
}

// Round off inputValue 
function formatResult(value) {
    return Number.isInteger(value) ? value : value.toFixed(2);
}

// Run operation 
function operate(operator, num1, num2) {
    return formatResult(operations[operator](parseNumber(num1), parseNumber(num2)));
}

// Handling decimal and 0 values' behavior
function handleNumberInput(currentNumber, newDigit, decimalUsed) {
    if (newDigit === '.' && decimalUsed) return currentNumber;
    return currentNumber === "0" ? newDigit : currentNumber + newDigit;
}

// Delete character 
function deleteChar() {
    if (secondNumber) {
        decimalUsedInSecond = secondNumber.endsWith('.') ? false : decimalUsedInSecond;
        secondNumber = secondNumber.slice(0, -1);
    } else if (operation) {
        operation = "";
        operatorJustPressed = false;
        decimalUsedInSecond = false;
    } else if (firstNumber) {
        decimalUsedInFirst = firstNumber.endsWith('.') ? false : decimalUsedInFirst;
        firstNumber = firstNumber.slice(0, -1);
    } else {
        firstNumber = '0';
    }
    updateDisplay();
}

// Input Value Display -> 5 + 3 
function updateDisplay() {
    inputValue.textContent = firstNumber || operation || secondNumber ? firstNumber + operation + secondNumber : "0";
}

// Check if the button is a value or operator 
function enterValues(event) {
    const inputText = event.target.textContent;

    if(event.target.classList.contains('backspace')) {
        deleteChar();
    }else if (event.target.classList.contains('value')) {
        if (justCalculated) resetCalculator(inputText);
        else processNumberInput(inputText);
    } else if (event.target.classList.contains('operator')) {
        processOperatorInput(inputText);
    }
}

// Number input when an operation is/isn't added 
function processNumberInput(inputText) {
    operatorJustPressed = false;

    if (operation === '') {
        firstNumber = handleNumberInput(firstNumber, inputText, decimalUsedInFirst);
        decimalUsedInFirst ||= inputText === '.';
    } else {
        secondNumber = handleNumberInput(secondNumber, inputText, decimalUsedInSecond);
        decimalUsedInSecond ||= inputText === '.';
    }

    updateDisplay();
}

// Calculate values 
function processOperatorInput(inputText) {
    if (inputText === '=') {
        if (firstNumber && secondNumber && operation && !operatorJustPressed) {
            firstNumber = operate(operation, firstNumber, secondNumber).toString();
            resetAfterCalculation();
        }
    } else if (firstNumber && !operatorJustPressed) {
        if (secondNumber && operation) {
            firstNumber = operate(operation, firstNumber, secondNumber).toString();
            secondNumber = "";
            decimalUsedInFirst = firstNumber.includes('.');
        }
        operation = inputText;
        operatorJustPressed = true;
        justCalculated = false;
        decimalUsedInSecond = false;
    } else {
        operation = inputText;
    }
    updateDisplay();
}

// reset calculator 
function resetCalculator(initialValue = "") {
    firstNumber = initialValue;
    secondNumber = "";
    operation = "";
    justCalculated = false;
    operatorJustPressed = false;
    decimalUsedInFirst = initialValue === '.';
    decimalUsedInSecond = false;
    updateDisplay();
}

// reset after calculation 
function resetAfterCalculation() {
    secondNumber = "";
    operation = "";
    justCalculated = true;
    operatorJustPressed = false;
    decimalUsedInFirst = firstNumber.includes('.');
    decimalUsedInSecond = false;
    updateDisplay();
}

// clear the value 
function clearValue() {
    resetCalculator("0");
}

// keyboard support! 
function addKeyboardSupport(event) {
    const keyMap = {
        'Backspace': deleteChar,
        'Escape': clearValue,
        'Enter': () => processOperatorInput('='),
    };

    if (keyMap[event.key]) return keyMap[event.key]();
    if (operations[event.key]) return processOperatorInput(event.key);
    if (!isNaN(event.key) || event.key === '.') return processNumberInput(event.key);
}

document.addEventListener('keyup', addKeyboardSupport);
valuesContainer.addEventListener('click', enterValues);
clearButton.addEventListener('click', clearValue);