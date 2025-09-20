import { Pizza } from '../pizza';
import { Cheese } from '../toppings/cheese';

export class CheeseBustPizza extends Pizza {
    constructor() {
        super('cheeseBust');
    }
    prepare(): void {
        this.startPreparation();
    }
}
