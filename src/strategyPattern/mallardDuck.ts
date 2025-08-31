import { FlyNoWays } from './behavior/fly/flyNoWay';
import { Quack } from './behavior/quack/quack';
import { Duck } from './duck';

export class MallardDuck extends Duck {
    constructor() {
        super(new FlyNoWays(), new Quack());
    }
    display(): void {
        console.log('I am a Mallard Duck');
    }
}
