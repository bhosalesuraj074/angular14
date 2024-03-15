import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
    { name: 'India', code: '+91' },
    { name: 'United States', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
  
    // Add more countries as needed
  ];
  
  createForm(){
        
    this.user = new  FormGroup({
         'userDetails' : new FormGroup({
                'fullName' : new FormControl('', [Validators.required]),
                'birthday' : new FormControl('', [Validators.required]),
                'gender' : new FormControl('',[Validators.required]),
                'country' : new FormControl('', [Validators.required]),
                'phone'  : new FormControl('', [Validators.required,this.phoneValidation]),
                'bio' : new FormControl('', [Validators.required]),
         }),

         'accountDetails' : new FormGroup({
            'userName' : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25), this.validateUserName]),
            'email': new FormControl('', [Validators.required, this.validateEmail]),
            'password' : new FormControl('' ,[Validators.required,Validators.minLength(5), this.validatePassword]),
            'confirmPassword' : new FormControl('', [Validators.required]),
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

  phoneValidation(phone: FormControl): ValidationErrors | null {
    let phoneno: string = phone.value;
    let actual = phoneno.split(' - ');
  

    if (typeof actual[1] === 'string') {
      // console.log('number length', actual[1].length);
  
      if (actual[1] == '') {
        return { requiredNumber: true };
      }
  
      if (actual[1].length+1 <= 10) {
        return { invalidNumber: true };
      }
    }
  
    return null;
  }

 
  validateUserName(userName : FormControl): ValidationErrors | null{
       let userNameFormat = /^[a-zA-Z0-9]+$/
    if(userName.value != ''){   
    if(!userNameFormat.test(userName.value) )
    {
      return { invalidUserName :true }
    }
  }
    return null;
  }

  validateEmail(email: FormControl): ValidationErrors | null{
    let emailPattern = /^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/;
   if(email.value != ''){
    if (!emailPattern.test(email.value)) {
      return {invalidEmail : true}
    }
   }

    return null;
  }

  validatePassword(password: FormControl): ValidationErrors | null{
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const alphabetRegex = /[a-zA-Z]/;
    const numberRegex = /[0-9]/;

    const hasSpecialChar = specialCharRegex.test(password.value);
    const hasAlphabet = alphabetRegex.test(password.value);
    const hasNumber = numberRegex.test(password.value);
    if (password.value != ''){ 
    if (!hasSpecialChar || !hasAlphabet || !hasNumber) {
      return { 'invalidPasswordFormat': true };
    }
  }
    return null;
  }

  
  confirmPassword(confirmPassword: FormControl) : ValidationErrors | null
  {
    if(this.user != null){
      if(this.user.get('accountDetails.password')?.value != confirmPassword.value)
      {
        return {invalidConfirmPassword : true};
      }
    }

    return null
  }

}  
