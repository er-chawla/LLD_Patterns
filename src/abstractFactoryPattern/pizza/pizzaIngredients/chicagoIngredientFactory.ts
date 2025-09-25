import { Dough, Sauces, Cheese, Clams, Pepperoni } from './contract';
import { Veggies } from './contract/veggies';
import {
    BlackOlives,
    EggPlant,
    FreshClams,
    FrozenClams,
    MozzarellaCheese,
    PlumTomatoSauce,
    SlicedPepperoni,
    Spanish,
    ThickCrushDough,
} from './ingredients';
import { PizzaIngredientFactory } from './pizzaIngredientFactory';

export class ChicagoIngredientFactory implements PizzaIngredientFactory {
    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    createDough(): Dough {
        return new ThickCrushDough();
    }
    createSauces(): Sauces {
        return new PlumTomatoSauce();
    }
    createCheese(): Cheese {
        return new MozzarellaCheese();
    }
    createVeggies(): Veggies[] {
        return [new BlackOlives(), new Spanish(), new EggPlant()];
    }
    createClams(): Clams {
        return new FrozenClams();
    }
}
