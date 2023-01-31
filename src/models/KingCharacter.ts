import { Characters } from './characters';

export class King extends Characters {
  isLive: boolean;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public yearsActive: number
  ) {
    super(name, family, age);
    this.isLive = true;
    this.yearsActive = yearsActive;
  }

  greeting() {
    return super.greeting(`Van a morir todos`);
  }

  died() {
    super.died();
  }
}