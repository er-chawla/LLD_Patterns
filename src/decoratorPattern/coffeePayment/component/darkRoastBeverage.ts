import { Beverage } from './beverage';
import { Size } from './type';

export class DarkRoastBeverage extends Beverage {
    constructor() {
        super();
        this.description = `dark roast drink ${this.getSize()}`;
    }

    cost(): number {
        switch (this.getSize()) {
            case Size.SMALL:
                return 0.99;
            case Size.MEDIUM:
                return 1.15;
            case Size.LARGE:
                return 1.4;
        }
    }
}
