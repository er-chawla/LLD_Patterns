import { Investor } from './investor';
import { Stock } from './subject/stockSubject';
import { USER_STOCKS } from './userStocks';

export function run() {
    let stocks: Map<string, Stock>;
    //Registered all stock and their investor.
    stocks = initStocks();

    //Suppose Reliance industry price change so all investor get notifications

    stocks.get('RIL')?.updateNewStockPrice(1200);

    // Now NTPC insdustry price change so all investor get notifications

    stocks.get('NTPC')?.updateNewStockPrice(310);
}

function initStocks() {
    let stocks: Map<string, Stock> = new Map<string, Stock>();
    for (let user of USER_STOCKS) {
        const investor = new Investor(user.name);
        for (let stock of user.stocks) {
            if (!stocks.has(stock.symbol)) {
                stocks.set(stock.symbol, new Stock(stock.symbol));
            }
            stocks.get(stock.symbol)?.registerObserver(investor);
        }
    }
    return stocks;
}

run();
