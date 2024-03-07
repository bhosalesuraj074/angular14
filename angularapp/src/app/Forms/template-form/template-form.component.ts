import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent  {
  defaultCourse='Angular';
  defaultGender: any = 'Female';
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ]
  constructor() { }
 

  
  OnSubmit(myForm:NgForm){
     console.log('Form Submitted', myForm);
     
  }

}
