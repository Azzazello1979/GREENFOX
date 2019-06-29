'use strict';
export{};


const phoneBook:any = {
  'William A. Lathan':'405-709-1865',
  'John K. Miller':'402-247-8568',
  'Hortensia E. Foster':'606-481-6467',
  'Amanda D. Newland':'319-243-5613',
  'Brooke P. Askew':'307-687-2982'
};



// get the value of a key, enter key, you get the value of it
//console.log(phoneBook['John K. Miller']);


console.log('------- find value if you know key ----------');
console.log(phoneBook['John K. Miller']);

console.log('--------find the key if you know the value -----------------');
function getKeyByValue(object:any, value:any) :any{
  return Object.keys(object).find(key => object[key] === value);
}
console.log(getKeyByValue(phoneBook,'307-687-2982'));

console.log('--------- value exists for given key? --------------');
console.log(phoneBook['Chris E. Myers']!==undefined);
console.log('---------------------------------------------------');
