import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
myarray: any;

  constructor(public navCtrl: NavController, public modal: ModalController) {
    this.myarray = [
      {name: "Coca-cola", shortdescription: "This is a soft drink made with sugar and edulcorants", chemin: "<ion-card><img src='../assets/imgs/coca.jpg'/></ion-card>"},
      {name: "Red-bull", shortdescription: "This is a soft drink made with taurine and sugar", chemin: "<ion-card><img src='../assets/imgs/redbull.jpg'/></ion-card>"},
      {name: "Orangina", shortdescription: "This is a soft drink made with orange pulpe and sugar", chemin: "  <ion-card><img src='../assets/imgs/orangina.jpg'/></ion-card>"}
    ];
  }
  openModal()
  {
    const mymodal = this.modal.create('ModalPage');
    mymodal.present();
  }
}
