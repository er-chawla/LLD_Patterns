import { EspressoBeverage } from './component/espressoBeverage';
import { MochaCondiments } from './decorators/mochaCondiments';
import { SoyCondiments } from './decorators/soyCondiment';

let espresso = new EspressoBeverage();
espresso = new MochaCondiments(espresso);
espresso = new MochaCondiments(espresso);
console.log(espresso.getDescription() + ' cost: $' + espresso.cost());
