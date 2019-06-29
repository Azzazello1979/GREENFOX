'use strict';

window.addEventListener('keyup', (event) => {
  console.log(event);
  let lastPressedKey = event.key;
  
  document.querySelector('h1').innerHTML = `The last pressed key is ${lastPressedKey}.`;
});
