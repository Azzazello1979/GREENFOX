'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.





function drawFrom(x:number,y:number){
  
ctx.beginPath();
ctx.moveTo(x,y); // takes cursor draw from coordinates from function args.
ctx.lineTo(300,300); // center point is fixed
ctx.strokeStyle = 'blue';
ctx.stroke();
}

// functions inputs
let startingX:number = 20;
let startingY:number = 20;



for(let i:number=0;i<20;i++){ //iterate 28 times
  drawFrom(startingX,startingY); // need to increase both x and y but not equally, 
  startingX = startingX + 20;    // because then you wont see anything, it will 
  startingY = startingY + 10;    // draw lines one on top the other
  
}



