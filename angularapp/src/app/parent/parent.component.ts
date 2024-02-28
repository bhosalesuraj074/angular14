import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMsg = 'Hello from parent';
  studentobj = { name: 'Suraj', 
              mob: 1234567890 
            }
  constructor() { }


  ngOnInit(): void {
  }
  msgFromChild(childMsg:string){
    console.log('message from the child', childMsg);
    
  }

}
