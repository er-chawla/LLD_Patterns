import { CheesePizza } from '../component/cheesePizza';
import { ClamPizza } from '../component/clamPizza';
import { Pizza } from '../component/pizza';
import { ChicagoIngredientFactory } from '../pizzaIngredients/chicagoIngredientFactory';
import { PizzaIngredientFactory } from '../pizzaIngredients/pizzaIngredientFactory';
import { PizzaStore } from './pizzaStore';

export class ChicagoPizzaStore extends PizzaStore {
    pizzaIngredientFactory: PizzaIngredientFactory;
    constructor() {
        super();
        this.pizzaIngredientFactory = new ChicagoIngredientFactory();
    }
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new CheesePizza(this.pizzaIngredientFactory);
        } else {
            return new ClamPizza(this.pizzaIngredientFactory);
        }
    }
}
