'use strict';

let names:string[] = ['Agota', 'Marcell', 'Eva', 'Feri'];

console.log(names); // calling vari. prints the elements of the array
console.log(Object.keys(names).length); // COUNT OF elements in the object
console.log(Object.keys(names)); // Prints the keys in the object

names.push('William'); // .push() to add new element to object
console.log(names); // calling vari. prints the elements of the array

if(Object.keys(names).length === 0){
    console.log('list is empty');
}else{
    console.log('list is not empty');
}

names.push('Amanda','John');
console.log(names);
console.log(Object.keys(names).length);

console.log(names[2]); // print 3rd element (x-1)


// *@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*

for(let i:number=0;i<Object.keys(names).length;i++){
    console.log(names[i]);
}

// *@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*

console.log('----------------------------------------------------------');


// get 1st 3 elements of the array !!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(names.slice(0, 3));

console.log('----------------------------------------------------------');
// remove 2nd element from array...1st argument of splice is where to start deletion (x-1) and
// second argument is how many elements to remove
names.splice(1,1);
console.log(names);


console.log('----------------------------------------------------------');
// to delete all from array, give it length of zero
/*
names.length=0;
console.log(names);
*/



console.log('----------iterate through and print all names---------------');
for(let i:number=0;i<Object.keys(names).length;i++){
    console.log(names[i]);
}


console.log('-------------now iterate through in reverse order and print all names-------------');
for(let i:number=Object.keys(names).length;i>=0;i--){
    console.log(names[i]);
}