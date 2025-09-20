import { Pizza } from './pizza';
import { CheeseBustPizza } from './pizzas/cheeseBustPizza';
import { VeggiesCheesePizza } from './pizzas/veggiesCheesePizza';
import { PizzaType } from './pizzaType';
import { Cheese } from './toppings/cheese';
import { Veggies } from './toppings/veggies';

export class PizzaFactory {
    createPizza(type: PizzaType) {
        let pizza: Pizza;
        switch (type) {
            case PizzaType.CheeseBustPizza:
                pizza = new CheeseBustPizza();
                pizza = new Cheese(pizza);
                return pizza;
            case PizzaType.VeggiesCheesePizza:
                pizza = new VeggiesCheesePizza();
                pizza = new Veggies(pizza);
                pizza = new Cheese(pizza);
                return pizza;
        }
    }
}
