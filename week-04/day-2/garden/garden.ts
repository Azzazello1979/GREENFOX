import { Plant } from './plant';

class Garden {
  private plants: Plant[] = [];

  public addPlant(newPlant: Plant): void {
    this.plants.push(newPlant);
  }

  public waterAllThePlants(amount: number): void {
    const thirstyCounter: number = this.plants.filter(
      onePlant => onePlant.needWatering()
    ).length;
    const currentWaterAmount: number = amount / (thirstyCounter || 1); //currentWaterAmount is the amount each plant will receive

    console.log(`\nWatering each plant with ${amount}`);

    this.plants.forEach((onePlant: Plant) => {
      if (onePlant.needWatering() === true) {
        onePlant.water(currentWaterAmount);
      }
    });
  }

  public printStatus(): void {
    this.plants.forEach(
      (onePlant: Plant) => onePlant.printStatus()
    );
  }
}

export { Garden };