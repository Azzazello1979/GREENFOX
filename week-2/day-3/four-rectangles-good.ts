'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let rectangleWidth:number = 30;
let rectangleHeight:number = 30;

const rectangleColors:string[] = ['red', 'yellow', 'blue', 'green', 'pink', 'orange'];
let rectangleCurrentColor:string = rectangleColors[0];




// DO NOT TOUCH THE CODE below THIS LINE
let startX:number = 50-(rectangleWidth/2);
let startY:number = 50-(rectangleHeight/2);

let increaseSide:number = 20;





for(let i:number=0;i<6;i++){

ctx.beginPath();
ctx.fillStyle = rectangleCurrentColor;
ctx.fillRect(startX, startY, rectangleWidth, rectangleHeight);

rectangleWidth = rectangleWidth + increaseSide;
rectangleHeight = rectangleHeight + increaseSide;
startX = startX + rectangleWidth - increaseSide;
startY = startY + rectangleHeight - increaseSide;
rectangleCurrentColor = rectangleColors[0+i+1];

}
