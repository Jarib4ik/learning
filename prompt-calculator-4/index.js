const add = (a, b) => a + b;
const sub = (a, b) => b - a;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const isNumber = number => {
    let isNumber = typeof number === 'number'
    return isNumber && (!isNaN(number));
};

const startCalculator = () => {
    const calculate = {
        '+': add,
        '-': sub,
        '*': mul,
        '/': div,
    };
    const verifiChoiseToDo = str => {
        return str === '+' || str === '-' || str === '*' || str === '/';
    };

    const QUESTION_TO_DO = 'Выберите действие \r\n "+", "-", "*", "/"';
    const QUESTION_ONE_NUMBER = 'Введите первое число';
    const QUESTION_TWO_NUMBER = 'Введите второе число';

    const question = (func, question, dataType) => {
        let result;
        while (!func(result)) {
            result = dataType(prompt(question));
        }
        return result;
    };

    const choiceToDo = question(verifiChoiseToDo, QUESTION_TO_DO, String);
    const firstNumber = question(isNumber, QUESTION_ONE_NUMBER, Number);
    const secondNumber = question(isNumber, QUESTION_TWO_NUMBER, Number);

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


