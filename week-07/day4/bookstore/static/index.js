'use strict';



document.getElementById("btn1").addEventListener('click', titleButton);

function titleButton() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'http://localhost:3000/alltitles');
  
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  httpRequest.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  httpRequest.onload = () => {
    let titles = JSON.parse(request.responseText);
    for (let i = 0; i < titles.length; i++) {
      document.getElementsByTagName('ul')[0].appendChild(document.createElement('li')).innerText = titles[i].book_name;
    };

  };
  httpRequest.send();
};







const httpChannelForAllBooks = new XMLHttpRequest();
httpChannelForAllBooks.open('GET', 'http://localhost:3000/allbooks');

httpChannelForAllBooks.onload = (data) => {

  let array = JSON.parse(data.target.response);

  for (let i = 0; i < array.length; i++) {
    document.getElementsByTagName('tbody')[0].appendChild(document.createElement('tr')).appendChild(document.createElement('td')).innerText = array[i].book_name;
    document.getElementsByTagName('tbody')[0].lastChild.appendChild(document.createElement('td')).innerText = array[i].aut_name;
    document.getElementsByTagName('tbody')[0].lastChild.appendChild(document.createElement('td')).innerText = array[i].cate_descrip;
    document.getElementsByTagName('tbody')[0].lastChild.appendChild(document.createElement('td')).innerText = array[i].pub_name;
    document.getElementsByTagName('tbody')[0].lastChild.appendChild(document.createElement('td')).innerText = array[i].book_price;
  };
};
httpChannelForAllBooks.send(null);