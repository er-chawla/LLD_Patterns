import { Beverage } from '../component/beverage';

export abstract class CondimentsDecorator extends Beverage {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    cost(): number {
        return this.beverage.cost();
    }

    abstract getDescription(): string;
}
