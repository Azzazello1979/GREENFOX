// Given base(alap) and n(kitevő) that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


// 3(base) to 4th power is 3x3x3x3. - 81

'use strict';


let base:number = 3; //x
let exponent:number = 3; //y

function powerer(x:number, y:number):number{



    if(y<1) return 1;

    return x * powerer(x,y-1); // only this will compute: x *    how many times: as many times as y is NOT smaller than 1...that is 4 times
    //  
    //  
    //  
    //  x*x*x*x* *1(so that value does not change)
    //  
}

console.log(powerer(base,exponent));