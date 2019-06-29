'use strict';

// Create a function that takes a number
// divides it by 10,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideBy10(p:number):number{
let result:number = p/10;
if(p === 0){
  console.log('fail');
}
return result;
}

console.log(divideBy10(0));

