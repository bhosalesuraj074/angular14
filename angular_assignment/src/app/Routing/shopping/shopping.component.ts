import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private _shopping: ShoppingService) { }
  login !: any;
  ngOnInit(): void {
    this.login =  localStorage.getItem('username');
    console.log('log',this.login);
    
  }
  
  isDropdownOpen: boolean = false;

  handleMouseEnter() {
    this.isDropdownOpen = true;
  }

  handleMouseLeave() {
    this.isDropdownOpen = false;
  }

  logout(){
    this._shopping.logOut();
  }
}
