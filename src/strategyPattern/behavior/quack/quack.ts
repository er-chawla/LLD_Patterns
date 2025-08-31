import type { QuackBehavior } from './quackBehavior';

export class Quack implements QuackBehavior {
    quack(): void {
        console.log('I can Quack..');
    }
}
