import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() msg :string ='';
  @Input() obj : any ;
  @Output() childMsg = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
    console.log('access in ngOnInit ', this.msg);

    console.log('Student object ', this.obj);
  }

  sendMsg(){
    this.childMsg.emit('Hello From the child');
  }
}
