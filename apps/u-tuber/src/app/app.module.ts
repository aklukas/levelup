import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { AppMaterialModule } from '@levelup/app-material.module';
import { MainDashComponent } from './main-dash/main-dash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeService } from './shared/youtube.service';
import { VideoListComponent } from './main-dash/video-list/video-list.component';
import { VideoDetailsComponent } from './main-dash/video-details/video-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainDashComponent, VideoListComponent, VideoDetailsComponent],
  imports: [
    BrowserModule,
    AppMaterialModule,
    NxModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
