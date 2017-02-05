import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { PeopleService } from './people/shared/people.service';
import { HighlightDirective } from './people/shared/highlight.directive';
import { InViewport } from './people/shared/in-viewport.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PlanetsComponent } from './planets/planets.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HomeComponent,
    PlanetsComponent,
    HighlightDirective,
    InViewport
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
