import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';
import { DevListComponent } from './developers/dev-list/dev-list.component';
import { DevDetailComponent } from './developers/dev-detail/dev-detail.component';
import { DevelopersService } from './shared/developers.service';
import { AppRouterModule } from './app-router.module';
import { AppMaterialModule } from '@levelup/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevelopersComponent,
    DevListComponent,
    DevDetailComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRouterModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DevelopersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
