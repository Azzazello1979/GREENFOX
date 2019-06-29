//Given a string, compute recursively (no loops) a new string 
// where all the lowercase 'x' chars have been changed to 'y' chars.


function x_y(inputstring:string):string {

    if(inputstring.indexOf("x") === -1) return inputstring;

    /*   return inputstring.replace("x", "y");   */
     return x_y(inputstring.replace("x", "y")); 
}
console.log(x_y("xoxoxoxxxooxoxoxooxoooxooxoox"));
