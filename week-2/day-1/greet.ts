// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

let nameToGreet:string = 'Greenfox';

function greeter(a:string = 'anonymus'){
    let greeting = `Greetings, dear ${a}`;
    return greeting;
}

console.log(  greeter(nameToGreet)  );