'use strict';



//addEventListener's callback function emits an event object.



// THIS STARTING COORDINATES MUST BE OUTSIIDE OF THE FUNC, BECAUSE
// INSIDE THE FUNC THEY WILL BE DESTROYED AND NOT UPDATED BUT ONLY ONE STEP
let Xposition = 0;
let Yposition = 0;
let magnifyPercentage = 200; //starting magnify %

const moveANDzoom = (event) => {



  console.log(event.target);
  // event.target is the child item that was clicked on (like a <li> in an <ul>)
  // displays the whole <HTML tag> with its contents
  // <button data-action="move" data-direction="up">Up</button>

  console.log(event.target.dataset);
  // dataset is one object that can have one or many key-value pairs(properties)
  // DOMStringMap {action: "move", direction: "up"}

  console.log(event.target.dataset.direction);
  // direction is one key-value pair(property) of the dataset obj


  let moveDirection = event.target.dataset.direction;
  let window =  document.querySelector('.img-inspector');



// access all style attributes with .style
if(moveDirection === 'up'){
    Yposition -= 10;
    window.style.backgroundPositionY = `${Yposition}px`;
}else if(moveDirection === 'down'){
    Yposition += 10;
    window.style.backgroundPositionY = `${Yposition}px`;
}else if(moveDirection === 'left'){
    Xposition -= 10;
    window.style.backgroundPositionX = `${Xposition}px`;
}else if(moveDirection === 'right'){
    Xposition += 10;
    window.style.backgroundPositionX = `${Xposition}px`;
}else if(moveDirection === 'in'){
    magnifyPercentage += 10;
    window.style.backgroundSize = `${magnifyPercentage}%`;
}else if(moveDirection === 'out'){
    magnifyPercentage -= 10;
    window.style.backgroundSize = `${magnifyPercentage}%`;
}


};





//attach BUBBLING function to the div that contains the child elements that you want to bubble
document.querySelector('nav').addEventListener('click', moveANDzoom);

