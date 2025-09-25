import { PizzaIngredientFactory } from '../pizzaIngredients/pizzaIngredientFactory';
import { Pizza } from './pizza';

export class CheesePizza extends Pizza {
    pizzaIngredientFactory: PizzaIngredientFactory;

    constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
        super();
        this.pizzaIngredientFactory = pizzaIngredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.pizzaIngredientFactory.createDough();
        this.pizzaIngredientFactory.createSauces();
        this.pizzaIngredientFactory.createCheese();
    }
}
