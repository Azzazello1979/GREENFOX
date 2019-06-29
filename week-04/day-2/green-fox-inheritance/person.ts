'use strict';

export class Person {

name: string;
age: number;
gender: string;

constructor (name :string = 'Some Body', age :number = 0, gender :string = 'male or female'){

this.name = name,
this.age = age,
this.gender = gender

}

introduce(){
  console.log(`Hi, I am ${this.name},a ${this.age} year old ${this.gender}. `);
}

getGoal(){
  console.log('My goal is: To be somebody!');
}


}