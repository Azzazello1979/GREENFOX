class Plant {
  protected waterLevel: number;
  protected criticalWaterLevel: number;
  protected absorb: number;
  protected color: string;
  protected name: string;

  public constructor(
    pCriticalWaterLevel: number,
    pAbsorb: number,
    pColor: string,
    pName: string,
  ) {
    this.waterLevel = 0;
    this.criticalWaterLevel = pCriticalWaterLevel;
    this.absorb = pAbsorb;
    this.color = pColor;
    this.name = pName;
  }

  public needWatering(): boolean {
    return this.waterLevel < this.criticalWaterLevel;
  }

  public water(amount: number): void {
    this.waterLevel = this.waterLevel + (amount * this.absorb);
  }

  public printStatus(): void {
    const elements: string[] = [
      'The',
      this.color,
      this.name,
      this.needWatering() === true ? 'needs' : 'doesnt need',
      'water'
    ];

    console.log(elements.join(' '));
  }
}

export { Plant };