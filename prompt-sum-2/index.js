var first = prompt('Первое число');
var second = prompt('Вотрое число');

function check(a) {
    if (!isNaN(a)) {
        return Number(a);
    } else if (isNaN(b)) {
        throw new Error('Данные некорректны')
    }
}

function add(a, b) {
    return check(a) + check(b);
}

try {
    var result = add(first, second);
    alert(result)
} catch (err) {
    alert('Вы ввели не число');
}

