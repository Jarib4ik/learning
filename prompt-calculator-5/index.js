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

    if (!isNumber(firstNumber) && !isNumber(secondNumber)) {
        throw new TypeError(`Invalid type of arguments`);
    } else {
        alert(result);
    }

    if (confirm('Хотите продолжить?')) {
        startCalculator();
    }
}
startCalculator();


