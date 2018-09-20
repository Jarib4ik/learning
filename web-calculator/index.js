const numButtons = document.querySelector('.numButton');
const args1 = document.querySelector('.arg:nth-child(2) .itemValue:nth-child(2)');
const args2 = document.querySelector('.arg:nth-child(4) .itemValue:nth-child(2)');
const resultValue = document.querySelector('.result .resultValue:nth-child(2)');
const operButtons = document.querySelector('.operButton');
const operation = document.querySelector('.operation .itemValue:nth-child(2)');
const MAX_ARGUMENT_LENGTH = 5;

const calculate = {
    '+': BasicMath.add,
    '-': BasicMath.sub,
    '*': BasicMath.mul,
    '/': BasicMath.div,
};

let operatValue = '';
let argument1 = '';
let argument2 = '';

numButtons.addEventListener('click', function (e) {
    if (!operatValue) {
        if (!args1.textContent.length || args1.textContent.length < MAX_ARGUMENT_LENGTH) {
            args1.textContent += e.target.dataset.number;
            argument1 = args1.textContent;
        }
    } else {
        if (args2.textContent.length < MAX_ARGUMENT_LENGTH) {
            args2.textContent += e.target.dataset.number;
            argument2 = args2.textContent;
            const checkFunction = calculate[operatValue];
            resultValue.textContent = checkFunction(Number(argument1), Number(args2.textContent));
        }
    }
});

operButtons.addEventListener('click', function (e) {
    if (argument1) {
        if (e.target.dataset.operation === 'C') {
            args1.textContent = '';
            args2.textContent = '';
            operation.textContent = '';
            argument1 = '';
            argument2 = '';
            operatValue = '';
            resultValue.textContent = '';
        } else {
            if (!operation.textContent) {
                operation.textContent = e.target.dataset.operation;
                operatValue = operation.textContent;
            }
        }
    }
});



