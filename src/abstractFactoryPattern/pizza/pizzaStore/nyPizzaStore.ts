import { CheesePizza } from '../component/cheesePizza';
import { ClamPizza } from '../component/clamPizza';
import { Pizza } from '../component/pizza';
import { NYPizzaIngredientFactory } from '../pizzaIngredients/nyPizzaIngredientFactory';
import { PizzaStore } from './pizzaStore';

export class NyPizzaStore extends PizzaStore {
    nyPizzaIngredientFactory: NYPizzaIngredientFactory;
    constructor() {
        super();
        this.nyPizzaIngredientFactory = new NYPizzaIngredientFactory();
    }
    createPizza(type: string): Pizza {
        if (type === 'Cheese') {
            return new CheesePizza(this.nyPizzaIngredientFactory);
        } else {
            return new ClamPizza(this.nyPizzaIngredientFactory);
        }
    }
}
