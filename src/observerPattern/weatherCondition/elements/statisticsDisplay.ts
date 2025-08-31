import type { WeatherContract } from '../contract/weatherContract';
import type { Observer } from '../observer/observer';
import type { WeatherData } from '../subject/weatherData';
import type { DisplayElement } from './displayElement';
import { v4 } from 'uuid';
export class StatisticsDisplay implements DisplayElement, Observer {
    id: string;
    private maxTemp: number = 0.0;
    private minTemp: number = 200;
    private tempSum: number = 0.0;
    private numReadings: number = 0;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.id = v4();
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
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
        this.display();
    }
    display(): void {
        console.log(
            `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
                this.maxTemp
            }/${this.minTemp}`
        );
    }
}
