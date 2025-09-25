import { Dough, Sauces, Cheese, Clams, Pepperoni } from './contract';
import { Veggies } from './contract/veggies';
import {
    ThinCrushDough,
    MarinaraSauce,
    ReggianoCheese,
    Onion,
    Mushroom,
    Garlic,
    RedPepper,
    FreshClams,
    SlicedPepperoni,
} from './ingredients';
import { PizzaIngredientFactory } from './pizzaIngredientFactory';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    createDough(): Dough {
        return new ThinCrushDough();
    }
    createSauces(): Sauces {
        return new MarinaraSauce();
    }
    createCheese(): Cheese {
        return new ReggianoCheese();
    }
    createVeggies(): Veggies[] {
        return [new Onion(), new Mushroom(), new Garlic(), new RedPepper()];
    }
    createClams(): Clams {
        return new FreshClams();
    }
}
