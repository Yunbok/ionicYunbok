import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import {LoginPageModule} from '../pages/login/login.module';
import { InfoPageModule} from '../pages/info/info.module'
import {NextPageModule} from '../pages/next/next.module';
import {CctvPageModule} from '../pages/cctv/cctv.module';
import {NotificationPageModule} from '../pages/notification/notification.module';
import { UserListPageModule } from '../pages/user-list/user-list.module';
import { HomePage } from '../pages/home/home';

import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    CctvPageModule,
    HttpClientModule,
    InfoPageModule,
    NotificationPageModule,
    UserListPageModule,
    LoginPageModule,
    HttpModule,
    NextPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  ]
})
export class AppModule {}
