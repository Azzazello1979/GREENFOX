'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let fuckeduptext: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(fuckeduptext:string):string {
    let done:string = fuckeduptext.split("").reverse().join("");
    return done;
}

console.log(reverse(fuckeduptext));

export = reverse; //export result(value) of running the reverse function