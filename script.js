const inputValue = document.querySelector('#input-value');

const valuesContainer = document.querySelector('#values-container')


let num1 = 3; 
let num2 = 5;
let operation = '+'

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(operator, num1, num2) {
    if(operator == '+') {
        return add(num1, num2);
    } else if(operator == '-') {
        return subtract(num1, num2);
    } else if(operator == '*') {
        return multiply(num1, num2);
    } else if(operator == '/') {
        return divide(num1, num2)
    }
}


function enterValues() {
    let calculatorValues = document.querySelectorAll('.value');
    

    
}

valuesContainer.addEventListener('click', enterValues);
