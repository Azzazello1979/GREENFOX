'use strict';
const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'password',
database: 'articles'
});
connection.connect();

//schema
/*

CREATE TABLE articles (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(100) NOT NULL,
  title  VARCHAR(100) NOT NULL,
  body   TEXT         NOT NULL
);

*/

//insert
const article = {
  author: 'Bogja de Aztec Land',
  title: 'How to make child clothing',
  body: 'a looot of sawing text here'
};

//the query to insert
const query = connection.query('INSERT INTO articles SET ?', article, function(err, result){
  //console.log(query); //check out query object in console
  
  if(err){
    console.log(err); // show error if any and stop
    return;
  }else{
    console.log(result); // show result details
  }

});


