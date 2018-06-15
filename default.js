function add(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (b - a);
}

function mul(a, b) {
    return (a * b)
}

function div(a, b) {
    return (a / b);
}

console.log(add(div(50, 5), (mul(100, 50))));
console.log(div(mul(20, 9), (div(50, 5))));
console.log(sub(add(56, 35), (mul(9, 5))));
console.log(mul(div(600, 50), (sub(9, 3))));
console.log(add(sub(div(30, 2), mul(20, 2), 15), (div(50, 5))));