// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: 
// "Unable to write file: my-file.txt"

// Try-Catch is INSIDE the function

'use strict';
export{};
const fs = require('fs');

function writeMyName(what:string, where:string):string{
  try{
fs.writeFileSync(where, what);
return `Successful write to file ${where}`;
}catch(e){
  return 'Unable to write file: ' + e.path;
}

}
console.log(writeMyName('Balint','my-file.txt'));


