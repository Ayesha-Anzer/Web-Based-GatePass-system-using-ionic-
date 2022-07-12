import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { AddGatePassPage} from '../pages/add-gate-pass/add-gate-pass';
import {GateGuardPage} from "../pages/gate-guard/gate-guard";

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {

  apiKey: "AIzaSyB9Qe3Y_SkKW1cK3LAlFjYWtJUXuiIzC3k",
  authDomain: "gatepass-336.firebaseapp.com",
  databaseURL: "https://gatepass-336.firebaseio.com",
  projectId: "gatepass-336",
  storageBucket: "gatepass-336.appspot.com",
  messagingSenderId: "650496318022"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddGatePassPage,
    GateGuardPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    //added
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    //added
    LoginPage,
    AddGatePassPage,
    GateGuardPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //added
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
