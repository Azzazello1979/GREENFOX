'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


const color:string = 'blue';
const size:number = 50;
let positionX:number = 10;
let positionY:number = 10;

function draw(size:number,color:string){

ctx.beginPath();
ctx.fillStyle = color;
ctx.fillRect(positionX,positionY,size,size);

positionX = positionX + size;
positionY = positionY + size;

}

for(let i:number=0;i<9;i++){

draw(size,color);

}