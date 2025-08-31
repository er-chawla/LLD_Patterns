import { Stock } from '../subject/stockSubject';

export interface Observer {
    id: string;
    update(stock: Stock): void;
}
