import { Beverage } from './beverage';
import { Size } from './type';

export class HouseBlendBeverage extends Beverage {
    constructor() {
        super();
        this.description = 'House blend drink';
    }
    cost(): number {
        switch (this.getSize()) {
            case Size.SMALL:
                return 0.89;
            case Size.MEDIUM:
                return 0.96;
            case Size.LARGE:
                return 1.15;
        }
    }
}
