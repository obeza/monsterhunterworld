import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import * as data from './monsters.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  monsters:any
  searchText:string
  espece: string
  image: string
  showImage: boolean
  monstre: any

  constructor(
    private _http: HttpClient
  ){
    this.searchText = ""
    this.showImage = false
    this.image = "./assets/images/monster.jpg"
    this.espece = "all"
    this.monsters = this.loadMonster().then( (res:any) => res.monsters)
    console.log('monsters', this.monsters)
  }

  async onMySelectChange(){
    console.log('onMySelectChange', this.espece)
    this.monsters = await this.loadMonster()
    if (this.espece !=="all")
      this.monsters = this.monsters.filter( item => item.espece.includes( this.espece ))
    console.log('this.monsters', this.monsters)
  }
  
  showImageClick( item ){
    console.log('showImage', item)
    //this.image = item.image
    this.monstre = item
    this.showImage = true
  }

  hideImageClick(){
    this.showImage = false
  }

  loadMonster(){
    return new Promise((resolve,reject) => {
      this._http.get("./assets/monsters.json").subscribe( data => {
        console.log('data', data)

        resolve(data)

      },(err)=>{
        reject('error load json file...')
      })
    }) 
  }
}
