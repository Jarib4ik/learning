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

    let QuestionToDo = 'Выберите действие \r\n "+", "-", "*", "/"';
    let QuestionOneNumber = 'Введите первое число';
    let QuestionTwoNumber = 'Введите второе число';

    const question = (func, question, dataType) => {
        let result;
        while (!func(result)) {
            result = dataType(prompt(question));
        }
        return result;
    }

    let choiceToDo = question(verifiChoiseToDo, QuestionToDo, String);
    let firstNumber = question(isNumber, QuestionOneNumber, Number);
    let secondNumber = question(isNumber, QuestionTwoNumber, Number);

    const operation = calculate[choiceToDo];

    const result = operation(firstNumber, secondNumber);

    if (isNumber(result)) {
        alert(result);
    } else {
        throw new TypeError(`[${operation.name}]: invalid type of arguments`);
    }

    if (confirm('Хотите продолжить?')) {
        startCalculator();
    }
}
startCalculator();


