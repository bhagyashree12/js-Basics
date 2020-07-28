import { Injectable } from '@angular/core';
//in order to use api used httpCLient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // myMethod() {
  //   return console.log("hello world");
  // }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')  }
}
