import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  private apiLien = "https://localhost:3500/api";

  constructor( public http:HttpClient ) {}

  get(dossier, id?){

    let url = this.apiLien + dossier ;
    if (id)
      url = url + id;
    console.log('url rest -> ' + url)

    return new Promise((resolve,reject) => {
      this.http.get(url).subscribe( data => {
        console.log('data', data)
        if (data['success'])
          resolve(data)
        else
          reject('error back side')
      },(err)=>{
        reject('error promise back side ')
      })
    })

  }

  put(dossier, id, data){

    let url = this.apiLien + dossier + id
    console.log('url post-> ' + url)

    return new Promise((resolve,reject) => {
      this.http.put(url, data).subscribe( data => {
        console.log('data', data)
        if (data['success'])
          resolve(data)
        else
          reject('error back side')
      },(err)=>{
        reject('error promise back side ')
      })
    })

  }

  post(dossier, data){

    let url = this.apiLien + dossier
    console.log('url post-> ' + url)

    return new Promise((resolve,reject) => {
      this.http.post(url, data).subscribe( data => {
        console.log('data', data)
        if (data['success'])
          resolve(data)
        else
          reject('error back side')
      },(err)=>{
        reject('error promise back side ')
      })
    })

  }


  del(dossier, id){

    let url = this.apiLien + dossier + id;
    console.log('url rest -> ' + url)

    return new Promise((resolve,reject) => {
      this.http.delete(url).subscribe( data => {
        console.log('data', data)
        if (data['success'])
          resolve(data)
        else
          reject('error back side')
      },(err)=>{
        reject('error promise back side ')
      })
    })

  }

  private handleError(error: any){
    console.error('An error occurred', error);
  }


}
