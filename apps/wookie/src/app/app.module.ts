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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    PlanetsListComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
