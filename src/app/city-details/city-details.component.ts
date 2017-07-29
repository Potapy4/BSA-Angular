import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import { City } from '../classes/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  private city: City;

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.cityService.get(+params.get('id')))
      .subscribe(hero => this.city = hero);
  }

  save(): void {
    this.cityService.update(this.city).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
