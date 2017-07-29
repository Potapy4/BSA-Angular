import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityListComponent } from '../city-list/city-list.component'
import { CityDetailsComponent } from '../city-details/city-details.component'
import { DashboardComponent } from '../dashboard/dashboard.component'
import { ForecastComponent } from '../forecast/forecast.component'

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forecast', component: ForecastComponent },
    { path: 'edit/:id', component: CityDetailsComponent },
    { path: 'cities', component: CityListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }