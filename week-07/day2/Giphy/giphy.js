'use strict';

const http = new XMLHttpRequest();
if (http === undefined)
  alert('problem with XMLHttpRequest instance creation'); //check if XMLHttpRequest new instance exists.


http.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=zjyAkhK7o6ACNdNpeg3oJLrB1FYHL4IZ');
let data = "";
http.onload = () => {
  data = JSON.parse(http.response); // same as JSON.parse(http.responseText);
  for (let i = 0; i < 16; i++) {
    let newImage = document.createElement('img');
    newImage.src = data.data[i].images.fixed_height_still.url;
    document.getElementsByTagName('body')[0].appendChild(newImage);
    document.getElementsByTagName('img')[i].setAttribute('onClick', `start(${i})`);
  };
};
http.send();


const start = (index) => {
  document.getElementsByTagName('img')[index].src = data.data[index].images.fixed_height.url;
};

