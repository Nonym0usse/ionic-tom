import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  parameters: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.parameters = [
      {name: "Espace administrateur", shortdescription: "This is a soft drink made with sugar and edulcorants", chemin: "<ion-card><img src='../assets/imgs/coca.jpg'/></ion-card>"},
      {name: "A propos de l'application", shortdescription: "This is a soft drink made with taurine and sugar", chemin: "<ion-card><img src='../assets/imgs/redbull.jpg'/></ion-card>"},
      {name: "Mentions légales", shortdescription: "This is a soft drink made with orange pulpe and sugar", chemin: "  <ion-card><img src='../assets/imgs/orangina.jpg'/></ion-card>"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  close(){
    this.view.dismiss();
  }

}
