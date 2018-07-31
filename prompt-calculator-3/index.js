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

    const verificationChoiseToDo = str => {
        return str === '+' || str === '-' || str === '*' || str === '/';
    }

    let choiceToDo;

    while (!verificationChoiseToDo(choiceToDo)) {
        choiceToDo = String(prompt('Выберите действие \r\n "+", "-", "*", "/"'));
    }

    const operation = calculate[choiceToDo];

    let firstNumber;

    while (!isNumber(firstNumber)) {
        firstNumber = Number(prompt('Введите первое число'));
    }

    let secondNumber;
    while (!isNumber(secondNumber)) {
        secondNumber = Number(prompt('Введите второе число'));
    }

    const result = operation(firstNumber, secondNumber);

    alert(result);

    if (confirm('Хотите продолжить?')) {
        startCalculator();
    }
}
startCalculator();


