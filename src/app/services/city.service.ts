import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";

// Class
import { City } from '../classes/city';

@Injectable()
export class CityService {


  private readonly URL = "http://localhost:58066/api/cities"
  constructor(private httpClient: HttpClient) { }

  public create(cityName: string): Observable<City> {    
    return this.httpClient.post<City>(this.URL, `=${cityName}`,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      });
  }

  public delete(id: number): Observable<City> {
    return this.httpClient.delete<City>(`${this.URL}/${id}`);
  }

  public update(city: City): Observable<City> {
    return this.httpClient.put<City>(`${this.URL}`, city);
  }

  public getAll(): Observable<Array<City>> {
    return this.httpClient.get<Array<City>>(this.URL);
  }

  public get(id: number): Observable<City> {
    return this.httpClient.get<City>(`${this.URL}/${id}`);
  }
}
