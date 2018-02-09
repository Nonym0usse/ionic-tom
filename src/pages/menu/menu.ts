/**
 * @Author: CYRIL VELLA
 * @Date:   2018-01-19T23:40:18+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   CYRIL VELLA
 * @Last modified time: 2018-02-09T20:57:21+01:00
 */



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutPage } from '../ajout/ajout';
import { MentionsPage } from '../mentions/mentions';

/**
* Generated class for the MenuPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: "Ajouter une boisson", component: AjoutPage},
      {title: "Mentions légales", component: MentionsPage}
    ];

  }

  openPage(page) {
    this.navCtrl.push(page.component);
  }
}
