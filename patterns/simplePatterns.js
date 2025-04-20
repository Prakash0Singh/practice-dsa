function pattern1(n) {
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j < n; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

pattern1(3);
// Output:
// * * *
// * * *
// * * *

function pattern2(n) {
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

pattern2(3);
// Output:
// * 
// * *
// * * *

function pattern3(n) {
    let pattern=''

    for (let i =1; i <=n; i++) {
        pattern='';
        for (let j = 1; j <= i; j++) {
            pattern+=`${j} `;   
        }
        console.log(pattern)
    }   
}

pattern3(3);   
// Output:
// 1 
// 12
// 123

function pattern4(n) {
    let pattern=''

    for (let i =1; i <=n; i++) {
        pattern='';
        for (let j = 1; j <= i; j++) {
            pattern+=`${i} `;   
        }
        console.log(pattern)
    }   
}

pattern4(3); 
// Output:
// 1 
// 22
// 333

function pattern5(n) {
    let pattern ='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j <(n-i); j++) {
            pattern+='* ';
        }
        console.log(pattern);
    }
}

pattern5(3);
// Output:
// * * * * * 
// * * * * 
// * * * 
// * * 
// *

function pattern6(n) {
    let pattern ='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j <(n-i); j++) {
            pattern+=`${j+1}`;
        }
        console.log(pattern);
    }
}

pattern6(5)
//Output
// 12345
// 1234
// 123
// 12
// 1

function pattern7(n) {
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
pattern7(5)
//Output
// ____*____
// ___***___
// __*****__
// _*******_
// *********

function pattern8(n) {
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

pattern8(5)
//Output
// *********
// _*******_
// __*****__
// ___***___
// ____*____

function pattern9 (n) {
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

pattern9(5)
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

function pattern10(n) {
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

pattern10(5)
// Output
// 0
// 10
// 010
// 1010

function pattern11(n) {
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

pattern11(4);
//Output
// 1      1
// 12    21
// 123  321
// 12344321

function pattern12(n) {
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

pattern12(5);
//Output 
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

function pattern13(n) {
    for (let i = 0; i < n; i++) {
        let pattern='';
        for (let j = 65; j <= 65+i; j++) {
            pattern += String.fromCharCode(j) + ' ';
        }
        console.log(pattern)
    }
    
}

pattern13(5)
//Output 
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

function pattern14(n) {
    for (let i = 0; i < n; i++) {
        let pattern='';
        for (let j = 65; j <= 65+(n-i-1); j++) {
            pattern += String.fromCharCode(j) + ' ';
        }
        console.log(pattern)
    }
    
}

pattern14(5)
//Output
// A B C D E 
// A B C D 
// A B C 
// A B 
// A 

function pattern15(n) {
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

pattern15(5)
//Output
// A 
// B B 
// C C C 
// D D D D 
// E E E E E 

function pattern16(n) {
    let pattern='';
    for (let i = 0; i <n; i++) {
        pattern='';
        for (let j = 0; j <(n-i-1); j++) {
            pattern+=`_`;
        }
        let char=65;
        let brakepoint=Math.floor((2*i+1)/2);
        for (let k = 1; k <= 2*i+1; k++) {
            pattern += String.fromCharCode(char);
            if(k <= brakepoint){
                char++;
            }
            else{
                char--;
            }
        }
        for (let j =0; j < (n-i-1); j++) {
            pattern+=`_`;
        }
        console.log(pattern);
    }
}

pattern16(5)
//Output
// ____A____
// ___ABA___
// __ABCBA__
// _ABCDCBA_
// ABCDEDCBA

function pattern17(n) {
    const endCharCode = 'A'.charCodeAt(0) + n - 1;
    let pattern ='';
    for (let i = 0; i < n; i++) {
        pattern='';
        let startCharCode = endCharCode - i;
        for (let ch = startCharCode; ch <= endCharCode; ch++) {
            pattern += String.fromCharCode(ch) + ' ';
          }       
        console.log(pattern)

    }
}
pattern17(5)
//Output
// E 
// D E 
// C D E 
// B C D E 
// A B C D E 

function pattern18(n){
      
        for (let i = 0; i < n; i++) {
          let stars = '*'.repeat(n - i);
          let spaces = '_'.repeat(2 * i);
          console.log(stars + spaces + stars);
        }
      
        for (let i = n - 2; i >= 0; i--) {
          let stars = '*'.repeat(n - i);
          let spaces = '_'.repeat(2 * i);
          console.log(stars + spaces + stars);
        }
      
}

pattern18(5);
//Output
// **********
// ****__****
// ***____***
// **______**
// *________*
// **______**
// ***____***
// ****__****
// **********

function pattern19(n){
    for (let i = 1; i <=n; i++) {
       let star = '*'.repeat(i);
       let space='_'.repeat(2*(n-i));
       console.log(star+space+star)
    }
    for (let i = n-1; i >0; i--) {
        let star = '*'.repeat(i);
        let space='_'.repeat(2*(n-i));
        console.log(star+space+star)
     }
}

pattern19(5);
//Output
// *________*
// **______**
// ***____***
// ****__****
// **********
// ****__****
// ***____***
// **______**
// *________*

function pattern20(n){
    let pattern='';
    for (let i = 0; i < n; i++) {
        pattern='';
        for (let j = 0; j < n; j++) {
            if (i==0 || i==(n-1) ||j==0 || j==n-1) {
                pattern+='*';
            }
            else{
                pattern+='_';
            }
        }
        console.log(pattern)
    }
}

pattern20(5);
//output
// *****
// *___*
// *___*
// *___*
// *****

// Not understand because of Matrix Pattern
// function pattern21(n){
//     for (let i = 0; i <2*(n-1); i++) {
//         for (let j = 0; j < 2*(n-1); j++) {
            
//         }
//     }
// }

pattern21(5);