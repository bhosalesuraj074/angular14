import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  reverseString(input: string) {
    let reverse = '';
    for(let i = input.length - 1 ; i >= 0 ; i--) {

        reverse += input[i];
    }

    return reverse;
  }
}
