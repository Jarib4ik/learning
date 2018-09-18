const BasicMath = (() => {

    const add = (a, b) => a + b;
    const sub = (a, b) => b - a;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    const isValidArguments = (a, b) => {
        return isNumber(a) && isNumber(b);
    };

    const ERROR_MESSAGE = 'Invalid arguments. Function expect Numbers';

    const secure = quardify.bind(null, isValidArguments, ERROR_MESSAGE)

    return {
        add: secure(add),
        sub: secure(sub),
        mul: secure(mul),
        div: secure(div)
    };
})();