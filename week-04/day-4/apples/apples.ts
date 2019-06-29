export class Apple {
  size:number;
  color:string;

  constructor(size:number = 1, color:string = 'red'){
    this.size = size,
    this.color = color
  }

  getApple(){
  return 'apple';
  }

}

let golden:Apple = new Apple(3,'green');
console.log(golden);
console.log(golden.getApple());
