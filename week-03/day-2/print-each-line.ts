// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';

const fs = require('fs');                                 // the good code we expect to work                        
let readBuffer = fs.readFileSync('my-file.txt', 'utf-8'); // the good code we expect to work


// if however there is error in code like this: (defined in try)
try{                                                      
let readBuffer = fs.readFileSync('my-fiiiile.txt', 'utf-8');
}catch(e){  // then do this: (defined in catch)
console.log('Unable to read file: my-file.txt');
}
console.log('-------------------------------------------');
console.log(readBuffer);



// so 'try' purposedly has wrong code,
// catch: do this if you find whatever wrong code defined in try
