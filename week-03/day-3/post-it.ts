//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

'use strict';

class PostIt {
  backgroundColor:string;
  text:string;
  textColor:string;

  constructor(backgroundColor:string='white',text:string='Hello!',textColor:string='black'){
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;

  }

printInfo():void{
  console.log(`Background color is ${this.backgroundColor}, text color is ${this.textColor}, with the message: ${this.text}`);
}

}


const myFirstPostIt: PostIt = new PostIt('orange','Idea 1','blue');
const mySecondPostIt: PostIt = new PostIt('pink','Awesome','back');
const myThirdPostIt: PostIt = new PostIt('yellow','Superb!','green');

myFirstPostIt.printInfo();
mySecondPostIt.printInfo();
myThirdPostIt.printInfo();


