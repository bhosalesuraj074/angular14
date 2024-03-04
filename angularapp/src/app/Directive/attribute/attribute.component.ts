import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  colorVal='blue';
  items = [
    {name: 'Item1', status: 'active'},
    {name: 'Item2', status: 'inactive'},
    {name: 'Item3', status: 'active'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
