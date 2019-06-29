'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let A:string = quote.slice(0, 20);
let B:string = quote.slice(21, quote.length);
let toInsert:string = ' always takes longer than ';
let fixed:string = A + toInsert + B;

console.log(fixed);
export = {};

console.log('1st part: ' + A);
console.log('2nd part: ' + B);
