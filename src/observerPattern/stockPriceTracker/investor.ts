import { Observer } from './observer/observer';
import { v4 } from 'uuid';
import { Stock } from './subject/stockSubject';

export class Investor implements Observer {
    id: string;
    private name: string;
    constructor(name: string) {
        this.name = name;
        this.id = v4();
    }

    update(stock: Stock): void {
        console.log(
            `${this.name} notified: ${stock.symbol} is now $${stock.getPrice()}`
        );
    }
}
