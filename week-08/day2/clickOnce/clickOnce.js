'use strict';

let clickCounter = 0;
let button = document.querySelector('button');

button.addEventListener('click', getTimeStamp);

/*
function getTimeStamp(){
  console.log(Date.now());
  clickCounter ++;
  console.log(clickCounter);

  if(clickCounter > 0){
    button.removeEventListener('click', getTimeStamp);
  }
};
*/


function getTimeStamp(){
  console.log(Date.now());
  clickCounter ++;
  console.log(clickCounter);

  if(clickCounter > 0){
    button.style.visibility = 'hidden';
  }
};
