import readline from 'node:readline';
import { NyPizzaStore } from './pizzaStore/nyPizzaStore';
import { ChicagoPizzaStore } from './pizzaStore/chicagoPizzaStore';
import { PizzaStore } from './pizzaStore/pizzaStore';

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve, reject) => rl.question(question, resolve));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let store = await askQuestion('Enter Store name ');
let pizzaType = await askQuestion('Enter Pizza name ');

rl.close();
function main() {
    let pizzaStore: PizzaStore;
    if (store === 'ny') {
        pizzaStore = new NyPizzaStore();
        pizzaStore.orderPizza(pizzaType);
    }
    if (store == 'ch') {
        pizzaStore = new ChicagoPizzaStore();
        pizzaStore.orderPizza(pizzaType);
    }
}

main();
