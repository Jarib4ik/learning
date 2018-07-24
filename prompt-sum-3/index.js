function isNumber(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        if (typeof a === 'number' && typeof b === 'number') {
            return true;
        }
    }
    return false;
}

function add(a, b) {
    return Number(a) + Number(b);
}

var a = prompt('Введите первое число');
var b = prompt('Введите второе число');

if (isNumber(Number(a), Number(b))) {
        alert(add(a, b));
} else {
    throw new TypeError('invalid type of arguments')
}


