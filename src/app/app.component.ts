/**
 * @Author: CYRIL VELLA
 * @Date:   2018-01-19T22:18:19+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   CYRIL VELLA
 * @Last modified time: 2018-02-25T00:32:44+01:00
 */



import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SuppressionPage } from '../pages/suppression/suppression';
import { ModificationPage } from '../pages/modification/modification';
import { AjoutPage } from '../pages/ajout/ajout';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Espace administrateur', component: ListPage },
      { title: 'Mentions légales', component: SuppressionPage}
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
