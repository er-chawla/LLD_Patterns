import type { QuackBehavior } from './quackBehavior';

export default class Squeak implements QuackBehavior {
    quack(): void {
        console.log('I can squeak');
    }
}
