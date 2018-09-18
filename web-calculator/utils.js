const isNumber = number => typeof number === 'number' && !isNaN(number);

const quardify = (validator, exception, func) => {
    return function (...args) {
        const isValidArgs = validator(...args);

        if (isValidArgs) {
            return func(...args);
        }else {
            const { name } = func;
            const finalException = `[${name}]: ${exception}`;

            throw new Error(finalException);
        }
    };
};
