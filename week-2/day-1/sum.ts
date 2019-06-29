// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
// 
// a is the argument for the function
// example, input for sum() is 5 = sum(5) ... 0+1+2+3+4+5 = 15

'use strict';



function sum(a:number):number{

    let total:number = 0;

    for(let i:number=0; i<=a; i++){
        
    total = total + i;
}
    return total;

}
   


console.log(  sum(5)  );

