'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

// canvas is 600x600

const width:number = 50;
const height:number = 50;

let posX:number = 300-(width/2);
let posY:number = 300-(height/2);



function drawSquares(x:number,y:number){
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(x, y, width, height);
return
}


for(let i:number=0;i<3;i++){
  drawSquares(posX,posY);
  posX = posX + 50;
  posY = posY + 50;
}

