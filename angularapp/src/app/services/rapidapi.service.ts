import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
 
  url= 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete'
  headers= {
    'X-RapidAPI-Key': 'ef9a6584c7msh2763721653de3e1p1f894ejsn7355c4285210',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
  constructor(private _httpClient : HttpClient) { }

  getYahooFinance(serach:string){
    let param  = new HttpParams();
    param =param.append('q',serach),
    param =param.append('region', 'US')
    let header = new HttpHeaders({
      'X-RapidAPI-Key': 'ef9a6584c7msh2763721653de3e1p1f894ejsn7355c4285210',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    });
    return this._httpClient.get(this.url, {headers: header, params: param})
    
  }


}
