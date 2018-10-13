/**
* @Author: CYRIL VELLA
* @Date:   2018-09-30T16:24:38+02:00
* @Email:  cyril.vella@yahoo.com
* @Last modified by:   CYRIL VELLA
* @Last modified time: 2018-09-30T17:06:46+02:00
* @Copyright: Drink-It
*/



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boisson } from '../../models/boisson';

/*
Generated class for the EtablissementProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class BoissonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello etablissement Provider');
  }

  private readonly url = "http://www.drinkit.fr/api/boisson/listBoisson.php?boisson=1";
  private add = "http://www.drinkit.fr/api/boisson/newBoisson.php";


  addBoisson(boisson: Boisson)
  {

    return new Promise<Boisson>(
      resolve => {
        this.http.post(this.add, boisson).subscribe((data:any) => {
          resolve();
        });
      });
    }

    gete(){

      let rt: Array<Boisson> = new Array<Boisson>();
      return new Promise<Array<Boisson>>(
        resolve => {
          this.http.get(this.url).subscribe((data:Array<any>) => {
            console.log(data);
            for(let i=0; i<data.length; i++){
              rt.push(new Boisson(data[i]['idBoisson'], data[i]['nom'], data[i]['description'], data[i]['prix']))
            }
            resolve(rt);});
          });
        }

      }
