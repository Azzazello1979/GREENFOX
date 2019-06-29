// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

const animals:string[] = ["koal", "pand", "zebr"];

let done:string[] = animals.map(a => a + 'a');

console.log(done);


// takeaway:
//
// create new vari. that will be the result of the op. Here it is "done".
//
// map(a =>   this part, the "a" parameter is just anything that is common in all elements.