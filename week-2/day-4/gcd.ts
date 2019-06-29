// Find the greatest common divisor of two numbers using recursion.
// Greatest Common Divisor
// google: Euklideszi algoritmus - Legnagyobb közös osztó

'use strict';

let A:number = 4578;
let B:number = 12;
let remainder:number;

function findGCD(A:number,B:number):number{

if(A===0){return B} if(B===0){return A}   //base case, the bigger number is the solution

if(A>B){
remainder = findGCD(A%B,B)
}else{    
remainder = findGCD(A,B%A)
}
return remainder
}

console.log(findGCD(A,B));



