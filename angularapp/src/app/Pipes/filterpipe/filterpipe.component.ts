import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
  users: any;
  namesearch: string = '';
  constructor(private _demoService : DemoService) { }

  ngOnInit(): void {
   this._demoService.getUsers().subscribe(res => this.users = res);
  
  }





}
