

export class Thing {
    name: string;
    completed: boolean;

  constructor(name: string, completed: boolean = false) {
    this.name = name,
    this.completed = completed
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }
}





