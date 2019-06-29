'use strict';
// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`


// one dimensional array looks like this:

let shadesOfGreen:string[] = ["lime", "forest green", "olive", "pale green", "spring green"];
// invoke:

console.log(shadesOfGreen);




// multi dimensional array looks like this:

let colors:string[][] = [
   //  0          1             2          3             4
    ["lime", "forest green", "olive", "pale green", "spring green"], // 0
    ["orange red", "red", "tomato"],                                 // 1
    ["orchid", "violet", "pink", "hot pink"]                         // 2
];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

console.log(colors[0][2]); // when calling a multi dim. array, 1st parameter is the sub array, 
                           // 2nd parameter is the item inside the selected sub array
