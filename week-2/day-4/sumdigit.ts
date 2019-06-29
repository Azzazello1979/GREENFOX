// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), 
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
//



'use strict';

function sumDigit(n:number):number{
    if (n<10){
        return n
    }else{
        return (n%10)+sumDigit(Math.floor(n/10)) // <-- running this generates new value for 'n'
                                                // ,that is fed back to sumDigit() function again
                
    //             6   +           12(<-- temporary value, goes back to function action - after else{... , so new value of n is not 6+12, its is the 12 only-whatever got calculated inside the function  )
    //              2
    //             1
    }
}

console.log(sumDigit(126))
