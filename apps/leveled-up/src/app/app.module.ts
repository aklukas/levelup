import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CandleComponent } from './candle/candle.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDEiM-k4XOmvgUV618-TUx3SMQOftGlug",
  authDomain: "candlelight-d0a09.firebaseapp.com",
  databaseURL: "https://candlelight-d0a09.firebaseio.com",
  projectId: "candlelight-d0a09",
  storageBucket: "",
  messagingSenderId: "16104895339"
};

@NgModule({
  declarations: [AppComponent, CandleComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
