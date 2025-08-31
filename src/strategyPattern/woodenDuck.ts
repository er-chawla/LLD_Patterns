import { FlyNoWays } from './behavior/fly/flyNoWay';
import MuteQuack from './behavior/quack/muteQuack';
import { Duck } from './duck';

export class WoodenDuck extends Duck {
    constructor() {
        super(new FlyNoWays(), new MuteQuack());
    }
    display(): void {
        console.log('I am wooden duck');
    }
}
