import { Beverage } from '../component/beverage';
import { CondimentsDecorator } from './condimentDecorator';

export class MochaCondiments extends CondimentsDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super(beverage);
        this.beverage = beverage;
    }
    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha';
    }
    cost(): number {
        return this.beverage.cost() + 0.2;
    }
}
