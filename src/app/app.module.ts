import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CityService } from './services/city.service';
import { HistoryService } from './services/history.service';
import { ForecastService } from './services/forecast.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HistoryComponent } from './history/history.component';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityDetailsComponent,
    DashboardComponent,
    HistoryComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [CityService, HistoryService, ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
