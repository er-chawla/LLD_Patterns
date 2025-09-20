import { PizzaFactory } from './pizzaFactory';
import { PizzaStore } from './pizzaStore';
import { PizzaType } from './pizzaType';

const pizza = new PizzaStore(new PizzaFactory());
pizza.orderPizza(PizzaType[process.argv[2] as keyof typeof PizzaType]);
