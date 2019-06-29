'use strict';

import {Person} from './person'
export class Mentor extends Person{
level :string;

constructor(name?:string,age?:number,gender?:string,level:string = 'intermediate'){
super(name,age,gender);
this.level = level

}

getGoal(){
  console.log('My goal is: Educate brilliant junior software developers.');
}

}

const Sanyi :Mentor = new Mentor();
console.log(Sanyi.getGoal());
