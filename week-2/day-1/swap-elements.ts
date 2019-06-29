// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

const abc:string[] = ["Arthur", "Boe", "Chloe"];

let swapped:string[] = [abc[0], abc[2]] = [abc[2], abc[0]];

console.log(swapped);

// because "abc" variable is an array of string type, it has indexes, and
// you only need to swap the indexes!