import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
 url = 'https://en.wikipedia.org/w/api.php';
 constructor(private _httpClient: HttpClient) {

   }
  getInfo(){
    let  httpParam = new HttpParams(); 
    httpParam = httpParam.append('action', 'query')
    httpParam = httpParam.append('format', 'json')
    httpParam = httpParam.append('list', 'search')
    httpParam = httpParam.append('utf8', '1')
    httpParam = httpParam.append('srsearch','tesla')
    httpParam = httpParam.append('origin','*')
    return this._httpClient.get(this.url)
  }
}
