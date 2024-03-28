import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  validateUser(username:string, password:string): boolean {
   console.log('service called');
   
     if(username == 'suraj@gmail.com' &&  password == '1234')
     {
      localStorage.setItem('username',username);
      return true;
     }
     else{
      return false;
     }
  }

  logOut(){
    localStorage.removeItem('username');
  }
}
