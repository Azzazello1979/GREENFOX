'use strict';

import {Person} from './person'
export class Student extends Person {

previousOrganization :string;
skippedDays :number;

constructor(
name?:string,age?:number,gender?:string,
previousOrganization:string='some org',
skippedDays:number = 0){

super(name,age,gender);
this.previousOrganization = previousOrganization,
this.skippedDays = skippedDays
}

getGoal(){
  console.log('My goal is: Be a junior software developer.');
}

skipDays(x :number):number{
  return this.skippedDays + x;
}

introduce(){
  console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} 
  who skipped ${this.skippedDays} days from the course already.`);
}


}

const Balint :Student = new Student('Balint',39,'male');

console.log(Balint);
console.log(Balint.getGoal());

