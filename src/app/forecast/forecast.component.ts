import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ForecastService } from '../services/forecast.service';
import { ForecastData } from '../classes/forecast/forecast-data';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  private weather: ForecastData;
  private cityName: string;
  private selectedDays: null;
  private days = [1, 3, 5, 7];

  constructor(private forecastService: ForecastService, private location: Location) { }

  public getWeather() {
    this.forecastService.get(this.cityName, this.selectedDays).subscribe(val => this.weather = val);
  }

  goBack(): void {
    this.location.back();
  }

}
