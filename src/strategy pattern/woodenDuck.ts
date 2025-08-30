import { FlyNoWays } from './behaviour/fly/flyNoWay';
import MuteQuack from './behaviour/quack/muteQuack';
import { Duck } from './Duck';

export class WoodenDuck extends Duck {
    constructor() {
        super(new FlyNoWays(), new MuteQuack());
    }
    display(): void {
        console.log('I am wooden duck');
    }
}
