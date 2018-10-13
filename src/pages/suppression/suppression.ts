import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoissonProvider } from '../../providers/boisson/boisson';

/**
 * Generated class for the SuppressionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suppression',
  templateUrl: 'suppression.html',
})
export class SuppressionPage {
  mypizza: any;
  mypizzadelete: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizza: BoissonProvider) {
    
  }


  suppression(myid: number)
  {

  }
}
