const add = (a, b) => a + b;

const sub = (a, b) => b - a;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

const isNumber = (a, b) => {
    let isNumber = typeof a === 'number' && typeof b === 'number';
    return isNumber && (!isNaN(a) && !isNaN(b));
}

const calculate = choiceToDo => {
    if (choiceToDo === '+') {
        return add(a, b);
    } else if (choiceToDo === '-') {
        return sub(a, b);
    } else if (choiceToDo === '*') {
        return mul(a, b);
    } else if (choiceToDo === '/') {
        return div(a, b);
    } else {
        throw new TypeError('invalid type of arguments');
    }
}

const choiceToDo = String(prompt('Выберите действие \r\n "+", "-", "*", "/"'));

const a = Number(prompt('Введите первое число'));

const b = Number(prompt('Введите второе число'));

if (isNumber(a, b)) {
    alert(calculate(choiceToDo))
} else {
    throw new TypeError('invalid type of arguments')
}