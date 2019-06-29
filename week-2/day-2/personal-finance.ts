//We are going to represent our expenses in a list containing integers.

//Create a list with the following items.
//500, 1000, 1250, 175, 800 and 120
//Create an application which solves the following problems.
//How much did we spend?
//Which was our greatest expense?
//Which was our cheapest spending?
//What was the average amount of our spendings?

let list:number[] = [500, 1000, 1250, 175, 800, 120];

function weSpent(array:number[]):number{
let sum:number = 0;
for(let i:number = 0;i<array.length;i++){
  
sum = sum + array[i];

}

return sum;
}

console.log(weSpent(list));

console.log('--------------------------------------');

console.log(Math.max(...list)); // Math.max & unpack array with ...

console.log('--------------------------------------');

console.log(Math.min(...list));

console.log('--------------------------------------');

console.log(
  
  weSpent(list) / list.length
  
  );



