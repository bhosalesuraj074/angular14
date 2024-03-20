import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName: any;
  // inject the utility service
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe(res => {
      console.log('from subject comp 2', res);
      this.userName = res;
    })
  }

  ngOnInit(): void {
  }

  // this function will add the latest value into subject observable
  updateUserName(uname: any) {
    console.log(uname.value);
       
    
       this._utilityService.userName.next(uname.value);
      }

}
