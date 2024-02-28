import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() msg :string ='';
  @Input() obj : any ;
  constructor() { }
  
  ngOnInit(): void {
    console.log('access in ngOnInit ', this.msg);

    console.log('Student object ', this.obj);
  }

}
