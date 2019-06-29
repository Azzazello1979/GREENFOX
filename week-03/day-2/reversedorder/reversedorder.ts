// Create a method that decrypts reversed-order.txt

'use strict';
export{};

const fs = require('fs');


function sortReversedOrderLines(p:string){
let fileContent = fs.readFileSync(p, 'utf-8');
let reversedLines:string[] = fileContent.split('\n');
let sortedLines:string[] = reversedLines.reverse();
let result:string = sortedLines.join().replace(/,/g,'');
fs.writeFileSync('sorted-order.txt', result);
}

sortReversedOrderLines('reversed-order.txt');
