'use strict';

class Tree { // class is the blueprint for the object(s)
  type: string;
  leafColor: string;
  age: number;
  gender: string;
  isEvergreen: boolean;

  constructor( // constructor creates the object(s) based on input from user, constructor takes arguments
    type: string, // <-- these are the parameters for the constructor, we can give also default value with =
    leafColor: string, // <-- sequence must be the same here as when supplying args to the parameters when creating new obj from class, just like in case of functions parameters
    gender: string,
    isEvergreen: boolean,
    age: number = 0 // <-- default value for age
  ) { // 'this' here is the new entity
    this.age = age;
    this.type = type;
    this.leafColor = leafColor;
    this.gender = gender;
    this.isEvergreen = isEvergreen;
  }
// now the class's action = method = function
  giveMeInfoAboutMyTree(): void {
    console.log(
      `Your tree is a(n) ${this.gender + ' ' + this.type} aged ${this.age} with ${this.leafColor} leaves and it is ${this.isEvergreen ? 'evergreen' : 'not evergreen'}`);
  }
}

// now create new object .. note that age has a default value iside the constructor and therefore you can leave it out when giving args to new Tree class
const myFirstTree: Tree = new Tree('oak', 'greeeeen', 'female', false, );
myFirstTree.giveMeInfoAboutMyTree();