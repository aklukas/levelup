import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from '@levelup/app-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsService } from './shared/planets.service';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';
import { SpaceshipListComponent } from './spaceships/spaceship-list/spaceship-list.component';
import { SpaceshipDetailComponent } from './spaceships/spaceship-detail/spaceship-detail.component';
import { SpaceshipService } from './shared/spaceship.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    PlanetsListComponent,
    PlanetDetailComponent,
    SpaceshipsComponent,
    SpaceshipListComponent,
    SpaceshipDetailComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlanetsService, SpaceshipService],
  bootstrap: [AppComponent]
})
export class AppModule {}
