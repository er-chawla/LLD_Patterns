import type { FlyBehavior } from './flyBehavior';

export class FlyNoWays implements FlyBehavior {
    fly(): void {
        console.log("I can't fly..");
    }
}
