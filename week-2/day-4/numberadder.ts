// Write a recursive function that takes one parameter: until and adds numbers from 1 to until.

'use strict';


let until:number = 30;

function adder(x :number) :number{

    if (x < 1){ // baseCase - exit rec. here
      return 0;
    }
      return x + adder(x -1); // <-- only whatever is in the func. gets recurved!
      // 30 + 29
      //    + 28
      //    + 27
      //    + 26
      // ..etc..
  }
  
  console.log(adder(until));