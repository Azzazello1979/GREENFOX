import { Pokemon } from './Pokemon'

function initPokemonsOfAsh(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
    
}

let pokemonsOfAsh: Pokemon[] = initPokemonsOfAsh();

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');





for(let i:number = 0;i<pokemonsOfAsh.length;i++){

pokemonsOfAsh[i].canBeat(wildPokemon) ? console.log(pokemonsOfAsh[i].name) : undefined;

}














// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

// Which pokemon should Ash use?



//////////////////// Alternative solution below without use of method from Pokemon class /////////////////////



//
// We are looking for x Pokemon from Ashes stock.
// Both of these statements must be true:
//
// wildPokemon.weakness === x.strength
//              &&
// wildPokemon.strength !== x.weakness
//





/* let championFound:boolean = false;

for(let i: number = 0;i<pokemonsOfAsh.length;i++){

if(wildPokemon.weakness === pokemonsOfAsh[0+i].strength && wildPokemon.strength !== pokemonsOfAsh[0+i].weakness){
console.log(`You can beat the Wild and survive, ${pokemonsOfAsh[0+i].name}`),championFound = true;

}
}

if(championFound === false){
  console.log('EEEK, we will all diee!');
} */


/* console.log('----------------------------------------------------');
console.log(`Wild Pokemon can beat ${pokemonsOfAsh[3].name}? ${wildPokemon.canBeat(pokemonsOfAsh[3])}`); */

















//TAKEAWAYS...

// access 1st member's given field of the object array
// console.log(pokemonsOfAsh[0].strength);