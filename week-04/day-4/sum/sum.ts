export class Sum {
  array: number[];

  constructor(array: number[] = []) {
    this.array = array
  }

  adder(): number {
    let sum: number = 0;
    for (let i: number = 0; i < this.array.length; i++) {
      sum = sum + this.array[i]
    }
    return sum; //Return AFTER the loop finsihed!
  }
}

let sum1: Sum = new Sum([1, 2, 3]);


