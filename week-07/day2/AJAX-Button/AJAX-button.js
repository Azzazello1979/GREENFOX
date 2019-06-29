'use strict';

// make an AJAX button that gets & parses a response
// from a JSON object
// SEQUENCE
//
// 1. http.onreadystatechange = function(){}   -set up error handling
// 2. http.open()                              -set up request
// 3. http.send()                              -send request



  let http; // http exists but its undefined

  document.getElementById("ajaxButton").addEventListener('click', makeRequest); //grab button & add event listener

  function makeRequest() {
    http = new XMLHttpRequest();

    if (http === undefined) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    http.onreadystatechange = alertContents;
    //http.onreadystatechange = alternative;
    http.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    http.send();
  }


  function alertContents() {						// uses http.responseText
    if (http.readyState === XMLHttpRequest.DONE) {
      if (http.status === 200) {
        alert(http.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }


  function alternative () {							// uses JSON.parse(http.response)

    if(http.readyState == 4 && http.status == 200)
      console.log(JSON.parse(http.response));
      

  };


