const add = (a, b) => a + b;
const sub = (a, b) => b - a;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const isNumber = number => {
    let isNumber = typeof number === 'number'
    return isNumber && (!isNaN(number));
}

const startCalculator = () => {
    const calculate = {
        '+': add,
        '-': sub,
        '*': mul,
        '/': div,
    };
    const verifiChoiseToDo = str => {
        return str === '+' || str === '-' || str === '*' || str === '/';
    }

    let choiceToDo;
    let firstNumber;
    let secondNumber;

    while (!verifiChoiseToDo(choiceToDo) && !isNumber(firstNumber) && !isNumber(secondNumber)) {
        choiceToDo = String(prompt('Выберите действие \r\n "+", "-", "*", "/"'));
        firstNumber = Number(prompt('Введите первое число'));
        secondNumber = Number(prompt('Введите второе число'));
    }

    const operation = calculate[choiceToDo];

    const result = operation(firstNumber, secondNumber);

    alert(result);

    if (confirm('Хотите продолжить?')) {
        startCalculator();
    }
}
startCalculator();


