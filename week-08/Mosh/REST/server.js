// backend

'use strict';

// npm i joi@13.1.0 --save
const Joi = require('joi');
const PORT = 3000;
const express = require('express');
const app = express();


app.use(express.json()); //no need to specify anything just simply send()

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
  res.send('Hello');
});

// list all courses
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// find a certain course by its ID
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`Course with ID ${req.params.id} was not found!`);
  res.status(200).send(course);
});


// respond to POST request
app.post('/api/courses', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).send('Name is required and should be at least 3 characters long.');
    
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});


// update an already existing course with PUT
app.put('/api/courses/:id', (req, res) => {
  //look up course
  //if not existent return 404
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`Course with ID ${req.params.id} was not found!`);
  

  //validate with Joi
  //if invalid return 400 (bad request)
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
    
  }

  //update course name (use PUT request at postman)
  // example:
  // localhost:3000/api/courses/4
  //return updated course
  course.name = req.body.name;
  res.send(course);

});


// DELETE course
app.delete('/api/courses/:id', (req, res) => {
  // see if the record we want to delete exists or not
  // look up course if nonexistent return 404
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`Course with ID ${req.params.id} was not found!`);
  

  // delete given record object from array of record objects
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // return deleted course
  res.send(course);
});











app.listen(PORT, () => (`OK...Express listening on port ${PORT}`));

