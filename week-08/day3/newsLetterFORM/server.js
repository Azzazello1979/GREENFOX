'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');


const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  host: 'localhost',
  database: 'newsletter'
});

db.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('OK database connection');
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.post('/signup', (req, res) => {
  console.log(req.body);
  if(req.body.userName !== "" || req.body.userEmail !== ""){
  
  db.query(`INSERT INTO users(user, email) VALUES(?,?)`,
    [req.body.userName, req.body.userEmail],
    (err, data) => {
      if(err){
        console.log(err);
        res.status(500).json(err);
      }else{
        res.status(200).send(`<h1>Thanks ${req.body.userName}, your email is ${req.body.userEmail} and you are signed up!</h1>`);
      }
    }
  )
  }else{
    res.status(500).alert('server error');
  }
});






app.listen(PORT, () => {
  console.log(`OK Express is running on port ${PORT}`);
});