function isNumber(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    }
    return false;
}

function add(a, b) {
    return a + b;
}

var a = prompt('Введите первое число');
var b = prompt('Введите второе число');

if (isNumber(a, b)) {
    alert(add(a, b));
} else {
    throw new TypeError('invalid type of arguments')
}

