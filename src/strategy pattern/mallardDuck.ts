import { FlyNoWays } from './behaviour/fly/flyNoWay';
// import { FlyWithWings } from './behaviour/fly/flyWithWings';
import { Quack } from './behaviour/quack/quack';
import { Duck } from './Duck';

export class MallardDuck extends Duck {
    constructor() {
        super(new FlyNoWays(), new Quack());
    }
    display(): void {
        console.log('I am a Mallard Duck');
    }
}
