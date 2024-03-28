import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkUserNameandPwd(username: any, password: any) {

    if (username == 'codemind@gmail.com' && password == '1234567') {
      localStorage.setItem('tokenkey', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
