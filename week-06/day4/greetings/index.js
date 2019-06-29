'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');


app.get('/', (req, res) => {

// req.query will return a JS object:
// ?name=John will result req.query to be:
// {  name: 'John'  }

  let value = req.query.name;
  if(!value){ // if value not given
    value = 'Guest';
  }
  res.render('home', {name: `Welcome back, ${value}`});

});





app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
