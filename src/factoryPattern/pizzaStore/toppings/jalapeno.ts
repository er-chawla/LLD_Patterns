import { Pizza } from '../pizza';
import { PizzaTopping } from './pizzaTopping';

export class Jalapeno extends PizzaTopping {
    pizza: Pizza;
    constructor(pizza: Pizza) {
        super(pizza);
        this.pizza = pizza;
    }

    prepare(): void {
        this.pizza.prepare();
        console.log('---- Added Jalapeno ----');
    }
}
