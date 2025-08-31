import type { WeatherContract } from '../contract/weatherContract';
import type { Observer } from '../observer/observer';
import type { WeatherData } from '../subject/weatherData';
import type { DisplayElement } from './displayElement';

export class StatisticsDisplay implements DisplayElement, Observer {
    id: string;
    private maxTemp: number = 0.0;
    private minTemp: number = 200;
    private tempSum: number = 0.0;
    private numReadings: number = 0;
    constructor(weatherData: WeatherData) {
        this.id = new Date().getTime().toString();
        weatherData.registerObserver(this);
    }
    update(weatherInfo: WeatherContract): void {
        const { temperature } = weatherInfo;
        this.tempSum += temperature;
        this.numReadings++;

        if (temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }

        if (temperature < this.minTemp) {
            this.minTemp = temperature;
        }
    }
    display(): void {
        console.log(
            `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
                this.maxTemp
            }/${this.minTemp}`
        );
    }
}
