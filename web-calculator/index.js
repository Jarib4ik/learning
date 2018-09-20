const args1 = document.getElementById('arg1')
const args2 = document.getElementById('arg2')
const operation = document.getElementById('operation')
const resultValue = document.getElementById('result')

const MAX_ARGUMENT_LENGTH = 5;
const MIN_NUM_KEY = 48;
const MAX_NUM_KEY = 57;

const CLEAR = 99;
const PLUS = 43;
const MINUS = 45;
const MULYIPLY = 42;
const DIVISION = 47;

const calculate = {
    '+': BasicMath.add,
    '-': BasicMath.sub,
    '*': BasicMath.mul,
    '/': BasicMath.div,
};

document.addEventListener('keyup', function (e) {
    let key = e.key;
    let keyCharCode = key.charCodeAt(0);

    if (!operation.textContent) {
        if (!args1.textContent.length || args1.textContent.length < MAX_ARGUMENT_LENGTH) {
            if (keyCharCode >= MIN_NUM_KEY && keyCharCode <= MAX_NUM_KEY)
                args1.textContent += e.key;
        }
    } else {
        if (args2.textContent.length < MAX_ARGUMENT_LENGTH) {
            if (keyCharCode >= MIN_NUM_KEY && keyCharCode <= MAX_NUM_KEY)
                args2.textContent += e.key;

            const checkFunction = calculate[operation.textContent];
            resultValue.textContent = checkFunction(Number(args1.textContent), Number(args2.textContent));
        }
    }

    if (args1.textContent) {
        if (keyCharCode === CLEAR) {
            args1.textContent = '';
            args2.textContent = '';
            operation.textContent = '';
            argument1 = '';
            argument2 = '';
            operatValue = '';
            resultValue.textContent = '';
        } else {
            if (!operation.textContent) {
                if (keyCharCode === PLUS || keyCharCode === MINUS || keyCharCode === MULYIPLY || keyCharCode === DIVISION)
                    operation.textContent = key;
            }
        }
    }
});


