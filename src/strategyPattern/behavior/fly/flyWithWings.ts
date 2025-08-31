import type { FlyBehavior } from './flyBehavior';

export class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log('I can fly');
    }
}
