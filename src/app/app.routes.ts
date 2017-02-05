import { Routes } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent }
];
