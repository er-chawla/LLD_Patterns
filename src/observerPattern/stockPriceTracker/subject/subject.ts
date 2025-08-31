import { Observer } from '../observer/observer';

export interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
}
