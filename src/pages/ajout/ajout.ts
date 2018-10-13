/**
* @Author: CYRIL VELLA <Nonym0usse>
* @Date:   2018-01-19T22:18:19+01:00
* @Email:  cyril.vella@yahoo.com
* @Last modified by:   nonym0usse
* @Last modified time: 2018-03-05T17:11:01+01:00
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { BoissonProvider } from '../../providers/boisson/boisson';
import { Boisson } from '../../models/boisson';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {


  boisson2 : Boisson = new Boisson();
  boisson = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private boiss: BoissonProvider) {
  }

  add()
  {
    this.boisson2.nom = this.boisson['nom'];
    this.boisson2.description = this.boisson['description'];
    this.boisson2.prix = this.boisson['prix'];

    this.boiss.addBoisson(this.boisson2).then((item) =>{
      this.navCtrl.push(HomePage);
    });
  }

}
