'use strict';

import {SharpieSet} from './sharpie-set';
import {Sharpie} from './sharpie';



const greenSharpie :Sharpie = new Sharpie('green',22,0);
const blueSharpie :Sharpie = new Sharpie('blue',20,0);

const faberCastell :SharpieSet = new SharpieSet([greenSharpie,blueSharpie]);



  


/* faberCastell.sendToTrash(); */

console.log(`Number of still usable sharpies: ${faberCastell.countUsable()}`);







