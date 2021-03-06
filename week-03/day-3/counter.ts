//Create a Counter class
//which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value

'use strict';

class counter {
  integer: number;

  constructor(
    integer: number = 0
  ) {
    this.integer = integer;
  }

  add(a?: number) {
    if (a === undefined) { this.integer++; } else {
      this.integer = this.integer + a;
      return this.integer;

    }
  }

  get() {
    console.log(this.integer.toString());
  }

  reset() {
    this.integer = 0;
  }
}

const myCounter: counter = new counter(2);

myCounter.add(5);
myCounter.get();
myCounter.add(2);
myCounter.get();
myCounter.add();
myCounter.get();
myCounter.reset();
myCounter.get();