import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { City } from '../classes/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  private cities: City[];
  private cityName: string;
  private selectedCity: City;

  constructor(private cityService: CityService, private router: Router, private location: Location) { }

  private getCities() {
    this.cityService.getAll().subscribe(val => this.cities = val);
  }

  ngOnInit() {
    this.getCities();
  }

  onSelect(city: City): void {
    this.selectedCity = city;
  }

  goBack(): void {
    this.location.back();
  }

  addCity(): void {
    this.cityService.create(this.cityName).subscribe(x => this.getCities());
  }

  editCity(): void {
    this.router.navigate(['/edit', this.selectedCity.id]);
  }

  private removeSelectedCity() {
    let index = this.cities.indexOf(this.selectedCity, 0);
    if (index > -1) {
      this.cities.splice(index, 1);
      this.selectedCity = null;
    }
  }

  deleteCity(): void {
    this.cityService.delete(this.selectedCity.id).subscribe(x => this.removeSelectedCity());
  }

}
