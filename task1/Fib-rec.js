function fib(number) {
    if (number <= 0) return `Please enter a valid number, Fibonacci sequence can not consist negative numbers`;
    if (number === 1) return [0];
    if (number === 2) return [0, 1];

    const fibArray = fib(number - 1);

    const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(nextFib);

    return fibArray;

}

// *** RESULT CHECK ***

console.log(fib(1));
console.log(fib(-2));
console.log(fib(1));
console.log(fib(2));
console.log(fib(7));
console.log(fib(25));