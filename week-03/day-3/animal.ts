//Create an Animal class
//Every animal has a hunger value, which is a whole number
//Every animal has a thirst value, which is a whole number
//when creating a new animal object these values are created with the default 50 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one

'use strict';

class Animal {
  hunger:number;
  thirst:number;

  constructor(hunger:number = 50, thirst:number = 50){
    this.hunger = hunger,
    this.thirst = thirst

  }

eat(){
this.hunger--;
console.log(`Animal has eaten some food and now its hunger decreased to ${this.hunger}`);

}

drink(){
this.thirst--;
console.log(`Animal drank some and now its thirst decreased to ${this.thirst}`);
}

play(){
this.hunger++, this.thirst++;
console.log(`Animal has played some and now its hunger increased to ${this.hunger} and its thirst increased to ${this.thirst}.`);
}



}

// create some animals and test

let Monkey: Animal = new Animal();

Monkey.eat();
console.log(Monkey.hunger,Monkey.thirst);


