//斐波那契
let n = 3;
console.log(Fibonacci(n))

function Fibonacci(n) {
    if (n <= 2) return n
    else {
        var f0 = 1, f1 = 1, f;
        for (var i = 2; i < n; i++) {
            f = f0 + f1;
            f0 = f1;
            f1 = f;
        }
        return f
    }
}

