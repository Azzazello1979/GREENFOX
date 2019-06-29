// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict';




const numList:number[] = [1, 2, 3, 8, 5, 6];

numList.map(eight => { // map() - cycles through all elements and does the same action with them

    if(eight === 8){
        let indexOf8:number = numList.indexOf(eight); //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        numList[indexOf8] = 4;   // change to 4
    }
})

console.log(numList[3]);








// The map() method creates a new array with the results of
// calling a provided function on every element in the calling array.

