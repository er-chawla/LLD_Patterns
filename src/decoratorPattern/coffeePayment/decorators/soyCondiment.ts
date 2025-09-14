import { Beverage } from '../component/beverage';
import { CondimentsDecorator } from './condimentDecorator';

export class SoyCondiments extends CondimentsDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super(beverage);
        this.beverage = beverage;
    }

    cost(): number {
        return this.beverage.cost() + 0.15;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy';
    }
}
