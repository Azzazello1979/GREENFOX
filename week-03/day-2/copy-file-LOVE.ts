// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
export{};
const fs = require('fs');

function copyCat(copythis:string,tothis:string):any{

// read copythis
// put copythis to a vari
let buffer:string = '';
buffer = fs.readFileSync(copythis, 'utf-8');

// write vari to target file
fs.writeFileSync(tothis, buffer);

// compare content of origin file and new file, boolean feedback
let original:string = '';
original = fs.readFileSync(copythis, 'utf-8');
let newfile:string = '';
newfile = fs.readFileSync(tothis, 'utf-8');

return console.log(`Contents of new file equals to origin file: ${original === newfile}`);
}

copyCat('multiple.txt','newfile.txt');
