function squarePattern(n) {
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j < n; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

squarePattern(3);
// Output:
// * * *
// * * *
// * * *
console.log('------------------');

function trianglePattern(n) {
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

trianglePattern(3);
// Output:
// * 
// * *
// * * *