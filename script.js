const inputValue = document.querySelector('#input-value');
const valuesContainer = document.querySelector('#values-container')
const clearButton = document.querySelector('#clear');


let firstNumber = ""; 
let secondNumber = "";
let operation = "";
let justCalculated = false;
let operatorJustPressed = false;


function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
    let divideNumber = parseFloat(num1) / parseFloat(num2);

        if(divideNumber === Infinity || isNaN(divideNumber)) return 'Error';

        return divideNumber;
}


function operate(operator, num1, num2) {
    if(operator == '+') {
        return add(num1, num2);
    } else if(operator == '-') {
        return subtract(num1, num2);
    } else if(operator == '*') {
        return multiply(num1, num2);
    } else if(operator == '/') {
        return divide(num1, num2);
    }
}

function handleNumberInput(currentNumber, newDigit) {
    if(currentNumber === '0' && newDigit === '0') {
        return currentNumber; 
    }
    
    if(currentNumber === '0' && newDigit !== '.') {
        return newDigit
    }

    return currentNumber + newDigit;
}


function enterValues(event) {
   if(event.target.classList.contains('value')) {
    
    const inputText = event.target.textContent

    operatorJustPressed = false;

    if(justCalculated) {
        firstNumber = inputText; 
        secondNumber = '';
        operation = '';
        justCalculated = false;
        inputValue.textContent = firstNumber; 
        return;
    }

    if(operation === '') {
        firstNumber = handleNumberInput(firstNumber, inputText);
    } else {
        secondNumber = handleNumberInput(secondNumber, inputText);
    }
   } else if(event.target.classList.contains('operator')) {
    if(event.target.textContent == '=') {
        if(firstNumber && secondNumber && operation && !operatorJustPressed) {
            const result = operate(operation, firstNumber, secondNumber);
            inputValue.textContent = result; 
            firstNumber = result.toString();
            secondNumber = '';
            operation = ''
            justCalculated = true;
            operatorJustPressed = false
        }
    } else {
        if(firstNumber && !operatorJustPressed) {
            if(secondNumber && operation) {
                const result = operate(operation, firstNumber, secondNumber);
                inputValue.textContent = result;
                firstNumber = result.toString();
                secondNumber = '';
            }

            operation = event.target.textContent; 
            operatorJustPressed = true;
            justCalculated = false;
        } else if(operatorJustPressed) {
            operation = event.target.textContent;
        }
    }
   }

    inputValue.textContent = `${firstNumber}${operation}${secondNumber}`;
}


function clearValue(event) {
    const buttonId = event.target.id; 

    if(buttonId == 'clear') {
        inputValue.textContent = '0';
        firstNumber = '';
        secondNumber = '';
        operation = '';
        justCalculated = false;
        operatorJustPressed = false;
    }
}

valuesContainer.addEventListener('click', enterValues);
clearButton.addEventListener('click', clearValue)