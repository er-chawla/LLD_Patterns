import type { WeatherContract } from '../contract/weatherContract';

export interface Observer {
    id: string;
    update(weatherInfo: WeatherContract): void;
}
