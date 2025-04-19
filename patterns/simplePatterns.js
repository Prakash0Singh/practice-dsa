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

function numberPatter(n) {
    let pattern=''

    for (let i =1; i <=n; i++) {
        pattern='';
        for (let j = 1; j <= i; j++) {
            pattern+=`${j} `;   
        }
        console.log(pattern)
    }   
}

numberPatter(3);   
// Output:
// 1 
// 12
// 123

function sameNumberPattern(n) {
    let pattern=''

    for (let i =1; i <=n; i++) {
        pattern='';
        for (let j = 1; j <= i; j++) {
            pattern+=`${i} `;   
        }
        console.log(pattern)
    }   
}

sameNumberPattern(3); 
// Output:
// 1 
// 22
// 333

function flipedTriangle(n) {
    let pattern ='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j <(n-i); j++) {
            pattern+='* ';
        }
        console.log(pattern);
    }
}

flipedTriangle(3);
// Output:
// * * * * * 
// * * * * 
// * * * 
// * * 
// *

function flipedNumber(n) {
    let pattern ='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j <(n-i); j++) {
            pattern+=`${j+1}`;
        }
        console.log(pattern);
    }
}

flipedNumber(5)
//Output
// 12345
// 1234
// 123
// 12
// 1

function trianglePattern(n) {
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j < (n-i-1); j++) {
            pattern+=`_`;
        }
        for (let k = 0; k < 2*i+1; k++) {
            pattern += `*`;
        }
        for (let j = 0; j < (n-i-1); j++) {
            pattern+=`_`;
        }
        console.log(pattern);
        
    }
}
trianglePattern(5)
//Output
// ____*____
// ___***___
// __*****__
// _*******_
// *********

function filpedTrianglePattern(n) {
    
}