import { Pizza } from '../pizza';
import { PizzaTopping } from './pizzaTopping';

export class Cheese extends PizzaTopping {
    constructor(pizza: Pizza) {
        super(pizza);
        this.pizza = pizza;
    }

    prepare(): void {
        this.pizza.prepare();
        console.log(' ---- Added mozzarella cheese ----');
    }
}
