export class Pokemon {
    name: string;
    weakness: string;
    strength: string;

    constructor(name: string, weakness: string, strength: string) {
        this.name = name;
        this.weakness = weakness;
        this.strength = strength;
    }

    canBeat(pokemon: Pokemon): boolean {
        return this.strength === pokemon.weakness;
    }
}