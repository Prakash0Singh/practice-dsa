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

// squarePattern(3);
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

// trianglePattern(3);
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

// numberPatter(3);   
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

// sameNumberPattern(3); 
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

// flipedTriangle(3);
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

// flipedNumber(5)
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
// trianglePattern(5)
//Output
// ____*____
// ___***___
// __*****__
// _*******_
// *********

function filpedTrianglePattern(n) {
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j < i; j++) {
            pattern+=`_`;
        }
        for (let k = 0; k < 2*n-(2*i+1); k++) {
            pattern += `*`;
        }
        for (let j = 0; j < i; j++) {
            pattern+=`_`;
        }
        console.log(pattern);    
    }
}

// filpedTrianglePattern(5)
//Output
// *********
// _*******_
// __*****__
// ___***___
// ____*____

function halfHourglass (n) {
    let pattern='';
    for (let i = 1; i <= 2*n-1; i++) {
        let stars=i;
        pattern='_';
        if (i>n) { stars = 2*n-i}
        for (let j = 1; j <= stars; j++) {
            pattern+='*'
        }
        console.log(pattern);    
    }
}

// halfHourglass(5)
// Output
// _*
// _**
// _***
// _****
// _*****
// _****
// _***
// _**
// _*

function patternNew(n) {
    for (let i = 1; i <=n; i++) {
        let pattern='';
        for (let j = 1; j <= i; j++) {
            if (i%2===1) {
                pattern+=j%2;
            } else {
                pattern+=(j+1)%2;
            }
        }
        console.log(pattern)
    }
}

// patternNew(5)
// Output
// 0
// 10
// 010
// 1010

function invisibleTrangle(n) {
    let pattern='';
    for (let i = 1; i <= n; i++) {
        pattern='';
        //number
        for (let j = 1; j <=i; j++) {
            pattern+=`${j}`;
        }
        //space
        for (let j = 1; j <=2*(n-i); j++) {
            pattern+=` `;
        }
        //number
        for (let j = i; j >=1; j--) {
            pattern+=`${j}`;
        }
        console.log(pattern)
    }
}

// invisibleTrangle(4);
//Output
// 1      1
// 12    21
// 123  321
// 12344321

function rightAngle(n) {
    let count=1;
    for (let i = 1; i <= n; i++) {
        let pattern='';
        for (let j = 1; j <= i; j++) {
            pattern+=`${count} `;
            count++;
        }
        console.log(pattern);
    }
}

// rightAngle(5);
//Output 
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

function rightAngleABCD(n) {
    for (let i = 0; i < n; i++) {
        let pattern='';
        for (let j = 65; j <= 65+i; j++) {
            pattern += String.fromCharCode(j) + ' ';
        }
        console.log(pattern)
    }
    
}

// rightAngleABCD(5)
//Output 
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

function flipedAngleABCD(n) {
    for (let i = 0; i < n; i++) {
        let pattern='';
        for (let j = 65; j <= 65+(n-i-1); j++) {
            pattern += String.fromCharCode(j) + ' ';
        }
        console.log(pattern)
    }
    
}

// flipedAngleABCD(5)
//Output
// A B C D E 
// A B C D 
// A B C 
// A B 
// A 

function rightABB(n) {
    let char=65;
    for (let i = 0; i < n; i++) {
        let pattern='';
        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(char) + ' ';
        }
        console.log(pattern)
        char++;
    }
    
}

rightABB(5)
//Output
// A 
// B B 
// C C C 
// D D D D 
// E E E E E 