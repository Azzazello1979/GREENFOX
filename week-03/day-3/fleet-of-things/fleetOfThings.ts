import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

// create objects
let milk :Thing = new Thing('Get milk');
let obstacles :Thing = new Thing('Remove the obstacles');
let standup :Thing = new Thing('Stand up');
let eatlunch :Thing = new Thing('Eat lunch');

// make an array of objects
let toDos :Thing[] = [milk, obstacles, standup, eatlunch];


// add objects to fleet, with fleet's add method
for(let i:number = 0; i<toDos.length; i++){
fleet.add(toDos[i]);
}

// filter for standup and eatlunch
let filteredToDos :Thing[] = toDos.filter(x=> x.name === 'Stand up' || x.name === 'Eat lunch' );

// complete standup and eatlunch
for(let i:number = 0;i<filteredToDos.length;i++){
  filteredToDos[i].complete();
}

// print list
for(let i:number = 0;i<toDos.length;i++){
console.log(`${i}. [${toDos[i].getCompleted() ? 'X':' '}] ${toDos[i].getName()}`);
}

