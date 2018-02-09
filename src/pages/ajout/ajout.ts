/**
 * @Author: CYRIL VELLA <Nonym0usse>
 * @Date:   2018-01-19T22:18:19+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   CYRIL VELLA
 * @Last modified time: 2018-02-09T21:19:21+01:00
 */



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
const DATABASE_FILE: string = "data.db";
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

  private db: SQLiteObject;

boisson = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.createDatabase();
  }

private createDatabase(){
  this.sqlite.create({
  name: DATABASE_FILE,
  location: 'default'
})
  .then((db: SQLiteObject) => {
    console.log('la base de donnée à ete crée');
    this.db = db;
    this.createTable();
  })
  .catch(e => console.log(e));
}

private createTable()
{
  this.db.executeSql('CREATE TABLE IF NOT EXISTS `Boisson` ( `idBoisson` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `nom` TEXT NOT NULL, `prix` NUMERIC, `description` TEXT, `pompe1` INTEGER, `pompe2` INTEGER, `photo` TEXT, `actif` INTEGER NOT NULL, `EstAlcoolisee` INTEGER NOT NULL )', {})
     .then(() => console.log('Executed SQL'))
     .catch(e => console.log(e));
}

  ajout()
  {
    console.log(this.boisson);
  }

}
