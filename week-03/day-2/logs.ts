// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


export{};
'use strict';



function uniqueIPextractor(){
const fs = require('fs');
let log:any = fs.readFileSync('log.txt', 'utf-8');
let logLines:any = log.split('\n'); //split creates a new Array from the string

let IPs:any = []; // create new array because substr() will NOT modify the original array!
for(let i:number = 0; i<logLines.length; i++){
  IPs.push(logLines[i].substr(27,11)); //substr() usage: 1st parameter is where to cut from, 2nd parameter is length of the string to cut (if 2nd parameter not set, it will cut everything from that point)
}

let uniqIPs = [...new Set(IPs)]; // [...new Set()] removes duplicates from the array

//console.log(uniqIPs);
//console.log(`There are ${uniqIPs.length} unique IP addresses.`);

}

//uniqueIPextractor();


// Write a function that returns the GET / POST request ratio.


const fs = require('fs');
let log:any = fs.readFileSync('log.txt', 'utf-8');
let logLines:any = log.split('\n'); //split creates a new Array from the string

let GP:any = []; // create new array because substr() will NOT modify the original array!
for(let i:number = 0; i<logLines.length; i++){
  GP.push(logLines[i].substr(41,4)); //substr() usage: 1st parameter is where to cut from, 2nd parameter is length of the string to cut (if 2nd parameter not set, it will cut everything from that point)
}


console.log(`There are ${GP.length} GETs and POSTs.`);


let postS:number = 0;
let getS:number = 0;


for(let i:number=0; i<GP.length; i++){
    if(GP[i].indexOf('POST') != -1){
    postS++;
    }else{
    getS++;}
}




  console.log(`GET / POST ratio is ${getS/postS} `); 

  // indexOf() returns -1 if the searched string cannot be found 





/*
let postS:number;
let getS:number;

let ratio:number = getS/postS;
*/







