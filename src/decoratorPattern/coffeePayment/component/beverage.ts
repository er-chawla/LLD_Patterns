import { Size } from './type';

export abstract class Beverage {
    description: string = 'Unknown description';
    size: Size = Size.MEDIUM;
    getDescription(): string {
        return this.description;
    }

    setSize(size: Size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    abstract cost(): number;
}
