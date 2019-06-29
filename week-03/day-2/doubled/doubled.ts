'use strict';
export { };

// Create a method that decrypts duplicated-chars.txt
// REMEMBER! strings are NOT mutable!
// Write result into a new file!

const fs = require('fs');
let fileContent: any = fs.readFileSync('duplicated.txt', 'utf-8');

function duplicateCharsSingler(p: any): void {
  let arrayOfChars: any[] = p.split('');
  for (let i: number = 0; i < arrayOfChars.length; i++) {
    arrayOfChars[i] === arrayOfChars[i + 1] ?
      arrayOfChars[i + 1] = '' : null
  }
  let singled: string = arrayOfChars.join('');
  fs.writeFileSync('singled.txt', singled);
  console.log(`OK. Doubled chars removed.`);
};

console.log(duplicateCharsSingler(fileContent));
