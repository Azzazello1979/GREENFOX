'use strict';

let text = document.createElement('p');
document.querySelector('body').appendChild(text);

let button = document.getElementById('btn');
button.addEventListener('click', delayer);

function delayer(printer){
  printer;
}


  const printer = setTimeout(() => {
  text.innerHTML = '2 seconds elapsed'; 
}, 2000);














