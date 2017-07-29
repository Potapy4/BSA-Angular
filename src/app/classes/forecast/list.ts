import { Temp } from './Temp';
import { Weather } from './Weather';

export class List {
    Dt: number;
    Temp: Temp;
    Pressure: number;
    Humidity: number;
    Weather: Weather[];
    Speed: number;
    Deg: number;
    Clouds: number;
    Rain: number;
}
