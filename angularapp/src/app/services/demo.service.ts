import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  myCustomObs = new Observable<string>((observer) => {
    console.log('Observable start');
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
    observer.next('5')
    
  })

  constructor(private _httpClient:HttpClient) { }
  reverseString(input: string) {
    let reverse = '';
    for(let i = input.length - 1 ; i >= 0 ; i--) {

        reverse += input[i];
    }

    return reverse;
  }

  getTodos() : Observable<any> {
    // making get call to web server(jsonplaceholder)
  return  this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
