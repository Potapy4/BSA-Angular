import { City } from './City';
import { List } from './List';

export class ForecastData {
    City: City;
    Cod: string;
    Message: number;
    Cnt: number;
    list: List[];
}
