import type { WeatherContract } from './contract/weatherContract';
import { CurrentConditionDisplay } from './elements/currentConditionDisplay';
import { StatisticsDisplay } from './elements/statisticsDisplay';
import { WeatherData } from './subject/weatherData';

export class WeatherStation {
    main() {
        const weatherData: WeatherData = new WeatherData();

        const currentCondition = new CurrentConditionDisplay(weatherData);
        const statisticsDisplay = new StatisticsDisplay(weatherData);
        const newData: WeatherContract = {
            temperature: 80,
            humidity: 60,
            pressure: 30.4,
        };
        weatherData.setMeasurements(newData);
        weatherData.removeObserver(currentCondition);

        const newData1: WeatherContract = {
            temperature: 81,
            humidity: 65,
            pressure: 45.5,
        };
        weatherData.setMeasurements(newData1);
    }
}
