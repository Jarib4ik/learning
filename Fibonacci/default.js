function fibonacci(n) {
    var a = 1;
    var b = 1;

    if (n === 0) {
        return 0
    } else {
        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

console.log(fibonacci(8))