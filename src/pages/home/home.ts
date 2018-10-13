/**
* @Author: VELLA CYRIL <nonym0usse>
* @Date:   2018-02-10T15:50:28+01:00
* @Email:  contact@vella.fr
* @Last modified by:   nonym0usse
* @Last modified time: 2018-03-08T13:29:48+01:00
*/



import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoissonProvider } from '../../providers/boisson/boisson';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  boissons: any;

  constructor(public navCtrl: NavController, private boisson: BoissonProvider) {
    this.boisson.gete().then((items: Array<any>) => {
      this.boissons = items;
    });
  }

  choisir(){
    //this.navCtrl.push(FicheBoisson);
  }

}
