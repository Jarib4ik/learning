const add = (a, b) => a + b;
const sub = (a, b) => b - a;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calculate = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
};

let operatValue = '';

const numButtons = document.querySelector('.numButton');
const args1 = document.querySelector('.arg1 .itemValue:nth-child(2)');
const args2 = document.querySelector('.arg2 .itemValue:nth-child(2)');
const resultValue = document.querySelector('.result .itemValue:nth-child(2)');

let argument1 = '';
let argument2 = '';

numButtons.addEventListener('click', function (e) {
    
    if (!args1.textContent.length) {
        args1.textContent = e.target.dataset.number;
        argument1 = args1.textContent;
    } else {
        if (!operatValue) {
            if (args1.textContent.length < 5)
                args1.textContent += e.target.dataset.number;
            argument1 = args1.textContent;
        } else {
            if (args2.textContent.length < 5) {
                args2.textContent += e.target.dataset.number;
                argument2 = args2.textContent;
                debugger
                const checkFunction = calculate[operatValue];
                resultValue.textContent = checkFunction(Number(argument1), Number(args2.textContent));

            }
        }
    }
});

const operButtons = document.querySelector('.operButton');
const operation = document.querySelector('.operation .itemValue:nth-child(2)');

operButtons.addEventListener('click', function (e) {
    if (argument1) {
        if (e.target.dataset.operation === 'C') {
            args1.textContent = '';
            args2.textContent = '';
            operation.textContent =  '';
            argument1 = '';
            argument2 = '';
            operatValue = '';
        } else {
            operation.textContent = e.target.dataset.operation;
            operatValue = operation.textContent;
        }
    }
});



