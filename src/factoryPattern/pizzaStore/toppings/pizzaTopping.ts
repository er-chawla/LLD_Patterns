import { Pizza } from '../pizza';

export abstract class PizzaTopping extends Pizza {
    pizza: Pizza;
    constructor(pizza: Pizza) {
        super(pizza.name);
        this.pizza = pizza;
    }

    abstract prepare(): void;
}
