import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  }
  createReactiveForm() {

    this.myReactiveForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }
  onSubmit(){

    console.log(this.myReactiveForm);
    
  }

}
