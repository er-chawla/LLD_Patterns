import type { FlyBehavior } from './behaviour/fly/flyBehavior';
import type { QuackBehavior } from './behaviour/quack/quackBehavior';

export abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;
    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    abstract display(): void;
    swim(): void {
        console.log('I can swim..');
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }
}
