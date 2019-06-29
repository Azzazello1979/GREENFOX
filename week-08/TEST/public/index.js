//FRONTEND

window.onload = () => {
  //alert('index.js connected to index.html OK');
  let toFill = document.querySelector('.fillable');
  let getDogs = new XMLHttpRequest();

  //ready state checking function to see if all is well(we want ready state 4)
  getDogs.onreadystatechange = function () {
    if (getDogs.readyState == 4 && getDogs.status == 200) {
      //console.log(JSON.parse(getDogs.response));
    } else {
      //console.log(getDogs.readyState);
    }
  };


  getDogs.open('GET', 'http://localhost:3099/getDogs', true);   //1. open()
  getDogs.setRequestHeader('Content-Type', 'application/json'); //2. setRequestHeader()
  getDogs.onload = (progEventObj) => {                           //3. onload()
    if (progEventObj.target.status === 200) {
      //console.log(progEventObj); //typeof = ProgressEvent
      //console.log(progEventObj.target); //typeof = XMLHttpRequest
      //console.log(progEventObj.target.response); //JSON obj
      let dogs = JSON.parse(getDogs.response); //same as let dogs = JSON.parse(progEventObj.target.response);
      console.log(dogs);
      dogs.forEach(dog => {
        let row = document.createElement('tr');
        row.setAttribute('row_id', dog.id);

        let name = document.createElement('td');
        name.textContent = dog.name;

        let age = document.createElement('td');
        age.textContent = dog.age;

        let date = document.createElement('td');
        date.textContent = dog.date;

        let hasHome = document.createElement('td');
        hasHome.textContent = dog.hashome === 1 ? 'YES' : 'NO';

        let id = document.createElement('td');
        id.textContent = dog.id;

        row.appendChild(name);
        row.appendChild(age);
        row.appendChild(date);
        row.appendChild(hasHome);
        row.appendChild(id);


        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        deleteButton.id = dog.id;

        deleteButton.addEventListener('click', killDog);

        function killDog(){  
          let xhr = new XMLHttpRequest();
          xhr.open('DELETE', `http://localhost:3099/delete/${dog.id}`,true);
          xhr.send();
        }

        

        row.appendChild(deleteButton);
        toFill.appendChild(row);
      });
    }

  }
  getDogs.send();                                               //4. send()

};







//save data to database from FORM
let sendData = document.querySelector('.sendData');
sendData.addEventListener('submit', (event) => {
  //event.preventDefault();


  const { name, age } = event.target.elements;
  // event.target.elements contains name / age / hashome / date / id
  // by calling any of these you get the value of these keys
  //console.log(name.value, age.value);

/*   let bodyToSend = {
    name: name.value, age: age.value, date: Date.now(), hashome: false
  }; */

    let bodyToSend = {
    name: event.target.elements.name.value, age: event.target.elements.age.value, date: Date.now(), hashome: false
  };


  

  let sendDog = new XMLHttpRequest();
  sendDog.open('POST', 'http://localhost:3099/', true);
  sendDog.setRequestHeader('Content-Type', 'application/json');

  sendDog.send(JSON.stringify(bodyToSend)); //this is how you send from a form

});

