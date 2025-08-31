import { WeatherStation } from './weatherStation';

export function run() {
    const station = new WeatherStation();
    station.main();
}

run();
