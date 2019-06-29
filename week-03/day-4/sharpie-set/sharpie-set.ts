'use strict';
import { Sharpie } from './sharpie';

/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
sendtToTrash() -> removes all unusable sharpies */



class SharpieSet {
  list: Sharpie[] = [];

  constructor(list: Sharpie[] = []) {
    this.list = list
  }


  countUsable() {
    
    let used: Sharpie[] = [];
    let stillUsable: number = this.list.length;
    
    for (let i: number = 0; i < this.list.length; i++) {
      this.list[i].inkAmount < 1 ? used.push(this.list[i]) : null
    }
    
    stillUsable = stillUsable - used.length;
    return stillUsable;
  }


  sendToTrash() {
    
    for (let i: number = 0; i < this.list.length; i++) {
      this.list[i].inkAmount < 1 ? this.list.splice(i,1) :null
    }
    return this.list.length;
  }

}

export { SharpieSet };


// this.list.splice(i,1) :null
// delete(this.list[i]) :null