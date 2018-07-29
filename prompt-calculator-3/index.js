const add = (a, b) => a + b;

const sub = (a, b) => b - a;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

const isNumber = (a, b) => {
    let isNumber = typeof a === 'number' && typeof b === 'number';
    return isNumber && (!isNaN(a) && !isNaN(b));
}

const calculate = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
};

const firstNumber = Number(prompt('Введите первое число'));

const secondNumber = Number(prompt('Введите второе число'));

const operation = calculate[choiceToDo];

const choiceToDoVerification = str => {
    return isNaN(str) || str.length === 1 || str === '+' || str === '-' || str === '*' || str === '/';
}

let choiceToDo;

while (choiceToDoVerification(choiceToDo)) {
    choiceToDo = prompt('Выберите действие \r\n "+", "-", "*", "/"');
}

if (isNumber(firstNumber, secondNumber)) {
    alert(operation(firstNumber, secondNumber))
} else {
    throw new TypeError(`[${operation.name}]: invalid type of arguments`);
}
