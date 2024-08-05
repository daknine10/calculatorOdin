const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(a, b) {
	return a * b
};

const divide = function(a, b) {
	return a / b
};

function operate(operator, num1, num2) {
    switch (operator) {
        case '+' :
            return add(num1, num2);
        case '-' :
            return subtract(num1, num2);
        case '*' :
            return multiply(num1, num2);
        case '/' :
            if (num1 === 0 || num2 === 0) {
                display.textContent = ''
                return alert("You can't divide by zero");
            }
            return divide(num1, num2);
    }
}

let operators = ['+', '/', '*', '-']
let display = document.querySelector('.display');

let key = document.querySelectorAll('.key');

key.forEach(item => {item.addEventListener('click', () => {
    if (item.textContent === 'C') {
        return display.textContent = ''
    }
    if (item.textContent === '=') {
        let numbers = parseDisplay(display.textContent)
        return display.textContent = operate(...numbers).toFixed(2)
    }
    if (operators.includes(item.textContent)) {
        if (display.textContent && !operators.some(r => display.textContent.includes(r))) {
            display.textContent += item.textContent
            return
        }
        if (operators.includes(display.textContent[display.textContent.length-1])) {
            display.textContent = display.textContent.slice(0, -1) + item.textContent
            return
        }
        else {
            let numbers = parseDisplay(display.textContent)
            return display.textContent = operate(...numbers).toFixed(2) + item.textContent
        }
    }
    display.textContent += item.textContent
    console.log(display.textContent)})
})

function parseDisplay(text) {
    for (i = 0; i < 4; i++) { // 4 is the length of operators
        let index = text.indexOf(operators[i]);
        console.log(index)
        if (index != -1) {
            let num1 = parseFloat(text.slice(0, index))
            let operator = text.slice(index, index+1)
            let num2 = parseFloat(text.slice(index+1))
            console.log(operator, num1, num2)
            return [operator, num1, num2]
        }}
}