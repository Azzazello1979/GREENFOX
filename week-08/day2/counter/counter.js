'use strict';


const button = document.querySelector('button');

button.addEventListener('click', getInfo);

function getInfo(){
let num = Array.from(document.getElementsByTagName('li')).length;
document.querySelector('.result').innerHTML = num;
};





