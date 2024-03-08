import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myReactiveForm !:FormGroup;
  constructor() {
    this.createReactiveForm();
   }

  ngOnInit(): void {
    // this.myReactiveForm.setValue({
    //   'email': 'jalndhar@gmail.com',
    //   'password': '1234567'
    // });

    this.myReactiveForm.patchValue({
      'email': 'virbhdra@gmail.com'
    })
  }
  createReactiveForm() {

    this.myReactiveForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(50), this.EmailNotAllowed]),
      'password': new FormControl('', [Validators.required])
    })
  }
  onSubmit(){
    console.log(this.myReactiveForm);
  }
   
  // custom validator function 

  EmailNotAllowed(control: FormControl) : ValidationErrors | null {
    const emailNotAllowed = ['codemind@gmail.com', 'jack@gmail.com'];
    const value = control.value as string;
    if (emailNotAllowed.indexOf(value) !== -1) {
      return {'emailNotAllowed': true};
    }
    return null
  }
}
