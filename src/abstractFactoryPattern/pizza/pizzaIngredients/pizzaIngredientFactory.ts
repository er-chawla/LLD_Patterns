import { Cheese, Clams, Dough, Pepperoni, Sauces } from './contract';
import { Veggies } from './contract/veggies';

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauces(): Sauces;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClams(): Clams;
}
