import { Plant } from './plant';

class Flower extends Plant {
  public constructor (color: string = '') {
    super(5, 0.75, color, 'Flower');
  }
}

export { Flower };