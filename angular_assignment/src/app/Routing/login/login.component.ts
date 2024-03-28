import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _shopping: ShoppingService, private _router : Router) { }

  ngOnInit(): void {
  }
 
  userLogin(username :string, password : string){
   let result= this._shopping.validateUser(username, password);
   if(result == true){
    this._router.navigate(['shopping/home']);
   }
   else{
    this._router.navigate(['shopping/login'])
   }
   

  }
}
