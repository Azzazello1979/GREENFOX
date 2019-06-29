'use stict';

let myObject:any = {
  '978-1-60309-452-8' : 'A Letter to Jo',
  '978-1-60309-459-7' : 'Lupus',
  '978-1-60309-444-3' : 'Red Panda and Moon Bear',
  '978-1-60309-461-0' : 'The Lab'
}

for (let [key, value] of Object.entries(myObject)) {  
  console.log(value + ' ' + '(' + key + ')' );
}


console.log('----------------------------------------');
// Remove the key-value pair with key 978-1-60309-444-3
delete myObject['978-1-60309-444-3'];
console.log(myObject);



//                                !!!
// !!! Find the pair by its value !!!
//                                !!!



console.log('----------------------------------------');
// Remove the key-value pair with value The Lab

Object.keys(myObject).forEach(e => {
    if (myObject[e] === 'The Lab') {
        delete myObject[e]
    }
});

console.log(myObject);


console.log('----------------------------------------');
// Add these key-value pairs to the map:
// 
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?
//
// To add a 'property' = key-value pair to an obj,
// myObject[key] = value;


myObject['978-1-60309-450-4'] = 'They Called Us Enemy';
myObject['978-1-60309-453-5'] = 'Why Did We Trust Him?';

console.log(myObject);

console.log('----------------------------------------');
// Print whether there is an associated value with key 478-0-61159-424-8 or not
// The some() method tests whether at least one element in the array 
// passes the test implemented by the provided function.
// Check if there exists a value for a given key


let exists = Object.keys(myObject).some(function(k) {
    return myObject[k] === '478-0-61159-424-8';
});
console.log(exists);

