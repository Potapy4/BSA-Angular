import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  private weather: object; // From API
  private cityName: string;

  constructor(private forecastService: ForecastService, private location: Location) { }

  public getWeather() {
    this.forecastService.get(this.cityName).subscribe(val => this.weather = val);
  }

  goBack(): void {
    this.location.back();
  }

}
