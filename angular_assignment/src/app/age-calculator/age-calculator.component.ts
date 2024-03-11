import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnInit {

  birthDate ='';
  nowAge !:number;
  constructor() { }

  ngOnInit(): void {
 
  }
  calculateAge(){
    let today = new Date();
    this.nowAge = today.getFullYear()  - new  Date(this.birthDate).getFullYear();
  
  }

}
