import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureListComponent } from './feature/feature-list/feature-list.component';
import { FeatureDetailComponent } from './feature/feature-detail/feature-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureService } from './shared/feature.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '@levelup/app-material.module';
import { CommentDetailComponent } from './feature/comment/comment-detail/comment-detail.component';
import { CommentComponent } from './feature/comment/comment.component';
import { CommentsService } from './shared/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    FeatureListComponent,
    FeatureDetailComponent,
    CommentDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [FeatureService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
