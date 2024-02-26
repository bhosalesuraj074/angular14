import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  userName:string ='Suraj';
  isDisable:boolean  = this.userName.length <= 0 ? false : true; 
  constructor() { }

  ngOnInit(): void {
  }
   
  resetName(){
    this.userName='';
  }
}
