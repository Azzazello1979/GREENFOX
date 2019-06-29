// We have evenBunnies standing in a line, numbered 1, 2, ... 
// The odd evenBunnies (1, 3, ..) have the normal 2 ears. 
// The even evenBunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot.
// Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict';

function earsCalculator(bunnies:number):number{
    if (bunnies<1){
        return 0;
    }
    if (bunnies%2===0){ //if even
        return 3 + earsCalculator(bunnies-1)
    }else{              //if odd
        return 2 + earsCalculator(bunnies-1)
    }
}
console.log(earsCalculator(3))