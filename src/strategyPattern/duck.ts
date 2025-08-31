import type { FlyBehavior } from './behavior/fly/flyBehavior';
import type { QuackBehavior } from './behavior/quack/quackBehavior';

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
