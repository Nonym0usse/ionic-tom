/**
 * @Date:   2018-01-19T22:18:19+01:00
 * @Last modified time: 2018-02-25T00:33:32+01:00
 */



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza'


/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  */

  @Injectable()
  export class PizzaServiceProvider {

    private url = "http://kim.jcatania.io:3000/pizza/"

    constructor(private http: HttpClient)
    {
        console.log('Hello PizzaServiceProvider Provider');
    }

    sayHello(id: number){
      console.log("sayHello('" + id + "')");
    }

    get()
    {
    let rt: Array<Pizza> = new Array<Pizza>();
    return new Promise<Array<Pizza>>(
      resolve => {
        this.http.get(this.url).subscribe((data:Array<any>) => {

         for(let i=0; i < data.length; i++){
            rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']))
          }
            resolve(rt);});
      });
    }

    getByiD(id: number)
    {
      return new Promise(resolve =>{
        this.http.get(this.url)
        .subscribe((data:Pizza)=>{
          resolve(new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price']))
        })
      })
    }

    delete(id: number)
    {
      return new Promise(resolve =>{
        this.http.delete(this.url + id).subscribe(
            resp => console.log('deleted'),
            error => console.log('Impossible de supprimer.')
        );
      })
    }

    add(id, name, desc, picture, price)
    {
      return new Promise(resolve =>{

      })
    }
  }
