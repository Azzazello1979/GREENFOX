'use strict';

import {Person} from './person'
import {Student} from './student'
import {Mentor} from './mentor'
import {Sponsor} from './sponsor'

class Cohort {

cohortName :string;
listOfStudents :Student[];
listOfMentors :Mentor[];

constructor(cohortName :string, listOfStudents :Student[] = [], listOfMentors :Mentor[] = []){
  this.cohortName = cohortName,
  this.listOfStudents = listOfStudents,
  this.listOfMentors = listOfMentors
}

info():void{
  console.log(`The ${this.cohortName} cohort has ${this.listOfStudents.length} students and ${this.listOfMentors.length} mentors.`);
}

addMentor(x:Mentor):void{
this.listOfMentors.push(x);
}

addStudent(x:Student):void{
this.listOfStudents.push(x);
}



}








let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();

