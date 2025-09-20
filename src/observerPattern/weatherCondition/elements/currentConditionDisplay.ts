import type { WeatherContract } from '../contract/weatherContract';
import type { DisplayElement } from './displayElement';
import type { Observer } from '../observer/observer';
import type { WeatherData } from '../subject/weatherData';
import { v4 } from 'uuid';

export class CurrentConditionDisplay implements Observer, DisplayElement {
    id: string;
    private temperature!: number;
    private humidity!: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.id = v4();
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(weatherInfo: WeatherContract): void {
        this.temperature = weatherInfo.pressure;
        this.humidity = weatherInfo.humidity;
        this.display();
    }
    display(): void {
        Number.MIN_SAFE_INTEGER;
        console.log(
            `Current condition: + ${this.temperature} + F degree and ${this.humidity} % humidity`
        );
    }
}
