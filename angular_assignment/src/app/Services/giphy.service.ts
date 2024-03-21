import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
 
  giphyUrl = 'https:/api.giphy.com/v1/gifs/search';

  constructor(private _httpClient : HttpClient) { }

  getGifs(search:string){  
    console.log('service called', search);
    
    let param =new HttpParams();
    param= param.append('api_key','2yCqxp49V25HEQpOinB55WKQm8xE2E3Q');
    param= param.append('q',search);
    param= param.append('limit','12');
    param= param.append('rating','g');
    return this._httpClient.get(this.giphyUrl,{params:param})
  }
}
