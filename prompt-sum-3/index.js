function isNumber(a, b) {
    var isNumber = typeof a === 'number' && typeof b === 'number';

    return isNumber && (!isNaN(a) && !isNaN(b))
}

function add(a, b) {
    return a + b;
}

var a = Number(prompt('Введите первое число'));
var b = Number(prompt('Введите второе число'));

if (isNumber(a, b)) {
    alert(add(a, b));
} else {
    throw new TypeError('invalid type of arguments')
}


