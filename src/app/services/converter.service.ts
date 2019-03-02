import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  apiKey = '8137278e08fdd26d497d';
  URI: string = ' ';

  constructor(private http: HttpClient) {
    this.URI = `https://free.currencyconverterapi.com/api/v6/convert?compact=ultra&apiKey=${this.apiKey}&q=`
   }

   convert(from: string, to: string){
    return this.http.get(`${this.URI}${from}_${to}`);
   }
}
