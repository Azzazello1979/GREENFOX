// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
export { };
const fs = require('fs');



function howManyLines(p: string): number {

  let numberOfLines: number = fs.readFileSync(p, 'utf-8').split("\n").length;

  return numberOfLines;
}

console.log(howManyLines('my-file.txt'));
