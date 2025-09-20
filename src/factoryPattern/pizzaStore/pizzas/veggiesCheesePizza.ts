import { Pizza } from '../pizza';
import { Cheese } from '../toppings/cheese';
import { Veggies } from '../toppings/veggies';

export class VeggiesCheesePizza extends Pizza {
    constructor() {
        super('Veggies Cheese ');
    }
    prepare(): void {
        this.startPreparation();
    }
}
