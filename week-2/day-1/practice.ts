'use strict';


// basic function declaration syntax, no arguments yet

function greetFoxAlert(){
    console.log('hellooo');
}

greetFoxAlert();



// function arguments

function greetByName(name: string) {
    console.log(arguments);
    console.log('Well hi there,', name);
  }
  
  greetByName('Tojas');
  

    // logs out argument(s) index and also value
     // logs out the arguments value, note the "," before the argument






// DEFAULT values for function arguments

function greet(greet = 'Hi', name = 'pal') {
    console.log(greet, name);
  }
  
  greet('Hey');
  greet('Hello', 'Tojas');

    // to log out multiple argument values, note that they are separated by "," !


greet(); //no argument was given so it returns default arg.values: Hi pal

greet('Cool', 'Baby'); //lets give the args values and log to console:



// Function return values
// we specify what type of return we want, before the {}
// we specify that "newName" variables value must be stored
// - this is what "return" means.
// because the type was nor "void" nor "any"


function makeGreen(name: string): string {
    let newName = 'Green ' + name;
    return newName;
  }
  
  

let greenname = makeGreen('Balint');
console.log(greenname);


// the spread syntax...

const evens = [2, 4, 6, 8];
const numbers = [1, 3, 5, 7, ...evens];
console.log(numbers) // expected output: [1, 3, 5, 7, 2, 4, 6, 8]

const someanimals:string[] = ['varju', 'macska', 'kutya'];
const animals:string[] = ['madar', 'tigris', ...someanimals];
console.log(animals);
  

// concatenating two arrays

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

console.log(  arr1.concat(arr2)  );

// ARRAY METHODS ...

console.log(  ['apple', 'pear', 'melon'].indexOf('pear')  ); // 1

// .indexOf('lookingforindexofthis') 


// The forEach() method executes a provided function once for each array element.
// 1st arg. is value 2nd arg. is index

// The function() is inside forEach() like this:
//forEach( function(){} );



['apple', 'pear', 'melon'].forEach(function(a, b) {
  console.log(a, b);
});

/*

 .map()
 Calls a provided function on every element in the array.
 whats the difference bw .forEach() and .map() ?

Well, the forEach() method doesn’t actually return anything (undefined). 
It simply calls a provided function on each element in your array.
This callback is allowed to mutate the calling array.

Meanwhile, the map() method will also call a provided function on every element in the array.
The difference is that map() utilizes return values and
actually returns a new Array of the same size.

So .map() creates new array with new values, keeps the name of the original
array, while .forEach() overwrites it.

forEach() affects and changes our original Array, 
whereas map() returns an entirely new Array — thus leaving the original array unchanged.
map() is also a lot faster !!! - use map()

*/

let triples = [1, 2, 3, 4, 5].map(function(input) {
  return input * 3;
});
console.log(triples); /** [3, 6, 9, 12, 15] */


// .every()
// The every() method tests WHETHER ALL ELEMENTS in the array
// pass the test implemented by the provided function.

let isAllEven = [2, 6, 14, 5, 4].every(function(e) {
  return e % 2 == 0;
});
console.log(isAllEven); /** false */

// .some()
// The some() method tests whether AT LEAST ONE element in the array 
// passes the test implemented by the provided function.
//
//

let isAnyEven = [2, 6, 14, 5, 4].some(function(e) {
  return e % 2 == 0;
});
console.log(isAnyEven); /** true */


/*

.split()
The split() method splits a String object into an array of strings 
by separating the string into substrings, 
using a specified separator string to determine where to make each split.
Splits the string to its characters.
Thus creates an array from the string, keeping the name of the string.

*/

let letters = 'apple'.split('');
console.log(letters); /** ['a', 'p', 'p', 'l', 'e'] */


/* .join()

The join() method creates and returns a new string 
by concatenating all of the elements in an array (or an array-like object), 
separated by commas or a specified separator string. 
If the array has only one item, 
then that item will be returned without using the separator.

the arg. specifies the joiner character

*/

console.log(letters.join('@')); /** Worms in the apple! */
