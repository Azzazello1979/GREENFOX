'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE



let rectangleSize:number = 20;
const rectangleColor:string = 'purple';




// DO NOT TOUCH THE CODE below THIS LINE :-)
let X:number = 50-(rectangleSize/2);
let Y:number = 50-(rectangleSize/2);

let increaseSide:number = 15;


function draw(a:number,b:number,c:string,d:number){

ctx.beginPath();
ctx.fillStyle = c;
ctx.fillRect(a, b, d, d);

rectangleSize = rectangleSize + increaseSide;

X = X + rectangleSize - increaseSide;
Y = Y + rectangleSize - increaseSide;

}


for(let i:number=0;i<6;i++){
  draw(X,Y,rectangleColor,rectangleSize);
}
