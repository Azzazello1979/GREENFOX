'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.
// Draw a colored rectangle


let rectangleWidth:number = 250;
let rectangleHeight:number = 250;




// DO NOT TOUCH THE CODE below THIS LINE
let startX:number = 300-(rectangleWidth/2);
let startY:number = 300-(rectangleHeight/2);

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(startX, startY, rectangleWidth, rectangleHeight);

