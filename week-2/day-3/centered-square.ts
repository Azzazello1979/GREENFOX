'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

//where you want the center point to be?
let cX:number = 300;
let cY:number = 300;

//def width and height
let width:number = 10;
let height:number = 10;





let startX:number = cX-(width/2);
let startY:number = cY-(height/2);

ctx.beginPath();
ctx.moveTo(startX , startY);
ctx.lineTo(startX+width , startY);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(startX+width , startY); //moveTo = previous lineTo
ctx.lineTo(startX+width , startY+height);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(startX+width , startY+height);
ctx.lineTo(startX , startY+height);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(startX , startY+height);
ctx.lineTo(startX , startY);
ctx.strokeStyle = 'yellow';
ctx.stroke();