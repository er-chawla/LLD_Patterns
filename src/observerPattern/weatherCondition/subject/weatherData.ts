import type { WeatherContract } from '../contract/weatherContract';
import type { Observer } from '../observer/observer';
import type { Subject } from '../subject/subject';

export class WeatherData implements Subject {
    // Attributes
    private weatherInfo!: WeatherContract;

    // observers
    observers: Observer[];

    // Define Attribute at weather data initialization..
    constructor() {
        this.observers = [];
    }

    /// Get Weather Info

    getTemperature() {
        return this.weatherInfo.temperature;
    }

    getHumidity() {
        return this.weatherInfo.humidity;
    }

    getPressure() {
        return this.weatherInfo.pressure;
    }

    // Register new Observer
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter((o) => o.id !== observer.id);
    }
    notifyObserver(): void {
        for (let observer of this.observers) {
            observer.update(this.weatherInfo);
        }
    }

    measurementChanged() {
        this.notifyObserver();
    }

    setMeasurements(weatherInfo: WeatherContract) {
        this.weatherInfo = weatherInfo;
        this.measurementChanged();
    }
}
