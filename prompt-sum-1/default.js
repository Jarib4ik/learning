
var a = prompt('Введите первое число', );
var b = prompt('Введите второе число', );


function sum(a, b) {
    return + a.replace(/\D/g, "") + +b.replace(/\D/g, "")
}

alert( sum(a, b))