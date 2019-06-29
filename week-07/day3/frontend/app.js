'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//doubling endpoint
app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let replyObject = {};
  if (!input) {
    replyObject = {
      "error": "Please provide an input!"
    }
  } else {
    replyObject = {
      "received": input,
      "result": input * 2
    }
  }

  res.send(replyObject);

});

//greeter endpoint
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let replyObject = {};
  if (!name && !title) replyObject.error = 'Please provide a name and title';
  if (name && !title) replyObject.error = 'Please provide a title';
  if (name && title) replyObject.welcome_message = `Oh, hi there ${name}, my dear ${title}!`;
  res.send(replyObject);
});

//AppendA endpoint
app.get('/appenda/:word', (req, res) => {
  let appendable = req.params.word;
  let replyObject = {};

  if (appendable) {
    replyObject.appended = appendable + 'a';
    res.send(replyObject);
  } else {
    res.status(404).send();
  };
});

//doUntil endpoint
app.post('/dountil/:action', (req, res) => {
  let result = 0;
  if(!req.body.until) res.send({'error': 'Please provide a number!'});
  if(req.params.action === 'sum'){
    for(let i=0; i<=req.body.until; i++){
      result += i;
    };
  }else if(req.params.action === 'factor'){
    result = 1;
    for(let i=1; i<=req.body.until; i++){
      result *= i;
    };
  };
  res.send({'result':result});
});















app.listen(PORT, () => {
  console.log('server up on port ' + PORT)
});
