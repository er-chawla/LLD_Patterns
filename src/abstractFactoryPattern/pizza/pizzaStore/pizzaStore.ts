import { Pizza } from '../component/pizza';

export abstract class PizzaStore {
    pizza!: Pizza;

    orderPizza(type: string) {
        this.pizza = this.createPizza(type);

        this.pizza.prepare();
        this.pizza.bake();
        this.pizza.cut();
        this.pizza.box;
    }

    abstract createPizza(type: string): Pizza;
}
