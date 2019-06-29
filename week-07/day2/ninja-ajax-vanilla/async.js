window.onload = function () {

  let http = new XMLHttpRequest();


  http.onreadystatechange = function () {

    if(http.readyState == 4 && http.status == 200)
      console.log(JSON.parse(http.response));
      

  };


  http.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
  http.send();





  console.log("test"); //do you see "test" before or after the JSON data?
  // if open(.., .., true) --> AJAX --> async fetching of data (non-blocking)
  // if open(.., .., false) --> NO AJAX --> sync fetching of data (blocking)

};

/*

READY STATES

0 - request not initialized   let http = new XMLHttpRequest();
1 - request has been set up   open() -- (GET or POST, url, true=async(AJAX) / false=sync(NO AJAX))
2 - request sent              send()
3 - request is in process
4 - request complete - as it comes back

*/



/*
NET NINJA
async javascript - AJAX - using vanilla javascript

https://www.youtube.com/watch?v=h0ZUpPiV1ac
*/
