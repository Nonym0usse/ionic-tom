import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

back: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.back;
  }

  user = [];

  admin()
  {
    if(this.user['title'] === "admin" && this.user['password'] === "admin")
      {
        this.navCtrl.push(MenuPage);
      }else
      {
        this.back = "Mauvais identifiants ou mot de passe";
      }
  }
}
