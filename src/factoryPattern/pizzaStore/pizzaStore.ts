import { Pizza } from './pizza';
import { PizzaFactory } from './pizzaFactory';
import { PizzaType } from './pizzaType';

export class PizzaStore {
    pizzaFactory: PizzaFactory;
    constructor(pizzaFactory: PizzaFactory) {
        this.pizzaFactory = pizzaFactory;
    }

    orderPizza(type: PizzaType) {
        const pizza = this.pizzaFactory.createPizza(type);
        pizza.prepare();
        pizza.baking();
        pizza.cutting();
        pizza.boxing();
    }
}
