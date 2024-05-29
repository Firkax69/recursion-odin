function fib(number) {
    let array = [0, 1];

    if (number <= 0) return `Please enter a valid number, Fibonacci sequence can not consist negative numbers`;
    if (number == 1) return [0];
    if (number == 2) return array;
    for (let i = 2; i < number; i++) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return array;
}

// *** RESULT CHECK ***

console.log(fib(1));
console.log(fib(-2));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));