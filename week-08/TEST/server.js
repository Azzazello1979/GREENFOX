//BACKEND

'use strict';


const express = require('express');
const mysql = require('mysql');
const path = require('path');
const env = require('dotenv');
const PORT = 3099;
// const PORT = process.env.PORT || 3099;   <-- if PORT is set, use that, otherways use 3099
// to set enviromental variable PORT (on windows): go to console, give command:
// set PORT=5000
// now, server will run on 5000, with above code ...

const app = express();

const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  host: 'localhost',
  database: 'shelter'
});

db.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('OK database connection');
});


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//backend endpoint: how to respont to a GET request aimed at / from the front end (or from any external source)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html')); //was working with     res.sendFile(path.join(__dirname, 'index.html'));    too
});

//backend endpoint: how to respont to a POST request aimed at / from the front end (or from any external source)
//read sql request from request body and insert corresponding values into database using BINDING
//request body must arrive in JSON format !!!! not in raw text, because then SQL will not
//insert it into DB (values will be null)!

let orderBy = 'id'; // ORDER BY ${orderBy} ASC

app.post('/', (req, res) => {
  if(req.body.name !== "" || req.body.age !== ""){
  console.log(req.body);
  db.query(`INSERT INTO dogs(name, age, date, hashome) VALUES(?,?,?,?)`,
    [req.body.name, req.body.age, new Date(req.body.date), req.body.hashome],
    (err, OKPacket) => {
      if(err){
        console.log(err);
        res.status(500).json(err);
      }else{
        res.status(200).json(OKPacket);
      }
    }
  )
  }else{
    res.status(500).alert('server error');
  }
});










//backend endpoint: how to respont to a GET request aimed at /getDogs from the front end (or from any external source)
//get all data from database
app.get('/getDogs', (req, res) => {
  db.query('SELECT * FROM dogs',
    (err, records) => {
      if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(records);
      }
    }
  )
});


//delete dog
app.delete('/delete/:id', (req, res) => {
  
  db.query('DELETE FROM dogs WHERE id = ?',
  [req.params.id],
    (err, OKPacket) => {
      if(err){
        res.status(500).json(err);
      }else{
        OKPacket.affectedRows !== 0 ?
        res.status(200).json({message: `Dog with id: ${req.params.id} deleted`}) :
        res.status(400).json({message: `No such dog`});
      }
    }
  )
  
});


//SORT USING req.params... req.params.orderBy  
// --- > 

app.get('/sort/:orderBy/:ascORdesc', (req, res) => {
  let orderBy = req.params.orderBy;
  let ascORdesc = req.params.ascORdesc;   //DESC or ASC
  db.query(`SELECT * FROM dogs ORDER BY ${orderBy} ${ascORdesc}`,
    (err, records) => {
      if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(records);
      }
    }
  )
});



//SORT USING req.query... req.query.column  
// --- > 

app.get('/sort', (req, res) => {
  let column = req.query.column;
  let value = req.query.value;  

  db.query(`SELECT * FROM dogs WHERE ${column} = '${value}'`,
    (err, records) => {
      if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(records);
      }
    }
  )
});

// MOVE dog record from one table to another 
// INSERT INTO ...
// then
// DELETE FROM ...
// they are async operations so if you want multiple SQL statements, like here, you must put them in if-else logic

app.get('/move/:dogToMoveID', (req, res) => {

  let dogToMoveID = req.params.dogToMoveID;

  db.query(`INSERT INTO rescued (name, age, id) SELECT name, age, id FROM dogs WHERE id = ${dogToMoveID}`,
    (err, OKPacket) => {
      if(err){
        res.status(500).json(err);
      }else{
        db.query(`DELETE FROM dogs WHERE id = ${dogToMoveID}`)
        res.status(200).json(OKPacket);
        
      }
    }
  )




});


app.listen(PORT, () => console.log(`OK Express is listening on port ${PORT}.`));


// IF trying to delete NOT with <submit form button> but with <button> where you have event listener attached:
// event.target.elements.[element].[element's attribute] (<-- which has a value)
