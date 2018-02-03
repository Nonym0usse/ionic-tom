/**
 * @Author: CYRIL VELLA <Nonym0usse>
 * @Date:   2018-01-19T22:18:19+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   Nonym0usse
 * @Last modified time: 2018-02-03T12:25:16+01:00
 */



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {

boisson = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ajout()
  {
    console.log(this.boisson);
  }

}
