//Create a Station and a Car classes
//Station
//gasAmount
//refill(car) -> decreases the gasAmount by the capacity of the car
//and increases the cars gasAmount
//Car
//gasAmount
//capacity
//create constructor for Car where:
//initialize gasAmount -> 0
//initialize capacity -> 100

'use strict';

  class Car {
  currentFuelLevel:number;
  fuelTankCapacity:number;

  constructor(
    currentFuelLevel:number = 0,
    fuelTankCapacity:number = 100
  ){
    this.currentFuelLevel = currentFuelLevel;
    this.fuelTankCapacity = fuelTankCapacity;
  }

}


class fuelStation {
  fuelAmount:number;

  constructor(
    fuelAmount:number = 1000000
  ){
    this.fuelAmount = fuelAmount;
  }

//if refill used without second parameter, it means full refill for the car
//if refill used with second parameter, custom amount of fill is possible
refill(car:any,customFillAmount?:any){
  if(customFillAmount===undefined){
  this.fuelAmount = this.fuelAmount - car.fuelTankCapacity;
   car.currentFuelLevel = car.currentFuelLevel + car.fuelTankCapacity;
  }else{
  this.fuelAmount = this.fuelAmount - customFillAmount;
   car.currentFuelLevel = car.currentFuelLevel + customFillAmount;
  }
}
}

const Mazda: Car = new Car();
const MOL: fuelStation = new fuelStation();


console.log(`Mazda current fuel level: ${Mazda.currentFuelLevel}`);
MOL.refill(Mazda,65);
console.log(`Mazda current fuel level: ${Mazda.currentFuelLevel}`);
console.log(`MOL current fuel level: ${MOL.fuelAmount}`);


