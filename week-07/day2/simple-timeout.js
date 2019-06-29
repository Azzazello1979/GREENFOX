'use strict';

// Write a program that prints apple after 3 seconds.
// printer1 and printer2 are the callback functions
// delayer is the outer func.


const printer1 = (p) => {
  setTimeout(() => { console.log(p); }, 3000);
};

const printer2 = (p) => {
  setTimeout(() => { console.log(p); }, 5000);
};

const delayer = (callback1, callback2) => {

  callback1;
  callback2;

};

delayer(printer1('apple'), printer2('orange'));


