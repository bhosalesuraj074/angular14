import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  createForm(){
        
    user  : new  FormGroup({
         'userDetails' : new FormGroup({
                'fullName' : new FormControl(),
                'birthday' : new FormControl(),
                'gender' : new FormControl(),
                'country' : new FormControl(),
                'phone'  : new FormControl(),
                'bio' : new FormControl(),
         }),

         'accountDetails' : new FormGroup({
            'userName' : new FormControl(),
            'email': new FormControl(),
            'password' : new FormControl(),
            'confirmPassword' : new FormControl(),
         })

            
    })
  }

}
