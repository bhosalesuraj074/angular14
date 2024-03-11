import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemoService } from 'src/app/services/demo.service';

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
  constructor(private _demoService : DemoService) { }
 

  
  OnSubmit(myForm:NgForm){
     console.log('Form Submitted', myForm);
     console.log(
      this._demoService.reverseString('codemind'));
     
  }

}
