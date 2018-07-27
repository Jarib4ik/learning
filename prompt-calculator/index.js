const add = (a, b) => a + b;

const sub = (a, b) => b - a;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

const isNumber = (a, b) => {
    let isNumber = typeof a === 'number' && typeof b === 'number';
    return isNumber && (!isNaN(a) && !isNaN(b));
}

const calculate = (choiceToDo, arg1, arg2) => {
    if (choiceToDo === '+') {
        return add(arg1, arg2);
    } else if (choiceToDo === '-') {
        return sub(arg1, arg2);
    } else if (choiceToDo === '*') {
        return mul(arg1, arg2);
    } else if (choiceToDo === '/') {
        return div(arg1, arg2);
    } else {
        throw new TypeError('invalid type of arguments');
    }
}

const choiceToDo = String(prompt('Выберите действие \r\n "+", "-", "*", "/"'));

const a = Number(prompt('Введите первое число'));

const b = Number(prompt('Введите второе число'));

if (isNumber(a, b)) {
    alert(calculate(choiceToDo, a, b))
} else {
    throw new TypeError('invalid type of arguments')
}