// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict';

/*

const ai:number[] = [3, 4, 5, 6, 7];

let n0:number = ai[0];
let n1:number = ai[1];
let n2:number = ai[2];
let n3:number = ai[3];
let n4:number = ai[4];

let thesum:number = n0+n1+n2+n3+n4;
console.log(thesum);

*/

// other solution

/*

const ai:number[] = [3, 4, 5, 6, 7];

let [n0,n1,n2,n3,n4] = ai;



let thesum:number = n0+n1+n2+n3+n4;
console.log(thesum);

*/

// best solution
// !!! .length is the COUNT OF ITEMS inside the array, like:
// !!! numberarray = [1,2,3,4,5]; in this case numberarray.length is 5, also
// !!! stringarray = [one,two,three]; stringarray.length is 3 



let numberarray:number[] = [3, 4, 5, 6, 7];
let sum:number = 0;

for(let i:number=0; i<numberarray.length; i++){ 
    sum = sum + numberarray[i] 

};

console.log(sum);



