import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angularapp';
  test:string[] =[]
  constructor(private _demoService: DemoService) {
    this._demoService.myCustomObs.subscribe((res:string) => {
         this.test.push(res)
    }
    )
    
  }

}
