import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-genrator',
  templateUrl: './pass-genrator.component.html',
  styleUrls: ['./pass-genrator.component.css']
})
export class PassGenratorComponent implements OnInit {
  passLength='';
  constructor() { }

  ngOnInit(): void {
  }

}
