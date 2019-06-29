/* We are going to represent a shopping list in a list containing strings.

Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list? */

'use strict';
export{};

const list:string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];


/*
list.indexOf('milk')!== -1 ? console.log(`Yes we have it on the list.`) : console.log(`No, we do not have it on the list.`);
*/

function checkIfExistsInArray(where:string[], what:string):boolean{
return where.indexOf(what)!== -1;
}

console.log(checkIfExistsInArray(list, 'bananas'));




