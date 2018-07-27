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

const choiceToDo = String(prompt('Выберите действие \r\n "+", "-", "*", "/"'));

const a = Number(prompt('Введите первое число'));

const b = Number(prompt('Введите второе число'));

const operation = calculate[choiceToDo];

if (isNumber(a, b)) {
    alert(operation(a, b))
} else {
    throw new TypeError(`[${operation.name}]: invalid type of arguments`);
}
