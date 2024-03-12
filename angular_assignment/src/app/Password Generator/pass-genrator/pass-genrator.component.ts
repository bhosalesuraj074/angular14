import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-genrator',
  templateUrl: './pass-genrator.component.html',
  styleUrls: ['./pass-genrator.component.css']
})
export class PassGenratorComponent implements OnInit {
  password='';
  passLength= 1;
  alphabet :boolean = true;
  num : boolean =false;
  special :boolean =false;
  constructor() { }

  ngOnInit(): void {
    this.genratePasswod();
  }
  genratePasswod(){
    this.password='';
    let str=''
    console.log('genrating password ...');

   
    
    if(this.alphabet){
      str +=  'ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz'
      
    }
    if(this.num){
      str +=  '1234567890';
      
    }
    if (this.special) {
      str +=  '!@#$%^&*(){}[];.,/+=-';
    }

    for (let index = 0; index < this.passLength; index++) {
     
      let index = Math.floor(Math.random()  * str.length)
      this.password += str.charAt(index) 
    }
  }

}
