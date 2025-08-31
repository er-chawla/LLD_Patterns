import { Observer } from '../observer/observer';
import { Subject } from './subject';

export class Stock implements Subject {
    private observers: Observer[];

    public symbol: string;
    private price!: number;
    constructor(symbol: string) {
        this.symbol = symbol;
        this.observers = [];
    }
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter((o) => o.id != observer.id);
    }
    notifyObserver(): void {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    priceChanged() {
        this.notifyObserver();
    }

    updateNewStockPrice(price: number) {
        this.price = price;
        this.priceChanged();
    }

    getPrice() {
        return this.price;
    }
}
