/**
 * @Author: CYRIL VELLA <Nonym0usse>
 * @Date:   2018-01-19T22:18:19+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   CYRIL VELLA
 * @Last modified time: 2018-02-10T15:16:49+01:00
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AjoutPage } from '../pages/ajout/ajout';
import { SuppressionPage } from '../pages/suppression/suppression';
import { ModificationPage } from '../pages/modification/modification';
import { MenuPage } from '../pages/menu/menu';
import { MentionsPage } from '../pages/mentions/mentions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite';
import { BoissonProvider } from '../providers/boisson/boisson';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SuppressionPage,
    ModificationPage,
    AjoutPage,
    MenuPage,
    MentionsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    SuppressionPage,
    ModificationPage,
    AjoutPage,
    MentionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BoissonProvider
  ]
})
export class AppModule {}
