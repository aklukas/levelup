import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionListComponent } from './competitions/competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competitions/competition-detail/competition-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from '@levelup/app-material.module';
import { CompetitionsService } from './shared/competitions.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitionsComponent,
    CompetitionListComponent,
    CompetitionDetailComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CompetitionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
