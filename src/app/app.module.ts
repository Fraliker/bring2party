import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';

import {PartiesApp} from './app.component';
import {UserService} from '../model/user.service';
import {PartyService} from '../pages/parties/party.service';
import {PartiesPageModule} from '../pages/parties/parties.module';

@NgModule({
  declarations: [
    PartiesApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(PartiesApp),
    PartiesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PartiesApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    PartyService
  ]
})
export class AppModule {
}
