/**
* @Author: CYRIL VELLA <Nonym0usse>
* @Date:   2018-01-19T22:18:19+01:00
* @Email:  cyril.vella@yahoo.com
 * @Last modified by:   CYRIL VELLA
 * @Last modified time: 2018-02-25T11:03:24+01:00
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE: string = 'data.db';

@IonicPage()
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {

  private db: SQLiteObject;
  boisson = [];
  boisson2 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.createDatabaseFile();
  }

  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE,
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      console.log('Bdd créée !');
      this.db = db;
      this.createTable();
    })
    .catch(e => console.log(e));
  }

  private createTable()
  {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `Boisson` ( `idBoisson` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `nom` TEXT NOT NULL, `prix` NUMERIC, `description` TEXT, `pompe1` INTEGER, `pompe2` INTEGER, `photo` TEXT, `actif` INTEGER NOT NULL, `EstAlcoolisee` INTEGER NOT NULL )', {})
    .then(() => console.log('Table created'))
    .catch(e => console.log(e));
  }

  ajout()
  {
    if(this.boisson['actif'] == true)
    {
      this.boisson['actif'] = 1;
    }else{
      this.boisson['actif'] = 0;
    }

    if(this.boisson['EstAlcoolisee'] == true)
    {
      this.boisson['EstAlcoolisee'] = 1;
    }else{
      this.boisson['EstAlcoolisee'] = 0;
    }

    this.boisson['photo'] = "test";

    this.db.executeSql('INSERT INTO `Boisson` (nom, prix, description, pompe1, pompe2, photo, actif, EstAlcoolisee) VALUES (\'' + this.boisson['nom'] + '\', '+ parseFloat(this.boisson['prix']) +', \''+ this.boisson['description'] +'\', '+ parseInt(this.boisson['pompe1']) +', '+ parseInt(this.boisson['pompe2']) +', \''+ this.boisson['photo'] +'\', '+ this.boisson['actif'] +', '+ this.boisson['EstAlcoolisee'] +', last_insert_rowid())', {})
    .then(() => console.log('INSERT : OK'))
    .catch(e => console.log(e));
  }

  displayBoisson()
  {
    this.boisson2 = [];
    this.db.executeSql('SELECT name FROM `Boisson`', {})
    .then((data) => {
      console.log(data);
    });
  }
}
