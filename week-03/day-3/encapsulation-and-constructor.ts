class Human {
  name: string;
  age: number;
  iq: number;

  constructor(name: string = 'unknown', age: number = 0, iq: number = 0) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  public isSmart(): boolean {
    return this.iq > 100;
  }

  public isNameless(): boolean {
    return this.name === 'unkown' || this.name === '';
  }

  public beSmarter(): void {
    this.iq += 20;
  }
}




let human = new Human();
let human2 = new Human('Laci', 18, 110);

human.name = 'Hector';
human.age = 1;

if (human.isSmart()) {
  console.log(`${human.name} is smart, with iq: ${human.iq}`);
}else{
  console.log(`Sorry, ${human.name} has less than 100 iq.`);
}


// Encapsulation is one of the main concepts in object oriented programming.
// It allows an object to group both private and public members under a single name.
//
// members mean fields and also functions(methods)
//
// A class can control the visibility of its data members to members of other classes.
// This capability is termed as Data Hiding or ENCAPSULATION.
//
// Object Orientation uses the concept of access modifiers or access specifiers 
// to implement the concept of Encapsulation.
// The access specifiers/modifiers define the visibility of a class’s data members outside its defining class.
//
// Access specifiers/modifiers:
//
// public - members are public by default, universal accessibility
// private - Private data members are accessible only within the class that defines these members.
// protected - members can only be accessed within the same class and also by children of the class

console.log(human2.isSmart());
console.log(human2.iq);

human2.beSmarter()
console.log(human2.iq);