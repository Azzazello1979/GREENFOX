'use strict';

let ListA:string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let ListB:string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

// ListA has Durian or not
// There is an indexOf method that all arrays have 
// (except Internet Explorer 8 and below) that will return 
// the index of an element in the array, or -1 if it's not in the array:
console.log(`ListA has Durian: ${ListA.indexOf('Durian') > -1}`);


console.log('-------------------------------------------');
// Remove Durian from List B
// Find the index of the array element you want to remove,
// then remove that index with splice

let indexToKill:number = ListB.indexOf('Durian');
ListB.splice(indexToKill,1);
console.log(ListB);

console.log('-------------------------------------------');
// Add Kiwifruit to List A after the 4th element

ListA.push('Kiwifruit'); // push will append(snap to the end) new element to the array
console.log(ListA);

console.log('-------------------------------------------');
// Compare the size of List A and List B
let sizeOfA:number = ListA.length;
let sizeOfB:number = ListB.length;
console.log(`ListA size is ${sizeOfA} and ListB size is ${sizeOfB}`);
console.log(ListA);
console.log(ListB);

console.log('-------------------------------------------');
// Get the index of Avocado from List A
console.log(ListA.indexOf('Avocado'));


console.log('-------------------------------------------');
// Get the index of Durian from List B
console.log(ListB.indexOf('Durian'));
console.log(ListB);

console.log('-------------------------------------------');
// Add Passion Fruit and Pummelo to List B in a single statement
ListB.push('Passion Fruit', 'Pummelo');
console.log(ListB);


console.log('-------------------------------------------');
// Print out the 3rd element from List A
console.log(ListA[2]);








