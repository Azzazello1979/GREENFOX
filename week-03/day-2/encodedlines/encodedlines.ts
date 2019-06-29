// Create a method that decrypts encoded-lines.txt

// var sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.charAt(0)); //charAt() gives you the index number of the character in the string
// result: T

// console.log(sentence.charCodeAt(0)); // charCodeAt() gives you the ASCII number for that character in the string
// result: 84 <-- ASCII number of T

// String.fromCharCode()   creates a string from the ASCII number(s) specified
// String.fromCharCode(84, 85, 45, 49, 53, 52)
// result: TU-154


'use strict';
export { };
const fs = require('fs');

let fileContent = fs.readFileSync('encoded-lines.txt', 'utf-8');

let spread: string[] = fileContent.split('');

for (let i: number = 0; i < spread.length; i++) {
  spread[i] === ' ' ? spread[i] === ' ' :
  spread[i] === '\n' ? spread[i] === '\n' :
  spread[i] === '\r' ? spread[i] === '\r' :
  spread[i] = String.fromCharCode(spread[i].charCodeAt(0)-1);
}

let result:string =  spread.join('');

console.log(result);


