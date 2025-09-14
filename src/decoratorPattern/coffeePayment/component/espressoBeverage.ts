import { Beverage } from './beverage';
import { Size } from './type';

export class EspressoBeverage extends Beverage {
    constructor() {
        super();
        this.description = 'Espresso drink';
    }
    cost(): number {
        switch (this.getSize()) {
            case Size.SMALL:
                return 1.99;
            case Size.MEDIUM:
                return 2.15;
            case Size.LARGE:
                return 2.4;
        }
    }
}
