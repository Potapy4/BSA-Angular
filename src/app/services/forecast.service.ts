import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";

import { ForecastData } from '../classes/forecast/forecast-data';

@Injectable()
export class ForecastService {
  private readonly URL = "http://localhost:58066/api/forecast"
  constructor(private httpClient: HttpClient) { }

  public get(city: string, days: number = 7): Observable<ForecastData> {
    // http://localhost:58066/api/forecast?city=Lviv&days=3
    return this.httpClient.get<ForecastData>(`${this.URL}?city=${city}&days=${days}`);
  }
}
