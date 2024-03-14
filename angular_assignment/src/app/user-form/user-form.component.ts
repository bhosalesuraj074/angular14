import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user !:FormGroup ;
  textLength = 0
  texts: string = '';
  selectedCountry = 'India'
  setCountryCode = '+91 - ';
  constructor() {
    this.createForm();
   }

  ngOnInit(): void {
   
  }
  countries = [
    { name: 'United States', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'India', code: '+91' },
    // Add more countries as needed
  ];
  
  createForm(){
        
    this.user = new  FormGroup({
         'userDetails' : new FormGroup({
                'fullName' : new FormControl('', [Validators.required]),
                'birthday' : new FormControl('', [Validators.required]),
                'gender' : new FormControl('',[Validators.required]),
                'country' : new FormControl('', [Validators.required]),
                'phone'  : new FormControl(),
                'bio' : new FormControl('', [Validators.required]),
         }),

         'accountDetails' : new FormGroup({
            'userName' : new FormControl(),
            'email': new FormControl(),
            'password' : new FormControl(),
            'confirmPassword' : new FormControl(),
         })

            
    })
  }
  // bioTextCounter(){
  //   this.textLength  = this .texts.length;
  // }
  selectCountryCode(){
    this.setCountryCode = '';
    console.log('selectedCountry : ', this.selectedCountry);
    let cc= this.countries.filter(country =>{
       return country.name == this.selectedCountry
    })
    this.setCountryCode = cc[0].code + ' - ';
  }
}
