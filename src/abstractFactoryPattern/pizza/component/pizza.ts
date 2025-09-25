import { Cheese, Clams, Dough, Sauces } from '../pizzaIngredients/contract';
import { Veggies } from '../pizzaIngredients/contract/veggies';

export abstract class Pizza {
    name!: string;

    dough!: Dough;
    sauces!: Sauces;
    cheese!: Cheese;

    veggies!: Veggies[];
    clam!: Clams;

    abstract prepare(): void;

    bake(): void {
        console.log('Bake for 25 minutes at 350 degree');
    }

    cut(): void {
        console.log('cutting the pizza into diagonal slices');
    }

    box(): void {
        console.log('place pizza in official pizza store box');
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
