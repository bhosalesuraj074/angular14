import { Component, OnInit } from '@angular/core';
import { Songs } from '../models/songs';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
 
  songs : Songs[]= [
    {title:'Pehle Bhi Main', singer: 'Vishal Mishra', releaseDate : 2023},
    {title:'Yunhi Kat Jayega Safar', singer:'kumar sanu', releaseDate: 1993},
    {title:'Zinda ', singer:'Siddharth Mahadevan', releaseDate:2013}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
