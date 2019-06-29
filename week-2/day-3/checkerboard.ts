'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let x:number = 0;
let y:number = 0;
const s:number = 50;





function draw1(){

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(x,y,s,s);

x = x + 50;

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.fillRect(x,y,s,s);

x = x + 50;
}


function draw2(){

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.fillRect(x,y,s,s);

x = x + 50;

ctx.beginPath();
ctx.fillStyle = 'grey';
ctx.fillRect(x,y,s,s);

x = x + 50;
}


// draw1 if k is odd,
// draw2 if k is even

// k is row number starting from 1 from top

for(let k:number=1;k<12;k++){
  if(k%2!==0){
    for(let i:number=0;i<6;i++){
    draw1();
    }
    y = y + 50;
    x = x - 600;
}

    for(let j:number=0;j<6;j++){
    draw2();
    }  
    y = y + 50;
    x = x - 600;
    k = k + 1;
}






