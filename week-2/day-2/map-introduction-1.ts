'use strict';

var myCar:any = new Object();
myCar.make = 'Mazda';
myCar.model = '6';
myCar.year = 2004;
myCar.engine = 'benzin';
myCar.transmission = 'automatic';
myCar.horsePower = 141;

console.log(myCar);
console.log('-----------------------------');
console.log(myCar.model);
console.log(myCar.engine);
console.log('-----------------------------');


let someObject:any = {

    97:'a',
    98:'b',
    99:'c',
    65:'A',
    66:'B',
    67:'C'

};

console.log(someObject);
console.log('-----------------------------');

// Count of elements inside object: Object.keys().length
console.log('The someObject object is empty: ',Object.keys(someObject).length===0);

console.log('-----------------------------');

// Print all keys of the object
console.log(Object.keys(someObject)); 

console.log('-----------------------------');

// Print all the values of the object
console.log(Object.values(someObject));

console.log('-----------------------------');
// add value D with key 68

someObject[68] = 'D';

console.log('-----------------------------');

// print how many key value pairs are there...values length or keys length works too
console.log(Object.keys(someObject).length);

console.log(Object.values(someObject).length);

console.log('-----------------------------');

// print the value at key 99
console.log(someObject[99]);

console.log('-----------------------------');

// Remove the key-value pair at key 97
delete someObject[97];
console.log(someObject);

console.log('-----------------------------');

// print whether there is an associated value with key 100 or not
//
// note shortcuts:
//
//  !ifthisisnottrue ? thendothis : elsedothis
//

!someObject[100] ? console.log(`There is no key:100`) : console.log(`There is key:100`);

!myCar['year'] ? console.log('year unknown') : console.log('we know the year');

myCar['horsePower'] ? console.log('yes we know its hp') : console.log('no we dont know its hp');

myCar['horsePower']>100 ? console.log('yes its better than 100 hp') : console.log('it does not have more than 100 hp');

myCar['transmission']='automatic' ? console.log('yes its automatic') : console.log('no, its manual');

////////// CRAAZY SYNTAAXXX
////////// CRAAZY SYNTAAXXX



// remove all the key-value pairs -make an empty object with the same name
console.log('-----------------------------');
someObject = {};
console.log(someObject);
console.log(Object.keys(someObject).length);