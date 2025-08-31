import type { QuackBehavior } from './quackBehavior';

export default class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('I am mute...');
    }
}
