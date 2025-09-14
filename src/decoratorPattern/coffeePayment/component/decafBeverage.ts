import { Beverage } from './beverage';
import { Size } from './type';

export class DecafBeverage extends Beverage {
    constructor() {
        super();
        this.description = 'decaf drink';
    }

    cost(): number {
        switch (this.getSize()) {
            case Size.SMALL:
                return 1.05;
            case Size.MEDIUM:
                return 1.15;
            case Size.LARGE:
                return 1.4;
        }
    }
}
