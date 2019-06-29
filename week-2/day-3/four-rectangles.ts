'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

const rectangleWidth:number = 50;
const rectangleHeight:number = 50;

const rectangleColors:string[] = ['red', 'yellow', 'blue', 'green'];
let rectangleCurrentColor:string = rectangleColors[0];




// DO NOT TOUCH THE CODE below THIS LINE
let startX:number = 300-(rectangleWidth/2);
let startY:number = 300-(rectangleHeight/2);

for(let i:number=0;i<4;i++){


ctx.beginPath();
ctx.fillStyle = rectangleCurrentColor;
ctx.fillRect(startX, startY, rectangleWidth, rectangleHeight);


startX = startX + 50;
startY = startY + 50;
rectangleCurrentColor = rectangleColors[0+i+1];



}


