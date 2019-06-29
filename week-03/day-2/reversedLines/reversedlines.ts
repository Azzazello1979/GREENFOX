// Create a method that decrypts sorted-lines.txt

'use strict';
export{};
const fs = require('fs');




function sortReversedLines(p:any):void{
  
  let fileContent = fs.readFileSync(p, 'utf-8');
  let lines:string[] = fileContent.split('\n');
  let sorted:string[] = lines;
  for(let i:number=0;i<sorted.length;i++){
  sorted[i] = sorted[i].split('').reverse().join('');
  }
  let result:string = sorted.toString().replace(/,/g,'');
  
  fs.writeFileSync('result.txt', result);
  console.log('done');
}

sortReversedLines('reversed-lines.txt');

