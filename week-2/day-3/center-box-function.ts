'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareSize:number = 500; //height and width is equal
let x:number = 300-(squareSize/2);
let y:number = 300-(squareSize/2);

const colorsAvailable:string[] = ['green','blue','white','yellow','purple','red','orange','black','brown'];
let currentColor:string = colorsAvailable[0];

let decreaseSize:number = 50;
let i:number = 0;

// x = y in fact ...



function squareDrawer(p:number){

ctx.beginPath();
ctx.fillStyle = currentColor;
ctx.fillRect(x, y, squareSize, squareSize);


squareSize = squareSize - decreaseSize;
currentColor = colorsAvailable[0+i+1];
x = x + (decreaseSize/2);
y = y + (decreaseSize/2);
ctx.rotate(2 * Math.PI / 180);

}

for(i;i<9;i++){

squareDrawer(squareSize);

}






