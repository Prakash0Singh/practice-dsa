function findFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

let result = this.findFactorial(10);

console.log(result);