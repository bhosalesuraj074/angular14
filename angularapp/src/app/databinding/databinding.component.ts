import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  firstName: string = "Jack";
  lastName: string = "Sparrow";

  employee = {
    id: '101',
    name: 'jack'
  }
  imageUrl: string = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg';
 
  isDisabled: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  disableButton() {
    this.imageUrl = "https://m.media-amazon.com/images/I/614BHZ5QQBL._AC_UF1000,1000_QL80_.jpg";
    this.isDisabled = true;
  }

  getFullName():string {
    return this.firstName + ' ' + this.lastName;
  }
}
