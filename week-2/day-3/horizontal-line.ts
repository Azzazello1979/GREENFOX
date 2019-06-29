'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawFrom(x:number,y:number){
  
ctx.beginPath();
ctx.moveTo(x,y); // takes cursor draw from coordinates from function args.
ctx.lineTo(x+50,y); // 50px long line
ctx.strokeStyle = 'green';
ctx.stroke();
}

// functions inputs
let startingX:number = 20;
let startingY:number = 20;



for(let i:number=0;i<3;i++){ //iterate 
  drawFrom(startingX,startingY); // need to increase both x and y but not equally, 
  startingX = startingX;    // because then you wont see anything, it will 
  startingY = startingY + 10;    // draw lines one on top the other
  
}


