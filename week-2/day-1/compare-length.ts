// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

const firstList:number[] = [1, 2, 3];
const secondList:number[] = [4, 5];

let firstListCount:number = firstList.length;
let secondListCount:number = secondList.length;
let isit:boolean =  secondList.length > firstList.length ;

console.log('secondList has more numbers than firstList -  ' + isit);