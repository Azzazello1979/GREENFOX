import { Plant } from './plant';

class Tree extends Plant {
  public constructor (color: string = '') {
    super(10, 0.4, color, 'Tree');
  }
}

export { Tree };