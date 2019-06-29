'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds



const caller = (p) => {
  p('apple');
  setTimeout(() => { p('pear') }, 1000);
  setTimeout(() => { p('melon') }, 3000);
  setTimeout(() => { p('grapes') }, 5000);
};

const callback = (p) => {
  console.log(p);
};


caller(callback);

